/*!
 * supabase-shim.js — MS Gradation ERP
 * ─────────────────────────────────────────────────────────────────
 * Ye file Supabase JS client (supabase-js CDN) ki jagah leti hai.
 * app.js ko BILKUL BHI badalne ki zaroorat nahi — jo bhi
 *    supabaseClient.from("table").select()....
 *    supabaseClient.storage.from("documents").upload()...
 * calls hain, wo sab yahin se serve hongi, seedha tumhare
 * Cloudflare Worker (D1-backed) ko hit karke.
 *
 * SETUP (ek hi baar):
 * 1) index.html mein Supabase CDN <script> tag HATA do:
 *      <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
 *    Uski jagah is file ko load karo, app.js SE PEHLE:
 *      <script src="supabase-shim.js"></script>
 *      <script src="app.js"></script>
 * 2) app.js mein kuch badalna NAHI hai — SUPABASE_URL/KEY wahi rehne do,
 *    window.supabase.createClient(...) yahin se resolve ho jayega.
 * ─────────────────────────────────────────────────────────────────
 */
(function () {
  "use strict";

  // ── Apna Worker URL yahan (last slash ke bina) ──
  var WORKER_URL = "https://ms-gradation-api.devrai1782.workers.dev";

  // ── Storage: upload() ke baad getPublicUrl() isi cache se read karta hai ──
  var _uploadedUrlCache = {};

  function buildQS(params) {
    var parts = [];
    Object.keys(params).forEach(function (k) {
      if (params[k] === undefined || params[k] === null) return;
      parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(params[k]));
    });
    return parts.length ? "?" + parts.join("&") : "";
  }

  async function _fetchJson(path, opts) {
    opts = opts || {};
    var headers = Object.assign({ "Content-Type": "application/json" }, opts.headers || {});
    var res;
    try {
      res = await fetch(WORKER_URL + path, {
        method: opts.method || "GET",
        headers: headers,
        body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined
      });
    } catch (netErr) {
      return { data: null, error: { message: "Network error: " + netErr.message } };
    }
    if (res.status === 204) return { data: null, error: null };
    var text = await res.text();
    var parsed = null;
    try { parsed = text ? JSON.parse(text) : null; } catch (e) { parsed = text; }
    if (!res.ok) {
      var msg = (parsed && parsed.error) ? parsed.error : ("HTTP " + res.status);
      return { data: null, error: { message: msg } };
    }
    return { data: parsed, error: null };
  }

  // ── Chainable query-builder — mimics the subset of supabase-js used in app.js ──
  function makeQueryBuilder(table) {
    var state = {
      table: table,
      action: "select",
      filters: {},       // { col: val }  → translated to `col=eq.val`
      jsonFilter: null,  // { path, op, val } → only "data->>field3" style used
      range: null,       // [from, to]
      isMaybeSingle: false,
      isSingle: false,
      isNeqAll: false,
      payload: null
    };

    var builder = {
      select: function (_cols) { return builder; }, // column list ignored — Worker always returns full row shape
      eq: function (col, val) { state.filters[col] = val; return builder; },
      neq: function (col, val) {
        // Only used in app.js as delete().neq("unique_id","") → "delete ALL rows" pattern
        if (val === "" || val === null || val === undefined) state.isNeqAll = true;
        return builder;
      },
      filter: function (path, op, val) { state.jsonFilter = { path: path, op: op, val: val }; return builder; },
      range: function (from, to) { state.range = [from, to]; return builder; },
      limit: function (_n) { return builder; }, // Worker's json-field query already does LIMIT 1 server-side
      maybeSingle: function () { state.isMaybeSingle = true; return builder; },
      single: function () { state.isSingle = true; return builder; },
      upsert: function (payload, _opts) { state.action = "upsert"; state.payload = payload; return builder; },
      update: function (payload) { state.action = "update"; state.payload = payload; return builder; },
      delete: function () { state.action = "delete"; return builder; },
      then: function (resolve, reject) {
        _execute(state).then(resolve, reject);
      },
      catch: function (reject) {
        return _execute(state).catch(reject);
      }
    };
    return builder;
  }

  async function _execute(state) {
    var t = state.table;

    // ═══════════ gradation_list ═══════════
    if (t === "gradation_list") {
      if (state.action === "select") {
        var qp = {};
        if (state.filters.unique_id !== undefined) qp.unique_id = "eq." + state.filters.unique_id;
        if (state.jsonFilter && state.jsonFilter.path === "data->>field3") {
          qp["data->>field3"] = state.jsonFilter.op + "." + state.jsonFilter.val;
        }
        if (state.range) { qp.from = state.range[0]; qp.to = state.range[1]; }
        var r = await _fetchJson("/gradation_list" + buildQS(qp), { method: "GET" });
        if (r.error) return r;
        var arr = Array.isArray(r.data) ? r.data : [];
        if (state.isMaybeSingle || state.isSingle) return { data: arr.length ? arr[0] : null, error: null };
        return { data: arr, error: null };
      }
      if (state.action === "upsert") {
        return _fetchJson("/gradation_list", {
          method: "POST",
          body: state.payload,
          headers: { Prefer: "return=minimal" }
        });
      }
      if (state.action === "update") {
        if (state.filters.unique_id === undefined) return { data: null, error: { message: "update() needs .eq('unique_id', ...)" } };
        return _fetchJson("/gradation_list" + buildQS({ unique_id: "eq." + state.filters.unique_id }), {
          method: "PATCH",
          body: state.payload
        });
      }
      if (state.action === "delete") {
        if (state.filters.unique_id !== undefined) {
          return _fetchJson("/gradation_list" + buildQS({ unique_id: "eq." + state.filters.unique_id }), { method: "DELETE" });
        }
        if (state.isNeqAll) {
          return _fetchJson("/gradation_list", { method: "DELETE" }); // matches Worker's "no uid → delete all"
        }
        return { data: null, error: { message: "delete() needs .eq('unique_id', ...) or .neq('unique_id','')" } };
      }
    }

    // ═══════════ users ═══════════
    if (t === "users") {
      if (state.action === "select") {
        if (state.filters.userid !== undefined) {
          var qp2 = { userid: "eq." + state.filters.userid };
          var r2 = await _fetchJson("/users" + buildQS(qp2), { method: "GET" });
          if (r2.error) return r2;
          // Worker returns a single object (or null) directly for keyed GET
          return { data: r2.data || null, error: null };
        }
        // No filter — full list
        var r3 = await _fetchJson("/users", { method: "GET" });
        if (r3.error) return r3;
        return { data: Array.isArray(r3.data) ? r3.data : [], error: null };
      }
      if (state.action === "upsert") {
        return _fetchJson("/users", { method: "POST", body: state.payload, headers: { Prefer: "return=minimal" } });
      }
      if (state.action === "update") {
        if (state.filters.userid === undefined) return { data: null, error: { message: "update() needs .eq('userid', ...)" } };
        return _fetchJson("/users" + buildQS({ userid: "eq." + state.filters.userid }), { method: "PATCH", body: state.payload });
      }
      if (state.action === "delete") {
        if (state.filters.userid === undefined) return { data: null, error: { message: "delete() needs .eq('userid', ...)" } };
        return _fetchJson("/users" + buildQS({ userid: "eq." + state.filters.userid }), { method: "DELETE" });
      }
    }

    // ═══════════ user_passwords ═══════════
    if (t === "user_passwords") {
      if (state.action === "select") {
        var r4 = await _fetchJson("/user_passwords", { method: "GET" });
        if (r4.error) return r4;
        return { data: Array.isArray(r4.data) ? r4.data : [], error: null };
      }
      if (state.action === "upsert") {
        return _fetchJson("/user_passwords", { method: "POST", body: state.payload, headers: { Prefer: "return=minimal" } });
      }
    }

    return { data: null, error: { message: "supabase-shim: unhandled table/action → " + t + "/" + state.action } };
  }

  // ── Storage shim ──
  function makeStorageBuilder(_bucket) {
    return {
      upload: async function (path, file, _opts) {
        try {
          var fd = new FormData();
          fd.append("file", file);
          var res = await fetch(WORKER_URL + "/upload", { method: "POST", body: fd });
          var txt = await res.text();
          var parsed = null;
          try { parsed = txt ? JSON.parse(txt) : null; } catch (e) { parsed = null; }
          if (!res.ok || !parsed || !parsed.url) {
            var msg = (parsed && parsed.error) ? parsed.error : ("Upload failed (HTTP " + res.status + ")");
            return { data: null, error: { message: msg } };
          }
          _uploadedUrlCache[path] = parsed.url;
          return { data: { path: path }, error: null };
        } catch (netErr) {
          return { data: null, error: { message: "Upload network error: " + netErr.message } };
        }
      },
      getPublicUrl: function (path) {
        return { data: { publicUrl: _uploadedUrlCache[path] || "" } };
      }
    };
  }

  // ── Realtime shim via REAL WebSocket (uses your Worker's existing
  // MSGradationRoom Durable Object at /realtime — no polling needed) ──
  // app.js calls supabaseClient.channel("ms-gradation-collab", {...}).on(...).subscribe(...)
  // .track({user, district, onlineAt}) for the "Online Users" bar, and
  // .send({type:"broadcast", event, payload}) for row-locking / live updates.
  // This shim translates all of that into the WebSocket protocol your
  // Worker's Durable Object already speaks:
  //   client → server: {event:"row-locked"|"row-unlocked"|"data-update"|"title-update"|"ping", payload}
  //   server → client: {event:"presence-sync", payload:{state}}
  //                     {event:"presence-join"|"presence-leave", payload:{user,district,onlineAt}}
  //                     {event:"row-locked"|"row-unlocked"|"data-update"|"title-update", payload}
  //                     {event:"pong"}
  var WS_URL = WORKER_URL.replace(/^http/i, "ws") + "/realtime";
  var WS_PING_MS = 25000;
  var WS_RECONNECT_MS = 4000;

  function makeChannelStub(_channelName) {
    var handlers = {}; // keyed by "presence:sync" / "presence:join" / "presence:leave" / "broadcast:<event>"
    var lastPresenceState = {};
    var ws = null;
    var pingTimer = null;
    var reconnectTimer = null;
    var myTrackPayload = null;
    var closedByUs = false;

    function key(kind, evt) { return kind + ":" + evt; }

    var self = {
      on: function (kind, filter, cb) {
        var evt = filter && filter.event;
        if (kind === "presence") handlers[key("presence", evt)] = cb;
        else if (kind === "broadcast") handlers[key("broadcast", evt)] = cb;
        return self;
      },
      subscribe: function (statusCb) {
        // Actual WS connection opens in track() once we know user/district
        // (the Durable Object needs them as query params to register the session).
        if (typeof statusCb === "function") {
          setTimeout(function () { try { statusCb("SUBSCRIBED"); } catch (e) {} }, 0);
        }
        return self;
      },
      track: async function (payload) {
        myTrackPayload = payload || {};
        closedByUs = false;
        _connect();
        return { data: null, error: null };
      },
      untrack: async function () {
        closedByUs = true;
        _teardown();
        return { data: null, error: null };
      },
      send: async function (msg) {
        if (ws && ws.readyState === 1 && msg) {
          try { ws.send(JSON.stringify({ event: msg.event, payload: msg.payload })); } catch (e) {}
        }
        return { data: null, error: null };
      },
      presenceState: function () { return lastPresenceState; }
    };

    function _connect() {
      if (!myTrackPayload || !myTrackPayload.user) return;
      if (ws && (ws.readyState === 0 || ws.readyState === 1)) return; // already connecting/open
      var qs = "?user=" + encodeURIComponent(myTrackPayload.user) +
               "&district=" + encodeURIComponent(myTrackPayload.district || "");
      try {
        ws = new WebSocket(WS_URL + qs);
      } catch (e) {
        _scheduleReconnect();
        return;
      }

      ws.addEventListener("open", function () {
        if (pingTimer) clearInterval(pingTimer);
        pingTimer = setInterval(function () {
          if (ws && ws.readyState === 1) {
            try { ws.send(JSON.stringify({ event: "ping" })); } catch (e) {}
          }
        }, WS_PING_MS);
      });

      ws.addEventListener("message", function (msgEvt) {
        var msg;
        try { msg = JSON.parse(msgEvt.data); } catch (e) { return; }
        var evt = msg.event, payload = msg.payload;

        if (evt === "presence-sync") {
          lastPresenceState = (payload && payload.state) || {};
          var cb = handlers[key("presence", "sync")];
          if (cb) { try { cb(); } catch (e) {} }
        } else if (evt === "presence-join") {
          if (payload && payload.user) {
            lastPresenceState[payload.user] = [{ user: payload.user, district: payload.district, onlineAt: payload.onlineAt }];
          }
          var cbj = handlers[key("presence", "join")];
          if (cbj && payload) {
            try { cbj({ key: payload.user, newPresences: [payload] }); } catch (e) {}
          }
        } else if (evt === "presence-leave") {
          if (payload && payload.user) delete lastPresenceState[payload.user];
          var cbl = handlers[key("presence", "leave")];
          if (cbl && payload) {
            try { cbl({ key: payload.user }); } catch (e) {}
          }
        } else if (evt === "row-locked" || evt === "row-unlocked" || evt === "data-update" || evt === "title-update") {
          var cbb = handlers[key("broadcast", evt)];
          if (cbb) { try { cbb({ payload: payload }); } catch (e) {} }
        }
        // "pong" → ignored, just keeps connection alive
      });

      ws.addEventListener("close", function () {
        if (pingTimer) { clearInterval(pingTimer); pingTimer = null; }
        if (!closedByUs) _scheduleReconnect();
      });

      ws.addEventListener("error", function () {
        try { ws.close(); } catch (e) {}
      });
    }

    function _scheduleReconnect() {
      if (reconnectTimer) return;
      reconnectTimer = setTimeout(function () {
        reconnectTimer = null;
        if (!closedByUs) _connect();
      }, WS_RECONNECT_MS);
    }

    function _teardown() {
      if (pingTimer) { clearInterval(pingTimer); pingTimer = null; }
      if (reconnectTimer) { clearTimeout(reconnectTimer); reconnectTimer = null; }
      if (ws) { try { ws.close(); } catch (e) {} ws = null; }
    }

    self._teardown = _teardown; // used by removeChannel()
    return self;
  }

  // ── Drop-in replacement for `window.supabase.createClient(url, key)` ──
  window.supabase = {
    createClient: function (_url, _key) {
      return {
        from: function (table) { return makeQueryBuilder(table); },
        storage: {
          from: function (bucket) { return makeStorageBuilder(bucket); }
        },
        channel: function (name, opts) { return makeChannelStub(name); },
        removeChannel: function (ch) { if (ch && ch._teardown) ch._teardown(); }
      };
    }
  };

  // ── app.js ke kuch functions (erp_settings, ms_user_overrides, pw_reset_log,
  // ms_maintenance) supabaseClient.from() use nahi karte — seedha raw fetch()
  // se window._SB_URL + "/table?..." hit karte hain (PostgREST-style query
  // strings, jaise ?key=eq.X, ?user_id=neq.NONE). In sab ke exact field-names
  // Worker ke saath already match karte hain (Worker isi liye banaya gaya tha),
  // isliye bas _SB_URL/_SB_HDR ko Worker ki taraf point kar dena kaafi hai —
  // in functions ko chhedne ki zaroorat nahi. app.js in globals ko IIFE ke
  // andar set karta hai jab wo load hota hai, isliye humein load hone ke
  // TURANT BAAD (agla microtask/tick) override karna hoga.
  function _patchRawSbGlobals() {
    if (window._SB_URL && window._SB_URL.indexOf(WORKER_URL) !== 0) {
      window._SB_URL = WORKER_URL;
      window._SB_HDR = { "Content-Type": "application/json" }; // Worker ko apikey/Authorization nahi chahiye
      console.log("[supabase-shim] _SB_URL patched → Worker (erp_settings / ms_user_overrides / pw_reset_log / ms_maintenance)");
    }
  }
  // app.js load hote hi turant set karta hai — hum thoda baad check karte hain
  var _patchTries = 0;
  var _patchInterval = setInterval(function () {
    _patchTries++;
    if (window._SB_URL !== undefined) { _patchRawSbGlobals(); clearInterval(_patchInterval); }
    if (_patchTries > 100) clearInterval(_patchInterval); // ~10s safety cutoff
  }, 100);

  // NOTE: ms_maintenance feature (DPI maintenance banner) — Worker ke D1
  // schema mein `start_time`/`end_time` column nahi hai (sirf `target` /
  // `countdown_end` hai), jabki app.js inhi naamon se padhta/likhta hai.
  // Ye login ko affect NAHI karta (alag/optional feature hai), lekin agar
  // maintenance banner feature use karte ho to Worker mein
  // `ALTER TABLE ms_maintenance ADD COLUMN start_time TEXT;`
  // `ALTER TABLE ms_maintenance ADD COLUMN end_time TEXT;`
  // chala ke aur worker.js ke ms_maintenance GET/POST handlers mein
  // start_time/end_time bhi read/write karke isse poora sahi kiya ja sakta hai.

  console.log("[supabase-shim] Active — routing all DB/storage calls through Worker:", WORKER_URL);
})();
