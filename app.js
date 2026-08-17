(function injectDateValidationCSS() {
  const _0x265958 = document.createElement("style");
  _0x265958.id = "date-validation-styles";
  _0x265958.textContent =
    "\n    @keyframes shake-invalid {\n      0%   { transform: translateX(0); }\n      20%  { transform: translateX(-5px); }\n      40%  { transform: translateX(5px); }\n      60%  { transform: translateX(-4px); }\n      80%  { transform: translateX(4px); }\n      100% { transform: translateX(0); }\n    }\n    .invalid-field {\n      border: 2px solid #991b1b !important;\n      background: #fee2e2 !important;\n      color: #7f1d1d !important;\n      box-shadow: 0 0 0 3px rgba(153, 27, 27, 0.28) !important;\n      border-radius: 4px !important;\n      animation: shake-invalid 0.35s ease !important;\n    }\n    .invalid-field:focus {\n      background: #fecaca !important;\n      box-shadow: 0 0 0 3px rgba(153, 27, 27, 0.40) !important;\n    }\n    /* probOrderDate has inline styles set in HTML — override them too */\n    #probOrderDate.invalid-field {\n      border: 2px solid #991b1b !important;\n      background: #fee2e2 !important;\n      color: #7f1d1d !important;\n      box-shadow: 0 0 0 3px rgba(153, 27, 27, 0.28) !important;\n    }\n  ";
  document.head.appendChild(_0x265958);
})();
(function () {
  "use strict";

  document.addEventListener(
    "contextmenu",
    function (_0x181ebe) {
      _0x181ebe.preventDefault();
      _0x181ebe.stopPropagation();
      return false;
    },
    true,
  );
  document.addEventListener(
    "keydown",
    function (_0x1be532) {
      var _0x25f8c8 = _0x1be532.key || "";
      var _0x444b10 = _0x1be532.ctrlKey || _0x1be532.metaKey;
      var _0x270cf3 = _0x1be532.shiftKey;
      if (_0x25f8c8 === "F12") {
        _0x1be532.preventDefault();
        return false;
      }
      if (_0x444b10 && _0x270cf3 && (_0x25f8c8 === "I" || _0x25f8c8 === "i")) {
        _0x1be532.preventDefault();
        return false;
      }
      if (_0x444b10 && _0x270cf3 && (_0x25f8c8 === "J" || _0x25f8c8 === "j")) {
        _0x1be532.preventDefault();
        return false;
      }
      if (_0x444b10 && _0x270cf3 && (_0x25f8c8 === "C" || _0x25f8c8 === "c")) {
        _0x1be532.preventDefault();
        return false;
      }
      if (_0x444b10 && _0x270cf3 && (_0x25f8c8 === "K" || _0x25f8c8 === "k")) {
        _0x1be532.preventDefault();
        return false;
      }
      if (_0x444b10 && _0x270cf3 && (_0x25f8c8 === "E" || _0x25f8c8 === "e")) {
        _0x1be532.preventDefault();
        return false;
      }
      if (_0x444b10 && (_0x25f8c8 === "U" || _0x25f8c8 === "u")) {
        _0x1be532.preventDefault();
        return false;
      }
      if (_0x444b10 && (_0x25f8c8 === "S" || _0x25f8c8 === "s")) {
        _0x1be532.preventDefault();
        return false;
      }
      if (_0x444b10 && (_0x25f8c8 === "A" || _0x25f8c8 === "a")) {
        _0x1be532.preventDefault();
        return false;
      }
      if (_0x444b10 && (_0x25f8c8 === "C" || _0x25f8c8 === "c")) {
        var _0x255929 = (document.activeElement || {}).tagName || "";
        if (
          _0x255929 !== "INPUT" &&
          _0x255929 !== "TEXTAREA" &&
          _0x255929 !== "SELECT"
        ) {
          _0x1be532.preventDefault();
          return false;
        }
      }
      if (_0x444b10 && (_0x25f8c8 === "P" || _0x25f8c8 === "p")) {
        _0x1be532.preventDefault();
        return false;
      }
    },
    true,
  );
  document.addEventListener(
    "selectstart",
    function (_0x48a124) {
      var _0x4b14a3 = (_0x48a124.target || {}).tagName || "";
      if (_0x4b14a3 !== "INPUT" && _0x4b14a3 !== "TEXTAREA") {
        _0x48a124.preventDefault();
        return false;
      }
    },
    true,
  );
  document.addEventListener(
    "dragstart",
    function (_0x13ad42) {
      _0x13ad42.preventDefault();
      return false;
    },
    true,
  );
  (function () {
    var _0x59cd7c = 160;
    var _0x51f434 = false;
    function _0x59453f() {
      var _0x49f5f6 = window.outerWidth - window.innerWidth;
      var _0x1ef71a = window.outerHeight - window.innerHeight;
      if (_0x49f5f6 > _0x59cd7c || _0x1ef71a > _0x59cd7c) {
        if (!_0x51f434) {
          _0x51f434 = true;
          document.body.innerHTML =
            '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#1a1a2e;color:#e02424;font-family:sans-serif;text-align:center;flex-direction:column;"><div style="font-size:60px;">⛔</div><h1 style="font-size:28px;margin:16px 0 8px;">Access Denied</h1><p style="font-size:15px;color:#f0a500;">Developer Tools खोलना इस application में प्रतिबंधित है।<br>© 2026 DPI Madhya Pradesh</p></div>';
        }
      } else {
        _0x51f434 = false;
      }
    }
    setInterval(_0x59453f, 1000);
  })();
  setTimeout(function () {
    try {
      console.clear();
      console.log(
        "%c⛔ STOP!",
        "color:#e02424;font-size:48px;font-weight:900;",
      );
      console.log(
        "%cयह browser feature केवल developers के लिए है।\nMS Gradation ERP का code copy करना या inspect करना\nकानूनी अपराध है। © 2026 DPI Madhya Pradesh",
        "color:#f0a500;font-size:14px;font-weight:700;line-height:2;",
      );
    } catch (_0x4647a0) {}
  }, 500);
  window.addEventListener("beforeprint", function (_0x5273c1) {
    _0x5273c1.preventDefault();
    _0x5273c1.stopImmediatePropagation();
    return false;
  });
  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }
})();
function printEmployeeRecord() {
  function _0x4e0fcc(_0x1b6eb6) {
    var _0x43aea2 = document.getElementById(_0x1b6eb6);
    if (!_0x43aea2) {
      return "—";
    }
    var _0xa68438 = (_0x43aea2.value || "").trim();
    return _0xa68438 || "—";
  }
  function _0x5432a7(_0x399693) {
    var _0x29d2fa = document.getElementById(_0x399693);
    if (!_0x29d2fa || !_0x29d2fa.value) {
      return "—";
    }
    var _0x4d3858 = _0x29d2fa.value.trim();
    if (!_0x4d3858 || _0x4d3858 === "—") {
      return "—";
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(_0x4d3858)) {
      var _0x5ca817 = _0x4d3858.split("-");
      return _0x5ca817[2] + "-" + _0x5ca817[1] + "-" + _0x5ca817[0];
    }
    return _0x4d3858;
  }
  var _0x300894 = document.getElementById("probYes");
  var _0x23a859 = _0x300894 && _0x300894.checked ? "हाँ (आदेश जारी)" : "नहीं";
  var _0x194013 = _0x4e0fcc("probOrderNo");
  var _0xdff99e = _0x5432a7("probOrderDate");
  var _0x124f3b = _0x4e0fcc("in19mode") === "NIL" ? "NIL" : _0x5432a7("in19");
  var _0x42cc54 = new Date();
  var _0x593545 = _0x42cc54.toLocaleString("hi-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  var _0x4185f1 = _0x4e0fcc("in4");
  var _0x55b386 = _0x4e0fcc("in3");
  var _0x443329 = _0x4e0fcc("in2");
  var _0x17a803 = _0x4e0fcc("in1");
  var _0x4a74e1 =
    _0x4e0fcc("in6") === "M"
      ? "पुरुष (M)"
      : _0x4e0fcc("in6") === "F"
        ? "महिला (F)"
        : "—";
  var _0x1e72a8 =
    _0x4e0fcc("in8") === "DIR"
      ? "Direct (DIR)"
      : _0x4e0fcc("in8") === "PRO"
        ? "Promotion (PRO)"
        : _0x4e0fcc("in8");
  var _0x3c91c8 = "";
  if (
    _0x23a859 === "हाँ (आदेश जारी)" ||
    _0x194013 !== "—" ||
    _0xdff99e !== "—"
  ) {
    _0x3c91c8 =
      '<div class="prob-box"><div class="prob-title">&#x26A0; परीवीक्षा अवधि</div><table style="margin:0;"><tr><td class="lbl">आदेश</td><td class="val">' +
      _0x23a859 +
      '</td><td class="lbl">आदेश क्रमांक</td><td class="val">' +
      _0x194013 +
      '</td></tr><tr><td class="lbl">आदेश दिनांक</td><td class="val" colspan="3">' +
      _0xdff99e +
      "</td></tr></table></div>";
  }
  var _0x5f3403 =
    "*{margin:0;padding:0;box-sizing:border-box;}body{font-family:Arial,sans-serif;font-size:10px;color:#000;background:#fff;}.page{width:210mm;min-height:297mm;margin:0 auto;padding:10mm 12mm 8mm 12mm;}.header{text-align:center;border-bottom:2px solid #000;padding-bottom:6px;margin-bottom:8px;}.t1{font-size:14px;font-weight:900;text-transform:uppercase;letter-spacing:1px;}.t2{font-size:10px;font-weight:600;margin-top:2px;}.t3{font-size:9px;color:#333;margin-top:3px;}.emp-banner{border:1.5px solid #000;padding:5px 10px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;background:#f2f2f2;}.emp-name{font-size:13px;font-weight:800;text-transform:uppercase;}.emp-ids{font-size:10px;font-weight:600;text-align:right;line-height:1.7;}.sec{background:#ddd;border:1px solid #000;padding:3px 8px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:0;}table{width:100%;border-collapse:collapse;margin-bottom:6px;}td{border:1px solid #999;padding:3px 6px;vertical-align:middle;line-height:1.4;}td.lbl{width:38%;font-weight:700;font-size:9px;background:#fafafa;text-transform:uppercase;}td.lbl .fn{display:inline-block;background:#555;color:#fff;font-size:8px;font-weight:800;padding:1px 4px;border-radius:2px;margin-right:4px;min-width:14px;text-align:center;}td.val{font-size:10px;font-weight:600;color:#000;}.two-col{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;}.two-col table{margin-bottom:0;}.prob-box{border:1.5px dashed #555;padding:5px 8px;margin-bottom:6px;background:#fafafa;}.prob-title{font-size:9px;font-weight:800;margin-bottom:4px;text-transform:uppercase;}.footer{border-top:1.5px solid #000;margin-top:10px;padding-top:5px;display:flex;justify-content:space-between;align-items:flex-end;font-size:8.5px;}.wm{font-size:8px;color:#777;font-style:italic;}.signbox{text-align:center;font-size:9px;font-weight:700;}.signline{width:120px;border-bottom:1px solid #000;margin:18px auto 3px auto;}.badge{display:inline-block;border:1px solid #000;padding:1px 6px;font-size:9px;font-weight:700;border-radius:2px;}.pbar{text-align:center;padding:12px;background:#f5f5f5;border-bottom:1px solid #ccc;margin-bottom:10px;}.pbar button{padding:8px 24px;font-size:13px;font-weight:700;background:#222;color:#fff;border:none;border-radius:4px;cursor:pointer;margin:0 5px;}.pbar button:hover{background:#444;}@media print{body{margin:0;}.page{width:100%;padding:8mm 10mm;margin:0;}.pbar{display:none!important;}@page{size:A4;margin:0;}}";
  var _0x538f3c =
    '<!DOCTYPE html><html lang="hi"><head><meta charset="UTF-8"><title>' +
    _0x4185f1 +
    " (" +
    _0x55b386 +
    ")</title><style>" +
    _0x5f3403 +
    '</style></head><body><div class="pbar"><button onclick="window.print()">🖶️ प्रिंट करें</button><button onclick="window.close()">✕ बंद करें</button></div><div class="page"><div class="header"><div class="t1">लोक शिक्षण संचालनालय, मध्यप्रदेश</div><div class="t2">MS संवर्ग वरीयता सूची 01/04/2026 — लोक सेवक विवरण पत्र</div><div class="t3">मुद्रण दिनांक: ' +
    _0x593545 +
    '</div></div><div class="emp-banner"><div class="emp-name">' +
    (_0x4185f1 !== "—" ? _0x4185f1 : "नाम उपलब्ध नहीं") +
    '</div><div class="emp-ids">Unique ID: <strong>' +
    _0x55b386 +
    "</strong><br>G.N.: <strong>" +
    _0x443329 +
    "</strong><br>S.No.: <strong>" +
    _0x17a803 +
    '</strong></div></div><div class="sec">&#9312; व्यक्तिगत एवं शैक्षणिक जानकारी</div><div class="two-col"><table><tr><td class="lbl"><span class="fn">5</span>वर्ग</td><td class="val">' +
    _0x4e0fcc("in5") +
    '</td></tr><tr><td class="lbl"><span class="fn">6</span>लिंग</td><td class="val">' +
    _0x4a74e1 +
    '</td></tr><tr><td class="lbl"><span class="fn">7</span>जन्म तिथि</td><td class="val">' +
    _0x5432a7("in7") +
    '</td></tr><tr><td class="lbl"><span class="fn">R</span>सेवानिवृत्ति (62Y)</td><td class="val">' +
    _0x4e0fcc("retirementField") +
    '</td></tr><tr><td class="lbl"><span class="fn">13</span>गृह जिला</td><td class="val">' +
    _0x4e0fcc("in13") +
    '</td></tr></table><table><tr><td class="lbl"><span class="fn">8</span>नियुक्ति तरीका</td><td class="val">' +
    _0x1e72a8 +
    '</td></tr><tr><td class="lbl"><span class="fn">9</span>UG विषय</td><td class="val">' +
    _0x4e0fcc("in9") +
    '</td></tr><tr><td class="lbl"><span class="fn">10</span>व्यावसायिक योग्यता</td><td class="val">' +
    _0x4e0fcc("in10") +
    '</td></tr><tr><td class="lbl"><span class="fn">11</span>PG योग्यता</td><td class="val">' +
    _0x4e0fcc("in11") +
    '</td></tr><tr><td class="lbl"><span class="fn">12</span>PG विषय</td><td class="val">' +
    _0x4e0fcc("in12") +
    '</td></tr></table></div><div class="sec">&#9313; नियुक्ति एवं पदोन्नति विवरण</div><table style="margin-bottom:6px;"><tr><td class="lbl"><span class="fn">14</span>प्रथम नियुक्ति तिथि</td><td class="val">' +
    _0x5432a7("in14") +
    '</td><td class="lbl"><span class="fn">15</span>प्रथम नियुक्ति पद</td><td class="val">' +
    _0x4e0fcc("in15") +
    '</td></tr><tr><td class="lbl"><span class="fn">16</span>अध्यापक प्रोन्नति तिथि</td><td class="val">' +
    _0x5432a7("in16") +
    '</td><td class="lbl"><span class="fn">17</span>वर्तमान संवर्ग तिथि</td><td class="val">' +
    _0x5432a7("in17") +
    '</td></tr><tr><td class="lbl"><span class="fn">18</span>वरिष्ठता तिथि</td><td class="val">' +
    _0x5432a7("in18") +
    '</td><td class="lbl"><span class="fn">19</span>अंतर संभाग स्थानांतरण</td><td class="val">' +
    _0x124f3b +
    "</td></tr></table>" +
    _0x3c91c8 +
    '<div class="sec">&#9314; वर्तमान पदस्थापना</div><table style="margin-bottom:6px;"><tr><td class="lbl"><span class="fn">20</span>वर्तमान शाला</td><td class="val">' +
    _0x4e0fcc("in20") +
    '</td><td class="lbl"><span class="fn">21</span>UDISE कोड</td><td class="val">' +
    _0x4e0fcc("in21") +
    '</td></tr><tr><td class="lbl"><span class="fn">22</span>पदस्थापना जिला</td><td class="val" colspan="3">' +
    _0x4e0fcc("in22") +
    '</td></tr></table><div class="sec">&#9315; उच्च पद प्रभार</div><table style="margin-bottom:6px;"><tr><td class="lbl"><span class="fn">23</span>उच्च पद ज्वाइन</td><td class="val"><span class="badge">' +
    _0x4e0fcc("in23") +
    '</span></td><td class="lbl"><span class="fn">26</span>उच्च पद जिला</td><td class="val">' +
    _0x4e0fcc("in26") +
    '</td></tr><tr><td class="lbl"><span class="fn">24</span>शाला नाम</td><td class="val">' +
    _0x4e0fcc("in24") +
    '</td><td class="lbl"><span class="fn">25</span>UDISE कोड</td><td class="val">' +
    _0x4e0fcc("in25") +
    '</td></tr></table><div class="sec">&#9316; टिप्पणी (Remark)</div><table style="margin-bottom:8px;"><tr><td class="lbl" style="width:20%;"><span class="fn">27</span>Remark</td><td class="val" style="font-style:italic;">' +
    _0x4e0fcc("in27") +
    '</td></tr></table><div class="footer"><div><div style="font-weight:700;font-size:9px;">MS संवर्ग वरीयता सूची 01/04/2026</div><div class="wm">© 2026 लोक शिक्षण संचालनालय, म.प्र.</div><div class="wm">मुद्रण: ' +
    _0x593545 +
    " | ID: " +
    _0x55b386 +
    '</div></div><div class="signbox"><div class="signline"></div>अधिकृत हस्ताक्षर<div style="font-size:8px;color:#555;">(Authorised Signature)</div></div></div></div></body></html>';
  var _0x16d3f9 = window.open(
    "",
    "_blank",
    "width=900,height=700,scrollbars=yes",
  );
  if (!_0x16d3f9) {
    var _0x4036ef = new Blob([_0x538f3c], {
      type: "text/html;charset=utf-8",
    });
    window.open(URL.createObjectURL(_0x4036ef), "_blank");
    return;
  }
  _0x16d3f9.document.open();
  _0x16d3f9.document.write(_0x538f3c);
  _0x16d3f9.document.close();
  _0x16d3f9.onload = function () {
    _0x16d3f9.focus();
  };
}
(function () {
  var _0x4b2670 = {};
  function _0x4f4519() {
    try {
      localStorage.setItem("__test__", "1");
      localStorage.removeItem("__test__");
      return localStorage;
    } catch (_0x385554) {
      return null;
    }
  }
  var _0x367ead = _0x4f4519();
  window._safeStorage = {
    getItem: function (_0x539952) {
      if (_0x367ead) {
        try {
          return _0x367ead.getItem(_0x539952);
        } catch (_0x476af5) {}
      }
      if (_0x4b2670[_0x539952] !== undefined) {
        return _0x4b2670[_0x539952];
      } else {
        return null;
      }
    },
    setItem: function (_0x15aff3, _0x3b2f19) {
      if (_0x367ead) {
        try {
          _0x367ead.setItem(_0x15aff3, _0x3b2f19);
        } catch (_0x30b56b) {}
      }
      _0x4b2670[_0x15aff3] = _0x3b2f19;
    },
    removeItem: function (_0x19d7e9) {
      if (_0x367ead) {
        try {
          _0x367ead.removeItem(_0x19d7e9);
        } catch (_0x364dc6) {}
      }
      delete _0x4b2670[_0x19d7e9];
    },
  };
  if (!_0x367ead) {
    console.warn(
      "⚠️ localStorage blocked (Edge Tracking Prevention). Using in-memory fallback.",
    );
    try {
      Object.defineProperty(window, "localStorage", {
        get: function () {
          return window._safeStorage;
        },
      });
    } catch (_0x536b63) {}
  }
  // FIX (was dead Supabase project dgzdessdyrxhsbjxeahi, hardcoded, bypassed
  // the shim entirely because these were closure-local consts, not
  // window._SB_URL). Now points straight at the Worker, matching how
  // supabase-shim.js talks to it — no apikey/Authorization needed.
  const _0x6a744 = "https://ms-gradation-api.devrai1782.workers.dev";
  const _0x527ade = {
    "Content-Type": "application/json",
  };
  async function _0x2d28e1(_0x8a66e1) {
    try {
      const _0x31d408 = await fetch(
        _0x6a744 +
          "/erp_settings?key=eq." +
          encodeURIComponent(_0x8a66e1) +
          "&select=value",
        {
          headers: _0x527ade,
        },
      );
      const _0x442382 = await _0x31d408.json();
      if (_0x442382 && _0x442382[0]) {
        return _0x442382[0].value;
      } else {
        return null;
      }
    } catch (_0x1c719a) {
      return null;
    }
  }
  async function _0x1a79a6(_0x56620e, _0x3b8c36) {
    try {
      await fetch(_0x6a744 + "/erp_settings", {
        method: "POST",
        headers: {
          ..._0x527ade,
          Prefer: "resolution=merge-duplicates,return=minimal",
        },
        body: JSON.stringify({
          key: _0x56620e,
          value: _0x3b8c36,
        }),
      });
    } catch (_0x2a036c) {
      console.error("_sbSetSetting error:", _0x2a036c);
    }
  }
  async function _0xb0dc28() {
    try {
      const _0x42811e = await fetch(
        _0x6a744 +
          "/ms_user_overrides?select=user_id,start_date,end_date,closed",
        {
          headers: _0x527ade,
        },
      );
      const _0x25109f = await _0x42811e.json();
      const _0x566729 = {};
      if (Array.isArray(_0x25109f)) {
        _0x25109f.forEach((_0x10c21a) => {
          _0x566729[_0x10c21a.user_id] = {
            start: _0x10c21a.start_date,
            end: _0x10c21a.end_date,
            closed: _0x10c21a.closed || false,
          };
        });
      }
      return _0x566729;
    } catch (_0x555058) {
      return {};
    }
  }
  async function _0x1a8aae(_0x105d4a, _0x1933b2, _0x474139, _0x347641) {
    try {
      await fetch(_0x6a744 + "/ms_user_overrides", {
        method: "POST",
        headers: {
          ..._0x527ade,
          Prefer: "resolution=merge-duplicates,return=minimal",
        },
        body: JSON.stringify({
          user_id: _0x105d4a,
          start_date: _0x1933b2,
          end_date: _0x474139,
          closed: _0x347641 || false,
        }),
      });
    } catch (_0x47df0f) {
      console.error("_sbSetOverride error:", _0x47df0f);
    }
  }
  async function _0x2338c7() {
    try {
      await fetch(_0x6a744 + "/ms_user_overrides?user_id=neq.NONE", {
        method: "DELETE",
        headers: _0x527ade,
      });
    } catch (_0x1fa54a) {
      console.error("_sbClearOverrides error:", _0x1fa54a);
    }
  }
  async function _0x459963(_0x409f1f, _0x3a8922, _0x2c8382, _0x2b2b8b) {
    try {
      await fetch(_0x6a744 + "/pw_reset_log", {
        method: "POST",
        headers: {
          ..._0x527ade,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          user_id: _0x409f1f,
          old_pass: _0x3a8922,
          new_pass: _0x2c8382,
          reset_by: _0x2b2b8b || window.currentUser || "DPI",
        }),
      });
    } catch (_0x32b53d) {
      console.error("_sbLogPwReset error:", _0x32b53d);
    }
  }
  async function _0x40b2a5() {
    try {
      const _0x22f442 = await fetch(
        _0x6a744 + "/pw_reset_log?select=*&order=created_at.desc",
        {
          headers: _0x527ade,
        },
      );
      return await _0x22f442.json();
    } catch (_0x19fa1a) {
      return [];
    }
  }
  async function _0x3a3a46() {
    try {
      await fetch(_0x6a744 + "/pw_reset_log?id=gt.0", {
        method: "DELETE",
        headers: _0x527ade,
      });
    } catch (_0x4aaab1) {
      console.error("_sbClearPwResetLog error:", _0x4aaab1);
    }
  }
  window._SB_URL = _0x6a744;
  window._SB_HDR = _0x527ade;
  window._sbGetSetting = _0x2d28e1;
  window._sbSetSetting = _0x1a79a6;
  window._sbGetOverrides = _0xb0dc28;
  window._sbSetOverride = _0x1a8aae;
  window._sbClearOverrides = _0x2338c7;
  window._sbLogPwReset = _0x459963;
  window._sbGetPwResetLog = _0x40b2a5;
  window._sbClearPwResetLog = _0x3a3a46;
})();
function openUserManual() {
  var _0x4937ce = document.getElementById("userManualModal");
  _0x4937ce.style.display = "flex";
  _0x4937ce.style.animation = "pa-fade-in 0.25s ease forwards";
  umTab(0);
}
function closeUserManual() {
  document.getElementById("userManualModal").style.display = "none";
}
function umTab(_0x5a307a) {
  var _0x5ce56e = document.querySelectorAll(".um-pane");
  var _0x327b36 = document.querySelectorAll(".um-tab");
  _0x5ce56e.forEach(function (_0x264cd5, _0x95ad68) {
    _0x264cd5.style.display = _0x95ad68 === _0x5a307a ? "block" : "none";
  });
  _0x327b36.forEach(function (_0x41ff07, _0x2fd299) {
    _0x41ff07.style.color = _0x2fd299 === _0x5a307a ? "#1a237e" : "#64748b";
    _0x41ff07.style.borderBottom =
      _0x2fd299 === _0x5a307a ? "3px solid #3b82f6" : "3px solid transparent";
    _0x41ff07.style.fontWeight = _0x2fd299 === _0x5a307a ? "700" : "600";
    _0x41ff07.style.background = _0x2fd299 === _0x5a307a ? "white" : "none";
  });
}
document
  .getElementById("userManualModal")
  .addEventListener("click", function (_0x573b6e) {
    if (_0x573b6e.target === this) {
      closeUserManual();
    }
  });
let historyStore = {};
const fieldNames = {
  field1: "S.No",
  field2: "G.NO",
  field3: "Unique ID",
  field4: "Name",
  field5: "Category",
  field6: "Gender",
  field7: "DOB",
  field8: "Mode of Appointment",
  field9: "UG Subject as per appointment and Promotion",
  field10: "Professional Qualification",
  field11: "PG Qualification",
  field12: "PG Subject",
  field13: "Home District",
  field14: "Date of First Appointment",
  field15: "First appointment Designation",
  field16: "Date of Appointment in Adhyapak by promotion ",
  field17: "Date of Appointment in present cadre",
  field18: "Date of seniority in present cadre",
  field19: "Inter division Transfer Date",
  field20: "Present Posting Place",
  field21: "UDISE Code",
  field22: "Present Posting District",
  field23: "उच्च पद पर ज्वाइन किया (YES OR NO)",
  field24: "उच्च पद प्रभार की शाला का नाम",
  field25: "उच्च पद प्रभार की शाला का UDISE कोड",
  field26: "उच्च पद प्रभार का जिला",
  field27: "Remark",
};
window.alert = function (_0x4b98bd) {
  console.log("Blocked alert:", _0x4b98bd);
};
let keyTimer;
window.addEventListener("keydown", function (_0x6ef019) {
  if (_0x6ef019.key && _0x6ef019.key.toLowerCase() === "a" && !keyTimer) {
    keyTimer = setTimeout(function () {
      const _0x5c2b8a =
        document.getElementById("lockScreen")?.style.display === "flex";
      if (!_0x5c2b8a && window.currentUser !== "DPI") {
        return;
      }
      openDpiPasswordModal();
    }, 2000);
  }
});
window.addEventListener("keyup", function (_0x258620) {
  if (_0x258620.key && _0x258620.key.toLowerCase() === "a") {
    clearTimeout(keyTimer);
    keyTimer = null;
  }
});
function openDpiPasswordModal() {
  const _0x504aee = document.getElementById("dpiPassModal");
  _0x504aee.style.display = "flex";
  document.getElementById("dpiPassInput").value = "";
  document.getElementById("dpiPassErr").textContent = "";
  setTimeout(() => document.getElementById("dpiPassInput").focus(), 100);
}
function verifyDpiPass() {
  const _0x350533 = document.getElementById("dpiPassInput").value;
  if (_0x350533 !== (window._importPwd || "1782")) {
    document.getElementById("dpiPassErr").textContent = "❌ Galat password!";
    document.getElementById("dpiPassInput").value = "";
    document.getElementById("dpiPassInput").focus();
    return;
  }
  document.getElementById("dpiPassModal").style.display = "none";
  toggleDPI();
}
function onMaintToggleChange() {
  const _0x2db340 = document.getElementById("maintToggle").checked;
  const _0x16e128 = document.getElementById("maintToggleSlider");
  const _0x1dd550 = document.getElementById("maintToggleKnob");
  const _0xa0ca26 = document.getElementById("maintStatusLabel");
  if (_0x2db340) {
    _0x16e128.style.background = "#f59e0b";
    _0x1dd550.style.left = "27px";
    _0xa0ca26.style.background = "#fef3c7";
    _0xa0ca26.style.color = "#92400e";
    _0xa0ca26.textContent = "Status: ON — Maintenance चालू है";
  } else {
    _0x16e128.style.background = "#ccc";
    _0x1dd550.style.left = "3px";
    _0xa0ca26.style.background = "#f3f4f6";
    _0xa0ca26.style.color = "#6b7280";
    _0xa0ca26.textContent = "Status: OFF";
  }
}
async function saveMaintSettings() {
  const _0x289099 = document.getElementById("maintToggle").checked;
  const _0x49670e = document.getElementById("maintMsgInput").value.trim();
  if (_0x289099 && !_0x49670e) {
    myAlert("Please enter the Maintenance message.");
    return;
  }
  const _0x2073b7 = {
    active: _0x289099,
    message: _0x49670e,
    startTime: document.getElementById("maintStartTime").value,
    endTime: document.getElementById("maintEndTime").value,
    durationText: document.getElementById("maintDurationText").value.trim(),
    forJD: document.getElementById("maintForJD").checked,
    forDEO: document.getElementById("maintForDEO").checked,
    savedAt: new Date().toISOString(),
  };
  const _0x3e24da = document.querySelector('[onclick="saveMaintSettings()"]');
  if (_0x3e24da) {
    _0x3e24da.innerHTML = "⏳ Saving...";
    _0x3e24da.disabled = true;
  }
  try {
    const _0x424640 = await fetch(_SB_URL + "/ms_maintenance?id=eq.1", {
      method: "PATCH",
      headers: {
        ..._SB_HDR,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        is_active: _0x289099,
        message: _0x49670e,
        start_time: document.getElementById("maintStartTime").value,
        end_time: document.getElementById("maintEndTime").value,
        jd_filter: document.getElementById("maintForJD").checked,
        deo_filter: document.getElementById("maintForDEO").checked,
      }),
    });
    console.log("Maintenance PATCH status:", _0x424640.status);
    if (!_0x424640.ok) {
      const _0x137d4e = await _0x424640.text();
      console.error("Maintenance PATCH error:", _0x137d4e);
      myAlert(
        "❌ Supabase save failed! Status: " +
          _0x424640.status +
          " | " +
          _0x137d4e,
      );
      if (_0x3e24da) {
        _0x3e24da.innerHTML = "💾 Maintenance Settings Save करें";
        _0x3e24da.disabled = false;
      }
      return;
    }
  } catch (_0x139c68) {
    console.error("Maintenance Supabase save error:", _0x139c68);
  }
  localStorage.setItem("ms_maintenance", JSON.stringify(_0x2073b7));
  window._maintCfg = _0x2073b7;
  const _0x19787c = document.getElementById("maintActiveDot");
  if (_0x19787c) {
    _0x19787c.style.display = _0x289099 ? "block" : "none";
  }
  if (_0x3e24da) {
    _0x3e24da.innerHTML = "💾 Maintenance Settings Save करें";
    _0x3e24da.disabled = false;
  }
  checkMaintenanceStatus();
  myAlert(
    _0x289099
      ? "🔧 Maintenance Mode ON! Supabase mein save ho gaya."
      : "✅ Maintenance settings saved in Supabase (Mode OFF).",
  );
  toggleDPI();
}
async function turnOffMaintenance() {
  const _0x597cd1 = JSON.parse(localStorage.getItem("ms_maintenance") || "{}");
  _0x597cd1.active = false;
  try {
    await fetch(_SB_URL + "/ms_maintenance?id=eq.1", {
      method: "PATCH",
      headers: {
        ..._SB_HDR,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        is_active: false,
      }),
    });
  } catch (_0x54802c) {
    console.error("turnOffMaintenance Supabase error:", _0x54802c);
  }
  localStorage.setItem("ms_maintenance", JSON.stringify(_0x597cd1));
  window._maintCfg = _0x597cd1;
  document.getElementById("maintToggle").checked = false;
  onMaintToggleChange();
  const _0x31543f = document.getElementById("maintActiveDot");
  if (_0x31543f) {
    _0x31543f.style.display = "none";
  }
  const _0x2185bb = document.getElementById("maintenanceScreen");
  if (_0x2185bb) {
    _0x2185bb.style.display = "none";
  }
  myAlert("✅ Maintenance Mode OFF — Supabase mein update ho gaya.");
  toggleDPI();
}
let _maintCountdownTimer = null;
function checkMaintenanceStatus() {
  const _0x593024 = window.currentUser || null;
  if (_0x593024 === "DPI") {
    const _0x19c323 = document.getElementById("maintenanceScreen");
    if (_0x19c323) {
      _0x19c323.style.display = "none";
    }
    return;
  }
  const _0x38ece1 =
    window._maintCfg ||
    JSON.parse(localStorage.getItem("ms_maintenance") || "null");
  const _0x36ee28 = document.getElementById("maintenanceScreen");
  if (!_0x36ee28) {
    return;
  }
  if (!_0x38ece1 || !_0x38ece1.active) {
    _0x36ee28.style.display = "none";
    return;
  }
  const _0x2eefe4 = _0x593024 && _0x593024.startsWith("JD");
  const _0x1de317 = _0x593024 && _0x593024.startsWith("DEO");
  if ((_0x2eefe4 && !_0x38ece1.forJD) || (_0x1de317 && !_0x38ece1.forDEO)) {
    _0x36ee28.style.display = "none";
    return;
  }
  _0x36ee28.style.display = "flex";
  document.getElementById("maintMsg").textContent =
    _0x38ece1.message || "Portal पर maintenance कार्य चल रहा है।";
  const _0x1ccce8 = document.getElementById("maintTimePeriodBox");
  const _0x468ea0 = document.getElementById("maintTimePeriod");
  const _0x39b7ff = document.getElementById("maintCountdownBox");
  const _0x2447bc = document.getElementById("maintCountdown");
  let _0x704390 = [];
  if (_0x38ece1.startTime) {
    _0x704390.push("शुरू: " + _fmtDT(_0x38ece1.startTime));
  }
  if (_0x38ece1.endTime) {
    _0x704390.push("समाप्ति: " + _fmtDT(_0x38ece1.endTime));
  }
  if (_0x38ece1.durationText) {
    _0x704390.push("अवधि: " + _0x38ece1.durationText);
  }
  if (_0x1ccce8) {
    _0x1ccce8.style.display = _0x704390.length > 0 ? "block" : "none";
  }
  if (_0x468ea0) {
    _0x468ea0.innerHTML = _0x704390.join("<br>");
  }
  if (_maintCountdownTimer) {
    clearInterval(_maintCountdownTimer);
  }
  if (_0x38ece1.endTime && _0x39b7ff && _0x2447bc) {
    _0x39b7ff.style.display = "block";
    function _0xa8a240() {
      const _0x97ff5d = new Date(_0x38ece1.endTime).getTime() - Date.now();
      if (_0x97ff5d <= 0) {
        _0x2447bc.textContent = "जल्द ही उपलब्ध...";
        clearInterval(_maintCountdownTimer);
        return;
      }
      const _0xfc073a = Math.floor(_0x97ff5d / 3600000);
      const _0x31eb47 = Math.floor((_0x97ff5d % 3600000) / 60000);
      const _0x50405f = Math.floor((_0x97ff5d % 60000) / 1000);
      _0x2447bc.textContent =
        (_0xfc073a ? _p2(_0xfc073a) + " घण्टे " : "") +
        _p2(_0x31eb47) +
        " मिनट " +
        _p2(_0x50405f) +
        " सेकंड";
    }
    _0xa8a240();
    _maintCountdownTimer = setInterval(_0xa8a240, 1000);
  } else if (_0x39b7ff) {
    _0x39b7ff.style.display = "none";
  }
}
function _fmtDT(_0x417b8e) {
  if (!_0x417b8e) {
    return "";
  }
  try {
    const _0x57dd10 = new Date(_0x417b8e);
    return (
      _0x57dd10.toLocaleDateString("hi-IN") +
      " " +
      _0x57dd10.toLocaleTimeString("hi-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );
  } catch (_0x55196b) {
    return _0x417b8e;
  }
}
function _p2(_0x3df842) {
  return String(_0x3df842).padStart(2, "0");
}
async function loadMaintPanelState() {
  try {
    const _0x26a73f = await fetch(
      _SB_URL + "/ms_maintenance?id=eq.1&select=*",
      {
        headers: _SB_HDR,
      },
    );
    const _0x5e392b = await _0x26a73f.json();
    if (Array.isArray(_0x5e392b) && _0x5e392b[0]) {
      const _0x3fa7d3 = _0x5e392b[0];
      const _0x36f8bb = {
        active: _0x3fa7d3.is_active,
        message: _0x3fa7d3.message,
        startTime: _0x3fa7d3.start_time,
        endTime: _0x3fa7d3.end_time,
        forJD: _0x3fa7d3.jd_filter,
        forDEO: _0x3fa7d3.deo_filter,
        durationText: "",
      };
      window._maintCfg = _0x36f8bb;
      localStorage.setItem("ms_maintenance", JSON.stringify(_0x36f8bb));
    }
  } catch (_0x4a3cdd) {
    console.warn("loadMaintPanelState Supabase error:", _0x4a3cdd);
  }
  const _0x367d20 =
    window._maintCfg ||
    JSON.parse(localStorage.getItem("ms_maintenance") || "null");
  if (!_0x367d20) {
    return;
  }
  document.getElementById("maintToggle").checked = !!_0x367d20.active;
  onMaintToggleChange();
  document.getElementById("maintMsgInput").value = _0x367d20.message || "";
  document.getElementById("maintStartTime").value = _0x367d20.startTime || "";
  document.getElementById("maintEndTime").value = _0x367d20.endTime || "";
  document.getElementById("maintDurationText").value =
    _0x367d20.durationText || "";
  if (_0x367d20.forJD !== undefined) {
    document.getElementById("maintForJD").checked = _0x367d20.forJD;
  }
  if (_0x367d20.forDEO !== undefined) {
    document.getElementById("maintForDEO").checked = _0x367d20.forDEO;
  }
}
const MS_CUSTOM_PASS_KEY = "msErp_customPasswords";
function _getEffectivePass(_0x437978) {
  const _0x18734b = JSON.parse(
    localStorage.getItem(MS_CUSTOM_PASS_KEY) || "{}",
  );
  return _0x18734b[_0x437978] || districtCredentials[_0x437978] || null;
}
function renderPwTable(_0x316eb3) {
  _0x316eb3 = (_0x316eb3 || "").trim().toUpperCase();
  const _0x4433c3 = JSON.parse(
    localStorage.getItem(MS_CUSTOM_PASS_KEY) || "{}",
  );
  const _0x744921 = Object.keys(districtCredentials);
  const _0x2cdb3c = Object.keys(_0x4433c3).filter(
    (_0x1c2c7c) => !districtCredentials[_0x1c2c7c],
  );
  const _0x25a0ae = [..._0x744921, ..._0x2cdb3c];
  const _0xb201fb = _0x316eb3
    ? _0x25a0ae.filter((_0x19c583) =>
        _0x19c583.toUpperCase().includes(_0x316eb3),
      )
    : _0x25a0ae;
  const _0x29ba44 = document.getElementById("pwTableContainer");
  if (!_0x29ba44) {
    return;
  }
  if (!_0xb201fb.length) {
    _0x29ba44.innerHTML =
      '<div style="text-align:center;color:#999;padding:20px;">No results</div>';
    return;
  }
  _0x29ba44.innerHTML = _0xb201fb
    .map((_0x461989) => {
      const _0x2f5e3a =
        _0x4433c3[_0x461989] || districtCredentials[_0x461989] || "(default)";
      const _0xe4339 = _0x461989.startsWith("JD");
      const _0x204d44 = _0x461989 === "DPI";
      const _0x48d347 = {
        DPI: 1,
        JDBHOPAL: 1,
        JDGWALIOR: 1,
        JDINDORE: 1,
        JDJABALPUR: 1,
        JDREWA: 1,
        JDSAGAR: 1,
        JDUJJAIN: 1,
        JDSHAHDOL: 1,
        JDNARMADAPURAM: 1,
        DEOAGARMALWA: 1,
        DEOALIRAJPUR: 1,
        DEOANUPPUR: 1,
        DEOASHOKNAGAR: 1,
        DEOBALAGHAT: 1,
        DEOBARWANI: 1,
        DEOBETUL: 1,
        DEOBHIND: 1,
        DEOBHOPAL: 1,
        DEOBURHANPUR: 1,
        DEOCHHATARPUR: 1,
        DEOCHHINDWARA: 1,
        DEODAMOH: 1,
        DEODATIA: 1,
        DEODEWAS: 1,
        DEODHAR: 1,
        DEODINDORI: 1,
        DEOGUNA: 1,
        DEOGWALIOR: 1,
        DEOHARDA: 1,
        DEOINDORE: 1,
        DEOJABALPUR: 1,
        DEOJHABUA: 1,
        DEOKATNI: 1,
        DEOKHANDWA: 1,
        DEOKHARGONE: 1,
        DEOMANDLA: 1,
        DEOMANDSAUR: 1,
        DEOMORENA: 1,
        DEONARMADAPURAM: 1,
        DEONARSINGHPUR: 1,
        DEONEEMUCH: 1,
        DEONIWARI: 1,
        DEOPANNA: 1,
        DEORAISEN: 1,
        DEORAJGARH: 1,
        DEORATLAM: 1,
        DEOREWA: 1,
        DEOSAGAR: 1,
        DEOSATNA: 1,
        DEOSEHORE: 1,
        DEOSEONI: 1,
        DEOSHAHDOL: 1,
        DEOSHAJAPUR: 1,
        DEOSHEOPUR: 1,
        DEOSHIVPURI: 1,
        DEOSIDHI: 1,
        DEOSINGRAULI: 1,
        DEOTIKAMGARH: 1,
        DEOUJJAIN: 1,
        DEOUMARIA: 1,
        DEOVIDISHA: 1,
        DEOPANDHURNA: 1,
        DEOMAIHAR: 1,
        DEOMAUGANJ: 1,
      };
      const _0x55933b = !_0x48d347[_0x461989];
      const _0x2e8823 = _0x204d44
        ? "#c62828"
        : _0xe4339
          ? "#1565c0"
          : "#2e7d32";
      return (
        '<div style="display:grid;grid-template-columns:1fr 120px ' +
        (_0x55933b ? "72px 68px" : "72px") +
        ';align-items:center;gap:6px;padding:7px 0;border-bottom:1px solid #eee;">\n<div>\n<span style="font-size:11px;font-weight:700;color:' +
        _0x2e8823 +
        ';">' +
        _0x461989 +
        '</span>\n<span style="font-size:9px;background:#f0f0f0;color:#666;padding:1px 6px;border-radius:3px;margin-left:6px;">' +
        (_0x204d44 ? "DPI" : _0xe4339 ? "JD" : "DEO") +
        '</span>\n</div>\n<div style="font-family:monospace;font-size:12px;color:#2e7d32;font-weight:600;">' +
        _0x2f5e3a +
        "</div>\n<button onclick=\"openAdminPwChange('" +
        _0x461989 +
        '\')" style="padding:5px 9px;background:#002e5b;color:white;border:none;border-radius:4px;cursor:pointer;font-size:10px;font-weight:700;">✏️ Edit</button>\n' +
        (_0x55933b
          ? "<button onclick=\"deleteUser('" +
            _0x461989 +
            '\')" style="padding:5px 9px;background:#c62828;color:white;border:none;border-radius:4px;cursor:pointer;font-size:10px;font-weight:700;">🗑️ Del</button>'
          : "") +
        "\n</div>"
      );
    })
    .join("");
}
function filterPwTable(_0x4743aa) {
  renderPwTable(_0x4743aa);
}
async function deleteUser(_0x4ea6e7) {
  if (window.currentUser !== "DPI") {
    myAlert("⛔ Only DPI can delete users.");
    return;
  }
  if (
    !confirm(
      '⚠️ "' +
        _0x4ea6e7 +
        '" ko delete karna chahte ho?\nYe action undo nahi hoga!',
    )
  ) {
    return;
  }
  try {
    await supabaseClient.from("users").delete().eq("userid", _0x4ea6e7);
  } catch (_0x332dda) {
    console.warn("Supabase delete failed:", _0x332dda);
  }
  const _0x40bed0 = JSON.parse(
    localStorage.getItem(MS_CUSTOM_PASS_KEY) || "{}",
  );
  delete _0x40bed0[_0x4ea6e7];
  delete districtCredentials[_0x4ea6e7];
  localStorage.setItem(MS_CUSTOM_PASS_KEY, JSON.stringify(_0x40bed0));
  auditLog("USER_DELETED", "User deleted: " + _0x4ea6e7 + " by DPI");
  renderPwTable(document.getElementById("pwSearchBox")?.value || "");
  myAlert('✅ User "' + _0x4ea6e7 + '" deleted successfully!');
}
function openAdminPwChange(_0x20be16) {
  const _0x5f4a29 = document.getElementById("adminPwChangeTarget");
  if (_0x5f4a29) {
    _0x5f4a29.innerHTML =
      'User: <span style="color:#1565c0;font-family:monospace;">' +
      _0x20be16 +
      "</span>";
  }
  document.getElementById("adminNewPass").value = "";
  document.getElementById("adminConfirmPass").value = "";
  document.getElementById("adminPwMsg").innerHTML = "";
  document.getElementById("adminNewPass").dataset.userId = _0x20be16;
  document.getElementById("adminPwChangeModal").style.display = "flex";
  setTimeout(() => document.getElementById("adminNewPass").focus(), 100);
}
function saveAdminPwChange() {
  const _0x156453 = document.getElementById("adminNewPass");
  const _0xd4b319 = document.getElementById("adminConfirmPass");
  const _0x48f689 = document.getElementById("adminPwMsg");
  const _0x28beac = _0x156453.dataset.userId;
  const _0x117ced = _0x156453.value.trim();
  const _0x26ffe2 = _0xd4b319.value.trim();
  if (!_0x117ced || _0x117ced.length < 4) {
    _0x48f689.innerHTML =
      '<span style="color:red;">❌ Password must be at least 4 characters.</span>';
    return;
  }
  if (_0x117ced !== _0x26ffe2) {
    _0x48f689.innerHTML =
      '<span style="color:red;">❌ Both passwords do not match.</span>';
    return;
  }
  const _0x2528d4 = JSON.parse(
    localStorage.getItem(MS_CUSTOM_PASS_KEY) || "{}",
  );
  const _0x5b2bcb =
    _0x2528d4[_0x28beac] || districtCredentials[_0x28beac] || "(default)";
  _0x2528d4[_0x28beac] = _0x117ced;
  localStorage.setItem(MS_CUSTOM_PASS_KEY, JSON.stringify(_0x2528d4));
  districtCredentials[_0x28beac] = _0x117ced;
  if (typeof _savePasswordToCloud === "function") {
    _savePasswordToCloud(_0x28beac, _0x117ced);
  }
  auditLog("ADMIN_PW_CHANGE", "DPI changed password for: " + _0x28beac);
  _sbLogPwReset(_0x28beac, _0x5b2bcb, _0x117ced, window.currentUser || "DPI");
  _0x48f689.innerHTML =
    '<span style="color:#2e7d32;font-weight:bold;">✅ Password successfully changed!</span>';
  setTimeout(() => {
    document.getElementById("adminPwChangeModal").style.display = "none";
    renderPwTable(document.getElementById("pwSearchBox").value);
  }, 1400);
}
async function createNewUser() {
  if (window.currentUser !== "DPI") {
    myAlert("⛔ Only DPI can do this.");
    return;
  }
  const _0x14b384 = (document.getElementById("newUserId").value || "")
    .trim()
    .toUpperCase();
  const _0x27e694 = (document.getElementById("newUserPass").value || "").trim();
  const _0x1a16f3 = document.getElementById("newUserMsg");
  if (!_0x14b384) {
    _0x1a16f3.innerHTML =
      '<span style="color:red;">❌ User ID cannot be empty.</span>';
    return;
  }
  if (_0x14b384.length < 3) {
    _0x1a16f3.innerHTML =
      '<span style="color:red;">❌ User ID must be at least 3 characters.</span>';
    return;
  }
  if (!_0x27e694 || _0x27e694.length < 4) {
    _0x1a16f3.innerHTML =
      '<span style="color:red;">❌ Password must be at least 4 characters.</span>';
    return;
  }
  const _0x39a547 = JSON.parse(
    localStorage.getItem(MS_CUSTOM_PASS_KEY) || "{}",
  );
  if (districtCredentials[_0x14b384] || _0x39a547[_0x14b384]) {
    _0x1a16f3.innerHTML =
      '<span style="color:#b45309;">⚠️ This User ID already exists in the system.</span>';
    return;
  }
  _0x1a16f3.innerHTML =
    '<span style="color:#1565c0;font-weight:bold;">⏳ Saving to cloud...</span>';
  try {
    const { error: _0x47c7fe } = await supabaseClient.from("users").upsert(
      {
        userid: _0x14b384,
        password: _0x27e694,
        level: document.getElementById("newUserLevel")?.value || "DEO",
        location: (document.getElementById("newUserLocation")?.value || "")
          .trim()
          .toUpperCase(),
      },
      {
        onConflict: "userid",
      },
    );
    if (_0x47c7fe) {
      throw _0x47c7fe;
    }
    _0x39a547[_0x14b384] = _0x27e694;
    districtCredentials[_0x14b384] = _0x27e694;
    localStorage.setItem(MS_CUSTOM_PASS_KEY, JSON.stringify(_0x39a547));
    auditLog("USER_CREATED", "New user created: " + _0x14b384 + " by DPI");
    document.getElementById("newUserId").value = "";
    document.getElementById("newUserPass").value = "";
    _0x1a16f3.innerHTML =
      '<span style="color:#2e7d32;font-weight:bold;">✅ User "' +
      _0x14b384 +
      '" created! Har device pe kaam karega!</span>';
    renderPwTable();
  } catch (_0x254ca0) {
    _0x1a16f3.innerHTML =
      '<span style="color:red;">❌ Cloud save failed: ' +
      _0x254ca0.message +
      "</span>";
  }
}
function openImportExcelModal() {
  const _0x2bf4ae = document.getElementById("importExcelModal");
  _0x2bf4ae.style.display = "flex";
  document.getElementById("importExcelPassInput").value = "";
  document.getElementById("importExcelPassErr").textContent = "";
  setTimeout(
    () => document.getElementById("importExcelPassInput").focus(),
    100,
  );
}
function verifyImportExcelPass() {
  const _0xbb0ff = document.getElementById("importExcelPassInput").value;
  if (_0xbb0ff !== (window._importPwd || "1782")) {
    document.getElementById("importExcelPassErr").textContent =
      "❌ Galat password!";
    document.getElementById("importExcelPassInput").value = "";
    document.getElementById("importExcelPassInput").focus();
    return;
  }
  document.getElementById("importExcelModal").style.display = "none";
  document.getElementById("excelFile").click();
}
function handleTitleClick() {
  if (window.currentUser !== "DPI") {
    const _0x3cfcd7 = document.createElement("div");
    _0x3cfcd7.style.cssText =
      'position:fixed;bottom:20px;right:20px;z-index:100000;background:#1e293b;color:white;padding:11px 18px;border-radius:8px;box-shadow:0 6px 20px rgba(0,0,0,0.35);border-left:5px solid #f44336;font-size:13px;font-family:"Inter",sans-serif;max-width:320px;';
    _0x3cfcd7.innerHTML = "🔒 Title can only be edited by <b>DPI</b>.";
    document.body.appendChild(_0x3cfcd7);
    setTimeout(() => {
      _0x3cfcd7.style.opacity = "0";
      _0x3cfcd7.style.transition = "opacity 0.4s";
      setTimeout(() => _0x3cfcd7.remove(), 400);
    }, 3000);
    return;
  }
  const _0x3373b5 = document.getElementById("sheetTitleText");
  const _0x385122 = document.getElementById("editTitleHint");
  if (!_0x3373b5) {
    return;
  }
  const _0x4288bc = _0x3373b5.textContent.trim();
  const _0x15c900 = document.createElement("input");
  _0x15c900.type = "text";
  _0x15c900.value = _0x4288bc;
  _0x15c900.style.cssText =
    "width:90%;font-size:15px;font-weight:700;color:#002e5b;border:2px solid #2c7be5;border-radius:4px;padding:4px 10px;outline:none;font-family:inherit;text-align:center;";
  _0x3373b5.replaceWith(_0x15c900);
  if (_0x385122) {
    _0x385122.style.display = "none";
  }
  _0x15c900.focus();
  _0x15c900.select();
  function _0xea7a3d() {
    const _0x22f7f6 = _0x15c900.value.trim() || _0x4288bc;
    const _0x1529d9 = document.createElement("span");
    _0x1529d9.id = "sheetTitleText";
    _0x1529d9.onclick = handleTitleClick;
    _0x1529d9.textContent = _0x22f7f6;
    _0x15c900.replaceWith(_0x1529d9);
    if (_0x385122) {
      _0x385122.style.display = "inline";
    }
    localStorage.setItem("ms_sheet_title", _0x22f7f6);
    _sbSetSetting("ms_sheet_title", _0x22f7f6);
    _broadcastTitleUpdate(_0x22f7f6);
  }
  _0x15c900.addEventListener("blur", _0xea7a3d);
  _0x15c900.addEventListener("keydown", function (_0x414670) {
    if (_0x414670.key === "Enter") {
      _0x414670.preventDefault();
      _0xea7a3d();
    }
    if (_0x414670.key === "Escape") {
      _0x15c900.value = _0x4288bc;
      _0xea7a3d();
    }
  });
}
function _broadcastTitleUpdate(_0x15e574) {
  if (!presenceChannel) {
    return;
  }
  try {
    presenceChannel.send({
      type: "broadcast",
      event: "title-update",
      payload: {
        title: _0x15e574,
        user: _realtimeUser(),
      },
    });
  } catch (_0x35d0de) {
    console.warn("Title broadcast failed:", _0x35d0de);
  }
}
function _applyRemoteTitleUpdate(_0x357c33) {
  if (!_0x357c33) {
    return;
  }
  localStorage.setItem("ms_sheet_title", _0x357c33);
  _sbSetSetting("ms_sheet_title", _0x357c33);
  const _0x50d9b5 = document.getElementById("sheetTitleText");
  if (_0x50d9b5 && _0x50d9b5.tagName !== "INPUT") {
    _0x50d9b5.textContent = _0x357c33;
    _0x50d9b5.style.transition = "background 0.3s";
    _0x50d9b5.style.background = "#fff9c4";
    setTimeout(() => {
      _0x50d9b5.style.background = "";
    }, 1500);
  }
  const _0xefd8f0 = document.createElement("div");
  _0xefd8f0.style.cssText =
    'position:fixed;bottom:20px;right:20px;z-index:100000;background:#1e293b;color:white;padding:11px 18px;border-radius:8px;box-shadow:0 6px 20px rgba(0,0,0,0.35);border-left:5px solid #4caf50;font-size:13px;font-family:"Inter",sans-serif;max-width:320px;';
  _0xefd8f0.innerHTML =
    "📝 DPI ne title update kiya — reload ki zaroorat nahi!";
  document.body.appendChild(_0xefd8f0);
  setTimeout(() => {
    _0xefd8f0.style.opacity = "0";
    _0xefd8f0.style.transition = "opacity 0.4s";
    setTimeout(() => _0xefd8f0.remove(), 400);
  }, 4000);
}
function _updateTitleHintVisibility() {
  const _0x584707 = document.getElementById("editTitleHint");
  if (!_0x584707) {
    return;
  }
  _0x584707.style.display = window.currentUser === "DPI" ? "inline" : "none";
}
(async function restoreSavedTitle() {
  const _0x100274 = localStorage.getItem("ms_sheet_title");
  if (_0x100274) {
    const _0x296f73 = document.getElementById("sheetTitleText");
    if (_0x296f73) {
      _0x296f73.textContent = _0x100274;
    }
  }
  const _0x5e700a = await _sbGetSetting("ms_sheet_title");
  if (_0x5e700a) {
    localStorage.setItem("ms_sheet_title", _0x5e700a);
    const _0x29344b = document.getElementById("sheetTitleText");
    if (_0x29344b && _0x29344b.tagName !== "INPUT") {
      _0x29344b.textContent = _0x5e700a;
    }
  }
})();
function toggleOtherToolbar(_0x141e44) {
  _0x141e44.stopPropagation();
  const _0x50ae73 = document.getElementById("otherToolbarMenu");
  _0x50ae73.style.display =
    _0x50ae73.style.display === "none" || !_0x50ae73.style.display
      ? "block"
      : "none";
}
function closeOtherToolbar() {
  const _0x21ce41 = document.getElementById("otherToolbarMenu");
  if (_0x21ce41) {
    _0x21ce41.style.display = "none";
  }
}
document.addEventListener("click", function (_0x5d24c6) {
  const _0x2809f1 = document.getElementById("otherToolbarWrap");
  if (_0x2809f1 && !_0x2809f1.contains(_0x5d24c6.target)) {
    closeOtherToolbar();
  }
});
(function clockTick() {
  const _0x7b1784 = document.getElementById("clockDisplay");
  if (_0x7b1784) {
    _0x7b1784.textContent = new Date().toLocaleTimeString("hi-IN");
  }
  setTimeout(clockTick, 1000);
})();
(function updateDeadlineBadge() {
  const _0xd06bbb = document.getElementById("deadlineBadge");
  if (!_0xd06bbb) {
    return;
  }
  const _0x515a41 = window._msEnd || localStorage.getItem("config_end_date");
  if (!_0x515a41) {
    _0xd06bbb.style.display = "none";
    return;
  }
  const _0xdc9bd2 = new Date();
  const _0x321c18 = _0xdc9bd2.toISOString().split("T")[0];
  const _0x37eb42 = new Date(_0x515a41 + "T23:59:59");
  const _0x52c2b5 = _0x37eb42 - _0xdc9bd2;
  const _0x42539c = Math.ceil(_0x52c2b5 / 86400000);
  const [_0x15acf2, _0x4541a3, _0x4a581a] = _0x515a41.split("-");
  const _0x5b9d4d = _0x4a581a + "-" + _0x4541a3 + "-" + _0x15acf2;
  let _0x4acdb9;
  let _0x16e8ce;
  let _0x379ef7;
  let _0xebab9d;
  if (_0x321c18 > _0x515a41) {
    _0xebab9d = "🔴";
    _0x4acdb9 = "#fff";
    _0x16e8ce = "#b71c1c";
    _0x379ef7 = "⏰ कार्य अवधि समाप्त हो गई! (" + _0x5b9d4d + ")";
  } else if (_0x42539c <= 3) {
    _0xebab9d = "🔴";
    _0x4acdb9 = "#fff";
    _0x16e8ce = "#c62828";
    _0x379ef7 = "⚠️ अंतिम तिथि: " + _0x5b9d4d + " (" + _0x42539c + " दिन बचे)";
  } else if (_0x42539c <= 7) {
    _0xebab9d = "🟠";
    _0x4acdb9 = "#fff";
    _0x16e8ce = "#e65100";
    _0x379ef7 = "⏳ अंतिम तिथि: " + _0x5b9d4d + " (" + _0x42539c + " दिन बचे)";
  } else {
    _0xebab9d = "🟢";
    _0x4acdb9 = "#fff";
    _0x16e8ce = "#2e7d32";
    _0x379ef7 = "📅 कार्य करने की अंतिम तिथि: " + _0x5b9d4d;
  }
  _0xd06bbb.textContent = _0x379ef7;
  _0xd06bbb.style.cssText =
    "\ndisplay:inline-block;\nbackground:" +
    _0x16e8ce +
    ";\ncolor:" +
    _0x4acdb9 +
    ";\nfont-size:11px;\nfont-weight:700;\npadding:3px 10px;\nborder-radius:4px;\nmargin:0 8px;\nletter-spacing:0.3px;\nanimation: " +
    (_0x42539c <= 7 ? "deadlineBlink 1s ease-in-out infinite" : "none") +
    ";\n-webkit-print-color-adjust:exact;\nprint-color-adjust:exact;\n";
  setTimeout(updateDeadlineBadge, 60000);
})();
document.addEventListener("DOMContentLoaded", function () {});
(async function _bootLoadConfig() {
  const [_0x1f7d6f, _0x1dc8db] = await Promise.all([
    _sbGetSetting("config_start_date"),
    _sbGetSetting("config_end_date"),
  ]);
  if (_0x1f7d6f) {
    window._msStart = _0x1f7d6f;
    localStorage.setItem("config_start_date", _0x1f7d6f);
  }
  if (_0x1dc8db) {
    window._msEnd = _0x1dc8db;
    localStorage.setItem("config_end_date", _0x1dc8db);
  }
  const _0x44c525 = await _sbGetOverrides();
  window._cachedOverrides = _0x44c525;
  localStorage.setItem("ms_user_overrides", JSON.stringify(_0x44c525));
  if (typeof checkLockStatus === "function") {
    checkLockStatus();
  }
})();
function toggleDPI() {
  const _0x2e73af = document.getElementById("dpiControlPanel");
  const _0x5e398d =
    _0x2e73af.style.display === "none" || !_0x2e73af.style.display;
  _0x2e73af.style.display = _0x5e398d ? "flex" : "none";
  if (_0x5e398d) {
    document.getElementById("dpiStartDate").value =
      window._msStart || localStorage.getItem("config_start_date") || "";
    document.getElementById("dpiEndDate").value =
      window._msEnd || localStorage.getItem("config_end_date") || "";
    Promise.all([
      _sbGetSetting("config_start_date"),
      _sbGetSetting("config_end_date"),
    ]).then(([_0x5b1488, _0x40b264]) => {
      if (_0x5b1488) {
        window._msStart = _0x5b1488;
        localStorage.setItem("config_start_date", _0x5b1488);
        document.getElementById("dpiStartDate").value = _0x5b1488;
      }
      if (_0x40b264) {
        window._msEnd = _0x40b264;
        localStorage.setItem("config_end_date", _0x40b264);
        document.getElementById("dpiEndDate").value = _0x40b264;
      }
    });
    switchDpiTab(1);
    renderDpiUserCheckboxes();
    loadMaintPanelState();
    const _0x4a2e1f =
      window._maintCfg ||
      JSON.parse(localStorage.getItem("ms_maintenance") || "null");
    const _0x5a7361 = document.getElementById("maintActiveDot");
    if (_0x5a7361) {
      _0x5a7361.style.display =
        _0x4a2e1f && _0x4a2e1f.active ? "block" : "none";
    }
  }
}
function switchDpiTab(_0xaef29c) {
  [1, 2, 3].forEach((_0x5dc862) => {
    const _0x48a820 = document.getElementById("dpiTab" + _0x5dc862);
    const _0x358f9d = document.getElementById("dpiPane" + _0x5dc862);
    if (_0x48a820) {
      _0x48a820.classList.toggle("active", _0x5dc862 === _0xaef29c);
    }
    if (_0x358f9d) {
      _0x358f9d.classList.toggle("active", _0x5dc862 === _0xaef29c);
    }
  });
  if (_0xaef29c === 2) {
    _syncCloudPasswordsToLocal().then(() => renderPwTable());
  }
}
async function renderDpiUserCheckboxes() {
  if (
    !window.districtCredentials ||
    Object.keys(window.districtCredentials).length === 0
  ) {
    await new Promise((_0x35cade) => setTimeout(_0x35cade, 1000));
  }
  const _0x5a7d92 = await _sbGetOverrides();
  window._cachedOverrides = _0x5a7d92;
  localStorage.setItem("ms_user_overrides", JSON.stringify(_0x5a7d92));
  const _0x533546 = [
    "JDBHOPAL",
    "JDGWALIOR",
    "JDINDORE",
    "JDJABALPUR",
    "JDREWA",
    "JDSAGAR",
    "JDUJJAIN",
    "JDSHAHDOL",
    "JDNARMADAPURAM",
  ];
  const _0x3f1b55 = [
    "DEOAGARMALWA",
    "DEOALIRAJPUR",
    "DEOANUPPUR",
    "DEOASHOKNAGAR",
    "DEOBALAGHAT",
    "DEOBARWANI",
    "DEOBETUL",
    "DEOBHIND",
    "DEOBHOPAL",
    "DEOBURHANPUR",
    "DEOCHHATARPUR",
    "DEOCHHINDWARA",
    "DEODAMOH",
    "DEODATIA",
    "DEODEWAS",
    "DEODHAR",
    "DEODINDORI",
    "DEOGUNA",
    "DEOGWALIOR",
    "DEOHARDA",
    "DEOINDORE",
    "DEOJABALPUR",
    "DEOJHABUA",
    "DEOKATNI",
    "DEOKHANDWA",
    "DEOKHARGONE",
    "DEOMANDLA",
    "DEOMANDSAUR",
    "DEOMORENA",
    "DEONARMADAPURAM",
    "DEONARSINGHPUR",
    "DEONEEMUCH",
    "DEONIWARI",
    "DEOPANNA",
    "DEORAISEN",
    "DEORAJGARH",
    "DEORATLAM",
    "DEOREWA",
    "DEOSAGAR",
    "DEOSATNA",
    "DEOSEHORE",
    "DEOSEONI",
    "DEOSHAHDOL",
    "DEOSHAJAPUR",
    "DEOSHEOPUR",
    "DEOSHIVPURI",
    "DEOSIDHI",
    "DEOSINGRAULI",
    "DEOTIKAMGARH",
    "DEOUJJAIN",
    "DEOUMARIA",
    "DEOVIDISHA",
    "DEOPANDHURNA",
    "DEOMAIHAR",
    "DEOMAUGANJ",
  ];
  const _0x54aca6 = Object.keys(districtCredentials);
  const _0x50f4fb = [
    ...new Set([
      ..._0x533546,
      ..._0x54aca6.filter((_0x4f4792) => _0x4f4792.startsWith("JD")),
    ]),
  ];
  const _0x25233a = [
    ...new Set([
      ..._0x3f1b55,
      ..._0x54aca6.filter((_0x24bb68) => _0x24bb68.startsWith("DEO")),
    ]),
  ];
  function _0x221ee2(_0x3e20c4, _0x5b5dda) {
    const _0x5e7ea4 = document.getElementById(_0x5b5dda);
    if (!_0x5e7ea4) {
      return;
    }
    _0x5e7ea4.innerHTML = _0x3e20c4
      .map((_0x123deb) => {
        const _0x2b92a5 = _0x5a7d92[_0x123deb];
        const _0x51cf22 = _0x2b92a5
          ? '<span style="font-size:9px;color:#888;margin-left:4px;">(' +
            (_0x2b92a5.start || "?") +
            " to " +
            (_0x2b92a5.end || "?") +
            ")</span>"
          : "";
        const _0x3a61ab =
          _0x2b92a5 && _0x2b92a5.closed
            ? '<span style="font-size:9px;background:#fee2e2;color:#991b1b;padding:1px 5px;border-radius:3px;margin-left:4px;">CLOSED</span>'
            : "";
        return (
          '<label style="display:flex;align-items:center;gap:6px;padding:5px 10px;cursor:pointer;border-bottom:1px solid #f5f5f5;font-size:11px;">\n<input type="checkbox" class="dpi-user-cb" data-user="' +
          _0x123deb +
          '" style="width:14px;height:14px;cursor:pointer;">\n<span style="font-weight:600;color:#002e5b;">' +
          _0x123deb +
          "</span>" +
          _0x51cf22 +
          _0x3a61ab +
          "\n</label>"
        );
      })
      .join("");
  }
  _0x221ee2(_0x50f4fb, "jdCheckboxList");
  _0x221ee2(_0x25233a, "deoCheckboxList");
}
function toggleUserGroup(_0x59b940) {
  const _0xffd9f9 = document.getElementById(_0x59b940);
  if (_0xffd9f9) {
    _0xffd9f9.style.display = _0xffd9f9.style.display === "none" ? "" : "none";
  }
}
function dpiSelectAllUsers(_0xb90072) {
  document.querySelectorAll(".dpi-user-cb").forEach((_0x81cc89) => {
    _0x81cc89.checked = _0xb90072;
  });
}
function dpiSelectByType(_0xb0bc7f) {
  document.querySelectorAll(".dpi-user-cb").forEach((_0x34ee2a) => {
    if (
      _0x34ee2a.dataset.user &&
      _0x34ee2a.dataset.user.startsWith(_0xb0bc7f)
    ) {
      _0x34ee2a.checked = true;
    }
  });
}
async function saveTimeLimit() {
  const _0x35e3fa = document.getElementById("dpiStartDate").value;
  const _0x431a0b = document.getElementById("dpiEndDate").value;
  if (!_0x35e3fa || !_0x431a0b) {
    myAlert("⚠️ Please select both Global Start and End dates.");
    return;
  }
  const _0x220cd8 = document.querySelector('[onclick="saveTimeLimit()"]');
  const _0x4b888d = _0x220cd8 ? _0x220cd8.innerHTML : "";
  if (_0x220cd8) {
    _0x220cd8.innerHTML = "⏳ Saving...";
    _0x220cd8.disabled = true;
  }
  try {
    window._msStart = _0x35e3fa;
    window._msEnd = _0x431a0b;
    await _sbSetSetting("config_start_date", _0x35e3fa);
    await _sbSetSetting("config_end_date", _0x431a0b);
    localStorage.setItem("config_start_date", _0x35e3fa);
    localStorage.setItem("config_end_date", _0x431a0b);
    const _0x65cca5 = document.getElementById("overrideStartDate").value;
    const _0x515de4 = document.getElementById("overrideEndDate").value;
    const _0x44173e = Array.from(
      document.querySelectorAll(".dpi-user-cb:checked"),
    );
    if (_0x44173e.length > 0) {
      if (!_0x65cca5 || !_0x515de4) {
        myAlert(
          "⚠️ Please select Override Start and End date for per-user override.",
        );
        if (_0x220cd8) {
          _0x220cd8.innerHTML = _0x4b888d;
          _0x220cd8.disabled = false;
        }
        return;
      }
      for (const _0x4feb54 of _0x44173e) {
        await _sbSetOverride(
          _0x4feb54.dataset.user,
          _0x65cca5,
          _0x515de4,
          false,
        );
      }
      const _0x1e96d2 = JSON.parse(
        localStorage.getItem("ms_user_overrides") || "{}",
      );
      _0x44173e.forEach((_0x3cb18d) => {
        _0x1e96d2[_0x3cb18d.dataset.user] = {
          start: _0x65cca5,
          end: _0x515de4,
        };
      });
      localStorage.setItem("ms_user_overrides", JSON.stringify(_0x1e96d2));
      myAlert(
        "✅ Settings Saved!\n\nGlobal: " +
          _0x35e3fa +
          " → " +
          _0x431a0b +
          "\n\nOverride applied to " +
          _0x44173e.length +
          " user(s):\n" +
          _0x65cca5 +
          " → " +
          _0x515de4,
      );
    } else {
      myAlert(
        "✅ Global access dates saved!\nStart: " +
          _0x35e3fa +
          "\nEnd: " +
          _0x431a0b,
      );
    }
    checkLockStatus();
    toggleDPI();
  } catch (_0xec66ef) {
    myAlert(
      "❌ Save FAILED!\n\nError: " +
        _0xec66ef.message +
        "\n\nPossible reasons:\n• Internet connection issue\n• Supabase server down\n• RLS Policy blocking write\n\nConsole mein check karo.",
    );
    console.error("saveTimeLimit ERROR:", _0xec66ef);
  } finally {
    if (_0x220cd8) {
      _0x220cd8.innerHTML = _0x4b888d;
      _0x220cd8.disabled = false;
    }
  }
}
async function clearUserOverrides() {
  if (!confirm("Sabhi per-user overrides clear kar dein?")) {
    return;
  }
  await _sbClearOverrides();
  localStorage.removeItem("ms_user_overrides");
  window._cachedOverrides = {};
  renderDpiUserCheckboxes();
  myAlert("All per-user overrides have been cleared.");
}
function checkLockStatus() {
  const _0x7edce9 = window.currentUser;
  if (_0x7edce9 === "DPI") {
    document.getElementById("lockScreen").style.display = "none";
    checkMaintenanceStatus();
    return;
  }
  if (!_0x7edce9) {
    document.getElementById("lockScreen").style.display = "none";
    return;
  }
  checkMaintenanceStatus();
  if (
    document.getElementById("maintenanceScreen") &&
    document.getElementById("maintenanceScreen").style.display === "flex"
  ) {
    return;
  }
  const _0x441430 =
    window._cachedOverrides ||
    JSON.parse(localStorage.getItem("ms_user_overrides") || "{}");
  let _0x1ffc8b = window._msStart || localStorage.getItem("config_start_date");
  let _0x20dce4 = window._msEnd || localStorage.getItem("config_end_date");
  if (_0x441430[_0x7edce9]) {
    _0x1ffc8b = _0x441430[_0x7edce9].start;
    _0x20dce4 = _0x441430[_0x7edce9].end;
  }
  if (_0x1ffc8b && _0x20dce4) {
    const _0x3f98b8 = new Date();
    const _0x4c5296 =
      _0x3f98b8.getFullYear() +
      "-" +
      String(_0x3f98b8.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(_0x3f98b8.getDate()).padStart(2, "0");
    if (_0x4c5296 < _0x1ffc8b || _0x4c5296 > _0x20dce4) {
      document.getElementById("lockScreen").style.display = "flex";
      document.getElementById("lockMsg").innerText =
        "Your access period on this portal was " +
        _0x1ffc8b +
        " to " +
        _0x20dce4 +
        ".";
      const _0x4d83ae = document.getElementById("dpiControlPanel");
      _0x4d83ae.style.zIndex = "1000001";
      document.body.appendChild(_0x4d83ae);
      const _0x4cebba = document.getElementById("dpiPassModal");
      _0x4cebba.style.zIndex = "1000002";
      document.body.appendChild(_0x4cebba);
    } else {
      document.getElementById("lockScreen").style.display = "none";
    }
  }
}
document.addEventListener("DOMContentLoaded", checkLockStatus);
window.fullData = [];
window.filteredData = [];
const ROW_HEIGHT = 35;
let uploadedFileURL = "";
async function uploadDocument(_0x5a6dcd) {
  try {
    const _0x4c93f6 =
      "docs/" +
      Date.now() +
      "_" +
      _0x5a6dcd.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const { error: _0x1c510c } = await supabaseClient.storage
      .from("documents")
      .upload(_0x4c93f6, _0x5a6dcd, {
        upsert: true,
      });
    if (_0x1c510c) {
      throw new Error(_0x1c510c.message);
    }
    const { data: _0x582b81 } = supabaseClient.storage
      .from("documents")
      .getPublicUrl(_0x4c93f6);
    uploadedFileURL = _0x582b81.publicUrl;
    console.log("✅ Cloudinary upload:", uploadedFileURL);
  } catch (_0x3548b1) {
    console.error("Cloudinary upload error:", _0x3548b1);
    myAlert("❌ Upload failed: " + _0x3548b1.message);
  }
}
function getStatusHtml(_0xe86986) {
  let _0x3d7210 = _0xe86986[26] || "";
  let _0x4d5935 = "Verified";
  let _0x1cfed4 = "#27ae60";
  if (_0x3d7210.toLowerCase().includes("pending") || !_0xe86986[2]) {
    _0x4d5935 = "Incomplete";
    _0x1cfed4 = "#e74c3c";
  }
  return (
    '<span style="background: ' +
    _0x1cfed4 +
    '; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold; font-size: 10px;">' +
    _0x4d5935 +
    "</span>"
  );
}
let documentStore = {};
function syncDataFromTable() {
  let _0x26909b = new Set();
  window.fullData.forEach((_0x43f84e) => {
    let _0x15ee95 = _0x43f84e["field" + (parseInt(colIdx) + 1)] || "";
    _0x15ee95 = _0x15ee95.trim();
    if (_0x15ee95 && _0x15ee95 !== "-" && _0x15ee95 !== "NIL") {
      _0x26909b.add(_0x15ee95);
    }
  });
  gradationData = Array.from(rows).map((_0x296e14) => {
    return Array.from(_0x296e14.cells).map((_0x4910a9) => _0x4910a9.innerText);
  });
}
function validateForm() {
  const _0x1d6591 = [];
  let _0x29b1ad = false;
  for (let _0x46fdea = 1; _0x46fdea <= 27; _0x46fdea++) {
    const _0x3ad56f = document.getElementById("in" + _0x46fdea);
    let _0x42a4ba = _0x3ad56f ? _0x3ad56f.value.trim() : "";
    if (_0x46fdea === 1 || _0x46fdea === 2) {
      continue;
    }
    if (_0x46fdea === 19) {
      const _0x3a118e = document.getElementById("in19mode").value;
      if (_0x3a118e === "NIL") {
        continue;
      }
      if (_0x42a4ba === "") {
        _0x29b1ad = true;
      }
    } else if (_0x46fdea === 24 || _0x46fdea === 25 || _0x46fdea === 26) {
      const _0x2577f0 = document.getElementById("in23").value;
      if (_0x2577f0 === "YES" && _0x42a4ba === "") {
        _0x29b1ad = true;
      }
    } else if (_0x42a4ba === "") {
      _0x29b1ad = true;
    }
  }
  if (_0x29b1ad) {
    showCustomAlert("All fields are mandatory!");
    return false;
  }
  return true;
}
function handleUPPLogic() {
  const _0x27095b = document.getElementById("in23").value;
  const _0x6df712 = document.getElementById("in24");
  const _0x31f8b0 = document.getElementById("in25");
  const _0xc614af = document.getElementById("in26");
  if (_0x27095b === "NO" || _0x27095b === "") {
    _0x6df712.value = "";
    _0x31f8b0.value = "";
    _0xc614af.selectedIndex = 0;
    _0x6df712.readOnly = true;
    _0x31f8b0.readOnly = true;
    _0xc614af.disabled = true;
    [_0x6df712, _0x31f8b0, _0xc614af].forEach((_0x3a89ab) => {
      _0x3a89ab.style.pointerEvents = "none";
      _0x3a89ab.style.backgroundColor = "#bdc3c7";
      _0x3a89ab.style.cursor = "not-allowed";
    });
  } else {
    _0x6df712.readOnly = false;
    _0x31f8b0.readOnly = false;
    _0xc614af.disabled = false;
    [_0x6df712, _0x31f8b0, _0xc614af].forEach((_0x5cefd6) => {
      _0x5cefd6.style.pointerEvents = "auto";
      _0x5cefd6.style.backgroundColor = "#fff";
      _0x5cefd6.style.cursor = "pointer";
    });
  }
}
function openUpdateLog() {
  myAlert("Update Log feature not added yet.");
}
function calculateSeniority() {
  const _0x5e398b = document.getElementById("in14").value;
  const _0x4812c9 = document.getElementById("in16").value;
  const _0x45d0cc = document.getElementById("in17").value;
  const _0x4d9b31 = document.getElementById("in19").value;
  const _0x54ecf9 = document.getElementById("in18");
  const _0x1919ce = [_0x5e398b, _0x4812c9, _0x45d0cc, _0x4d9b31]
    .filter(
      (_0x210a2a) => _0x210a2a && _0x210a2a !== "NIL" && _0x210a2a !== "NO",
    )
    .map((_0x4aaa5c) => new Date(_0x4aaa5c));
  if (_0x1919ce.length) {
    const _0x5fa11c = new Date(Math.max(..._0x1919ce));
    _0x54ecf9.value = _0x5fa11c.toISOString().split("T")[0];
  }
}
const districtCredentials = {};
async function checkLogin() {
  const _0xa3f74a = document
    .getElementById("userField")
    .value.trim()
    .toUpperCase();
  const _0x28c1e0 = document.getElementById("passField").value.trim();
  const _0x5cfd4c = document.getElementById("loginError");
  const _0x3a0431 = "loginBlock_" + _0xa3f74a;
  const _0x173ce0 = "loginAttempts_" + _0xa3f74a;
  const _0x5a76ad = JSON.parse(localStorage.getItem(_0x3a0431) || "null");
  if (_0x5a76ad) {
    const _0x50cd2b = Math.ceil((_0x5a76ad.until - Date.now()) / 1000);
    if (_0x50cd2b > 0) {
      _0x5cfd4c.innerText =
        "🔒 Account blocked! Try again after " + _0x50cd2b + "s.";
      return;
    } else {
      localStorage.removeItem(_0x3a0431);
      localStorage.removeItem(_0x173ce0);
    }
  }
  _0x5cfd4c.innerText = "⏳ Verifying...";
  try {
    const _0x4d71dd = await apiLogin(_0xa3f74a, _0x28c1e0);
    localStorage.removeItem(_0x173ce0);
    localStorage.removeItem(_0x3a0431);
    document.getElementById("loginOverlay").style.display = "none";
    window.currentUser = _0x4d71dd.userId;
    window.currentLevel = _0x4d71dd.level;
    const _0x4147ad = document.getElementById("userBadge");
    if (_0x4147ad) {
      _0x4147ad.textContent = "👤 " + _0x4d71dd.userId;
      _0x4147ad.style.display = "inline-block";
    }
    securityResetTimer();
    auditLog("LOGIN", "User logged in via Edge Function");
    if (typeof initRealtime === "function") {
      initRealtime();
    }
    if (typeof checkLockStatus === "function") {
      checkLockStatus();
    }
  } catch (_0x36fc03) {
    let _0x38c63c = parseInt(localStorage.getItem(_0x173ce0) || "0") + 1;
    localStorage.setItem(_0x173ce0, _0x38c63c);
    if (_0x38c63c >= 3) {
      localStorage.setItem(
        _0x3a0431,
        JSON.stringify({
          until: Date.now() + 300000,
        }),
      );
      localStorage.removeItem(_0x173ce0);
      _0x5cfd4c.innerText =
        "🔒 3 wrong attempts! Account blocked for 5 minutes.";
    } else {
      _0x5cfd4c.innerText =
        "❌ INVALID USER ID OR PASSWORD! (" + _0x38c63c + "/3 attempts)";
    }
  }
}
const colConfig = [
  {
    name: "S.No.",
    class: "col-xs",
  },
  {
    name: "G.N.",
    class: "col-xs",
  },
  {
    name: "Unique ID",
    class: "col-sm",
  },
  {
    name: "Name",
    class: "col-lg",
  },
  {
    name: "Category",
    class: "col-sm",
  },
  {
    name: "GENDER",
    class: "col-sm",
  },
  {
    name: "Date of Birth",
    class: "col-md",
  },
  {
    name: "Mode of Appointment",
    class: "col-md",
  },
  {
    name: "UG Subject as per appointment and Promotion",
    class: "col-lg",
  },
  {
    name: "Professional Qualification",
    class: "col-lg",
  },
  {
    name: "PG Qualification",
    class: "col-lg",
  },
  {
    name: "PG Subject",
    class: "col-lg",
  },
  {
    name: "Home District",
    class: "col-lg",
  },
  {
    name: "Date of First Appointment",
    class: "col-md",
  },
  {
    name: "First appointment Designation",
    class: "col-lg",
  },
  {
    name: "Date of Appointment in Adhyapak by promotion If any",
    class: "col-md",
  },
  {
    name: "Date of Appointment in present cadre",
    class: "col-md",
  },
  {
    name: "Date of seniority in present cadre",
    class: "col-md",
  },
  {
    name: "Inter division Transfer Date",
    class: "col-md",
  },
  {
    name: "Present Posting Place",
    class: "col-xl",
  },
  {
    name: "UDISE Code",
    class: "col-md",
  },
  {
    name: "Present Posting District",
    class: "col-lg",
  },
  {
    name: "उच्च पद पर ज्वाइन किया (YES OR NO)",
    class: "col-md",
  },
  {
    name: "उच्च पद प्रभार की शाला का नाम",
    class: "col-xl",
  },
  {
    name: "उच्च पद प्रभार की शाला का UDISE कोड",
    class: "col-md",
  },
  {
    name: "उच्च पद प्रभार का जिला",
    class: "col-lg",
  },
  {
    name: "Remark (Deputation or other issue etc)",
    class: "col-xl",
  },
  {
    name: "Status (New Entry/Updated)",
    class: "col-md",
  },
  {
    name: "Updated By / District / Date-Time",
    class: "col-lg",
  },
  {
    name: "View Document",
    class: "col-md",
  },
  {
    name: "Transfer Document",
    class: "col-md",
  },
];
const districts = [
  "SELECT DISTRICT",
  "Agar Malwa",
  "Anuppur",
  "Ashoknagar",
  "Balaghat",
  "Barwani",
  "Betul",
  "Bhind",
  "Bhopal",
  "Burhanpur",
  "Chhatarpur",
  "Chhindwara",
  "Damoh",
  "Datia",
  "Dewas",
  "Dhar",
  "Dindori",
  "Guna",
  "Gwalior",
  "Harda",
  "Indore",
  "Jabalpur",
  "Jhabua",
  "Katni",
  "Khandwa",
  "Khargone",
  "Mandla",
  "Mandsaur",
  "Morena",
  "Narmadapuram",
  "Narsinghpur",
  "Neemuch",
  "Niwari",
  "Panna",
  "Raisen",
  "Rajgarh",
  "Ratlam",
  "Rewa",
  "Sagar",
  "Satna",
  "Sehore",
  "Seoni",
  "Shahdol",
  "Shajapur",
  "Sheopur",
  "Shivpuri",
  "Sidhi",
  "Singrauli",
  "Tikamgarh",
  "Ujjain",
  "Umaria",
  "Vidisha",
];
let listZoom = 11;
let formZoom = 12;
let selectedRowElement = null;
window.onload = () => {
  setupTableFilters();
  document
    .getElementById("clearFiltersBtn")
    .addEventListener("click", function () {
      document.querySelectorAll("#filterRow input").forEach((_0x18163a) => {
        _0x18163a.value = "";
      });
      if (window.fullData && window.fullData.length > 0) {
        window.filteredData = [...window.fullData];
        renderVirtual();
      }
    });
  document.getElementById("in23").addEventListener("change", handleUPPLogic);
  const _0x5e1412 = document.getElementById("tableHead");
  colConfig.forEach((_0x1689b5) => {
    const _0x48f2a0 = document.createElement("th");
    _0x48f2a0.className = _0x1689b5.class;
    _0x48f2a0.innerText = _0x1689b5.name;
    _0x5e1412.appendChild(_0x48f2a0);
  });
  document.querySelectorAll(".district-list").forEach((_0x4d8db4) => {
    districts.forEach((_0x2a64d0) => {
      let _0x5d2d27 = document.createElement("option");
      _0x5d2d27.value = _0x2a64d0 === "SELECT DISTRICT" ? "" : _0x2a64d0;
      _0x5d2d27.innerText = _0x2a64d0;
      _0x4d8db4.appendChild(_0x5d2d27);
    });
  });
  const _0xea1c53 = new Date().toISOString().split("T")[0];
  document.querySelectorAll(".date-field").forEach((_0x100469) => {
    _0x100469.setAttribute("max", _0xea1c53);
    _0x100469.addEventListener("keydown", (_0x8df61c) =>
      _0x8df61c.preventDefault(),
    );
    _0x100469.addEventListener("click", function () {
      if (this.showPicker) {
        this.showPicker();
      }
    });
  });
  const _0x4bf5df = document.getElementById("probOrderDate");
  if (_0x4bf5df) {
    _0x4bf5df.setAttribute("max", _0xea1c53);
    _0x4bf5df.addEventListener("keydown", (_0x4ada7a) =>
      _0x4ada7a.preventDefault(),
    );
    _0x4bf5df.addEventListener("click", function () {
      if (this.showPicker) {
        this.showPicker();
      }
    });
  }
  handleUPPLogic();
};
function setupTableFilters() {
  const _0x395b23 = document.getElementById("filterRow");
  if (!_0x395b23) {
    return;
  }
  for (let _0x24643b = 0; _0x24643b < 30; _0x24643b++) {
    const _0xa8cbbb = document.createElement("th");
    const _0x30ca74 = document.createElement("input");
    _0x30ca74.type = "text";
    _0x30ca74.placeholder = "🔍";
    _0x30ca74.oninput = function () {
      document.getElementById("tableBody").style.opacity = "0.5";
      runAllFilters();
      setTimeout(() => {
        document.getElementById("tableBody").style.opacity = "1";
      }, 350);
    };
    _0xa8cbbb.appendChild(_0x30ca74);
    _0x395b23.appendChild(_0xa8cbbb);
  }
}
let filterTimeout;
function runAllFilters() {
  clearTimeout(filterTimeout);
  filterTimeout = setTimeout(() => {
    const _0x3df737 = Array.from(
      document.getElementById("filterRow").getElementsByTagName("input"),
    ).map((_0x4492a9) => _0x4492a9.value.toUpperCase());
    const _0x448a93 = _0x3df737.some((_0x5120d3) => _0x5120d3 !== "");
    if (!_0x448a93) {
    } else {
      window.filteredData = window.fullData.filter((_0x3fe1b9) => {
        return _0x3df737.every((_0xc84ffc, _0xc7ec43) => {
          if (!_0xc84ffc) {
            return true;
          }
          let _0xf89be0 = String(
            _0x3fe1b9["field" + (_0xc7ec43 + 1)] || "",
          ).toUpperCase();
          return _0xf89be0.includes(_0xc84ffc);
        });
      });
    }
    renderVirtual();
  }, 300);
}
function updateAutoSerialNumbers() {
  const _0x32a8bc = document.querySelectorAll("#tableBody tr");
  _0x32a8bc.forEach((_0x13bee5, _0x2dee85) => {
    _0x13bee5.cells[0].innerText = _0x2dee85 + 1;
  });
}
function toggleMS(_0x1f365d, _0x325f7d, _0x2995f9) {
  if (_0x1f365d && _0x1f365d.stopPropagation) {
    _0x1f365d.stopPropagation();
  }
  var _0x24a9f3 = document.getElementById("ms-portal-dropdown");
  if (_0x24a9f3) {
    var _0x40c653 = _0x24a9f3.dataset.srcId;
    if (_0x40c653) {
      var _0x160f3d = document.getElementById(_0x40c653);
      if (_0x160f3d) {
        _0x160f3d.appendChild(_0x24a9f3);
      }
      _0x24a9f3.style.display = "none";
      _0x24a9f3.id = _0x40c653;
      delete _0x24a9f3.dataset.srcId;
    }
    if (_0x40c653 === _0x2995f9) {
      return;
    }
  }
  var _0x5c0a73 = document.getElementById(_0x2995f9);
  if (!_0x5c0a73) {
    return;
  }
  var _0x3b9929 = _0x325f7d || _0x1f365d.target.closest(".ms-container");
  if (!_0x3b9929) {
    return;
  }
  _0x5c0a73.dataset.srcId = _0x2995f9;
  _0x5c0a73.id = "ms-portal-dropdown";
  document.body.appendChild(_0x5c0a73);
  var _0x468f79 = _0x3b9929.getBoundingClientRect();
  var _0x667d47 = 260;
  var _0x336a01 = window.innerHeight - _0x468f79.bottom - 8;
  var _0x6e2c5c = _0x468f79.top - 8;
  _0x5c0a73.style.position = "fixed";
  _0x5c0a73.style.left = _0x468f79.left + "px";
  _0x5c0a73.style.width = Math.max(_0x468f79.width, 220) + "px";
  _0x5c0a73.style.zIndex = "2147483647";
  _0x5c0a73.style.maxHeight =
    Math.min(_0x667d47, Math.max(_0x336a01, _0x6e2c5c)) + "px";
  _0x5c0a73.style.overflowY = "auto";
  _0x5c0a73.style.display = "block";
  _0x5c0a73.style.background = "white";
  _0x5c0a73.style.border = "1px solid #d4dce8";
  _0x5c0a73.style.borderRadius = "0 0 8px 8px";
  _0x5c0a73.style.boxShadow = "0 12px 36px rgba(10,22,40,.25)";
  if (_0x336a01 >= 120 || _0x336a01 >= _0x6e2c5c) {
    _0x5c0a73.style.top = _0x468f79.bottom + 2 + "px";
    _0x5c0a73.style.bottom = "auto";
    _0x5c0a73.style.borderRadius = "0 0 8px 8px";
  } else {
    _0x5c0a73.style.top = "auto";
    _0x5c0a73.style.bottom = window.innerHeight - _0x468f79.top + 2 + "px";
    _0x5c0a73.style.borderRadius = "8px 8px 0 0";
  }
}
function _closeMsPortal() {
  var _0x308f14 = document.getElementById("ms-portal-dropdown");
  if (!_0x308f14) {
    return;
  }
  var _0x529f8a = _0x308f14.dataset.srcId;
  if (_0x529f8a) {
    var _0x297ffd = document.querySelector(
      "[onclick*=\"'" + _0x529f8a + "'\"]",
    );
    if (_0x297ffd) {
      _0x297ffd.appendChild(_0x308f14);
    }
    _0x308f14.style.display = "none";
    _0x308f14.id = _0x529f8a;
    delete _0x308f14.dataset.srcId;
  }
}
function restoreMSCheckboxes(_0x3d1878, _0x10b982) {
  var _0x8754ef = document.getElementById("ms" + _0x3d1878);
  var _0xb02e21 = document.getElementById("text" + _0x3d1878);
  var _0x4bcbeb = document.getElementById("in" + _0x3d1878);
  if (!_0x8754ef) {
    return;
  }
  _0x8754ef
    .querySelectorAll('input[type="checkbox"]')
    .forEach(function (_0x2be6cb) {
      _0x2be6cb.checked = false;
    });
  if (!_0x10b982 || _0x10b982 === "SELECT" || _0x10b982 === "") {
    if (_0xb02e21) {
      _0xb02e21.innerText = "SELECT";
    }
    if (_0x4bcbeb) {
      _0x4bcbeb.value = "NIL";
    }
    return;
  }
  if (_0x10b982.toUpperCase() === "NIL") {
    if (_0xb02e21) {
      _0xb02e21.innerText = "NIL";
    }
    if (_0x4bcbeb) {
      _0x4bcbeb.value = "NIL";
    }
    var _0x5d6cb7 = _0x8754ef.querySelector(
      'input[type="checkbox"][value="NIL"]',
    );
    if (_0x5d6cb7) {
      _0x5d6cb7.checked = true;
    }
    return;
  }
  var _0x22e6dd = _0x10b982
    .toUpperCase()
    .split("/")
    .map(function (_0x343b64) {
      return _0x343b64.trim();
    });
  var _0x939fbf = [];
  _0x8754ef
    .querySelectorAll('input[type="checkbox"]')
    .forEach(function (_0x305072) {
      if (_0x22e6dd.includes(_0x305072.value.toUpperCase())) {
        _0x305072.checked = true;
        _0x939fbf.push(_0x305072.value);
      }
    });
  var _0x3cf2e3 = _0x939fbf.length > 0 ? _0x939fbf.join("/") : _0x10b982;
  if (_0xb02e21) {
    _0xb02e21.innerText = _0x3cf2e3;
  }
  if (_0x4bcbeb) {
    _0x4bcbeb.value = _0x3cf2e3;
  }
}
function updateMS(_0x3ba24e) {
  var _0x481499 = document.getElementById("ms" + _0x3ba24e);
  if (!_0x481499) {
    var _0x309b7a = document.getElementById("ms-portal-dropdown");
    if (_0x309b7a && _0x309b7a.dataset.srcId === "ms" + _0x3ba24e) {
      _0x481499 = _0x309b7a;
    }
  }
  const _0x349912 = document.getElementById("text" + _0x3ba24e);
  const _0xd1c676 = document.getElementById("in" + _0x3ba24e);
  if (!_0x481499 || !_0xd1c676) {
    return;
  }
  const _0x36a3b5 = _0x481499.querySelectorAll(
    'input[type="checkbox"]:checked',
  );
  let _0x3e461e = Array.from(_0x36a3b5).map((_0x40dce4) =>
    _0x40dce4.value.toUpperCase(),
  );
  if (_0x3e461e.length > 0) {
    if (_0x3e461e.includes("NIL")) {
      _0x481499
        .querySelectorAll('input[type="checkbox"]')
        .forEach(function (_0x20c458) {
          if (_0x20c458.value.toUpperCase() !== "NIL") {
            _0x20c458.checked = false;
          }
        });
      _0xd1c676.value = "NIL";
      if (_0x349912) {
        _0x349912.innerText = "NIL";
      }
    } else {
      const _0x4f0913 = _0x3e461e.join("/");
      _0xd1c676.value = _0x4f0913;
      if (_0x349912) {
        _0x349912.innerText = _0x4f0913;
      }
    }
  } else {
    _0xd1c676.value = "NIL";
    if (_0x349912) {
      _0x349912.innerText = "SELECT";
    }
  }
}
function pasteExcel() {
  const _0x29231b = prompt("Enter Password to Open Paste Zone:");
  if (_0x29231b === "1782") {
    document.getElementById("pasteZone").style.display = "block";
    document.getElementById("bulkInput").focus();
  } else if (_0x29231b !== null) {
    myAlert("❌ Invalid Password");
  }
}
window.processBulkPaste = async function () {
  const _0x21bfc6 = document.getElementById("uploadStatus");
  const _0x47b42c = document.getElementById("progressBar");
  const _0xbe9f7e = document.getElementById("progressText");
  const _0x282b68 = document.getElementById("bulkInput");
  const _0x2da771 = document.getElementById("pasteZone");
  if (_0x21bfc6) {
    _0x21bfc6.style.display = "block";
  }
  const _0x3f6eac = _0x282b68.value.trim();
  if (!_0x3f6eac) {
    return alert("Paste data first!");
  }
  const _0x32bcac = _0x3f6eac.replace(/\r/g, "").split(/\n(?=\d+\t)/);
  const _0x1ce5e4 = 400;
  let _0x3bfa4c = 0;
  let _0x2f5777 = [];
  let _0x55ad3d = new Map();
  try {
    for (let _0x545e1e = 0; _0x545e1e < _0x32bcac.length; _0x545e1e++) {
      if (_0x545e1e % 500 === 0) {
        await new Promise((_0x2b84d5) => setTimeout(_0x2b84d5, 0));
      }
      const _0x541265 = _0x32bcac[_0x545e1e]
        .split("\t")
        .map((_0x29a4a5) => (_0x29a4a5 || "").trim());
      const _0x4e3f7c = (_0x541265[0] || _0x545e1e + 1).toString().trim();
      const _0x52aa81 = (_0x541265[2] || "").toUpperCase().trim();
      const _0x57ba2c = _0x52aa81 || "ROW_" + _0x4e3f7c;
      const _0x52d406 = _0x57ba2c + "_" + _0x4e3f7c;
      while (_0x541265.length < 27) {
        _0x541265.push("");
      }
      const _0x2cb0ac = {
        uniqueId: _0x57ba2c,
        auditTrail: "",
        status: "",
        ...Object.fromEntries(
          _0x541265
            .slice(0, 27)
            .map((_0x3526b9, _0x593494) => [
              "field" + (_0x593494 + 1),
              (_0x3526b9 || "").trim().toUpperCase(),
            ]),
        ),
      };
      _0x55ad3d.set(_0x52d406, {
        unique_id: _0x52d406,
        data: _0x2cb0ac,
      });
      if (_0x55ad3d.size >= _0x1ce5e4) {
        _0x2f5777 = Array.from(_0x55ad3d.values());
        _0x55ad3d.clear();
        const { error: _0x22fc61 } = await supabaseClient
          .from("gradation_list")
          .upsert(_0x2f5777);
        if (_0x22fc61) {
          throw _0x22fc61;
        }
        _0x3bfa4c += _0x2f5777.length;
        _0x3e90b6(_0x3bfa4c, _0x32bcac.length);
      }
    }
    if (_0x55ad3d.size > 0) {
      _0x2f5777 = Array.from(_0x55ad3d.values());
      const { error: _0x519da8 } = await supabaseClient
        .from("gradation_list")
        .upsert(_0x2f5777);
      if (_0x519da8) {
        throw _0x519da8;
      }
      _0x3bfa4c += _0x2f5777.length;
      _0x3e90b6(_0x3bfa4c, _0x32bcac.length);
    }
    if (_0x47b42c) {
      _0x47b42c.style.width = "100%";
      _0x47b42c.innerText = "100%";
      _0x47b42c.style.background = "green";
    }
    if (_0xbe9f7e) {
      _0xbe9f7e.innerText = "✅ Upload Complete!";
    }
    await new Promise((_0x19746b) => setTimeout(_0x19746b, 1200));
    if (_0x21bfc6) {
      _0x21bfc6.style.display = "none";
    }
    if (_0x282b68) {
      _0x282b68.value = "";
    }
    if (_0x2da771) {
      _0x2da771.style.display = "none";
    }
    alert("🎉 Upload complete: " + _0x3bfa4c + " records");
    await loadData();
  } catch (_0x26d172) {
    console.error("❌ Upload failed:", _0x26d172);
    alert("❌ Upload failed: " + _0x26d172.message);
    if (_0x21bfc6) {
      _0x21bfc6.style.display = "none";
    }
  }
  function _0x3e90b6(_0x5a3b48, _0x541ec8) {
    const _0x3e1451 = Math.min((_0x5a3b48 / _0x541ec8) * 100, 100).toFixed(1);
    if (_0x47b42c) {
      _0x47b42c.style.width = _0x3e1451 + "%";
      _0x47b42c.innerText = _0x3e1451 + "%";
    }
    if (_0xbe9f7e) {
      _0xbe9f7e.innerText = "Uploading... " + _0x5a3b48 + " / " + _0x541ec8;
    }
  }
};
window.onclick = function (_0x174983) {
  if (
    !_0x174983.target.closest(".ms-container") &&
    !_0x174983.target.closest("#ms-portal-dropdown")
  ) {
    _closeMsPortal();
  }
};
function autoDesignationLogic() {
  const _0x480ce1 = document.getElementById("in8").value;
  const _0x5dcd6d = document.getElementById("in14").value;
  const _0x4658a0 = document.getElementById("in16");
  const _0xa190d2 = _0x4658a0 && _0x4658a0.value ? _0x4658a0.value : "";
  const _0x23d58c = document.getElementById("in15");
  const _0x47f718 = document.getElementById("in16");
  const _0x568a93 = document.getElementById("in17");
  if (_0x480ce1 === "DIR") {
    _0x47f718.type = "text";
    _0x47f718.value = "NIL";
    _0x47f718.setAttribute("readonly", "true");
    _0x47f718.style.backgroundColor = "var(--disabled-bg)";
    if (_0x5dcd6d) {
      const _0x476f64 = new Date(_0x5dcd6d);
      const _0x474fc0 = new Date("2018-07-01");
      _0x23d58c.value = _0x476f64 >= _0x474fc0 ? "MS" : "SHIKSHA KARMI-2/SSS-2";
    } else {
      _0x23d58c.value = "";
    }
    _0x568a93.value = _0x5dcd6d;
  } else if (_0x480ce1 === "PRO") {
    _0x47f718.type = "date";
    if (_0x47f718.value === "NIL") {
      _0x47f718.value = "";
    }
    _0x47f718.removeAttribute("readonly");
    _0x47f718.style.backgroundColor = "#fff";
    _0x23d58c.value = "SHIKSHA KARMI-3/SSS-3";
    _0x568a93.value = _0xa190d2;
  } else {
    _0x47f718.type = "date";
    _0x47f718.removeAttribute("readonly");
    _0x23d58c.value = "";
    _0x568a93.value = "";
  }
  calculateSeniority();
}
function handle18Mode() {
  const _0x28998d = document.getElementById("in19mode").value;
  const _0x4617c4 = document.getElementById("in19");
  if (_0x28998d === "NIL") {
    _0x4617c4.value = "NIL";
    _0x4617c4.type = "text";
    _0x4617c4.readOnly = true;
    _0x4617c4.style.background = "#bdc3c7";
    _0x4617c4.style.width = "130px";
    const _0x561426 = document.getElementById("transferUploadWarningBox");
    if (_0x561426) {
      _0x561426.style.display = "none";
    }
  } else {
    _0x4617c4.value = "";
    _0x4617c4.type = "date";
    _0x4617c4.readOnly = false;
    _0x4617c4.style.background = "#fff";
    _0x4617c4.style.width = "130px";
  }
  if (typeof calculateSeniority === "function") {
    calculateSeniority();
  }
}
function checkTransferUploadBox() {
  const _0x48c8ef = document.getElementById("in19").value;
  const _0x1a6b56 = document.getElementById("in19mode").value;
  const _0xd0093 = document.getElementById("transferUploadWarningBox");
  if (_0xd0093) {
    _0xd0093.style.display =
      _0x48c8ef && _0x48c8ef !== "NIL" && _0x1a6b56 === "DATE"
        ? "block"
        : "none";
  }
}
function updateTransferUploadStatus19(_0x1045a6) {
  const _0x194492 = _0x1045a6.target.files[0];
  const _0x379dcd = document.getElementById("transferFileName19");
  const _0x29d50e = document.getElementById("transferUploadBox19");
  if (_0x194492) {
    const _0x21b672 = 102400;
    if (_0x194492.size > _0x21b672) {
      myAlert(
        "❌ Transfer Document size cannot exceed 100KB.\nYour file: " +
          (_0x194492.size / 1024).toFixed(1) +
          "KB\nPlease compress the file and upload again.",
      );
      _0x1045a6.target.value = "";
      _0x379dcd.style.display = "none";
      _0x29d50e.style.borderColor = "";
      _0x29d50e.style.color = "";
      _0x29d50e.textContent = "📤 Transfer Document Upload करें (PDF/JPG)";
      return;
    }
    const _0x292f20 = new FileReader();
    _0x292f20.onload = function (_0x2d5e82) {
      window.transferFileURL19 = _0x2d5e82.target.result;
    };
    _0x292f20.readAsDataURL(_0x194492);
    _0x379dcd.textContent = "✅ " + _0x194492.name;
    _0x379dcd.style.display = "block";
    _0x29d50e.style.borderColor = "#2e7d32";
    _0x29d50e.style.color = "#2e7d32";
    _0x29d50e.textContent = "✅ दस्तावेज़ चुना गया — बदलने के लिए क्लिक करें";
  }
}
function validateFieldGap() {
  const _0x274aa7 = document.getElementById("in7");
  const _0x40c7b4 = document.getElementById("in14");
  const _0x5b07fe = document.getElementById("in16");
  [_0x274aa7, _0x40c7b4, _0x5b07fe].forEach((_0x3362db) => {
    _0x3362db.classList.remove("invalid-field");
    _0x3362db.title = "";
  });
  let _0x18ea09 = [];
  if (_0x274aa7.value && _0x40c7b4.value) {
    let _0x35ca2d = new Date(_0x274aa7.value);
    let _0x481562 = new Date(_0x40c7b4.value);
    let _0x134d1c = (_0x481562 - _0x35ca2d) / 31557600000;
    if (_0x134d1c < 18) {
      _0x274aa7.classList.add("invalid-field");
      _0x40c7b4.classList.add("invalid-field");
      _0x274aa7.title =
        "⚠️ Age gap must be 18+ years between DOB and First Appointment";
      _0x40c7b4.title =
        "⚠️ Age gap must be 18+ years between DOB and First Appointment";
      _0x18ea09.push(
        "Age Difference Error! (Field 7 & 14 must have 18+ years gap)",
      );
    }
  }
  if (_0x40c7b4.value && _0x5b07fe.value) {
    let _0x4502f9 = new Date(_0x40c7b4.value);
    let _0x429c33 = new Date(_0x5b07fe.value);
    let _0x4cdf86 = (_0x429c33 - _0x4502f9) / 31557600000;
    if (_0x4cdf86 < 7) {
      _0x40c7b4.classList.add("invalid-field");
      _0x5b07fe.classList.add("invalid-field");
      _0x40c7b4.title =
        (_0x40c7b4.title ? _0x40c7b4.title + " | " : "") +
        "⚠️ Field 14 & 16 must have at least 7 years gap";
      _0x5b07fe.title = "⚠️ Field 14 & 16 must have at least 7 years gap";
      _0x18ea09.push("Field 14 & 16 Gap Error! (Must be 7+ years)");
    }
  }
  const _0x246296 = document.getElementById("in19");
  const _0x1fab9c = document.getElementById("in19mode");
  if (_0x246296) {
    _0x246296.classList.remove("invalid-field");
  }
  if (
    _0x40c7b4.value &&
    _0x246296 &&
    _0x246296.value &&
    _0x1fab9c &&
    _0x1fab9c.value !== "NIL"
  ) {
    let _0x64b27f = new Date(_0x40c7b4.value);
    let _0x43b541 = new Date(_0x246296.value);
    if (_0x43b541 <= _0x64b27f) {
      _0x40c7b4.classList.add("invalid-field");
      _0x246296.classList.add("invalid-field");
      _0x40c7b4.title =
        (_0x40c7b4.title ? _0x40c7b4.title + " | " : "") +
        "⚠️ Transfer Date (Field 19) must be after First Appointment Date (Field 14)";
      _0x246296.title =
        "⚠️ Transfer Date must be after First Appointment Date (Field 14)";
      _0x18ea09.push(
        "Field 14 & 19 Error! Transfer Date must be after First Appointment Date.",
      );
    }
  }
  return _0x18ea09;
}
function validateProbationDate() {
  const _0x18b31a = document.getElementById("in14");
  const _0x20e837 = document.getElementById("probOrderDate");
  if (!_0x18b31a || !_0x20e837) {
    return;
  }
  _0x20e837.classList.remove("invalid-field");
  _0x20e837.style.border = "";
  _0x20e837.style.background = "";
  _0x20e837.style.color = "";
  _0x20e837.style.boxShadow = "";
  _0x20e837.title = "";
  if (_0x18b31a.value && _0x20e837.value) {
    let _0x3a4b49 = new Date(_0x18b31a.value);
    let _0x1a3b24 = new Date(_0x20e837.value);
    let _0x45e12e = (_0x1a3b24 - _0x3a4b49) / 31557600000;
    if (_0x45e12e < 3) {
      _0x20e837.classList.add("invalid-field");
      _0x20e837.title =
        "⚠️ आदेश दिनांक, प्रथम नियुक्ति दिनांक से कम से कम 3 वर्ष बाद होनी चाहिए";
    }
  }
}
function isDuplicateUniqueID(_0x37a483, _0x11226c) {
  const _0x4288ea = document.querySelectorAll("#tableBody tr");
  let _0x296b25 = false;
  _0x4288ea.forEach((_0x4bf03c) => {
    if (_0x4bf03c === _0x11226c) {
      return;
    }
    const _0x2c8520 = _0x4bf03c.cells[2].innerText.trim().toUpperCase();
    if (_0x2c8520 === _0x37a483.toUpperCase() && _0x2c8520 !== "") {
      _0x296b25 = true;
    }
  });
  return _0x296b25;
}
async function saveEntry(_0x19f4d7) {
  if (document.getElementById("in23").value === "NO") {
    document.getElementById("in24").value = "";
    document.getElementById("in25").value = "";
    document.getElementById("in26").value = "";
  }
  let _0x1a395f = [];
  const _0x45a64d = document.getElementById("userField").value.toUpperCase();
  const _0x2606c2 = _0x45a64d.replace("DEO", "") || "UNKNOWN";
  const _0x1ed88d = new Date().toLocaleString();
  for (let _0x3d46d9 = 1; _0x3d46d9 <= 27; _0x3d46d9++) {
    const _0xbbb9dc = document.getElementById("in" + _0x3d46d9);
    if (_0xbbb9dc) {
      _0xbbb9dc.classList.remove("invalid-field");
    }
  }
  const _0x3ee41e = document.getElementById("in3");
  const _0xe4686f = _0x3ee41e ? _0x3ee41e.value.trim().toUpperCase() : "";
  if (_0xe4686f === "" || _0xe4686f.length !== 6) {
    _0x3ee41e.classList.add("invalid-field");
    _0x1a395f.push("• Field 3 (Unique ID) must be exactly 6 characters.");
  }
  for (let _0x507352 = 1; _0x507352 <= 27; _0x507352++) {
    const _0x4aa394 = document.getElementById("in" + _0x507352);
    if (!_0x4aa394 || _0x507352 === 1 || _0x507352 === 2 || _0x507352 === 3) {
      continue;
    }
    if (
      _0x507352 === 19 &&
      document.getElementById("in19mode")?.value === "NIL"
    ) {
      continue;
    }
    if (
      (_0x507352 === 24 || _0x507352 === 25 || _0x507352 === 26) &&
      document.getElementById("in23")?.value === "NO"
    ) {
      continue;
    }
    if (_0x4aa394.value.trim() === "") {
      _0x4aa394.classList.add("invalid-field");
      _0x1a395f.push("• Field " + _0x507352 + " is mandatory.");
    }
  }
  const _0xb5104e = document.getElementById("in7");
  const _0x3d0145 = document.getElementById("in14");
  if (_0xb5104e.value && _0x3d0145.value) {
    let _0xe95f1a =
      (new Date(_0x3d0145.value) - new Date(_0xb5104e.value)) / 31557600000;
    if (_0xe95f1a < 18) {
      _0xb5104e.classList.add("invalid-field");
      _0x3d0145.classList.add("invalid-field");
      _0x1a395f.push("• Age Gap must be 18+ years.");
    }
  }
  const _0xb19556 = document.getElementById("in16");
  if (_0x3d0145.value && _0xb19556 && _0xb19556.value) {
    let _0x4e2504 =
      (new Date(_0xb19556.value) - new Date(_0x3d0145.value)) / 31557600000;
    if (_0x4e2504 < 7) {
      _0x3d0145.classList.add("invalid-field");
      _0xb19556.classList.add("invalid-field");
      _0x1a395f.push("• Field 14 & 16 must have at least 7 years gap.");
    }
  }
  const _0xc78c57 = document.getElementById("in19");
  const _0x20bdfe = document.getElementById("in19mode");
  if (
    _0x3d0145.value &&
    _0xc78c57 &&
    _0xc78c57.value &&
    _0x20bdfe &&
    _0x20bdfe.value !== "NIL"
  ) {
    if (new Date(_0xc78c57.value) <= new Date(_0x3d0145.value)) {
      _0x3d0145.classList.add("invalid-field");
      _0xc78c57.classList.add("invalid-field");
      _0x1a395f.push(
        "• Field 19 (Transfer Date) must be after Field 14 (First Appointment Date).",
      );
    }
  }
  const _0x25c135 = document.getElementById("probOrderDate");
  const _0xb4a10d = document.getElementById("probYes");
  if (_0x25c135) {
    _0x25c135.classList.remove("invalid-field");
  }
  if (
    _0x3d0145.value &&
    _0x25c135 &&
    _0x25c135.value &&
    _0xb4a10d &&
    _0xb4a10d.checked
  ) {
    let _0x432ef3 =
      (new Date(_0x25c135.value) - new Date(_0x3d0145.value)) / 31557600000;
    if (_0x432ef3 < 3) {
      _0x25c135.classList.add("invalid-field");
      _0x1a395f.push(
        "• आदेश दिनांक (Probation Order Date) must be at least 3 years after First Appointment Date (Field 14).",
      );
    }
  }
  if (_0x1a395f.length > 0) {
    myAlert("⚠️ VALIDATION ERRORS:\n\n" + _0x1a395f.join("\n"));
    return false;
  }
  const _0x28541f = document.getElementById("in19")?.value || "";
  const _0x50acf1 = document.getElementById("in19mode")?.value || "";
  if (_0x28541f && _0x28541f !== "NIL" && _0x50acf1 === "DATE") {
    const _0x413523 =
      window.transferFileURL19 && window.transferFileURL19.length > 0;
    if (!_0x413523) {
      const _0x2d4bfe = document.getElementById("transferUploadBox19");
      if (_0x2d4bfe) {
        _0x2d4bfe.style.borderColor = "#c62828";
        _0x2d4bfe.style.color = "#c62828";
        _0x2d4bfe.style.animation = "none";
        setTimeout(() => {
          _0x2d4bfe.style.animation = "";
        }, 10);
      }
      myAlert(
        "⚠️ Transfer Document अपलोड करना अनिवार्य है!\n\nTransfer Date भरी है — कृपया पहले Transfer Document (PDF/JPG) अपलोड करें, फिर Save करें।",
      );
      document.getElementById("transferUploadBox19")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return false;
    }
  }
  if (_0x19f4d7) {
    document.getElementById("in1").value = generateSerialNumber();
  }
  let _0x168bde = {
    _oldData: {},
  };
  let _0xf3a72a = window.fullData.findIndex(
    (_0x4d8e32) =>
      (_0x4d8e32.uniqueId || "").trim().toUpperCase() === _0xe4686f,
  );
  let _0x55f263 = _0xf3a72a !== -1 ? window.fullData[_0xf3a72a] : null;
  if (window._formSnapshot && Object.keys(window._formSnapshot).length > 0) {
    for (let _0x23568e = 1; _0x23568e <= 27; _0x23568e++) {
      _0x168bde._oldData["field" + _0x23568e] =
        window._formSnapshot["field" + _0x23568e] || "";
    }
  } else if (_0x55f263) {
    for (let _0x1b845d = 1; _0x1b845d <= 27; _0x1b845d++) {
      _0x168bde._oldData["field" + _0x1b845d] = (
        _0x55f263["field" + _0x1b845d] || ""
      )
        .toString()
        .trim()
        .toUpperCase();
    }
  }
  for (let _0x5f1813 = 1; _0x5f1813 <= 27; _0x5f1813++) {
    const _0x417994 = document.getElementById("in" + _0x5f1813);
    let _0x544650 = _0x417994 ? _0x417994.value.trim().toUpperCase() : "";
    if (_0x5f1813 === 19 && !_0x544650) {
      _0x544650 = "NIL";
    }
    _0x168bde["field" + _0x5f1813] = _0x544650;
  }
  var _0x463d27 = extractProbationData(_0x168bde.field27 || "");
  _0x168bde.field27 = _0x463d27.cleanRemark.toUpperCase();
  _0x168bde.field1 = document.getElementById("in1")?.value.trim() || "";
  _0x168bde.document_url = uploadedFileURL || "";
  _0x168bde.uniqueId = _0xe4686f;
  _0x168bde.status = _0x19f4d7 ? "NEW ENTRY" : "UPDATED";
  _0x168bde.auditTrail = _0x2606c2 + " | " + _0x1ed88d;
  _0x168bde.field28 = _0x168bde.status;
  _0x168bde.field29 = _0x168bde.auditTrail;
  _0x168bde.field30 = uploadedFileURL || "";
  _0x168bde.field31 = window.transferFileURL19 || "";
  if (!_0x19f4d7 && _0x55f263) {
    const _0x518322 = _0xe4686f;
    let _0x45ec09 = {};
    for (let _0x2722ba = 1; _0x2722ba <= 27; _0x2722ba++) {
      _0x45ec09["field" + _0x2722ba] =
        _0x168bde._oldData["field" + _0x2722ba] || "";
    }
    let _0x333c5b = {};
    for (let _0x1792dc = 1; _0x1792dc <= 27; _0x1792dc++) {
      _0x333c5b["field" + _0x1792dc] =
        document
          .getElementById("in" + _0x1792dc)
          ?.value.trim()
          .toUpperCase() || "";
    }
    _0x168bde.history_log = _0x55f263?.history_log
      ? [..._0x55f263.history_log]
      : [];
    _0x168bde.history_log.push({
      time: new Date().toLocaleString(),
      before: JSON.stringify(_0x45ec09),
      after: JSON.stringify(_0x333c5b),
    });
  }
  let _0x48a6cb = [];
  if (_0x55f263 && !_0x19f4d7) {
    for (let _0x276324 = 1; _0x276324 <= 27; _0x276324++) {
      const _0x452207 = document.getElementById("in" + _0x276324);
      if (!_0x452207) {
        continue;
      }
      let _0x56b80f = _0x452207.value.trim().toUpperCase();
      let _0x5bb360 =
        window._formSnapshot &&
        window._formSnapshot["field" + _0x276324] !== undefined
          ? window._formSnapshot["field" + _0x276324]
          : _0x168bde._oldData["field" + _0x276324] || "";
      if (_0x56b80f !== _0x5bb360) {
        _0x48a6cb.push("field" + _0x276324);
      }
    }
  }
  _0x168bde.changed_fields = [
    ...new Set([...(_0x55f263?.changed_fields || []), ..._0x48a6cb]),
  ];
  if (!_0x19f4d7 && _0x55f263 && _0x48a6cb.length === 0) {
    myAlert(
      "ℹ️ No Changes Detected\n\nRecord " +
        _0xe4686f +
        " was not updated because no fields were modified.",
    );
    umsToast("No changes detected — nothing updated", "info");
    return;
  }
  try {
    const { error: _0x31f647 } = await supabaseClient
      .from("gradation_list")
      .upsert(
        {
          unique_id: _0xe4686f,
          data: _0x168bde,
        },
        {
          onConflict: "unique_id",
        },
      );
    if (_0x31f647) {
      throw _0x31f647;
    }
    let _0x51228f = window.fullData.findIndex(
      (_0x4abce9) => _0x4abce9.uniqueId === _0xe4686f,
    );
    if (_0x51228f !== -1) {
      window.fullData[_0x51228f] = {
        ...window.fullData[_0x51228f],
        ..._0x168bde,
        uniqueId: _0xe4686f,
      };
    } else {
      window.fullData.push({
        uniqueId: _0xe4686f,
        ..._0x168bde,
      });
    }
    window.filteredData = [...window.fullData];
    let _0x22d06e = document.querySelector(".scroll-area");
    let _0xe8285a = _0x22d06e.scrollTop;
    renderVirtual();
    _0x22d06e.scrollTop = _0xe8285a;
    setTimeout(() => {
      const _0x4a1605 = document.querySelector(
        '#tableBody tr[data-id="' + _0xe4686f + '"]',
      );
      if (_0x4a1605) {
        _0x4a1605.classList.remove("ums-save-flash");
        _0x4a1605.offsetHeight;
        _0x4a1605.classList.add("ums-save-flash");
        setTimeout(() => _0x4a1605.classList.remove("ums-save-flash"), 1700);
      }
    }, 80);
    myAlert(
      "✅ Record " +
        _0xe4686f +
        " " +
        (_0x19f4d7 ? "saved" : "updated") +
        " successfully",
    );
    umsToast(
      "Record " +
        _0xe4686f +
        " " +
        (_0x19f4d7 ? "saved ✨" : "updated 🔄") +
        " successfully",
      "success",
    );
    broadcastDataUpdate(
      _realtimeDistrict() +
        " " +
        (_0x19f4d7 ? "added new record" : "updated record") +
        ": " +
        _0xe4686f,
      _0x19f4d7 ? "info" : "update",
    );
    if (_0x19f4d7) {
      selectedRowElement = null;
    }
    uploadedFileURL = "";
    if (typeof clearForm === "function") {
      clearForm();
    }
    if (typeof closeModal === "function") {
      closeModal();
    }
  } catch (_0x578975) {
    console.error("Save Error:", _0x578975);
    let _0x2b8d2a = window.fullData.some(
      (_0x1c4909) => _0x1c4909.uniqueId === _0xe4686f,
    );
    if (_0x2b8d2a) {
      myAlert("✅ Record " + _0xe4686f + " saved successfully");
    } else {
      myAlert("❌ Save Failed: " + (_0x578975.message || "Unknown error"));
    }
    selectedRowElement = null;
    if (typeof clearForm === "function") {
      clearForm();
    }
  }
}
function openRowInForm(_0x49abe2) {
  const _0x20205e = document.getElementById("searchVal");
  if (!_0x20205e) {
    return;
  }
  _0x20205e.value = _0x49abe2;
  toggleForm(true);
  performSearch();
}
async function performSearch() {
  const _0x41c8c3 = document
    .getElementById("searchVal")
    .value.trim()
    .toUpperCase();
  if (!_0x41c8c3) {
    myAlert("Please enter a Unique ID to search.");
    return;
  }
  const _0x8a3712 = document.getElementById("tableBody");
  const _0x11f8d0 = _0x8a3712.querySelectorAll("tr");
  _0x8a3712.style.display = "none";
  const _0x4bc740 = window.fullData.find(
    (_0x35e559) =>
      (_0x35e559.uniqueId || "").trim().toUpperCase() === _0x41c8c3,
  );
  if (_0x4bc740) {
    const _0x3ec863 = _0x4bc740;
    const _0x131049 = document.getElementById("displaySNo");
    if (_0x131049) {
      _0x131049.innerText = _0x3ec863.field1 || "";
    }
    for (let _0x428953 = 1; _0x428953 <= 27; _0x428953++) {
      const _0x1eea1d = document.getElementById("in" + _0x428953);
      if (!_0x1eea1d) {
        continue;
      }
      let _0x13a691 = _0x3ec863["field" + _0x428953] || "";
      if (
        _0x1eea1d.type === "date" ||
        [7, 14, 16, 17, 18, 19].includes(_0x428953)
      ) {
        if (
          _0x13a691 &&
          _0x13a691.includes("-") &&
          _0x13a691.toUpperCase() !== "NIL"
        ) {
          const _0x3c82e1 = _0x13a691.split("-");
          _0x1eea1d.value =
            _0x3c82e1[0].length === 2
              ? _0x3c82e1[2] + "-" + _0x3c82e1[1] + "-" + _0x3c82e1[0]
              : _0x13a691;
        } else {
          _0x1eea1d.value = "";
        }
        if (_0x428953 === 19) {
          const _0x775a22 = document.getElementById("in19mode");
          if (_0x775a22) {
            _0x775a22.value = _0x13a691 && _0x13a691 !== "NIL" ? "DATE" : "NIL";
          }
          _0x1eea1d.style.display =
            _0x13a691 && _0x13a691 !== "NIL" ? "inline-block" : "none";
        }
      } else if ([10, 11, 12].includes(_0x428953)) {
        restoreMSCheckboxes(_0x428953, _0x13a691);
      } else if (_0x1eea1d.tagName === "SELECT") {
        _0x1eea1d.value = _0x13a691;
        if (_0x1eea1d.selectedIndex === -1) {
          Array.from(_0x1eea1d.options).forEach((_0xbfc0a0) => {
            if (_0xbfc0a0.text.toUpperCase() === _0x13a691.toUpperCase()) {
              _0x1eea1d.value = _0xbfc0a0.value;
            }
          });
        }
      } else {
        _0x1eea1d.value = _0x13a691;
      }
    }
    const _0x2d79d4 = document.getElementById("retirementField");
    const _0x28f505 = _0x3ec863.field7 || "";
    if (_0x28f505 && _0x28f505 !== "NIL") {
      let _0x18f484;
      if (_0x28f505.includes("-")) {
        let _0x1ff70f = _0x28f505.split("-");
        if (_0x1ff70f[0].length === 4) {
          _0x18f484 = new Date(_0x28f505);
        } else {
          _0x18f484 = new Date(_0x1ff70f[2], _0x1ff70f[1] - 1, _0x1ff70f[0]);
        }
      } else if (_0x28f505.includes("/")) {
        let _0x6e8e4b = _0x28f505.split("/");
        _0x18f484 = new Date(_0x6e8e4b[2], _0x6e8e4b[1] - 1, _0x6e8e4b[0]);
      }
      if (_0x18f484 && !isNaN(_0x18f484.getTime())) {
        let _0x11c34e = _0x18f484.getFullYear() + 62;
        let _0x3d1db3 = _0x18f484.getMonth() + 1;
        let _0x791456 = new Date(_0x11c34e, _0x3d1db3, 0).getDate();
        let _0x43a910 = String(_0x791456).padStart(2, "0");
        let _0x57f213 = String(_0x3d1db3).padStart(2, "0");
        if (_0x2d79d4) {
          _0x2d79d4.value = _0x43a910 + "-" + _0x57f213 + "-" + _0x11c34e;
          _0x2d79d4.style.color = "black";
          _0x2d79d4.style.fontWeight = "bold";
        }
      } else {
        _0x2d79d4.value = "NIL";
        _0x2d79d4.style.color = "red";
      }
    } else if (_0x2d79d4) {
      _0x2d79d4.value = "NIL";
      _0x2d79d4.style.color = "red";
    }
    if (typeof handleUPPLogic === "function") {
      handleUPPLogic();
    }
    if (typeof autoDesignationLogic === "function") {
      autoDesignationLogic();
    }
    window._formSnapshot = {};
    for (let _0x110551 = 1; _0x110551 <= 27; _0x110551++) {
      const _0x55e39d = document.getElementById("in" + _0x110551);
      if (!_0x55e39d) {
        continue;
      }
      window._formSnapshot["field" + _0x110551] = _0x55e39d.value
        .trim()
        .toUpperCase();
    }
    const _0xeafb1e = document.getElementById("in23");
    if (_0xeafb1e) {
      _0xeafb1e.dispatchEvent(new Event("change"));
    }
    const _0x3bc476 = _0x3ec863.field30 || _0x3ec863.document_url || "";
    const _0x9ddd97 = document.getElementById("fileNameDisplay");
    const _0x4fb9b5 = _0x9ddd97 ? _0x9ddd97.closest(".premium-box") : null;
    if (_0x3bc476 && _0x3bc476 !== "") {
      uploadedFileURL = _0x3bc476;
      window._b64doc_doc30_loaded = _0x3bc476;
      if (_0x9ddd97) {
        _0x9ddd97.innerHTML =
          '✅ Document Uploaded &nbsp;<button onclick="openBase64Doc(\'doc30_loaded\')" style="background:#1565c0;color:white;border:none;padding:2px 7px;border-radius:4px;cursor:pointer;font-size:11px;font-weight:bold;">👁️ View</button>';
        _0x9ddd97.style.color = "#2e7d32";
      }
      if (_0x4fb9b5) {
        _0x4fb9b5.style.borderColor = "#2e7d32";
        _0x4fb9b5.style.background = "#f0fff4";
        _0x4fb9b5.onclick = null;
      }
    } else {
      uploadedFileURL = "";
      if (_0x9ddd97) {
        _0x9ddd97.innerText = "Feature Disabled";
        _0x9ddd97.style.color = "#999";
      }
      if (_0x4fb9b5) {
        _0x4fb9b5.style.borderColor = "#ccc";
        _0x4fb9b5.style.background = "#f0f0f0";
        _0x4fb9b5.style.opacity = "0.5";
        _0x4fb9b5.style.cursor = "not-allowed";
        _0x4fb9b5.onclick = null;
      }
    }
    const _0x590a6d = _0x3ec863.field31 || "";
    const _0x32bd7f = document.getElementById("transferUploadWarningBox");
    const _0x522287 = document.getElementById("transferUploadBox19");
    const _0x573810 = document.getElementById("transferFileName19");
    const _0x3ba1b4 = document.getElementById("in19mode")?.value || "NIL";
    if (_0x3ba1b4 === "DATE" && document.getElementById("in19")?.value) {
      if (_0x32bd7f) {
        _0x32bd7f.style.display = "block";
      }
      if (_0x590a6d && _0x590a6d !== "") {
        window.transferFileURL19 = _0x590a6d;
        if (_0x522287) {
          _0x522287.innerHTML =
            "✅ Document Already Uploaded &nbsp; <button onclick=\"openBase64Doc('transfer31_loaded')\" style='background:#1565c0;color:white;border:none;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:11px;font-weight:bold;margin-left:6px;'>👁️ View</button>";
          window._b64doc_transfer31_loaded = _0x590a6d;
          _0x522287.style.borderColor = "#2e7d32";
          _0x522287.style.color = "#2e7d32";
          _0x522287.onclick = null;
        }
        if (_0x573810) {
          _0x573810.textContent = "✅ Transfer document saved with this record";
          _0x573810.style.display = "block";
          _0x573810.style.color = "#2e7d32";
        }
      } else {
        window.transferFileURL19 = "";
        if (_0x522287) {
          _0x522287.innerHTML = "📤 Transfer Document Upload करें (PDF/JPG)";
          _0x522287.style.borderColor = "#e65100";
          _0x522287.style.color = "#e65100";
          _0x522287.onclick = function () {
            document.getElementById("transferFileInput19").click();
          };
        }
        if (_0x573810) {
          _0x573810.textContent = "";
          _0x573810.style.display = "none";
        }
      }
    } else {
      if (_0x32bd7f) {
        _0x32bd7f.style.display = "none";
      }
      window.transferFileURL19 = "";
    }
    selectedUniqueId = _0x41c8c3;
    _0x8a3712.style.display = "";
    for (let _0x98a197 of _0x11f8d0) {
      if (
        _0x98a197.cells[2] &&
        _0x98a197.cells[2].innerText.trim().toUpperCase() === _0x41c8c3
      ) {
        selectedRowElement = _0x98a197;
        document
          .querySelectorAll("#tableBody tr")
          .forEach((_0x25170b) => _0x25170b.classList.remove("selected-row"));
        _0x98a197.classList.add("selected-row");
        _0x98a197.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      }
    }
    const _0x57ae08 = document.getElementById("newAddBtn");
    if (_0x57ae08) {
      _0x57ae08.style.opacity = "0.35";
      _0x57ae08.style.pointerEvents = "none";
      _0x57ae08.title = "Record loaded — use UPDATE or DELETE";
    }
    return;
  }
  _0x8a3712.style.display = "";
  const _0x110e5d = document.getElementById("newAddBtn");
  if (_0x110e5d) {
    _0x110e5d.style.opacity = "1";
    _0x110e5d.style.pointerEvents = "auto";
    _0x110e5d.title = "";
  }
}
async function deleteEntry() {
  if (!selectedRowElement) {
    return myAlert("Select a record first!");
  }
  let _0x5e80c0 = prompt(
    "To DELETE, enter a reason (or leave blank for 'DELETED'):",
  );
  if (_0x5e80c0 === null) {
    return;
  }
  const _0x184390 = document.getElementById("userField").value.toUpperCase();
  const _0x326a46 = _0x184390 || "UNKNOWN";
  const _0x2a46e0 = new Date().toLocaleString();
  let _0x53dbb2 = _0x5e80c0.trim() === "" ? "DELETED" : _0x5e80c0.toUpperCase();
  let _0x2492dc = selectedRowElement.cells[2].innerText.trim().toUpperCase();
  let _0x19014d = (selectedRowElement.dataset.id || "").trim();
  try {
    let _0x21cc92 = null;
    let _0x3ab401 = null;
    const _0xc877b7 = [...new Set([_0x19014d, _0x2492dc].filter(Boolean))];
    for (let _0x528bd0 of _0xc877b7) {
      const { data: _0x56f951, error: _0x1c7a4b } = await supabaseClient
        .from("gradation_list")
        .select("unique_id, data")
        .eq("unique_id", _0x528bd0)
        .maybeSingle();
      if (!_0x1c7a4b && _0x56f951) {
        _0x21cc92 = _0x56f951.unique_id;
        _0x3ab401 = _0x56f951.data;
        break;
      }
    }
    if (!_0x21cc92) {
      const { data: _0xb72268, error: _0x593557 } = await supabaseClient
        .from("gradation_list")
        .select("unique_id, data")
        .filter("data->>field3", "eq", _0x2492dc)
        .limit(1);
      if (!_0x593557 && _0xb72268 && _0xb72268.length > 0) {
        _0x21cc92 = _0xb72268[0].unique_id;
        _0x3ab401 = _0xb72268[0].data;
      }
    }
    if (!_0x21cc92 || !_0x3ab401) {
      throw new Error("Record not found in DB for ID: " + _0x2492dc);
    }
    _0x3ab401.field27 = _0x53dbb2;
    _0x3ab401.field28 = "DELETED";
    _0x3ab401.field29 = _0x326a46 + " | " + _0x2a46e0;
    const { error: _0x3c2b55 } = await supabaseClient
      .from("gradation_list")
      .update({
        data: _0x3ab401,
      })
      .eq("unique_id", _0x21cc92);
    if (_0x3c2b55) {
      throw _0x3c2b55;
    }
    const _0x2dcaa2 = (_0x378a31) => {
      const _0x41463c = _0x378a31.findIndex(
        (_0x4176f6) =>
          _0x4176f6.uniqueId === _0x21cc92 ||
          _0x4176f6.uniqueId === _0x19014d ||
          (_0x4176f6.field3 || "").trim().toUpperCase() === _0x2492dc,
      );
      if (_0x41463c !== -1) {
        _0x378a31[_0x41463c].field27 = _0x53dbb2;
        _0x378a31[_0x41463c].field28 = "DELETED";
        _0x378a31[_0x41463c].field29 = _0x326a46 + " | " + _0x2a46e0;
        _0x378a31[_0x41463c].uniqueId = _0x21cc92;
      }
    };
    if (window.fullData) {
      _0x2dcaa2(window.fullData);
    }
    if (window.filteredData) {
      _0x2dcaa2(window.filteredData);
    }
    if (selectedRowElement) {
      selectedRowElement.classList.add("deleting-row");
      await new Promise((_0x484f19) => setTimeout(_0x484f19, 560));
    }
    renderVirtual();
    setTimeout(() => {
      let _0x10059a =
        document.querySelector('#tableBody tr[data-id="' + _0x21cc92 + '"]') ||
        document.querySelector('#tableBody tr[data-id="' + _0x19014d + '"]');
      if (_0x10059a) {
        _0x10059a.classList.add("soft-deleted");
        _0x10059a.classList.remove("selected-row");
        _0x10059a.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 50);
    selectedRowElement = null;
    if (typeof clearForm === "function") {
      clearForm();
    }
    broadcastDataUpdate(
      _realtimeDistrict() + " deleted record: " + _0x2492dc,
      "delete",
    );
    setTimeout(() => {
      myAlert("✅ Record marked as Deleted in Database.");
      umsToast("Record deleted successfully 🗑️", "warning");
    }, 100);
  } catch (_0x56c44c) {
    console.error("Delete Error:", _0x56c44c);
    myAlert("❌ Delete failed: " + (_0x56c44c.message || "Unknown error"));
    selectedRowElement = null;
    if (typeof clearForm === "function") {
      clearForm();
    }
  }
}
function selectRow(_0x39f02d) {
  if (selectedRowElement && selectedRowElement !== _0x39f02d) {
    if (typeof unlockRow === "function") {
      unlockRow(selectedRowElement.dataset.id);
    }
  }
  if (typeof lockRow === "function") {
    lockRow(_0x39f02d.dataset.id);
  }
  document
    .querySelectorAll("#tableBody tr")
    .forEach((_0x5908c2) => _0x5908c2.classList.remove("selected-row"));
  _0x39f02d.classList.add("selected-row");
  selectedRowElement = _0x39f02d;
  selectedUniqueId = _0x39f02d.dataset.id;
  const _0x550f30 = document.getElementById("displaySNo");
  if (_0x550f30) {
    _0x550f30.innerText = _0x39f02d.cells[0].innerText;
  }
}
function changeFormZoom(_0x131b67) {
  formZoom += _0x131b67;
  if (formZoom < 9) {
    formZoom = 9;
  }
  document.getElementById("formCard").style.fontSize = formZoom + "px";
  document.getElementById("formZoomVal").innerText = formZoom + "px";
}
function myAlert(_0x58f8ef) {
  document.getElementById("alertMsg").innerText = _0x58f8ef;
  document.getElementById("customAlert").style.display = "flex";
}
function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}
function toggleForm(_0x35fcf5) {
  document.getElementById("formOverlay").style.display = _0x35fcf5
    ? "block"
    : "none";
  if (_0x35fcf5) {
    const _0x152827 = document.getElementById("formStatusBadge");
    if (_0x152827) {
      _0x152827.textContent = "NEW ENTRY";
      _0x152827.style.background = "#1b5e20";
    }
    const _0x442740 = document.querySelectorAll("#formCard .row-item");
    _0x442740.forEach((_0x4a3ad4, _0xf24b19) => {
      _0x4a3ad4.style.animation = "none";
      _0x4a3ad4.offsetHeight;
      _0x4a3ad4.style.animation =
        "ums-fadeInUp 0.28s ease " + _0xf24b19 * 0.018 + "s both";
    });
  }
}
function exportExcel() {
  const _0xf81d9b = XLSX.utils.table_to_book(
    document.getElementById("dataTable"),
  );
  XLSX.writeFile(_0xf81d9b, "MS_Gradation.xlsx");
}
function exportPDF() {
  const { jsPDF: _0x19c617 } = window.jspdf;
  const _0x1a3be4 = new _0x19c617("l", "mm", "a4");
  document.fonts.ready.then(() => {
    const _0x2a266b =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIBAAEAAMBIgACEQEDEQH/xAAwAAEAAwEBAQAAAAAAAAAAAAAAAQUGBAMCAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAC0pFQEgAIEokAAAATAAATABMoIlEgAAASCAASAAAAAAAAAAJgAAAAATEkAAAATAAAAJgAEkAlEgEJEAlEiEkTATASAAHwmIASiQQTCSJiQAAAAABEgACYASESAAAAAAAAAABIAAAABEgAAAAAAAAAAAAAABMAABMBMSESRMSAESQkQBIAAfMJqgSTAEkEkTEgAAAAAAAAAkiYEgAAAAECQRMEvnkmOxT8l66Nkua1dp4YxaNd5ZdMaTzzy0X8UIvpoBofvNjUeuTROx6MNFZ3rDdNZ2DM9dbXbg7K2+xEgAAAAAAAAAAAACSJgAAASgTACSJgSCEj4EASmCJgEwJRIAAAAAAITIQAJTEiASCBBMSITAcFVeuk4st4653/AAV7Sn38FqgH30xPGtPeJpGh9qzmJ1XpE5Fr5MfGxGOa/wCDJzp/GYzy78LRVuzmmPhEzCYHb30cVtre/B+md9yzFrneyfP1S4AAAAAAAAAAAAkgCYAAAkgCYEoHylCAJgEwTEwCSJEggAAAAEggBMSRIRIRMSQVsxZ82cr9s7yp8GuYWqe9lW1NOp76XyfdoWdqvrccTaqDlmNSx3PaNt441Ma34ykzGnjNSaSc1BqPTJQbL1xCJ3jCe8TtGT6aze8fj2RNZw6yZjC/O64b1yi6rdKc4vX0taZSdh2YPsy02CptctZESAAAAAmAAAmJImAAAAAmAAJEBCJhAJiYEgIJRIRIAAAAAAAAmAmAmKuYs6qj5d8urlNsx3Q4fXR2eWmdtu3jzv2M9WWjVV2f9r07OGx7jOfWv6onIdWmUtRe9srbg9emYny+/pAEgiPj0HP49qVbz3UzGb5tYtXEee757Rju614bV97LLeBu2KsqXt6qy76zifLd12lMqsa7XN7eKY0VxhPbLTbqa4w2kRIAAAAAkhMAAAACYAAEokhI+BVMSkgJRIBEiQAQAAmJIAAAAPM9OKoqNsu3hN8ibQq7O/6cdeLt5KSltBU0PprT05ru2MxZ30534+tOdgiSAmJEPmX2IBIAACEiJiSOPsyV6XNrgt1L7iWd45uoijq9g0rg/bW1WmfzcZHxN5y567z0qqndeM1xS4qN8vnq5Uxq7LBWeGuqeHvjsAAAAABMAAAAAAAmBKBEEAJhKYmBMTBIImJAAQCQQACQD4ztq2eb8XTzj3vHh33NphpxdvNn6XvKKu79c+Ds0FhW1TaSy0TCskiJgSjlmOpQ1mlNTWZ5pTv5fPSTFt9fP1zdAgkEZvSZ+9PD34+fbO798qNj0YZWd5w5X3ibu2quml+2ObqpMSJAIkistExkeHd8euedvaatvXec+a0OWlHWbvgtXJunm3y+7/Oqzu5yWn59/YUtEgAAAAAAAAABMTAmJPiYQmAEgCJJIkiYlAJBAAkgkiJDj487tn78x0Yp9tLS1ZoPutw176CsjSnl13NumvsJYaETEwAcUx2+OerNc9dV1fjevRyzorVz3zuMWm16uHR53xGtyd1euhHLuiUomJImONHZyU3tpSi0Wd2GlPil1Gcpenta3c3pW0urjLTC9d9V7Z9VpjvmG7nHWmd7yefozuCQHD3JjJcG7rdc6vQ5DztXb0Ptc5aYX52OZ3y5PXyXpq7LB3uG1+MdQAACYAAAAEwEwJRJAIIhMJIJIkSARKAASCAEwB5n3nPCu6MRO2UWfdd46+TlzFL99X76TTOr0How1kVsiYD5z1o0TD/WudxR6T0mMvZ8n3emq8utzdGEv6qenDYZjT1GGuf22F1+lM943OdtXeuXq5twSAzmjrL0yx0dWHhf1XLS2kpeMdeyyuqy0+cbsKOHhZ5zy1z23Bmbal+evvqHTObHvq4nQd+E6qW2SotctfoRIHxRaBauE7dFmd8tV64nSZ34KbeVUxmX18742Wnw3XlpsXh78+wJAJgEkAJgAAJEATEnzBEyQiUSkAiSJiUAAEwADwJyvxzdWA6NM/jT+/tzb/VHx116xZ99zE+foY6hBOf671tYKWpM/dU3VhfUmnzUO7T5P1rMVhtnru7M6Xl6KKg3GQ1zveSkWrOwpdNnfmxe8xsre8yGvrYM7gAZau2uO6MNd74/XZaeeK22I0pd6Kluc7vD3rq2y/fXazow4Pe45Mdcy5NBvleRPJzb5rki/wCnCg03Z7ZacnXjUxto4LDLQREz8/QzlNvKvbLg0OH65jR5XYRS2KdfH04dGsxnpS+4cnXy7piUwAAAAACYASRMD5SiUAmJAIkCJAAQAPKXzkp5unAdl6Rq58+bf7yvn9a089N5UEL6sre60eHlceiKX08/K9WgoNVS9iOXfwyux8tKYl9WfRjU+2h8a29OK09sr4/a4m+0pe/P1PPvw+3umJQiVRbzMUd4ARIBEjj6yMPfWXRpTiyG1pbR32Xh75aPj7ROL89lT9GPFzd1ZanztMxr89GZ0OJiW1z2nIlxZX9cxfd+lcLd+lDrluZyGnx16RS4HJldr5Xpj9XmubXPaZa/7MtMKsq3pw9NbjvWttu5unl3BIAAAAACYExI+YTCAkkRIiJEgAAgQfOS9a7pwHXrSdZHly7sm6dc/m878hW3j1fGwtHP1K/DXr5Mv8bZXvXl9AVHhssjaNT2YnXZadFXacdLZDZY3p6MLSh6uW0e22w2lzvUcmq+Inu+onHVCSCQIRMTICJiSCSEwSQSCAASiTnxevzW2Vtec3RnelzvT69GOi7Uc29Hn/Tu6cK7svMybbmrLvDXH+exxm2WltsHcUvpHz9Y6gfGX1fzauH1VNW75bnLXXfjphVjXdOHvrsV1Utsnn6c3QTAAAAAmJACJPkRMSAAAAAIAZ3rzW+Q9N8fvX+fpzdHzkfr10z+9VH3jrGE3mVvX002EsbVvszzfdq9V9lvsnx+/O9dlHBdcvRiPTSZTfHa+uP1uO1dU6oZiytZRmOHafMw+4Z6SgSCJIIlKAJQHzCPufOT7RKUSImJAAAImJHF2kYPT9fTrSfL1+cr4XT5nRdOPXlNbmqzyNFwXrx+C8mIpd3xY6Z3U49eu2cXbz7ESmMvqYtXDayj4Nstrk9L656Yl7+HTz2Orwd5jroBhsAJBAmBMTAJISPiYmBEgJRJAABAnj6MhpTw+Tq551XHe8+3zkuiutHrrvPpzuGejy9fiYxfl2ffXzfOqxGnzvyxoKalvvMy3yvrjExS28qs3qaXyup6veJTE5XAhKUJgAOGstXQ+WT5NKavjoF6W3NxLx7efymAQBPp5Ds6KtE3vZllLbX3wfTS+0ZuzztYomtwAAAMd1WfztlbEY6+ON6+Pow6df4Rlp1MZdSssrsfiGI0tVW7Z7xQX/PqEW+MlsPK9cfr8h665aTI7ispfMDow1Vlh9jzb9EGeiYExMEwkgEgiUHzMIJiUwmCQAESImtmtZUHZzLLj2Od/Sl7clS7WcV4BjqTAA+fojH8uzx/VhrKur1+d8TeXn1Cu8rZS9Fbe4mCsyCJQTE8sunxoKnXK+qOdtmF6gAAAAAAAAAAe1tRqW2nTg7LLTVOLtx0BIBEigv6G9KHTV+mvVR3lZnfLHd1c/Vo8J35aXuS9fS9ee17+as6CTn3A5MhuqvTOv0mC1Fo4abdY+1eXu4GlN7NJd8nTCYiSRABIARJ8kRKYEgAgCYHxjrKm6ecW2lLPv8AvN83RwdXFstc/SYnm3mJEAJgAV1imMJY9tB1c+7mhvubcK2TABADxqqHXO1qIdGIWgAAAAAAAAAAAAAACbKsVnZ9WDu8NdC+PvLUAAADl6ZhFTmbKu6sPvX89ljoIz0rezJeu2WvROOoGcqNxjujHV+ed1uV8L831D0Y/ezxVjWdWOboAATEhEkTEnyImJiUQkmJiSAOTryd6cMHXzeuyrLXm34sn0dmlLS0iefeJiYeWeVvRjsvby9cNiUTCYEwGa0q1aq1IkICSE1Ex25jl+enANaAAAAAAAAAAAAAAAAAAAdOlyM533ihvubYIsAAz1pj9cmi5tJIfOOv1wVtJtl78/T2659F/g9XjpYjLVx9iYwei8aXox3GO1vLlfJwdOGqs8Xs+bolLO8ASCEkSHxMImUESiUokQEV2V6+Tr53Zx6w7qK3xmWn3squ5iZROV44O7G6U59JUa+9Spz9LbZj78soM7gSgEiCSIjL3r00h1c4WgAAAAAAAAAAAAAAAAAAAABZ1is7r7x+r5t/UUuAq7RMRMUqLDMc3p0ZeNzZWVLfH2Y6Z2m2+L6Mdj75jT46hW3zjNrWaUq9PgtfatJV7TGXpGjzvraNw+Pvk6QgRMomBIPiUVBImEpiRV2mP0z4x1c9jquP65eik4fDTa52f1E828S5yrz/ANuvnub3DdNbePZw6+YzHPt8fDRWWN2WWonO5EiAfM5S9I4Dr5wmAAAAAAAAAAAAAAAAAAAAAAAHVyobf2xmu5ej1FLgeGM3XNemd03qiVF0ZfSnv6ffhpnquGl2WWuF2GY9b01w59wMjGhyHRhvc1Z9eWmJfUdXPobzEbXm3knPQBEgD5ggkIJTAODJ2Vb1cywr9XKwzN9jMtOvY1NtWUTGek5W2y2+PvoYz1q+X32aeWKt+HltXc8mZ0WGvr2pz0iYRJMCJoLV5qs6+YLQAAAAAAAAAAAAAAAAAAAAAAAAA7eJE7r7y2p5OgK2AEGT8ue+6cLus+8vnfz2eMudKWWU3eUrNxa4rZ0v9DO7KavhvTPa/Ba69amn2mMvRpsz12jZIcnSmJACB8iqYAJl4e9FatFB2cvVsaW45uigrPi80zuvqHNu+PvzMh09F1vl4ZPXZGY1lhnrDO9PyedpvlX+W24s79noYapgkc0xyZf7+OvmC9QAAAAAAACbWs1P1q+/LTE+e7+YnCNVRaU4hpQdcTyTqLHLTFfG7is4NrqjSlQ+vnSgAAAAAAAAC/oJrO8cHfx9IJeHvBg9d9demfhQ6dW2VrdTm98enj+O60cV/wAXBE7l8ffL0AZH7t8v04bzJ6Pmy0yg6efX92a03L0hSwgkHxMTVAAGM02R6Mn182m2WjrLfJc2/Jtc5c3r2sz4VtrcjPDpTSW9JeY6RltSicI1XnvlQa779MtAzumJIAyNpnejAN8gAB2xPEJgAAA7bfO2fuL77y18PaYy0mJQiYkiJGcpt5k+jH10z6y0CliBIl5U18tXEeO7rdc8ssa/XOBaAABYVmvFoAAA6NlhbrHTRjn3AFVMdWd4Pvox+Oi5uqzV2vyx18MXvchrna3WL2lbBneMVtqDTOL/ABW2lifG7o9svTb4XUZ2tRhuARJ8CqYmBMJnP0nTzdnK1OZ2+d/HF6GjLWlsuK9frq1DLTFefrYbZVXZZ1NZubXETFt0y9vjpYzE0sCQHj7Zq9KzzOvmEkLqtied18so1GX1Od+io0TDXIeezXrkOjTzClsemKXTCspiQ8omPYiJASgZzRZrSmnGd0fPzL0kgeX1L7iQeHuR5exFRw6VeuQ8totGO7NKhxfPfwVtkR18x0/CfFcVUPgWhMDY9mS1vJ0BS7z9BQXXqtV4e+VOb05Y6cNPm/L2ifHV571hrZhzdDm6SMHrM/19GN1jd7i4nns6z61z3U/P1x9REgHzExUA5ummvGdHZy2eop7Pl6Mx0VOo1z+fm2YbKyzzMxVbDH22+WlVlhzbclTpFoxHnuazXOt1FbZZaBS4Hhi7im6ucNc318/UTuctqctzbW3r5WkWxl/X2F6WsSw1RMACUAEnmU/ZV9Oufta5WxTcst7w0Sh7Ynvyenyt66v2z3ZS3nHP93pfTXdOenhWR66Z33Lxc1bdVtndFEwlWxEgAgcPdwzGY0lTqNc66hvqGY1+K2uKiecdGIDW5KwzvrRy9AADD7jHa52N3mNZDh7Prmpbjy9tU9OOw7crqsNgpaipdZjejDe521+MtMnB1c+tsM9ouTpiStgPgQCJZfUYnbLyPfpx1nFa5zl3qdvlNbaAx1jEarJb49Hjq621aT6m2vXws6Dxrbbe2Ev8r3cmWoDy9aO1aH5OzlCT6+fqJ3OW1OW59ra0q7TO+bsK+w0ztJhjqBMAmAJIBUefT0aUrvbxsZcH3HKiy9vj1rZlthkr10lb8+8Tx2Xz6nt7+PvS2c6OrivTp9u7irbluKyzArYABEhwd/BatPp8xp7RX0F/QWpr8VtMWnnHRiABsezN6Tj6QrYBW2XBNcl3eXL1YWVb93MTS92n9s74PZ1NvE9Ay0Yjb5nXPovMrrIYT57+Dox7djgt1jr9onHWJD4FZiYk8MXqMv1YTaVegtW6xuvw+V72+rbOlyFLUFP7dfVhpaK5x2V/LX5D62z3HL7+nLvRd/fEpRNbAMbp8dviHRiA+vn6idzltTluba3s6yzpfN2FfYaZ2hOOsAAAAJBEkEggmAZvSZvSmj+omlwCJACJAAAAAHB38M1p9NmdNeK+gv6C9Ndi9rionnHRiAB6bfCarHWzHPsBxY/e1mueburz6h5ehnoJITAAp7jltXIbnB7HXOqotVlbVnW5LQF7BzdCQ+YRWZBQ0VnWdnLOrye2pflyeho5bD3iebaPD3prRndPmdttlSUlpXWrqPDu8cde2pra29dv601zjoEWAoqDu4ezlC9QH18/UNzltTlube2tKy0pfNWFfYaZ2gx1EkSEJEVFjU3rZdWa0omKys2c03rMdlY+b17e/P39bTnOurvXWTURS1wqvgt+Lx4pdFxSfaLl5cFbWinTFwq/MuETWwADg7+Ca1GmzGnvFdQ39Bamuxe0xaecdGIAC3qPas7ccfUAAAAmAAABhtDUdnRheYne4aJ+LWq6tc9kmOPqmA+RUEsdy/fx28vrtslrcNs7y/XtemlRPNvFLdJjN6QlXZbdcl6Y9oPfWmcvrb0y0iYnK4JfH3wTGTg7eQJAPr5+onc5bU5bm2t7Oss6XzdhX2GmdoTjrExIIExJFDe0d69llRXpFZ380Kq08V6+NjyQRb1NtW1FV3dLrnofH2+M7+XhY8kx0cXp1J+vD38IWlFe0ET1+fj72r78vd5RNiKXAAcPdw2rTafM6a0V9Bf5+9Nfi9rionnHRiAABsuunuOPpCtgAAEwAABJmfDvp+jDa5DX5ml6j6+XRhvXh0cXVBKfgVl5+nJauPHby2umz+g5ejH2dLodc7ZMc3QJImJCJCBIIkCJIpbvN6Upx18wAD6+fqJ3OV1WV5trizrLOl83Y1/fpnaSY6iAmBMSRVWyY8vSYTw98SeMewrbD6lHj7CWa0ucvS/fc0u8fYefz7D4+fUKe4THjPqg8fYkAABwd/BatRpszprRX0F/QXpr8VtcVE846MQAALnSZLXcu8DPQAAAAAACqzGtyPRhvaC6q89M4iern1/dVWvF0kTFvgVmOCwrL1y47eXQXNVZcnTitTltbpn2zE8+0TEkTAEpiYEgAAZLW4vbLnHTgAA+vn6idzldVleba4s6yzpfN2NdYaZ2qJx1hIiYlMEoI+T7h5y9HgPdzyj38/ukl1d/jVWrf5q8oZaafP4zt7udLofHzE+rnTHQ5x0PCDw66b6tW7RNLgAODv4JrUabM6a8V9Bf0F6a7F7TFRPgOjEAAD322D3nPsGOoAAAAAAHLjNxh98dlzek53yI6+fSXVFe8nTBNLfAqiqtae9c6O3m0/Xze3H05HYY/Z65+8w5tkwD5zF63NdSujG47c0luvrG6vn29xS4DD7fC74wOjEAB9fP1E7nLanLc21vZ1dpS+bsa6w0ztUMdRJExIiRFVbVNotuPsqCtuvTxvTjifSVvS3lRS3V8+HjaPqrtqy1bLx+vSHhPz8l/wA/ZVZ35fOx49K9/Iry1evzWeD695tFr9GWgADh7uGa0+mzOmvWvoL6hvGuxe1xUOcdGIAADc4ba4a9Aw2AR8ZS1bvgpXRjdd+WG9ZDWc+32K2A+cJvcHtjqvbn66XxY6+e+0Gd0PJ0JiaX+BUpbqk0rnx2c2q9PP04+nJbXFbXTP2I59glQ0Xr5dnMF6gO3iRO8cXbxdQQ+cLusLviHRkAA+vn6idzltTluba3s6yzpfOd9fYaZ2gx1SBEggnh7ZlEfSFL6e/npTw9ez2ifvg71ZRJPFQ6vN6Z9X1afMT68XcpYE+PP3JjmjqQ5PPvS4o7gESAA4e7hmtPpszprxX0F/QXpr8VtMXE846MQAAJ2WN2OOnWOfcjzRnKqY7OYLQAt6iazvY+PTj6oJIwm7wm2Wm7eLtpbFDr57vRZzScnQFL/ETFSmuai9c4O3m1Ptz9XH04/aYvY659JPPvHn6QjCvv47uUJgADT2tdY8XVElbRhN5hd8fkdGIAD6+fqJ3OV1WV5tri0qrSl8538HfpnaDHUSEAASESRIRMSABJm9Jmr00pW1tZKS6JESAAAcPzMWAiQAHB38Fq1GmzOmtFfQX9Bamuxe0xaecdGIAAE7PF7jDX1GGzh7fCYxQ7OUJACTYdvh7cXUESwe7we2Wp6+X3pbHDr57vRZ/Q8nRApf5FZirta69cqO3l0thV3HJ04fXZHU6Z2I59wM3UbfI9PPzDbMB7+Wqzv3fRydAJYra5HbLhHTgAA+vn6idzldVluba2tKu0pfN2FfYaZ2kwx1BICYI56u1z2tLF59KPKPm1TU3dTb1nzrrWiPr24uq9fumuKqYtuLt4Yn26vX6rPRT3eeTZ8c/c1++clccdhV0tz+E/elLv0MdQAHB38E1qNNmdNeK+gv6C1Ndi9pi0846MQAAJ3eJ2/PsGOpEmP4tnkOnn8xrQBYcuvy06BzbgeeG2mL3x1z08M75QdfPob2luuPpQmtvgVmOPt8LVxY7eW8v81peXoxGhpLXXO8J5uiEiPj7Io6/WxpTI9ejmXN0mVwSJIzOmo9KZ8dfMAA+vn6idzltTluba3s6u0pfOd/B36Z2kwx2TAAEoimuvm0cfx3yUvzeeExw23x9xPhwdfWZ/rs/qY5c7rM1avZ6WatuR1on64u1Dyr7X5lVc2g+Zj65ulWav4tVo+hWwADg7+Ca1GmzOmvFfQX9Bemuxe1xUTzjoxAAA79dm9Jy7hnoA8fYZ7g2DTPId+gJ8vUzuABw5DUZjow29Zb0OWlEOvn1Frwd/F0xKIt8isolMYWOjn7uXv1mL2nPtlOhzXprBzdBMQTEoAIkCQJAV9h8TXDJjt5QkA+vn6huctqctzb29nV2tb5vvr7C+doTjtCYJiSIkIkImJIkAACJlGb0ubvTSClwAAAAAAAAHD3cM1p9NmdNeK+gv6C9NfitrionnHRiAABpLnj7OPpCtgAAAEwBJEwKOmsOfow1uZ02QzvxE9OGz6fn64uqAn5FZAytdd0nbyzt8Prs78VHpspMbyPL15t5iYSkAiAkACSJARj+O9ouzmC9QH18/UNzldXlebe2tKu0pfN2NdY6Z2cwx1TEkTEiAkgmJAAEc/RXWj7fXFavZR2Nfet72Ut1lfy9K7sS9qm2AiQIkAAAAHD3cMxT6bM6a9a+gv6G1Nditrik846MQAHp52tZ08nH1AAAAAAAAZHrqdD0YXGH2eHrM9HPZbZ6qYnj6okPgVkCpzWxx3VztFnba0aDE7vG530NjQ32egnOwICQJiURCYmUSJiQ48fvMXvhzjoyAfXz9Q3WV1OV5t7e0q7Sl83YV9hpnaDHVMSQBMCQARKCSB4e8ypouuO9eWl0dLel908PdlpXdfx7FXb8XaBEgAAAAAODv4Jio02Y09619Bf0F6a/FbXFRPOOjEABp83t8dPsc+4AAAAAADm6aia5rYZDdbZ1+T0GftVfUWqLKTm6IB8isgRidvld8q7o8I6MN3mr7g5eip1mH21o+phjrJCJRKYTBMJiImJmQAFDe+Nq4p9fPZyhJ9fP1Dc5XVZXn3t7SrtM711fofOY+55OmtvoQATEkIr5ixZyt0pra+gsLR9ctl6zFN72PLMdNvjPmJ3OasK+ltJHDmYm/ra601z5It/tNX3fXPC27cb4xO4Zeypa3eXrS4AA+SaC29rV4LMia+gvqHbLXYra4qJ8B0YgAW2n4O/k6QpYAAAAAABmdNitc/fXUF9DK1vp59GM7fI7PHUMdQPkRIQUl3yXrjx2cuksc/puXowupouvXPRpcu6AmJEJATMTAePtl70uu/F7OSU53zFTssd1c0DWj6+fqG5yuqy/Nv06DB9GldozvZjpbKz4hbKLktGo8cjzXrqK3js5in+9R2xOcte5ncK2TEwEEUd8tGD9dHlunCbzouM7/AB9mOoADl6iKKr2LSuE79HWXpNjm+E3jD9tbatn+itrhV/MLZQVlq21Xxd2uevxO2xNL+A6MQHZx6mlrQcnSAAAAAAABzYvRUPRjqvrsosr0I6ue40lXacvSFLAfIiZQgEsV429R2cnrtcNqs9OKn1eOmN3Nf38+4VSiQAV1nb94a50z0FJVcl6tRl+29dfMTydEZjT8964t9/HXzJgbqM5bcvRz8NumKL40C0Z/7vRUdHeifLu5lZ73ArbvcA73AO6eAd7gI73AO9wSnvrftMd7gQ73BBYK8nvmvk73AR3uAd7gHf58aUcfctFT4Xq1c/GhiYofe3RPLa8sUt34e1ptcw2zA7NjX2HJ0BS4Azs10Sgv0hEgAADwRmPeq1XRjZY7U4qtpmO/bLU+hx9IJA+UTEpgBCuyu6xXTh52tV9a57jH62o59+bR4jao+kstQiIlAy2pzWtKp7ePTh73Pta4bU+c3OMtXTd+V1WWgUvRUG6x/RhyjfIAAAAAAAAAAAAAAAAAAAAAAAAAAAABa1+zy09RzbgD4OPI9HP1c99f5TTY6+ozuAAAor3F6Z+e3zujlR57q5dsp0ec29Leo59wAPiSshIIM7ouW9MeR2c2lsstreXow+g4+LbPZQcvRJAJIkIx2xqdM6fXYTo1z0We5vS0fGxyVnWdIRzdE8nWmML86LO9fMF6gAAAAAAAAAAAAAAAAAAAAAAAAAAC5rNhaHJ0hEgM5aZHbKbX30Exg/To4tc9Ra4Kzx01Tx9sdgAK/JWXx0YaP47szlpUDq57LV1dpy9AUuAB8iszAEwBLI8WmzPXyzrshaxN3j93laXuLPI62lhOekSEfH1i70u6Xw7ejHi99DZ0tSXHpGOtR4X3jMe8cXZW30IlmdN82rhVhX9nMEwAAAAAAAAAAAAAAAAAAAAAAAAAOmHrrvP15ekKWAfH3nLVrp5tfvl1+bNY6Vugz9pvl0Um84sr5TR0PLrTeqm25t3L1ZiYqtVn9lrn5Ym8oZifXyvr1vfqHJ0zAACT4FZAJgCUYzaUumefHVz7Hzp9Ly9GF1NP46569E83RKJIqLdNeDvEyKoSlWZjsdWHF2XmXmNx91Vry7xMTFvPJbDzvTEOzj6+cJgAAAAAAAAAAAAAAAAAAAAAAAe0Gv8Anq5ugM7gCDhyVtxdGFloI48tc34+en3xqODccWd+n3MdPmlvEvn6Inlxtny9GF7Z/VHlpSeZ1c/1taHSc+8DLQAAD5FZACQkj5+iMV5aLO9nM2GPsKzoMfus9np12+J2VZ9IlloCEJBAp+ek6Mvaxq41zs6u57qW9Ozgzed9u5erLQDzy2ti9cItqnq5wtAAAAAAAAAAAAAAAAAAAAAA74nx1n368u4UuAPgjJuTow0vf4d2Ork61Zwlt8VfVz7HyySttDw1vbLXonm3cHfjr05NVS6y9fLF2tNeszF3et17nH0AkAAD5iVZAT8/RAAIx+xrtc8sOrn1Pbkdhy9GMsu7M7Z7twd/LvKJiSBKCMh99FZ2c+3zt108+1XZ8/zE+2Q2eU0p4a7EWF6ayE824JUl2tXC/OwzPThyjSgAAAAAAAAAAAAAAAAAAB7aWlq/Qy5twrYiQfBOUcHRjH1o6S1L61wemy0thlq4O9MVHrZJjy9SsjmK7PTe9ONp89eRx04YOrn9NrUXfNuGegAAAHyKzCQATAAEsvW7PH9XP8XVKvTc5a86OboyWwxthpnpRzbgJgeOS2fnpTGW88u2XnxxZ3ry81jY1nlp91S0vz6PB6MuRhsRI+foigo91z7Z4xZ1m+IWgAAAAAAAAAAAAAAAd0TxW1x3Ya+XqY6gARLwPrJ/PN0YRqMva2jUePrPL0Y3l2+T6MLi5weira6GOoAEZKwot8erYcv3S9fmvTz3xdfLr4nsk5egAAAAD4krIBEgAASU9xE1wywr+zm6NfiLXO9pltzQ0t022G1sT2DLUmAmIOLtWjC6vOT08+xnj+ebf3y3j5dOMToq2Yu7CnuObcr++JTExIEcfYmMvW7rw1yxa8qds/EXqAAAAAAAAAAAfdrWafv0XZjrW2JlpKr55i7nk6q2CCY45j0yfw6cY1fp1ZXz9Fvc3es6PBX8Tfefox1yHFucp0YWd3hNnnfoGeiv6cdpTz0XDqLVjJWFBMDq2zsdF8/XJ0BWwAAAAHyKyIEgAAAB5Y/a1+ueVHVz6O2xGr596Lk2OSvXV++P1mOn2KXEwBHJldrQ7Z0UT09GPjqfbp5t0Szu8fYYXq6ars5td3YS2x00rx9sdUSTEuZHQyfVrSyrbz3icZzbzwvTFNPyXpRrLnvXlffxIEAD6Pl09ETXLvsrbMe2u6KWzNnZs9Pn7hnaUD5yurzmtKedJa6Uw958Us13cZfmz01WOt+2YzH1r8rpTS2OF1eOnfE82d8f5z99nNobjB6nDWz+Ptlrwd4h8fWVtHi8dhtl6cXRj87+cHTh9a/huufcMdAAAkAAB8SVmACQBEgAACiot1mOnCs9fJtls4y+s5ejH9Ogyeue2+srqMNZmJpeCZU2c3FPtjwaf7UumJpciSOTryd6cVlXbLbKsodv453x19Q/G2W6nG6jn36vH1UtmODbc22eU2eG1Fq2Y59yYQA+fpLy+fcjwn2Hx9pTAgmBMTBMAAAAfNRaLTI+fz0Y/HvPlems7fH25OlzdMwxHxsMx0491dzdkx46/wA+vHXG+Ox8bU6vQx2Qzk1+auNV0ZffV9ZTHTy5DqwW/Lrsr/Q5twAAAAkAB8TE1kgJAAAAJAPn6IyHJtcj1YeHbxL02/Nn9TzdGL7rzK65bb6yeox1+xncJTASQJiTlxutyXRhe31RcZaRT2uMtHndV+wvTM6D28stMhYelbvloLDDfdZi/wA/a3rpnl68nQCQAAQmCUxKETABMAAAB8VHnRb5e/h0822VjouO05t+HJbvM3r9aXB687UMNZB8fRIISBEZq9fuoajfJZM1jp8VZ04Ojz19bensjl6JRMACJAkAAAB8TE1mJiSJQSAJQmYIJBABz9CYxfjscn1c/l38C9dvz57Uc2+P9dRldaav2xepyv1zE56ImCYkedPcYvXO3pfX72y5+7z+ZhzTZlxYHJ0xLxh6stwbZ67MePzpnDv0ycVs+Hszv5V1J0XpfWuEs621CsqaX1Cj76z3Pn6rIJBBEpAEo8877Uu+P3799PpXU+2V2WOvzi9vRIrNhhNTetl4+zDbD9Nnn+rn3k01xzbhWUxIiQ+PLLaV9uD71euXjYxmMtPuoOnB9tXW09yOXoCCYkAiQiSQAAAHxMTWYmJAAAEwQCQAAHL1JjF+OyyvVz8/VytK7L7x+o5t6Lh29FanRb4S2TpXx9YaglMSiEiMpe5LfL62VPoKyGWsZfUYfbKLf401q5zh2Cl6m3M7q+wgwuopOLq576g7uFGhpdZRUvVPvVXrWaHl6ubcKyBEgASM/S7TM9GPVw+NnatNo6LytGroeH2rPj2etdaN2rbLl6PnHbKvtXNbLFanSlgOfZMBwcFFtl6+3Xo7R5enllaX9q86MH39autviwOXeCYmASgSAAAAJAAfKFZASAAIAAEkJhIIBLx9ZmMjx7jNdOFZMNc9HbYa2w2ss3s/OtsppaKv0z3TPX+G33EqSRJFVarPj7ISIRjNnW60otdh/TXO/wCGs+JjbetLdc+/jQWWW1z1PLQr0+vfy1aevHa7EUt36zP6GtoGWgAIAATAAVFvyWrj3p59nNb6PP6Hl6PjF7ejmKzX4TV2iwGGvh7kiKSYs8zyde+PLou7opea/hopj08jfF0+2py08uqJ590SgAiYEgAAiQAEgAPiUVkTIAiYAhEkgAgAAExICZUdBuuDbLKPXy6MenSZJS25qua959sZ9a6h1zsLTCdsTrXD3YapiUwTAEImJnmptHF6Yf77vHpw0nUcnTFRcEZPg22M6cdZ2ZrS4a8GS0Oe2y1Fpz9GGxE1kEnLn701Srta2gQAAA+OXtTHx9iXx9int5TA5YdXBS1u2fVzWWgtWqvFNlpZZrk+Nsh9aU+LnvtcNvmZYawASISQCQRMCQCCQAABL5giQEkImBKJlExIJiIAAITIAJiYAl5ZvUr0wrR5/pw+OjnWjVWGFscNb7P6HqpbC2N1Ra53/dhO6ttZNZZY6ExFgCRWV2kXoFLgKK8+LVxOyqLrSmdr/To1z1Y5OhMEgV2U1GY6efS23J14bBWQAAAABXzFhy5+u2ztarqvr1otD3eWWntx09Ravbwm2UpvYmu03Q59wztMASImBIISImJIkAAIkAAAl8E1mJgJBAEiJABMEATEwRImYBEgAB4+yYzFZuq/fLKunm3yW1ShsvfD2uGttS33VW2G9tZUa0m2yXibpkbPK93PJ1UvIiYlAmJImJARz/HWkESABS0Wx+tc/QZXBMSIAHPL3mmq7009Vn/TWnrzXVwjOXVl456evnR08xc03w2yTHvavj3XFthtydRjqECJABJAExJCYExIAIJAAAAEvgVlMSImACQgAEkwgAAEgCSEwAJgAiKm3m0Yrx3FTvlnXv4bZO/gROmssP65abThrbXO9TW7RMYX31FdpTn76niNh0YX0rbbTkuqttEpuik2Tj9on2fP1EgAImCXn4zHUrvCVwz3Neuq8Mj42rqOCn7LV+OW8sTLWOlml62w8Kqs3vDmvDSlpWQ1zHpMeXrd3OWlNdfU4bRMKyAAAATAmAAmJIkCJETAkCUoEIkAl8CJEwRMSJiExMCQCQmEAEkAAAAACQQTEkAistFq5Li3XJtnkFxV65+YtX3sqZW2q7sPOd9zGT7qWs+P27Imj5tWmMX5bn5tGHbLymMn9ab4mM99XvyUnzeyZ/50n2ZdrPWJx3ptPuJyPTpVZpevq5Int+6LhlqeLK/F6XtbyNKBap9WkTU9Wj78tae2+mOgVkABMAAmBMAABMSQCYBKAkJiZSCImAIBL4RNZAAAkBEgSCIBIAITAJgBISACEwAkiRECZRMorKvTTeuH891w655Obvg0pxi1QPTp4kTbe9FFZ0ntlUW133jkTtJxSG2+cWNl8ZBLV+WZTGg8KZMWHN4LVCYAOrvram+tPYZ3y9pbs7+foUuEAACfkSABMEwAAAAAAkgEokIklCQQAA+CImQJCJiZIlCJAAAAEAATAJgBMiRExAkQCUSQSQTKJiQCJiUefHYJij5NOvXH825Wrg2257RkWo8rRnF/8TFGuvkp1xJTLv0KBovaJy7Xe8Ti+jZTWct13ylq3t9VbBWSYBJAACYBJAAAAAAJiYCYBJAABIgEwJRIRIRIB8BIBKEEkSAAIAAAAATEiEiEphIQlEEiJhKQgkiUSJhAJSAACYlEAiYkAAASETEkJEJEAATEkAATAJCAJCJEAEkTEkAATEkAEkSEJgkgkESESAESAH//xAAC/9oADAMBAAIAAwAAACEX0FU1kEFFm/f2348sscMg54AAAABDQhRQDDTzzzyjzTjyzzzzTzjwgDDwhiyyAADX0kVmmkm0F831X9/ssMINfJIIIMIBQAAgjBTgSgRzzSzTzxxjSTzyygigAjDyAABvW3nmmGEEF9UlWvu8MMMoKaNcfHP4M2540CY88xRQADBADADTgzzzizzzwxjiwDDlS121kFEUUNnRXfqMIMdPP521/wDy17rNd3nBOLD0uJIEMYgMMAc888848M8c48sMx9t1V5gJBVv9gt/Ljjp3AO/y8rTV1Bp91lOYDO/+CBDXKEUA0w8s80Ao888Us84cJtVhFJJBpRlZ1t9Hvn18/ijMxXxjSYzcBT8avmrrQiiPRNCAMU84EQ0s88ss88Iw7RdJBgABtNj1hJ1Xze19jssYbCP7YCAAAAwo5AQjA55U7JtvCUwEAU8c408sc8sMd9YsUAoA5wVbgCCf4/njKdvzvL9bboEA7Q8umYbgAICqUgqASoAgA0Mc0U8888Uotd5BQIpE9fb7TdcmBSsTL/zjHzdVQDQovpj8TJwLnjAUBKpbQ/lU80808cc8ssI8FZ5gAJpA9/v3W7pcmTDX+xtXkERd3DAAB4seIL7y/wB1xgAIXOPg0r1NNOPNPPMPKHBSAGKRYd41pPV+dkO536ikxZnj62iAAAFy2RbhxgUehPkRAIDnzRN6PPPPPPHOLMHKAIHALd6eFn+HoO9eP5QqA8+PDOYAACD99NrGL8nsp2C9RAMowgsN8NPPOPPLEGfMIYAIPw7+DwymBKSsXLl3WYqGOAqAKONBAPPCDiUQUUYa4iAJrGwk3kPPPPCACAIAAAINTROZGS1gh13lR3DKW7DAIkPJO4wEKAAAKA6R4JYEV/yzEfqCZvPMBLFOMKSYEUSXWfWxnbDFLZ8V3HKwsNOPvP3LL3/yZ+jwBABIPgD8jMWA1MDeAl3LFGPAJLaNAACAXZsLPJnD8dLxlnw50NwsTPPPPPPAPPPDgA9ACASFhYsaYBN6BXgtMPOACBLABPLDfaCOELMvtvPXrv8AOMEwzzzzzzzzzzzzzzw4sgCACBflvIIRzBd6fzzygigCnChTb/8ALqpV4wUuOy/7zbF8w88888888888888888aLEQQT2ABxbUB8lf8AMPIGIJDSECXKNdGdcj/T9z8++QQABPPPPPOMPPPPPPPPPPPPPtdAEW6LA2XvHLF4AAiLAJ/dKAbxQ6Z5hJBtMinooAABHPPPPOIHPPPPPPPLAMPPPP8A4RxKbFuQrTypfM/gBAB2HjyuWYlQ22x0Ni7bKIAQxzzzzzzzzzzzzTzzzywADTzzzKAQTJjhnTiV7MEygAz9/wA2DYnt3G2hFO/ucJE8888888wP6G68+k2998888Ac8885H4m7m39E88YY+AAEAr/bqtTBoZ5S84Yi+ZAU8898893AUSi+6wDPAR62wwQ+8888LwwAwKiS88rQO3AAI/XsCjy4EmzESnU89DSxw4t8bWHjJG2m/CQiEQIjhWXG74/8ALdfHNeiEBbL1mUoCAE3/ABN90YJidVt3zwABSMTZNb6Y8Yaw0ULaspN0rAgCTo0kDzzrhRyY8vlzy0J5qACk5ehO6zJvIoOABaNz6n6u+567r69hfrbTgG/Y0AABAXwMnzz2YRSdLBnbwjf+kiCr4AZdk1Tei/YwAIDz4Nbvv4/7rMPoZ+ugAgAhQgAAhtQGHzzzzzwlNbjTzkXcdyB4YN6gsi+eXmsAAEDz+PL/APbjzkwjrRZ4lBwiMRFsYcXIjp888p08888s88saVF0cP9iwnJvstxopAWrM8+LW/wC6pq+gb5RYYsqfFUu8lOAAdBYPPPPNfPPPLPPODqP2+LhSlmdOACDAJCMAPPPv1p4x9641KPuwA6kIkEQxsNPFVAQPPPPM3PPPNPPHERCCyAsKOPiYbeLAAAFTfPPlxpy84u6mPu6hVIzTjRQYwBFD1AbvPPPGrFMPBPPPK2/IOC6/LuT6565RmEAPPPPi3rz+62slDXMLCpQ01HYoBHNI0WIPPPPKvEGrBGvPI0fB6IxPHrx8QhPPGEVwPPPq3m14i5yIukkwJxQwAc7FQHHK1AWPPPPBbC53PDUuPl/GgH//AD63BehDT3qhRTzzz85ffs+/sqKsIQFHQARyg5DTxUQOjzzzxqhj7zzm3xJ33vz6Lwi7ww0AA2cBQXzyrvr+/wC+rwRoBwUW1aQzkRhAUkXEDp0888ukInAwq88Pb8KYG1uvR4wdmYHAIY888+jOTqm+7ECuJyDDpOTmyjZsEUfUFh8888X88yTGe88NOArki1o0G82rDPVAAj388/LYfa2TijriCCYjAQgAcA0Q08rUVA8889t88cc8s4sPuDj82+hK9XUADVxAIJw88/z2rvrq/HTCC9RdHkgcIgAcc0qUTA88878c8c88884L/Vog+S/+xUiDBAnpkkX88/PCb/q2uCSuGowtpWyAQAAA8A2cVA88814wc88888vZ3zg8e6k1X2sNI074cAe38/8AdirP96v91ntdT/8A2iGDcoQADUknxTz1SBTzDTDzzh/37zzx6D7HfN9PMCymCBPy/wDgOfnFKOucuGym9gAATAKnCEBt3VA8t4sc8EUsc80jD08c8OM/FFM/LDEzFsB13/JzSyCh+8c8/wD+kgxzqgww3UEZfhs6PVnBP/qEPPO+3hn/ADyyxrVVRPBuf8pi5KB7zzzzzzzzzDDzzzzzzzzjDzzzzzzwTyChRTjhzzzzMR0vzzzLyJMYJRwTiDqthcQB7zzzzzzyAADzzzzzzzzzzjjDCBTzz9yhDlVV/wC88LS/f888OemQ3b1l4g8J1F6csW08888888AAU888888888AAEMM887k8ARm1+/kUqBeWMc8wy22MWSRb8IvcTxMsv8e0w08888888880884EM8888888/s8gEPIMGfO8npja8888ai04RhnSqaDbHEcBDbJC/M888AM888888ws888888888KkgYtKvLdE8yW8Q/80882SqemNDSU+COPVJukaRQZY8888c888888888888888xFoIQEj7oBx3/Y2/v8E888Syey2AAF8iSuuurBraOMsDc388888888888888884ZAABk79eq1AAQpE30AEAU8A2y+OysHKzrf8E2oDi8wKI4E8L+88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";
    const _0x3401cf =
      "Madhyamik Shikshak (MS) Samvarg Ki Anantim Variyata Suchi - Sthiti Dated 01/04/2026";
    const _0x513d0f =
      "माध्यमिक शिक्षक (MS) संवर्ग की अनंतिम वरीयता सूची - 01/04/2026 की स्थिति में";
    const _0x53ff38 = document.createElement("canvas");
    _0x53ff38.width = 2200;
    _0x53ff38.height = 80;
    const _0xf4afb2 = _0x53ff38.getContext("2d");
    _0xf4afb2.clearRect(0, 0, _0x53ff38.width, _0x53ff38.height);
    _0xf4afb2.fillStyle = "#002e5b";
    _0xf4afb2.font =
      'bold 44px "Noto Sans Devanagari", "Mangal", "Arial Unicode MS", Arial';
    _0xf4afb2.textAlign = "center";
    _0xf4afb2.textBaseline = "middle";
    _0xf4afb2.fillText(_0x513d0f, _0x53ff38.width / 2, _0x53ff38.height / 2);
    const _0x141f7d = _0x53ff38.toDataURL("image/png");
    _0x1a3be4.autoTable({
      html: "#dataTable",
      styles: {
        fontSize: 4,
      },
      startY: 18,
      didDrawPage: function (_0xea5e5f) {
        const _0x39c175 = _0x1a3be4.internal.pageSize.getWidth();
        const _0x11958a = _0x39c175 - 20;
        const _0x4e5897 = _0x11958a * (80 / 2200);
        _0x1a3be4.addImage(_0x141f7d, "PNG", 10, 4, _0x11958a, _0x4e5897);
        const _0x5745eb = _0x1a3be4.internal.pageSize.getHeight();
        const _0x223fd = 120;
        const _0x5ef8aa = 120;
        const _0x58afcf = (_0x39c175 - _0x223fd) / 2;
        const _0x542f8d = (_0x5745eb - _0x5ef8aa) / 2;
        if (_0x2a266b) {
          _0x1a3be4.saveGraphicsState();
          _0x1a3be4.setGState(
            new _0x1a3be4.GState({
              opacity: 0.1,
            }),
          );
          _0x1a3be4.addImage(
            _0x2a266b,
            "PNG",
            _0x58afcf,
            _0x542f8d,
            _0x223fd,
            _0x5ef8aa,
          );
          _0x1a3be4.restoreGraphicsState();
        }
      },
    });
    _0x1a3be4.save("Report.pdf");
  });
}
async function clearAllData() {
  const _0x3d7029 = prompt("Enter Password to CLEAR ALL DATA:");
  if (_0x3d7029 === null) {
    return;
  }
  if (_0x3d7029 === "1782") {
    if (
      confirm(
        "⚠️ WARNING: This will permanently delete ALL records from system. Are you sure?",
      )
    ) {
      try {
        const { error: _0x5bf406 } = await supabaseClient
          .from("gradation_list")
          .delete()
          .neq("unique_id", "");
        if (_0x5bf406) {
          throw _0x5bf406;
        }
        window.fullData = [];
        window.filteredData = [];
        document.getElementById("tableBody").innerHTML = "";
        renderVirtual();
        myAlert("✅ All Data Cleared Permanently");
      } catch (_0x4eed00) {
        console.error(_0x4eed00);
        myAlert("❌ Error deleting data from cloud!");
      }
    }
  } else {
    myAlert("❌ Invalid Password!");
  }
}
function importExcel(_0x2087bd) {
  const _0x2e90b1 = prompt("Enter Password to Import Excel:");
  if (_0x2e90b1 === null) {
    _0x2087bd.target.value = "";
    return;
  }
  if (_0x2e90b1 === "1782") {
    const _0x7bd69 = _0x2087bd.target.files[0];
    if (!_0x7bd69) {
      return;
    }
    if (typeof XLSX === "undefined") {
      myAlert(
        "Error: Excel library (SheetJS) not loaded. Please check your internet connection.",
      );
      return;
    }
    const _0x5979c3 = new FileReader();
    _0x5979c3.onload = function (_0x5435b3) {
      try {
        const _0x445384 = new Uint8Array(_0x5435b3.target.result);
        const _0x10b816 = XLSX.read(_0x445384, {
          type: "array",
        });
        const _0x43ed1a = _0x10b816.SheetNames[0];
        const _0x31b887 = _0x10b816.Sheets[_0x43ed1a];
        const _0x551344 = XLSX.utils.sheet_to_json(_0x31b887, {
          header: 1,
        });
        if (_0x551344.length <= 1) {
          myAlert("The selected file is empty!");
          return;
        }
        _0x551344.shift();
        const _0x26b775 = document.getElementById("tableBody");
        const _0x678cae = document.createDocumentFragment();
        _0x551344.forEach((_0x1734d1) => {
          const _0x2fcc24 = document.createElement("tr");
          _0x2fcc24.onclick = function () {
            selectRow(this);
          };
          _0x2fcc24.ondblclick = function () {
            const _0x559027 = this.cells[2]
              ? this.cells[2].innerText.trim().toUpperCase()
              : "";
            if (_0x559027) {
              openRowInForm(_0x559027);
            }
          };
          for (let _0x161548 = 0; _0x161548 < 27; _0x161548++) {
            const _0x13a5ad = document.createElement("td");
            const _0x294637 =
              _0x1734d1[_0x161548] !== undefined ? _0x1734d1[_0x161548] : "";
            const _0x290041 = _0x294637.toString().trim().toUpperCase();
            _0x13a5ad.innerText = _0x290041;
            _0x13a5ad.title = _0x290041;
            _0x2fcc24.appendChild(_0x13a5ad);
          }
          _0x678cae.appendChild(_0x2fcc24);
        });
        _0x26b775.appendChild(_0x678cae);
        updateAutoSerialNumbers();
        myAlert("✅ " + _0x551344.length + " Records Imported Successfully!");
      } catch (_0x2e37ed) {
        console.error(_0x2e37ed);
        myAlert(
          "❌ Error reading file. Ensure it is a valid Excel file (.xlsx).",
        );
      }
      _0x2087bd.target.value = "";
    };
    _0x5979c3.readAsArrayBuffer(_0x7bd69);
  } else {
    myAlert("❌ Invalid Password");
    _0x2087bd.target.value = "";
  }
}
syncDataArray();
function syncDataArray() {
  if (typeof allMasterData !== "undefined" && allMasterData.length > 0) {
    gradationData = JSON.parse(JSON.stringify(allMasterData));
    console.log(
      "✅ Memory Sync Complete from Master Data: " +
        gradationData.length +
        " rows.",
    );
  } else {
    console.warn("⚠️ Main data array not found! Fetching from DB...");
  }
}
function importExcel() {
  syncDataArray();
  renderTableLimit(1000);
}
function clearForm() {
  window._formSnapshot = {};
  const _0x32f476 = document.getElementById("formStatusBadge");
  if (_0x32f476) {
    _0x32f476.textContent = "NEW ENTRY";
    _0x32f476.style.background = "#1b5e20";
  }
  resetProbationSection();
  const _0x182fd6 = document.getElementById("in1");
  if (_0x182fd6) {
    _0x182fd6.value = "";
  }
  for (let _0xf916f = 2; _0xf916f <= 27; _0xf916f++) {
    const _0x5483d0 = document.getElementById("in" + _0xf916f);
    if (!_0x5483d0) {
      continue;
    }
    _0x5483d0.classList.remove("invalid-field");
    if (_0x5483d0.tagName === "SELECT") {
      _0x5483d0.selectedIndex = 0;
    } else {
      _0x5483d0.value = "";
    }
    if (_0xf916f === 2) {
      _0x5483d0.value = "NEW ENTRY";
    }
    if (_0xf916f === 27) {
      _0x5483d0.value = "NO";
    }
    if ([10, 11, 12].includes(_0xf916f)) {
      const _0x774cb = document.getElementById("text" + _0xf916f);
      if (_0x774cb) {
        _0x774cb.innerText = "SELECT";
      }
      const _0x4e4027 = document.querySelectorAll("#ms" + _0xf916f + " input");
      _0x4e4027.forEach((_0x48312e) => (_0x48312e.checked = false));
    }
    if ([1, 2, 17, 18].includes(_0xf916f)) {
      _0x5483d0.style.backgroundColor = "#bdc3c7";
      _0x5483d0.readOnly = true;
    } else {
      _0x5483d0.style.backgroundColor = "#ffffff";
      _0x5483d0.readOnly = false;
    }
  }
  const _0x12fcb4 = document.getElementById("newAddBtn");
  if (_0x12fcb4) {
    _0x12fcb4.style.opacity = "1";
    _0x12fcb4.style.pointerEvents = "auto";
    _0x12fcb4.title = "";
  }
  const _0x1c9ecc = document.getElementById("fileInput");
  if (_0x1c9ecc) {
    _0x1c9ecc.value = "";
  }
  const _0x2ea5bb = document.getElementById("fileNameDisplay");
  if (_0x2ea5bb) {
    _0x2ea5bb.innerText = "Feature Disabled";
    _0x2ea5bb.style.color = "#999";
    const _0x5eedd7 = _0x2ea5bb.closest(".premium-box");
    if (_0x5eedd7) {
      _0x5eedd7.style.borderColor = "#ccc";
      _0x5eedd7.style.background = "#f0f0f0";
      _0x5eedd7.style.opacity = "0.5";
      _0x5eedd7.style.cursor = "not-allowed";
      _0x5eedd7.onclick = null;
    }
  }
  uploadedFileURL = "";
  window.transferFileURL19 = "";
  const _0x2bb748 = document.getElementById("transferFileInput19");
  if (_0x2bb748) {
    _0x2bb748.value = "";
  }
  const _0x2e1217 = document.getElementById("transferFileName19");
  if (_0x2e1217) {
    _0x2e1217.textContent = "";
    _0x2e1217.style.display = "none";
  }
  const _0x581e91 = document.getElementById("transferUploadBox19");
  if (_0x581e91) {
    _0x581e91.style.borderColor = "#e65100";
    _0x581e91.style.color = "#e65100";
    _0x581e91.textContent = "📤 Transfer Document Upload करें (PDF/JPG)";
  }
  const _0x391a51 = document.getElementById("transferUploadWarningBox");
  if (_0x391a51) {
    _0x391a51.style.display = "none";
  }
  document
    .querySelectorAll("#tableBody tr")
    .forEach((_0x40eaf9) => _0x40eaf9.classList.remove("selected-row"));
  if (document.getElementById("displaySNo")) {
    document.getElementById("displaySNo").innerText = "---";
  }
  if (selectedRowElement && typeof unlockRow === "function") {
    unlockRow(selectedRowElement.dataset.id);
  }
  selectedRowElement = null;
}
function updateAutoSerialNumbers() {
  const _0x515057 = document.querySelectorAll("#tableBody tr");
  _0x515057.forEach((_0x486ab3, _0x50ca56) => {
    if (_0x486ab3.cells[0]) {
      _0x486ab3.cells[0].innerText = _0x50ca56 + 1;
    }
  });
}
function showSummary() {
  const _0x484a08 = [
    {
      name: "JD BHOPAL",
      districts: ["BHOPAL", "RAISEN", "RAJGARH", "SEHORE", "VIDISHA"],
    },
    {
      name: "JD GWALIOR",
      districts: [
        "ASHOKNAGAR",
        "BHIND",
        "DATIA",
        "GUNA",
        "GWALIOR",
        "MORENA",
        "SHEOPUR",
        "SHIVPURI",
      ],
    },
    {
      name: "JD INDORE",
      districts: [
        "ALIRAJPUR",
        "BADWANI",
        "BURHANPUR",
        "DHAR",
        "INDORE",
        "JHABUA",
        "KHANDWA",
        "KHARGONE",
      ],
    },
    {
      name: "JD JABALPUR",
      districts: [
        "BALAGHAT",
        "CHHINDWARA",
        "JABALPUR",
        "KATNI",
        "MANDLA",
        "NARSINGHPUR",
        "SEONI",
        "DINDORI",
        "PANDHURNA",
      ],
    },
    {
      name: "JD UJJAIN",
      districts: [
        "AGAR MALWA",
        "DEWAS",
        "MANDSAUR",
        "NEEMUCH",
        "RATLAM",
        "SHAJAPUR",
        "UJJAIN",
      ],
    },
    {
      name: "JD SAGAR",
      districts: [
        "CHHATARPUR",
        "DAMOH",
        "PANNA",
        "SAGAR",
        "TIKAMGARH",
        "NIWARI",
      ],
    },
    {
      name: "JD REWA",
      districts: ["REWA", "SATNA", "SIDHI", "SINGRAULI", "MAUGANJ", "MAIHAR"],
    },
    {
      name: "JD NARMADAPURAM",
      districts: ["BETUL", "HARDA", "NARMADAPURAM"],
    },
    {
      name: "JD SHAHDOL",
      districts: ["ANUPPUR", "SHAHDOL", "UMARIA"],
    },
  ];
  const _0x5bbec7 = window.fullData || [];
  if (_0x5bbec7.length === 0) {
    return myAlert("No data available to summarize!");
  }

  // ---- helper: same district-cleanup logic used everywhere below ----
  function _cleanDistrict(_0xa3c108) {
    let _0x28a447 = (_0xa3c108.field22 || "").toUpperCase().trim();
    if (/^\d{8,}/.test(_0x28a447) || _0x28a447.includes("ODS")) {
      _0x28a447 = (_0xa3c108.field23 || "").toUpperCase().trim();
    }
    return _0x28a447
      .replace(/^DEO\s+/, "")
      .replace(/^JD\s+/, "")
      .trim();
  }

  // ---- STEP 1: GLOBAL TOTALS — district match se bilkul independent, kabhi drop nahi karte ----
  let _0xb32246 = {
    total: 0,
    updated: 0,
    new: 0,
    deleted: 0,
    deo: 0,
    jd: 0,
    dpi: 0,
    unmapped: 0,
  };
  _0x5bbec7.forEach((_0xa3c108) => {
    let _0x373d01 = (_0xa3c108.field28 || "").toUpperCase().trim();
    let _0x3ff05f = (_0xa3c108.field29 || "").toUpperCase().trim();

    _0xb32246.total++;
    if (_0x373d01.includes("UPDATED")) _0xb32246.updated++;
    else if (_0x373d01.includes("NEW")) _0xb32246.new++;
    else if (_0x373d01.includes("DELETE")) _0xb32246.deleted++;

    if (_0x3ff05f.includes("DPI")) _0xb32246.dpi++;
    else if (_0x3ff05f.includes("JD")) _0xb32246.jd++;
    else if (_0x3ff05f.includes("DEO") || (_0x373d01 !== "" && _0x3ff05f !== ""))
      _0xb32246.deo++;
  });

  // konse records kisi bhi hardcoded district se match nahi hue — track karne ke liye
  const _0xAllDistrictNames = _0x484a08.flatMap((_0x3fc730) =>
    _0x3fc730.districts.map((_0xd) => _0xd.trim())
  );
  _0x5bbec7.forEach((_0xa3c108) => {
    const _0x1f4f6c = _cleanDistrict(_0xa3c108);
    if (!_0xAllDistrictNames.includes(_0x1f4f6c)) _0xb32246.unmapped++;
  });

  // ---- STEP 2: DISTRICT-WISE BREAKDOWN (sirf table display ke liye — koi record drop nahi hota, sirf badges se independent) ----
  let _0x34dd4a = [];
  _0x484a08.forEach((_0x3fc730) => {
    let _0x525778 = {
      name: _0x3fc730.name,
      type: "JD",
      total: 0,
      updated: 0,
      new: 0,
      deleted: 0,
      deo: 0,
      jd: 0,
      dpi: 0,
    };
    let _0xe4ad55 = [];
    _0x3fc730.districts.forEach((_0x42d45c) => {
      let _0x5476af = {
        name: _0x42d45c,
        type: "DISTRICT",
        total: 0,
        updated: 0,
        new: 0,
        deleted: 0,
        deo: 0,
        jd: 0,
        dpi: 0,
      };
      _0x5bbec7.forEach((_0xa3c108) => {
        let _0x28a447 = (_0xa3c108.field22 || "").toUpperCase().trim();
        if (/^\d{8,}/.test(_0x28a447) || _0x28a447.includes("ODS")) {
          _0x28a447 = (_0xa3c108.field23 || "").toUpperCase().trim();
        }
        let _0x373d01 = (_0xa3c108.field28 || "").toUpperCase().trim();
        let _0x3ff05f = (_0xa3c108.field29 || "").toUpperCase().trim();
        const _0x1f4f6c = _0x28a447
          .replace(/^DEO\s+/, "")
          .replace(/^JD\s+/, "")
          .trim();
        const _0x50c552 = _0x1f4f6c === _0x42d45c.trim();
        if (_0x50c552) {
          _0x5476af.total++;
          _0x525778.total++;
          if (_0x373d01.includes("UPDATED")) {
            _0x5476af.updated++;
            _0x525778.updated++;
          } else if (_0x373d01.includes("NEW")) {
            _0x5476af.new++;
            _0x525778.new++;
          } else if (_0x373d01.includes("DELETE")) {
            _0x5476af.deleted++;
            _0x525778.deleted++;
          }
          if (_0x3ff05f.includes("DPI")) {
            _0x5476af.dpi++;
            _0x525778.dpi++;
          } else if (_0x3ff05f.includes("JD")) {
            _0x5476af.jd++;
            _0x525778.jd++;
          } else if (
            _0x3ff05f.includes("DEO") ||
            (_0x373d01 !== "" && _0x3ff05f !== "")
          ) {
            _0x5476af.deo++;
            _0x525778.deo++;
          }
        }
      });
      if (_0x5476af.total > 0) {
        _0xe4ad55.push(_0x5476af);
      }
    });
    if (_0x525778.total > 0) {
      _0x34dd4a.push(_0x525778);
      _0x34dd4a = _0x34dd4a.concat(_0xe4ad55);
    }
  });

  // UNMAPPED row — jo records kisi hardcoded district se match nahi hue unko yahan dikhao
  if (_0xb32246.unmapped > 0) {
    let _0xUnmapped = {
      name: "UNMAPPED / UNKNOWN DISTRICT",
      type: "DISTRICT",
      total: 0,
      updated: 0,
      new: 0,
      deleted: 0,
      deo: 0,
      jd: 0,
      dpi: 0,
    };
    _0x5bbec7.forEach((_0xa3c108) => {
      const _0x1f4f6c = _cleanDistrict(_0xa3c108);
      if (!_0xAllDistrictNames.includes(_0x1f4f6c)) {
        let _0x373d01 = (_0xa3c108.field28 || "").toUpperCase().trim();
        _0xUnmapped.total++;
        if (_0x373d01.includes("UPDATED")) _0xUnmapped.updated++;
        else if (_0x373d01.includes("NEW")) _0xUnmapped.new++;
        else if (_0x373d01.includes("DELETE")) _0xUnmapped.deleted++;
      }
    });
    _0x34dd4a.push(_0xUnmapped);
  }

  const _0x3803b3 =
    '\n<style>\nbody{\nfont-family: "Segoe UI", Tahoma, Arial;\n}\n@media print {\nbody * { visibility: hidden; }\n#summaryModal, #summaryModal * { visibility: visible; }\n#summaryModal { position: absolute; left:0; top:0; width:auto !important; display:block !important; }\n.no-print { display:none !important; }\ntable { width:auto !important; border-collapse:collapse !important; }\nth,td { border:1px solid black !important; padding:3px 6px !important; white-space:nowrap !important; }\nbody::before {\ncontent: "";\nposition: fixed;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nwidth: 500px;\nheight: 500px;\nbackground-image: url("data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAQABAADASIAAhEBAxEB/8QAHQAAAgICAwEAAAAAAAAAAAAAAAECCAYHAwQFCf/EAGgQAAECBAMEBgQHCQsHCQcACwECAwAEBREGITEHEkFRCBMiYXGBFDKRoRUjQlJicoIWN0OSorGys8EXJDNTY3N0dcLR0ic1NlZllMMmNERVhJOj4fAlKEVGZIOFGDjxR1RmlbSk0+L/xAAbAQABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB\nbackground-repeat: no-repeat;\nbackground-position: center;\nbackground-size: contain;\nopacity: 0.10;\nz-index: 9999;\npointer-events: none;\n}\n}\n@media print {\n.toolbar,\n#onlineStatusBar,\n#formOverlay,\n#editTitleHint,\n#dpiControlPanel,\n#dpiPassModal,\n#importExcelModal,\n#lockScreen,\n#customAlert,\n#sessionTimerBadge,\n.footer-btn,\n.zoom-box,\nbutton { display: none !important; }\n#sheetTitleDiv {\ndisplay: block !important;\nvisibility: visible !important;\ntext-align: center !important;\nfont-size: 14px !important;\nfont-weight: 700 !important;\ncolor: #000 !important;\npadding: 10px 0 !important;\nborder-bottom: 2px solid #002e5b !important;\nbackground: white !important;\n-webkit-print-color-adjust: exact;\nprint-color-adjust: exact;\n}\n#sheetTitleText {\ndisplay: block !important;\nvisibility: visible !important;\ncolor: #000 !important;\n}\n.excel-container { box-shadow: none !important; }\n.scroll-area { height: auto !important; overflow: visible !important; }\n.row-item { border: 1px solid #ccc !important; background: none !important; color: black !important; }\n.f-label { color: black !important; }\n.f-num { display: none !important; }\n}\n@media screen and (max-width: 480px) {\n.modern-modal-content {\nwidth: 98% !important;\npadding: 15px !important;\nmargin: 5px auto !important;\n}\n.modal-header h2 {\nfont-size: 18px;\n}\n}\n</style>\n';
  let _0x38a65e = document.createElement("div");
  _0x38a65e.id = "summaryModal";
  _0x38a65e.style =
    "\nposition:fixed;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100%;\nbackground:rgba(0,0,0,0.6);\nz-index:10000;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\n";
  _0x38a65e.innerHTML =
    _0x3803b3 +
    ('\n<div style="\nbackground:#000080;\ncolor: white;\nborder-radius: 8px;\nborder: 1px solid #ffffff;\ndisplay: inline-block;\nmax-height: 90vh;\noverflow: hidden;\nwidth: fit-content;\nbox-shadow: 0 10px 30px rgba(0,0,0,0.35);\n">\n<div style="\nbackground:linear-gradient(90deg,#2c3e50,#34495e);\ncolor:white;\npadding:10px;\nborder-bottom:2px solid #1c2833;\ntext-align:center;\n">\n<h3 style="margin:0;font-size:15px;font-weight:600;letter-spacing:0.5px;">\nDistrict Enrollment Summary\n</h3>\n<div style="\nmargin-top:6px;\ndisplay:flex;\ngap:10px;\njustify-content:center;\nflex-wrap:wrap;\nfont-weight:bold;\nfont-size:14px;\n">\n<div style="background:#e3f2fd;padding:4px 12px;border:1px solid #000;border-radius:4px;color: black !important;">\nTotal : ' +
      _0xb32246.total +
      '\n</div>\n<div style="background:#e8f5e9;padding:4px 12px;border:1px solid #000;border-radius:4px;color: black !important;">\nUpdated : ' +
      _0xb32246.updated +
      '\n</div>\n<div style="background:#e1f5fe;padding:4px 12px;border:1px solid #000;border-radius:4px;color: black !important;">\nNew Entry : ' +
      _0xb32246.new +
      '\n</div>\n<div style="background:#ffebee;padding:4px 12px;border:1px solid #000;border-radius:4px;color:#b71c1c;">\nDelete : ' +
      _0xb32246.deleted +
      '\n</div>\n<div style="background:#ffebee;padding:4px 12px;border:1px solid #000;border-radius:4px;color:#b71c1c;">\nDEO : ' +
      _0xb32246.deo +
      '\n</div>\n<div style="background:#e8f5e9;padding:4px 12px;border:1px solid #000;border-radius:4px;color:#1b5e20;">\nJD : ' +
      _0xb32246.jd +
      '\n</div>\n<div style="background:#e3f2fd;padding:4px 12px;border:1px solid #000;border-radius:4px;color:#0d47a1;">\nDPI : ' +
      _0xb32246.dpi +
      '\n</div>\n</div>\n<div style="\noverflow-y:auto;\nmax-height:65vh;\npadding:10px;\ndisplay:block;\nwidth:100%;\n">\n<table style="\nwidth:1px !important;\nmin-width:100% !important;\nborder-collapse:collapse;\nfont-size:11px;\nborder:1px solid #000;\nmargin:0 auto;\ntable-layout:auto !important;\nbackground:white;\n">\n<thead style="background:#f2f2f2; color:#000; font-weight:bold;">\n<tr>\n<th style="padding:4px 10px;text-align:left;border:1px solid #000;white-space:nowrap;">Office Name</th>\n<th style="padding:4px 8px;border:1px solid #000;">Registered</th>\n<th style="padding:4px 8px;border:1px solid #000;">Updated</th>\n<th style="padding:4px 8px;border:1px solid #000;">New entry</th>\n<th style="padding:4px 8px;border:1px solid #000;">Delete</th>\n<th style="padding:4px 8px;border:1px solid #000;background:#e8f5e9;">📤 Upload List</th>\n<th style="padding:4px 8px;border:1px solid #000;background:#e3f2fd;">👁️ View Doc</th>\n</tr>\n</thead>\n<tbody>\n' +
      _0x34dd4a
        .map((_0x20de0b) => {
          let _0x4dabf8 =
            _0x20de0b.type === "JD"
              ? _0x20de0b.name.replace(/\s+/g, "")
              : "DEO" + _0x20de0b.name.replace(/\s+/g, "");
          let _0x44a4c5 =
            window.currentUser === _0x4dabf8 || window.currentUser === "DPI";
          let _0xc37252 = _0x44a4c5
            ? "<button onclick=\"summaryUploadDoc('" +
              _0x4dabf8 +
              '\')" style="background:#2e7d32;color:white;border:none;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:11px;font-weight:bold;">📤 Upload</button><div id=\'uploadStatus_' +
              _0x4dabf8 +
              "' style='font-size:10px;margin-top:2px;'></div>"
            : '<span style="color:#bbb;font-size:10px;">🔒 No Access</span>';
          const _0x4b55d0 = localStorage.getItem("summaryDoc_" + _0x4dabf8);
          let _0x763da9 = _0x4b55d0
            ? "<button onclick=\"summaryViewDoc('" +
              _0x4dabf8 +
              '\')" style="background:#1565c0;color:white;border:none;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:11px;font-weight:bold;animation:pulseBtn 1.5s infinite;">👁️ View</button>'
            : '<span style="color:#aaa;font-size:10px;font-style:italic;">No Document</span>';
          return (
            '\n<tr style="border-bottom:1px solid #000;' +
            (_0x20de0b.type === "JD"
              ? "background:#e8f1ff;font-weight:600;color:#0d47a1;"
              : "") +
            '">\n<td style="padding:2px 10px;border-right:1px solid #000;white-space:nowrap;color:black !important;">\n' +
            (_0x20de0b.type === "JD"
              ? _0x20de0b.name
              : "DEO " + _0x20de0b.name) +
            '\n</td>\n<td style="padding:2px 8px;text-align:center;border-right:1px solid #000;font-weight:bold;color:black !important;">' +
            _0x20de0b.total +
            '</td>\n<td style="padding:2px 8px;text-align:center;border-right:1px solid #000;color:#2e7d32;">' +
            _0x20de0b.updated +
            '</td>\n<td style="padding:2px 8px;text-align:center;border-right:1px solid #000;color:#1565c0;">' +
            _0x20de0b.new +
            '</td>\n<td style="padding:2px 8px;text-align:center;border-right:1px solid #000;color:#c62828;font-weight:600;">' +
            _0x20de0b.deleted +
            '</td>\n<td style="padding:2px 8px;text-align:center;border-right:1px solid #000;">\n<input type="file" id="fileUpload_' +
            _0x4dabf8 +
            '" accept=".pdf,.jpg,.jpeg,.png" style="display:none;" onchange="handleSummaryFileUpload(event,\'' +
            _0x4dabf8 +
            "')\">\n" +
            _0xc37252 +
            '\n</td>\n<td style="padding:2px 8px;text-align:center;">' +
            _0x763da9 +
            "</td>\n</tr>"
          );
        })
        .join("") +
      '\n</tbody>\n</table>\n</div>\n<div class="no-print" style="\npadding:10px;\nbackground:#f5f6fa;\ntext-align:right;\nborder-top:1px solid #ddd;\n">\n<button onclick="window.print()" style="\npadding:7px 18px;\nbackground:#2e7d32;\ncolor:white;\nborder:none;\nborder-radius:4px;\ncursor:pointer;\nfont-weight:600;\nfont-size:12px;\nmargin-right:8px;\n">\nPrint Report\n</button>\n<button onclick="document.getElementById(\'summaryModal\').remove()" style="\npadding:7px 18px;\nbackground:#c62828;\ncolor:white;\nborder:none;\nborder-radius:4px;\ncursor:pointer;\nfont-weight:600;\nfont-size:12px;\n">\nClose\n</button>\n</div>\n</div>\n');
  document.body.appendChild(_0x38a65e);
}
document.addEventListener("change", function (_0x18da3f) {
  if (_0x18da3f.target && _0x18da3f.target.id === "in19mode") {
    const _0x2fc746 = document.getElementById("in19");
    if (_0x18da3f.target.value === "DATE") {
      _0x2fc746.style.display = "inline-block";
      _0x2fc746.type = "date";
      _0x2fc746.value = "";
    } else {
      _0x2fc746.style.display = "none";
      _0x2fc746.type = "text";
      _0x2fc746.value = "NIL";
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const _0xa0f073 = document.getElementById("clearFiltersBtn");
  if (_0xa0f073) {
    _0xa0f073.addEventListener("click", function () {
      const _0x275fd3 = document.querySelectorAll("#filterRow input");
      _0x275fd3.forEach((_0x47dcb3) => {
        _0x47dcb3.value = "";
      });
      const _0x4eef18 = document.querySelectorAll("thead input");
      _0x4eef18.forEach((_0x9bd14a) => {
        _0x9bd14a.value = "";
      });
      window.filteredData = [...window.fullData];
      renderVirtual();
      console.log("✅ Filters fully reset");
    });
  }
});
function formatDateToDisplay(_0x8b0501) {
  if (
    !_0x8b0501 ||
    _0x8b0501.toUpperCase() === "NIL" ||
    _0x8b0501 === "" ||
    _0x8b0501 === "dd-mm-yyyy"
  ) {
    return "NIL";
  }
  if (/^\d{2}-\d{2}-\d{4}$/.test(_0x8b0501)) {
    return _0x8b0501;
  }
  const _0x7d5e4c = _0x8b0501.split("-");
  if (_0x7d5e4c.length === 3 && _0x7d5e4c[0].length === 4) {
    return _0x7d5e4c[2] + "-" + _0x7d5e4c[1] + "-" + _0x7d5e4c[0];
  }
  return _0x8b0501;
}
function updateRetirementDate() {
  const _0x1ad239 = document.getElementById("in7");
  const _0x5986c6 = document.getElementById("retirementField");
  if (
    _0x1ad239 &&
    _0x1ad239.value &&
    _0x1ad239.value !== "" &&
    _0x1ad239.value !== "NIL"
  ) {
    const _0x30c335 = new Date(_0x1ad239.value);
    if (!isNaN(_0x30c335.getTime())) {
      const _0x4f61c1 = _0x30c335.getDate();
      const _0xeb7f65 = _0x30c335.getMonth();
      const _0x10b360 = _0x30c335.getFullYear();
      let _0xf78b2 = _0x10b360 + 62;
      let _0x3138b6 = _0xeb7f65;
      if (_0x4f61c1 === 1) {
        _0x3138b6 = _0xeb7f65 - 1;
        if (_0x3138b6 < 0) {
          _0x3138b6 = 11;
          _0xf78b2--;
        }
      }
      const _0x5dd9fd = new Date(_0xf78b2, _0x3138b6 + 1, 0);
      const _0xef41f7 = String(_0x5dd9fd.getDate()).padStart(2, "0");
      const _0x3b14e3 = String(_0x5dd9fd.getMonth() + 1).padStart(2, "0");
      if (_0x5986c6) {
        _0x5986c6.value = _0xef41f7 + "-" + _0x3b14e3 + "-" + _0xf78b2;
      }
    }
  } else if (_0x5986c6) {
    _0x5986c6.value = "NIL";
  }
}
const dobField = document.getElementById("in7");
if (dobField) {
  dobField.addEventListener("input", updateRetirementDate);
  dobField.addEventListener("change", updateRetirementDate);
  const observer = new MutationObserver(() => updateRetirementDate());
  observer.observe(dobField, {
    attributes: true,
    childList: true,
    characterData: true,
  });
}
function checkProbationSection() {
  var _0x3c2f97 = document.getElementById("in14").value;
  var _0x2ba844 = document.getElementById("probationSection");
  if (!_0x2ba844) {
    return;
  }
  if (_0x3c2f97 && _0x3c2f97 >= "2020-01-01") {
    _0x2ba844.style.display = "block";
  } else {
    _0x2ba844.style.display = "none";
    resetProbationSection();
  }
}
function handleProbationToggle() {
  var _0xb6e33 = document.getElementById("probYes");
  var _0x1f777a = document.getElementById("probationDetails");
  if (!_0x1f777a) {
    return;
  }
  _0x1f777a.style.display = _0xb6e33 && _0xb6e33.checked ? "block" : "none";
}
function resetProbationSection() {
  var _0x4eca76 = document.getElementById("probationSection");
  if (_0x4eca76) {
    _0x4eca76.style.display = "none";
  }
  var _0x37cc01 = document.getElementById("probNo");
  if (_0x37cc01) {
    _0x37cc01.checked = true;
  }
  var _0x4e822b = document.getElementById("probationDetails");
  if (_0x4e822b) {
    _0x4e822b.style.display = "none";
  }
  var _0x3aa2b1 = document.getElementById("probOrderNo");
  if (_0x3aa2b1) {
    _0x3aa2b1.value = "";
  }
  var _0x5ce60c = document.getElementById("probOrderDate");
  if (_0x5ce60c) {
    _0x5ce60c.value = "";
  }
}
function populateProbationFromRecord(_0x2dfdf4) {
  var _0x4e8344 = _0x2dfdf4.field27 || "";
  resetProbationSection();
  checkProbationSection();
  var _0x4ab620 = document.getElementById("probationSection");
  if (!_0x4ab620 || _0x4ab620.style.display === "none") {
    return;
  }
  var _0x5d7f3d = _0x4e8344.match(/__PROB__({.*?})__END__/);
  if (_0x5d7f3d) {
    try {
      var _0x173193 = JSON.parse(_0x5d7f3d[1]);
      if (_0x173193.status === "YES") {
        document.getElementById("probYes").checked = true;
        handleProbationToggle();
        if (_0x173193.orderNo) {
          document.getElementById("probOrderNo").value = _0x173193.orderNo;
        }
        if (_0x173193.orderDate) {
          document.getElementById("probOrderDate").value = _0x173193.orderDate;
        }
      } else {
        document.getElementById("probNo").checked = true;
        handleProbationToggle();
      }
    } catch (_0xca0ceb) {}
  }
}
function extractProbationData(_0x5c449b) {
  var _0x5b9ee5 = document.getElementById("probationSection");
  var _0x2d3f5e = (_0x5c449b || "")
    .replace(/__PROB__({.*?})__END__/g, "")
    .trim();
  if (!_0x5b9ee5 || _0x5b9ee5.style.display === "none") {
    return {
      probationJSON: null,
      cleanRemark: _0x2d3f5e,
    };
  }
  var _0x51c207 = document.getElementById("probYes");
  var _0xf6ca09 = _0x51c207 && _0x51c207.checked ? "YES" : "NO";
  var _0xac84da = {
    status: _0xf6ca09,
  };
  if (_0xf6ca09 === "YES") {
    _0xac84da.orderNo =
      (document.getElementById("probOrderNo") || {}).value || "";
    _0xac84da.orderDate =
      (document.getElementById("probOrderDate") || {}).value || "";
  }
  var _0x3a426f = "__PROB__" + JSON.stringify(_0xac84da) + "__END__";
  var _0x969854 = _0x2d3f5e ? _0x2d3f5e + " " + _0x3a426f : _0x3a426f;
  return {
    probationJSON: _0xac84da,
    cleanRemark: _0x969854,
  };
}
function openReportModal() {
  const _0x4ec7ae = document.getElementById("reportModal");
  if (_0x4ec7ae) {
    _0x4ec7ae.style.display = "flex";
  } else {
    alert("Error: reportModal ID not found!");
  }
}
function openAdvancedFilter() {
  const _0x983827 = document.getElementById("fieldSelector");
  _0x983827.innerHTML = '<option value="">-- Choose Field --</option>';
  colConfig.forEach((_0x420105, _0x3fe6f4) => {
    if (_0x3fe6f4 < 27) {
      let _0x1576ab = document.createElement("option");
      _0x1576ab.value = _0x3fe6f4;
      _0x1576ab.innerText = _0x3fe6f4 + 1 + ". " + _0x420105.name;
      _0x983827.appendChild(_0x1576ab);
    }
  });
  document.getElementById("filterModal").style.display = "flex";
}
function populateValueDropdown() {
  const _0x2af7c1 = document.getElementById("fieldSelector").value;
  const _0x199d68 = document.getElementById("valueSelector");
  _0x199d68.innerHTML = '<option value="ALL">-- Show All Data --</option>';
  if (_0x2af7c1 === "") {
    return;
  }
  let _0x3fe9a1 = new Set();
  window.fullData.forEach((_0x15e623) => {
    let _0x121885 = _0x15e623["field" + (parseInt(_0x2af7c1) + 1)] || "";
    _0x121885 = _0x121885.trim();
    if (_0x121885 && _0x121885 !== "-" && _0x121885 !== "NIL") {
      _0x3fe9a1.add(_0x121885);
    }
  });
  Array.from(_0x3fe9a1)
    .sort()
    .forEach((_0x11a37b) => {
      let _0x29d131 = document.createElement("option");
      _0x29d131.value = _0x11a37b;
      _0x29d131.innerText = _0x11a37b;
      _0x199d68.appendChild(_0x29d131);
    });
}
function applyAdvancedFilter() {
  const _0x51181d = document.getElementById("fieldSelector").value;
  const _0x3db262 = document.getElementById("valueSelector").value;
  if (_0x51181d === "") {
    alert("Please select a field first!");
    return;
  }
  if (_0x3db262 === "ALL") {
    window.filteredData = [...window.fullData];
  } else {
    window.filteredData = window.fullData.filter((_0x252f99) => {
      let _0x4c21dd = _0x252f99["field" + (parseInt(_0x51181d) + 1)] || "";
      return _0x4c21dd.trim() === _0x3db262;
    });
  }
  renderVirtual();
  closeFilterModal();
}
function closeFilterModal() {
  document.getElementById("filterModal").style.display = "none";
}
function calculateRetirementForPDF(_0x218d13) {
  if (!_0x218d13 || _0x218d13.includes("NIL")) {
    return "NIL";
  }
  try {
    let _0x53b4fa = _0x218d13.split("-");
    const _0x11ca50 = parseInt(_0x53b4fa[0]);
    const _0x40cc1f = parseInt(_0x53b4fa[1]) - 1;
    const _0x370814 = parseInt(_0x53b4fa[2]);
    let _0x495f16 = _0x370814 + 62;
    let _0x274f28 = _0x40cc1f;
    if (_0x11ca50 === 1) {
      _0x274f28 = _0x40cc1f - 1;
      if (_0x274f28 < 0) {
        _0x274f28 = 11;
        _0x495f16--;
      }
    }
    const _0x52ae8b = new Date(_0x495f16, _0x274f28 + 1, 0);
    const _0x5633bd = String(_0x52ae8b.getDate()).padStart(2, "0");
    const _0x115d1e = String(_0x52ae8b.getMonth() + 1).padStart(2, "0");
    return _0x5633bd + "-" + _0x115d1e + "-" + _0x495f16;
  } catch (_0x487a36) {
    return "NIL";
  }
}
function viewDocument(_0x1ea6fe) {
  if (!_0x1ea6fe) {
    myAlert("❌ No document found!");
    return;
  }
  _openCloudinaryDoc(_0x1ea6fe);
}
function openBase64Doc(_0x57a33d) {
  const _0xade45a = window["_b64doc_" + _0x57a33d] || "";
  if (!_0xade45a) {
    myAlert("❌ Document not found!");
    return;
  }
  if (_0xade45a.startsWith("http") && _0xade45a.includes("cloudinary")) {
    _openCloudinaryDoc(_0xade45a);
    return;
  }
  try {
    const _0x494f61 = _0xade45a.split(",");
    const _0x2667c3 =
      (_0x494f61[0].match(/:(.*?);/) || [])[1] || "application/pdf";
    const _0x2929ac = atob(_0x494f61[_0x494f61.length > 1 ? 1 : 0]);
    let _0x4c0743 = _0x2929ac.length;
    const _0x44fea2 = new Uint8Array(_0x4c0743);
    while (_0x4c0743--) {
      _0x44fea2[_0x4c0743] = _0x2929ac.charCodeAt(_0x4c0743);
    }
    const _0xe6691b = new Blob([_0x44fea2], {
      type: _0x2667c3,
    });
    const _0x4a5961 = URL.createObjectURL(_0xe6691b);
    window.open(_0x4a5961, "_blank");
    setTimeout(() => URL.revokeObjectURL(_0x4a5961), 60000);
  } catch (_0x27766a) {
    window.open(_0xade45a, "_blank");
  }
}
function triggerFile() {
  const _0x2663df = document.getElementById("docUpload");
  if (_0x2663df) {
    _0x2663df.click();
  } else {
    console.error("Error: Element with ID 'docUpload' not found in HTML.");
  }
}
const docUploadEl = document.getElementById("docUpload");
if (docUploadEl) {
  docUploadEl.addEventListener("change", async function () {
    const _0x319851 = this.files[0];
    if (!_0x319851) {
      return;
    }
    if (_0x319851.type !== "application/pdf") {
      myAlert("❌ Only PDF allowed!");
      this.value = "";
      return;
    }
    const _0x1123e9 = document.getElementById("fileName");
    if (_0x1123e9) {
      _0x1123e9.innerText = "✅ " + _0x319851.name;
    }
    await uploadDocument(_0x319851);
  });
}
function renderVirtual() {
  const _0x797d84 = document.querySelector(".scroll-area");
  const _0x579609 = document.getElementById("tableBody");
  if (!_0x797d84 || !_0x579609) {
    return;
  }
  const _0x1ebb17 = _0x797d84.scrollTop;
  const _0x9f6a9d = _0x797d84.clientHeight;
  const _0x1f896e = window.filteredData.length;
  let _0x683fc1 = Math.floor(_0x1ebb17 / ROW_HEIGHT) - 10;
  _0x683fc1 = Math.max(0, _0x683fc1);
  let _0x2d2a4d = Math.ceil((_0x1ebb17 + _0x9f6a9d) / ROW_HEIGHT) + 10;
  _0x2d2a4d = Math.min(_0x1f896e, _0x2d2a4d);
  const _0x14c7cf = _0x683fc1 * ROW_HEIGHT;
  const _0x2356e0 = Math.max(0, (_0x1f896e - _0x2d2a4d) * ROW_HEIGHT);
  const _0x32668b = window.filteredData.slice(_0x683fc1, _0x2d2a4d);
  let _0x35f202 = "";
  if (_0x14c7cf > 0) {
    _0x35f202 +=
      '<tr><td colspan="35" style="height:' +
      _0x14c7cf +
      'px; border:none;"></td></tr>';
  }
  _0x32668b.forEach((_0x5dde29, _0x5e3176) => {
    let _0x109af5 = _0x5dde29;
    let _0x169424 = _0x109af5.field1 || "";
    let _0x3e86ea = Array.isArray(_0x109af5.changed_fields)
      ? _0x109af5.changed_fields
      : [];
    let _0x35716c =
      _0x109af5.field28 === "DELETED"
        ? 'style="background-color: #ffebee;"'
        : "";
    let _0x3d4f21 = _0x109af5.field28 === "DELETED" ? "soft-deleted" : "";
    _0x35f202 +=
      '<tr onclick="selectRow(this)" ondblclick="openRowInForm(\'' +
      _0x5dde29.uniqueId +
      '\')" data-id="' +
      _0x5dde29.uniqueId +
      '" class="' +
      _0x3d4f21 +
      ' ums-row-animate" ' +
      _0x35716c +
      ">";
    _0x35f202 += "<td>" + _0x169424 + "</td>";
    for (let _0xd37bb3 = 2; _0xd37bb3 <= 31; _0xd37bb3++) {
      let _0x54724f = "field" + _0xd37bb3;
      let _0x2d4a23 = _0x109af5[_0x54724f] || "";
      if (_0xd37bb3 === 28 && _0x2d4a23 === "DELETED") {
        _0x2d4a23 =
          '<span style="color:#d32f2f; font-weight:bold;">DELETED</span>';
      }
      if (_0xd37bb3 === 30) {
        let _0x498c1b = _0x5dde29.document_url || _0x5dde29.field30 || "";
        if (_0x498c1b && _0x498c1b !== "") {
          const _0x16149a = (_0x5dde29.uniqueId || _0x5e3176)
            .toString()
            .replace(/[^a-z0-9]/gi, "_");
          _0x2d4a23 =
            "<button onclick=\"openBase64Doc('doc30_" +
            _0x16149a +
            '\')" style="background:#2563eb; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">📄 View</button>';
          window["_b64doc_doc30_" + _0x16149a] = _0x498c1b;
        } else {
          _0x2d4a23 = '<span style="color:#94a3b8;">No Document</span>';
        }
        _0x35f202 += "<td>" + _0x2d4a23 + "</td>";
        continue;
      }
      if (_0xd37bb3 === 31) {
        let _0x3df3c0 = _0x5dde29.field31 || "";
        if (_0x3df3c0 && _0x3df3c0 !== "") {
          const _0xa1967c = (_0x5dde29.uniqueId || _0x5e3176)
            .toString()
            .replace(/[^a-z0-9]/gi, "_");
          _0x2d4a23 =
            "<button onclick=\"openBase64Doc('doc31_" +
            _0xa1967c +
            '\')" style="background:#e65100; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">📤 View</button>';
          window["_b64doc_doc31_" + _0xa1967c] = _0x3df3c0;
        } else {
          _0x2d4a23 = '<span style="color:#94a3b8;">No Document</span>';
        }
        _0x35f202 += "<td>" + _0x2d4a23 + "</td>";
        continue;
      }
      if (
        [7, 14, 15, 16, 17, 18, 19].includes(_0xd37bb3) &&
        _0x2d4a23.includes("-")
      ) {
        let _0x95a918 = _0x2d4a23.split("-");
        if (_0x95a918[0].length === 4) {
          _0x2d4a23 = _0x95a918[2] + "/" + _0x95a918[1] + "/" + _0x95a918[0];
        }
      }
      if (_0xd37bb3 === 19 && (!_0x2d4a23 || _0x2d4a23.trim() === "")) {
        _0x2d4a23 = '<span style="color:#94a3b8;font-style:italic;">NIL</span>';
      }
      if (_0x3e86ea.includes(_0x54724f)) {
        let _0x3caa9a = (_0x109af5._oldData?.[_0x54724f] || "")
          .toUpperCase()
          .replace(/\s+/g, " ")
          .replace(/–/g, "-")
          .trim();
        let _0x47abe2 = (_0x2d4a23 || "")
          .toUpperCase()
          .replace(/\s+/g, " ")
          .replace(/–/g, "-")
          .trim();
        if (_0x3caa9a === _0x47abe2) {
        } else if (_0x47abe2.includes("/") && _0x3caa9a) {
          let _0xe38983 = _0x47abe2
            .split("/")
            .map((_0x3dc1c9) => _0x3dc1c9.trim());
          let _0x1405da = _0x3caa9a
            .split("/")
            .map((_0x1bf672) => _0x1bf672.trim());
          let _0x3de9e9 = _0x2d4a23.split("/");
          let _0x121915 = _0xe38983.map((_0x1b62d6, _0x3c2bab) => {
            if (!_0x1405da.includes(_0x1b62d6)) {
              return (
                '<span class="update-highlight">' +
                _0x3de9e9[_0x3c2bab] +
                "</span>"
              );
            } else {
              return _0x3de9e9[_0x3c2bab];
            }
          });
          _0x2d4a23 = _0x121915.join("/");
        } else {
          _0x2d4a23 = '<span class="update-highlight">' + _0x2d4a23 + "</span>";
        }
      }
      _0x35f202 +=
        '<td title="' +
        _0x2d4a23.replace(/<[^>]+>/g, "") +
        '">' +
        _0x2d4a23 +
        "</td>";
    }
    _0x35f202 += "</tr>";
  });
  if (_0x2356e0 > 0) {
    _0x35f202 +=
      '<tr><td colspan="35" style="height:' +
      _0x2356e0 +
      'px; border:none;"></td></tr>';
  }
  _0x579609.innerHTML = _0x35f202;
}
let searchTimeout;
function handleSearch(_0x1f341c) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    _0x1f341c = _0x1f341c.toLowerCase();
    window.filteredData = window.fullData.filter(
      (_0x644d92) =>
        (_0x644d92.field2 || "").toLowerCase().includes(_0x1f341c) ||
        (_0x644d92.field4 || "").toLowerCase().includes(_0x1f341c) ||
        (_0x644d92.field5 || "").toLowerCase().includes(_0x1f341c),
    );
    renderVirtual();
  }, 300);
}
const SUPABASE_URL = "https://dgzdessdyrxhsbjxeahi.supabase.co";
const SUPABASE_KEY = "sb_publishable_qzNG3P7YBOQ-WwjAe8bIgw_mNMJKrcG";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
async function loadData() {
  let _0xaf66c1 = [];
  let _0x128712 = 0;
  const _0x161606 = 1000;
  const _0x5ba058 = document.getElementById("progressText");
  const _0x58a841 = document.getElementById("progressBar");
  const _0x45b582 = document.getElementById("uploadStatus");
  if (_0x45b582) {
    _0x45b582.style.display = "block";
  }
  while (true) {
    const { data: _0x163b39, error: _0x8420ac } = await supabaseClient
      .from("gradation_list")
      .select("*")
      .range(_0x128712, _0x128712 + _0x161606 - 1);
    if (_0x8420ac) {
      console.error(_0x8420ac);
      break;
    }
    if (!_0x163b39 || _0x163b39.length === 0) {
      break;
    }
    _0xaf66c1 = _0xaf66c1.concat(_0x163b39);
    _0x128712 += _0x161606;
    if (_0x5ba058) {
      _0x5ba058.innerText = "Loading data... " + _0xaf66c1.length;
    }
    if (_0x58a841) {
      let _0x4a2a72 = Math.min((_0xaf66c1.length / 30000) * 100, 95);
      _0x58a841.style.width = _0x4a2a72 + "%";
      _0x58a841.innerText = Math.round(_0x4a2a72) + "%";
    }
    await new Promise((_0x5121c4) => setTimeout(_0x5121c4, 0));
  }
  if (typeof loadDataIntoMemory === "function") {
    loadDataIntoMemory(_0xaf66c1);
  } else {
    console.error("loadDataIntoMemory function not found!");
  }
  if (_0x5ba058) {
    _0x5ba058.innerText = "✅ " + _0xaf66c1.length + " Records Loaded!";
  }
  if (_0x58a841) {
    _0x58a841.style.width = "100%";
    _0x58a841.innerText = "100%";
    _0x58a841.style.background = "linear-gradient(90deg,#16a34a,#22c55e)";
  }
  setTimeout(() => {
    if (_0x45b582) {
      _0x45b582.style.display = "none";
    }
    if (_0x58a841) {
      _0x58a841.style.width = "0%";
      _0x58a841.innerText = "0%";
    }
    if (_0x5ba058) {
      _0x5ba058.innerText = "Starting...";
    }
  }, 800);
  console.log("✅ Total loaded into memory:", _0xaf66c1.length);
}
function getNextSerialNumber() {
  if (!window.fullData || window.fullData.length === 0) {
    return 1;
  }
  const _0x104451 = window.fullData.map(
    (_0x1b24ff) => parseInt(_0x1b24ff.field1) || 0,
  );
  const _0x27d961 = Math.max(..._0x104451);
  return _0x27d961 + 1;
}
function loadDataIntoMemory(_0x4aaabc) {
  // DIAGNOSTIC: log the raw shape of the very first row so we can see what
  // columns D1 actually gives us (id? created_at? rowid? etc) before we
  // throw that info away by only keeping unique_id + data.
  if (_0x4aaabc && _0x4aaabc.length > 0) {
    console.log("🔎 Raw row keys from D1 (first row):", Object.keys(_0x4aaabc[0]));
    console.log("🔎 Raw row sample (first row):", JSON.stringify(_0x4aaabc[0], null, 2));
  }

  const _0x14c326 = _0x4aaabc.map((_0x17293c) => ({
    ..._0x17293c.data,
    uniqueId: _0x17293c.unique_id, // ⚠️ FIX: D1 ka asli composite unique_id (e.g. "AA1056_44591")
    // hamesha data.uniqueId (jo sirf office/code hai, e.g. "AA1056", unique NAHI hai) ko
    // overwrite karega — isliye ye spread ke BAAD aana chahiye, pehle nahi.
  }));

  // ---- DIAGNOSTIC: exact duplicate unique_id count/list before dedup ----
  const _0xcountMap = {};
  _0x14c326.forEach((_0x12ef68) => {
    _0xcountMap[_0x12ef68.uniqueId] = (_0xcountMap[_0x12ef68.uniqueId] || 0) + 1;
  });
  const _0xdupIds = Object.keys(_0xcountMap).filter((k) => _0xcountMap[k] > 1);
  const _0xdupExtraRows = _0xdupIds.reduce((sum, k) => sum + (_0xcountMap[k] - 1), 0);
  window.duplicateUniqueIds = _0xdupIds;
  window.rawDataBeforeDedup = _0x14c326; // diagnostic: inspect both copies of a duplicate unique_id
  console.log(
    "🔎 Raw rows fetched from DB:", _0x14c326.length,
    "| Unique unique_ids:", Object.keys(_0xcountMap).length,
    "| Duplicate unique_id groups:", _0xdupIds.length,
    "| Extra rows because of duplicates:", _0xdupExtraRows
  );
  if (_0xdupIds.length > 0) {
    console.log("🔎 Sample duplicate unique_ids (first 20):", _0xdupIds.slice(0, 20));
  }

  const _0x3ba100 = new Set();
  window.fullData = _0x14c326
    .slice()
    .reverse()
    .filter((_0x12ef68) => {
      if (_0x3ba100.has(_0x12ef68.uniqueId)) {
        return false;
      }
      _0x3ba100.add(_0x12ef68.uniqueId);
      return true;
    })
    .reverse();
  console.log(
    "✅ After removing duplicates (Latest kept):",
    window.fullData.length,
  );
  window.fullData.sort(function (_0x2d8432, _0x496ce5) {
    var _0xa = (_0x2d8432.field2 || "").toString().trim();
    var _0xb = (_0x496ce5.field2 || "").toString().trim();
    var _0xna =
      _0xa === "" || _0xa === "NEW ENTRY"
        ? Infinity
        : parseInt(_0xa.replace(/[^0-9]/g, ""), 10);
    var _0xnb =
      _0xb === "" || _0xb === "NEW ENTRY"
        ? Infinity
        : parseInt(_0xb.replace(/[^0-9]/g, ""), 10);
    if (isNaN(_0xna)) {
      _0xna = Infinity;
    }
    if (isNaN(_0xnb)) {
      _0xnb = Infinity;
    }
    if (_0xna !== _0xnb) {
      return _0xna - _0xnb;
    }
    if (_0x2d8432.uniqueId > _0x496ce5.uniqueId) {
      return 1;
    } else {
      return -1;
    }
  });
  window.filteredData = [...window.fullData];
  console.log("✅ Final Records:", window.fullData.length);
  renderVirtual();
}
async function deleteFromSupabase(_0xb5ce6f) {
  const { error: _0x3d6199 } = await supabaseClient
    .from("gradation_list")
    .delete()
    .eq("unique_id", _0xb5ce6f);
  if (_0x3d6199) {
    console.error("Delete error:", _0x3d6199);
  } else {
    console.log("🗑 Deleted:", _0xb5ce6f);
  }
}
let presenceChannel = null;
function _realtimeUser() {
  return window.currentUser || "Unknown";
}
function _realtimeDistrict() {
  var _0x5f104f = window.currentUser || "";
  if (!_0x5f104f) {
    return "UNKNOWN";
  }
  if (_0x5f104f === "DPI") {
    return "DPI";
  }
  if (_0x5f104f.startsWith("JD")) {
    var _0xf44e64 = _0x5f104f.replace(/^JD/, "").trim();
    return "JD " + _0xf44e64;
  }
  if (_0x5f104f.startsWith("DEO")) {
    return _0x5f104f.replace(/^DEO/, "").trim() || _0x5f104f;
  }
  return _0x5f104f;
}
const _rowLocks = {};
function initRealtime() {
  if (presenceChannel) {
    supabaseClient.removeChannel(presenceChannel);
    presenceChannel = null;
  }
  const _0x575b99 = _realtimeUser();
  const _0x3784e3 = _realtimeDistrict();
  presenceChannel = supabaseClient.channel("ms-gradation-collab", {
    config: {
      presence: {
        key: _0x575b99,
      },
    },
  });
  presenceChannel
    .on(
      "presence",
      {
        event: "sync",
      },
      () => {
        updateOnlineUsersUI(presenceChannel.presenceState());
      },
    )
    .on(
      "presence",
      {
        event: "join",
      },
      ({ key: _0x4f11f6, newPresences: _0x20f2cd }) => {
        const _0x5cc834 = _0x20f2cd?.[0];
        const _0x1b4579 =
          _0x5cc834?.district && _0x5cc834.district !== "UNKNOWN"
            ? _0x5cc834.district
            : _labelFromKey(_0x4f11f6);
        showNotification(_0x1b4579 + " joined", "join");
      },
    )
    .on(
      "presence",
      {
        event: "leave",
      },
      ({ key: _0x535d16 }) => {
        showNotification(_labelFromKey(_0x535d16) + " went offline", "leave");
      },
    )
    .on(
      "broadcast",
      {
        event: "row-locked",
      },
      ({ payload: _0x23216e }) => {
        if (_0x23216e.user !== _0x575b99) {
          handleExternalLock(_0x23216e);
        }
      },
    )
    .on(
      "broadcast",
      {
        event: "row-unlocked",
      },
      ({ payload: _0x375456 }) => {
        handleExternalUnlock(_0x375456);
      },
    )
    .on(
      "broadcast",
      {
        event: "data-update",
      },
      ({ payload: _0x132c25 }) => {
        if (_0x132c25.user !== _0x575b99) {
          showNotification(
            _0x132c25.msg || "Data updated by another user",
            _0x132c25.type || "update",
          );
          const _0x28a97b =
            document.getElementById("formOverlay")?.style.display === "block";
          const _0x3e8a3a = selectedRowElement !== null;
          if (!_0x28a97b && !_0x3e8a3a) {
            loadData();
          } else {
            const _0x259200 = document.getElementById("notifBell");
            if (_0x259200) {
              _0x259200.style.display = "inline";
              _0x259200.classList.add("pulse-animation");
            }
          }
        }
      },
    )
    .on(
      "broadcast",
      {
        event: "title-update",
      },
      ({ payload: _0x5082f6 }) => {
        if (_0x5082f6.user !== _0x575b99 && _0x5082f6.title) {
          _applyRemoteTitleUpdate(_0x5082f6.title);
        }
      },
    )
    .subscribe(async (_0x3e6359) => {
      if (_0x3e6359 === "SUBSCRIBED") {
        await presenceChannel.track({
          user: _0x575b99,
          district: _0x3784e3,
          onlineAt: new Date().toISOString(),
        });
      }
    });
}
function _labelFromKey(_0x4eaf49) {
  if (!_0x4eaf49) {
    return "User";
  }
  if (_0x4eaf49 === "DPI") {
    return "DPI";
  }
  if (_0x4eaf49.startsWith("JD")) {
    return "JD " + _0x4eaf49.replace(/^JD/, "").trim();
  }
  if (_0x4eaf49.startsWith("DEO")) {
    return _0x4eaf49.replace(/^DEO/, "").trim();
  }
  return _0x4eaf49;
}
function updateOnlineUsersUI(_0x475c94) {
  const _0x51ba39 = document.getElementById("onlineStatus");
  if (!_0x51ba39) {
    return;
  }
  const _0x3a65c4 = Object.entries(_0x475c94);
  if (_0x3a65c4.length === 0) {
    _0x51ba39.innerHTML =
      '<span style="color:#999;font-style:italic;">No other users online</span>';
    return;
  }
  _0x51ba39.innerHTML = _0x3a65c4
    .map(([_0x14f58d, _0x4da528]) => {
      const _0xbb39a8 = Array.isArray(_0x4da528) ? _0x4da528[0] : _0x4da528;
      let _0x191c4b = "";
      if (
        _0xbb39a8 &&
        _0xbb39a8.district &&
        _0xbb39a8.district !== "UNKNOWN" &&
        _0xbb39a8.district !== "Unknown"
      ) {
        _0x191c4b = _0xbb39a8.district;
      } else if (_0xbb39a8 && _0xbb39a8.user && _0xbb39a8.user !== "Unknown") {
        _0x191c4b = _labelFromKey(_0xbb39a8.user);
      } else {
        _0x191c4b = _labelFromKey(_0x14f58d);
      }
      const _0x35f3a4 =
        _0xbb39a8 && _0xbb39a8.onlineAt
          ? new Date(_0xbb39a8.onlineAt).toLocaleTimeString("en-IN")
          : "";
      return (
        '<span title="' +
        _0x191c4b +
        " | Online since: " +
        _0x35f3a4 +
        '"\nstyle="padding:2px 8px; background:#e8f5e9; border-radius:12px; font-size:10px; border:1px solid #4caf50; white-space:nowrap;">\n🟢 ' +
        _0x191c4b +
        "\n</span>"
      );
    })
    .join("");
}
function lockRow(_0x1cd365) {
  if (!presenceChannel || !_0x1cd365) {
    return;
  }
  _rowLocks[_0x1cd365] = {
    user: _realtimeUser(),
    district: _realtimeDistrict(),
    self: true,
  };
  presenceChannel.send({
    type: "broadcast",
    event: "row-locked",
    payload: {
      rowId: _0x1cd365,
      user: _realtimeUser(),
      district: _realtimeDistrict(),
    },
  });
}
function unlockRow(_0x4a9fd3) {
  if (!presenceChannel || !_0x4a9fd3) {
    return;
  }
  delete _rowLocks[_0x4a9fd3];
  presenceChannel.send({
    type: "broadcast",
    event: "row-unlocked",
    payload: {
      rowId: _0x4a9fd3,
    },
  });
}
function handleExternalLock(_0x469986) {
  _rowLocks[_0x469986.rowId] = {
    user: _0x469986.user,
    district: _0x469986.district,
    self: false,
  };
  const _0x31eb1c = document.querySelector(
    '#tableBody tr[data-id="' + _0x469986.rowId + '"]',
  );
  if (_0x31eb1c) {
    _0x31eb1c.classList.add("row-locked-external");
    _0x31eb1c.title =
      "🔒 Being edited by " + _0x469986.district + " (" + _0x469986.user + ")";
    if (!_0x31eb1c.querySelector(".lock-icon")) {
      const _0x59fe44 = document.createElement("span");
      _0x59fe44.className = "lock-icon";
      _0x59fe44.textContent = " 🔒";
      _0x31eb1c.cells[2].appendChild(_0x59fe44);
    }
  }
}
function handleExternalUnlock(_0xd1701d) {
  delete _rowLocks[_0xd1701d.rowId];
  const _0x2d181d = document.querySelector(
    '#tableBody tr[data-id="' + _0xd1701d.rowId + '"]',
  );
  if (_0x2d181d) {
    _0x2d181d.classList.remove("row-locked-external");
    _0x2d181d.title = "";
    _0x2d181d.querySelector(".lock-icon")?.remove();
  }
}
const _origRenderVirtual = renderVirtual;
renderVirtual = function () {
  _origRenderVirtual.apply(this, arguments);
  Object.keys(_rowLocks).forEach((_0xf42e0b) => {
    const _0x562ca7 = _rowLocks[_0xf42e0b];
    if (!_0x562ca7.self) {
      const _0x96f39c = document.querySelector(
        '#tableBody tr[data-id="' + _0xf42e0b + '"]',
      );
      if (_0x96f39c && !_0x96f39c.classList.contains("row-locked-external")) {
        _0x96f39c.classList.add("row-locked-external");
        _0x96f39c.title =
          "🔒 Being edited by " +
          _0x562ca7.district +
          " (" +
          _0x562ca7.user +
          ")";
        if (!_0x96f39c.querySelector(".lock-icon")) {
          const _0x5459d0 = document.createElement("span");
          _0x5459d0.className = "lock-icon";
          _0x5459d0.textContent = " 🔒";
          _0x96f39c.cells[2].appendChild(_0x5459d0);
        }
      }
    }
  });
};
const _toastColors = {
  update: "#4caf50",
  join: "#2196f3",
  leave: "#9e9e9e",
  delete: "#f44336",
  info: "#607d8b",
};
function showNotification(_0x67600a, _0x58a34d = "info") {
  const _0x26b69c = _toastColors[_0x58a34d] || _toastColors.info;
  const _0x2e2fec = document.createElement("div");
  _0x2e2fec.style.cssText =
    "\nposition:fixed; bottom:20px; right:20px; z-index:100000;\nbackground:#1e293b; color:white;\npadding:11px 18px; border-radius:8px;\nbox-shadow:0 6px 20px rgba(0,0,0,0.35);\nborder-left:5px solid " +
    _0x26b69c +
    ";\nfont-size:13px; font-family:'Inter',sans-serif;\nmax-width:320px; word-wrap:break-word;\n";
  _0x2e2fec.innerHTML = "🔔 " + _0x67600a;
  document.body.appendChild(_0x2e2fec);
  setTimeout(() => {
    _0x2e2fec.style.opacity = "0";
    _0x2e2fec.style.transition = "opacity 0.4s";
    setTimeout(() => _0x2e2fec.remove(), 400);
  }, 4500);
}
function broadcastDataUpdate(_0xa3b1bd, _0x19d960 = "update") {
  if (!presenceChannel) {
    return;
  }
  presenceChannel.send({
    type: "broadcast",
    event: "data-update",
    payload: {
      msg: _0xa3b1bd,
      type: _0x19d960,
      user: _realtimeUser(),
      district: _realtimeDistrict(),
    },
  });
}
window.addEventListener("load", () => {
  setTimeout(() => {
    if (typeof supabaseClient !== "undefined" && window.currentUser) {
      initRealtime();
    }
  }, 1500);
});
window.addEventListener("load", () => {
  setTimeout(handle18Mode, 500);
});
let lastScrollTop = 0;
document.addEventListener("DOMContentLoaded", () => {
  const _0x2b958d = document.querySelector(".scroll-area");
  if (_0x2b958d) {
    _0x2b958d.addEventListener("scroll", () => {
      if (_0x2b958d.scrollTop !== lastScrollTop) {
        lastScrollTop = _0x2b958d.scrollTop;
        requestAnimationFrame(() => {
          renderVirtual();
        });
      }
    });
  }
});
async function updateUploadStatus(_0x365c8d) {
  const _0x54f953 = _0x365c8d.target.files[0];
  const _0x253830 = document.getElementById("fileNameDisplay");
  const _0x5d37e1 = _0x253830 ? _0x253830.closest(".premium-box") : null;
  if (!_0x54f953) {
    return;
  }
  const _0x2d1d5f = 5242880;
  if (_0x54f953.size > _0x2d1d5f) {
    myAlert(
      "❌ File size cannot exceed 5MB.\nYour file: " +
        (_0x54f953.size / 1024 / 1024).toFixed(2) +
        "MB",
    );
    _0x365c8d.target.value = "";
    return;
  }
  _0x253830.innerHTML = "⏳ Processing...";
  _0x253830.style.color = "#f39c12";
  const _0x582da9 = new FileReader();
  _0x582da9.onload = async function (_0x2dc1a2) {
    const _0x535725 = _0x2dc1a2.target.result;
    window._b64doc_doc30_loaded = _0x535725;
    uploadedFileURL = _0x535725;
    try {
      await uploadDocument(_0x54f953);
    } catch (_0x45e3e5) {
      console.warn("Supabase upload failed:", _0x45e3e5.message);
    }
    var _0x1135b = [
      '<span style="color:#27ae60">&#x2705; ' + _0x54f953.name + "</span>",
      ' &nbsp;<button id="doc30ViewBtn" style="background:#1565c0;color:white;',
      "border:none;padding:2px 7px;border-radius:4px;cursor:pointer;",
      'font-size:11px;font-weight:bold;">&#x1F441; View</button>',
    ].join("");
    _0x253830.innerHTML = _0x1135b;
    _0x253830.style.color = "#27ae60";
    if (_0x5d37e1) {
      _0x5d37e1.style.borderColor = "#2e7d32";
      _0x5d37e1.style.background = "#f0fff4";
      _0x5d37e1.onclick = null;
    }
    setTimeout(function () {
      var _0x4b10b1 = document.getElementById("doc30ViewBtn");
      if (_0x4b10b1) {
        _0x4b10b1.onclick = function () {
          openBase64Doc("doc30_loaded");
        };
      }
    }, 30);
  };
  _0x582da9.onerror = function () {
    _0x253830.innerHTML = "❌ File read failed";
    _0x253830.style.color = "#e74c3c";
  };
  _0x582da9.readAsDataURL(_0x54f953);
}
function generateSerialNumber() {
  if (!window.fullData || window.fullData.length === 0) {
    return 1;
  }
  const _0x4cc68f = window.fullData
    .map((_0x38930f) => parseInt(_0x38930f.field1) || 0)
    .filter((_0x5d0611) => !isNaN(_0x5d0611));
  if (_0x4cc68f.length > 0) {
    return Math.max(..._0x4cc68f) + 1;
  } else {
    return 1;
  }
}
function handleUpdateClick() {
  const _0x113bdb = document.getElementById("in3").value.trim().toUpperCase();
  if (!_0x113bdb) {
    myAlert("⚠️ Please enter Unique ID first.");
    return;
  }
  let _0x33485f = false;
  if (window.fullData && window.fullData.length > 0) {
    _0x33485f = window.fullData.some(
      (_0x59a036) =>
        (_0x59a036.uniqueId || "").trim().toUpperCase() === _0x113bdb,
    );
  }
  if (!_0x33485f) {
    myAlert("❌ Record not found in list. Update not allowed.");
    return;
  }
  saveEntry(false);
}
function logoutUser() {
  if (confirm("Do you want to Logout?")) {
    auditLog("LOGOUT", "User logged out");
    securityClearTimer();
    if (selectedRowElement && typeof unlockRow === "function") {
      unlockRow(selectedRowElement.dataset.id);
    }
    if (presenceChannel) {
      presenceChannel.untrack();
      supabaseClient.removeChannel(presenceChannel);
      presenceChannel = null;
    }
    const _0x4db611 = document.getElementById("loginOverlay");
    if (_0x4db611) {
      _0x4db611.style.display = "flex";
    }
    document.getElementById("userField").value = "";
    document.getElementById("passField").value = "";
    const _0x3bfea5 = document.getElementById("loginError");
    if (_0x3bfea5) {
      _0x3bfea5.innerText = "";
    }
    localStorage.removeItem("isLoggedIn");
    window.currentUser = null;
    const _0x4b4330 = document.getElementById("userBadge");
    if (_0x4b4330) {
      _0x4b4330.textContent = "";
      _0x4b4330.style.display = "none";
    }
  }
}
function checkDuplicateID(_0x2ee9db) {
  let _0x488b4b = _0x2ee9db.value.trim().toUpperCase();
  if (_0x488b4b.length === 0) {
    return;
  }
  if (
    typeof selectedRowElement !== "undefined" &&
    selectedRowElement !== null
  ) {
    let _0xbb6f59 = selectedRowElement.cells[2].innerText.trim().toUpperCase();
    if (_0xbb6f59 === _0x488b4b) {
      return;
    }
  }
  let _0x2004f1 = false;
  if (window.fullData && window.fullData.length > 0) {
    _0x2004f1 = window.fullData.some(
      (_0x528e72) => _0x528e72.uniqueId === _0x488b4b,
    );
  }
  if (_0x2004f1) {
    myAlert("⚠️ This Unique ID (" + _0x488b4b + ") is already submitted!");
    _0x2ee9db.value = "";
    _0x2ee9db.classList.remove("invalid-field");
  }
}
function viewHistory() {
  if (!selectedRowElement) {
    myAlert("⚠️ Please select a row first!");
    return;
  }
  const _0x5c89ba = selectedRowElement.cells[2].innerText.trim();
  const _0x24731b = window.fullData.find(
    (_0x6832f4) =>
      (_0x6832f4.uniqueId || "").trim().toUpperCase() ===
      _0x5c89ba.toUpperCase(),
  );
  const _0x35a308 = _0x24731b ? _0x24731b.history_log : null;
  if (!_0x35a308 || _0x35a308.length === 0) {
    myAlert("❌ No history found for this record.");
    return;
  }
  let _0xc22c63 = "";
  _0x35a308.forEach((_0x5c5bc9, _0x3bd92a) => {
    let _0x44f873 = JSON.parse(_0x5c5bc9.before);
    let _0xb2b0d1 = JSON.parse(_0x5c5bc9.after);
    let _0x46b829 = false;
    function _0x43a30f(_0x56ec3b) {
      if (!_0x56ec3b) {
        return "";
      }
      if (_0x56ec3b.includes("-")) {
        let _0x33ac54 = _0x56ec3b.split("-");
        if (_0x33ac54.length === 3) {
          if (_0x33ac54[0].length === 2) {
            return _0x33ac54[2] + "-" + _0x33ac54[1] + "-" + _0x33ac54[0];
          }
          return _0x56ec3b;
        }
      }
      return _0x56ec3b;
    }
    _0xc22c63 += '<div style="margin-bottom:15px">';
    _0xc22c63 +=
      "<b>Update " + (_0x3bd92a + 1) + " (" + _0x5c5bc9.time + ")</b><br><br>";
    for (let _0x4f7335 in _0x44f873) {
      let _0x4c60d8 = _0x44f873[_0x4f7335] || "-";
      let _0x30a92c = _0xb2b0d1[_0x4f7335] || "-";
      let _0x365525 = _0x43a30f(_0x4c60d8);
      let _0x1167fb = _0x43a30f(_0x30a92c);
      if (_0x365525 !== _0x1167fb) {
        _0x46b829 = true;
        _0xc22c63 +=
          '\n<div style="margin-bottom:10px; text-align:left;">\n<b>' +
          (fieldNames[_0x4f7335] || _0x4f7335) +
          '</b><br>\nBefore: <span style="color:red">' +
          _0x4c60d8 +
          '</span><br>\nAfter: <span style="color:green">' +
          _0x30a92c +
          "</span>\n</div>\n";
      }
    }
    if (!_0x46b829) {
      _0xc22c63 += "<i>No actual changes</i>";
    }
    _0xc22c63 += "</div>";
  });
  showHistoryPopup(_0xc22c63);
}
function saveHistory(_0x58cb04, _0x50ac1b, _0x5cfc38) {
  if (!historyStore[_0x5cfc38]) {
    historyStore[_0x5cfc38] = [];
  }
  historyStore[_0x5cfc38].push({
    time: new Date().toLocaleString(),
    before: JSON.stringify(_0x58cb04),
    after: JSON.stringify(_0x50ac1b),
  });
}
function showHistoryPopup(_0x55d806) {
  if (document.getElementById("historyPopupBox")) {
    document.getElementById("historyPopupBox").remove();
  }
  if (document.getElementById("popupOverlay")) {
    document.getElementById("popupOverlay").remove();
  }
  const _0x356258 = document.createElement("div");
  _0x356258.id = "popupOverlay";
  Object.assign(_0x356258.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: "9999",
  });
  document.body.appendChild(_0x356258);
  const _0x387e30 = document.createElement("div");
  _0x387e30.id = "historyPopupBox";
  Object.assign(_0x387e30.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
    maxHeight: "80vh",
    overflowY: "auto",
    backgroundColor: "white",
    padding: "20px",
    zIndex: "10000",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    fontFamily: "sans-serif",
  });
  let _0x5e16a0 =
    '\n<div style="display:flex; justify-content:space-between; align-items:center; position:sticky; top:-20px; background:white; padding:10px 0; border-bottom:2px solid #eee; margin-bottom:15px; z-index:11;">\n<h3 style="margin:0; color:#333;">📜 Update History</h3>\n<button onclick="closeHistoryPopup()" style="background:#ff4757; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer; font-weight:bold;">CLOSE [X]</button>\n</div>\n';
  _0x387e30.innerHTML = _0x5e16a0 + _0x55d806;
  document.body.appendChild(_0x387e30);
  _0x356258.onclick = closeHistoryPopup;
}
function closeHistoryPopup() {
  const _0x43ba15 = document.getElementById("historyPopupBox");
  const _0x6381fa = document.getElementById("popupOverlay");
  if (_0x43ba15) {
    _0x43ba15.remove();
  }
  if (_0x6381fa) {
    _0x6381fa.remove();
  }
}
function getSummaryDocKey(_0x253253) {
  return "summaryDoc_" + _0x253253;
}
function summaryUploadDoc(_0x4b211c) {
  if (window.currentUser !== _0x4b211c && window.currentUser !== "DPI") {
    myAlert("❌ You can only upload your own document.");
    return;
  }
  const _0x323229 = document.getElementById("fileUpload_" + _0x4b211c);
  if (_0x323229) {
    _0x323229.click();
  }
}
async function handleSummaryFileUpload(_0x313b43, _0x532c2d) {
  const _0x202c85 = _0x313b43.target.files[0];
  if (!_0x202c85) {
    return;
  }
  if (window.currentUser !== _0x532c2d && window.currentUser !== "DPI") {
    myAlert("❌ Unauthorized upload attempt!");
    _0x313b43.target.value = "";
    return;
  }
  const _0x213ded = 1048576;
  if (_0x202c85.size > _0x213ded) {
    myAlert(
      "❌ Summary Document size cannot exceed 1MB.\nYour file: " +
        (_0x202c85.size / 1024).toFixed(1) +
        "KB\nPlease compress the file and upload again.",
    );
    _0x313b43.target.value = "";
    return;
  }
  const _0x3a8586 = document.getElementById("uploadStatus_" + _0x532c2d);
  if (_0x3a8586) {
    _0x3a8586.innerHTML = "⏳ Uploading...";
    _0x3a8586.style.color = "#f39c12";
  }
  let _0x3a7a15 = null;
  try {
    const _0x4a5e56 = new FormData();
    const _0x1a908f =
      "summary_docs/" +
      _0x532c2d +
      "/" +
      Date.now() +
      "_" +
      _0x202c85.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const { error: _0x187068 } = await supabaseClient.storage
      .from("documents")
      .upload(_0x1a908f, _0x202c85, {
        upsert: true,
      });
    if (_0x187068) {
      throw new Error(_0x187068.message);
    }
    const { data: _0x158b94 } = supabaseClient.storage
      .from("documents")
      .getPublicUrl(_0x1a908f);
    _0x3a7a15 = _0x158b94.publicUrl;
  } catch (_0x54ffe2) {
    console.warn(
      "Cloudinary upload failed, using local fallback:",
      _0x54ffe2.message,
    );
  }
  const _0x1435bf = {
    name: _0x202c85.name,
    url: _0x3a7a15,
    local_data: null,
    uploadedBy: window.currentUser,
    uploadedAt: new Date().toLocaleString("hi-IN"),
  };
  if (!_0x3a7a15) {
    await new Promise((_0x3f94c6) => {
      const _0x357668 = new FileReader();
      _0x357668.onload = (_0x5a25f9) => {
        _0x1435bf.local_data = _0x5a25f9.target.result;
        _0x3f94c6();
      };
      _0x357668.readAsDataURL(_0x202c85);
    });
  }
  localStorage.setItem(getSummaryDocKey(_0x532c2d), JSON.stringify(_0x1435bf));
  if (_0x3a8586) {
    _0x3a8586.innerHTML = "✅ " + _0x202c85.name;
    _0x3a8586.style.color = "#27ae60";
  }
  myAlert(
    "✅ Document Successfully Uploaded!\nFile: " +
      _0x202c85.name +
      "\n\nReopen Summary — View button will appear.",
  );
  _0x313b43.target.value = "";
}
function summaryViewDoc(_0x19c588) {
  if (!_0x19c588) {
    myAlert("❌ Office key missing.");
    return;
  }
  const _0x30ebdd = localStorage.getItem(getSummaryDocKey(_0x19c588));
  if (!_0x30ebdd) {
    myAlert("❌ No Document uploaded for " + _0x19c588 + ".");
    return;
  }
  try {
    const _0x11e3e5 = JSON.parse(_0x30ebdd);
    if (_0x11e3e5.local_data) {
      const _0x1b329f = window.open("", "_blank");
      if (!_0x1b329f) {
        myAlert("❌ Popup blocked! Please allow popups in your browser.");
        return;
      }
      _0x1b329f.document.write(
        "<html><head><title>" +
          _0x19c588 +
          ' Document</title></head><body style="margin:0;padding:0;"><iframe src="' +
          _0x11e3e5.local_data +
          '" style="width:100%;height:100vh;border:none;"></iframe></body></html>',
      );
      _0x1b329f.document.close();
      return;
    }
    if (_0x11e3e5.url && !_0x11e3e5.url.startsWith("local:")) {
      const _0x2900bc = _0x11e3e5.url;
      if (_0x2900bc && _0x2900bc.includes("cloudinary")) {
        _openCloudinaryDoc(_0x2900bc);
      } else {
        window.open(_0x2900bc, "_blank");
      }
      return;
    }
    myAlert("❌ Document data not found. Please upload again.");
  } catch (_0x4f1d1c) {
    myAlert("❌ Error reading document.");
  }
}
var _pdfDoc = null;
var _pdfScale = 1.5;
var _pdfCurrentPage = 1;
var _currentPdfUrl = "";
if (typeof pdfjsLib !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}
function _openCloudinaryDoc(_0x4ab0ff) {
  if (!_0x4ab0ff) {
    return;
  }
  _currentPdfUrl = _0x4ab0ff;
  var _0x2d3f18 = decodeURIComponent(_0x4ab0ff.split("/").pop() || "document");
  var _0x4502c5 = document.getElementById("pdfViewerModal");
  var _0x573b9f = document.getElementById("pdfCanvasWrap");
  var _0x19961d = document.getElementById("pdfViewerTitle");
  var _0x332d15 = document.getElementById("pdfPageInfo");
  if (_0x19961d) {
    _0x19961d.innerText = _0x2d3f18;
  }
  if (_0x332d15) {
    _0x332d15.innerText = "Cloudinary Document";
  }
  if (_0x4502c5) {
    _0x4502c5.style.display = "flex";
  }
  window._cldCopyUrl = _0x4ab0ff;
  if (_0x573b9f) {
    _0x573b9f.innerHTML = [
      '<div style="color:white;text-align:center;padding:40px 30px;max-width:700px;margin:auto;">',
      '<div style="font-size:48px;margin-bottom:12px;">&#x1F4C4;</div>',
      '<div style="font-size:15px;font-weight:700;margin-bottom:6px;">' +
        _0x2d3f18 +
        "</div>",
      '<div style="font-size:12px;color:#fcd34d;margin-bottom:20px;line-height:1.6;">',
      "&#9888; Edge browser local file se Cloudinary URLs block karta hai.<br>",
      "Neeche URL copy karke <b>new tab mein paste</b> karein.",
      "</div>",
      '<div style="display:flex;gap:8px;margin-bottom:16px;">',
      '<input id="cldUrlBox" type="text" readonly onclick="this.select()" ',
      'style="flex:1;padding:10px 12px;border-radius:6px;border:none;font-size:11px;',
      'background:#1a2540;color:#a8c4ff;font-family:monospace;outline:none;cursor:text;">',
      '<button id="cldCopyBtn" style="padding:10px 16px;background:#1e6fe0;color:white;',
      'border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:700;">',
      "&#x1F4CB; Copy</button>",
      "</div>",
      '<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:20px;">',
      "Ctrl+C ke baad Edge address bar mein Ctrl+V paste karein",
      "</div>",
      '<div style="background:rgba(240,165,0,0.12);border:1px solid rgba(240,165,0,0.3);',
      'border-radius:8px;padding:12px;font-size:11px;color:#fcd34d;text-align:left;">',
      "&#128161; <b>Permanent Fix:</b> HTML file ko Netlify/Vercel pe deploy karo — PDF direct preview hoga.",
      "</div></div>",
    ].join("");
    setTimeout(function () {
      var _0x4c3fa8 = document.getElementById("cldUrlBox");
      var _0x593871 = document.getElementById("cldCopyBtn");
      if (_0x4c3fa8) {
        _0x4c3fa8.value = window._cldCopyUrl || "";
      }
      if (_0x593871) {
        _0x593871.onclick = function () {
          var _0x106ab5 = document.getElementById("cldUrlBox");
          if (_0x106ab5) {
            _0x106ab5.select();
            document.execCommand("copy");
          }
          if (typeof umsToast === "function") {
            umsToast("✅ URL Copied!", "success", 2000);
          }
        };
      }
    }, 50);
  }
}
function _downloadPdfDirect() {
  if (!_currentPdfUrl) {
    return;
  }
  var _0x44c7b1 = _currentPdfUrl
    .replace("/image/upload/", "/image/upload/fl_attachment/")
    .replace("/raw/upload/", "/raw/upload/fl_attachment/");
  var _0x11117e = document.createElement("a");
  _0x11117e.href = _0x44c7b1;
  _0x11117e.download = decodeURIComponent(
    _currentPdfUrl.split("/").pop() || "document.pdf",
  );
  _0x11117e.target = "_blank";
  document.body.appendChild(_0x11117e);
  _0x11117e.click();
  document.body.removeChild(_0x11117e);
  closePdfViewer();
  if (typeof umsToast === "function") {
    umsToast("⬇️ Document download ho raha hai...", "success", 3000);
  }
}
function closePdfViewer() {
  var _0x2d194c = document.getElementById("pdfViewerModal");
  var _0x1e2922 = document.getElementById("pdfCanvasWrap");
  if (_0x1e2922) {
    _0x1e2922.innerHTML = "";
  }
  if (_0x2d194c) {
    _0x2d194c.style.display = "none";
  }
  _pdfDoc = null;
  _currentPdfUrl = "";
}
var _pdfModalEl = document.getElementById("pdfViewerModal");
if (_pdfModalEl) {
  _pdfModalEl.addEventListener("click", function (_0x26d503) {
    if (_0x26d503.target === this) {
      closePdfViewer();
    }
  });
}
const _PW_SUPABASE_KEY = "custom_passwords";
async function _savePasswordToCloud(_0x4de0b4, _0x26c991) {
  try {
    const { error: _0x112ecf } = await supabaseClient
      .from("user_passwords")
      .upsert(
        {
          user_id: _0x4de0b4,
          password: _0x26c991,
          changed_by: window.currentUser || "DPI",
          changed_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id",
        },
      );
    if (_0x112ecf) {
      throw _0x112ecf;
    }
    console.log("✅ Password change saved to user_passwords for:", _0x4de0b4);
    return true;
  } catch (_0x115382) {
    console.warn("Cloud pw save failed:", _0x115382.message);
    return false;
  }
}
async function _loadPasswordsFromCloud() {
  const _0x500f11 = {};
  try {
    const { data: _0x5bc5a9 } = await supabaseClient
      .from("users")
      .select("userid, password");
    if (_0x5bc5a9) {
      _0x5bc5a9.forEach((_0x2ce69b) => {
        if (_0x2ce69b.userid && _0x2ce69b.password) {
          _0x500f11[_0x2ce69b.userid] = _0x2ce69b.password;
        }
      });
    }
  } catch (_0x4d23b2) {}
  try {
    const { data: _0x3c1d62 } = await supabaseClient
      .from("user_passwords")
      .select("user_id, password");
    if (_0x3c1d62) {
      _0x3c1d62.forEach((_0x5f0037) => {
        if (_0x5f0037.user_id && _0x5f0037.password) {
          _0x500f11[_0x5f0037.user_id] = _0x5f0037.password;
        }
      });
    }
  } catch (_0x404c7c) {}
  return _0x500f11;
}
async function _syncCloudPasswordsToLocal() {
  const _0x18ca75 = await _loadPasswordsFromCloud();
  const _0x95c4f = JSON.parse(
    localStorage.getItem("msErp_customPasswords") || "{}",
  );
  const _0x231d0b = Object.assign({}, _0x95c4f, _0x18ca75);
  localStorage.setItem("msErp_customPasswords", JSON.stringify(_0x231d0b));
  Object.assign(districtCredentials, _0x231d0b);
  return _0x231d0b;
}
saveDpiNewPassword = function () {
  const _0x46811a = document.getElementById("dpiNewPass")?.value.trim();
  const _0x1e23b9 = document.getElementById("dpiConfirmPass")?.value.trim();
  const _0x1fe90d = document.getElementById("dpiEditPassErr");
  if (!_0x46811a || _0x46811a.length < 4) {
    if (_0x1fe90d) {
      _0x1fe90d.innerHTML = "❌ Min 4 characters.";
    }
    return;
  }
  if (_0x46811a !== _0x1e23b9) {
    if (_0x1fe90d) {
      _0x1fe90d.innerHTML = "❌ Passwords do not match.";
    }
    return;
  }
  const _0x46b410 = JSON.parse(
    localStorage.getItem("msErp_customPasswords") || "{}",
  );
  const _0x5ea74d = _0x46b410.DPI || districtCredentials.DPI || "(default)";
  _0x46b410.DPI = _0x46811a;
  localStorage.setItem("msErp_customPasswords", JSON.stringify(_0x46b410));
  districtCredentials.DPI = _0x46811a;
  if (typeof auditLog === "function") {
    auditLog("DPI_PASSWORD_CHANGED", "DPI password changed");
  }
  if (_0x1fe90d) {
    _0x1fe90d.innerHTML =
      '<span style="color:#1565c0;font-weight:bold;">⏳ Saving to cloud (all devices)...</span>';
  }
  _savePasswordToCloud("DPI", _0x46811a).then((_0x11fff1) => {
    if (_0x1fe90d) {
      _0x1fe90d.innerHTML = _0x11fff1
        ? '<span style="color:#2e7d32;font-weight:bold;">✅ Saved! All devices pe apply hoga!</span>'
        : '<span style="color:#e65100;font-weight:bold;">✅ Locally saved (cloud sync failed)</span>';
    }
    setTimeout(() => {
      document.getElementById("dpiEditPassModal")?.remove();
      if (typeof buildDistPassTable === "function") {
        buildDistPassTable("dpi");
      }
      if (typeof showDistPassTab === "function") {
        showDistPassTab("dpi");
      }
    }, 1800);
  });
  _sbLogPwReset("DPI", _0x5ea74d, _0x46811a, "DPI (Self)");
};
saveUniPassword = function (_0x5853a5, _0x2db075) {
  const _0x94dbdf = document.getElementById("uniNewPass")?.value.trim();
  const _0x54ad66 = document.getElementById("uniConfirmPass")?.value.trim();
  const _0x4b2823 = document.getElementById("uniEditPassErr");
  if (!_0x94dbdf || _0x94dbdf.length < 4) {
    if (_0x4b2823) {
      _0x4b2823.innerHTML = "❌ Min 4 characters.";
    }
    return;
  }
  if (_0x94dbdf !== _0x54ad66) {
    if (_0x4b2823) {
      _0x4b2823.innerHTML = "❌ Passwords do not match.";
    }
    return;
  }
  const _0xbf4e74 = JSON.parse(
    localStorage.getItem("msErp_customPasswords") || "{}",
  );
  const _0x37c9d5 =
    _0xbf4e74[_0x5853a5] || districtCredentials[_0x5853a5] || "(default)";
  _0xbf4e74[_0x5853a5] = _0x94dbdf;
  localStorage.setItem("msErp_customPasswords", JSON.stringify(_0xbf4e74));
  districtCredentials[_0x5853a5] = _0x94dbdf;
  if (typeof auditLog === "function") {
    auditLog(
      _0x2db075 + "_PASSWORD_CHANGED",
      _0x5853a5 + " pw changed by " + (window.currentUser || "DPI"),
    );
  }
  if (_0x4b2823) {
    _0x4b2823.innerHTML =
      '<span style="color:#1565c0;font-weight:bold;">⏳ Saving to cloud (all devices)...</span>';
  }
  _savePasswordToCloud(_0x5853a5, _0x94dbdf).then((_0x205765) => {
    if (_0x4b2823) {
      _0x4b2823.innerHTML = _0x205765
        ? '<span style="color:#2e7d32;font-weight:bold;">✅ ' +
          _0x5853a5 +
          " — All devices pe apply hoga!</span>"
        : '<span style="color:#e65100;font-weight:bold;">✅ Locally saved (cloud sync failed)</span>';
    }
    setTimeout(() => {
      document.getElementById("uniEditPassModal")?.remove();
      const _0x2ec3b3 =
        _0x2db075 === "DPI" ? "dpi" : _0x2db075 === "JD" ? "jd" : "deo";
      if (typeof buildDistPassTable === "function") {
        buildDistPassTable(_0x2ec3b3);
      }
      if (typeof showDistPassTab === "function") {
        showDistPassTab(_0x2ec3b3);
      }
    }, 1800);
  });
  _sbLogPwReset(_0x5853a5, _0x37c9d5, _0x94dbdf, window.currentUser || "DPI");
};
async function _getUserFromCloud(_0x43f249) {
  try {
    const { data: _0x389937, error: _0x483bae } = await supabaseClient
      .from("users")
      .select("userid, password, level, location")
      .eq("userid", _0x43f249)
      .maybeSingle();
    if (_0x483bae || !_0x389937) {
      return null;
    }
    return _0x389937;
  } catch (_0x12dc37) {
    return null;
  }
}
getEffectivePassword = function (_0x1d6110) {
  const _0x3dfd1e = JSON.parse(
    localStorage.getItem("msErp_customPasswords") || "{}",
  );
  return _0x3dfd1e[_0x1d6110] || districtCredentials[_0x1d6110] || null;
};
checkLogin = async function () {
  const _0x94787b = document
    .getElementById("userField")
    .value.trim()
    .toUpperCase();
  const _0x1df9ae = document.getElementById("passField").value.trim();
  const _0x7156ae = document.getElementById("loginError");
  const _0x292634 = "loginBlock_" + _0x94787b;
  const _0xdc0e6d = "loginAttempts_" + _0x94787b;
  const _0x4041b9 = JSON.parse(localStorage.getItem(_0x292634) || "null");
  if (_0x4041b9) {
    const _0x276268 = Math.ceil((_0x4041b9.until - Date.now()) / 1000);
    if (_0x276268 > 0) {
      _0x7156ae.innerText = "🔒 Account blocked for " + _0x276268 + "s.";
      return;
    }
    localStorage.removeItem(_0x292634);
    localStorage.removeItem(_0xdc0e6d);
  }
  _0x7156ae.innerText = "⏳ Verifying from cloud...";
  const _0x3e3fa2 = await _getUserFromCloud(_0x94787b);
  if (_0x3e3fa2 && _0x3e3fa2.password === _0x1df9ae) {
    localStorage.removeItem(_0xdc0e6d);
    localStorage.removeItem(_0x292634);
    districtCredentials[_0x94787b] = _0x1df9ae;
    window.currentUserLevel = _0x3e3fa2.level || "DEO";
    window.currentUserLocation = _0x3e3fa2.location || "";
    document.getElementById("loginOverlay").style.display = "none";
    window.currentUser = _0x94787b;
    const _0x4c263a = document.getElementById("userBadge");
    if (_0x4c263a) {
      _0x4c263a.textContent = "👤 " + _0x94787b;
      _0x4c263a.style.display = "inline-block";
    }
    if (typeof securityResetTimer === "function") {
      securityResetTimer();
    }
    if (typeof auditLog === "function") {
      auditLog("LOGIN", "User logged in via cloud users table");
    }
    if (typeof loadData === "function") {
      loadData();
    }
    if (typeof initRealtime === "function") {
      initRealtime();
    }
    if (typeof _updateTitleHintVisibility === "function") {
      _updateTitleHintVisibility();
    }
    if (typeof checkLockStatus === "function") {
      checkLockStatus();
    }
    _0x7156ae.innerText = "";
    return;
  }
  await _syncCloudPasswordsToLocal();
  const _0x4a3d69 = getEffectivePassword(_0x94787b);
  if (_0x4a3d69 && _0x1df9ae === _0x4a3d69) {
    localStorage.removeItem(_0xdc0e6d);
    localStorage.removeItem(_0x292634);
    document.getElementById("loginOverlay").style.display = "none";
    window.currentUser = _0x94787b;
    const _0x2ae18c = document.getElementById("userBadge");
    if (_0x2ae18c) {
      _0x2ae18c.textContent = "👤 " + _0x94787b;
      _0x2ae18c.style.display = "inline-block";
    }
    if (typeof securityResetTimer === "function") {
      securityResetTimer();
    }
    if (typeof auditLog === "function") {
      auditLog("LOGIN", "User logged in");
    }
    if (typeof loadData === "function") {
      loadData();
    }
    if (typeof initRealtime === "function") {
      initRealtime();
    }
    if (typeof _updateTitleHintVisibility === "function") {
      _updateTitleHintVisibility();
    }
    if (typeof checkLockStatus === "function") {
      checkLockStatus();
    }
    _0x7156ae.innerText = "";
  } else {
    let _0x28d35a = parseInt(localStorage.getItem(_0xdc0e6d) || "0") + 1;
    localStorage.setItem(_0xdc0e6d, _0x28d35a);
    if (_0x28d35a >= 3) {
      localStorage.setItem(
        _0x292634,
        JSON.stringify({
          until: Date.now() + 300000,
        }),
      );
      localStorage.removeItem(_0xdc0e6d);
      _0x7156ae.innerText = "🔒 3 wrong attempts! Blocked for 5 minutes.";
    } else {
      _0x7156ae.innerText =
        "❌ INVALID USER ID OR PASSWORD! (" + _0x28d35a + "/3 attempts)";
    }
  }
};
console.log("✅ Cloud Password Sync + Users Table loaded.");
function showAnalytics() {
  const _0x63ae35 = window.fullData || [];
  if (_0x63ae35.length === 0) {
    myAlert("⚠️ Data not loaded yet!");
    return;
  }
  if (document.getElementById("analyticsModal")) {
    document.getElementById("analyticsModal").remove();
  }
  const _0x23d57f = document.createElement("div");
  _0x23d57f.id = "analyticsModal";
  _0x23d57f.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);z-index:10001;display:flex;align-items:center;justify-content:center;";
  _0x23d57f.innerHTML =
    '\n<div style="background:#f8f9fa;border-radius:12px;width:96%;max-width:1100px;max-height:93vh;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,0.5);">\n<!-- Header -->\n<div style="background:linear-gradient(135deg,#1a237e,#283593);color:white;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">\n<div>\n<div style="font-size:17px;font-weight:700;letter-spacing:0.3px;">📊 DPI Live Dashboard</div>\n<div style="font-size:11px;opacity:0.75;margin-top:2px;">MS Gradation ERP — Real-time Analytics</div>\n</div>\n<div style="display:flex;align-items:center;gap:10px;">\n<span id="dashLiveIndicator" style="font-size:11px;background:rgba(76,175,80,0.3);border:1px solid rgba(76,175,80,0.6);padding:3px 10px;border-radius:20px;">🟢 Live</span>\n<button onclick="document.getElementById(\'analyticsModal\').remove()" style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:white;width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:16px;font-weight:bold;">✕</button>\n</div>\n</div>\n<!-- KPI Strip -->\n<div id="kpiStrip" style="display:flex;gap:0;border-bottom:1px solid #ddd;flex-shrink:0;background:white;"></div>\n<!-- Tab Bar -->\n<div style="display:flex;border-bottom:2px solid #e0e0e0;flex-shrink:0;background:white;">\n<button class="dashTab" id="dashTab1" onclick="switchDashTab(1)" style="flex:1;padding:11px 6px;border:none;background:#1a237e;color:white;font-weight:600;font-size:12px;cursor:pointer;border-radius:0;">📊 District Chart</button>\n<button class="dashTab" id="dashTab2" onclick="switchDashTab(2)" style="flex:1;padding:11px 6px;border:none;background:#f5f5f5;color:#555;font-weight:600;font-size:12px;cursor:pointer;border-radius:0;">🥧 Category Split</button>\n<button class="dashTab" id="dashTab3" onclick="switchDashTab(3)" style="flex:1;padding:11px 6px;border:none;background:#f5f5f5;color:#555;font-weight:600;font-size:12px;cursor:pointer;border-radius:0;">📈 Monthly Trend</button>\n<button class="dashTab" id="dashTab4" onclick="switchDashTab(4)" style="flex:1;padding:11px 6px;border:none;background:#f5f5f5;color:#555;font-weight:600;font-size:12px;cursor:pointer;border-radius:0;">📅 Retirement</button>\n</div>\n<!-- Content Area -->\n<div style="overflow-y:auto;flex:1;padding:16px;background:#f8f9fa;">\n<!-- TAB 1: District Bar Chart -->\n<div id="dashPane1">\n<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;">\n<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:4px;">District-wise Record Count</div>\n<div style="font-size:11px;color:#888;margin-bottom:14px;">Deleted records excluded — sorted by count</div>\n<div style="position:relative;height:420px;"><canvas id="districtBarChart"></canvas></div>\n</div>\n</div>\n<!-- TAB 2: Category Pie -->\n<div id="dashPane2" style="display:none;">\n<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">\n<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;">\n<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:14px;">Overall Category Split</div>\n<div style="position:relative;height:280px;"><canvas id="catPieChart"></canvas></div>\n</div>\n<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;">\n<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:14px;">Gender Split</div>\n<div style="position:relative;height:280px;"><canvas id="genderPieChart"></canvas></div>\n</div>\n<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;grid-column:1/-1;">\n<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:4px;">Division-wise Category Breakdown</div>\n<div style="font-size:11px;color:#888;margin-bottom:14px;">SC / ST / OBC / UR per JD Division</div>\n<div style="position:relative;height:260px;"><canvas id="divCatChart"></canvas></div>\n</div>\n</div>\n</div>\n<!-- TAB 3: Monthly Trend -->\n<div id="dashPane3" style="display:none;">\n<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;">\n<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:4px;">Monthly Activity Trend</div>\n<div style="font-size:11px;color:#888;margin-bottom:14px;">New entries, updates aur deletions — last 12 months</div>\n<div style="position:relative;height:350px;"><canvas id="trendLineChart"></canvas></div>\n</div>\n<div id="trendNote" style="background:white;border-radius:8px;padding:14px;border:1px solid #e0e0e0;margin-top:14px;font-size:12px;color:#555;"></div>\n</div>\n<!-- TAB 4: Retirement Calendar -->\n<div id="dashPane4" style="display:none;">\n<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;margin-bottom:14px;">\n<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:4px;">Retirement Timeline — Next 12 Months</div>\n<div style="font-size:11px;color:#888;margin-bottom:14px;">62 saal ki umra par retirement — month-wise breakdown</div>\n<div style="position:relative;height:260px;"><canvas id="retBarChart"></canvas></div>\n</div>\n<div id="retDetailList" style="background:white;border-radius:8px;padding:14px;border:1px solid #e0e0e0;"></div>\n</div>\n</div>\n<!-- Footer -->\n<div style="padding:10px 16px;background:white;border-top:1px solid #eee;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">\n<span style="font-size:11px;color:#aaa;">Data: window.fullData — ' +
    _0x63ae35.length +
    ' total records</span>\n<div>\n<button onclick="document.getElementById(\'analyticsModal\').remove()" style="background:#c62828;color:white;border:none;padding:7px 16px;border-radius:4px;cursor:pointer;font-weight:600;font-size:12px;">✖ Close</button>\n</div>\n</div>\n</div>';
  document.body.appendChild(_0x23d57f);
  _0x23d57f.addEventListener("click", (_0x1c6262) => {
    if (_0x1c6262.target === _0x23d57f) {
      _0x23d57f.remove();
    }
  });
  function _0x1da053() {
    _buildKPI(_0x63ae35);
    _buildDistrictBar(_0x63ae35);
    _buildCategoryPie(_0x63ae35);
    _buildTrendLine(_0x63ae35);
    _buildRetirement(_0x63ae35);
  }
  if (window.Chart) {
    _0x1da053();
  } else {
    const _0x517858 = document.createElement("script");
    _0x517858.src =
      "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js";
    _0x517858.onload = _0x1da053;
    document.head.appendChild(_0x517858);
  }
}
function _buildKPI(_0x4c3c36) {
  const _0x31b8bf = _0x4c3c36.filter(
    (_0x5608d2) => !(_0x5608d2.field28 || "").toUpperCase().includes("DELETE"),
  );
  const _0x391bb8 = _0x4c3c36.filter((_0x3e71d7) =>
    (_0x3e71d7.field28 || "").toUpperCase().includes("NEW"),
  );
  const _0x22d083 = _0x4c3c36.filter((_0x29f1e0) =>
    (_0x29f1e0.field28 || "").toUpperCase().includes("UPDATED"),
  );
  const _0x4fea11 = _0x4c3c36.filter((_0xa8c4ee) =>
    (_0xa8c4ee.field28 || "").toUpperCase().includes("DELETE"),
  );
  const _0x223b07 = new Date();
  const _0x5072b6 = _0x4c3c36.filter((_0x2ade7c) => {
    const _0x5887d2 = _0x2ade7c.field7 || "";
    if (!_0x5887d2 || _0x5887d2 === "NIL") {
      return false;
    }
    const _0x509c7c = _0x5887d2.split("-");
    let _0x525c74 = null;
    if (_0x509c7c.length === 3) {
      _0x525c74 =
        _0x509c7c[0].length === 4
          ? new Date(_0x509c7c[0], _0x509c7c[1] - 1, _0x509c7c[2])
          : new Date(_0x509c7c[2], _0x509c7c[1] - 1, _0x509c7c[0]);
    }
    if (!_0x525c74 || isNaN(_0x525c74)) {
      return false;
    }
    const _0x4ed8d5 = new Date(
      _0x525c74.getFullYear() + 62,
      _0x525c74.getMonth() + 1,
      0,
    );
    return (
      _0x4ed8d5.getFullYear() === _0x223b07.getFullYear() &&
      _0x4ed8d5.getMonth() === _0x223b07.getMonth()
    );
  });
  const _0x538848 = [
    {
      label: "Total Active",
      val: _0x31b8bf.length,
      color: "#1565c0",
      bg: "#e3f2fd",
    },
    {
      label: "New Entries",
      val: _0x391bb8.length,
      color: "#2e7d32",
      bg: "#e8f5e9",
    },
    {
      label: "Updated",
      val: _0x22d083.length,
      color: "#e65100",
      bg: "#fff3e0",
    },
    {
      label: "Deleted",
      val: _0x4fea11.length,
      color: "#c62828",
      bg: "#ffebee",
    },
    {
      label: "Retiring This Month",
      val: _0x5072b6.length,
      color: "#6a1b9a",
      bg: "#f3e5f5",
    },
  ];
  const _0x38a477 = document.getElementById("kpiStrip");
  if (!_0x38a477) {
    return;
  }
  _0x38a477.innerHTML = _0x538848
    .map(
      (_0x13c68f) =>
        '\n<div style="flex:1;padding:12px 10px;text-align:center;border-right:1px solid #eee;background:' +
        _0x13c68f.bg +
        ';">\n<div style="font-size:22px;font-weight:700;color:' +
        _0x13c68f.color +
        ';">' +
        _0x13c68f.val +
        '</div>\n<div style="font-size:10px;color:#777;margin-top:2px;">' +
        _0x13c68f.label +
        "</div>\n</div>",
    )
    .join("");
}
function _buildDistrictBar(_0x1d7bba) {
  const _0x978ac4 = {};
  _0x1d7bba.forEach((_0x89974c) => {
    if ((_0x89974c.field28 || "").toUpperCase().includes("DELETE")) {
      return;
    }
    let _0x41333b = (_0x89974c.field22 || "")
      .toUpperCase()
      .trim()
      .replace(/^DEO\s*/, "")
      .replace(/^JD\s*/, "")
      .trim();
    if (!_0x41333b || _0x41333b.length < 2) {
      return;
    }
    _0x978ac4[_0x41333b] = (_0x978ac4[_0x41333b] || 0) + 1;
  });
  const _0x544753 = Object.entries(_0x978ac4).sort(
    (_0x2e8c50, _0x28b7da) => _0x28b7da[1] - _0x2e8c50[1],
  );
  const _0x97952b = _0x544753.map((_0x337dd6) => _0x337dd6[0]);
  const _0x286f07 = _0x544753.map((_0x2ed428) => _0x2ed428[1]);
  const _0x3466a9 = _0x286f07.map((_0x2fc39d, _0x57823f) => {
    const _0x2a63f2 = _0x286f07[0] || 1;
    const _0x5bc3f8 = _0x2fc39d / _0x2a63f2;
    const _0x1dff42 = Math.round(21 + _0x5bc3f8 * 4);
    const _0x16617d = Math.round(101 + _0x5bc3f8 * -61);
    const _0x801d1e = Math.round(192 + _0x5bc3f8 * -114);
    return "rgba(" + _0x1dff42 + "," + _0x16617d + "," + _0x801d1e + ",0.85)";
  });
  const _0x346bc7 = document.getElementById("districtBarChart");
  if (!_0x346bc7) {
    return;
  }
  new Chart(_0x346bc7, {
    type: "bar",
    data: {
      labels: _0x97952b,
      datasets: [
        {
          label: "Records",
          data: _0x286f07,
          backgroundColor: _0x3466a9,
          borderRadius: 4,
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (_0x242ea8) => " " + _0x242ea8.parsed.x + " records",
          },
        },
      },
      scales: {
        x: {
          grid: {
            color: "#f0f0f0",
          },
          ticks: {
            font: {
              size: 11,
            },
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 10,
            },
          },
        },
      },
    },
  });
}
function _buildCategoryPie(_0x4a6650) {
  const _0xaa229c = _0x4a6650.filter(
    (_0x4b4df4) => !(_0x4b4df4.field28 || "").toUpperCase().includes("DELETE"),
  );
  const _0x427447 = {
    SC: 0,
    ST: 0,
    OBC: 0,
    UR: 0,
    Other: 0,
  };
  _0xaa229c.forEach((_0x8ee4be) => {
    const _0x4e37fd = (_0x8ee4be.field5 || "").toUpperCase().trim();
    if (_0x427447[_0x4e37fd] !== undefined) {
      _0x427447[_0x4e37fd]++;
    } else {
      _0x427447.Other++;
    }
  });
  const _0x103a08 = document.getElementById("catPieChart");
  if (_0x103a08) {
    new Chart(_0x103a08, {
      type: "doughnut",
      data: {
        labels: Object.keys(_0x427447).filter(
          (_0x395b50) => _0x427447[_0x395b50] > 0,
        ),
        datasets: [
          {
            data: Object.values(_0x427447).filter((_0x304024) => _0x304024 > 0),
            backgroundColor: [
              "#e53935",
              "#f57c00",
              "#1565c0",
              "#2e7d32",
              "#9e9e9e",
            ],
            borderWidth: 2,
            borderColor: "white",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              font: {
                size: 11,
              },
              padding: 10,
            },
          },
          tooltip: {
            callbacks: {
              label: (_0x5079cb) =>
                " " +
                _0x5079cb.label +
                ": " +
                _0x5079cb.parsed +
                " (" +
                ((_0x5079cb.parsed / _0xaa229c.length) * 100).toFixed(1) +
                "%)",
            },
          },
        },
      },
    });
  }
  const _0x57c411 = {
    Male: 0,
    Female: 0,
    Other: 0,
  };
  _0xaa229c.forEach((_0x4bc86e) => {
    const _0x1625b8 = (_0x4bc86e.field6 || "").toUpperCase().trim();
    if (_0x1625b8 === "MALE" || _0x1625b8 === "M") {
      _0x57c411.Male++;
    } else if (_0x1625b8 === "FEMALE" || _0x1625b8 === "F") {
      _0x57c411.Female++;
    } else {
      _0x57c411.Other++;
    }
  });
  const _0x3f4533 = document.getElementById("genderPieChart");
  if (_0x3f4533) {
    new Chart(_0x3f4533, {
      type: "doughnut",
      data: {
        labels: ["Male", "Female", "Other"].filter(
          (_0x260019) => _0x57c411[_0x260019] > 0,
        ),
        datasets: [
          {
            data: ["Male", "Female", "Other"]
              .map((_0x439dab) => _0x57c411[_0x439dab])
              .filter((_0x22917c) => _0x22917c > 0),
            backgroundColor: ["#1565c0", "#e91e63", "#9e9e9e"],
            borderWidth: 2,
            borderColor: "white",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              font: {
                size: 11,
              },
              padding: 10,
            },
          },
        },
      },
    });
  }
  const _0x44422c = {
    BHOPAL: ["BHOPAL", "RAISEN", "RAJGARH", "SEHORE", "VIDISHA"],
    GWALIOR: [
      "ASHOKNAGAR",
      "BHIND",
      "DATIA",
      "GUNA",
      "GWALIOR",
      "MORENA",
      "SHEOPUR",
      "SHIVPURI",
    ],
    INDORE: [
      "ALIRAJPUR",
      "BADWANI",
      "BARWANI",
      "BURHANPUR",
      "DHAR",
      "INDORE",
      "JHABUA",
      "KHANDWA",
      "KHARGONE",
    ],
    JABALPUR: [
      "BALAGHAT",
      "CHHINDWARA",
      "JABALPUR",
      "KATNI",
      "MANDLA",
      "NARSINGHPUR",
      "SEONI",
      "DINDORI",
      "PANDHURNA",
    ],
    UJJAIN: [
      "AGAR MALWA",
      "DEWAS",
      "MANDSAUR",
      "NEEMUCH",
      "RATLAM",
      "SHAJAPUR",
      "UJJAIN",
    ],
    SAGAR: ["CHHATARPUR", "DAMOH", "PANNA", "SAGAR", "TIKAMGARH", "NIWARI"],
    REWA: ["REWA", "SATNA", "SIDHI", "SINGRAULI", "MAUGANJ", "MAIHAR"],
    NARMADAPURAM: ["BETUL", "HARDA", "NARMADAPURAM"],
    SHAHDOL: ["ANUPPUR", "SHAHDOL", "UMARIA"],
  };
  const _0x4de26d = ["SC", "ST", "OBC", "UR"];
  const _0x1966be = {};
  Object.keys(_0x44422c).forEach((_0x474d0a) => {
    _0x1966be[_0x474d0a] = {
      SC: 0,
      ST: 0,
      OBC: 0,
      UR: 0,
    };
  });
  _0xaa229c.forEach((_0x2ff583) => {
    const _0x1720f6 = (_0x2ff583.field22 || "")
      .toUpperCase()
      .replace(/^DEO\s*/, "")
      .replace(/^JD\s*/, "")
      .trim();
    const _0x1f7d3e = (_0x2ff583.field5 || "").toUpperCase().trim();
    if (!_0x4de26d.includes(_0x1f7d3e)) {
      return;
    }
    for (const [_0x5f539b, _0x583262] of Object.entries(_0x44422c)) {
      if (
        _0x583262.some(
          (_0x58a23b) =>
            _0x1720f6 === _0x58a23b ||
            _0x1720f6.includes(_0x58a23b) ||
            _0x58a23b.includes(_0x1720f6),
        )
      ) {
        _0x1966be[_0x5f539b][_0x1f7d3e]++;
        break;
      }
    }
  });
  const _0x428b6b = Object.keys(_0x1966be);
  const _0x135298 = document.getElementById("divCatChart");
  if (_0x135298) {
    new Chart(_0x135298, {
      type: "bar",
      data: {
        labels: _0x428b6b,
        datasets: [
          {
            label: "SC",
            data: _0x428b6b.map((_0x48d48f) => _0x1966be[_0x48d48f].SC),
            backgroundColor: "#e53935",
            borderRadius: 2,
          },
          {
            label: "ST",
            data: _0x428b6b.map((_0x118d45) => _0x1966be[_0x118d45].ST),
            backgroundColor: "#f57c00",
            borderRadius: 2,
          },
          {
            label: "OBC",
            data: _0x428b6b.map((_0x2c0653) => _0x1966be[_0x2c0653].OBC),
            backgroundColor: "#1565c0",
            borderRadius: 2,
          },
          {
            label: "UR",
            data: _0x428b6b.map((_0x4c392f) => _0x1966be[_0x4c392f].UR),
            backgroundColor: "#2e7d32",
            borderRadius: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              font: {
                size: 11,
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 10,
              },
            },
          },
          y: {
            stacked: true,
            grid: {
              color: "#f0f0f0",
            },
          },
        },
      },
    });
  }
}
function _buildTrendLine(_0x38309d) {
  const _0x148a67 = new Date();
  const _0x4a1cb5 = [];
  const _0x1895c0 = [];
  const _0x41f972 = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  for (let _0x4ff039 = 11; _0x4ff039 >= 0; _0x4ff039--) {
    const _0xac56c4 = new Date(
      _0x148a67.getFullYear(),
      _0x148a67.getMonth() - _0x4ff039,
      1,
    );
    _0x4a1cb5.push(
      _0xac56c4.getFullYear() +
        "-" +
        String(_0xac56c4.getMonth() + 1).padStart(2, "0"),
    );
    _0x1895c0.push(
      _0x41f972[_0xac56c4.getMonth()] +
        "'" +
        String(_0xac56c4.getFullYear()).slice(2),
    );
  }
  const _0x1e2412 = _0x4a1cb5.map(() => 0);
  const _0x1ca4bb = _0x4a1cb5.map(() => 0);
  const _0x2348a4 = _0x4a1cb5.map(() => 0);
  _0x38309d.forEach((_0x613783) => {
    const _0x2ab64a = (_0x613783.field29 || _0x613783.auditTrail || "").trim();
    const _0x4712b3 = _0x2ab64a.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
    if (!_0x4712b3) {
      return;
    }
    const [, _0x339d21, _0xbe0c9f, _0x4adb53] = _0x4712b3;
    const _0x3a41ff = _0x4adb53 + "-" + _0xbe0c9f.padStart(2, "0");
    const _0x3cfba9 = _0x4a1cb5.indexOf(_0x3a41ff);
    if (_0x3cfba9 === -1) {
      return;
    }
    const _0x26117e = (_0x613783.field28 || "").toUpperCase();
    if (_0x26117e.includes("DELETE")) {
      _0x2348a4[_0x3cfba9]++;
    } else if (_0x26117e.includes("NEW")) {
      _0x1e2412[_0x3cfba9]++;
    } else if (_0x26117e.includes("UPDATED")) {
      _0x1ca4bb[_0x3cfba9]++;
    }
  });
  const _0x243ea1 =
    _0x1e2412.reduce((_0x3594c1, _0x498fcd) => _0x3594c1 + _0x498fcd, 0) +
    _0x1ca4bb.reduce((_0x207fe5, _0x3c0ab9) => _0x207fe5 + _0x3c0ab9, 0);
  const _0x75a27d = document.getElementById("trendLineChart");
  if (_0x75a27d) {
    new Chart(_0x75a27d, {
      type: "line",
      data: {
        labels: _0x1895c0,
        datasets: [
          {
            label: "New Entries",
            data: _0x1e2412,
            borderColor: "#2e7d32",
            backgroundColor: "rgba(46,125,50,0.08)",
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
          {
            label: "Updated",
            data: _0x1ca4bb,
            borderColor: "#1565c0",
            backgroundColor: "rgba(21,101,192,0.08)",
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
          {
            label: "Deleted",
            data: _0x2348a4,
            borderColor: "#c62828",
            backgroundColor: "rgba(198,40,40,0.06)",
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          legend: {
            position: "top",
            labels: {
              font: {
                size: 11,
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: "#f0f0f0",
            },
            ticks: {
              font: {
                size: 10,
              },
            },
          },
          y: {
            grid: {
              color: "#f0f0f0",
            },
            ticks: {
              font: {
                size: 11,
              },
              stepSize: 1,
            },
          },
        },
      },
    });
  }
  const _0x40c5bd = document.getElementById("trendNote");
  if (_0x40c5bd) {
    _0x40c5bd.innerHTML =
      "<b>📌 Note:</b> Trend audit trail field se parse kiya gaya hai (<code>field29</code>). Agar dates wahan store nahi hain to all zeros dikhenge — tab field29 mein timestamp save karna hoga.";
  }
}
function _buildRetirement(_0x36dac6) {
  const _0xdb7e93 = new Date();
  const _0x27f38c = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const _0x38c493 = {};
  const _0x339dde = {};
  for (let _0x59f92f = 0; _0x59f92f < 12; _0x59f92f++) {
    const _0x255a17 = new Date(
      _0xdb7e93.getFullYear(),
      _0xdb7e93.getMonth() + _0x59f92f,
      1,
    );
    const _0x29b15b =
      _0x255a17.getFullYear() +
      "-" +
      String(_0x255a17.getMonth() + 1).padStart(2, "0");
    _0x38c493[_0x29b15b] = 0;
    _0x339dde[_0x29b15b] = [];
  }
  _0x36dac6.forEach((_0x45da9f) => {
    if ((_0x45da9f.field28 || "").toUpperCase().includes("DELETE")) {
      return;
    }
    const _0x5d4644 = _0x45da9f.field7 || "";
    if (!_0x5d4644 || _0x5d4644 === "NIL") {
      return;
    }
    const _0x49cb48 = _0x5d4644.split("-");
    let _0x30f2a4 = null;
    if (_0x49cb48.length === 3) {
      _0x30f2a4 =
        _0x49cb48[0].length === 4
          ? new Date(_0x49cb48[0], _0x49cb48[1] - 1, _0x49cb48[2])
          : new Date(_0x49cb48[2], _0x49cb48[1] - 1, _0x49cb48[0]);
    }
    if (!_0x30f2a4 || isNaN(_0x30f2a4)) {
      return;
    }
    const _0x17142a = new Date(
      _0x30f2a4.getFullYear() + 62,
      _0x30f2a4.getMonth() + 1,
      0,
    );
    if (_0x17142a < _0xdb7e93) {
      return;
    }
    const _0x4a0f3e =
      _0x17142a.getFullYear() +
      "-" +
      String(_0x17142a.getMonth() + 1).padStart(2, "0");
    if (_0x38c493[_0x4a0f3e] !== undefined) {
      _0x38c493[_0x4a0f3e]++;
      _0x339dde[_0x4a0f3e].push({
        name: _0x45da9f.field4 || "—",
        district: (_0x45da9f.field22 || "—").replace(/^DEO\s*/i, ""),
        retDate: _0x17142a.toLocaleDateString("en-IN"),
      });
    }
  });
  const _0x2dde7a = Object.keys(_0x38c493).map((_0x5b9ec6) => {
    const [_0x31619b, _0x27d0ad] = _0x5b9ec6.split("-");
    return _0x27f38c[+_0x27d0ad - 1] + "'" + _0x31619b.slice(2);
  });
  const _0x3348f5 = Object.values(_0x38c493);
  const _0x4dcc2c = _0x3348f5.map((_0x2b891c) =>
    _0x2b891c === 0
      ? "#e0e0e0"
      : _0x2b891c >= 5
        ? "#c62828"
        : _0x2b891c >= 3
          ? "#f57c00"
          : "#2e7d32",
  );
  const _0x73058 = document.getElementById("retBarChart");
  if (_0x73058) {
    new Chart(_0x73058, {
      type: "bar",
      data: {
        labels: _0x2dde7a,
        datasets: [
          {
            label: "Retirements",
            data: _0x3348f5,
            backgroundColor: _0x4dcc2c,
            borderRadius: 4,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (_0x3c4871) => " " + _0x3c4871.parsed.y + " retiring",
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 10,
              },
            },
          },
          y: {
            grid: {
              color: "#f0f0f0",
            },
            ticks: {
              stepSize: 1,
              font: {
                size: 11,
              },
            },
          },
        },
        onClick: (_0x13c23f, _0x2f5ded) => {
          if (!_0x2f5ded.length) {
            return;
          }
          const _0x1d6569 = Object.keys(_0x38c493)[_0x2f5ded[0].index];
          _showRetDetail(_0x1d6569, _0x339dde[_0x1d6569]);
        },
      },
    });
  }
  const _0x5c578b =
    Object.keys(_0x339dde).find(
      (_0xa5c50c) => _0x339dde[_0xa5c50c].length > 0,
    ) || Object.keys(_0x339dde)[0];
  _showRetDetail(_0x5c578b, _0x339dde[_0x5c578b]);
  window._retBucketPeople = _0x339dde;
}
function _showRetDetail(_0x1fbe24, _0x1184f2) {
  const _0xe57b49 = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [_0x21e7c7, _0x1d05a6] = _0x1fbe24.split("-");
  const _0x35e873 = _0xe57b49[+_0x1d05a6 - 1] + " " + _0x21e7c7;
  const _0x2aa013 = document.getElementById("retDetailList");
  if (!_0x2aa013) {
    return;
  }
  if (!_0x1184f2 || _0x1184f2.length === 0) {
    _0x2aa013.innerHTML =
      '<div style="color:#aaa;font-size:12px;padding:10px;">📅 ' +
      _0x35e873 +
      " — koi retirement nahi hai</div>";
    return;
  }
  _0x2aa013.innerHTML =
    '\n<div style="font-size:13px;font-weight:700;color:#c62828;margin-bottom:10px;">📅 ' +
    _0x35e873 +
    " — " +
    _0x1184f2.length +
    ' retiring</div>\n<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:8px;">\n' +
    _0x1184f2
      .map(
        (_0x40f34c) =>
          '\n<div style="background:#fff8f8;border:1px solid #ffcdd2;border-radius:6px;padding:8px 10px;">\n<div style="font-size:12px;font-weight:600;color:#333;">👤 ' +
          _0x40f34c.name +
          '</div>\n<div style="font-size:11px;color:#666;margin-top:2px;">📍 ' +
          _0x40f34c.district +
          '</div>\n<div style="font-size:11px;color:#c62828;margin-top:2px;">🗓️ ' +
          _0x40f34c.retDate +
          "</div>\n</div>",
      )
      .join("") +
    "\n</div>";
}
function switchDashTab(_0x1d4c2f) {
  [1, 2, 3, 4].forEach((_0x5e07d7) => {
    const _0x4133cb = document.getElementById("dashPane" + _0x5e07d7);
    const _0x505892 = document.getElementById("dashTab" + _0x5e07d7);
    if (!_0x4133cb || !_0x505892) {
      return;
    }
    _0x4133cb.style.display = _0x5e07d7 === _0x1d4c2f ? "block" : "none";
    _0x505892.style.background =
      _0x5e07d7 === _0x1d4c2f ? "#1a237e" : "#f5f5f5";
    _0x505892.style.color = _0x5e07d7 === _0x1d4c2f ? "white" : "#555";
  });
}
function switchTab(_0x56c950) {
  [1, 2, 3, 4].forEach((_0x46fd5d) => {
    const _0x312ffb = document.getElementById("analyticsTab" + _0x46fd5d);
    const _0x4ec1a3 = document.getElementById("tabBtn" + _0x46fd5d);
    if (_0x312ffb) {
      _0x312ffb.style.display = _0x46fd5d === _0x56c950 ? "block" : "none";
    }
    if (_0x4ec1a3) {
      _0x4ec1a3.style.background =
        _0x46fd5d === _0x56c950 ? "#e65100" : "#f5f5f5";
      _0x4ec1a3.style.color = _0x46fd5d === _0x56c950 ? "white" : "#555";
    }
  });
}
window.recentRecords = JSON.parse(
  localStorage.getItem("ux_recentRecords") || "[]",
);
function addToRecent(_0x55814a, _0x50e257, _0x8de8d0) {
  if (!_0x55814a) {
    return;
  }
  window.recentRecords = window.recentRecords.filter(
    (_0x281c01) => _0x281c01.id !== _0x55814a,
  );
  window.recentRecords.unshift({
    id: _0x55814a,
    name: _0x50e257 || "—",
    district: _0x8de8d0 || "—",
    time: new Date().toLocaleTimeString("en-IN"),
  });
  if (window.recentRecords.length > 10) {
    window.recentRecords = window.recentRecords.slice(0, 10);
  }
  localStorage.setItem(
    "ux_recentRecords",
    JSON.stringify(window.recentRecords),
  );
  if (
    document.getElementById("recentPanel") &&
    document.getElementById("recentPanel").style.display !== "none"
  ) {
    renderRecentList();
  }
}
function renderRecentList() {
  const _0x110a6b = document.getElementById("recentList");
  if (!_0x110a6b) {
    return;
  }
  if (window.recentRecords.length === 0) {
    _0x110a6b.innerHTML =
      '<div style="color:#aaa;font-size:11px;text-align:center;padding:15px;">No records viewed yet</div>';
    return;
  }
  _0x110a6b.innerHTML = window.recentRecords
    .map(
      (_0x17b42f, _0x2ff719) =>
        "\n<div onclick=\"jumpToRecord('" +
        _0x17b42f.id +
        '\')" style="padding:7px 10px;border-bottom:1px solid #f0f0f0;cursor:pointer;transition:background 0.15s;"\nonmouseover="this.style.background=\'#e3f2fd\'" onmouseout="this.style.background=\'white\'">\n<div style="font-size:12px;font-weight:bold;color:#002e5b;">#' +
        _0x17b42f.id +
        " &nbsp; " +
        _0x17b42f.name +
        '</div>\n<div style="font-size:10px;color:#888;">📍 ' +
        _0x17b42f.district +
        " &nbsp;|&nbsp; 🕐 " +
        _0x17b42f.time +
        "</div>\n</div>",
    )
    .join("");
}
function jumpToRecord(_0x3882c6) {
  const _0x247ee1 = document.getElementById("searchVal");
  if (_0x247ee1) {
    _0x247ee1.value = _0x3882c6;
    performSearch();
  }
  closeRecentPanel();
}
function toggleRecentPanel() {
  const _0x1957be = document.getElementById("recentPanel");
  if (!_0x1957be) {
    return;
  }
  const _0x352474 = _0x1957be.style.display !== "none";
  _0x1957be.style.display = _0x352474 ? "none" : "block";
  if (!_0x352474) {
    renderRecentList();
  }
}
function closeRecentPanel() {
  const _0x44dfa1 = document.getElementById("recentPanel");
  if (_0x44dfa1) {
    _0x44dfa1.style.display = "none";
  }
}
const _origSelectRow = window.selectRow;
if (typeof selectRow === "function") {
  const __orig = selectRow;
  selectRow = function (_0x259032) {
    __orig(_0x259032);
    try {
      const _0x436649 = _0x259032.cells[2]?.innerText?.trim() || "";
      const _0x50a2a4 = _0x259032.cells[3]?.innerText?.trim() || "";
      const _0x363bcd = _0x259032.cells[21]?.innerText?.trim() || "";
      addToRecent(_0x436649, _0x50a2a4, _0x363bcd);
    } catch (_0x1e6107) {}
  };
}
document.addEventListener("keydown", function (_0x439dd5) {
  const _0x54cafe = document.activeElement?.tagName?.toLowerCase();
  const _0x2d595a = ["input", "textarea", "select"].includes(_0x54cafe);
  if (_0x439dd5.ctrlKey && _0x439dd5.key.toLowerCase() === "n") {
    _0x439dd5.preventDefault();
    const _0x43dd70 = document.getElementById("formOverlay");
    if (_0x43dd70) {
      _0x43dd70.style.display = "block";
    }
    showShortcutToast("Ctrl+N → Form Opened");
    return;
  }
  if (_0x439dd5.ctrlKey && _0x439dd5.key.toLowerCase() === "s") {
    _0x439dd5.preventDefault();
    const _0x46f543 =
      document.getElementById("formOverlay")?.style.display === "block";
    if (_0x46f543) {
      if (typeof saveEntry === "function") {
        saveEntry(true);
      }
      showShortcutToast("Ctrl+S → Saved");
    }
    return;
  }
  if (_0x439dd5.ctrlKey && _0x439dd5.key.toLowerCase() === "f") {
    _0x439dd5.preventDefault();
    const _0xcec0d0 = document.getElementById("searchVal");
    if (_0xcec0d0) {
      _0xcec0d0.focus();
      _0xcec0d0.select();
    }
    showShortcutToast("Ctrl+F → Search focused");
    return;
  }
  if (_0x439dd5.key === "Escape" && !_0x2d595a) {
    const _0xad6016 = document.getElementById("formOverlay");
    if (_0xad6016?.style.display === "block") {
      _0xad6016.style.display = "none";
      showShortcutToast("Esc → Form Closed");
      return;
    }
    if (document.getElementById("analyticsModal")) {
      document.getElementById("analyticsModal").remove();
      return;
    }
    if (document.getElementById("summaryModal")) {
      document.getElementById("summaryModal").remove();
      return;
    }
    closeRecentPanel();
    return;
  }
  if (_0x439dd5.ctrlKey && _0x439dd5.key.toLowerCase() === "r") {
    _0x439dd5.preventDefault();
    toggleRecentPanel();
    showShortcutToast("Ctrl+R → Recent Records");
    return;
  }
  if (_0x439dd5.key === "?" && !_0x2d595a) {
    showShortcutsHelp();
    return;
  }
});
function umsToast(_0x50b7a7, _0x1271fb = "info", _0x32721d = 3500) {
  const _0x1de033 = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
    warning: "⚠️",
  };
  const _0x4049db =
    document.getElementById("ums-toast-container") ||
    (() => {
      const _0x1b9ccf = document.createElement("div");
      _0x1b9ccf.id = "ums-toast-container";
      document.body.appendChild(_0x1b9ccf);
      return _0x1b9ccf;
    })();
  const _0x4c9429 = document.createElement("div");
  _0x4c9429.className = "ums-toast ums-toast-" + _0x1271fb;
  _0x4c9429.innerHTML =
    '<span class="ums-toast-icon">' +
    (_0x1de033[_0x1271fb] || _0x1de033.info) +
    "</span><span>" +
    _0x50b7a7 +
    "</span>";
  _0x4049db.appendChild(_0x4c9429);
  const _0x32e11b = () => {
    _0x4c9429.classList.add("hide");
    setTimeout(() => _0x4c9429.remove(), 320);
  };
  const _0x53db4a = setTimeout(_0x32e11b, _0x32721d);
  _0x4c9429.addEventListener("click", () => {
    clearTimeout(_0x53db4a);
    _0x32e11b();
  });
}
function showShortcutToast(_0x4c1a60) {
  let _0x12c604 = document.getElementById("shortcutToast");
  if (!_0x12c604) {
    _0x12c604 = document.createElement("div");
    _0x12c604.id = "shortcutToast";
    _0x12c604.style.cssText =
      "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#002e5b;color:white;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:bold;z-index:99999;transition:opacity 0.4s;pointer-events:none;";
    document.body.appendChild(_0x12c604);
  }
  _0x12c604.innerText = _0x4c1a60;
  _0x12c604.style.opacity = "1";
  clearTimeout(_0x12c604._timer);
  _0x12c604._timer = setTimeout(() => {
    _0x12c604.style.opacity = "0";
  }, 1800);
}
function showShortcutsHelp() {
  if (document.getElementById("shortcutsHelp")) {
    document.getElementById("shortcutsHelp").remove();
    return;
  }
  const _0x1cd444 = document.createElement("div");
  _0x1cd444.id = "shortcutsHelp";
  _0x1cd444.style.cssText =
    "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;border-radius:10px;padding:20px 25px;z-index:99999;box-shadow:0 10px 30px rgba(0,0,0,0.4);min-width:300px;font-family:sans-serif;";
  _0x1cd444.innerHTML =
    '\n<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;border-bottom:2px solid #002e5b;padding-bottom:8px;">\n<b style="color:#002e5b;font-size:15px;">⌨️ Keyboard Shortcuts</b>\n<button onclick="this.closest(\'#shortcutsHelp\').remove()" style="background:#c62828;color:white;border:none;border-radius:50%;width:26px;height:26px;cursor:pointer;font-weight:bold;">✕</button>\n</div>\n' +
    [
      ["Ctrl + N", "Form खोलें (New Entry)"],
      ["Ctrl + S", "Save / Add Record"],
      ["Ctrl + F", "Search Box Focus"],
      ["Ctrl + R", "Recent Records Panel"],
      ["Escape", "Form / Modal बंद करें"],
      ["?", "यह Help दिखाएं"],
    ]
      .map(
        ([_0x3d4f13, _0x377740]) =>
          '\n<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f0f0f0;font-size:13px;">\n<kbd style="background:#f0f0f0;border:1px solid #ccc;padding:2px 8px;border-radius:4px;font-family:monospace;font-weight:bold;">' +
          _0x3d4f13 +
          '</kbd>\n<span style="color:#555;">' +
          _0x377740 +
          "</span>\n</div>",
      )
      .join("") +
    "\n<div style=\"margin-top:12px;font-size:10px;color:#aaa;text-align:center;\">Press '?' anywhere to toggle this panel</div>";
  document.body.appendChild(_0x1cd444);
  _0x1cd444.addEventListener("click", (_0x5a8772) =>
    _0x5a8772.stopPropagation(),
  );
  setTimeout(
    () =>
      document.addEventListener("click", function _0x2b1c5a() {
        _0x1cd444.remove();
        document.removeEventListener("click", _0x2b1c5a);
      }),
    100,
  );
}
document.addEventListener("DOMContentLoaded", function () {
  const _0x22475e = document.createElement("div");
  _0x22475e.id = "recentBtn";
  _0x22475e.onclick = toggleRecentPanel;
  _0x22475e.title = "Recent Records (Ctrl+R)";
  _0x22475e.style.cssText =
    "position:fixed;bottom:20px;right:20px;background:#002e5b;color:white;width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:20px;z-index:9990;box-shadow:0 4px 12px rgba(0,0,0,0.3);transition:transform 0.2s;";
  _0x22475e.innerHTML = "🕐";
  _0x22475e.onmouseover = () => (_0x22475e.style.transform = "scale(1.1)");
  _0x22475e.onmouseout = () => (_0x22475e.style.transform = "scale(1)");
  document.body.appendChild(_0x22475e);
  const _0x16893c = document.createElement("div");
  _0x16893c.id = "recentPanel";
  _0x16893c.style.cssText =
    "display:none;position:fixed;bottom:78px;right:20px;width:300px;max-height:380px;background:white;border-radius:10px;box-shadow:0 8px 25px rgba(0,0,0,0.3);z-index:9989;overflow:hidden;font-family:sans-serif;";
  _0x16893c.innerHTML =
    '\n<div style="background:#002e5b;color:white;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;">\n<b style="font-size:13px;">🕐 Recent Records</b>\n<button onclick="closeRecentPanel()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:22px;height:22px;border-radius:50%;cursor:pointer;font-size:12px;">✕</button>\n</div>\n<div id="recentList" style="overflow-y:auto;max-height:320px;"></div>';
  document.body.appendChild(_0x16893c);
});
const SESSION_TIMEOUT_MS = 1800000;
const WARN_BEFORE_MS = 120000;
let _sessionTimer = null;
let _sessionWarnTimer = null;
let _sessionWarnShown = false;
function securityResetTimer() {
  securityClearTimer();
  _sessionWarnShown = false;
  _sessionWarnTimer = setTimeout(() => {
    if (!window.currentUser) {
      return;
    }
    _sessionWarnShown = true;
    showSessionWarning();
  }, SESSION_TIMEOUT_MS - WARN_BEFORE_MS);
  _sessionTimer = setTimeout(() => {
    if (!window.currentUser) {
      return;
    }
    auditLog("SESSION_TIMEOUT", "Auto-logout after 30 min inactivity");
    forceLogout();
  }, SESSION_TIMEOUT_MS);
}
function securityClearTimer() {
  clearTimeout(_sessionTimer);
  clearTimeout(_sessionWarnTimer);
  _sessionTimer = null;
  _sessionWarnTimer = null;
  const _0xb6d0c5 = document.getElementById("sessionWarnBanner");
  if (_0xb6d0c5) {
    _0xb6d0c5.remove();
  }
}
function showSessionWarning() {
  if (document.getElementById("sessionWarnBanner")) {
    return;
  }
  const _0x13a3de = document.createElement("div");
  _0x13a3de.id = "sessionWarnBanner";
  _0x13a3de.style.cssText =
    "position:fixed;top:0;left:0;width:100%;background:#e65100;color:white;text-align:center;padding:10px;z-index:999999;font-weight:bold;font-size:13px;display:flex;align-items:center;justify-content:center;gap:15px;";
  _0x13a3de.innerHTML =
    '\n⚠️ Session 2 मिनट में समाप्त होगा! Inactivity के कारण auto-logout होगा।\n<button onclick="securityResetTimer();document.getElementById(\'sessionWarnBanner\').remove();_sessionWarnShown=false;"\nstyle="background:white;color:#e65100;border:none;padding:5px 14px;border-radius:4px;cursor:pointer;font-weight:bold;font-size:12px;">\n✅ Active रहें\n</button>';
  document.body.appendChild(_0x13a3de);
}
function forceLogout() {
  securityClearTimer();
  window.currentUser = null;
  localStorage.removeItem("isLoggedIn");
  document.getElementById("userField").value = "";
  document.getElementById("passField").value = "";
  const _0x471ee7 = document.getElementById("loginOverlay");
  if (_0x471ee7) {
    _0x471ee7.style.display = "flex";
  }
  const _0x321e72 = document.getElementById("loginError");
  if (_0x321e72) {
    _0x321e72.innerText =
      "⏱️ You have been logged out due to session timeout. Please login again.";
  }
}
["mousemove", "keydown", "click", "scroll", "touchstart"].forEach(
  (_0x54a9de) => {
    document.addEventListener(
      _0x54a9de,
      () => {
        if (window.currentUser) {
          securityResetTimer();
        }
      },
      {
        passive: true,
      },
    );
  },
);
const AUDIT_KEY = "auditLog_ms_erp";
function auditLog(_0x23833d, _0x405413) {
  if (!window.currentUser && _0x23833d !== "LOGIN") {
    return;
  }
  const _0x41ca4e = JSON.parse(localStorage.getItem(AUDIT_KEY) || "[]");
  _0x41ca4e.unshift({
    user: window.currentUser || "UNKNOWN",
    action: _0x23833d,
    detail: _0x405413 || "",
    time: new Date().toLocaleString("en-IN"),
    ts: Date.now(),
  });
  if (_0x41ca4e.length > 500) {
    _0x41ca4e.length = 500;
  }
  localStorage.setItem(AUDIT_KEY, JSON.stringify(_0x41ca4e));
}
const _origSaveEntry = window.saveEntry;
if (typeof saveEntry === "function") {
  const __s = saveEntry;
  saveEntry = function (_0x3718d6) {
    const _0x2d5abc = document.getElementById("in3")?.value || "";
    auditLog(_0x3718d6 ? "NEW_ENTRY" : "UPDATE", "Unique ID: " + _0x2d5abc);
    return __s(_0x3718d6);
  };
}
const _origDeleteEntry = window.deleteEntry;
if (typeof deleteEntry === "function") {
  const __d = deleteEntry;
  deleteEntry = function () {
    const _0x137bd0 =
      document.getElementById("in3")?.value ||
      window.selectedRowElement?.cells[2]?.innerText ||
      "";
    auditLog("DELETE", "Unique ID: " + _0x137bd0);
    return __d();
  };
}
function showAuditTrail() {
  const _0x5570a = JSON.parse(localStorage.getItem(AUDIT_KEY) || "[]");
  if (document.getElementById("auditModal")) {
    document.getElementById("auditModal").remove();
  }
  const _0x195795 = document.createElement("div");
  _0x195795.id = "auditModal";
  _0x195795.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);z-index:10003;display:flex;align-items:center;justify-content:center;";
  const _0x21f155 = {
    LOGIN: "#2e7d32",
    LOGOUT: "#555",
    SESSION_TIMEOUT: "#e65100",
    NEW_ENTRY: "#1565c0",
    UPDATE: "#f57c00",
    DELETE: "#c62828",
  };
  const _0x42e616 =
    _0x5570a
      .map(
        (_0x2a75a8) =>
          '\n<tr onmouseover="this.style.background=\'#f5f5f5\'" onmouseout="this.style.background=\'white\'">\n<td style="padding:5px 10px;border:1px solid #eee;font-size:11px;color:#555;white-space:nowrap;">' +
          _0x2a75a8.time +
          '</td>\n<td style="padding:5px 10px;border:1px solid #eee;font-weight:bold;font-size:11px;color:#002e5b;">' +
          _0x2a75a8.user +
          '</td>\n<td style="padding:5px 10px;border:1px solid #eee;text-align:center;">\n<span style="background:' +
          (_0x21f155[_0x2a75a8.action] || "#777") +
          ';color:white;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:bold;">' +
          _0x2a75a8.action +
          '</span>\n</td>\n<td style="padding:5px 10px;border:1px solid #eee;font-size:11px;color:#444;">' +
          _0x2a75a8.detail +
          "</td>\n</tr>",
      )
      .join("") ||
    '<tr><td colspan="4" style="text-align:center;color:#aaa;padding:20px;">No audit logs yet</td></tr>';
  _0x195795.innerHTML =
    '\n<div style="background:white;border-radius:10px;width:92%;max-width:850px;max-height:88vh;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 15px 40px rgba(0,0,0,0.4);">\n<div style="background:linear-gradient(90deg,#1a237e,#283593);color:white;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">\n<div>\n<b style="font-size:15px;">📋 Audit Trail</b>\n<span style="font-size:11px;opacity:0.8;margin-left:12px;">' +
    _0x5570a.length +
    ' events recorded</span>\n</div>\n<div style="display:flex;gap:8px;align-items:center;">\n<button onclick="clearAuditLog()" style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:white;padding:5px 12px;border-radius:4px;cursor:pointer;font-size:11px;">🗑️ Clear Log</button>\n<button onclick="exportAuditCSV()" style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:white;padding:5px 12px;border-radius:4px;cursor:pointer;font-size:11px;">⬇️ Export CSV</button>\n<button onclick="document.getElementById(\'auditModal\').remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:16px;font-weight:bold;">✕</button>\n</div>\n</div>\n<!-- Filter bar -->\n<div style="padding:8px 16px;background:#f8f9fa;border-bottom:1px solid #eee;display:flex;gap:10px;align-items:center;flex-shrink:0;flex-wrap:wrap;">\n<input id="auditFilterUser" oninput="filterAuditTable()" style="padding:5px 10px;border:1px solid #ddd;border-radius:4px;font-size:11px;width:140px;">\n<select id="auditFilterAction" onchange="filterAuditTable()" style="padding:5px 8px;border:1px solid #ddd;border-radius:4px;font-size:11px;">\n<option value="">All Actions</option>\n<option>LOGIN</option><option>LOGOUT</option>\n<option>NEW_ENTRY</option><option>UPDATE</option>\n<option>DELETE</option><option>SESSION_TIMEOUT</option>\n</select>\n<span style="font-size:11px;color:#888;" id="auditCount">' +
    _0x5570a.length +
    ' records</span>\n</div>\n<div style="overflow-y:auto;flex:1;">\n<table id="auditTable" style="width:100%;border-collapse:collapse;">\n<thead style="background:#f5f5f5;position:sticky;top:0;">\n<tr>\n<th style="padding:7px 10px;border:1px solid #ddd;font-size:11px;text-align:left;">Date & Time</th>\n<th style="padding:7px 10px;border:1px solid #ddd;font-size:11px;">User</th>\n<th style="padding:7px 10px;border:1px solid #ddd;font-size:11px;">Action</th>\n<th style="padding:7px 10px;border:1px solid #ddd;font-size:11px;text-align:left;">Detail</th>\n</tr>\n</thead>\n<tbody id="auditBody">' +
    _0x42e616 +
    '</tbody>\n</table>\n</div>\n<div style="padding:10px 16px;background:#f5f5f5;border-top:1px solid #eee;text-align:right;flex-shrink:0;">\n<button onclick="document.getElementById(\'auditModal\').remove()" style="background:#c62828;color:white;border:none;padding:7px 18px;border-radius:4px;cursor:pointer;font-weight:bold;font-size:12px;">✖ Close</button>\n</div>\n</div>';
  document.body.appendChild(_0x195795);
  _0x195795.addEventListener("click", (_0x231b36) => {
    if (_0x231b36.target === _0x195795) {
      _0x195795.remove();
    }
  });
}
function filterAuditTable() {
  const _0x109beb =
    document.getElementById("auditFilterUser")?.value.toUpperCase() || "";
  const _0x29742f = document.getElementById("auditFilterAction")?.value || "";
  const _0x27a6a1 = JSON.parse(localStorage.getItem(AUDIT_KEY) || "[]");
  const _0x2339c6 = _0x27a6a1.filter((_0x3c06b0) => {
    const _0x2be0c8 = !_0x109beb || _0x3c06b0.user.includes(_0x109beb);
    const _0x29ff79 = !_0x29742f || _0x3c06b0.action === _0x29742f;
    return _0x2be0c8 && _0x29ff79;
  });
  const _0x287779 = {
    LOGIN: "#2e7d32",
    LOGOUT: "#555",
    SESSION_TIMEOUT: "#e65100",
    NEW_ENTRY: "#1565c0",
    UPDATE: "#f57c00",
    DELETE: "#c62828",
  };
  const _0x2ca5de = document.getElementById("auditBody");
  if (_0x2ca5de) {
    _0x2ca5de.innerHTML =
      _0x2339c6
        .map(
          (_0x289e0c) =>
            '\n<tr onmouseover="this.style.background=\'#f5f5f5\'" onmouseout="this.style.background=\'white\'">\n<td style="padding:5px 10px;border:1px solid #eee;font-size:11px;color:#555;white-space:nowrap;">' +
            _0x289e0c.time +
            '</td>\n<td style="padding:5px 10px;border:1px solid #eee;font-weight:bold;font-size:11px;color:#002e5b;">' +
            _0x289e0c.user +
            '</td>\n<td style="padding:5px 10px;border:1px solid #eee;text-align:center;">\n<span style="background:' +
            (_0x287779[_0x289e0c.action] || "#777") +
            ';color:white;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:bold;">' +
            _0x289e0c.action +
            '</span>\n</td>\n<td style="padding:5px 10px;border:1px solid #eee;font-size:11px;color:#444;">' +
            _0x289e0c.detail +
            "</td>\n</tr>",
        )
        .join("") ||
      '<tr><td colspan="4" style="text-align:center;color:#aaa;padding:15px;">No matching records</td></tr>';
  }
  const _0x2645c2 = document.getElementById("auditCount");
  if (_0x2645c2) {
    _0x2645c2.innerText = _0x2339c6.length + " records";
  }
}
function clearAuditLog() {
  if (!confirm("Are you sure you want to delete the entire audit log?")) {
    return;
  }
  localStorage.removeItem(AUDIT_KEY);
  document.getElementById("auditModal")?.remove();
  myAlert("✅ Audit log cleared.");
}
function exportAuditCSV() {
  const _0x5be110 = JSON.parse(localStorage.getItem(AUDIT_KEY) || "[]");
  if (!_0x5be110.length) {
    myAlert("No logs to export.");
    return;
  }
  let _0x44d446 = "Date & Time,User,Action,Detail\n";
  _0x5be110.forEach((_0x49b7cf) => {
    _0x44d446 +=
      '"' +
      _0x49b7cf.time +
      '","' +
      _0x49b7cf.user +
      '","' +
      _0x49b7cf.action +
      '","' +
      _0x49b7cf.detail +
      '"\n';
  });
  const _0x9a3ecc = new Blob([_0x44d446], {
    type: "text/csv",
  });
  const _0x5a6f71 = document.createElement("a");
  _0x5a6f71.href = URL.createObjectURL(_0x9a3ecc);
  _0x5a6f71.download =
    "AuditLog_MS_ERP_" +
    new Date().toLocaleDateString("en-IN").replace(/\//g, "-") +
    ".csv";
  _0x5a6f71.click();
}
document.addEventListener("DOMContentLoaded", function () {});
setInterval(() => {
  if (!window.currentUser || !_sessionTimer) {
    return;
  }
  let _0x56edfa = document.getElementById("sessionTimerBadge");
  if (!_0x56edfa) {
    _0x56edfa = document.createElement("div");
    _0x56edfa.id = "sessionTimerBadge";
    _0x56edfa.style.cssText =
      "position:fixed;top:8px;right:8px;background:#002e5b;color:white;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:bold;z-index:9988;opacity:0.85;pointer-events:none;";
    document.body.appendChild(_0x56edfa);
  }
  const _0x578075 = Math.max(
    0,
    SESSION_TIMEOUT_MS - (Date.now() - (_sessionStartTs || Date.now())),
  );
  const _0x1f2350 = Math.floor(_0x578075 / 60000);
  const _0x175773 = Math.floor((_0x578075 % 60000) / 1000);
  _0x56edfa.innerText =
    "⏱️ " + _0x1f2350 + ":" + String(_0x175773).padStart(2, "0");
  _0x56edfa.style.background = _0x1f2350 < 3 ? "#c62828" : "#002e5b";
}, 1000);
const _origSecurityResetTimer = securityResetTimer;
securityResetTimer = function () {
  _sessionStartTs = Date.now();
  _origSecurityResetTimer();
};
let _sessionStartTs = Date.now();
const CUSTOM_PASS_KEY = "msErp_customPasswords";
function getEffectivePassword(_0xfaede) {
  const _0x376efb = JSON.parse(localStorage.getItem(CUSTOM_PASS_KEY) || "{}");
  return _0x376efb[_0xfaede] || districtCredentials[_0xfaede] || null;
}
window._otpStore = {};
function generateOTP() {
  return String(Math.floor(100000 + Math.random() * 900000));
}
function openChangePassword() {
  if (document.getElementById("changePwModal")) {
    document.getElementById("changePwModal").remove();
  }
  const _0x3feab9 = document.createElement("div");
  _0x3feab9.id = "changePwModal";
  _0x3feab9.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.75);z-index:10005;display:flex;align-items:center;justify-content:center;";
  _0x3feab9.innerHTML =
    '\n<div style="background:white;border-radius:10px;width:90%;max-width:400px;box-shadow:0 15px 40px rgba(0,0,0,0.5);overflow:hidden;font-family:sans-serif;">\n<!-- Header -->\n<div style="background:linear-gradient(90deg,#0d47a1,#1565c0);color:white;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">\n<b style="font-size:15px;">🔑 Password Change (OTP)</b>\n<button onclick="document.getElementById(\'changePwModal\').remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;font-weight:bold;">✕</button>\n</div>\n<!-- Step 1: Enter User ID & Generate OTP -->\n<div id="otpStep1" style="padding:24px;">\n<p style="font-size:12px;color:#666;margin:0 0 16px 0;">अपना User ID डालें और OTP Generate करें।</p>\n<label style="font-size:11px;font-weight:bold;color:#333;">USER ID</label>\n<input id="otpUserId" type="text"\nstyle="width:100%;padding:10px;margin:6px 0 14px 0;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;text-transform:uppercase;font-size:13px;">\n<button onclick="generateAndShowOTP()"\nstyle="width:100%;padding:11px;background:#0d47a1;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer;font-size:13px;">\n📲 Generate OTP\n</button>\n<div id="otpGenMsg" style="margin-top:10px;font-size:12px;text-align:center;"></div>\n</div>\n<!-- Step 2: Enter OTP -->\n<div id="otpStep2" style="padding:24px;display:none;">\n<div style="background:#e3f2fd;border-radius:6px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#1565c0;">\n📲 OTP generate ho gaya hai। DPI Admin se OTP lekar neeche darj karein।<br>\n<span style="font-size:10px;color:#888;">(OTP 10 minutes mein expire ho jayega)</span>\n</div>\n<!-- DPI Panel: show OTP only if DPI is logged in OR no one is logged in during setup -->\n<div id="dpiOtpReveal" style="display:none;background:#fff3e0;border:1px solid #ff9800;border-radius:6px;padding:10px;margin-bottom:14px;text-align:center;">\n<div style="font-size:11px;color:#e65100;font-weight:bold;margin-bottom:4px;">🔐 DPI Admin OTP View</div>\n<div id="otpDisplayValue" style="font-size:28px;font-weight:bold;letter-spacing:8px;color:#0d47a1;"></div>\n<div style="font-size:10px;color:#888;margin-top:4px;" id="otpExpireTime"></div>\n</div>\n<label style="font-size:11px;font-weight:bold;color:#333;">OTP ENTER करें</label>\n<input id="otpInputVal" type="text" maxlength="6"\nstyle="width:100%;padding:10px;margin:6px 0 14px 0;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:18px;text-align:center;letter-spacing:6px;font-weight:bold;">\n<button onclick="verifyOTP()"\nstyle="width:100%;padding:11px;background:#2e7d32;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer;font-size:13px;">\n✅ OTP Verify करें\n</button>\n<button onclick="showStep(1)" style="width:100%;padding:8px;background:white;color:#555;border:1px solid #ccc;border-radius:4px;cursor:pointer;font-size:12px;margin-top:8px;">← वापस जाएं</button>\n<div id="otpVerifyMsg" style="margin-top:10px;font-size:12px;text-align:center;"></div>\n</div>\n<!-- Step 3: Set New Password -->\n<div id="otpStep3" style="padding:24px;display:none;">\n<div style="background:#e8f5e9;border-radius:6px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#2e7d32;font-weight:bold;">\n✅ OTP Verified! अब नया Password सेट करें।\n</div>\n<label style="font-size:11px;font-weight:bold;color:#333;">नया PASSWORD</label>\n<input id="newPassVal" type="password"\nstyle="width:100%;padding:10px;margin:6px 0 14px 0;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:13px;">\n<label style="font-size:11px;font-weight:bold;color:#333;">PASSWORD CONFIRM करें</label>\n<input id="confirmPassVal" type="password"\nstyle="width:100%;padding:10px;margin:6px 0 16px 0;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:13px;">\n<!-- Password strength bar -->\n<div style="margin-bottom:12px;">\n<div style="background:#eee;border-radius:4px;height:6px;overflow:hidden;">\n<div id="pwStrengthBar" style="height:100%;width:0%;border-radius:4px;transition:width 0.3s,background 0.3s;"></div>\n</div>\n<div id="pwStrengthLabel" style="font-size:10px;color:#888;margin-top:3px;"></div>\n</div>\n<button onclick="saveNewPassword()"\nstyle="width:100%;padding:11px;background:#0d47a1;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer;font-size:13px;">\n💾 Password Save करें\n</button>\n<div id="pwSaveMsg" style="margin-top:10px;font-size:12px;text-align:center;"></div>\n</div>\n</div>';
  document.body.appendChild(_0x3feab9);
  _0x3feab9.addEventListener("click", (_0x130866) => {
    if (_0x130866.target === _0x3feab9) {
      _0x3feab9.remove();
    }
  });
  setTimeout(() => {
    const _0x595819 = document.getElementById("newPassVal");
    if (_0x595819) {
      _0x595819.addEventListener("input", updatePwStrength);
    }
  }, 100);
}
function showStep(_0x4a1d31) {
  [1, 2, 3].forEach((_0x40092d) => {
    const _0x57c98f = document.getElementById("otpStep" + _0x40092d);
    if (_0x57c98f) {
      _0x57c98f.style.display = _0x40092d === _0x4a1d31 ? "block" : "none";
    }
  });
}
function generateAndShowOTP() {
  const _0x2cef3d = document
    .getElementById("otpUserId")
    .value.trim()
    .toUpperCase();
  const _0x3963b4 = document.getElementById("otpGenMsg");
  if (!_0x2cef3d) {
    _0x3963b4.innerHTML =
      '<span style="color:red;">❌ Please enter User ID.</span>';
    return;
  }
  if (!districtCredentials[_0x2cef3d]) {
    _0x3963b4.innerHTML =
      '<span style="color:red;">❌ This User ID does not exist.</span>';
    return;
  }
  if (_0x2cef3d === "DPI") {
    _0x3963b4.innerHTML =
      '<span style="color:red;">⛔ DPI password cannot be reset this way.</span>';
    return;
  }
  if (
    window.currentUser &&
    window.currentUser !== "DPI" &&
    window.currentUser !== _0x2cef3d
  ) {
    _0x3963b4.innerHTML =
      '<span style="color:red;">⛔ You can only reset your own password.</span>';
    return;
  }
  const _0x35b512 = generateOTP();
  const _0x1f929c = Date.now() + 600000;
  window._otpStore[_0x2cef3d] = {
    otp: _0x35b512,
    expiry: _0x1f929c,
  };
  auditLog("OTP_GENERATED", "Password change OTP generated for: " + _0x2cef3d);
  showStep(2);
  const _0x470ec6 = document.getElementById("dpiOtpReveal");
  const _0x599f5e = document.getElementById("otpDisplayValue");
  const _0x37c880 = document.getElementById("otpExpireTime");
  const _0x19a3f8 = window.currentUser && window.currentUser === _0x2cef3d;
  const _0x281e06 = window.currentUser === "DPI";
  if (_0x281e06 || _0x19a3f8) {
    _0x470ec6.style.display = "block";
    _0x599f5e.innerText = _0x35b512;
    _0x37c880.innerText =
      "⏱️ Expires at: " + new Date(_0x1f929c).toLocaleTimeString("en-IN");
    _0x470ec6.querySelector("div").innerText = _0x281e06
      ? "🔐 DPI Admin OTP View"
      : "🔐 Your OTP";
  } else {
    _0x470ec6.style.display = "none";
  }
  document.getElementById("otpUserId")._resolvedUser = _0x2cef3d;
}
function verifyOTP() {
  const _0x556c7e = document.getElementById("otpInputVal").value.trim();
  const _0x4d19bc =
    document.getElementById("otpUserId")._resolvedUser ||
    document.getElementById("otpUserId").value.trim().toUpperCase();
  const _0x463540 = document.getElementById("otpVerifyMsg");
  const _0x205b4f = window._otpStore[_0x4d19bc];
  if (!_0x205b4f) {
    _0x463540.innerHTML =
      '<span style="color:red;">❌ OTP not generated. Please generate first.</span>';
    return;
  }
  if (Date.now() > _0x205b4f.expiry) {
    _0x463540.innerHTML =
      '<span style="color:red;">⏱️ OTP expired. Please generate again.</span>';
    delete window._otpStore[_0x4d19bc];
    return;
  }
  if (_0x556c7e !== _0x205b4f.otp) {
    _0x463540.innerHTML =
      '<span style="color:red;">❌ Incorrect OTP. Please try again.</span>';
    return;
  }
  delete window._otpStore[_0x4d19bc];
  auditLog("OTP_VERIFIED", "OTP verified for: " + _0x4d19bc);
  showStep(3);
  document.getElementById("newPassVal").dataset.userId = _0x4d19bc;
}
function updatePwStrength() {
  const _0x4da0bd = document.getElementById("newPassVal").value;
  const _0x2b7cae = document.getElementById("pwStrengthBar");
  const _0x4aaf00 = document.getElementById("pwStrengthLabel");
  let _0x17616a = 0;
  if (_0x4da0bd.length >= 6) {
    _0x17616a++;
  }
  if (_0x4da0bd.length >= 8) {
    _0x17616a++;
  }
  if (/[A-Z]/.test(_0x4da0bd)) {
    _0x17616a++;
  }
  if (/[0-9]/.test(_0x4da0bd)) {
    _0x17616a++;
  }
  if (/[^A-Za-z0-9]/.test(_0x4da0bd)) {
    _0x17616a++;
  }
  const _0x41ca97 = [
    {
      w: "0%",
      bg: "#eee",
      t: "",
    },
    {
      w: "20%",
      bg: "#e53935",
      t: "बहुत कमज़ोर",
    },
    {
      w: "40%",
      bg: "#f57c00",
      t: "कमज़ोर",
    },
    {
      w: "60%",
      bg: "#fbc02d",
      t: "ठीक है",
    },
    {
      w: "80%",
      bg: "#7cb342",
      t: "अच्छा",
    },
    {
      w: "100%",
      bg: "#2e7d32",
      t: "बहुत मज़बूत ✅",
    },
  ];
  const _0xc402b5 = _0x41ca97[_0x17616a] || _0x41ca97[0];
  _0x2b7cae.style.width = _0xc402b5.w;
  _0x2b7cae.style.background = _0xc402b5.bg;
  _0x4aaf00.innerText = _0xc402b5.t;
  _0x4aaf00.style.color = _0xc402b5.bg;
}
function saveNewPassword() {
  const _0x5b9d9e = document.getElementById("newPassVal").value;
  const _0x42c4a5 = document.getElementById("confirmPassVal").value;
  const _0x1737a2 = document.getElementById("newPassVal").dataset.userId;
  const _0x25f5c8 = document.getElementById("pwSaveMsg");
  if (!_0x5b9d9e || _0x5b9d9e.length < 4) {
    _0x25f5c8.innerHTML =
      '<span style="color:red;">❌ Password must be at least 4 characters.</span>';
    return;
  }
  if (_0x5b9d9e !== _0x42c4a5) {
    _0x25f5c8.innerHTML =
      '<span style="color:red;">❌ Passwords do not match.</span>';
    return;
  }
  const _0x3179fc = JSON.parse(localStorage.getItem(CUSTOM_PASS_KEY) || "{}");
  const _0x2676cc =
    _0x3179fc[_0x1737a2] || districtCredentials[_0x1737a2] || "(default)";
  _0x3179fc[_0x1737a2] = _0x5b9d9e;
  localStorage.setItem(CUSTOM_PASS_KEY, JSON.stringify(_0x3179fc));
  auditLog("PASSWORD_CHANGED", "Password changed for: " + _0x1737a2);
  _sbLogPwReset(_0x1737a2, _0x2676cc, _0x5b9d9e, window.currentUser || "SELF");
  _0x25f5c8.innerHTML =
    '<span style="color:#2e7d32;font-weight:bold;">✅ Password changed successfully!</span>';
  setTimeout(() => {
    document.getElementById("changePwModal")?.remove();
    const _0x381ea = document.getElementById("userField");
    if (_0x381ea) {
      _0x381ea.value = _0x1737a2;
    }
  }, 1800);
}
async function openPwResetLog() {
  if (window.currentUser !== "DPI") {
    alert("⛔ This log can only be viewed by DPI Admin.");
    return;
  }
  const _0x30f955 = await _sbGetPwResetLog();
  const _0x3092d5 = document.createElement("div");
  _0x3092d5.id = "pwResetLogModal";
  _0x3092d5.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:99999;display:flex;align-items:center;justify-content:center;";
  let _0x11eafa = "";
  if (_0x30f955.length === 0) {
    _0x11eafa =
      '<tr><td colspan="5" style="text-align:center;padding:20px;color:#999;">कोई Password Reset नहीं हुआ अभी तक।</td></tr>';
  } else {
    _0x30f955.forEach((_0xb4c823, _0x5c11c8) => {
      const _0x4fd822 = _0xb4c823.created_at
        ? new Date(_0xb4c823.created_at).toLocaleString("en-IN", {
            hour12: true,
          })
        : _0xb4c823.dateTime || "-";
      _0x11eafa +=
        '<tr style="background:' +
        (_0x5c11c8 % 2 === 0 ? "#fff" : "#f9f9f9") +
        '">\n<td style="padding:10px 12px;border-bottom:1px solid #eee;font-weight:bold;color:#0d47a1;">' +
        (_0xb4c823.user_id || _0xb4c823.userId || "-") +
        '</td>\n<td style="padding:10px 12px;border-bottom:1px solid #eee;color:#333;">' +
        _0x4fd822 +
        '</td>\n<td style="padding:10px 12px;border-bottom:1px solid #eee;color:#c62828;font-family:monospace;">' +
        (_0xb4c823.old_pass || _0xb4c823.oldPass || "-") +
        '</td>\n<td style="padding:10px 12px;border-bottom:1px solid #eee;color:#2e7d32;font-family:monospace;font-weight:bold;">' +
        (_0xb4c823.new_pass || _0xb4c823.newPass || "-") +
        '</td>\n<td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;">' +
        (_0xb4c823.reset_by || _0xb4c823.resetBy || "-") +
        "</td>\n</tr>";
    });
  }
  _0x3092d5.innerHTML =
    '\n<div style="background:white;border-radius:10px;width:95%;max-width:700px;box-shadow:0 20px 60px rgba(0,0,0,0.4);overflow:hidden;">\n<div style="background:#c62828;color:white;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">\n<span style="font-weight:bold;font-size:15px;">🔐 Password Reset Log — DPI View</span>\n<button onclick="document.getElementById(\'pwResetLogModal\').remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;font-weight:bold;">✕</button>\n</div>\n<div style="padding:16px 20px;background:#fff8f8;border-bottom:1px solid #eee;font-size:12px;color:#c62828;">\n⚠️ यह log केवल DPI Admin को दिखता है। जो भी User अपना Password Reset करे, उसकी जानकारी यहाँ दर्ज होती है।\n</div>\n<div style="overflow-y:auto;max-height:400px;">\n<table style="width:100%;border-collapse:collapse;font-size:13px;">\n<thead>\n<tr style="background:#f5f5f5;">\n<th style="padding:10px 12px;text-align:left;color:#333;border-bottom:2px solid #ddd;">User ID</th>\n<th style="padding:10px 12px;text-align:left;color:#333;border-bottom:2px solid #ddd;">Date & Time</th>\n<th style="padding:10px 12px;text-align:left;color:#c62828;border-bottom:2px solid #ddd;">पुराना Password</th>\n<th style="padding:10px 12px;text-align:left;color:#2e7d32;border-bottom:2px solid #ddd;">नया Password</th>\n<th style="padding:10px 12px;text-align:left;color:#333;border-bottom:2px solid #ddd;">Reset By</th>\n</tr>\n</thead>\n<tbody>' +
    _0x11eafa +
    '</tbody>\n</table>\n</div>\n<div style="padding:14px 20px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #eee;background:#fafafa;">\n<span style="font-size:11px;color:#999;">कुल Reset: <strong>' +
    _0x30f955.length +
    "</strong></span>\n<button onclick=\"if(confirm('Are you sure you want to delete all Password Reset Logs?')){_sbClearPwResetLog().then(()=>{localStorage.removeItem('dpi_pw_reset_log');document.getElementById('pwResetLogModal').remove();alert('Log cleared successfully.');});}\"\nstyle=\"padding:7px 14px;background:#e53935;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;font-weight:bold;\">🗑️ Log Clear करें</button>\n</div>\n</div>";
  document.body.appendChild(_0x3092d5);
  _0x3092d5.addEventListener("click", (_0x549c40) => {
    if (_0x549c40.target === _0x3092d5) {
      _0x3092d5.remove();
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const _0x1aebb3 = document.getElementById("logoutBtn");
  if (_0x1aebb3 && _0x1aebb3.parentNode) {
    const _0x1ed87f = document.createElement("button");
    _0x1ed87f.onclick = openChangePassword;
    _0x1ed87f.title = "Change Password via OTP";
    _0x1ed87f.style.cssText =
      "padding:7px 14px;background:#006064;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;font-weight:bold;";
    _0x1ed87f.innerHTML = "🔑 Change Password";
    _0x1aebb3.parentNode.insertBefore(_0x1ed87f, _0x1aebb3);
  }
});
const _DISTRICT_STRUCTURE = [
  {
    jd: "JD BHOPAL",
    districts: ["BHOPAL", "RAISEN", "RAJGARH", "SEHORE", "VIDISHA"],
  },
  {
    jd: "JD GWALIOR",
    districts: [
      "ASHOKNAGAR",
      "BHIND",
      "DATIA",
      "GUNA",
      "GWALIOR",
      "MORENA",
      "SHEOPUR",
      "SHIVPURI",
    ],
  },
  {
    jd: "JD INDORE",
    districts: [
      "ALIRAJPUR",
      "BADWANI",
      "BURHANPUR",
      "DHAR",
      "INDORE",
      "JHABUA",
      "KHANDWA",
      "KHARGONE",
    ],
  },
  {
    jd: "JD JABALPUR",
    districts: [
      "BALAGHAT",
      "CHHINDWARA",
      "JABALPUR",
      "KATNI",
      "MANDLA",
      "NARSINGHPUR",
      "SEONI",
      "DINDORI",
      "PANDHURNA",
    ],
  },
  {
    jd: "JD UJJAIN",
    districts: [
      "AGAR MALWA",
      "DEWAS",
      "MANDSAUR",
      "NEEMUCH",
      "RATLAM",
      "SHAJAPUR",
      "UJJAIN",
    ],
  },
  {
    jd: "JD SAGAR",
    districts: ["CHHATARPUR", "DAMOH", "PANNA", "SAGAR", "TIKAMGARH", "NIWARI"],
  },
  {
    jd: "JD REWA",
    districts: ["REWA", "SATNA", "SIDHI", "SINGRAULI", "MAUGANJ", "MAIHAR"],
  },
  {
    jd: "JD NARMADAPURAM",
    districts: ["BETUL", "HARDA", "NARMADAPURAM"],
  },
  {
    jd: "JD SHAHDOL",
    districts: ["ANUPPUR", "SHAHDOL", "UMARIA"],
  },
];
let _dashCharts = {};
function _destroyDashCharts() {
  Object.values(_dashCharts).forEach((_0x436911) => {
    try {
      _0x436911.destroy();
    } catch (_0x24f076) {}
  });
  _dashCharts = {};
}
function _getDistrictName(_0x32921a) {
  let _0x23842c = (_0x32921a.field22 || "").toUpperCase().trim();
  if (/^\d{8,}/.test(_0x23842c) || _0x23842c.includes("ODS")) {
    _0x23842c = (_0x32921a.field23 || "").toUpperCase().trim();
  }
  return _0x23842c
    .replace(/^DEO\s+/, "")
    .replace(/^JD\s+/, "")
    .trim();
}
function _computeDashData() {
  const _0xda42e1 = (window.fullData || []).filter(
    (_0x3cadcc) => (_0x3cadcc.field28 || "").toUpperCase() !== "DELETED",
  );
  const _0x1bef83 = new Date();
  const _0x4c17db = {};
  _DISTRICT_STRUCTURE.forEach((_0x20f203) =>
    _0x20f203.districts.forEach((_0x80161e) => {
      _0x4c17db[_0x80161e] = 0;
    }),
  );
  _0xda42e1.forEach((_0x41c466) => {
    const _0x22da38 = _getDistrictName(_0x41c466);
    if (_0x4c17db[_0x22da38] !== undefined) {
      _0x4c17db[_0x22da38]++;
    }
  });
  const _0x4a1353 = {};
  _0xda42e1.forEach((_0x19a52a) => {
    const _0x3f7d70 =
      (_0x19a52a.field5 || "UNKNOWN").trim().toUpperCase() || "UNKNOWN";
    _0x4a1353[_0x3f7d70] = (_0x4a1353[_0x3f7d70] || 0) + 1;
  });
  const _0x1ce6c9 = {};
  const _0x33ab0b = {};
  const _0xd70ee8 = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const _0x237bd9 = [];
  for (let _0x313293 = 5; _0x313293 >= 0; _0x313293--) {
    const _0x1d1892 = new Date(
      _0x1bef83.getFullYear(),
      _0x1bef83.getMonth() - _0x313293,
      1,
    );
    _0x237bd9.push({
      label:
        _0xd70ee8[_0x1d1892.getMonth()] +
        " " +
        _0x1d1892.getFullYear().toString().slice(2),
      year: _0x1d1892.getFullYear(),
      month: _0x1d1892.getMonth(),
    });
    _0x1ce6c9[_0x313293] = 0;
    _0x33ab0b[_0x313293] = 0;
  }
  _0xda42e1.forEach((_0x549f63) => {
    const _0x4bbfb7 = (_0x549f63.field28 || "").toUpperCase();
    const _0x385caf = _0x549f63.field29 || "";
    const _0x53c92f = _0x385caf.match(/(\d{2})-(\d{2})-(\d{4})/);
    if (!_0x53c92f) {
      return;
    }
    const _0x12e555 = new Date(
      parseInt(_0x53c92f[3]),
      parseInt(_0x53c92f[2]) - 1,
      parseInt(_0x53c92f[1]),
    );
    _0x237bd9.forEach((_0x29efa4, _0x3bbdc4) => {
      if (
        _0x12e555.getFullYear() === _0x29efa4.year &&
        _0x12e555.getMonth() === _0x29efa4.month
      ) {
        if (_0x4bbfb7.includes("NEW")) {
          _0x1ce6c9[5 - _0x3bbdc4 < 0 ? 0 : 5 - _0x3bbdc4]++;
        } else if (_0x4bbfb7.includes("UPD")) {
          _0x33ab0b[5 - _0x3bbdc4 < 0 ? 0 : 5 - _0x3bbdc4]++;
        }
      }
    });
  });
  const _0x2e6eab = [];
  _0xda42e1.forEach((_0x589954) => {
    const _0xcd9fea = _0x589954.field7 || "";
    let _0x3c1eba = null;
    if (/^\d{2}-\d{2}-\d{4}$/.test(_0xcd9fea)) {
      const _0x995ee1 = _0xcd9fea.split("-");
      _0x3c1eba = new Date(
        parseInt(_0x995ee1[2]),
        parseInt(_0x995ee1[1]) - 1,
        parseInt(_0x995ee1[0]),
      );
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(_0xcd9fea)) {
      _0x3c1eba = new Date(_0xcd9fea);
    }
    if (!_0x3c1eba || isNaN(_0x3c1eba)) {
      return;
    }
    const _0x5ea566 = new Date(
      _0x3c1eba.getFullYear() + 60,
      _0x3c1eba.getMonth(),
      _0x3c1eba.getDate(),
    );
    const _0x657819 = Math.floor((_0x5ea566 - _0x1bef83) / 86400000);
    if (_0x657819 >= 0 && _0x657819 <= 90) {
      _0x2e6eab.push({
        name: _0x589954.field4 || "—",
        district: _getDistrictName(_0x589954),
        dob: _0xcd9fea,
        retDate: _0x5ea566.toLocaleDateString("en-IN"),
        daysLeft: _0x657819,
      });
    }
  });
  _0x2e6eab.sort(
    (_0x1304fe, _0x42956c) => _0x1304fe.daysLeft - _0x42956c.daysLeft,
  );
  return {
    distCount: _0x4c17db,
    catCount: _0x4a1353,
    months: _0x237bd9,
    monthlyNew: _0x1ce6c9,
    monthlyUpd: _0x33ab0b,
    retiringSoon: _0x2e6eab,
    total: _0xda42e1.length,
  };
}
function openLiveDashboard() {
  if (!window.fullData || window.fullData.length === 0) {
    myAlert("Data not loaded yet. Please try again in a moment.");
    return;
  }
  _destroyDashCharts();
  const _0x2656b9 = document.getElementById("liveDashModal");
  if (_0x2656b9) {
    _0x2656b9.remove();
  }
  const _0x559ac9 = _computeDashData();
  const _0x21c108 = Object.entries(_0x559ac9.distCount).sort(
    (_0x2515ba, _0x130f6a) => _0x130f6a[1] - _0x2515ba[1],
  );
  const _0xac3193 = _0x21c108.map((_0x47762a) => _0x47762a[0]);
  const _0x3ab83a = _0x21c108.map((_0x27ce13) => _0x27ce13[1]);
  const _0x239843 = Object.keys(_0x559ac9.catCount);
  const _0x139e8e = Object.values(_0x559ac9.catCount);
  const _0x6d4a93 = [
    "#6a1b9a",
    "#1565c0",
    "#2e7d32",
    "#e65100",
    "#b71c1c",
    "#00695c",
    "#4527a0",
    "#558b2f",
  ];
  const _0x570f33 = _0x559ac9.months.map((_0x239d02) => _0x239d02.label);
  const _0xfea117 = _0x559ac9.months.map(
    (_0x38a3d9, _0x978a81) => _0x559ac9.monthlyNew[_0x978a81] || 0,
  );
  const _0x11fc7b = _0x559ac9.months.map(
    (_0xe68cae, _0x5bd339) => _0x559ac9.monthlyUpd[_0x5bd339] || 0,
  );
  const _0x2ea626 =
    _0x559ac9.retiringSoon.length === 0
      ? '<tr><td colspan="5" style="text-align:center;padding:16px;color:#888;font-style:italic;">Agle 90 din mein koi retirement nahi</td></tr>'
      : _0x559ac9.retiringSoon
          .slice(0, 20)
          .map((_0x578df3) => {
            const _0x48bb42 =
              _0x578df3.daysLeft <= 30
                ? "#ffebee"
                : _0x578df3.daysLeft <= 60
                  ? "#fff8e1"
                  : "#e8f5e9";
            const _0x4342e9 =
              _0x578df3.daysLeft <= 30
                ? "#c62828"
                : _0x578df3.daysLeft <= 60
                  ? "#e65100"
                  : "#2e7d32";
            return (
              '<tr style="background:' +
              _0x48bb42 +
              ';border-bottom:1px solid #eee;">\n<td style="padding:7px 10px;font-weight:600;font-size:12px;">' +
              _0x578df3.name +
              '</td>\n<td style="padding:7px 10px;font-size:12px;">' +
              _0x578df3.district +
              '</td>\n<td style="padding:7px 10px;font-size:12px;">' +
              _0x578df3.dob +
              '</td>\n<td style="padding:7px 10px;font-size:12px;">' +
              _0x578df3.retDate +
              '</td>\n<td style="padding:7px 10px;text-align:center;">\n<span style="background:' +
              _0x4342e9 +
              ';color:white;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:bold;">' +
              _0x578df3.daysLeft +
              "d</span>\n</td>\n</tr>"
            );
          })
          .join("");
  const _0x38b9be = document.createElement("div");
  _0x38b9be.id = "liveDashModal";
  _0x38b9be.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:10001;overflow-y:auto;";
  _0x38b9be.innerHTML =
    '\n<div style="max-width:1100px;margin:20px auto;background:#f4f6fa;border-radius:10px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.4);">\n<!-- Header -->\n<div style="background:linear-gradient(135deg,#4a148c,#6a1b9a);color:white;padding:16px 24px;display:flex;justify-content:space-between;align-items:center;">\n<div>\n<div style="font-size:18px;font-weight:700;letter-spacing:.5px;">📊 DPI Live Dashboard</div>\n<div style="font-size:12px;opacity:.8;margin-top:2px;">Real-time data from Supabase • ' +
    new Date().toLocaleString("en-IN") +
    '</div>\n</div>\n<button onclick="closeLiveDashboard()" style="background:rgba(255,255,255,.2);border:none;color:white;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer;font-weight:bold;">✕</button>\n</div>\n<!-- KPI Cards -->\n<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:20px 24px 8px;">\n<div style="background:white;border-radius:8px;padding:14px 16px;border-left:4px solid #6a1b9a;">\n<div style="font-size:11px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">कुल Records</div>\n<div style="font-size:28px;font-weight:700;color:#4a148c;margin-top:4px;">' +
    _0x559ac9.total.toLocaleString("en-IN") +
    '</div>\n</div>\n<div style="background:white;border-radius:8px;padding:14px 16px;border-left:4px solid #1565c0;">\n<div style="font-size:11px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Districts Active</div>\n<div style="font-size:28px;font-weight:700;color:#1565c0;margin-top:4px;">' +
    Object.values(_0x559ac9.distCount).filter((_0xd92274) => _0xd92274 > 0)
      .length +
    '</div>\n</div>\n<div style="background:white;border-radius:8px;padding:14px 16px;border-left:4px solid #e65100;">\n<div style="font-size:11px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Retiring (90 days)</div>\n<div style="font-size:28px;font-weight:700;color:#e65100;margin-top:4px;">' +
    _0x559ac9.retiringSoon.length +
    '</div>\n</div>\n<div style="background:white;border-radius:8px;padding:14px 16px;border-left:4px solid #2e7d32;">\n<div style="font-size:11px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Categories</div>\n<div style="font-size:28px;font-weight:700;color:#2e7d32;margin-top:4px;">' +
    _0x239843.length +
    '</div>\n</div>\n</div>\n<!-- Charts Row 1: Bar + Pie -->\n<div style="display:grid;grid-template-columns:2fr 1fr;gap:14px;padding:8px 24px;">\n<div style="background:white;border-radius:8px;padding:16px;">\n<div style="font-size:13px;font-weight:700;color:#333;margin-bottom:12px;">📍 District-wise Records (Top 55)</div>\n<div style="overflow-x:auto;">\n<div style="min-width:900px;height:260px;">\n<canvas id="dashBarChart"></canvas>\n</div>\n</div>\n</div>\n<div style="background:white;border-radius:8px;padding:16px;">\n<div style="font-size:13px;font-weight:700;color:#333;margin-bottom:12px;">🎯 Category Split</div>\n<div style="height:220px;display:flex;align-items:center;justify-content:center;">\n<canvas id="dashPieChart"></canvas>\n</div>\n</div>\n</div>\n<!-- Charts Row 2: Line trend -->\n<div style="padding:8px 24px;">\n<div style="background:white;border-radius:8px;padding:16px;">\n<div style="font-size:13px;font-weight:700;color:#333;margin-bottom:12px;">📈 Monthly Activity Trend (Last 6 Months)</div>\n<div style="height:200px;">\n<canvas id="dashLineChart"></canvas>\n</div>\n</div>\n</div>\n<!-- Retirement Calendar -->\n<div style="padding:8px 24px 24px;">\n<div style="background:white;border-radius:8px;padding:16px;">\n<div style="font-size:13px;font-weight:700;color:#333;margin-bottom:4px;">⚠️ Upcoming Retirements — Next 90 Days</div>\n<div style="font-size:11px;color:#888;margin-bottom:12px;">\n<span style="background:#ffebee;padding:2px 8px;border-radius:4px;color:#c62828;font-weight:600;margin-right:6px;">● ≤ 30 days</span>\n<span style="background:#fff8e1;padding:2px 8px;border-radius:4px;color:#e65100;font-weight:600;margin-right:6px;">● ≤ 60 days</span>\n<span style="background:#e8f5e9;padding:2px 8px;border-radius:4px;color:#2e7d32;font-weight:600;">● ≤ 90 days</span>\n</div>\n<div style="overflow-y:auto;max-height:260px;">\n<table style="width:100%;border-collapse:collapse;font-size:13px;">\n<thead>\n<tr style="background:#f5f5f5;position:sticky;top:0;">\n<th style="padding:8px 10px;text-align:left;font-size:11px;color:#555;border-bottom:2px solid #eee;">Name</th>\n<th style="padding:8px 10px;text-align:left;font-size:11px;color:#555;border-bottom:2px solid #eee;">District</th>\n<th style="padding:8px 10px;text-align:left;font-size:11px;color:#555;border-bottom:2px solid #eee;">DOB</th>\n<th style="padding:8px 10px;text-align:left;font-size:11px;color:#555;border-bottom:2px solid #eee;">Retirement Date</th>\n<th style="padding:8px 10px;text-align:center;font-size:11px;color:#555;border-bottom:2px solid #eee;">Days Left</th>\n</tr>\n</thead>\n<tbody>' +
    _0x2ea626 +
    "</tbody>\n</table>\n</div>\n</div>\n</div>\n</div>";
  document.body.appendChild(_0x38b9be);
  _0x38b9be.addEventListener("click", (_0x40c912) => {
    if (_0x40c912.target === _0x38b9be) {
      closeLiveDashboard();
    }
  });
  requestAnimationFrame(() => {
    const _0x3421e4 = document.getElementById("dashBarChart")?.getContext("2d");
    if (_0x3421e4) {
      _dashCharts.bar = new Chart(_0x3421e4, {
        type: "bar",
        data: {
          labels: _0xac3193,
          datasets: [
            {
              label: "Records",
              data: _0x3ab83a,
              backgroundColor: _0xac3193.map((_0x2ab151, _0x24a379) => {
                const _0x230ad6 = [
                  "#6a1b9a",
                  "#1565c0",
                  "#2e7d32",
                  "#e65100",
                  "#b71c1c",
                  "#00695c",
                  "#4527a0",
                  "#558b2f",
                  "#0277bd",
                ];
                for (
                  let _0x524320 = 0;
                  _0x524320 < _DISTRICT_STRUCTURE.length;
                  _0x524320++
                ) {
                  if (
                    _DISTRICT_STRUCTURE[_0x524320].districts.includes(
                      _0xac3193[_0x24a379],
                    )
                  ) {
                    return _0x230ad6[_0x524320] + "cc";
                  }
                }
                return "#9e9e9ecc";
              }),
              borderRadius: 4,
              borderSkipped: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: (_0x4d7ea7) => " Records: " + _0x4d7ea7.parsed.y,
              },
            },
          },
          scales: {
            x: {
              ticks: {
                font: {
                  size: 9,
                },
                maxRotation: 75,
                minRotation: 45,
              },
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                font: {
                  size: 10,
                },
              },
              grid: {
                color: "#f0f0f0",
              },
            },
          },
        },
      });
    }
    const _0xb0f338 = document.getElementById("dashPieChart")?.getContext("2d");
    if (_0xb0f338) {
      _dashCharts.pie = new Chart(_0xb0f338, {
        type: "doughnut",
        data: {
          labels: _0x239843,
          datasets: [
            {
              data: _0x139e8e,
              backgroundColor: _0x6d4a93.slice(0, _0x239843.length),
              borderWidth: 2,
              borderColor: "#fff",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                font: {
                  size: 10,
                },
                boxWidth: 12,
                padding: 8,
              },
            },
            tooltip: {
              callbacks: {
                label: (_0x398f5f) =>
                  " " +
                  _0x398f5f.label +
                  ": " +
                  _0x398f5f.parsed +
                  " (" +
                  Math.round(
                    (_0x398f5f.parsed /
                      _0x139e8e.reduce(
                        (_0x898336, _0x2bcc15) => _0x898336 + _0x2bcc15,
                        0,
                      )) *
                      100,
                  ) +
                  "%)",
              },
            },
          },
        },
      });
    }
    const _0x1d3ee3 = document
      .getElementById("dashLineChart")
      ?.getContext("2d");
    if (_0x1d3ee3) {
      _dashCharts.line = new Chart(_0x1d3ee3, {
        type: "line",
        data: {
          labels: _0x570f33,
          datasets: [
            {
              label: "New Entries",
              data: _0xfea117,
              borderColor: "#1565c0",
              backgroundColor: "#1565c022",
              fill: true,
              tension: 0.4,
              pointRadius: 4,
              pointBackgroundColor: "#1565c0",
            },
            {
              label: "Updated",
              data: _0x11fc7b,
              borderColor: "#2e7d32",
              backgroundColor: "#2e7d3222",
              fill: true,
              tension: 0.4,
              pointRadius: 4,
              pointBackgroundColor: "#2e7d32",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
              labels: {
                font: {
                  size: 11,
                },
                boxWidth: 14,
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 11,
                },
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: "#f0f0f0",
              },
              ticks: {
                font: {
                  size: 11,
                },
              },
            },
          },
        },
      });
    }
  });
}
function closeLiveDashboard() {
  _destroyDashCharts();
  const _0x3ba073 = document.getElementById("liveDashModal");
  if (_0x3ba073) {
    _0x3ba073.remove();
  }
}
function _computeTrackerData() {
  const _0x3c769a = window.fullData || [];
  const _0x53ca3e = new Date();
  const _0x3aa6bd = {
    AGARMALWA: "DEOAGARMALWA",
    ALIRAJPUR: "DEOALIRAJPUR",
    ANUPPUR: "DEOANUPPUR",
    ASHOKNAGAR: "DEOASHOKNAGAR",
    BALAGHAT: "DEOBALAGHAT",
    BARWANI: "DEOBARWANI",
    BADWANI: "DEOBARWANI",
    BETUL: "DEOBETUL",
    BHIND: "DEOBHIND",
    BHOPAL: "DEOBHOPAL",
    BURHANPUR: "DEOBURHANPUR",
    CHHATARPUR: "DEOCHHATARPUR",
    CHHINDWARA: "DEOCHHINDWARA",
    DAMOH: "DEODAMOH",
    DATIA: "DEODATIA",
    DEWAS: "DEODEWAS",
    DHAR: "DEODHAR",
    DINDORI: "DEODINDORI",
    GUNA: "DEOGUNA",
    GWALIOR: "DEOGWALIOR",
    HARDA: "DEOHARDA",
    HOSHANGABAD: "DEOHOSHANGABAD",
    NARMADAPURAM: "DEONARMADAPURAM",
    INDORE: "DEOINDORE",
    JABALPUR: "DEOJABALPUR",
    JHABUA: "DEOJHABUA",
    KATNI: "DEOKATNI",
    KHANDWA: "DEOKHANDWA",
    KHARGONE: "DEOKHARGONE",
    MANDLA: "DEOMANDLA",
    MANDSAUR: "DEOMANDSAUR",
    MORENA: "DEOMORENA",
    NARSINGHPUR: "DEONARSINGHPUR",
    NEEMUCH: "DEONEEMUCH",
    NIWARI: "DEONIWARI",
    PANNA: "DEOPANNA",
    RAISEN: "DEORAISEN",
    RAJGARH: "DEORAJGARH",
    RATLAM: "DEORATLAM",
    REWA: "DEOREWA",
    SAGAR: "DEOSAGAR",
    SATNA: "DEOSATNA",
    SEHORE: "DEOSEHORE",
    SEONI: "DEOSEONI",
    SHAHDOL: "DEOSHAHDOL",
    SHAJAPUR: "DEOSHAJAPUR",
    SHEOPUR: "DEOSHEOPUR",
    SHIVPURI: "DEOSHIVPURI",
    SIDHI: "DEOSIDHI",
    SINGRAULI: "DEOSINGRAULI",
    TIKAMGARH: "DEOTIKAMGARH",
    UJJAIN: "DEOUJJAIN",
    UMARIA: "DEOUMARIA",
    VIDISHA: "DEOVIDISHA",
    PANDHURNA: "DEOPANDHURNA",
    MAIHAR: "DEOMAIHAR",
    MAUGANJ: "DEOMAUGANJ",
  };
  const _0x43a07e = {};
  Object.keys(_0x3aa6bd).forEach((_0x874ba7) => {
    _0x43a07e[_0x874ba7] = {
      district: _0x874ba7,
      loginId: _0x3aa6bd[_0x874ba7],
      total: 0,
      active: 0,
      updated: 0,
      newEntry: 0,
      deleted: 0,
      lastActivity: null,
      lastActivityRaw: 0,
    };
  });
  _0x3c769a.forEach((_0x35acf6) => {
    let _0x5d99f4 = (_0x35acf6.field22 || "").toUpperCase().trim();
    if (/^\d{8,}/.test(_0x5d99f4) || _0x5d99f4.includes("ODS")) {
      _0x5d99f4 = (_0x35acf6.field23 || "").toUpperCase().trim();
    }
    const _0x2b10f6 = _0x5d99f4
      .replace(/^DEO\s+/, "")
      .replace(/^JD\s+/, "")
      .trim();
    if (!_0x43a07e[_0x2b10f6]) {
      return;
    }
    const _0x30fd15 = _0x43a07e[_0x2b10f6];
    const _0x5efb6e = (_0x35acf6.field28 || "").toUpperCase().trim();
    const _0x213c71 = (_0x35acf6.field29 || "").trim();
    _0x30fd15.total++;
    if (!_0x5efb6e.includes("DELETE")) {
      _0x30fd15.active++;
    }
    if (_0x5efb6e.includes("NEW")) {
      _0x30fd15.newEntry++;
    }
    if (_0x5efb6e.includes("UPD")) {
      _0x30fd15.updated++;
    }
    if (_0x5efb6e.includes("DELETE")) {
      _0x30fd15.deleted++;
    }
    if (_0x213c71) {
      const _0x3e1869 = _0x213c71.split("|");
      const _0x7547c9 =
        _0x3e1869.length > 1
          ? _0x3e1869[_0x3e1869.length - 1].trim()
          : _0x213c71;
      let _0x563f3a = null;
      const _0x169248 = _0x7547c9.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
      if (_0x169248) {
        const _0x2e0ac4 = new Date(
          _0x169248[3] +
            "-" +
            _0x169248[2].padStart(2, "0") +
            "-" +
            _0x169248[1].padStart(2, "0"),
        );
        if (!isNaN(_0x2e0ac4)) {
          _0x563f3a = _0x2e0ac4;
        }
      }
      const _0x13e0b9 = _0x7547c9.match(/(\d{2})-(\d{2})-(\d{4})/);
      if (!_0x563f3a && _0x13e0b9) {
        const _0x3d6eaa = new Date(
          _0x13e0b9[3] + "-" + _0x13e0b9[2] + "-" + _0x13e0b9[1],
        );
        if (!isNaN(_0x3d6eaa)) {
          _0x563f3a = _0x3d6eaa;
        }
      }
      if (_0x563f3a && !isNaN(_0x563f3a)) {
        const _0x237758 = _0x563f3a.getTime();
        if (_0x237758 > _0x30fd15.lastActivityRaw) {
          _0x30fd15.lastActivityRaw = _0x237758;
          _0x30fd15.lastActivity = _0x563f3a;
        }
      }
    }
  });
  const _0x1594ae = Object.values(_0x43a07e).filter(
    (_0x36da52) => _0x36da52.total > 0 || true,
  );
  _0x1594ae.sort((_0x3d15e2, _0x399fb8) => _0x399fb8.active - _0x3d15e2.active);
  const _0x278ef9 = Math.max(
    ..._0x1594ae.map((_0x5a080f) => _0x5a080f.active),
    1,
  );
  const _0x4cc4ad = _0x1594ae
    .map((_0x5950af) => ({
      ..._0x5950af,
      score: _0x5950af.active + _0x5950af.updated * 2 + _0x5950af.newEntry,
    }))
    .sort((_0x1c96c0, _0x2e44f1) => _0x2e44f1.score - _0x1c96c0.score);
  return {
    arr: _0x1594ae,
    maxActive: _0x278ef9,
    leaderboard: _0x4cc4ad.slice(0, 10),
    today: _0x53ca3e,
  };
}
function _timeAgo(_0x46fe6a) {
  if (!_0x46fe6a) {
    return '<span style="color:#bbb;font-style:italic;">No activity</span>';
  }
  const _0x4be008 = Date.now() - _0x46fe6a.getTime();
  const _0x8d58f5 = Math.floor(_0x4be008 / 60000);
  const _0x4cf493 = Math.floor(_0x4be008 / 3600000);
  const _0x2dc379 = Math.floor(_0x4be008 / 86400000);
  if (_0x8d58f5 < 2) {
    return '<span style="color:#2e7d32;font-weight:600;">Just now</span>';
  }
  if (_0x8d58f5 < 60) {
    return (
      '<span style="color:#2e7d32;font-weight:600;">' +
      _0x8d58f5 +
      "m ago</span>"
    );
  }
  if (_0x4cf493 < 24) {
    return (
      '<span style="color:#1565c0;font-weight:600;">' +
      _0x4cf493 +
      "h ago</span>"
    );
  }
  if (_0x2dc379 === 1) {
    return '<span style="color:#e65100;font-weight:600;">Yesterday</span>';
  }
  if (_0x2dc379 < 7) {
    return (
      '<span style="color:#e65100;font-weight:600;">' +
      _0x2dc379 +
      "d ago</span>"
    );
  }
  return (
    '<span style="color:#b71c1c;font-weight:600;">' +
    _0x46fe6a.toLocaleDateString("en-IN") +
    "</span>"
  );
}
function _statusBadge(_0x4dbb02) {
  if (!_0x4dbb02.lastActivity) {
    return '<span style="background:#f5f5f5;color:#aaa;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;">INACTIVE</span>';
  }
  const _0x26b52d = Math.floor(
    (Date.now() - _0x4dbb02.lastActivity.getTime()) / 86400000,
  );
  if (_0x26b52d <= 1) {
    return '<span style="background:#e8f5e9;color:#2e7d32;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;">ACTIVE</span>';
  }
  if (_0x26b52d <= 7) {
    return '<span style="background:#e3f2fd;color:#1565c0;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;">RECENT</span>';
  }
  if (_0x26b52d <= 30) {
    return '<span style="background:#fff8e1;color:#e65100;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;">SLOW</span>';
  }
  return '<span style="background:#ffebee;color:#b71c1c;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;">LAGGING</span>';
}
function openCompletionTracker() {
  if (!window.fullData || window.fullData.length === 0) {
    myAlert("Data not loaded. Please try again in a moment.");
    return;
  }
  const _0x16b8af = document.getElementById("trackerModal");
  if (_0x16b8af) {
    _0x16b8af.remove();
  }
  const {
    arr: _0x2d1c6c,
    maxActive: _0x427621,
    leaderboard: _0x581fff,
    today: _0x38f0e7,
  } = _computeTrackerData();
  const _0x2e71a9 = _0x2d1c6c.reduce(
    (_0x28900e, _0x1fccd9) => _0x28900e + _0x1fccd9.active,
    0,
  );
  const _0x10b946 = _0x2d1c6c.reduce(
    (_0x246e64, _0x1ae8bb) => _0x246e64 + _0x1ae8bb.newEntry,
    0,
  );
  const _0xdb8a97 = _0x2d1c6c.reduce(
    (_0x4a92ba, _0x5c97ab) => _0x4a92ba + _0x5c97ab.updated,
    0,
  );
  const _0x3d1861 = _0x2d1c6c.reduce(
    (_0x1c9694, _0x31b1e0) => _0x1c9694 + _0x31b1e0.deleted,
    0,
  );
  const _0x1788e0 = _0x2d1c6c.filter(
    (_0x3032c3) =>
      _0x3032c3.lastActivity &&
      Date.now() - _0x3032c3.lastActivity.getTime() < 604800000,
  ).length;
  const _0x284310 = _0x2d1c6c.filter(
    (_0x4b843e) =>
      !_0x4b843e.lastActivity ||
      Date.now() - _0x4b843e.lastActivity.getTime() > 2592000000,
  ).length;
  const _0xe79516 = ["🥇", "🥈", "🥉"];
  const _0x284fad = _0x581fff
    .map(
      (_0x46540f, _0x55a93c) =>
        '\n<tr style="background:' +
        (_0x55a93c < 3
          ? ["#fffde7", "#f3f3f3", "#fff3e0"][_0x55a93c]
          : _0x55a93c % 2 === 0
            ? "#fff"
            : "#fafafa") +
        ';border-bottom:1px solid #f0f0f0;">\n<td style="padding:10px 12px;font-size:15px;text-align:center;width:36px;">' +
        (_0x55a93c < 3
          ? _0xe79516[_0x55a93c]
          : '<span style="color:#999;font-size:12px;font-weight:700;">' +
            (_0x55a93c + 1) +
            "</span>") +
        '</td>\n<td style="padding:10px 12px;">\n<div style="font-size:13px;font-weight:700;color:#1a237e;">' +
        _0x46540f.district +
        '</div>\n<div style="font-size:10px;color:#888;">' +
        _0x46540f.loginId +
        '</div>\n</td>\n<td style="padding:10px 12px;text-align:center;">\n<span style="font-size:16px;font-weight:700;color:#1565c0;">' +
        _0x46540f.active.toLocaleString("en-IN") +
        '</span>\n</td>\n<td style="padding:10px 12px;text-align:center;">\n<span style="background:#e8f5e9;color:#2e7d32;padding:2px 7px;border-radius:8px;font-size:11px;font-weight:700;">+' +
        _0x46540f.newEntry +
        '</span>\n<span style="background:#e3f2fd;color:#1565c0;padding:2px 7px;border-radius:8px;font-size:11px;font-weight:700;margin-left:3px;">↻' +
        _0x46540f.updated +
        '</span>\n</td>\n<td style="padding:10px 12px;text-align:center;">' +
        _timeAgo(_0x46540f.lastActivity) +
        '</td>\n<td style="padding:10px 12px;text-align:center;">' +
        _statusBadge(_0x46540f) +
        "</td>\n</tr>",
    )
    .join("");
  const _0x243069 = {
    "JD BHOPAL": "#6a1b9a",
    "JD GWALIOR": "#1565c0",
    "JD INDORE": "#2e7d32",
    "JD JABALPUR": "#e65100",
    "JD UJJAIN": "#b71c1c",
    "JD SAGAR": "#00695c",
    "JD REWA": "#4527a0",
    "JD NARMADAPURAM": "#558b2f",
    "JD SHAHDOL": "#0277bd",
  };
  let _0x39b572 = "";
  (_DISTRICT_STRUCTURE || []).forEach((_0x405574) => {
    const _0x44ed5c = _0x243069[_0x405574.jd] || "#555";
    _0x39b572 +=
      '\n<div style="margin-bottom:18px;">\n<div style="font-size:11px;font-weight:700;color:' +
      _0x44ed5c +
      ";text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px;padding-bottom:4px;border-bottom:2px solid " +
      _0x44ed5c +
      '22;">\n' +
      _0x405574.jd +
      "\n</div>";
    _0x405574.districts.forEach((_0x2a0f8c) => {
      const _0x14e577 = _0x2d1c6c.find(
        (_0x59d1eb) => _0x59d1eb.district === _0x2a0f8c,
      ) || {
        district: _0x2a0f8c,
        active: 0,
        newEntry: 0,
        updated: 0,
        deleted: 0,
        lastActivity: null,
      };
      const _0x2d3b94 =
        _0x427621 > 0 ? Math.round((_0x14e577.active / _0x427621) * 100) : 0;
      const _0x54bd93 = _0x14e577.active === 0 ? "#e0e0e0" : _0x44ed5c;
      _0x39b572 +=
        '\n<div data-district="' +
        _0x2a0f8c +
        '" style="display:grid;grid-template-columns:120px 1fr 60px 90px 80px;gap:8px;align-items:center;margin-bottom:6px;">\n<div style="font-size:11px;font-weight:600;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="' +
        _0x2a0f8c +
        '">' +
        _0x2a0f8c +
        '</div>\n<div style="background:#f0f0f0;border-radius:4px;height:10px;overflow:hidden;">\n<div style="width:' +
        _0x2d3b94 +
        "%;height:100%;background:" +
        _0x54bd93 +
        ';border-radius:4px;transition:width .4s;"></div>\n</div>\n<div style="font-size:11px;font-weight:700;color:#333;text-align:right;">' +
        _0x14e577.active.toLocaleString("en-IN") +
        '</div>\n<div style="font-size:10px;text-align:center;">' +
        _timeAgo(_0x14e577.lastActivity) +
        '</div>\n<div style="font-size:10px;text-align:right;">' +
        _statusBadge(_0x14e577) +
        "</div>\n</div>";
    });
    _0x39b572 += "</div>";
  });
  const _0xad81ef = document.createElement("div");
  _0xad81ef.id = "trackerModal";
  _0xad81ef.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.72);z-index:10002;overflow-y:auto;";
  _0xad81ef.innerHTML =
    '\n<div style="max-width:1080px;margin:20px auto 40px;background:#f4f6fa;border-radius:12px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,0.45);">\n<!-- ── Header ── -->\n<div style="background:linear-gradient(135deg,#0d47a1,#1565c0);color:white;padding:18px 28px;display:flex;justify-content:space-between;align-items:center;">\n<div>\n<div style="font-size:19px;font-weight:700;letter-spacing:.4px;">🏆 District Completion Tracker</div>\n<div style="font-size:12px;opacity:.8;margin-top:3px;">Live progress • Last refreshed: ' +
    _0x38f0e7.toLocaleString("en-IN") +
    '</div>\n</div>\n<div style="display:flex;gap:10px;align-items:center;">\n<button onclick="refreshTracker()" style="background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.4);color:white;padding:6px 14px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;">🔄 Refresh</button>\n<button onclick="document.getElementById(\'trackerModal\').remove()" style="background:rgba(255,255,255,.15);border:none;color:white;width:34px;height:34px;border-radius:50%;font-size:16px;cursor:pointer;font-weight:bold;">✕</button>\n</div>\n</div>\n<!-- ── KPI Strip ── -->\n<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px;padding:20px 24px 10px;">\n<div style="background:white;border-radius:8px;padding:13px 15px;border-top:3px solid #1565c0;">\n<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Total Active</div>\n<div style="font-size:26px;font-weight:700;color:#1565c0;margin-top:3px;">' +
    _0x2e71a9.toLocaleString("en-IN") +
    '</div>\n</div>\n<div style="background:white;border-radius:8px;padding:13px 15px;border-top:3px solid #2e7d32;">\n<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">New Entries</div>\n<div style="font-size:26px;font-weight:700;color:#2e7d32;margin-top:3px;">' +
    _0x10b946.toLocaleString("en-IN") +
    '</div>\n</div>\n<div style="background:white;border-radius:8px;padding:13px 15px;border-top:3px solid #0277bd;">\n<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Updated</div>\n<div style="font-size:26px;font-weight:700;color:#0277bd;margin-top:3px;">' +
    _0xdb8a97.toLocaleString("en-IN") +
    '</div>\n</div>\n<div style="background:white;border-radius:8px;padding:13px 15px;border-top:3px solid #2e7d32;">\n<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Active This Week</div>\n<div style="font-size:26px;font-weight:700;color:#2e7d32;margin-top:3px;">' +
    _0x1788e0 +
    '</div>\n</div>\n<div style="background:white;border-radius:8px;padding:13px 15px;border-top:3px solid #b71c1c;">\n<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Lagging (&gt;30d)</div>\n<div style="font-size:26px;font-weight:700;color:#b71c1c;margin-top:3px;">' +
    _0x284310 +
    '</div>\n</div>\n</div>\n<!-- ── Two Column: Leaderboard + Search ── -->\n<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:10px 24px;">\n<!-- Leaderboard -->\n<div style="background:white;border-radius:10px;overflow:hidden;">\n<div style="padding:14px 16px;border-bottom:1px solid #f0f0f0;">\n<div style="font-size:13px;font-weight:700;color:#1a237e;">🏅 Top 10 Leaderboard</div>\n<div style="font-size:11px;color:#888;margin-top:2px;">Score = Active + Updated×2 + New</div>\n</div>\n<div style="overflow-y:auto;max-height:340px;">\n<table style="width:100%;border-collapse:collapse;">\n<thead>\n<tr style="background:#f8f9fa;position:sticky;top:0;">\n<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:center;width:36px;">#</th>\n<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:left;">District</th>\n<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:center;">Records</th>\n<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:center;">Activity</th>\n<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:center;">Last Active</th>\n<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:center;">Status</th>\n</tr>\n</thead>\n<tbody>' +
    _0x284fad +
    '</tbody>\n</table>\n</div>\n</div>\n<!-- Alert Panel: Lagging districts -->\n<div style="background:white;border-radius:10px;overflow:hidden;">\n<div style="padding:14px 16px;border-bottom:1px solid #f0f0f0;background:#fff8f8;">\n<div style="font-size:13px;font-weight:700;color:#b71c1c;">⚠️ Attention Required</div>\n<div style="font-size:11px;color:#888;margin-top:2px;">Districts with no activity in last 30 days</div>\n</div>\n<div style="overflow-y:auto;max-height:340px;padding:8px 0;">\n' +
    (_0x2d1c6c
      .filter(
        (_0x6677eb) =>
          !_0x6677eb.lastActivity ||
          Date.now() - _0x6677eb.lastActivity.getTime() > 2592000000,
      )
      .sort(
        (_0x1dfbd4, _0x5116bb) =>
          (_0x1dfbd4.lastActivityRaw || 0) - (_0x5116bb.lastActivityRaw || 0),
      )
      .map(
        (_0x1a193c) =>
          '\n<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 16px;border-bottom:1px solid #ffeaea;">\n<div>\n<div style="font-size:12px;font-weight:700;color:#333;">' +
          _0x1a193c.district +
          '</div>\n<div style="font-size:10px;color:#999;">' +
          _0x1a193c.loginId +
          " • " +
          _0x1a193c.active +
          ' records</div>\n</div>\n<div style="text-align:right;">\n' +
          _timeAgo(_0x1a193c.lastActivity) +
          '\n<div style="margin-top:2px;">' +
          _statusBadge(_0x1a193c) +
          "</div>\n</div>\n</div>",
      )
      .join("") ||
      '<div style="padding:20px;text-align:center;color:#2e7d32;font-weight:600;">✅ Sab districts active hain!</div>') +
    '\n</div>\n</div>\n</div>\n<!-- ── Progress Bars: All Districts by JD ── -->\n<div style="padding:10px 24px 28px;">\n<div style="background:white;border-radius:10px;padding:18px 20px;">\n<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">\n<div style="font-size:13px;font-weight:700;color:#333;">📊 All Districts — Progress View</div>\n<div style="display:flex;gap:8px;align-items:center;">\n<input type="text" id="trackerSearchBox" oninput="filterTrackerRows(this.value)" style="padding:5px 10px;border:1px solid #ddd;border-radius:6px;font-size:12px;width:160px;">\n</div>\n</div>\n<div style="font-size:10px;color:#888;margin-bottom:14px;">Progress bar = relative to highest district. Color = JD region.</div>\n<!-- Legend -->\n<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid #f0f0f0;">\n' +
    Object.entries(_0x243069)
      .map(
        ([_0x55cdf8, _0x30b68f]) =>
          '<span style="font-size:10px;font-weight:600;color:' +
          _0x30b68f +
          ';display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background:' +
          _0x30b68f +
          ';border-radius:2px;display:inline-block;"></span>' +
          _0x55cdf8 +
          "</span>",
      )
      .join("") +
    '\n</div>\n<!-- Column headers -->\n<div style="display:grid;grid-template-columns:120px 1fr 60px 90px 80px;gap:8px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid #eee;">\n<div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;">District</div>\n<div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;">Progress</div>\n<div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;text-align:right;">Records</div>\n<div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;text-align:center;">Last Active</div>\n<div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;text-align:right;">Status</div>\n</div>\n<div id="trackerProgressBody">' +
    _0x39b572 +
    "</div>\n</div>\n</div>\n</div>";
  document.body.appendChild(_0xad81ef);
  _0xad81ef.addEventListener("click", (_0x2ebecd) => {
    if (_0x2ebecd.target === _0xad81ef) {
      _0xad81ef.remove();
    }
  });
}
function refreshTracker() {
  openCompletionTracker();
}
function filterTrackerRows(_0xc374dd) {
  const _0x57b339 = document.getElementById("trackerProgressBody");
  if (!_0x57b339) {
    return;
  }
  const _0xc19f47 = _0xc374dd.trim().toUpperCase();
  _0x57b339.querySelectorAll("[data-district]").forEach((_0x2e395e) => {
    _0x2e395e.style.display =
      !_0xc19f47 || _0x2e395e.dataset.district.includes(_0xc19f47)
        ? ""
        : "none";
  });
}
const _origLoadDataIntoMemory2 =
  typeof loadDataIntoMemory === "function" ? loadDataIntoMemory : null;
const DIST_PANEL_PASSWORD = "1782";
function openDistrictPasswordPanel() {
  document.getElementById("distPassUnlockModal").style.display = "flex";
  document.getElementById("distPassUnlockInput").value = "";
  document.getElementById("distPassUnlockErr").textContent = "";
  setTimeout(() => document.getElementById("distPassUnlockInput").focus(), 100);
}
function verifyDistPassUnlock() {
  const _0x33a26c = document.getElementById("distPassUnlockInput").value.trim();
  if (_0x33a26c === DIST_PANEL_PASSWORD) {
    document.getElementById("distPassUnlockModal").style.display = "none";
    document.getElementById("distPassUnlockInput").value = "";
    document.getElementById("distPassUnlockErr").textContent = "";
    showDistrictPasswordPanel();
  } else {
    document.getElementById("distPassUnlockErr").textContent =
      "❌ Galat password! Sirf DPI ke liye.";
    document.getElementById("distPassUnlockInput").value = "";
    document.getElementById("distPassUnlockInput").focus();
  }
}
function showDistrictPasswordPanel() {
  buildDistPassTable("all");
  document.getElementById("districtPasswordPanel").style.display = "block";
  document.getElementById("distPassSearch").value = "";
}
function closeDistrictPasswordPanel() {
  document.getElementById("districtPasswordPanel").style.display = "none";
}
function showDistPassTab(_0x5bbd51) {
  ["all", "dpi", "jd", "deo"].forEach((_0x236948) => {
    const _0xbdec0b = document.getElementById("tab" + _0x236948.toUpperCase());
    if (_0xbdec0b) {
      _0xbdec0b.style.background =
        _0x236948 === _0x5bbd51 ? "#1565c0" : "#e0e0e0";
      _0xbdec0b.style.color = _0x236948 === _0x5bbd51 ? "white" : "#333";
    }
  });
  document.getElementById("distPassSearch").value = "";
  buildDistPassTable(_0x5bbd51);
}
function buildDistPassTable(_0x21e0d2) {
  const _0x52c3a4 = [
    {
      type: "DPI",
      label: "DPI (State Level)",
      id: "DPI",
      pass: districtCredentials.DPI,
    },
    {
      type: "JD",
      label: "JD Bhopal",
      id: "JDBHOPAL",
      pass: districtCredentials.JDBHOPAL,
    },
    {
      type: "JD",
      label: "JD Gwalior",
      id: "JDGWALIOR",
      pass: districtCredentials.JDGWALIOR,
    },
    {
      type: "JD",
      label: "JD Indore",
      id: "JDINDORE",
      pass: districtCredentials.JDINDORE,
    },
    {
      type: "JD",
      label: "JD Jabalpur",
      id: "JDJABALPUR",
      pass: districtCredentials.JDJABALPUR,
    },
    {
      type: "JD",
      label: "JD Rewa",
      id: "JDREWA",
      pass: districtCredentials.JDREWA,
    },
    {
      type: "JD",
      label: "JD Sagar",
      id: "JDSAGAR",
      pass: districtCredentials.JDSAGAR,
    },
    {
      type: "JD",
      label: "JD Ujjain",
      id: "JDUJJAIN",
      pass: districtCredentials.JDUJJAIN,
    },
    {
      type: "JD",
      label: "JD Shahdol",
      id: "JDSHAHDOL",
      pass: districtCredentials.JDSHAHDOL,
    },
    {
      type: "JD",
      label: "JD Narmadapuram",
      id: "JDNARMADAPURAM",
      pass: districtCredentials.JDNARMADAPURAM,
    },
    {
      type: "DEO",
      label: "DEO Agar Malwa",
      id: "DEOAGARMALWA",
      pass: districtCredentials.DEOAGARMALWA,
    },
    {
      type: "DEO",
      label: "DEO Alirajpur",
      id: "DEOALIRAJPUR",
      pass: districtCredentials.DEOALIRAJPUR,
    },
    {
      type: "DEO",
      label: "DEO Anuppur",
      id: "DEOANUPPUR",
      pass: districtCredentials.DEOANUPPUR,
    },
    {
      type: "DEO",
      label: "DEO Ashoknagar",
      id: "DEOASHOKNAGAR",
      pass: districtCredentials.DEOASHOKNAGAR,
    },
    {
      type: "DEO",
      label: "DEO Balaghat",
      id: "DEOBALAGHAT",
      pass: districtCredentials.DEOBALAGHAT,
    },
    {
      type: "DEO",
      label: "DEO Barwani",
      id: "DEOBARWANI",
      pass: districtCredentials.DEOBARWANI,
    },
    {
      type: "DEO",
      label: "DEO Betul",
      id: "DEOBETUL",
      pass: districtCredentials.DEOBETUL,
    },
    {
      type: "DEO",
      label: "DEO Bhind",
      id: "DEOBHIND",
      pass: districtCredentials.DEOBHIND,
    },
    {
      type: "DEO",
      label: "DEO Bhopal",
      id: "DEOBHOPAL",
      pass: districtCredentials.DEOBHOPAL,
    },
    {
      type: "DEO",
      label: "DEO Burhanpur",
      id: "DEOBURHANPUR",
      pass: districtCredentials.DEOBURHANPUR,
    },
    {
      type: "DEO",
      label: "DEO Chhatarpur",
      id: "DEOCHHATARPUR",
      pass: districtCredentials.DEOCHHATARPUR,
    },
    {
      type: "DEO",
      label: "DEO Chhindwara",
      id: "DEOCHHINDWARA",
      pass: districtCredentials.DEOCHHINDWARA,
    },
    {
      type: "DEO",
      label: "DEO Damoh",
      id: "DEODAMOH",
      pass: districtCredentials.DEODAMOH,
    },
    {
      type: "DEO",
      label: "DEO Datia",
      id: "DEODATIA",
      pass: districtCredentials.DEODATIA,
    },
    {
      type: "DEO",
      label: "DEO Dewas",
      id: "DEODEWAS",
      pass: districtCredentials.DEODEWAS,
    },
    {
      type: "DEO",
      label: "DEO Dhar",
      id: "DEODHAR",
      pass: districtCredentials.DEODHAR,
    },
    {
      type: "DEO",
      label: "DEO Dindori",
      id: "DEODINDORI",
      pass: districtCredentials.DEODINDORI,
    },
    {
      type: "DEO",
      label: "DEO Guna",
      id: "DEOGUNA",
      pass: districtCredentials.DEOGUNA,
    },
    {
      type: "DEO",
      label: "DEO Gwalior",
      id: "DEOGWALIOR",
      pass: districtCredentials.DEOGWALIOR,
    },
    {
      type: "DEO",
      label: "DEO Harda",
      id: "DEOHARDA",
      pass: districtCredentials.DEOHARDA,
    },
    {
      type: "DEO",
      label: "DEO Indore",
      id: "DEOINDORE",
      pass: districtCredentials.DEOINDORE,
    },
    {
      type: "DEO",
      label: "DEO Jabalpur",
      id: "DEOJABALPUR",
      pass: districtCredentials.DEOJABALPUR,
    },
    {
      type: "DEO",
      label: "DEO Jhabua",
      id: "DEOJHABUA",
      pass: districtCredentials.DEOJHABUA,
    },
    {
      type: "DEO",
      label: "DEO Katni",
      id: "DEOKATNI",
      pass: districtCredentials.DEOKATNI,
    },
    {
      type: "DEO",
      label: "DEO Khandwa",
      id: "DEOKHANDWA",
      pass: districtCredentials.DEOKHANDWA,
    },
    {
      type: "DEO",
      label: "DEO Khargone",
      id: "DEOKHARGONE",
      pass: districtCredentials.DEOKHARGONE,
    },
    {
      type: "DEO",
      label: "DEO Mandla",
      id: "DEOMANDLA",
      pass: districtCredentials.DEOMANDLA,
    },
    {
      type: "DEO",
      label: "DEO Mandsaur",
      id: "DEOMANDSAUR",
      pass: districtCredentials.DEOMANDSAUR,
    },
    {
      type: "DEO",
      label: "DEO Morena",
      id: "DEOMORENA",
      pass: districtCredentials.DEOMORENA,
    },
    {
      type: "DEO",
      label: "DEO Narmadapuram",
      id: "DEONARMADAPURAM",
      pass: districtCredentials.DEONARMADAPURAM,
    },
    {
      type: "DEO",
      label: "DEO Narsinghpur",
      id: "DEONARSINGHPUR",
      pass: districtCredentials.DEONARSINGHPUR,
    },
    {
      type: "DEO",
      label: "DEO Neemuch",
      id: "DEONEEMUCH",
      pass: districtCredentials.DEONEEMUCH,
    },
    {
      type: "DEO",
      label: "DEO Niwari",
      id: "DEONIWARI",
      pass: districtCredentials.DEONIWARI,
    },
    {
      type: "DEO",
      label: "DEO Panna",
      id: "DEOPANNA",
      pass: districtCredentials.DEOPANNA,
    },
    {
      type: "DEO",
      label: "DEO Raisen",
      id: "DEORAISEN",
      pass: districtCredentials.DEORAISEN,
    },
    {
      type: "DEO",
      label: "DEO Rajgarh",
      id: "DEORAJGARH",
      pass: districtCredentials.DEORAJGARH,
    },
    {
      type: "DEO",
      label: "DEO Ratlam",
      id: "DEORATLAM",
      pass: districtCredentials.DEORATLAM,
    },
    {
      type: "DEO",
      label: "DEO Rewa",
      id: "DEOREWA",
      pass: districtCredentials.DEOREWA,
    },
    {
      type: "DEO",
      label: "DEO Sagar",
      id: "DEOSAGAR",
      pass: districtCredentials.DEOSAGAR,
    },
    {
      type: "DEO",
      label: "DEO Satna",
      id: "DEOSATNA",
      pass: districtCredentials.DEOSATNA,
    },
    {
      type: "DEO",
      label: "DEO Sehore",
      id: "DEOSEHORE",
      pass: districtCredentials.DEOSEHORE,
    },
    {
      type: "DEO",
      label: "DEO Seoni",
      id: "DEOSEONI",
      pass: districtCredentials.DEOSEONI,
    },
    {
      type: "DEO",
      label: "DEO Shahdol",
      id: "DEOSHAHDOL",
      pass: districtCredentials.DEOSHAHDOL,
    },
    {
      type: "DEO",
      label: "DEO Shajapur",
      id: "DEOSHAJAPUR",
      pass: districtCredentials.DEOSHAJAPUR,
    },
    {
      type: "DEO",
      label: "DEO Sheopur",
      id: "DEOSHEOPUR",
      pass: districtCredentials.DEOSHEOPUR,
    },
    {
      type: "DEO",
      label: "DEO Shivpuri",
      id: "DEOSHIVPURI",
      pass: districtCredentials.DEOSHIVPURI,
    },
    {
      type: "DEO",
      label: "DEO Sidhi",
      id: "DEOSIDHI",
      pass: districtCredentials.DEOSIDHI,
    },
    {
      type: "DEO",
      label: "DEO Singrauli",
      id: "DEOSINGRAULI",
      pass: districtCredentials.DEOSINGRAULI,
    },
    {
      type: "DEO",
      label: "DEO Tikamgarh",
      id: "DEOTIKAMGARH",
      pass: districtCredentials.DEOTIKAMGARH,
    },
    {
      type: "DEO",
      label: "DEO Ujjain",
      id: "DEOUJJAIN",
      pass: districtCredentials.DEOUJJAIN,
    },
    {
      type: "DEO",
      label: "DEO Umaria",
      id: "DEOUMARIA",
      pass: districtCredentials.DEOUMARIA,
    },
    {
      type: "DEO",
      label: "DEO Vidisha",
      id: "DEOVIDISHA",
      pass: districtCredentials.DEOVIDISHA,
    },
    {
      type: "DEO",
      label: "DEO Pandhurna",
      id: "DEOPANDHURNA",
      pass: districtCredentials.DEOPANDHURNA,
    },
    {
      type: "DEO",
      label: "DEO Maihar",
      id: "DEOMAIHAR",
      pass: districtCredentials.DEOMAIHAR,
    },
    {
      type: "DEO",
      label: "DEO Mauganj",
      id: "DEOMAUGANJ",
      pass: districtCredentials.DEOMAUGANJ,
    },
  ];
  const _0x365f22 =
    _0x21e0d2 === "all"
      ? _0x52c3a4
      : _0x21e0d2 === "dpi"
        ? _0x52c3a4.filter((_0xe5f177) => _0xe5f177.type === "DPI")
        : _0x21e0d2 === "jd"
          ? _0x52c3a4.filter((_0x361b89) => _0x361b89.type === "JD")
          : _0x52c3a4.filter((_0x3172af) => _0x3172af.type === "DEO");
  renderDistPassRows(_0x365f22);
}
function renderDistPassRows(_0x15ad9b) {
  const _0x22a0e7 = document.getElementById("distPassTableBody");
  const _0x276a66 = {
    DPI: "#c62828",
    JD: "#1565c0",
    DEO: "#2e7d32",
  };
  const _0x55bce0 = {
    DPI: "#ffebee",
    JD: "#e3f2fd",
    DEO: "#e8f5e9",
  };
  const _0x428913 = {
    DPI: "#c62828",
    JD: "#1565c0",
    DEO: "#2e7d32",
  };
  if (!_0x15ad9b.length) {
    _0x22a0e7.innerHTML =
      '<div style="grid-column:1/-1;padding:30px;text-align:center;color:#999;font-size:13px;">Koi result nahi mila 🔍</div>';
    return;
  }
  _0x22a0e7.innerHTML = _0x15ad9b
    .map(
      (_0xc660a6, _0x5cca05) =>
        '\n<div data-id="' +
        _0xc660a6.id +
        '" data-label="' +
        _0xc660a6.label.toUpperCase() +
        '"\nstyle="background:white;border-radius:10px;border:1.5px solid ' +
        _0x428913[_0xc660a6.type] +
        ';\npadding:14px 16px;box-shadow:0 2px 8px rgba(0,0,0,.07);transition:.2s;">\n<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">\n<span style="background:' +
        _0x55bce0[_0xc660a6.type] +
        ";color:" +
        _0x276a66[_0xc660a6.type] +
        ';padding:2px 9px;\nborder-radius:4px;font-size:10px;font-weight:800;">' +
        _0xc660a6.type +
        '</span>\n<span style="font-size:10px;color:#bbb;font-weight:600;">#' +
        (_0x5cca05 + 1) +
        '</span>\n</div>\n<div style="font-size:13px;font-weight:700;color:#002e5b;margin-bottom:2px;">' +
        _0xc660a6.label +
        '</div>\n<div style="font-size:10px;color:#999;margin-bottom:12px;font-family:monospace;">' +
        _0xc660a6.id +
        '</div>\n<div style="background:#f0f4ff;border-radius:7px;padding:10px 12px;text-align:center;margin-bottom:10px;">\n<div style="font-size:10px;color:#888;font-weight:600;margin-bottom:4px;">PASSWORD</div>\n<div id="pw_' +
        _0xc660a6.id +
        '" style="font-family:monospace;font-size:22px;font-weight:900;\ncolor:#002e5b;letter-spacing:6px;">••••</div>\n</div>\n<div style="display:flex;gap:6px;">\n<button onclick="togglePassVis(\'' +
        _0xc660a6.id +
        "','" +
        _0xc660a6.pass +
        '\')"\nstyle="flex:1;padding:7px;border:1.5px solid #ccc;border-radius:6px;cursor:pointer;\nbackground:white;color:#555;font-size:11px;font-weight:700;">\n👁 Show/Hide\n</button>\n<button onclick="copyDistPass(\'' +
        _0xc660a6.pass +
        "','" +
        _0xc660a6.id +
        '\')" id="cpbtn_' +
        _0xc660a6.id +
        '"\nstyle="flex:1;padding:7px;border:none;border-radius:6px;cursor:pointer;\nbackground:#1565c0;color:white;font-size:11px;font-weight:700;">\n📋 Copy\n</button>\n</div>\n<div style="margin-top:8px;">\n<button onclick="openEditPassword(\'' +
        _0xc660a6.id +
        "','" +
        _0xc660a6.type +
        '\')"\nstyle="width:100%;padding:8px;border:none;border-radius:6px;cursor:pointer;\nbackground:linear-gradient(135deg,' +
        _0x276a66[_0xc660a6.type] +
        "," +
        (_0xc660a6.type === "DPI"
          ? "#b71c1c"
          : _0xc660a6.type === "JD"
            ? "#0d47a1"
            : "#1b5e20") +
        ');\ncolor:white;font-size:11px;font-weight:700;">\n✏️ Edit ' +
        _0xc660a6.type +
        " Password\n</button>\n</div>\n</div>\n",
    )
    .join("");
}
function togglePassVis(_0x507023, _0xccdb57) {
  const _0x4c15b7 = document.getElementById("pw_" + _0x507023);
  if (!_0x4c15b7) {
    return;
  }
  _0x4c15b7.textContent = _0x4c15b7.textContent === "••••" ? _0xccdb57 : "••••";
}
function copyDistPass(_0x4483f0, _0x54dabd) {
  navigator.clipboard
    .writeText(_0x4483f0)
    .then(() => {
      const _0x527e99 = document.getElementById("cpbtn_" + _0x54dabd);
      if (_0x527e99) {
        _0x527e99.textContent = "✅ Copied!";
        _0x527e99.style.background = "#2e7d32";
        setTimeout(() => {
          _0x527e99.textContent = "📋 Copy";
          _0x527e99.style.background = "#1565c0";
        }, 1800);
      }
    })
    .catch(() => {
      const _0x6d86cd = document.createElement("textarea");
      _0x6d86cd.value = _0x4483f0;
      document.body.appendChild(_0x6d86cd);
      _0x6d86cd.select();
      document.execCommand("copy");
      document.body.removeChild(_0x6d86cd);
      const _0x11c756 = document.getElementById("cpbtn_" + _0x54dabd);
      if (_0x11c756) {
        _0x11c756.textContent = "✅ Copied!";
        _0x11c756.style.background = "#2e7d32";
        setTimeout(() => {
          _0x11c756.textContent = "📋 Copy";
          _0x11c756.style.background = "#1565c0";
        }, 1800);
      }
    });
}
function openDpiEditPassword() {
  if (window.currentUser !== "DPI") {
    alert("⛔ This option is only for DPI.");
    return;
  }
  const _0x212b21 = document.getElementById("dpiEditPassModal");
  if (_0x212b21) {
    _0x212b21.remove();
  }
  const _0x4c8c1b = document.createElement("div");
  _0x4c8c1b.id = "dpiEditPassModal";
  _0x4c8c1b.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:1000020;display:flex;align-items:center;justify-content:center;";
  _0x4c8c1b.innerHTML =
    '\n<div style="background:white;border-radius:12px;width:90%;max-width:380px;box-shadow:0 15px 50px rgba(0,0,0,.5);overflow:hidden;font-family:sans-serif;">\n<div style="background:linear-gradient(90deg,#b71c1c,#c62828);color:white;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">\n<b style="font-size:15px;">✏️ DPI Password Edit</b>\n<button onclick="document.getElementById(\'dpiEditPassModal\').remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;font-weight:bold;">✕</button>\n</div>\n<div style="padding:24px;">\n<p style="font-size:12px;color:#c62828;background:#ffebee;padding:8px 12px;border-radius:6px;margin:0 0 18px 0;font-weight:600;">⚠️ DPI password change karna ek sensitive action hai।</p>\n<label style="font-size:11px;font-weight:bold;color:#333;">नया PASSWORD</label>\n<input id="dpiNewPass" type="password"\nstyle="width:100%;padding:10px;margin:6px 0 14px 0;border:1.5px solid #ccc;border-radius:5px;font-size:14px;box-sizing:border-box;"\noninput="dpiPwStrengthCheck(this.value)" placeholder="Enter new password">\n<label style="font-size:11px;font-weight:bold;color:#333;">PASSWORD CONFIRM करें</label>\n<input id="dpiConfirmPass" type="password"\nstyle="width:100%;padding:10px;margin:6px 0 14px 0;border:1.5px solid #ccc;border-radius:5px;font-size:14px;box-sizing:border-box;"\nplaceholder="Re-enter password">\n<div style="background:#eee;border-radius:4px;height:6px;overflow:hidden;margin-bottom:4px;">\n<div id="dpiPwBar" style="height:100%;width:0%;border-radius:4px;transition:width 0.3s,background 0.3s;"></div>\n</div>\n<div id="dpiPwLabel" style="font-size:10px;color:#888;margin-bottom:14px;"></div>\n<div id="dpiEditPassErr" style="color:#c62828;font-size:11px;min-height:16px;margin-bottom:10px;font-weight:bold;"></div>\n<button onclick="saveDpiNewPassword()"\nstyle="width:100%;padding:12px;background:#b71c1c;color:white;border:none;border-radius:5px;font-weight:bold;cursor:pointer;font-size:13px;">\n💾 DPI Password Save करें\n</button>\n</div>\n</div>';
  document.body.appendChild(_0x4c8c1b);
  _0x4c8c1b.addEventListener("click", (_0x525aed) => {
    if (_0x525aed.target === _0x4c8c1b) {
      _0x4c8c1b.remove();
    }
  });
  setTimeout(() => document.getElementById("dpiNewPass").focus(), 100);
}
function dpiPwStrengthCheck(_0x4c3906) {
  const _0x57e15a = document.getElementById("dpiPwBar");
  const _0x5d3f87 = document.getElementById("dpiPwLabel");
  if (!_0x57e15a || !_0x5d3f87) {
    return;
  }
  let _0x5234a4 = 0;
  if (_0x4c3906.length >= 4) {
    _0x5234a4++;
  }
  if (_0x4c3906.length >= 6) {
    _0x5234a4++;
  }
  if (/[A-Z]/.test(_0x4c3906)) {
    _0x5234a4++;
  }
  if (/[0-9]/.test(_0x4c3906)) {
    _0x5234a4++;
  }
  if (/[^A-Za-z0-9]/.test(_0x4c3906)) {
    _0x5234a4++;
  }
  const _0x17399d = [
    {
      w: "0%",
      bg: "#eee",
      t: "",
    },
    {
      w: "20%",
      bg: "#e53935",
      t: "बहुत कमज़ोर",
    },
    {
      w: "40%",
      bg: "#f57c00",
      t: "कमज़ोर",
    },
    {
      w: "60%",
      bg: "#fbc02d",
      t: "ठीक है",
    },
    {
      w: "80%",
      bg: "#7cb342",
      t: "अच्छा",
    },
    {
      w: "100%",
      bg: "#2e7d32",
      t: "बहुत मज़बूत ✅",
    },
  ];
  const _0x59f341 = _0x17399d[_0x5234a4] || _0x17399d[0];
  _0x57e15a.style.width = _0x59f341.w;
  _0x57e15a.style.background = _0x59f341.bg;
  _0x5d3f87.innerText = _0x59f341.t;
  _0x5d3f87.style.color = _0x59f341.bg;
}
async function saveDpiNewPassword() {
  const _0x141448 = document.getElementById("dpiNewPass").value.trim();
  const _0x3aec92 = document.getElementById("dpiConfirmPass").value.trim();
  const _0x3c3eef = document.getElementById("dpiEditPassErr");
  if (!_0x141448 || _0x141448.length < 4) {
    _0x3c3eef.innerHTML = "❌ Password must be at least 4 characters.";
    return;
  }
  if (_0x141448 !== _0x3aec92) {
    _0x3c3eef.innerHTML = "❌ Passwords do not match.";
    return;
  }
  const _0x4093c4 = "msErp_customPasswords";
  const _0x4a50e3 = JSON.parse(localStorage.getItem(_0x4093c4) || "{}");
  const _0xd9e435 = _0x4a50e3.DPI || districtCredentials.DPI || "(default)";
  _0x4a50e3.DPI = _0x141448;
  localStorage.setItem(_0x4093c4, JSON.stringify(_0x4a50e3));
  districtCredentials.DPI = _0x141448;
  _0x3c3eef.innerHTML =
    '<span style="color:#1565c0;font-weight:bold;">⏳ Saving to cloud...</span>';
  await _savePasswordToCloud("DPI", _0x141448);
  try {
    await supabaseClient
      .from("users")
      .update({
        password: _0x141448,
      })
      .eq("userid", "DPI");
    console.log("✅ users table updated for DPI");
  } catch (_0x534f91) {
    console.warn("users table update failed:", _0x534f91);
  }
  if (typeof auditLog === "function") {
    auditLog("DPI_PASSWORD_CHANGED", "DPI password changed by DPI admin");
  }
  _sbLogPwReset("DPI", _0xd9e435, _0x141448, "DPI");
  const _0x2f113b = "dpi_pw_reset_log";
  const _0x45ed1e = JSON.parse(localStorage.getItem(_0x2f113b) || "[]");
  _0x45ed1e.unshift({
    userId: "DPI",
    dateTime: new Date().toLocaleString("en-IN", {
      hour12: true,
    }),
    timestamp: Date.now(),
    resetBy: "DPI (Self)",
    oldPass: _0xd9e435,
    newPass: _0x141448,
  });
  localStorage.setItem(_0x2f113b, JSON.stringify(_0x45ed1e));
  _0x3c3eef.innerHTML =
    '<span style="color:#2e7d32;font-weight:bold;">✅ DPI Password saved to cloud!</span>';
  setTimeout(() => {
    document.getElementById("dpiEditPassModal")?.remove();
    buildDistPassTable("dpi");
    showDistPassTab("dpi");
  }, 1500);
}
function openEditPassword(_0x4d5fd8, _0x2bbb89) {
  if (window.currentUser !== "DPI" && window.currentUser !== _0x4d5fd8) {
    alert("⛔ You can only edit your own password.");
    return;
  }
  const _0x39b685 = {
    DPI: "#b71c1c",
    JD: "#0d47a1",
    DEO: "#1b5e20",
  };
  const _0xa240b6 = {
    DPI: "linear-gradient(90deg,#b71c1c,#c62828)",
    JD: "linear-gradient(90deg,#0d47a1,#1565c0)",
    DEO: "linear-gradient(90deg,#1b5e20,#2e7d32)",
  };
  const _0x251311 = _0x39b685[_0x2bbb89] || "#333";
  const _0xe58905 = _0xa240b6[_0x2bbb89] || "linear-gradient(90deg,#333,#555)";
  const _0x506dd5 = document.getElementById("uniEditPassModal");
  if (_0x506dd5) {
    _0x506dd5.remove();
  }
  const _0x1669aa = document.createElement("div");
  _0x1669aa.id = "uniEditPassModal";
  _0x1669aa.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:1000020;display:flex;align-items:center;justify-content:center;";
  _0x1669aa.innerHTML =
    '\n<div style="background:white;border-radius:12px;width:90%;max-width:380px;box-shadow:0 15px 50px rgba(0,0,0,.5);overflow:hidden;font-family:sans-serif;">\n<div style="background:' +
    _0xe58905 +
    ';color:white;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">\n<b style="font-size:15px;">✏️ ' +
    _0x2bbb89 +
    ' Password Edit</b>\n<button onclick="document.getElementById(\'uniEditPassModal\').remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;font-weight:bold;">✕</button>\n</div>\n<div style="padding:24px;">\n<p style="font-size:12px;color:' +
    _0x251311 +
    ";background:#f9f9f9;border-left:4px solid " +
    _0x251311 +
    ';padding:8px 12px;border-radius:4px;margin:0 0 10px 0;font-weight:600;">\n🔐 User: <span style="font-family:monospace;letter-spacing:1px;">' +
    _0x4d5fd8 +
    '</span>\n</p>\n<p style="font-size:12px;color:#888;background:#fff8e1;padding:8px 12px;border-radius:6px;margin:0 0 18px 0;font-weight:600;">⚠️ Password change karna ek sensitive action hai।</p>\n<label style="font-size:11px;font-weight:bold;color:#333;">नया PASSWORD</label>\n<input id="uniNewPass" type="password"\nstyle="width:100%;padding:10px;margin:6px 0 14px 0;border:1.5px solid #ccc;border-radius:5px;font-size:14px;box-sizing:border-box;"\noninput="uniPwStrengthCheck(this.value)" placeholder="Enter new password">\n<label style="font-size:11px;font-weight:bold;color:#333;">PASSWORD CONFIRM करें</label>\n<input id="uniConfirmPass" type="password"\nstyle="width:100%;padding:10px;margin:6px 0 14px 0;border:1.5px solid #ccc;border-radius:5px;font-size:14px;box-sizing:border-box;"\nplaceholder="Re-enter password">\n<div style="background:#eee;border-radius:4px;height:6px;overflow:hidden;margin-bottom:4px;">\n<div id="uniPwBar" style="height:100%;width:0%;border-radius:4px;transition:width 0.3s,background 0.3s;"></div>\n</div>\n<div id="uniPwLabel" style="font-size:10px;color:#888;margin-bottom:14px;"></div>\n<div id="uniEditPassErr" style="color:#c62828;font-size:11px;min-height:16px;margin-bottom:10px;font-weight:bold;"></div>\n<button onclick="saveUniPassword(\'' +
    _0x4d5fd8 +
    "','" +
    _0x2bbb89 +
    '\')"\nstyle="width:100%;padding:12px;background:' +
    _0x251311 +
    ';color:white;border:none;border-radius:5px;font-weight:bold;cursor:pointer;font-size:13px;">\n💾 ' +
    _0x4d5fd8 +
    " Password Save करें\n</button>\n</div>\n</div>";
  document.body.appendChild(_0x1669aa);
  _0x1669aa.addEventListener("click", (_0x5d212e) => {
    if (_0x5d212e.target === _0x1669aa) {
      _0x1669aa.remove();
    }
  });
  setTimeout(() => document.getElementById("uniNewPass").focus(), 100);
}
function uniPwStrengthCheck(_0x52d051) {
  const _0x37e987 = document.getElementById("uniPwBar");
  const _0x33e48a = document.getElementById("uniPwLabel");
  if (!_0x37e987 || !_0x33e48a) {
    return;
  }
  let _0x10d124 = 0;
  if (_0x52d051.length >= 4) {
    _0x10d124++;
  }
  if (_0x52d051.length >= 6) {
    _0x10d124++;
  }
  if (/[A-Z]/.test(_0x52d051)) {
    _0x10d124++;
  }
  if (/[0-9]/.test(_0x52d051)) {
    _0x10d124++;
  }
  if (/[^A-Za-z0-9]/.test(_0x52d051)) {
    _0x10d124++;
  }
  const _0x2752f9 = [
    {
      w: "0%",
      bg: "#eee",
      t: "",
    },
    {
      w: "20%",
      bg: "#e53935",
      t: "बहुत कमज़ोर",
    },
    {
      w: "40%",
      bg: "#f57c00",
      t: "कमज़ोर",
    },
    {
      w: "60%",
      bg: "#fbc02d",
      t: "ठीक है",
    },
    {
      w: "80%",
      bg: "#7cb342",
      t: "अच्छा",
    },
    {
      w: "100%",
      bg: "#2e7d32",
      t: "बहुत मज़बूत ✅",
    },
  ];
  const _0x46d549 = _0x2752f9[_0x10d124] || _0x2752f9[0];
  _0x37e987.style.width = _0x46d549.w;
  _0x37e987.style.background = _0x46d549.bg;
  _0x33e48a.innerText = _0x46d549.t;
  _0x33e48a.style.color = _0x46d549.bg;
}
async function saveUniPassword(_0xa77f00, _0x22cd53) {
  const _0x21943e = document.getElementById("uniNewPass").value.trim();
  const _0x29c05b = document.getElementById("uniConfirmPass").value.trim();
  const _0x567692 = document.getElementById("uniEditPassErr");
  if (!_0x21943e || _0x21943e.length < 4) {
    _0x567692.innerHTML = "❌ Password must be at least 4 characters.";
    return;
  }
  if (_0x21943e !== _0x29c05b) {
    _0x567692.innerHTML = "❌ Passwords do not match.";
    return;
  }
  const _0x42a81d = "msErp_customPasswords";
  const _0x1dd34b = JSON.parse(localStorage.getItem(_0x42a81d) || "{}");
  const _0xa28238 =
    _0x1dd34b[_0xa77f00] || districtCredentials[_0xa77f00] || "(default)";
  _0x1dd34b[_0xa77f00] = _0x21943e;
  localStorage.setItem(_0x42a81d, JSON.stringify(_0x1dd34b));
  districtCredentials[_0xa77f00] = _0x21943e;
  if (_0x567692) {
    _0x567692.innerHTML =
      '<span style="color:#1565c0;font-weight:bold;">⏳ Saving to cloud...</span>';
  }
  await _savePasswordToCloud(_0xa77f00, _0x21943e);
  try {
    await supabaseClient
      .from("users")
      .update({
        password: _0x21943e,
      })
      .eq("userid", _0xa77f00);
    console.log("✅ users table updated for:", _0xa77f00);
  } catch (_0x40edcd) {
    console.warn("users table update failed:", _0x40edcd);
  }
  if (typeof auditLog === "function") {
    auditLog(
      _0x22cd53 + "_PASSWORD_CHANGED",
      _0xa77f00 + " password changed by " + (window.currentUser || "DPI"),
    );
  }
  _sbLogPwReset(_0xa77f00, _0xa28238, _0x21943e, window.currentUser || "DPI");
  const _0x567160 = "dpi_pw_reset_log";
  const _0x58e04e = JSON.parse(localStorage.getItem(_0x567160) || "[]");
  _0x58e04e.unshift({
    userId: _0xa77f00,
    dateTime: new Date().toLocaleString("en-IN", {
      hour12: true,
    }),
    timestamp: Date.now(),
    resetBy: window.currentUser || "DPI",
    oldPass: _0xa28238,
    newPass: _0x21943e,
  });
  localStorage.setItem(_0x567160, JSON.stringify(_0x58e04e));
  _0x567692.innerHTML =
    '<span style="color:#2e7d32;font-weight:bold;">✅ ' +
    _0xa77f00 +
    " Password saved to cloud!</span>";
  setTimeout(() => {
    document.getElementById("uniEditPassModal")?.remove();
    const _0x3db38b =
      _0x22cd53 === "DPI" ? "dpi" : _0x22cd53 === "JD" ? "jd" : "deo";
    buildDistPassTable(_0x3db38b);
    showDistPassTab(_0x3db38b);
  }, 1500);
}
function filterDistPassTable(_0x57c56a) {
  const _0x21eba7 = _0x57c56a.trim().toUpperCase();
  const _0x290c38 = document.querySelectorAll("#distPassTableBody [data-id]");
  _0x290c38.forEach((_0x409f59) => {
    const _0x117976 = _0x409f59.dataset.id || "";
    const _0x5f1b84 = _0x409f59.dataset.label || "";
    _0x409f59.style.display =
      !_0x21eba7 ||
      _0x117976.includes(_0x21eba7) ||
      _0x5f1b84.includes(_0x21eba7)
        ? ""
        : "none";
  });
}
document
  .getElementById("districtPasswordPanel")
  .addEventListener("click", function (_0x24db69) {
    if (_0x24db69.target === this) {
      closeDistrictPasswordPanel();
    }
  });
