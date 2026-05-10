
// ═══════════════════════════════════════
// JS Block 1
// ═══════════════════════════════════════

(function() {
  'use strict';

  // ── 1. RIGHT-CLICK DISABLE ──
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, true);

  // ── 2. KEYBOARD SHORTCUTS BLOCK ──
  document.addEventListener('keydown', function(e) {
    var k = e.key || '';
    var ctrl = e.ctrlKey || e.metaKey;
    var shift = e.shiftKey;

    // F12 — DevTools
    if (k === 'F12') { e.preventDefault(); return false; }

    // Ctrl+Shift+I — DevTools
    if (ctrl && shift && (k === 'I' || k === 'i')) { e.preventDefault(); return false; }

    // Ctrl+Shift+J — Console
    if (ctrl && shift && (k === 'J' || k === 'j')) { e.preventDefault(); return false; }

    // Ctrl+Shift+C — Inspect
    if (ctrl && shift && (k === 'C' || k === 'c')) { e.preventDefault(); return false; }

    // Ctrl+U — View Source
    if (ctrl && (k === 'U' || k === 'u')) { e.preventDefault(); return false; }

    // Ctrl+S — Save file
    if (ctrl && (k === 'S' || k === 's')) { e.preventDefault(); return false; }

    // Ctrl+A — Select All
    if (ctrl && (k === 'A' || k === 'a')) { e.preventDefault(); return false; }

    // Ctrl+C — Copy (block on body, not inputs)
    if (ctrl && (k === 'C' || k === 'c')) {
      var tag = (document.activeElement || {}).tagName || '';
      if (tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') {
        e.preventDefault(); return false;
      }
    }

    // Ctrl+P — Print
    if (ctrl && (k === 'P' || k === 'p')) { e.preventDefault(); return false; }

    // F5 / Ctrl+R — Refresh (allow normal use, block Ctrl+R on some browsers)
    // Uncomment below if you want to block refresh too:
    // if (k === 'F5' || (ctrl && (k === 'R' || k === 'r'))) { e.preventDefault(); return false; }
  }, true);

  // ── 3. TEXT SELECTION DISABLE ──
  document.addEventListener('selectstart', function(e) {
    var tag = (e.target || {}).tagName || '';
    if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
      e.preventDefault();
      return false;
    }
  }, true);

  // ── 4. DRAG DISABLE ──
  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
  }, true);

  // ── 5. DEVTOOLS DETECTION (size-based) ──
  var _devToolsOpen = false;
  setInterval(function() {
    var threshold = 160;
    var widthDiff  = window.outerWidth  - window.innerWidth  > threshold;
    var heightDiff = window.outerHeight - window.innerHeight > threshold;
    if ((widthDiff || heightDiff) && !_devToolsOpen) {
      _devToolsOpen = true;
      document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#0a1628;flex-direction:column;gap:16px;">'
        + '<div style="font-size:64px;">🔒</div>'
        + '<div style="color:#f0a500;font-size:24px;font-weight:800;font-family:sans-serif;">ACCESS RESTRICTED</div>'
        + '<div style="color:#ffffff;font-size:14px;font-family:sans-serif;opacity:0.8;">Developer Tools खोलना prohibited है।</div>'
        + '<div style="color:#94a3b8;font-size:12px;font-family:sans-serif;">© 2026 MS Gradation ERP | DPI Madhya Pradesh</div>'
        + '</div>';
    } else if (!widthDiff && !heightDiff) {
      _devToolsOpen = false;
    }
  }, 1000);

  // ── 6. CONSOLE WARNING ──
  setTimeout(function() {
    try {
      console.clear();
      console.log('%c⛔ STOP!', 'color:#e02424;font-size:48px;font-weight:900;');
      console.log('%cयह browser feature केवल developers के लिए है।\nMS Gradation ERP का code copy करना या inspect करना\nकानूनी अपराध है। © 2026 DPI Madhya Pradesh',
        'color:#f0a500;font-size:14px;font-weight:700;line-height:2;');
    } catch(err) {}
  }, 500);

  // ── 7. PRINT BLOCK ──
  window.addEventListener('beforeprint', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  });

  // ── 8. IFRAME EMBEDDING PREVENTION ──
  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }

})();


// ═══════════════════════════════════════
// JS Block 2
// ═══════════════════════════════════════

// ══ SAFE STORAGE — Edge Tracking Prevention workaround ══
(function() {
  var _memStore = {};
  function _safeLS() {
    try { localStorage.setItem('__test__','1'); localStorage.removeItem('__test__'); return localStorage; }
    catch(e) { return null; }
  }
  var _ls = _safeLS();
  window._safeStorage = {
    getItem: function(k) {
      if (_ls) { try { return _ls.getItem(k); } catch(e){} }
      return _memStore[k] !== undefined ? _memStore[k] : null;
    },
    setItem: function(k, v) {
      if (_ls) { try { _ls.setItem(k, v); } catch(e){} }
      _memStore[k] = v;
    },
    removeItem: function(k) {
      if (_ls) { try { _ls.removeItem(k); } catch(e){} }
      delete _memStore[k];
    }
  };
  // Patch global localStorage usage gracefully
  if (!_ls) {
    console.warn('⚠️ localStorage blocked (Edge Tracking Prevention). Using in-memory fallback.');
    try {
      Object.defineProperty(window, 'localStorage', {
        get: function() { return window._safeStorage; }
      });
    } catch(e) {}
  }
})();


// ═══════════════════════════════════════
// JS Block 3
// ═══════════════════════════════════════

function openUserManual() {
  var m = document.getElementById('userManualModal');
  m.style.display = 'flex';
  m.style.animation = 'pa-fade-in 0.25s ease forwards';
  umTab(0);
}
function closeUserManual() {
  document.getElementById('userManualModal').style.display = 'none';
}
function umTab(idx) {
  var panes = document.querySelectorAll('.um-pane');
  var tabs  = document.querySelectorAll('.um-tab');
  panes.forEach(function(p, i) { p.style.display = i === idx ? 'block' : 'none'; });
  tabs.forEach(function(t, i) {
    t.style.color        = i === idx ? '#1a237e' : '#64748b';
    t.style.borderBottom = i === idx ? '3px solid #3b82f6' : '3px solid transparent';
    t.style.fontWeight   = i === idx ? '700' : '600';
    t.style.background   = i === idx ? 'white' : 'none';
  });
}
document.getElementById('userManualModal').addEventListener('click', function(e) {
  if (e.target === this) closeUserManual();
});


// ═══════════════════════════════════════
// JS Block 4
// ═══════════════════════════════════════

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
field27: "Remark"
};
window.alert = function(msg) {
console.log("Blocked alert:", msg);
};
let keyTimer;
window.addEventListener('keydown', function(e) {
if (e.key && e.key.toLowerCase() === 'a' && !keyTimer) {
keyTimer = setTimeout(function() {
const lockActive = document.getElementById('lockScreen')?.style.display === 'flex';
if(!lockActive && window.currentUser !== 'DPI') return;
openDpiPasswordModal();
}, 2000);
}
});
window.addEventListener('keyup', function(e) {
if (e.key && e.key.toLowerCase() === 'a') { clearTimeout(keyTimer); keyTimer = null; }
});
function openDpiPasswordModal() {
const modal = document.getElementById('dpiPassModal');
modal.style.display = 'flex';
document.getElementById('dpiPassInput').value = '';
document.getElementById('dpiPassErr').textContent = '';
setTimeout(() => document.getElementById('dpiPassInput').focus(), 100);
}
function verifyDpiPass() {
const pwd = document.getElementById('dpiPassInput').value;
if(pwd !== (window._importPwd || '1782')) { // ✅ Runtime check
document.getElementById('dpiPassErr').textContent = '❌ Galat password!';
document.getElementById('dpiPassInput').value = '';
document.getElementById('dpiPassInput').focus();
return;
}
document.getElementById('dpiPassModal').style.display = 'none';
toggleDPI();
}
function onMaintToggleChange() {
const on     = document.getElementById('maintToggle').checked;
const slider = document.getElementById('maintToggleSlider');
const knob   = document.getElementById('maintToggleKnob');
const label  = document.getElementById('maintStatusLabel');
if(on) {
slider.style.background = '#f59e0b'; knob.style.left = '27px';
label.style.background = '#fef3c7'; label.style.color = '#92400e';
label.textContent = 'Status: ON — Maintenance चालू है';
} else {
slider.style.background = '#ccc'; knob.style.left = '3px';
label.style.background = '#f3f4f6'; label.style.color = '#6b7280';
label.textContent = 'Status: OFF';
}
}
function saveMaintSettings() {
const on  = document.getElementById('maintToggle').checked;
const msg = document.getElementById('maintMsgInput').value.trim();
if(on && !msg) { myAlert('Please enter the Maintenance message.'); return; }
const cfg = {
active:   on,
message:  msg,
startTime: document.getElementById('maintStartTime').value,
endTime:   document.getElementById('maintEndTime').value,
durationText: document.getElementById('maintDurationText').value.trim(),
forJD:  document.getElementById('maintForJD').checked,
forDEO: document.getElementById('maintForDEO').checked,
savedAt: new Date().toISOString()
};
localStorage.setItem('ms_maintenance', JSON.stringify(cfg));
window._maintCfg = cfg;
const dot = document.getElementById('maintActiveDot');
if(dot) dot.style.display = on ? 'block' : 'none';
checkMaintenanceStatus();
myAlert(on ? '🔧 Maintenance Mode ON! Maintenance screen will be shown to JD/DEO.' : '✅ Maintenance settings saved (Mode OFF).');
toggleDPI();
}
function turnOffMaintenance() {
const existing = JSON.parse(localStorage.getItem('ms_maintenance') || '{}');
existing.active = false;
localStorage.setItem('ms_maintenance', JSON.stringify(existing));
window._maintCfg = existing;
document.getElementById('maintToggle').checked = false;
onMaintToggleChange();
const dot = document.getElementById('maintActiveDot');
if(dot) dot.style.display = 'none';
const ms = document.getElementById('maintenanceScreen');
if(ms) ms.style.display = 'none';
myAlert('✅ Maintenance Mode has been turned OFF.');
toggleDPI();
}
let _maintCountdownTimer = null;
function checkMaintenanceStatus() {
const cu = window.currentUser || null;
if(cu === 'DPI') { const ms=document.getElementById('maintenanceScreen'); if(ms) ms.style.display='none'; return; }
const cfg = window._maintCfg || JSON.parse(localStorage.getItem('ms_maintenance') || 'null');
const ms = document.getElementById('maintenanceScreen');
if(!ms) return;
if(!cfg || !cfg.active) { ms.style.display = 'none'; return; }
const isJD  = cu && cu.startsWith('JD');
const isDEO = cu && cu.startsWith('DEO');
if((isJD && !cfg.forJD) || (isDEO && !cfg.forDEO)) { ms.style.display = 'none'; return; }
ms.style.display = 'flex';
document.getElementById('maintMsg').textContent = cfg.message || 'Portal पर maintenance कार्य चल रहा है।';
const tpBox = document.getElementById('maintTimePeriodBox');
const tpEl  = document.getElementById('maintTimePeriod');
const cdBox = document.getElementById('maintCountdownBox');
const cdEl  = document.getElementById('maintCountdown');
let tpParts = [];
if(cfg.startTime) tpParts.push('शुरू: ' + _fmtDT(cfg.startTime));
if(cfg.endTime)   tpParts.push('समाप्ति: ' + _fmtDT(cfg.endTime));
if(cfg.durationText) tpParts.push('अवधि: ' + cfg.durationText);
if(tpBox) tpBox.style.display = tpParts.length > 0 ? 'block' : 'none';
if(tpEl)  tpEl.innerHTML = tpParts.join('<br>');
if(_maintCountdownTimer) clearInterval(_maintCountdownTimer);
if(cfg.endTime && cdBox && cdEl) {
cdBox.style.display = 'block';
function _updateCD() {
const diff = new Date(cfg.endTime).getTime() - Date.now();
if(diff <= 0) { cdEl.textContent = 'जल्द ही उपलब्ध...'; clearInterval(_maintCountdownTimer); return; }
const h=Math.floor(diff/3600000), m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
cdEl.textContent = (h ? _p2(h)+' घण्टे ' : '') + _p2(m)+' मिनट '+_p2(s)+' सेकंड';
}
_updateCD();
_maintCountdownTimer = setInterval(_updateCD, 1000);
} else if(cdBox) cdBox.style.display = 'none';
}
function _fmtDT(dtStr) {
if(!dtStr) return '';
try { const d = new Date(dtStr); return d.toLocaleDateString('hi-IN') + ' ' + d.toLocaleTimeString('hi-IN',{hour:'2-digit',minute:'2-digit',hour12:true}); } catch(e){ return dtStr; }
}
function _p2(n) { return String(n).padStart(2,'0'); }
function loadMaintPanelState() {
const cfg = window._maintCfg || JSON.parse(localStorage.getItem('ms_maintenance') || 'null');
if(!cfg) return;
document.getElementById('maintToggle').checked = !!cfg.active;
onMaintToggleChange();
document.getElementById('maintMsgInput').value      = cfg.message || '';
document.getElementById('maintStartTime').value     = cfg.startTime || '';
document.getElementById('maintEndTime').value       = cfg.endTime || '';
document.getElementById('maintDurationText').value  = cfg.durationText || '';
if(cfg.forJD  !== undefined) document.getElementById('maintForJD').checked  = cfg.forJD;
if(cfg.forDEO !== undefined) document.getElementById('maintForDEO').checked = cfg.forDEO;
}
const MS_CUSTOM_PASS_KEY = 'msErp_customPasswords';
function _getEffectivePass(userId) {
const custom = JSON.parse(localStorage.getItem(MS_CUSTOM_PASS_KEY) || '{}');
return custom[userId] || districtCredentials[userId] || null;
}
function renderPwTable(q) {
q = (q || '').trim().toUpperCase();
const custom = JSON.parse(localStorage.getItem(MS_CUSTOM_PASS_KEY) || '{}');
const allUsers = Object.keys(districtCredentials);
const customUsers = Object.keys(custom).filter(u => !districtCredentials[u]);
const allKeys = [...allUsers, ...customUsers];
const filtered = q ? allKeys.filter(k => k.toUpperCase().includes(q)) : allKeys;
const container = document.getElementById('pwTableContainer');
if(!container) return;
if(!filtered.length) { container.innerHTML = '<div style="text-align:center;color:#999;padding:20px;">No results</div>'; return; }
container.innerHTML = filtered.map(userId => {
const pass = custom[userId] || districtCredentials[userId] || '(default)';
const isJD = userId.startsWith('JD');
const isDPI = userId === 'DPI';
// Sirf custom/new users delete ho sakte hain — default hardcoded users nahi
// Jo users pehle file mein hardcoded nahi the — wo delete ho sakte hain
const _hardcoded = {"DPI":1,"JDBHOPAL":1,"JDGWALIOR":1,"JDINDORE":1,"JDJABALPUR":1,"JDREWA":1,"JDSAGAR":1,"JDUJJAIN":1,"JDSHAHDOL":1,"JDNARMADAPURAM":1,"DEOAGARMALWA":1,"DEOALIRAJPUR":1,"DEOANUPPUR":1,"DEOASHOKNAGAR":1,"DEOBALAGHAT":1,"DEOBARWANI":1,"DEOBETUL":1,"DEOBHIND":1,"DEOBHOPAL":1,"DEOBURHANPUR":1,"DEOCHHATARPUR":1,"DEOCHHINDWARA":1,"DEODAMOH":1,"DEODATIA":1,"DEODEWAS":1,"DEODHAR":1,"DEODINDORI":1,"DEOGUNA":1,"DEOGWALIOR":1,"DEOHARDA":1,"DEOINDORE":1,"DEOJABALPUR":1,"DEOJHABUA":1,"DEOKATNI":1,"DEOKHANDWA":1,"DEOKHARGONE":1,"DEOMANDLA":1,"DEOMANDSAUR":1,"DEOMORENA":1,"DEONARMADAPURAM":1,"DEONARSINGHPUR":1,"DEONEEMUCH":1,"DEONIWARI":1,"DEOPANNA":1,"DEORAISEN":1,"DEORAJGARH":1,"DEORATLAM":1,"DEOREWA":1,"DEOSAGAR":1,"DEOSATNA":1,"DEOSEHORE":1,"DEOSEONI":1,"DEOSHAHDOL":1,"DEOSHAJAPUR":1,"DEOSHEOPUR":1,"DEOSHIVPURI":1,"DEOSIDHI":1,"DEOSINGRAULI":1,"DEOTIKAMGARH":1,"DEOUJJAIN":1,"DEOUMARIA":1,"DEOVIDISHA":1,"DEOPANDHURNA":1,"DEOMAIHAR":1,"DEOMAUGANJ":1};
const isCustom = !_hardcoded[userId];
const col = isDPI ? '#c62828' : isJD ? '#1565c0' : '#2e7d32';
return `<div style="display:grid;grid-template-columns:1fr 120px ${isCustom?'72px 68px':'72px'};align-items:center;gap:6px;padding:7px 0;border-bottom:1px solid #eee;">
<div>
<span style="font-size:11px;font-weight:700;color:${col};">${userId}</span>
<span style="font-size:9px;background:#f0f0f0;color:#666;padding:1px 6px;border-radius:3px;margin-left:6px;">${isDPI?'DPI':isJD?'JD':'DEO'}</span>
</div>
<div style="font-family:monospace;font-size:12px;color:#2e7d32;font-weight:600;">${pass}</div>
<button onclick="openAdminPwChange('${userId}')" style="padding:5px 9px;background:#002e5b;color:white;border:none;border-radius:4px;cursor:pointer;font-size:10px;font-weight:700;">✏️ Edit</button>
${isCustom ? `<button onclick="deleteUser('${userId}')" style="padding:5px 9px;background:#c62828;color:white;border:none;border-radius:4px;cursor:pointer;font-size:10px;font-weight:700;">🗑️ Del</button>` : ''}
</div>`;
}).join('');
}
function filterPwTable(val) { renderPwTable(val); }
async function deleteUser(userId) {
  if(window.currentUser !== 'DPI') { myAlert('⛔ Only DPI can delete users.'); return; }
  if(!confirm(`⚠️ "${userId}" ko delete karna chahte ho?\nYe action undo nahi hoga!`)) return;
  // Supabase se delete karo
  try {
    await supabaseClient.from('users').delete().eq('userid', userId);
  } catch(e) { console.warn('Supabase delete failed:', e); }
  // Local se bhi hatao
  const custom = JSON.parse(localStorage.getItem(MS_CUSTOM_PASS_KEY) || '{}');
  delete custom[userId];
  delete districtCredentials[userId];
  localStorage.setItem(MS_CUSTOM_PASS_KEY, JSON.stringify(custom));
  auditLog('USER_DELETED', 'User deleted: ' + userId + ' by DPI');
  renderPwTable(document.getElementById('pwSearchBox')?.value || '');
  myAlert('✅ User "' + userId + '" deleted successfully!');
}
function openAdminPwChange(userId) {
const target = document.getElementById('adminPwChangeTarget');
if(target) target.innerHTML = `User: <span style="color:#1565c0;font-family:monospace;">${userId}</span>`;
document.getElementById('adminNewPass').value = '';
document.getElementById('adminConfirmPass').value = '';
document.getElementById('adminPwMsg').innerHTML = '';
document.getElementById('adminNewPass').dataset.userId = userId;
document.getElementById('adminPwChangeModal').style.display = 'flex';
setTimeout(() => document.getElementById('adminNewPass').focus(), 100);
}
function saveAdminPwChange() {
const np = document.getElementById('adminNewPass');
const cp = document.getElementById('adminConfirmPass');
const msg = document.getElementById('adminPwMsg');
const userId = np.dataset.userId;
const newPass = np.value.trim();
const confirmPass = cp.value.trim();
if(!newPass || newPass.length < 4) { msg.innerHTML = '<span style="color:red;">❌ Password must be at least 4 characters.</span>'; return; }
if(newPass !== confirmPass) { msg.innerHTML = '<span style="color:red;">❌ Both passwords do not match.</span>'; return; }
const custom = JSON.parse(localStorage.getItem(MS_CUSTOM_PASS_KEY) || '{}');
const oldPass = custom[userId] || districtCredentials[userId] || '(default)';
custom[userId] = newPass;
localStorage.setItem(MS_CUSTOM_PASS_KEY, JSON.stringify(custom));
districtCredentials[userId] = newPass;
if (typeof _savePasswordToCloud === 'function') _savePasswordToCloud(userId, newPass); // ✅ Cloud sync
auditLog('ADMIN_PW_CHANGE', 'DPI changed password for: ' + userId);
const resetLog = JSON.parse(localStorage.getItem('dpi_pw_reset_log') || '[]');
resetLog.unshift({ userId, dateTime: new Date().toLocaleString('en-IN',{hour12:true}), timestamp: Date.now(), resetBy: window.currentUser||'DPI', oldPass, newPass });
localStorage.setItem('dpi_pw_reset_log', JSON.stringify(resetLog));
msg.innerHTML = '<span style="color:#2e7d32;font-weight:bold;">✅ Password successfully changed!</span>';
setTimeout(() => {
document.getElementById('adminPwChangeModal').style.display = 'none';
renderPwTable(document.getElementById('pwSearchBox').value);
}, 1400);
}
async function createNewUser() {
if(window.currentUser !== 'DPI') { myAlert('⛔ Only DPI can do this.'); return; }
const uidRaw = (document.getElementById('newUserId').value||'').trim().toUpperCase();
const pass   = (document.getElementById('newUserPass').value||'').trim();
const msg    = document.getElementById('newUserMsg');
if(!uidRaw) { msg.innerHTML='<span style="color:red;">❌ User ID cannot be empty.</span>'; return; }
if(uidRaw.length < 3) { msg.innerHTML='<span style="color:red;">❌ User ID must be at least 3 characters.</span>'; return; }
if(!pass || pass.length < 4) { msg.innerHTML='<span style="color:red;">❌ Password must be at least 4 characters.</span>'; return; }
const custom = JSON.parse(localStorage.getItem(MS_CUSTOM_PASS_KEY) || '{}');
if(districtCredentials[uidRaw] || custom[uidRaw]) {
msg.innerHTML='<span style="color:#b45309;">⚠️ This User ID already exists in the system.</span>'; return;
}
msg.innerHTML='<span style="color:#1565c0;font-weight:bold;">⏳ Saving to cloud...</span>';
// Sirf users table mein save karo (new user) — user_passwords mein nahi
try {
  const { error } = await supabaseClient
    .from('users')
    .upsert({ userid: uidRaw, password: pass, level: (document.getElementById('newUserLevel')?.value||'DEO'), location: (document.getElementById('newUserLocation')?.value||'').trim().toUpperCase() }, { onConflict: 'userid' });
  if(error) throw error;
  // Local mein bhi save karo
  custom[uidRaw] = pass;
  districtCredentials[uidRaw] = pass;
  localStorage.setItem(MS_CUSTOM_PASS_KEY, JSON.stringify(custom));
  auditLog('USER_CREATED', 'New user created: ' + uidRaw + ' by DPI');
  document.getElementById('newUserId').value = '';
  document.getElementById('newUserPass').value = '';
  msg.innerHTML = `<span style="color:#2e7d32;font-weight:bold;">✅ User "${uidRaw}" created! Har device pe kaam karega!</span>`;
  renderPwTable();
} catch(e) {
  msg.innerHTML=`<span style="color:red;">❌ Cloud save failed: ${e.message}</span>`;
}
}
function openImportExcelModal() {
const modal = document.getElementById('importExcelModal');
modal.style.display = 'flex';
document.getElementById('importExcelPassInput').value = '';
document.getElementById('importExcelPassErr').textContent = '';
setTimeout(() => document.getElementById('importExcelPassInput').focus(), 100);
}
function verifyImportExcelPass() {
const pwd = document.getElementById('importExcelPassInput').value;
if(pwd !== (window._importPwd || '1782')) { // ✅ Runtime check
document.getElementById('importExcelPassErr').textContent = '❌ Galat password!';
document.getElementById('importExcelPassInput').value = '';
document.getElementById('importExcelPassInput').focus();
return;
}
document.getElementById('importExcelModal').style.display = 'none';
document.getElementById('excelFile').click();
}
function handleTitleClick() {
if (window.currentUser !== 'DPI') {
const toast = document.createElement('div');
toast.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:100000;background:#1e293b;color:white;padding:11px 18px;border-radius:8px;box-shadow:0 6px 20px rgba(0,0,0,0.35);border-left:5px solid #f44336;font-size:13px;font-family:"Inter",sans-serif;max-width:320px;';
toast.innerHTML = '🔒 Title can only be edited by <b>DPI</b>.';
document.body.appendChild(toast);
setTimeout(() => { toast.style.opacity='0'; toast.style.transition='opacity 0.4s'; setTimeout(()=>toast.remove(),400); }, 3000);
return;
}
const span = document.getElementById('sheetTitleText');
const hint = document.getElementById('editTitleHint');
if (!span) return;
const current = span.textContent.trim();
const input = document.createElement('input');
input.type = 'text';
input.value = current;
input.style.cssText = 'width:90%;font-size:15px;font-weight:700;color:#002e5b;border:2px solid #2c7be5;border-radius:4px;padding:4px 10px;outline:none;font-family:inherit;text-align:center;';
span.replaceWith(input);
if(hint) hint.style.display = 'none';
input.focus();
input.select();
function saveTitle() {
const newTitle = input.value.trim() || current;
const newSpan = document.createElement('span');
newSpan.id = 'sheetTitleText';
newSpan.onclick = handleTitleClick;
newSpan.textContent = newTitle;
input.replaceWith(newSpan);
if(hint) hint.style.display = 'inline';
localStorage.setItem('ms_sheet_title', newTitle);
_broadcastTitleUpdate(newTitle);
}
input.addEventListener('blur', saveTitle);
input.addEventListener('keydown', function(e) {
if(e.key === 'Enter') { e.preventDefault(); saveTitle(); }
if(e.key === 'Escape') { input.value = current; saveTitle(); }
});
}
function _broadcastTitleUpdate(newTitle) {
if (!presenceChannel) return;
try {
presenceChannel.send({
type: 'broadcast',
event: 'title-update',
payload: { title: newTitle, user: _realtimeUser() }
});
} catch(e) { console.warn('Title broadcast failed:', e); }
}
function _applyRemoteTitleUpdate(newTitle) {
if (!newTitle) return;
localStorage.setItem('ms_sheet_title', newTitle);
const span = document.getElementById('sheetTitleText');
if (span && span.tagName !== 'INPUT') {
span.textContent = newTitle;
span.style.transition = 'background 0.3s';
span.style.background = '#fff9c4';
setTimeout(() => { span.style.background = ''; }, 1500);
}
const toast = document.createElement('div');
toast.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:100000;background:#1e293b;color:white;padding:11px 18px;border-radius:8px;box-shadow:0 6px 20px rgba(0,0,0,0.35);border-left:5px solid #4caf50;font-size:13px;font-family:"Inter",sans-serif;max-width:320px;';
toast.innerHTML = '📝 DPI ne title update kiya — reload ki zaroorat nahi!';
document.body.appendChild(toast);
setTimeout(() => { toast.style.opacity='0'; toast.style.transition='opacity 0.4s'; setTimeout(()=>toast.remove(),400); }, 4000);
}
function _updateTitleHintVisibility() {
const hint = document.getElementById('editTitleHint');
if (!hint) return;
hint.style.display = (window.currentUser === 'DPI') ? 'inline' : 'none';
}
(function restoreSavedTitle() {
const saved = localStorage.getItem('ms_sheet_title');
if(saved) {
const span = document.getElementById('sheetTitleText');
if(span) span.textContent = saved;
}
})();
function toggleOtherToolbar(e) {
e.stopPropagation();
const menu = document.getElementById('otherToolbarMenu');
menu.style.display = (menu.style.display === 'none' || !menu.style.display) ? 'block' : 'none';
}
function closeOtherToolbar() {
const menu = document.getElementById('otherToolbarMenu');
if(menu) menu.style.display = 'none';
}
document.addEventListener('click', function(e) {
const wrap = document.getElementById('otherToolbarWrap');
if(wrap && !wrap.contains(e.target)) closeOtherToolbar();
});
(function clockTick(){
const el = document.getElementById('clockDisplay');
if(el) el.textContent = new Date().toLocaleTimeString('hi-IN');
setTimeout(clockTick, 1000);
})();
(function updateDeadlineBadge() {
const badge = document.getElementById('deadlineBadge');
if (!badge) return;
const endStr = localStorage.getItem('config_end_date');
if (!endStr) { badge.style.display = 'none'; return; }
const now = new Date();
const today = now.toISOString().split('T')[0];
const end = new Date(endStr + 'T23:59:59');
const diffMs = end - now;
const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
const [y, m, d] = endStr.split('-');
const displayDate = `${d}-${m}-${y}`;
let color, bg, text, icon;
if (today > endStr) {
icon = '🔴'; color = '#fff'; bg = '#b71c1c';
text = `⏰ कार्य अवधि समाप्त हो गई! (${displayDate})`;
} else if (diffDays <= 3) {
icon = '🔴'; color = '#fff'; bg = '#c62828';
text = `⚠️ अंतिम तिथि: ${displayDate} (${diffDays} दिन बचे)`;
} else if (diffDays <= 7) {
icon = '🟠'; color = '#fff'; bg = '#e65100';
text = `⏳ अंतिम तिथि: ${displayDate} (${diffDays} दिन बचे)`;
} else {
icon = '🟢'; color = '#fff'; bg = '#2e7d32';
text = `📅 कार्य करने की अंतिम तिथि: ${displayDate}`;
}
badge.textContent = text;
badge.style.cssText = `
display:inline-block;
background:${bg};
color:${color};
font-size:11px;
font-weight:700;
padding:3px 10px;
border-radius:4px;
margin:0 8px;
letter-spacing:0.3px;
animation: ${diffDays <= 7 ? 'deadlineBlink 1s ease-in-out infinite' : 'none'};
-webkit-print-color-adjust:exact;
print-color-adjust:exact;
`;
setTimeout(updateDeadlineBadge, 60000);
})();
document.addEventListener('DOMContentLoaded', function() {
});
function toggleDPI() {
const p = document.getElementById('dpiControlPanel');
const isHidden = p.style.display === 'none' || !p.style.display;
p.style.display = isHidden ? 'flex' : 'none';
if (isHidden) {
document.getElementById('dpiStartDate').value = window._msStart || localStorage.getItem('config_start_date') || '';
document.getElementById('dpiEndDate').value   = window._msEnd   || localStorage.getItem('config_end_date')   || '';
switchDpiTab(1);
renderDpiUserCheckboxes();
loadMaintPanelState();
const cfg2 = window._maintCfg || JSON.parse(localStorage.getItem('ms_maintenance') || 'null');
const dot2 = document.getElementById('maintActiveDot');
if (dot2) dot2.style.display = (cfg2 && cfg2.active) ? 'block' : 'none';
}
}
function switchDpiTab(n) {
[1,2,3].forEach(i => {
const btn  = document.getElementById('dpiTab'+i);
const pane = document.getElementById('dpiPane'+i);
if(btn)  { btn.classList.toggle('active', i===n); }
if(pane) { pane.classList.toggle('active', i===n); }
});
if(n===2) renderPwTable();
}
function renderDpiUserCheckboxes() {
const overrides = JSON.parse(localStorage.getItem('ms_user_overrides') || '{}');
const jdKeys  = Object.keys(districtCredentials).filter(k => k.startsWith('JD'));
const deoKeys = Object.keys(districtCredentials).filter(k => k.startsWith('DEO'));
function buildList(keys, containerId) {
const container = document.getElementById(containerId);
if(!container) return;
container.innerHTML = keys.map(k => {
const ov = overrides[k];
const ovLabel   = ov ? `<span style="font-size:9px;color:#888;margin-left:4px;">(${ov.start||'?'} to ${ov.end||'?'})</span>` : '';
const closedLabel = (ov && ov.closed) ? `<span style="font-size:9px;background:#fee2e2;color:#991b1b;padding:1px 5px;border-radius:3px;margin-left:4px;">CLOSED</span>` : '';
return `<label style="display:flex;align-items:center;gap:6px;padding:5px 10px;cursor:pointer;border-bottom:1px solid #f5f5f5;font-size:11px;">
<input type="checkbox" class="dpi-user-cb" data-user="${k}" style="width:14px;height:14px;cursor:pointer;">
<span style="font-weight:600;color:#002e5b;">${k}</span>${ovLabel}${closedLabel}
</label>`;
}).join('');
}
buildList(jdKeys,  'jdCheckboxList');
buildList(deoKeys, 'deoCheckboxList');
}
function toggleUserGroup(id) {
const el = document.getElementById(id);
if(el) el.style.display = el.style.display === 'none' ? '' : 'none';
}
function dpiSelectAllUsers(val) {
document.querySelectorAll('.dpi-user-cb').forEach(cb => { cb.checked = val; });
}
function dpiSelectByType(type) {
document.querySelectorAll('.dpi-user-cb').forEach(cb => {
if(cb.dataset.user && cb.dataset.user.startsWith(type)) cb.checked = true;
});
}
function saveTimeLimit() {
const s = document.getElementById('dpiStartDate').value;
const e = document.getElementById('dpiEndDate').value;
if(!s || !e) { myAlert('Please select both global start and end dates.'); return; }
window._msStart = s; window._msEnd = e;
localStorage.setItem('config_start_date', s);
localStorage.setItem('config_end_date', e);
const ovStart = document.getElementById('overrideStartDate').value;
const ovEnd   = document.getElementById('overrideEndDate').value;
const checkedCBs = Array.from(document.querySelectorAll('.dpi-user-cb:checked'));
if(checkedCBs.length > 0) {
if(!ovStart || !ovEnd) { myAlert('Please select Override Start and End date for per-user override.'); return; }
const overrides = JSON.parse(localStorage.getItem('ms_user_overrides') || '{}');
checkedCBs.forEach(cb => { overrides[cb.dataset.user] = { start: ovStart, end: ovEnd }; });
localStorage.setItem('ms_user_overrides', JSON.stringify(overrides));
myAlert(`✅ Global dates saved!\n\n${checkedCBs.length} user(s) override applied:\n${ovStart} → ${ovEnd}`);
} else {
myAlert('✅ Global access dates saved!\nStart: ' + s + '\nEnd: ' + e);
}
checkLockStatus();
toggleDPI();
}
function clearUserOverrides() {
if(!confirm('Sabhi per-user overrides clear kar dein?')) return;
localStorage.removeItem('ms_user_overrides');
renderDpiUserCheckboxes();
myAlert('All per-user overrides have been cleared.');
}
function checkLockStatus() {
const cu = window.currentUser;
if (cu === 'DPI') { document.getElementById('lockScreen').style.display = 'none'; checkMaintenanceStatus(); return; }
if (!cu) { document.getElementById('lockScreen').style.display = 'none'; return; }
checkMaintenanceStatus();
if (document.getElementById('maintenanceScreen') && document.getElementById('maintenanceScreen').style.display === 'flex') return;
const overrides = JSON.parse(localStorage.getItem('ms_user_overrides') || '{}');
let startStr = localStorage.getItem('config_start_date');
let endStr   = localStorage.getItem('config_end_date');
if (overrides[cu]) { startStr = overrides[cu].start; endStr = overrides[cu].end; }
if (startStr && endStr) {
const now = new Date();
const today = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
if (today < startStr || today > endStr) {
document.getElementById('lockScreen').style.display = 'flex';
document.getElementById('lockMsg').innerText = `Your access period on this portal was ${startStr} to ${endStr}.`;
const panel = document.getElementById('dpiControlPanel'); panel.style.zIndex = '1000001'; document.body.appendChild(panel);
const passModal = document.getElementById('dpiPassModal'); passModal.style.zIndex = '1000002'; document.body.appendChild(passModal);
} else { document.getElementById('lockScreen').style.display = 'none'; }
}
}
document.addEventListener('DOMContentLoaded', checkLockStatus);
window.fullData = [];
window.filteredData = [];
const ROW_HEIGHT = 35;
let uploadedFileURL = "";
async function uploadDocument(file) {
  try {
    const _path = 'docs/' + Date.now() + '_' + file.name.replace(/[^a-zA-Z0-9._-]/g,'_');
    const { error: _err } = await supabaseClient.storage.from('documents').upload(_path, file, { upsert: true });
    if (_err) throw new Error(_err.message);
    const { data: _urlData } = supabaseClient.storage.from('documents').getPublicUrl(_path);
    uploadedFileURL = _urlData.publicUrl;
    console.log("✅ Cloudinary upload:", uploadedFileURL);
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    myAlert("❌ Upload failed: " + err.message);
  }
}
function getStatusHtml(row) {
let remarks = row[26] || "";
let statusText = "Verified";
let statusColor = "#27ae60";
if (remarks.toLowerCase().includes("pending") || !row[2]) {
statusText = "Incomplete";
statusColor = "#e74c3c";
}
return `<span style="background: ${statusColor}; color: white; padding: 2px 6px; border-radius: 3px; font-weight: bold; font-size: 10px;">${statusText}</span>`;
}
let documentStore = {};
function syncDataFromTable() {
let uniqueValues = new Set();
window.fullData.forEach(row => {
let val = row['field' + (parseInt(colIdx) + 1)] || "";
val = val.trim();
if(val && val !== "-" && val !== "NIL") {
uniqueValues.add(val);
}
});
gradationData = Array.from(rows).map(row => {
return Array.from(row.cells).map(cell => cell.innerText);
});
}
function validateForm() {
const allFields = [];
let missing = false;
for(let i = 1; i <= 27; i++){
const el = document.getElementById('in'+i);
let val = el ? el.value.trim() : "";
if(i === 1 || i === 2) continue;
if(i === 19){
const mode = document.getElementById('in19mode').value;
if(mode === "NIL") continue;
if(val === "") missing = true;
}
else if(i === 24 || i === 25 || i === 26){
const f23 = document.getElementById('in23').value;
if(f23 === "YES" && val === "") missing = true;
}
else{
if(val === "") missing = true;
}
}
if(missing){
showCustomAlert("All fields are mandatory!");
return false;
}
return true;
}
function handleUPPLogic() {
const f23 = document.getElementById('in23').value;
const f24 = document.getElementById('in24');
const f25 = document.getElementById('in25');
const f26 = document.getElementById('in26');
if (f23 === "NO" || f23 === "") {
f24.value = "";
f25.value = "";
f26.selectedIndex = 0;
f24.readOnly = true;
f25.readOnly = true;
f26.disabled = true;
[f24, f25, f26].forEach(el => {
el.style.pointerEvents = "none";
el.style.backgroundColor = "#bdc3c7";
el.style.cursor = "not-allowed";
});
} else {
f24.readOnly = false;
f25.readOnly = false;
f26.disabled = false;
[f24, f25, f26].forEach(el => {
el.style.pointerEvents = "auto";
el.style.backgroundColor = "#fff";
el.style.cursor = "pointer";
});
}
}
function openUpdateLog(){
myAlert("Update Log feature not added yet.");
}
function calculateSeniority() {
const f14 = document.getElementById('in14').value;
const f16 = document.getElementById('in16').value;
const f17 = document.getElementById('in17').value;
const f19 = document.getElementById('in19').value;
const seniorityField = document.getElementById('in18');
const dates = [f14, f16, f17, f19]
.filter(d => d && d !== "NIL" && d !== "NO")
.map(d => new Date(d));
if(dates.length) {
const maxDate = new Date(Math.max(...dates));
seniorityField.value = maxDate.toISOString().split("T")[0];
}
}
// ✅ Passwords removed — Edge Function handles auth
const districtCredentials = {}; // Empty — server se aayega
async function checkLogin() {
const user = document.getElementById('userField').value.trim().toUpperCase();
const pass = document.getElementById('passField').value.trim();
const errorDiv = document.getElementById('loginError');

// Block check (local)
const blockKey = 'loginBlock_' + user;
const attemptsKey = 'loginAttempts_' + user;
const blockData = JSON.parse(localStorage.getItem(blockKey) || 'null');
if (blockData) {
const remaining = Math.ceil((blockData.until - Date.now()) / 1000);
if (remaining > 0) {
errorDiv.innerText = `🔒 Account blocked! Try again after ${remaining}s.`;
return;
} else {
localStorage.removeItem(blockKey);
localStorage.removeItem(attemptsKey);
}
}

errorDiv.innerText = '⏳ Verifying...';

// ✅ Edge Function se login — password browser mein nahi aata
try {
  const res = await apiLogin(user, pass);
  localStorage.removeItem(attemptsKey);
  localStorage.removeItem(blockKey);
  document.getElementById('loginOverlay').style.display = 'none';
  window.currentUser = res.userId;
  window.currentLevel = res.level;
  const _ub = document.getElementById('userBadge');
  if(_ub){ _ub.textContent='👤 '+res.userId; _ub.style.display='inline-block'; }
  securityResetTimer();
  auditLog('LOGIN', 'User logged in via Edge Function');
  if (typeof initRealtime === 'function') initRealtime();
  if (typeof checkLockStatus === 'function') checkLockStatus();
} catch(e) {
  let attempts = parseInt(localStorage.getItem(attemptsKey) || '0') + 1;
  localStorage.setItem(attemptsKey, attempts);
  if (attempts >= 3) {
    localStorage.setItem(blockKey, JSON.stringify({ until: Date.now() + 5 * 60 * 1000 }));
    localStorage.removeItem(attemptsKey);
    errorDiv.innerText = `🔒 3 wrong attempts! Account blocked for 5 minutes.`;
  } else {
    errorDiv.innerText = `❌ INVALID USER ID OR PASSWORD! (${attempts}/3 attempts)`;
  }
}
}
const colConfig = [
{ name: "S.No.", class: "col-xs" },
{ name: "G.N.", class: "col-xs" },
{ name: "Unique ID", class: "col-sm" },
{ name: "Name", class: "col-lg" },
{ name: "Category", class: "col-sm" },
{ name: "GENDER", class: "col-sm" },
{ name: "Date of Birth", class: "col-md" },
{ name: "Mode of Appointment", class: "col-md" },
{ name: "UG Subject as per appointment and Promotion", class: "col-lg" },
{ name: "Professional Qualification", class: "col-lg" },
{ name: "PG Qualification", class: "col-lg" },
{ name: "PG Subject", class: "col-lg" },
{ name: "Home District", class: "col-lg" },
{ name: "Date of First Appointment", class: "col-md" },
{ name: "First appointment Designation", class: "col-lg" },
{ name: "Date of Appointment in Adhyapak by promotion If any", class: "col-md" },
{ name: "Date of Appointment in present cadre", class: "col-md" },
{ name: "Date of seniority in present cadre", class: "col-md" },
{ name: "Inter division Transfer Date", class: "col-md" },
{ name: "Present Posting Place", class: "col-xl" },
{ name: "UDISE Code", class: "col-md" },
{ name: "Present Posting District", class: "col-lg" },
{ name: "उच्च पद पर ज्वाइन किया (YES OR NO)", class: "col-md" },
{ name: "उच्च पद प्रभार की शाला का नाम", class: "col-xl" },
{ name: "उच्च पद प्रभार की शाला का UDISE कोड", class: "col-md" },
{ name: "उच्च पद प्रभार का जिला", class: "col-lg" },
{ name: "Remark (Deputation or other issue etc)", class: "col-xl" },
{ name: "Status (New Entry/Updated)", class: "col-md" },
{ name: "Updated By / District / Date-Time", class: "col-lg" },
{ name: "View Document", class: "col-md" },
{ name: "Transfer Document", class: "col-md" }
];
const districts = [
"SELECT DISTRICT", "Agar Malwa", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal",
"Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna",
"Gwalior", "Harda", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla",
"Mandsaur", "Morena", "Narmadapuram", "Narsinghpur", "Neemuch", "Niwari", "Panna", "Raisen",
"Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur",
"Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"
];
let listZoom = 11; let formZoom = 12; let selectedRowElement = null;
window.onload = () => {
setupTableFilters();
document.getElementById("clearFiltersBtn").addEventListener("click", function () {
document.querySelectorAll("#filterRow input").forEach(input => {
input.value = "";
});
if (window.fullData && window.fullData.length > 0) {
window.filteredData = [...window.fullData];
renderVirtual();
}
});
document.getElementById('in23').addEventListener('change', handleUPPLogic);
const head = document.getElementById('tableHead');
colConfig.forEach(c => {
const th = document.createElement('th');
th.className = c.class;
th.innerText = c.name;
head.appendChild(th);
});
document.querySelectorAll('.district-list').forEach(dl => {
districts.forEach(d => {
let opt = document.createElement('option');
opt.value = d === "SELECT DISTRICT" ? "" : d;
opt.innerText = d;
dl.appendChild(opt);
});
});
const today = new Date().toISOString().split('T')[0];
document.querySelectorAll('.date-field').forEach(inp => {
inp.setAttribute('max', today);
inp.addEventListener('keydown', (e) => e.preventDefault());
inp.addEventListener('click', function() { if(this.showPicker) this.showPicker(); });
});
handleUPPLogic();
};
function setupTableFilters() {
const filterRow = document.getElementById('filterRow');
if (!filterRow) return;
for (let i = 0; i < 30; i++) {
const th = document.createElement('th');
const inp = document.createElement('input');
inp.type = "text";
inp.placeholder = "🔍";
inp.oninput = function() {
document.getElementById('tableBody').style.opacity = "0.5";
runAllFilters();
setTimeout(() => { document.getElementById('tableBody').style.opacity = "1"; }, 350);
};
th.appendChild(inp);
filterRow.appendChild(th);
}
}
let filterTimeout;
function runAllFilters() {
clearTimeout(filterTimeout);
filterTimeout = setTimeout(() => {
const filters = Array.from(document.getElementById('filterRow').getElementsByTagName('input'))
.map(i => i.value.toUpperCase());
const hasFilter = filters.some(f => f !== "");
if (!hasFilter) {
} else {
window.filteredData = window.fullData.filter(row => {
return filters.every((fVal, idx) => {
if (!fVal) return true;
let cellValue = String(row['field' + (idx + 1)] || "").toUpperCase();
return cellValue.includes(fVal);
});
});
}
renderVirtual();
}, 300);
}
function updateAutoSerialNumbers() {
const rows = document.querySelectorAll('#tableBody tr');
rows.forEach((row, index) => {
row.cells[0].innerText = index + 1;
});
}
function toggleMS(e, triggerEl, id) {
  if (e && e.stopPropagation) e.stopPropagation();

  // Close any open portal dropdown
  var existing = document.getElementById('ms-portal-dropdown');
  if (existing) {
    var srcId = existing.dataset.srcId;
    if (srcId) {
      var src = document.getElementById(srcId);
      if (src) src.appendChild(existing); // move back
      existing.style.display = 'none';
      existing.id = srcId;
      delete existing.dataset.srcId;
    }
    if (srcId === id) return; // toggle close
  }

  var el = document.getElementById(id);
  if (!el) return;

  var trigger = triggerEl || e.target.closest('.ms-container');
  if (!trigger) return;

  // Move el to body (portal) so no ancestor transform/overflow clips it
  el.dataset.srcId = id;
  el.id = 'ms-portal-dropdown';
  document.body.appendChild(el);

  // Calculate position using trigger's real viewport rect
  var rect = trigger.getBoundingClientRect();
  var dropMaxH = 260;
  var spaceBelow = window.innerHeight - rect.bottom - 8;
  var spaceAbove = rect.top - 8;

  el.style.position   = 'fixed';
  el.style.left       = rect.left + 'px';
  el.style.width      = Math.max(rect.width, 220) + 'px';
  el.style.zIndex     = '2147483647';
  el.style.maxHeight  = Math.min(dropMaxH, Math.max(spaceBelow, spaceAbove)) + 'px';
  el.style.overflowY  = 'auto';
  el.style.display    = 'block';
  el.style.background = 'white';
  el.style.border     = '1px solid #d4dce8';
  el.style.borderRadius = '0 0 8px 8px';
  el.style.boxShadow  = '0 12px 36px rgba(10,22,40,.25)';

  if (spaceBelow >= 120 || spaceBelow >= spaceAbove) {
    el.style.top    = (rect.bottom + 2) + 'px';
    el.style.bottom = 'auto';
    el.style.borderRadius = '0 0 8px 8px';
  } else {
    el.style.top    = 'auto';
    el.style.bottom = (window.innerHeight - rect.top + 2) + 'px';
    el.style.borderRadius = '8px 8px 0 0';
  }
}

function _closeMsPortal() {
  var el = document.getElementById('ms-portal-dropdown');
  if (!el) return;
  var srcId = el.dataset.srcId;
  if (srcId) {
    var origContainer = document.querySelector('[onclick*="\'' + srcId + '\'"]');
    if (origContainer) origContainer.appendChild(el);
    el.style.display = 'none';
    el.id = srcId;
    delete el.dataset.srcId;
  }
}
function restoreMSCheckboxes(num, val) {
  // Restore checkbox state from saved value (e.g. "B.Ed/D.Ed")
  var container = document.getElementById('ms' + num);
  var textEl    = document.getElementById('text' + num);
  var hiddenEl  = document.getElementById('in' + num);
  if (!container) return;

  // Uncheck all first
  container.querySelectorAll('input[type="checkbox"]').forEach(function(cb) {
    cb.checked = false;
  });

  if (!val || val === 'SELECT' || val === '') {
    // Empty/unset — show SELECT, save as NIL so mandatory validation passes
    if (textEl) textEl.innerText = 'SELECT';
    if (hiddenEl) hiddenEl.value = 'NIL';
    return;
  }
  if (val.toUpperCase() === 'NIL') {
    // Explicitly NIL — tick the NIL checkbox and show NIL
    if (textEl) textEl.innerText = 'NIL';
    if (hiddenEl) hiddenEl.value = 'NIL';
    var nilCb = container.querySelector('input[type="checkbox"][value="NIL"]');
    if (nilCb) nilCb.checked = true;
    return;
  }

  // Values stored as "B.Ed/D.Ed" — split by /
  var vals = val.toUpperCase().split('/').map(function(v){ return v.trim(); });
  var matched = [];

  container.querySelectorAll('input[type="checkbox"]').forEach(function(cb) {
    if (vals.includes(cb.value.toUpperCase())) {
      cb.checked = true;
      matched.push(cb.value);
    }
  });

  var display = matched.length > 0 ? matched.join('/') : val;
  if (textEl)   textEl.innerText  = display;
  if (hiddenEl) hiddenEl.value    = display;
}

function updateMS(num) {
// When portal is open, div is moved to body with id 'ms-portal-dropdown'
// and original id stored in dataset.srcId — check both locations
var container = document.getElementById('ms' + num);
if (!container) {
  var portal = document.getElementById('ms-portal-dropdown');
  if (portal && portal.dataset.srcId === 'ms' + num) container = portal;
}
const textDisplay = document.getElementById('text' + num);
const hiddenInput = document.getElementById('in' + num);
if (!container || !hiddenInput) return;
const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
let selectedValues = Array.from(checkboxes).map(cb => cb.value.toUpperCase());
if (selectedValues.length > 0) {
  // If NIL is selected, uncheck everything else and keep only NIL
  if (selectedValues.includes('NIL')) {
    container.querySelectorAll('input[type="checkbox"]').forEach(function(cb) {
      if (cb.value.toUpperCase() !== 'NIL') cb.checked = false;
    });
    hiddenInput.value = 'NIL';
    if (textDisplay) textDisplay.innerText = 'NIL';
  } else {
    const joinedValue = selectedValues.join('/');
    hiddenInput.value = joinedValue;
    if (textDisplay) textDisplay.innerText = joinedValue;
  }
} else {
  hiddenInput.value = 'NIL';
  if (textDisplay) textDisplay.innerText = 'SELECT';
}
}
function pasteExcel() {
const pw = prompt("Enter Password to Open Paste Zone:");
if (pw === "1782") {
document.getElementById('pasteZone').style.display = 'block';
document.getElementById('bulkInput').focus();
} else if (pw !== null) {
myAlert("❌ Invalid Password");
}
}
window.processBulkPaste = async function () {
const uploadDiv = document.getElementById("uploadStatus");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const textInput = document.getElementById("bulkInput");
const pasteBox = document.getElementById("pasteZone");
if (uploadDiv) uploadDiv.style.display = "block";
const textValue = textInput.value.trim();
if (!textValue) return alert("Paste data first!");
const rows = textValue
.replace(/\r/g, "")
.split(/\n(?=\d+\t)/);
const batchSize = 400;
let uploaded = 0;
let batch = [];
let map = new Map();
try {
for (let i = 0; i < rows.length; i++) {
if (i % 500 === 0) {
await new Promise(r => setTimeout(r, 0));
}
const cols = rows[i].split("\t").map(c => (c || "").trim());
const serial = (cols[0] || (i + 1)).toString().trim();
const originalId = (cols[2] || "").toUpperCase().trim();
const safeId = originalId || ("ROW_" + serial);
const rowKey = safeId + "_" + serial;
while (cols.length < 27) cols.push("");
const teacherData = {
uniqueId: safeId,
auditTrail: "",
status: "",
...Object.fromEntries(
cols.slice(0, 27).map((val, idx) => [
`field${idx + 1}`,
(val || "").trim().toUpperCase()
])
)
};
map.set(rowKey, {
unique_id: rowKey,
data: teacherData
});
if (map.size >= batchSize) {
batch = Array.from(map.values());
map.clear();
const { error } = await supabaseClient
.from("gradation_list")
.upsert(batch);
if (error) throw error;
uploaded += batch.length;
updateProgress(uploaded, rows.length);
}
}
if (map.size > 0) {
batch = Array.from(map.values());
const { error } = await supabaseClient
.from("gradation_list")
.upsert(batch);
if (error) throw error;
uploaded += batch.length;
updateProgress(uploaded, rows.length);
}
if (progressBar) {
progressBar.style.width = "100%";
progressBar.innerText = "100%";
progressBar.style.background = "green";
}
if (progressText) {
progressText.innerText = "✅ Upload Complete!";
}
await new Promise(r => setTimeout(r, 1200));
if (uploadDiv) uploadDiv.style.display = "none";
if (textInput) textInput.value = "";
if (pasteBox) pasteBox.style.display = "none";
alert(`🎉 Upload complete: ${uploaded} records`);
await loadData();
} catch (err) {
console.error("❌ Upload failed:", err);
alert("❌ Upload failed: " + err.message);
if (uploadDiv) uploadDiv.style.display = "none";
}
function updateProgress(done, total) {
const percent = Math.min((done / total) * 100, 100).toFixed(1);
if (progressBar) {
progressBar.style.width = percent + "%";
progressBar.innerText = percent + "%";
}
if (progressText) {
progressText.innerText = `Uploading... ${done} / ${total}`;
}
}
};
window.onclick = function(event) {
if (!event.target.closest('.ms-container') && !event.target.closest('#ms-portal-dropdown')) {
    _closeMsPortal();
  }
}
function autoDesignationLogic() {
const mode = document.getElementById('in8').value;
const apptDateStr = document.getElementById('in14').value;
const adhyapakEl = document.getElementById('in16');
const adhyapakDateStr = (adhyapakEl && adhyapakEl.value) ? adhyapakEl.value : "";
const desigField = document.getElementById('in15');
const adhyapakDateField = document.getElementById('in16');
const presentCadreField = document.getElementById('in17');
if (mode === "DIR") {
adhyapakDateField.type = "text";
adhyapakDateField.value = "NIL";
adhyapakDateField.setAttribute('readonly', 'true');
adhyapakDateField.style.backgroundColor = "var(--disabled-bg)";
if (apptDateStr) {
const apptDate = new Date(apptDateStr);
const threshold = new Date("2018-07-01");
desigField.value = (apptDate >= threshold) ? "MS" : "SHIKSHA KARMI-2/SSS-2";
} else { desigField.value = ""; }
presentCadreField.value = apptDateStr;
} else if (mode === "PRO") {
adhyapakDateField.type = "date";
if(adhyapakDateField.value === "NIL") adhyapakDateField.value = "";
adhyapakDateField.removeAttribute('readonly');
adhyapakDateField.style.backgroundColor = "#fff";
desigField.value = "SHIKSHA KARMI-3/SSS-3";
presentCadreField.value = adhyapakDateStr;
} else {
adhyapakDateField.type = "date";
adhyapakDateField.removeAttribute('readonly');
desigField.value = "";
presentCadreField.value = "";
}
calculateSeniority();
}
function handle18Mode(){
const mode = document.getElementById("in19mode").value;
const field = document.getElementById("in19");
if(mode === "NIL"){
field.value = "NIL";
field.type = "text";
field.readOnly = true;
field.style.background = "#bdc3c7";
field.style.width = "130px";
const box = document.getElementById("transferUploadWarningBox");
if(box) box.style.display = "none";
} else {
field.value = "";
field.type = "date";
field.readOnly = false;
field.style.background = "#fff";
field.style.width = "130px";
}
if (typeof calculateSeniority === "function") calculateSeniority();
}
function checkTransferUploadBox() {
const val = document.getElementById("in19").value;
const mode = document.getElementById("in19mode").value;
const box = document.getElementById("transferUploadWarningBox");
if (box) {
box.style.display = (val && val !== "NIL" && mode === "DATE") ? "block" : "none";
}
}
function updateTransferUploadStatus19(event) {
const file = event.target.files[0];
const nameDiv = document.getElementById("transferFileName19");
const uploadBox = document.getElementById("transferUploadBox19");
if (file) {
const MAX_TRANSFER_SIZE = 100 * 1024; // 100KB
if (file.size > MAX_TRANSFER_SIZE) {
myAlert("❌ Transfer Document size cannot exceed 100KB.\nYour file: " + (file.size / 1024).toFixed(1) + "KB\nPlease compress the file and upload again.");
event.target.value = "";
nameDiv.style.display = "none";
uploadBox.style.borderColor = "";
uploadBox.style.color = "";
uploadBox.textContent = "📤 Transfer Document Upload करें (PDF/JPG)";
return;
}
const reader = new FileReader();
reader.onload = function(e) {
window.transferFileURL19 = e.target.result;
};
reader.readAsDataURL(file);
nameDiv.textContent = "✅ " + file.name;
nameDiv.style.display = "block";
uploadBox.style.borderColor = "#2e7d32";
uploadBox.style.color = "#2e7d32";
uploadBox.textContent = "✅ दस्तावेज़ चुना गया — बदलने के लिए क्लिक करें";
}
}
function validateFieldGap() {
const dob = document.getElementById('in7');
const appt = document.getElementById('in14');
const adhyapak = document.getElementById('in16');
[dob, appt, adhyapak].forEach(el => el.classList.remove('invalid-field'));
let errors = [];
if (dob.value && appt.value) {
let d1 = new Date(dob.value); let d2 = new Date(appt.value);
let diff = (d2 - d1) / (1000 * 60 * 60 * 24 * 365.25);
if (diff < 18) {
dob.classList.add('invalid-field'); appt.classList.add('invalid-field');
errors.push("Age Difference Error!");
}
}
return errors;
}
function isDuplicateUniqueID(newID, currentRowElement) {
const rows = document.querySelectorAll('#tableBody tr');
let isDuplicate = false;
rows.forEach(row => {
if (row === currentRowElement) return;
const existingID = row.cells[2].innerText.trim().toUpperCase();
if (existingID === newID.toUpperCase() && existingID !== "") {
isDuplicate = true;
}
});
return isDuplicate;
}
async function saveEntry(isNew) {
if (document.getElementById("in23").value === "NO") {
document.getElementById("in24").value = "";
document.getElementById("in25").value = "";
document.getElementById("in26").value = "";
}
let errorMessages = [];
const userField = document.getElementById('userField').value.toUpperCase();
const district = userField.replace("DEO", "") || "UNKNOWN";
const timestamp = new Date().toLocaleString();
for (let i = 1; i <= 27; i++) {
const f = document.getElementById('in' + i);
if (f) f.classList.remove('invalid-field');
}
const field3 = document.getElementById('in3');
const uniqueIDValue = field3 ? field3.value.trim().toUpperCase() : "";
if (uniqueIDValue === "" || uniqueIDValue.length !== 6) {
field3.classList.add('invalid-field');
errorMessages.push("• Field 3 (Unique ID) must be exactly 6 characters.");
}
for (let i = 1; i <= 27; i++) {
const el = document.getElementById('in' + i);
if (!el || i === 1 || i === 2 || i === 3) continue;
if (i === 19 && document.getElementById('in19mode')?.value === "NIL") continue;
if ((i === 24 || i === 25 || i === 26) && document.getElementById('in23')?.value === "NO") continue;
if (el.value.trim() === "") {
el.classList.add('invalid-field');
errorMessages.push(`• Field ${i} is mandatory.`);
}
}
const dobField = document.getElementById('in7');
const apptField = document.getElementById('in14');
if (dobField.value && apptField.value) {
let ageDiff = (new Date(apptField.value) - new Date(dobField.value)) / (1000 * 60 * 60 * 24 * 365.25);
if (ageDiff < 18) {
dobField.classList.add('invalid-field');
apptField.classList.add('invalid-field');
errorMessages.push("• Age Gap must be 18+ years.");
}
}
const seniorityField = document.getElementById('in16');
if (apptField.value && seniorityField && seniorityField.value) {
let gap = (new Date(seniorityField.value) - new Date(apptField.value)) / (1000 * 60 * 60 * 24 * 365.25);
if (gap < 7) {
apptField.classList.add('invalid-field');
seniorityField.classList.add('invalid-field');
errorMessages.push("• Field 14 & 16 must have at least 7 years gap.");
}
}
if (errorMessages.length > 0) {
myAlert("⚠️ VALIDATION ERRORS:\n\n" + errorMessages.join("\n"));
return false;
}
if (isNew) {
document.getElementById('in1').value = generateSerialNumber();
}
let teacherData = {};
teacherData._oldData = {};
let existingIndex = window.fullData.findIndex(
r => (r.uniqueId || "").trim().toUpperCase() === uniqueIDValue
);
let existingRecord = existingIndex !== -1 ? window.fullData[existingIndex] : null;
// _oldData: snapshot se lo (most accurate), warna fullData se directly
if (window._formSnapshot && Object.keys(window._formSnapshot).length > 0) {
for (let i = 1; i <= 27; i++) {
teacherData._oldData['field' + i] = window._formSnapshot['field' + i] || "";
}
} else if (existingRecord) {
for (let i = 1; i <= 27; i++) {
teacherData._oldData['field' + i] = (existingRecord['field' + i] || "").toString().trim().toUpperCase();
}
}
for (let i = 1; i <= 27; i++) {
const field = document.getElementById('in' + i);
let fVal = field ? field.value.trim().toUpperCase() : "";
// field19 (Inter Division Transfer Date) — empty → save as NIL
if (i === 19 && !fVal) fVal = "NIL";
teacherData['field' + i] = fVal;
}
var probResult = extractProbationData(teacherData['field27'] || '');
teacherData['field27'] = probResult.cleanRemark.toUpperCase();
teacherData.field1 = document.getElementById('in1')?.value.trim() || "";
teacherData.document_url = uploadedFileURL || "";
teacherData.uniqueId = uniqueIDValue;
teacherData.status = isNew ? "NEW ENTRY" : "UPDATED";
teacherData.auditTrail = `${district} | ${timestamp}`;
teacherData.field28 = teacherData.status;
teacherData.field29 = teacherData.auditTrail;
teacherData.field30 = uploadedFileURL || "";
teacherData.field31 = window.transferFileURL19 || "";
if (!isNew && existingRecord) {
const uniqueId = uniqueIDValue;
let oldData = {};
for (let i = 1; i <= 27; i++) {
oldData['field' + i] = teacherData._oldData['field' + i] || "";
}
let newData = {};
for (let i = 1; i <= 27; i++) {
newData['field' + i] = document.getElementById('in' + i)?.value.trim().toUpperCase() || "";
}
teacherData.history_log = existingRecord?.history_log ? [...existingRecord.history_log] : [];
teacherData.history_log.push({
time: new Date().toLocaleString(),
before: JSON.stringify(oldData),
after: JSON.stringify(newData)
});
}
let changedFields = [];
if (existingRecord && !isNew) {
for (let i = 1; i <= 27; i++) {
const field = document.getElementById('in' + i);
if (!field) continue;
let newVal = field.value.trim().toUpperCase();
// Snapshot available hai toh use karo, warna _oldData fallback
let oldVal = (window._formSnapshot && window._formSnapshot['field' + i] !== undefined)
  ? window._formSnapshot['field' + i]
  : (teacherData._oldData['field' + i] || "");
if (newVal !== oldVal) {
changedFields.push('field' + i);
}
}
}
teacherData.changed_fields = [
...new Set([
...(existingRecord?.changed_fields || []),
...changedFields
])
];
if (!isNew && existingRecord && changedFields.length === 0) {
myAlert("ℹ️ No Changes Detected\n\nRecord " + uniqueIDValue + " was not updated because no fields were modified.");
umsToast("No changes detected — nothing updated", 'info');
return;
}
try {
const { error } = await supabaseClient
.from("gradation_list")
.upsert(
{
unique_id: uniqueIDValue,
data: teacherData
},
{ onConflict: 'unique_id' }
);
if (error) throw error;
let index = window.fullData.findIndex(r => r.uniqueId === uniqueIDValue);
if (index !== -1) {
window.fullData[index] = {
...window.fullData[index],
...teacherData,
uniqueId: uniqueIDValue
};
} else {
window.fullData.push({
uniqueId: uniqueIDValue,
...teacherData
});
}
window.filteredData = [...window.fullData];
let container = document.querySelector('.scroll-area');
let scrollTop = container.scrollTop;
renderVirtual();
container.scrollTop = scrollTop;
// Green flash on the saved row
setTimeout(() => {
const savedRow = document.querySelector(`#tableBody tr[data-id="${uniqueIDValue}"]`);
if (savedRow) {
savedRow.classList.remove('ums-save-flash');
savedRow.offsetHeight;
savedRow.classList.add('ums-save-flash');
setTimeout(() => savedRow.classList.remove('ums-save-flash'), 1700);
}
}, 80);
myAlert(`✅ Record ${uniqueIDValue} ${isNew ? "saved" : "updated"} successfully`);
umsToast(`Record ${uniqueIDValue} ${isNew ? "saved ✨" : "updated 🔄"} successfully`, 'success');
broadcastDataUpdate(
`${_realtimeDistrict()} ${isNew ? 'added new record' : 'updated record'}: ${uniqueIDValue}`,
isNew ? 'info' : 'update'
);
if (isNew) {
selectedRowElement = null;
}
uploadedFileURL = "";
if (typeof clearForm === "function") clearForm();
if (typeof closeModal === "function") closeModal();
} catch (error) {
console.error("Save Error:", error);
let exists = window.fullData.some(r => r.uniqueId === uniqueIDValue);
if (exists) {
myAlert(`✅ Record ${uniqueIDValue} saved successfully`);
} else {
myAlert("❌ Save Failed: " + (error.message || "Unknown error"));
}
selectedRowElement = null;
if (typeof clearForm === "function") clearForm();
}
}
async function performSearch() {
const sid = document.getElementById('searchVal').value.trim().toUpperCase();
if (!sid) {
myAlert("Please enter a Unique ID to search.");
return;
}
const tableBody = document.getElementById('tableBody');
const rows = tableBody.querySelectorAll('tr');
tableBody.style.display = 'none';
const record = window.fullData.find(r => (r.uniqueId || "").trim().toUpperCase() === sid);
if (record) {
const d = record;
const snoBox = document.getElementById('displaySNo');
if (snoBox) snoBox.innerText = d.field1 || "";
for (let j = 1; j <= 27; j++) {
const field = document.getElementById('in' + j);
if (!field) continue;
let val = d['field' + j] || "";
if (field.type === "date" || [7, 14, 16, 17, 18, 19].includes(j)) {
if (val && val.includes("-") && val.toUpperCase() !== "NIL") {
const p = val.split("-");
field.value = p[0].length === 2 ? `${p[2]}-${p[1]}-${p[0]}` : val;
} else { field.value = ""; }
if (j === 19) {
const mode19 = document.getElementById('in19mode');
if (mode19) mode19.value = (val && val !== "NIL") ? "DATE" : "NIL";
field.style.display = (val && val !== "NIL") ? "inline-block" : "none";
}
}
else if ([10, 11, 12].includes(j)) {
restoreMSCheckboxes(j, val);
}
else if (field.tagName === "SELECT") {
field.value = val;
if (field.selectedIndex === -1) {
Array.from(field.options).forEach(opt => {
if (opt.text.toUpperCase() === val.toUpperCase()) field.value = opt.value;
});
}
}
else { field.value = val; }
}
const retLabel = document.getElementById('retirementField');
const dobVal = d.field7 || "";
if (dobVal && dobVal !== "NIL") {
let dateObj;
if (dobVal.includes("-")) {
let parts = dobVal.split("-");
if (parts[0].length === 4) {
dateObj = new Date(dobVal);
} else {
dateObj = new Date(parts[2], parts[1] - 1, parts[0]);
}
}
else if (dobVal.includes("/")) {
let parts = dobVal.split("/");
dateObj = new Date(parts[2], parts[1] - 1, parts[0]);
}
if (dateObj && !isNaN(dateObj.getTime())) {
let retYear = dateObj.getFullYear() + 62;
let month = dateObj.getMonth() + 1;
let lastDate = new Date(retYear, month, 0).getDate();
let dStr = String(lastDate).padStart(2, '0');
let mStr = String(month).padStart(2, '0');
if (retLabel) {
retLabel.value = `${dStr}-${mStr}-${retYear}`;
retLabel.style.color = "black";
retLabel.style.fontWeight = "bold";
}
} else {
retLabel.value = "NIL";
retLabel.style.color = "red";
}
} else {
if (retLabel) {
retLabel.value = "NIL";
retLabel.style.color = "red";
}
}
if (typeof handleUPPLogic === "function") handleUPPLogic();
if (typeof autoDesignationLogic === "function") autoDesignationLogic();
// ── Snapshot: form load hone ke baad original values store karo comparison ke liye ──
window._formSnapshot = {};
for (let s = 1; s <= 27; s++) {
  const sf = document.getElementById('in' + s);
  if (!sf) continue;
  window._formSnapshot['field' + s] = sf.value.trim().toUpperCase();
}
const f23 = document.getElementById('in23');
if (f23) f23.dispatchEvent(new Event('change'));
const docURL30 = d.field30 || d.document_url || "";
const fileNameDisplay = document.getElementById('fileNameDisplay');
const premiumBox = fileNameDisplay ? fileNameDisplay.closest('.premium-box') : null;
if (docURL30 && docURL30 !== "") {
uploadedFileURL = docURL30;
window['_b64doc_doc30_loaded'] = docURL30;
if (fileNameDisplay) {
fileNameDisplay.innerHTML = `✅ Document Uploaded &nbsp;<button onclick="openBase64Doc('doc30_loaded')" style="background:#1565c0;color:white;border:none;padding:2px 7px;border-radius:4px;cursor:pointer;font-size:11px;font-weight:bold;">👁️ View</button>`;
fileNameDisplay.style.color = "#2e7d32";
}
if (premiumBox) {
premiumBox.style.borderColor = "#2e7d32";
premiumBox.style.background = "#f0fff4";
premiumBox.onclick = null;
}
} else {
uploadedFileURL = "";
if (fileNameDisplay) {
fileNameDisplay.innerText = "Feature Disabled";
fileNameDisplay.style.color = "#999";
}
if (premiumBox) {
premiumBox.style.borderColor = "#ccc";
premiumBox.style.background = "#f0f0f0";
premiumBox.style.opacity = "0.5";
premiumBox.style.cursor = "not-allowed";
premiumBox.onclick = null;
}
}
const transferURL31 = d.field31 || "";
const transferWarningBox = document.getElementById('transferUploadWarningBox');
const transferUploadBox = document.getElementById('transferUploadBox19');
const transferFileName19 = document.getElementById('transferFileName19');
const mode19Val = (document.getElementById('in19mode')?.value || "NIL");
if (mode19Val === "DATE" && document.getElementById('in19')?.value) {
if (transferWarningBox) transferWarningBox.style.display = 'block';
if (transferURL31 && transferURL31 !== "") {
window.transferFileURL19 = transferURL31;
if (transferUploadBox) {
transferUploadBox.innerHTML = `✅ Document Already Uploaded &nbsp; <button onclick="openBase64Doc('transfer31_loaded')" style='background:#1565c0;color:white;border:none;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:11px;font-weight:bold;margin-left:6px;'>👁️ View</button>`;
window['_b64doc_transfer31_loaded'] = transferURL31;
transferUploadBox.style.borderColor = "#2e7d32";
transferUploadBox.style.color = "#2e7d32";
transferUploadBox.onclick = null;
}
if (transferFileName19) {
transferFileName19.textContent = "✅ Transfer document saved with this record";
transferFileName19.style.display = "block";
transferFileName19.style.color = "#2e7d32";
}
} else {
window.transferFileURL19 = "";
if (transferUploadBox) {
transferUploadBox.innerHTML = `📤 Transfer Document Upload करें (PDF/JPG)`;
transferUploadBox.style.borderColor = "#e65100";
transferUploadBox.style.color = "#e65100";
transferUploadBox.onclick = function() { document.getElementById('transferFileInput19').click(); };
}
if (transferFileName19) { transferFileName19.textContent = ""; transferFileName19.style.display = "none"; }
}
} else {
if (transferWarningBox) transferWarningBox.style.display = 'none';
window.transferFileURL19 = "";
}
selectedUniqueId = sid;
tableBody.style.display = '';
for (let row of rows) {
if (row.cells[2] && row.cells[2].innerText.trim().toUpperCase() === sid) {
selectedRowElement = row;
document.querySelectorAll('#tableBody tr').forEach(r => r.classList.remove('selected-row'));
row.classList.add('selected-row');
row.scrollIntoView({ behavior: 'smooth', block: 'center' });
break;
}
}
const addBtnFound = document.getElementById('newAddBtn');
if (addBtnFound) {
addBtnFound.style.opacity = "0.35";
addBtnFound.style.pointerEvents = "none";
addBtnFound.title = "Record loaded — use UPDATE or DELETE";
}
return;
}
tableBody.style.display = '';
const addBtnNotFound = document.getElementById('newAddBtn');
if (addBtnNotFound) {
addBtnNotFound.style.opacity = "1";
addBtnNotFound.style.pointerEvents = "auto";
addBtnNotFound.title = "";
}
}
async function deleteEntry() {
if (!selectedRowElement) return myAlert("Select a record first!");
let reason = prompt("To DELETE, enter a reason (or leave blank for 'DELETED'):");
if (reason === null) return;
const userField = document.getElementById('userField').value.toUpperCase();
const district = userField || "UNKNOWN";
const timestamp = new Date().toLocaleString();
let finalReason = reason.trim() === "" ? "DELETED" : reason.toUpperCase();
let uniqueID  = selectedRowElement.cells[2].innerText.trim().toUpperCase();
let datasetId = (selectedRowElement.dataset.id || "").trim();
try {
let dbUniqueId = null;
let updatedData = null;
const candidates = [...new Set([datasetId, uniqueID].filter(Boolean))];
for (let candidate of candidates) {
const { data: row, error: fetchErr } = await supabaseClient
.from('gradation_list')
.select('unique_id, data')
.eq('unique_id', candidate)
.maybeSingle();
if (!fetchErr && row) {
dbUniqueId  = row.unique_id;
updatedData = row.data;
break;
}
}
if (!dbUniqueId) {
const { data: rows, error: searchErr } = await supabaseClient
.from('gradation_list')
.select('unique_id, data')
.filter('data->>field3', 'eq', uniqueID)
.limit(1);
if (!searchErr && rows && rows.length > 0) {
dbUniqueId  = rows[0].unique_id;
updatedData = rows[0].data;
}
}
if (!dbUniqueId || !updatedData) {
throw new Error(`Record not found in DB for ID: ${uniqueID}`);
}
updatedData.field27 = finalReason;
updatedData.field28 = "DELETED";
updatedData.field29 = `${district} | ${timestamp}`;
const { error: updateError } = await supabaseClient
.from("gradation_list")
.update({ data: updatedData })
.eq("unique_id", dbUniqueId);
if (updateError) throw updateError;
const updateMemoryRow = (arr) => {
const index = arr.findIndex(r =>
r.uniqueId === dbUniqueId ||
r.uniqueId === datasetId  ||
(r.field3 || "").trim().toUpperCase() === uniqueID
);
if (index !== -1) {
arr[index].field27 = finalReason;
arr[index].field28 = "DELETED";
arr[index].field29 = `${district} | ${timestamp}`;
arr[index].uniqueId = dbUniqueId;
}
};
if (window.fullData)     updateMemoryRow(window.fullData);
if (window.filteredData) updateMemoryRow(window.filteredData);
if (selectedRowElement) {
selectedRowElement.classList.add('deleting-row');
await new Promise(r => setTimeout(r, 560));
}
renderVirtual();
setTimeout(() => {
let newRow = document.querySelector(`#tableBody tr[data-id="${dbUniqueId}"]`)
|| document.querySelector(`#tableBody tr[data-id="${datasetId}"]`);
if (newRow) {
newRow.classList.add('soft-deleted');
newRow.classList.remove('selected-row');
newRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
}, 50);
selectedRowElement = null;
if (typeof clearForm === "function") clearForm();
broadcastDataUpdate(`${_realtimeDistrict()} deleted record: ${uniqueID}`, 'delete');
setTimeout(() => {
myAlert("✅ Record marked as Deleted in Database.");
umsToast("Record deleted successfully 🗑️", 'warning');
}, 100);
} catch (error) {
console.error("Delete Error:", error);
myAlert("❌ Delete failed: " + (error.message || "Unknown error"));
selectedRowElement = null;
if (typeof clearForm === "function") clearForm();
}
}
function selectRow(el) {
if (selectedRowElement && selectedRowElement !== el) {
if (typeof unlockRow === 'function') unlockRow(selectedRowElement.dataset.id);
}
if (typeof lockRow === 'function') lockRow(el.dataset.id);
document.querySelectorAll('#tableBody tr').forEach(r => r.classList.remove('selected-row'));
el.classList.add('selected-row');
selectedRowElement = el;
selectedUniqueId = el.dataset.id;
const snoBox = document.getElementById('displaySNo');
if (snoBox) snoBox.innerText = el.cells[0].innerText;
}
function changeFormZoom(v) {
formZoom += v; if(formZoom < 9) formZoom = 9;
document.getElementById('formCard').style.fontSize = formZoom + 'px';
document.getElementById('formZoomVal').innerText = formZoom + 'px';
}
function myAlert(msg) {
document.getElementById('alertMsg').innerText = msg;
document.getElementById('customAlert').style.display = 'flex';
}
function closeAlert() { document.getElementById('customAlert').style.display = 'none'; }
function toggleForm(show) {
document.getElementById('formOverlay').style.display = show ? 'block' : 'none';
if(show) {
const badge = document.getElementById('formStatusBadge');
if(badge) { badge.textContent='NEW ENTRY'; badge.style.background='#1b5e20'; }
// Stagger animate form row-items on open
const rows = document.querySelectorAll('#formCard .row-item');
rows.forEach((row, i) => {
row.style.animation = 'none';
row.offsetHeight; // reflow
row.style.animation = `ums-fadeInUp 0.28s ease ${i * 0.018}s both`;
});
}
}
function exportExcel() {
const wb = XLSX.utils.table_to_book(document.getElementById('dataTable'));
XLSX.writeFile(wb, "MS_Gradation.xlsx");
}
function exportPDF() {
const { jsPDF } = window.jspdf;
const doc = new jsPDF('l', 'mm', 'a4');
document.fonts.ready.then(() => {
/* watermark removed – base64 was truncated in source */
const watermarkB64 = null;
const heading = "Madhyamik Shikshak (MS) Samvarg Ki Anantim Variyata Suchi - Sthiti Dated 01/04/2026";
const headingHindi = "माध्यमिक शिक्षक (MS) संवर्ग की अनंतिम वरीयता सूची - 01/04/2026 की स्थिति में";
const canvas = document.createElement('canvas');
canvas.width = 2200; canvas.height = 80;
const ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#002e5b';
ctx.font = 'bold 44px "Noto Sans Devanagari", "Mangal", "Arial Unicode MS", Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText(headingHindi, canvas.width / 2, canvas.height / 2);
const headingImgData = canvas.toDataURL('image/png');
doc.autoTable({
html: '#dataTable',
styles: { fontSize: 4 },
startY: 18,
didDrawPage: function(data) {
const pageW = doc.internal.pageSize.getWidth();
const imgW = pageW - 20;
const imgH = imgW * (80 / 2200);
doc.addImage(headingImgData, 'PNG', 10, 4, imgW, imgH);
const pageH = doc.internal.pageSize.getHeight();
const wmW = 120, wmH = 120;
const x = (pageW - wmW) / 2;
const y = (pageH - wmH) / 2;
if (watermarkB64) {
doc.saveGraphicsState();
doc.setGState(new doc.GState({opacity: 0.10}));
doc.addImage(watermarkB64, 'PNG', x, y, wmW, wmH);
doc.restoreGraphicsState();
}
}
});
doc.save("Report.pdf");
});
}
async function clearAllData() {
const pw = prompt("Enter Password to CLEAR ALL DATA:");
if (pw === null) return;
if (pw === "1782") {
if (confirm("⚠️ WARNING: This will permanently delete ALL records from system. Are you sure?")) {
try {
const { error } = await supabaseClient
.from("gradation_list")
.delete()
.neq("unique_id", "");
if (error) throw error;
window.fullData = [];
window.filteredData = [];
document.getElementById('tableBody').innerHTML = "";
renderVirtual();
myAlert("✅ All Data Cleared Permanently");
} catch (error) {
console.error(error);
myAlert("❌ Error deleting data from cloud!");
}
}
} else {
myAlert("❌ Invalid Password!");
}
}
function importExcel(event) {
const pw = prompt("Enter Password to Import Excel:");
if (pw === null) {
event.target.value = "";
return;
}
if (pw === "1782") {
const file = event.target.files[0];
if (!file) return;
if (typeof XLSX === 'undefined') {
myAlert("Error: Excel library (SheetJS) not loaded. Please check your internet connection.");
return;
}
const reader = new FileReader();
reader.onload = function(e) {
try {
const data = new Uint8Array(e.target.result);
const workbook = XLSX.read(data, { type: 'array' });
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
if (json.length <= 1) {
myAlert("The selected file is empty!");
return;
}
json.shift();
const tableBody = document.getElementById('tableBody');
const fragment = document.createDocumentFragment();
json.forEach(rowData => {
const tr = document.createElement('tr');
tr.onclick = function() { selectRow(this); };
for (let i = 0; i < 27; i++) {
const td = document.createElement('td');
const cellValue = rowData[i] !== undefined ? rowData[i] : "";
const val = cellValue.toString().trim().toUpperCase();
td.innerText = val;
td.title = val;
tr.appendChild(td);
}
fragment.appendChild(tr);
});
tableBody.appendChild(fragment);
updateAutoSerialNumbers();
myAlert("✅ " + json.length + " Records Imported Successfully!");
} catch (err) {
console.error(err);
myAlert("❌ Error reading file. Ensure it is a valid Excel file (.xlsx).");
}
event.target.value = "";
};
reader.readAsArrayBuffer(file);
} else {
myAlert("❌ Invalid Password");
event.target.value = "";
}
}
syncDataArray();
function syncDataArray() {
if (typeof allMasterData !== 'undefined' && allMasterData.length > 0) {
gradationData = JSON.parse(JSON.stringify(allMasterData));
console.log("✅ Memory Sync Complete from Master Data: " + gradationData.length + " rows.");
} else {
console.warn("⚠️ Main data array not found! Fetching from DB...");
}
}
function importExcel() {
syncDataArray();
renderTableLimit(1000);
}
function clearForm() {
window._formSnapshot = {}; // snapshot reset — new entry ke liye
const badge = document.getElementById('formStatusBadge');
if(badge) { badge.textContent = 'NEW ENTRY'; badge.style.background = '#1b5e20'; }
resetProbationSection();
const field1 = document.getElementById('in1');
if (field1) field1.value = "";
for (let i = 2; i <= 27; i++) {
const field = document.getElementById('in' + i);
if (!field) continue;
field.classList.remove('invalid-field');
if (field.tagName === "SELECT") {
field.selectedIndex = 0;
} else {
field.value = "";
}
if (i === 2) {
field.value = "NEW ENTRY";
}
if (i === 27) {
field.value = "NO";
}
if ([10, 11, 12].includes(i)) {
const label = document.getElementById('text' + i);
if (label) label.innerText = "SELECT";
const checks = document.querySelectorAll('#ms' + i + ' input');
checks.forEach(c => c.checked = false);
}
if ([1, 2, 17, 18].includes(i)) {
field.style.backgroundColor = "#bdc3c7";
field.readOnly = true;
} else {
field.style.backgroundColor = "#ffffff";
field.readOnly = false;
}
}
const addBtn = document.getElementById('newAddBtn');
if (addBtn) {
addBtn.style.opacity = "1";
addBtn.style.pointerEvents = "auto";
addBtn.title = "";
}
const fileInput = document.getElementById('fileInput');
if (fileInput) fileInput.value = "";
const fileNameDisplay = document.getElementById('fileNameDisplay');
if (fileNameDisplay) {
fileNameDisplay.innerText = "Feature Disabled";
fileNameDisplay.style.color = "#999";
const pb = fileNameDisplay.closest('.premium-box');
if (pb) { pb.style.borderColor = "#ccc"; pb.style.background = "#f0f0f0"; pb.style.opacity = "0.5"; pb.style.cursor = "not-allowed"; pb.onclick = null; }
}
uploadedFileURL = "";
window.transferFileURL19 = "";
const tfi = document.getElementById('transferFileInput19');
if (tfi) tfi.value = "";
const tfn = document.getElementById('transferFileName19');
if (tfn) { tfn.textContent = ""; tfn.style.display = "none"; }
const tub = document.getElementById('transferUploadBox19');
if (tub) { tub.style.borderColor = "#e65100"; tub.style.color = "#e65100"; tub.textContent = "📤 Transfer Document Upload करें (PDF/JPG)"; }
const twb = document.getElementById('transferUploadWarningBox');
if (twb) twb.style.display = "none";
document.querySelectorAll('#tableBody tr').forEach(r => r.classList.remove('selected-row'));
if(document.getElementById('displaySNo')) document.getElementById('displaySNo').innerText = "---";
if (selectedRowElement && typeof unlockRow === 'function') unlockRow(selectedRowElement.dataset.id);
selectedRowElement = null;
}
function updateAutoSerialNumbers() {
const tableRows = document.querySelectorAll('#tableBody tr');
tableRows.forEach((row, index) => {
if (row.cells[0]) {
row.cells[0].innerText = index + 1;
}
});
}
function showSummary() {
const structure = [
{ name: 'JD BHOPAL', districts: ['BHOPAL', 'RAISEN', 'RAJGARH', 'SEHORE', 'VIDISHA'] },
{ name: 'JD GWALIOR', districts: ['ASHOKNAGAR', 'BHIND', 'DATIA', 'GUNA', 'GWALIOR', 'MORENA', 'SHEOPUR', 'SHIVPURI'] },
{ name: 'JD INDORE', districts: ['ALIRAJPUR', 'BADWANI', 'BURHANPUR', 'DHAR', 'INDORE', 'JHABUA', 'KHANDWA', 'KHARGONE'] },
{ name: 'JD JABALPUR', districts: ['BALAGHAT', 'CHHINDWARA', 'JABALPUR', 'KATNI', 'MANDLA', 'NARSINGHPUR', 'SEONI', 'DINDORI', 'PANDHURNA'] },
{ name: 'JD UJJAIN', districts: ['AGAR MALWA', 'DEWAS', 'MANDSAUR', 'NEEMUCH', 'RATLAM', 'SHAJAPUR', 'UJJAIN'] },
{ name: 'JD SAGAR', districts: ['CHHATARPUR', 'DAMOH', 'PANNA', 'SAGAR', 'TIKAMGARH', 'NIWARI'] },
{ name: 'JD REWA', districts: ['REWA', 'SATNA', 'SIDHI', 'SINGRAULI', 'MAUGANJ', 'MAIHAR'] },
{ name: 'JD NARMADAPURAM', districts: ['BETUL', 'HARDA', 'NARMADAPURAM'] },
{ name: 'JD SHAHDOL', districts: ['ANUPPUR', 'SHAHDOL', 'UMARIA'] }
];
const rows = window.fullData || [];
if (rows.length === 0) return myAlert("No data available to summarize!");
let grand = { total: 0, updated: 0, new: 0, deleted: 0, deo: 0, jd: 0, dpi: 0, unmapped: 0 };
let finalData = [];
structure.forEach(div => {
let divStats = { name: div.name, type: 'JD', total: 0, updated: 0, new: 0, deleted: 0, deo: 0, jd: 0, dpi: 0 };
let districtRows = [];
div.districts.forEach(d => {
let distStats = { name: d, type: 'DISTRICT', total: 0, updated: 0, new: 0, deleted: 0, deo: 0, jd: 0, dpi: 0 };
rows.forEach(row => {
let officeCell = (row.field22 || "").toUpperCase().trim();
if (/^\d{8,}/.test(officeCell) || officeCell.includes("ODS")) {
officeCell = (row.field23 || "").toUpperCase().trim();
}
let status = (row.field28 || "").toUpperCase().trim();
let actionBy = (row.field29 || "").toUpperCase().trim();
const cleanOffice = officeCell
.replace(/^DEO\s+/,'')
.replace(/^JD\s+/,'')
.trim();
const isDistrictData = cleanOffice === d.trim();
if (isDistrictData) {
distStats.total++;
divStats.total++;
grand.total++;
if (status.includes("UPDATED")) {
distStats.updated++; divStats.updated++; grand.updated++;
} else if (status.includes("NEW")) {
distStats.new++; divStats.new++; grand.new++;
} else if (status.includes("DELETE")) {
distStats.deleted++; divStats.deleted++; grand.deleted++;
}
if (actionBy.includes("DPI")) {
distStats.dpi++; divStats.dpi++; grand.dpi++;
} else if (actionBy.includes("JD")) {
distStats.jd++; divStats.jd++; grand.jd++;
} else if (actionBy.includes("DEO") || (status !== "" && actionBy !== "")) {
distStats.deo++; divStats.deo++; grand.deo++;
}
}
});
if (distStats.total > 0) districtRows.push(distStats);
});
if (divStats.total > 0) {
finalData.push(divStats);
finalData = finalData.concat(districtRows);
}
});
const printCSS = `
<style>
body{
font-family: "Segoe UI", Tahoma, Arial;
}
@media print {
body * { visibility: hidden; }
#summaryModal, #summaryModal * { visibility: visible; }
#summaryModal { position: absolute; left:0; top:0; width:auto !important; display:block !important; }
.no-print { display:none !important; }
table { width:auto !important; border-collapse:collapse !important; }
th,td { border:1px solid black !important; padding:3px 6px !important; white-space:nowrap !important; }
body::before {
content: "";
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 500px;
height: 500px;
background-image: url("data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAQABAADASIAAhEBAxEB/8QAHQAAAgICAwEAAAAAAAAAAAAAAAECCAYHAwQFCf/EAGgQAAECBAMEBgQHCQsHCQcACwECAwAEBREGITEHEkFRCBMiYXGBFDKRoRUjQlJicoIWN0OSorGys8EXJDNTY3N0dcLR0ic1NlZllMMmNERVhJOj4fAlKEVGZIOFGDjxR1RmlbSk0+L/xAAbAQABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB
background-repeat: no-repeat;
background-position: center;
background-size: contain;
opacity: 0.10;
z-index: 9999;
pointer-events: none;
}
}
@media print {
.toolbar,
#onlineStatusBar,
#formOverlay,
#editTitleHint,
#dpiControlPanel,
#dpiPassModal,
#importExcelModal,
#lockScreen,
#customAlert,
#sessionTimerBadge,
.footer-btn,
.zoom-box,
button { display: none !important; }
#sheetTitleDiv {
display: block !important;
visibility: visible !important;
text-align: center !important;
font-size: 14px !important;
font-weight: 700 !important;
color: #000 !important;
padding: 10px 0 !important;
border-bottom: 2px solid #002e5b !important;
background: white !important;
-webkit-print-color-adjust: exact;
print-color-adjust: exact;
}
#sheetTitleText {
display: block !important;
visibility: visible !important;
color: #000 !important;
}
.excel-container { box-shadow: none !important; }
.scroll-area { height: auto !important; overflow: visible !important; }
.row-item { border: 1px solid #ccc !important; background: none !important; color: black !important; }
.f-label { color: black !important; }
.f-num { display: none !important; }
}
@media screen and (max-width: 480px) {
.modern-modal-content {
width: 98% !important;
padding: 15px !important;
margin: 5px auto !important;
}
.modal-header h2 {
font-size: 18px;
}
}
</style>
`;
let modal = document.createElement('div');
modal.id = "summaryModal";
modal.style = `
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6);
z-index:10000;
display:flex;
justify-content:center;
align-items:center;
`;
modal.innerHTML = printCSS + `
<div style="
background:#000080;
color: white;
border-radius: 8px;
border: 1px solid #ffffff;
display: inline-block;
max-height: 90vh;
overflow: hidden;
width: fit-content;
box-shadow: 0 10px 30px rgba(0,0,0,0.35);
">
<div style="
background:linear-gradient(90deg,#2c3e50,#34495e);
color:white;
padding:10px;
border-bottom:2px solid #1c2833;
text-align:center;
">
<h3 style="margin:0;font-size:15px;font-weight:600;letter-spacing:0.5px;">
District Enrollment Summary
</h3>
<div style="
margin-top:6px;
display:flex;
gap:10px;
justify-content:center;
flex-wrap:wrap;
font-weight:bold;
font-size:14px;
">
<div style="background:#e3f2fd;padding:4px 12px;border:1px solid #000;border-radius:4px;color: black !important;">
Total : ${grand.total}
</div>
<div style="background:#e8f5e9;padding:4px 12px;border:1px solid #000;border-radius:4px;color: black !important;">
Updated : ${grand.updated}
</div>
<div style="background:#e1f5fe;padding:4px 12px;border:1px solid #000;border-radius:4px;color: black !important;">
New Entry : ${grand.new}
</div>
<div style="background:#ffebee;padding:4px 12px;border:1px solid #000;border-radius:4px;color:#b71c1c;">
Delete : ${grand.deleted}
</div>
<div style="background:#ffebee;padding:4px 12px;border:1px solid #000;border-radius:4px;color:#b71c1c;">
DEO : ${grand.deo}
</div>
<div style="background:#e8f5e9;padding:4px 12px;border:1px solid #000;border-radius:4px;color:#1b5e20;">
JD : ${grand.jd}
</div>
<div style="background:#e3f2fd;padding:4px 12px;border:1px solid #000;border-radius:4px;color:#0d47a1;">
DPI : ${grand.dpi}
</div>
</div>
<div style="
overflow-y:auto;
max-height:65vh;
padding:10px;
display:block;
width:100%;
">
<table style="
width:1px !important;
min-width:100% !important;
border-collapse:collapse;
font-size:11px;
border:1px solid #000;
margin:0 auto;
table-layout:auto !important;
background:white;
">
<thead style="background:#f2f2f2; color:#000; font-weight:bold;">
<tr>
<th style="padding:4px 10px;text-align:left;border:1px solid #000;white-space:nowrap;">Office Name</th>
<th style="padding:4px 8px;border:1px solid #000;">Total</th>
<th style="padding:4px 8px;border:1px solid #000;">Updated</th>
<th style="padding:4px 8px;border:1px solid #000;">New entry</th>
<th style="padding:4px 8px;border:1px solid #000;">Delete</th>
<th style="padding:4px 8px;border:1px solid #000;background:#e8f5e9;">📤 Upload List</th>
<th style="padding:4px 8px;border:1px solid #000;background:#e3f2fd;">👁️ View Doc</th>
</tr>
</thead>
<tbody>
${finalData.map(item => {
let itemKey = item.type === 'JD'
? item.name.replace(/\s+/g, '')
: 'DEO' + item.name.replace(/\s+/g, '');
let canUpload = (window.currentUser === itemKey) || (window.currentUser === 'DPI');
let uploadBtn = canUpload
? `<button onclick="summaryUploadDoc('${itemKey}')" style="background:#2e7d32;color:white;border:none;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:11px;font-weight:bold;">📤 Upload</button><div id='uploadStatus_${itemKey}' style='font-size:10px;margin-top:2px;'></div>`
: `<span style="color:#bbb;font-size:10px;">🔒 No Access</span>`;
const storedDoc = localStorage.getItem('summaryDoc_' + itemKey);
let viewBtn = storedDoc
? `<button onclick="summaryViewDoc('${itemKey}')" style="background:#1565c0;color:white;border:none;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:11px;font-weight:bold;animation:pulseBtn 1.5s infinite;">👁️ View</button>`
: `<span style="color:#aaa;font-size:10px;font-style:italic;">No Document</span>`;
return `
<tr style="border-bottom:1px solid #000;${item.type === 'JD' ? 'background:#e8f1ff;font-weight:600;color:#0d47a1;' : ''}">
<td style="padding:2px 10px;border-right:1px solid #000;white-space:nowrap;color:black !important;">
${item.type === 'JD' ? item.name : 'DEO ' + item.name}
</td>
<td style="padding:2px 8px;text-align:center;border-right:1px solid #000;font-weight:bold;color:black !important;">${item.total}</td>
<td style="padding:2px 8px;text-align:center;border-right:1px solid #000;color:#2e7d32;">${item.updated}</td>
<td style="padding:2px 8px;text-align:center;border-right:1px solid #000;color:#1565c0;">${item.new}</td>
<td style="padding:2px 8px;text-align:center;border-right:1px solid #000;color:#c62828;font-weight:600;">${item.deleted}</td>
<td style="padding:2px 8px;text-align:center;border-right:1px solid #000;">
<input type="file" id="fileUpload_${itemKey}" accept=".pdf,.jpg,.jpeg,.png" style="display:none;" onchange="handleSummaryFileUpload(event,'${itemKey}')">
${uploadBtn}
</td>
<td style="padding:2px 8px;text-align:center;">${viewBtn}</td>
</tr>`;
}).join('')}
</tbody>
</table>
</div>
<div class="no-print" style="
padding:10px;
background:#f5f6fa;
text-align:right;
border-top:1px solid #ddd;
">
<button onclick="window.print()" style="
padding:7px 18px;
background:#2e7d32;
color:white;
border:none;
border-radius:4px;
cursor:pointer;
font-weight:600;
font-size:12px;
margin-right:8px;
">
Print Report
</button>
<button onclick="document.getElementById('summaryModal').remove()" style="
padding:7px 18px;
background:#c62828;
color:white;
border:none;
border-radius:4px;
cursor:pointer;
font-weight:600;
font-size:12px;
">
Close
</button>
</div>
</div>
`;
document.body.appendChild(modal);
}
document.addEventListener('change', function(e) {
if (e.target && e.target.id === 'in19mode') {
const dateInput = document.getElementById('in19');
if (e.target.value === 'DATE') {
dateInput.style.display = 'inline-block';
dateInput.type = 'date';
dateInput.value = "";
} else {
dateInput.style.display = 'none';
dateInput.type = 'text';
dateInput.value = 'NIL';
}
}
});
document.addEventListener('DOMContentLoaded', function() {
const resetBtn = document.getElementById('clearFiltersBtn');
if (resetBtn) {
resetBtn.addEventListener('click', function() {
const filterInputs = document.querySelectorAll('#filterRow input');
filterInputs.forEach(input => { input.value = ''; });
const otherInputs = document.querySelectorAll('thead input');
otherInputs.forEach(input => { input.value = ''; });
window.filteredData = [...window.fullData];
renderVirtual();
console.log("✅ Filters fully reset");
});
}
});
function formatDateToDisplay(dateStr) {
if (!dateStr || dateStr.toUpperCase() === "NIL" || dateStr === "" || dateStr === "dd-mm-yyyy") return "NIL";
if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) return dateStr;
const parts = dateStr.split('-');
if (parts.length === 3 && parts[0].length === 4) {
return `${parts[2]}-${parts[1]}-${parts[0]}`;
}
return dateStr;
}
function updateRetirementDate() {
const dobInput = document.getElementById('in7');
const retDisplay = document.getElementById('retirementField');
if (dobInput && dobInput.value && dobInput.value !== "" && dobInput.value !== "NIL") {
const dob = new Date(dobInput.value);
if (!isNaN(dob.getTime())) {
const day   = dob.getDate();
const month = dob.getMonth();
const year  = dob.getFullYear();
let retYear  = year + 62;
let retMonth = month;
if (day === 1) {
retMonth = month - 1;
if (retMonth < 0) { retMonth = 11; retYear--; }
}
const lastDay = new Date(retYear, retMonth + 1, 0);
const d = String(lastDay.getDate()).padStart(2, '0');
const m = String(lastDay.getMonth() + 1).padStart(2, '0');
if (retDisplay) retDisplay.value = `${d}-${m}-${retYear}`;
}
} else {
if (retDisplay) retDisplay.value = "NIL";
}
}
const dobField = document.getElementById('in7');
if (dobField) {
dobField.addEventListener('input', updateRetirementDate);
dobField.addEventListener('change', updateRetirementDate);
const observer = new MutationObserver(() => updateRetirementDate());
observer.observe(dobField, { attributes: true, childList: true, characterData: true });
}
function checkProbationSection() {
var f14 = document.getElementById('in14').value;
var sec = document.getElementById('probationSection');
if (!sec) return;
if (f14 && f14 >= '2020-01-01') {
sec.style.display = 'block';
} else {
sec.style.display = 'none';
resetProbationSection();
}
}
function handleProbationToggle() {
var yesRadio = document.getElementById('probYes');
var details  = document.getElementById('probationDetails');
if (!details) return;
details.style.display = (yesRadio && yesRadio.checked) ? 'block' : 'none';
}
function resetProbationSection() {
var sec = document.getElementById('probationSection');
if (sec) sec.style.display = 'none';
var noRadio = document.getElementById('probNo');
if (noRadio) noRadio.checked = true;
var det = document.getElementById('probationDetails');
if (det) det.style.display = 'none';
var ordNo = document.getElementById('probOrderNo');
if (ordNo) ordNo.value = '';
var ordDt = document.getElementById('probOrderDate');
if (ordDt) ordDt.value = '';
}
function populateProbationFromRecord(rec) {
var remark = rec.field27 || '';
resetProbationSection();
checkProbationSection();
var sec = document.getElementById('probationSection');
if (!sec || sec.style.display === 'none') return;
var match = remark.match(/__PROB__({.*?})__END__/);
if (match) {
try {
var pd = JSON.parse(match[1]);
if (pd.status === 'YES') {
document.getElementById('probYes').checked = true;
handleProbationToggle();
if (pd.orderNo)   document.getElementById('probOrderNo').value   = pd.orderNo;
if (pd.orderDate) document.getElementById('probOrderDate').value = pd.orderDate;
} else {
document.getElementById('probNo').checked = true;
handleProbationToggle();
}
} catch(e) {}
}
}
function extractProbationData(currentRemark) {
var sec = document.getElementById('probationSection');
var clean = (currentRemark || '').replace(/__PROB__({.*?})__END__/g, '').trim();
if (!sec || sec.style.display === 'none') {
return { probationJSON: null, cleanRemark: clean };
}
var yesRadio = document.getElementById('probYes');
var status   = (yesRadio && yesRadio.checked) ? 'YES' : 'NO';
var pd = { status: status };
if (status === 'YES') {
pd.orderNo   = (document.getElementById('probOrderNo')   || {}).value || '';
pd.orderDate = (document.getElementById('probOrderDate') || {}).value || '';
}
var encoded = '__PROB__' + JSON.stringify(pd) + '__END__';
var newRemark = clean ? clean + ' ' + encoded : encoded;
return { probationJSON: pd, cleanRemark: newRemark };
}
function openReportModal() {
const modal = document.getElementById('reportModal');
if(modal) {
modal.style.display = 'flex';
} else {
alert("Error: reportModal ID not found!");
}
}
function openAdvancedFilter() {
const fieldSel = document.getElementById('fieldSelector');
fieldSel.innerHTML = '<option value="">-- Choose Field --</option>';
colConfig.forEach((col, index) => {
if(index < 27) {
let opt = document.createElement('option');
opt.value = index;
opt.innerText = `${index + 1}. ${col.name}`;
fieldSel.appendChild(opt);
}
});
document.getElementById('filterModal').style.display = 'flex';
}
function populateValueDropdown() {
const colIdx = document.getElementById('fieldSelector').value;
const valueSel = document.getElementById('valueSelector');
valueSel.innerHTML = '<option value="ALL">-- Show All Data --</option>';
if(colIdx === "") return;
let uniqueValues = new Set();
window.fullData.forEach(row => {
let val = row['field' + (parseInt(colIdx) + 1)] || "";
val = val.trim();
if(val && val !== "-" && val !== "NIL") {
uniqueValues.add(val);
}
});
Array.from(uniqueValues).sort().forEach(val => {
let opt = document.createElement('option');
opt.value = val;
opt.innerText = val;
valueSel.appendChild(opt);
});
}
function applyAdvancedFilter() {
const colIdx = document.getElementById('fieldSelector').value;
const targetVal = document.getElementById('valueSelector').value;
if(colIdx === "") {
alert("Please select a field first!");
return;
}
if(targetVal === "ALL") {
window.filteredData = [...window.fullData];
} else {
window.filteredData = window.fullData.filter(row => {
let val = row['field' + (parseInt(colIdx) + 1)] || "";
return val.trim() === targetVal;
});
}
renderVirtual();
closeFilterModal();
}
function closeFilterModal() {
document.getElementById('filterModal').style.display = 'none';
}
function calculateRetirementForPDF(dobStr) {
if(!dobStr || dobStr.includes("NIL")) return "NIL";
try {
let parts = dobStr.split('-');
const day   = parseInt(parts[0]);
const month = parseInt(parts[1]) - 1;
const year  = parseInt(parts[2]);
let retYear  = year + 62;
let retMonth = month;
if (day === 1) {
retMonth = month - 1;
if (retMonth < 0) { retMonth = 11; retYear--; }
}
const lastDay = new Date(retYear, retMonth + 1, 0);
const d = String(lastDay.getDate()).padStart(2, '0');
const m = String(lastDay.getMonth() + 1).padStart(2, '0');
return `${d}-${m}-${retYear}`;
} catch(e) { return "NIL"; }
}
function viewDocument(url) {
  if (!url) { myAlert("❌ No document found!"); return; }
  _openCloudinaryDoc(url);
}
function openBase64Doc(key) {
  const dataUrl = window['_b64doc_' + key] || "";
  if (!dataUrl) { myAlert("❌ Document not found!"); return; }

  // If it's a Cloudinary URL (not base64), use fetch→blob
  if (dataUrl.startsWith('http') && dataUrl.includes('cloudinary')) {
    _openCloudinaryDoc(dataUrl);
    return;
  }
  // Base64 document
  try {
    const arr  = dataUrl.split(',');
    const mime = (arr[0].match(/:(.*?);/) || [])[1] || 'application/pdf';
    const bstr = atob(arr[arr.length > 1 ? 1 : 0]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    const blob    = new Blob([u8arr], { type: mime });
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
    setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
  } catch(e) {
    window.open(dataUrl, '_blank');
  }
}
function triggerFile() {
const fileInput = document.getElementById('docUpload');
if (fileInput) {
fileInput.click();
} else {
console.error("Error: Element with ID 'docUpload' not found in HTML.");
}
}
const docUploadEl = document.getElementById('docUpload');
if (docUploadEl) {
docUploadEl.addEventListener('change', async function () {
const file = this.files[0];
if (!file) return;
if (file.type !== "application/pdf") {
myAlert("❌ Only PDF allowed!");
this.value = "";
return;
}
const fileNameLabel = document.getElementById('fileName');
if (fileNameLabel) fileNameLabel.innerText = "✅ " + file.name;
await uploadDocument(file);
});
}
function renderVirtual() {
const container = document.querySelector('.scroll-area');
const tbody = document.getElementById('tableBody');
if (!container || !tbody) return;
const scrollTop = container.scrollTop;
const viewportHeight = container.clientHeight;
const totalRows = window.filteredData.length;
let startIndex = Math.floor(scrollTop / ROW_HEIGHT) - 10;
startIndex = Math.max(0, startIndex);
let endIndex = Math.ceil((scrollTop + viewportHeight) / ROW_HEIGHT) + 10;
endIndex = Math.min(totalRows, endIndex);
const topPadding = startIndex * ROW_HEIGHT;
const bottomPadding = Math.max(0, (totalRows - endIndex) * ROW_HEIGHT);
const visibleData = window.filteredData.slice(startIndex, endIndex);
let html = '';
if (topPadding > 0) {
html += `<tr><td colspan="35" style="height:${topPadding}px; border:none;"></td></tr>`;
}
visibleData.forEach((row, idx) => {
let rowData = row;
let gno = rowData.field1 || "";
let changedFields = Array.isArray(rowData.changed_fields)
? rowData.changed_fields
: [];
let rowBg = (rowData.field28 === "DELETED") ? 'style="background-color: #ffebee;"' : '';
let rowClass = (rowData.field28 === "DELETED") ? 'soft-deleted' : '';
html += `<tr onclick="selectRow(this)" data-id="${row.uniqueId}" class="${rowClass} ums-row-animate" ${rowBg}>`;
html += `<td>${gno}</td>`;
for (let i = 2; i <= 31; i++) {
let key = 'field' + i;
let val = rowData[key] || "";
if (i === 28 && val === "DELETED") {
val = `<span style="color:#d32f2f; font-weight:bold;">DELETED</span>`;
}
if (i === 30) {
let docURL = row.document_url || row.field30 || "";
if (docURL && docURL !== "") {
const safeKey30 = (row.uniqueId || idx).toString().replace(/[^a-z0-9]/gi,'_');
val = `<button onclick="openBase64Doc('doc30_${safeKey30}')" style="background:#2563eb; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">📄 View</button>`;
window['_b64doc_doc30_' + safeKey30] = docURL;
} else {
val = `<span style="color:#94a3b8;">No Document</span>`;
}
html += `<td>${val}</td>`;
continue;
}
if (i === 31) {
let transferURL = row.field31 || "";
if (transferURL && transferURL !== "") {
const safeKey31 = (row.uniqueId || idx).toString().replace(/[^a-z0-9]/gi,'_');
val = `<button onclick="openBase64Doc('doc31_${safeKey31}')" style="background:#e65100; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">📤 View</button>`;
window['_b64doc_doc31_' + safeKey31] = transferURL;
} else {
val = `<span style="color:#94a3b8;">No Document</span>`;
}
html += `<td>${val}</td>`;
continue;
}
if ([7, 14, 15, 16, 17, 18, 19].includes(i) && val.includes("-")) {
let parts = val.split("-");
if (parts[0].length === 4) {
val = `${parts[2]}/${parts[1]}/${parts[0]}`;
}
}
// field19 (Inter Division Transfer Date) — blank → NIL
if (i === 19 && (!val || val.trim() === "")) {
val = '<span style="color:#94a3b8;font-style:italic;">NIL</span>';
}
if (changedFields.includes(key)) {
let oldVal = (rowData._oldData?.[key] || "")
.toUpperCase()
.replace(/\s+/g, " ")
.replace(/–/g, "-")
.trim();
let newVal = (val || "")
.toUpperCase()
.replace(/\s+/g, " ")
.replace(/–/g, "-")
.trim();
if (oldVal === newVal) {
}
else if (newVal.includes("/") && oldVal) {
let newParts = newVal.split("/").map(x => x.trim());
let oldParts = oldVal.split("/").map(x => x.trim());
let originalParts = val.split("/");
let result = newParts.map((part, index) => {
if (!oldParts.includes(part)) {
return `<span class="update-highlight">${originalParts[index]}</span>`;
} else {
return originalParts[index];
}
});
val = result.join("/");
}
else {
val = `<span class="update-highlight">${val}</span>`;
}
}
html += `<td title="${val.replace(/<[^>]+>/g, '')}">${val}</td>`;
}
html += `</tr>`;
});
if (bottomPadding > 0) {
html += `<tr><td colspan="35" style="height:${bottomPadding}px; border:none;"></td></tr>`;
}
tbody.innerHTML = html;
}
let searchTimeout;
function handleSearch(val) {
clearTimeout(searchTimeout);
searchTimeout = setTimeout(() => {
val = val.toLowerCase();
window.filteredData = window.fullData.filter(row =>
(row.field2 || "").toLowerCase().includes(val) ||
(row.field4 || "").toLowerCase().includes(val) ||
(row.field5 || "").toLowerCase().includes(val)
);
renderVirtual();
}, 300);
}


// ═══════════════════════════════════════
// JS Block 5
// ═══════════════════════════════════════

// ✅ Supabase keys removed — Edge Function handles DB
// supabaseClient ab sirf realtime ke liye (read-only anon key)
const SUPABASE_URL = "https://dgzdessdyrxhsbjxeahi.supabase.co";
const SUPABASE_KEY = "sb_publishable_qzNG3P7YBOQ-WwjAe8bIgw_mNMJKrcG"; // anon key — safe to expose
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
async function loadData() {
let allData = [];
let from = 0;
const limit = 1000;
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const uploadDiv = document.getElementById("uploadStatus");
if (uploadDiv) uploadDiv.style.display = "block";
while (true) {
const { data, error } = await supabaseClient
.from("gradation_list")
.select("*")
.range(from, from + limit - 1);
if (error) {
console.error(error);
break;
}
if (!data || data.length === 0) break;
allData = allData.concat(data);
from += limit;
if (progressText) {
progressText.innerText = `Loading data... ${allData.length}`;
}
if (progressBar) {
let percentage = Math.min((allData.length / 30000) * 100, 95);
progressBar.style.width = percentage + "%";
progressBar.innerText = Math.round(percentage) + "%";
}
await new Promise(r => setTimeout(r, 0));
}
if (typeof loadDataIntoMemory === "function") {
loadDataIntoMemory(allData);
} else {
console.error("loadDataIntoMemory function not found!");
}
if (progressText) progressText.innerText = "✅ " + allData.length + " Records Loaded!";
if (progressBar) {
progressBar.style.width = "100%";
progressBar.innerText = "100%";
progressBar.style.background = "linear-gradient(90deg,#16a34a,#22c55e)";
}
// Hide immediately after short delay
setTimeout(() => {
if (uploadDiv) { uploadDiv.style.display = "none"; }
if (progressBar) { progressBar.style.width = "0%"; progressBar.innerText = "0%"; }
if (progressText) { progressText.innerText = "Starting..."; }
}, 800);
console.log("✅ Total loaded into memory:", allData.length);
}
function getNextSerialNumber() {
if (!window.fullData || window.fullData.length === 0) return 1;
const numbers = window.fullData.map(item => parseInt(item.field1) || 0);
const maxNumber = Math.max(...numbers);
return maxNumber + 1;
}
function loadDataIntoMemory(data) {
const mappedData = data.map(item => ({
uniqueId: item.unique_id,
...item.data
}));
const seen = new Set();
window.fullData = mappedData
.slice()
.reverse()
.filter(item => {
if (seen.has(item.uniqueId)) return false;
seen.add(item.uniqueId);
return true;
})
.reverse();
console.log("✅ After removing duplicates (Latest kept):", window.fullData.length);
window.fullData.sort((a, b) => {
let valA = (a.field1 !== undefined && a.field1 !== null) ? a.field1.toString().trim() : "";
let valB = (b.field1 !== undefined && b.field1 !== null) ? b.field1.toString().trim() : "";
let aNo = valA === "" ? Infinity : parseInt(valA);
let bNo = valB === "" ? Infinity : parseInt(valB);
if (aNo !== bNo) return aNo - bNo;
return (a.uniqueId > b.uniqueId) ? 1 : -1;
});
window.filteredData = [...window.fullData];
console.log("✅ Final Records:", window.fullData.length);
renderVirtual();
}
async function deleteFromSupabase(uniqueID) {
const { error } = await supabaseClient
.from("gradation_list")
.delete()
.eq("unique_id", uniqueID);
if (error) {
console.error("Delete error:", error);
} else {
console.log("🗑 Deleted:", uniqueID);
}
}
let presenceChannel = null;
function _realtimeUser()     { return window.currentUser || 'Unknown'; }
function _realtimeDistrict() {
var u = window.currentUser || '';
if (!u) return 'UNKNOWN';
if (u === 'DPI') return 'DPI';
if (u.startsWith('JD')) {
var jdPart = u.replace(/^JD/, '').trim();
return 'JD ' + jdPart;
}
if (u.startsWith('DEO')) {
return u.replace(/^DEO/, '').trim() || u;
}
return u;
}
const _rowLocks = {};
function initRealtime() {
if (presenceChannel) {
supabaseClient.removeChannel(presenceChannel);
presenceChannel = null;
}
const me = _realtimeUser();
const dist = _realtimeDistrict();
presenceChannel = supabaseClient.channel('ms-gradation-collab', {
config: { presence: { key: me } }
});
presenceChannel
.on('presence', { event: 'sync' }, () => {
updateOnlineUsersUI(presenceChannel.presenceState());
})
.on('presence', { event: 'join' }, ({ key, newPresences }) => {
const _p = newPresences?.[0]; const _name = (_p?.district && _p.district !== 'UNKNOWN') ? _p.district : _labelFromKey(key); showNotification(`${_name} joined`, 'join');
})
.on('presence', { event: 'leave' }, ({ key }) => {
showNotification(`${_labelFromKey(key)} went offline`, 'leave');
})
.on('broadcast', { event: 'row-locked' }, ({ payload }) => {
if (payload.user !== me) handleExternalLock(payload);
})
.on('broadcast', { event: 'row-unlocked' }, ({ payload }) => {
handleExternalUnlock(payload);
})
.on('broadcast', { event: 'data-update' }, ({ payload }) => {
if (payload.user !== me) {
showNotification(payload.msg || 'Data updated by another user', payload.type || 'update');
const formOpen = document.getElementById('formOverlay')?.style.display === 'block';
const editingRow = selectedRowElement !== null;
if (!formOpen && !editingRow) {
loadData();
} else {
const bell = document.getElementById('notifBell');
if (bell) { bell.style.display = 'inline'; bell.classList.add('pulse-animation'); }
}
}
})
.on('broadcast', { event: 'title-update' }, ({ payload }) => {
if (payload.user !== me && payload.title) {
_applyRemoteTitleUpdate(payload.title);
}
})
.subscribe(async (status) => {
if (status === 'SUBSCRIBED') {
await presenceChannel.track({
user: me,
district: dist,
onlineAt: new Date().toISOString()
});
}
});
}
function _labelFromKey(key) {
if (!key) return 'User';
if (key === 'DPI') return 'DPI';
if (key.startsWith('JD')) return 'JD ' + key.replace(/^JD/, '').trim();
if (key.startsWith('DEO')) return key.replace(/^DEO/, '').trim();
return key;
}
function updateOnlineUsersUI(state) {
const div = document.getElementById('onlineStatus');
if (!div) return;
const entries = Object.entries(state);
if (entries.length === 0) {
div.innerHTML = '<span style="color:#999;font-style:italic;">No other users online</span>';
return;
}
div.innerHTML = entries.map(([key, presArr]) => {
const p = Array.isArray(presArr) ? presArr[0] : presArr;
let label = '';
if (p && p.district && p.district !== 'UNKNOWN' && p.district !== 'Unknown') {
label = p.district;
} else if (p && p.user && p.user !== 'Unknown') {
label = _labelFromKey(p.user);
} else {
label = _labelFromKey(key);
}
const since = (p && p.onlineAt) ? new Date(p.onlineAt).toLocaleTimeString('en-IN') : '';
return `<span title="${label} | Online since: ${since}"
style="padding:2px 8px; background:#e8f5e9; border-radius:12px; font-size:10px; border:1px solid #4caf50; white-space:nowrap;">
🟢 ${label}
</span>`;
}).join('');
}
function lockRow(rowId) {
if (!presenceChannel || !rowId) return;
_rowLocks[rowId] = { user: _realtimeUser(), district: _realtimeDistrict(), self: true };
presenceChannel.send({
type: 'broadcast',
event: 'row-locked',
payload: { rowId, user: _realtimeUser(), district: _realtimeDistrict() }
});
}
function unlockRow(rowId) {
if (!presenceChannel || !rowId) return;
delete _rowLocks[rowId];
presenceChannel.send({
type: 'broadcast',
event: 'row-unlocked',
payload: { rowId }
});
}
function handleExternalLock(data) {
_rowLocks[data.rowId] = { user: data.user, district: data.district, self: false };
const row = document.querySelector(`#tableBody tr[data-id="${data.rowId}"]`);
if (row) {
row.classList.add('row-locked-external');
row.title = `🔒 Being edited by ${data.district} (${data.user})`;
if (!row.querySelector('.lock-icon')) {
const icon = document.createElement('span');
icon.className = 'lock-icon';
icon.textContent = ' 🔒';
row.cells[2].appendChild(icon);
}
}
}
function handleExternalUnlock(data) {
delete _rowLocks[data.rowId];
const row = document.querySelector(`#tableBody tr[data-id="${data.rowId}"]`);
if (row) {
row.classList.remove('row-locked-external');
row.title = '';
row.querySelector('.lock-icon')?.remove();
}
}
const _origRenderVirtual = renderVirtual;
renderVirtual = function() {
_origRenderVirtual.apply(this, arguments);
Object.keys(_rowLocks).forEach(rowId => {
const lock = _rowLocks[rowId];
if (!lock.self) {
const row = document.querySelector(`#tableBody tr[data-id="${rowId}"]`);
if (row && !row.classList.contains('row-locked-external')) {
row.classList.add('row-locked-external');
row.title = `🔒 Being edited by ${lock.district} (${lock.user})`;
if (!row.querySelector('.lock-icon')) {
const icon = document.createElement('span');
icon.className = 'lock-icon';
icon.textContent = ' 🔒';
row.cells[2].appendChild(icon);
}
}
}
});
};
const _toastColors = {
update: '#4caf50', join: '#2196f3', leave: '#9e9e9e',
delete: '#f44336', info: '#607d8b'
};
function showNotification(msg, type = 'info') {
const color = _toastColors[type] || _toastColors.info;
const toast = document.createElement('div');
toast.style.cssText = `
position:fixed; bottom:20px; right:20px; z-index:100000;
background:#1e293b; color:white;
padding:11px 18px; border-radius:8px;
box-shadow:0 6px 20px rgba(0,0,0,0.35);
border-left:5px solid ${color};
font-size:13px; font-family:'Inter',sans-serif;
max-width:320px; word-wrap:break-word;
`;
toast.innerHTML = `🔔 ${msg}`;
document.body.appendChild(toast);
setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.4s'; setTimeout(() => toast.remove(), 400); }, 4500);
}
function broadcastDataUpdate(msg, type = 'update') {
if (!presenceChannel) return;
presenceChannel.send({
type: 'broadcast',
event: 'data-update',
payload: { msg, type, user: _realtimeUser(), district: _realtimeDistrict() }
});
}
window.addEventListener('load', () => {
setTimeout(() => {
if (typeof supabaseClient !== 'undefined' && window.currentUser) initRealtime();
}, 1500);
});
window.addEventListener("load", () => {
setTimeout(handle18Mode, 500);
});
let lastScrollTop = 0;
document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector('.scroll-area');
if (container) {
container.addEventListener("scroll", () => {
if (container.scrollTop !== lastScrollTop) {
lastScrollTop = container.scrollTop;
requestAnimationFrame(() => {
renderVirtual();
});
}
});
}
});
async function updateUploadStatus(event) {
  const file = event.target.files[0];
  const display = document.getElementById('fileNameDisplay');
  const premiumBox = display ? display.closest('.premium-box') : null;
  if (!file) return;

  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  if (file.size > MAX_SIZE) {
    myAlert("❌ File size cannot exceed 5MB.\nYour file: " + (file.size / 1024 / 1024).toFixed(2) + "MB");
    event.target.value = "";
    return;
  }

  display.innerHTML = "⏳ Processing...";
  display.style.color = "#f39c12";

  // Step 1: Read as base64 for immediate local viewing (like transfer upload)
  const reader = new FileReader();
  reader.onload = async function(e) {
    const base64 = e.target.result;
    window['_b64doc_doc30_loaded'] = base64;
    uploadedFileURL = base64; // use base64 as primary URL

    // Upload to Supabase Storage
    try {
      await uploadDocument(file);
    } catch(err) {
      console.warn('Supabase upload failed:', err.message);
    }

    // Always succeed since base64 is ready
    var viewHtml = ['<span style="color:#27ae60">&#x2705; ' + file.name + '</span>',
      ' &nbsp;<button id="doc30ViewBtn" style="background:#1565c0;color:white;',
      'border:none;padding:2px 7px;border-radius:4px;cursor:pointer;',
      'font-size:11px;font-weight:bold;">&#x1F441; View</button>'].join('');
    display.innerHTML = viewHtml;
    display.style.color = '#27ae60';
    if (premiumBox) {
      premiumBox.style.borderColor = '#2e7d32';
      premiumBox.style.background  = '#f0fff4';
      premiumBox.onclick = null;
    }
    setTimeout(function() {
      var vb = document.getElementById('doc30ViewBtn');
      if (vb) vb.onclick = function() { openBase64Doc('doc30_loaded'); };
    }, 30)
  };
  reader.onerror = function() {
    display.innerHTML = "❌ File read failed";
    display.style.color = "#e74c3c";
  };
  reader.readAsDataURL(file);
}
function generateSerialNumber() {
// Use fullData (not visible DOM rows) so virtual scrolling doesn't cause wrong serial
if (!window.fullData || window.fullData.length === 0) return 1;
const numbers = window.fullData.map(item => parseInt(item.field1) || 0).filter(n => !isNaN(n));
return numbers.length > 0 ? Math.max(...numbers) + 1 : 1;
}
function handleUpdateClick() {
const uniqueId = document.getElementById("in3").value.trim().toUpperCase();
if (!uniqueId) {
myAlert("⚠️ Please enter Unique ID first.");
return;
}
let recordFound = false;
if (window.fullData && window.fullData.length > 0) {
recordFound = window.fullData.some(row =>
(row.uniqueId || "").trim().toUpperCase() === uniqueId
);
}
if (!recordFound) {
myAlert("❌ Record not found in list. Update not allowed.");
return;
}
saveEntry(false);
}
function logoutUser() {
if(confirm("Do you want to Logout?")) {
auditLog('LOGOUT', 'User logged out');
securityClearTimer();
if (selectedRowElement && typeof unlockRow === 'function') unlockRow(selectedRowElement.dataset.id);
if (presenceChannel) {
presenceChannel.untrack();
supabaseClient.removeChannel(presenceChannel);
presenceChannel = null;
}
const loginOverlay = document.getElementById('loginOverlay');
if (loginOverlay) loginOverlay.style.display = 'flex';
document.getElementById('userField').value = "";
document.getElementById('passField').value = "";
const errorDiv = document.getElementById('loginError');
if (errorDiv) errorDiv.innerText = "";
localStorage.removeItem('isLoggedIn');
window.currentUser = null;
const _ubL = document.getElementById('userBadge');
if(_ubL){ _ubL.textContent=''; _ubL.style.display='none'; }
}
}
function checkDuplicateID(inputEl) {
let enteredID = inputEl.value.trim().toUpperCase();
if (enteredID.length === 0) return;
if (typeof selectedRowElement !== 'undefined' && selectedRowElement !== null) {
let existingRowID = selectedRowElement.cells[2].innerText.trim().toUpperCase();
if (existingRowID === enteredID) {
return;
}
}
let isDuplicate = false;
if (window.fullData && window.fullData.length > 0) {
isDuplicate = window.fullData.some(row => row.uniqueId === enteredID);
}
if (isDuplicate) {
myAlert("⚠️ This Unique ID (" + enteredID + ") is already submitted!");
inputEl.value = "";
inputEl.classList.remove('invalid-field');
}
}
function viewHistory() {
if (!selectedRowElement) {
myAlert("⚠️ Please select a row first!");
return;
}
const uniqueId = selectedRowElement.cells[2].innerText.trim();
const record = window.fullData.find(r => (r.uniqueId || "").trim().toUpperCase() === uniqueId.toUpperCase());
const history = record ? record.history_log : null;
if (!history || history.length === 0) {
myAlert("❌ No history found for this record.");
return;
}
let output = "";
history.forEach((h, index) => {
let before = JSON.parse(h.before);
let after = JSON.parse(h.after);
let hasChange = false;
function normalizeDate(val) {
if (!val) return "";
if (val.includes("-")) {
let parts = val.split("-");
if (parts.length === 3) {
if (parts[0].length === 2) {
return `${parts[2]}-${parts[1]}-${parts[0]}`;
}
return val;
}
}
return val;
}
output += `<div style="margin-bottom:15px">`;
output += `<b>Update ${index + 1} (${h.time})</b><br><br>`;
for (let key in before) {
let beforeVal = before[key] || "-";
let afterVal = after[key] || "-";
let normBefore = normalizeDate(beforeVal);
let normAfter = normalizeDate(afterVal);
if (normBefore !== normAfter) {
hasChange = true;
output += `
<div style="margin-bottom:10px; text-align:left;">
<b>${fieldNames[key] || key}</b><br>
Before: <span style="color:red">${beforeVal}</span><br>
After: <span style="color:green">${afterVal}</span>
</div>
`;
}
}
if (!hasChange) {
output += `<i>No actual changes</i>`;
}
output += `</div>`;
});
showHistoryPopup(output);
}
function saveHistory(oldData, newData, uniqueId) {
if (!historyStore[uniqueId]) {
historyStore[uniqueId] = [];
}
historyStore[uniqueId].push({
time: new Date().toLocaleString(),
before: JSON.stringify(oldData),
after: JSON.stringify(newData)
});
}
function showHistoryPopup(htmlData) {
if (document.getElementById('historyPopupBox')) document.getElementById('historyPopupBox').remove();
if (document.getElementById('popupOverlay')) document.getElementById('popupOverlay').remove();
const overlay = document.createElement('div');
overlay.id = 'popupOverlay';
Object.assign(overlay.style, {
position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
backgroundColor: 'rgba(0,0,0,0.7)', zIndex: '9999'
});
document.body.appendChild(overlay);
const box = document.createElement('div');
box.id = 'historyPopupBox';
Object.assign(box.style, {
position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
width: '90%', maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto',
backgroundColor: 'white', padding: '20px', zIndex: '10000',
borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', fontFamily: 'sans-serif'
});
let header = `
<div style="display:flex; justify-content:space-between; align-items:center; position:sticky; top:-20px; background:white; padding:10px 0; border-bottom:2px solid #eee; margin-bottom:15px; z-index:11;">
<h3 style="margin:0; color:#333;">📜 Update History</h3>
<button onclick="closeHistoryPopup()" style="background:#ff4757; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer; font-weight:bold;">CLOSE [X]</button>
</div>
`;
box.innerHTML = header + htmlData;
document.body.appendChild(box);
overlay.onclick = closeHistoryPopup;
}
function closeHistoryPopup() {
const box = document.getElementById('historyPopupBox');
const overlay = document.getElementById('popupOverlay');
if (box) box.remove();
if (overlay) overlay.remove();
}
function getSummaryDocKey(officeKey) {
return 'summaryDoc_' + officeKey;
}
function summaryUploadDoc(officeKey) {
if (window.currentUser !== officeKey && window.currentUser !== 'DPI') {
myAlert('❌ You can only upload your own document.');
return;
}
const fileInput = document.getElementById('fileUpload_' + officeKey);
if (fileInput) fileInput.click();
}
async function handleSummaryFileUpload(event, officeKey) {
const file = event.target.files[0];
if (!file) return;
if (window.currentUser !== officeKey && window.currentUser !== 'DPI') {
myAlert('❌ Unauthorized upload attempt!');
event.target.value = '';
return;
}
const MAX_SUMMARY_SIZE = 1 * 1024 * 1024; // 1MB
if (file.size > MAX_SUMMARY_SIZE) {
myAlert("❌ Summary Document size cannot exceed 1MB.\nYour file: " + (file.size / 1024).toFixed(1) + "KB\nPlease compress the file and upload again.");
event.target.value = '';
return;
}
const statusDiv = document.getElementById('uploadStatus_' + officeKey);
if (statusDiv) { statusDiv.innerHTML = '⏳ Uploading...'; statusDiv.style.color = '#f39c12'; }
let publicUrl = null;
try {
const fd = new FormData();
    const _sp = 'summary_docs/' + officeKey + '/' + Date.now() + '_' + file.name.replace(/[^a-zA-Z0-9._-]/g,'_');
    const { error: _serr } = await supabaseClient.storage.from('documents').upload(_sp, file, { upsert: true });
    if (_serr) throw new Error(_serr.message);
    const { data: _surl } = supabaseClient.storage.from('documents').getPublicUrl(_sp);
    publicUrl = _surl.publicUrl;
  } catch (err) {
    console.warn('Cloudinary upload failed, using local fallback:', err.message);
  }
const meta = {
name: file.name,
url: publicUrl,
local_data: null,
uploadedBy: window.currentUser,
uploadedAt: new Date().toLocaleString('hi-IN')
};
if (!publicUrl) {
await new Promise(resolve => {
const reader = new FileReader();
reader.onload = ev => { meta.local_data = ev.target.result; resolve(); };
reader.readAsDataURL(file);
});
}
localStorage.setItem(getSummaryDocKey(officeKey), JSON.stringify(meta));
if (statusDiv) { statusDiv.innerHTML = '✅ ' + file.name; statusDiv.style.color = '#27ae60'; }
myAlert('✅ Document Successfully Uploaded!\nFile: ' + file.name + '\n\nReopen Summary — View button will appear.');
event.target.value = '';
}
function summaryViewDoc(officeKey) {
if (!officeKey) { myAlert('❌ Office key missing.'); return; }
const stored = localStorage.getItem(getSummaryDocKey(officeKey));
if (!stored) {
myAlert('❌ No Document uploaded for ' + officeKey + '.');
return;
}
try {
const docInfo = JSON.parse(stored);
if (docInfo.local_data) {
const win = window.open('', '_blank');
if (!win) { myAlert('❌ Popup blocked! Please allow popups in your browser.'); return; }
win.document.write('<html><head><title>' + officeKey + ' Document</title></head><body style="margin:0;padding:0;"><iframe src="' + docInfo.local_data + '" style="width:100%;height:100vh;border:none;"></iframe></body></html>');
win.document.close();
return;
}
if (docInfo.url && !docInfo.url.startsWith('local:')) {
const _dUrl = docInfo.url;
    if (_dUrl && _dUrl.includes('cloudinary')) {
      _openCloudinaryDoc(_dUrl);
    } else {
      window.open(_dUrl, '_blank');
    }
return;
}
myAlert('❌ Document data not found. Please upload again.');
} catch(e) {
myAlert('❌ Error reading document.');
}
}


// ═══════════════════════════════════════
// JS Block 6
// ═══════════════════════════════════════

var _pdfDoc       = null;
var _pdfScale     = 1.5;
var _pdfCurrentPage = 1;
var _currentPdfUrl  = '';

if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

function _openCloudinaryDoc(url) {
  if (!url) return;
  _currentPdfUrl = url;
  var fname = decodeURIComponent(url.split('/').pop() || 'document');
  var modal = document.getElementById('pdfViewerModal');
  var wrap  = document.getElementById('pdfCanvasWrap');
  var title = document.getElementById('pdfViewerTitle');
  var info  = document.getElementById('pdfPageInfo');
  if (title) title.innerText = fname;
  if (info)  info.innerText  = 'Cloudinary Document';
  if (modal) modal.style.display = 'flex';

  // Store URL globally for copy button
  window._cldCopyUrl = url;

  if (wrap) {
    wrap.innerHTML = [
      '<div style="color:white;text-align:center;padding:40px 30px;max-width:700px;margin:auto;">',
      '<div style="font-size:48px;margin-bottom:12px;">&#x1F4C4;</div>',
      '<div style="font-size:15px;font-weight:700;margin-bottom:6px;">' + fname + '</div>',
      '<div style="font-size:12px;color:#fcd34d;margin-bottom:20px;line-height:1.6;">',
      '&#9888; Edge browser local file se Cloudinary URLs block karta hai.<br>',
      'Neeche URL copy karke <b>new tab mein paste</b> karein.',
      '</div>',
      '<div style="display:flex;gap:8px;margin-bottom:16px;">',
      '<input id="cldUrlBox" type="text" readonly onclick="this.select()" ',
      'style="flex:1;padding:10px 12px;border-radius:6px;border:none;font-size:11px;',
      'background:#1a2540;color:#a8c4ff;font-family:monospace;outline:none;cursor:text;">',
      '<button id="cldCopyBtn" style="padding:10px 16px;background:#1e6fe0;color:white;',
      'border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:700;">',
      '&#x1F4CB; Copy</button>',
      '</div>',
      '<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:20px;">',
      'Ctrl+C ke baad Edge address bar mein Ctrl+V paste karein',
      '</div>',
      '<div style="background:rgba(240,165,0,0.12);border:1px solid rgba(240,165,0,0.3);',
      'border-radius:8px;padding:12px;font-size:11px;color:#fcd34d;text-align:left;">',
      '&#128161; <b>Permanent Fix:</b> HTML file ko Netlify/Vercel pe deploy karo — PDF direct preview hoga.',
      '</div></div>'
    ].join('');

    // Set URL value and copy button handler after DOM update
    setTimeout(function() {
      var box = document.getElementById('cldUrlBox');
      var btn = document.getElementById('cldCopyBtn');
      if (box) box.value = window._cldCopyUrl || '';
      if (btn) btn.onclick = function() {
        var b = document.getElementById('cldUrlBox');
        if (b) { b.select(); document.execCommand('copy'); }
        if (typeof umsToast === 'function') umsToast('✅ URL Copied!', 'success', 2000);
      };
    }, 50);
  }
}

function _downloadPdfDirect() {
  if (!_currentPdfUrl) return;
  // fl_attachment forces correct Content-Disposition: attachment header
  var dlUrl = _currentPdfUrl
    .replace('/image/upload/', '/image/upload/fl_attachment/')
    .replace('/raw/upload/',   '/raw/upload/fl_attachment/');
  var a = document.createElement('a');
  a.href = dlUrl;
  a.download = decodeURIComponent(_currentPdfUrl.split('/').pop() || 'document.pdf');
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  closePdfViewer();
  if (typeof umsToast === 'function') umsToast('⬇️ Document download ho raha hai...', 'success', 3000);
}

function closePdfViewer() {
  var modal = document.getElementById('pdfViewerModal');
  var wrap  = document.getElementById('pdfCanvasWrap');
  if (wrap)  wrap.innerHTML = '';
  if (modal) modal.style.display = 'none';
  _pdfDoc = null; _currentPdfUrl = '';
}

var _pdfModalEl = document.getElementById('pdfViewerModal');
if (_pdfModalEl) _pdfModalEl.addEventListener('click', function(e) { if (e.target === this) closePdfViewer(); });


// ═══════════════════════════════════════
// JS Block 7
// ═══════════════════════════════════════

// ══ CLOUD PASSWORD SYNC — har device pe sync hoga ══
const _PW_SUPABASE_KEY = 'custom_passwords';

async function _savePasswordToCloud(userId, newPass) {
  // Sirf user_passwords table mein save karo (password change log)
  try {
    const { error } = await supabaseClient
      .from('user_passwords')
      .upsert({
        user_id: userId,
        password: newPass,
        changed_by: window.currentUser || 'DPI',
        changed_at: new Date().toISOString()
      }, { onConflict: 'user_id' });
    if (error) throw error;
    console.log('✅ Password change saved to user_passwords for:', userId);
    return true;
  } catch(e) { console.warn('Cloud pw save failed:', e.message); return false; }
}

async function _loadPasswordsFromCloud() {
  const result = {};
  try {
    // users table se naye custom users load karo
    const { data: uData } = await supabaseClient
      .from('users').select('userid, password');
    if(uData) uData.forEach(row => { if(row.userid && row.password) result[row.userid] = row.password; });
  } catch(e) {}
  try {
    // user_passwords table se changed passwords load karo (override karo)
    const { data: pData } = await supabaseClient
      .from('user_passwords').select('user_id, password');
    if(pData) pData.forEach(row => { if(row.user_id && row.password) result[row.user_id] = row.password; });
  } catch(e) {}
  return result;
}

async function _syncCloudPasswordsToLocal() {
  const cloud = await _loadPasswordsFromCloud();
  const local = JSON.parse(localStorage.getItem('msErp_customPasswords') || '{}');
  const merged = Object.assign({}, local, cloud);
  localStorage.setItem('msErp_customPasswords', JSON.stringify(merged));
  Object.assign(districtCredentials, merged);
  return merged;
}

// Override saveDpiNewPassword → save to cloud
saveDpiNewPassword = function() {
  const newPass = document.getElementById('dpiNewPass')?.value.trim();
  const confirmPass = document.getElementById('dpiConfirmPass')?.value.trim();
  const errDiv = document.getElementById('dpiEditPassErr');
  if (!newPass || newPass.length < 4) { if(errDiv) errDiv.innerHTML = '❌ Min 4 characters.'; return; }
  if (newPass !== confirmPass) { if(errDiv) errDiv.innerHTML = '❌ Passwords do not match.'; return; }
  const custom = JSON.parse(localStorage.getItem('msErp_customPasswords') || '{}');
  const oldPass = custom['DPI'] || districtCredentials['DPI'] || '(default)';
  custom['DPI'] = newPass;
  localStorage.setItem('msErp_customPasswords', JSON.stringify(custom));
  districtCredentials['DPI'] = newPass;
  if(typeof auditLog==='function') auditLog('DPI_PASSWORD_CHANGED','DPI password changed');
  if(errDiv) errDiv.innerHTML = '<span style="color:#1565c0;font-weight:bold;">⏳ Saving to cloud (all devices)...</span>';
  _savePasswordToCloud('DPI', newPass).then(ok => {
    if(errDiv) errDiv.innerHTML = ok
      ? '<span style="color:#2e7d32;font-weight:bold;">✅ Saved! All devices pe apply hoga!</span>'
      : '<span style="color:#e65100;font-weight:bold;">✅ Locally saved (cloud sync failed)</span>';
    setTimeout(() => {
      document.getElementById('dpiEditPassModal')?.remove();
      if(typeof buildDistPassTable==='function') buildDistPassTable('dpi');
      if(typeof showDistPassTab==='function') showDistPassTab('dpi');
    }, 1800);
  });
  const resetLog = JSON.parse(localStorage.getItem('dpi_pw_reset_log') || '[]');
  resetLog.unshift({ userId:'DPI', dateTime:new Date().toLocaleString('en-IN',{hour12:true}), timestamp:Date.now(), resetBy:'DPI (Self)', oldPass, newPass });
  localStorage.setItem('dpi_pw_reset_log', JSON.stringify(resetLog));
};

// Override saveUniPassword → save to cloud
saveUniPassword = function(userId, userType) {
  const newPass = document.getElementById('uniNewPass')?.value.trim();
  const confirmPass = document.getElementById('uniConfirmPass')?.value.trim();
  const errDiv = document.getElementById('uniEditPassErr');
  if (!newPass || newPass.length < 4) { if(errDiv) errDiv.innerHTML = '❌ Min 4 characters.'; return; }
  if (newPass !== confirmPass) { if(errDiv) errDiv.innerHTML = '❌ Passwords do not match.'; return; }
  const custom = JSON.parse(localStorage.getItem('msErp_customPasswords') || '{}');
  const oldPass = custom[userId] || districtCredentials[userId] || '(default)';
  custom[userId] = newPass;
  localStorage.setItem('msErp_customPasswords', JSON.stringify(custom));
  districtCredentials[userId] = newPass;
  if(typeof auditLog==='function') auditLog(userType+'_PASSWORD_CHANGED', userId+' pw changed by '+(window.currentUser||'DPI'));
  if(errDiv) errDiv.innerHTML = '<span style="color:#1565c0;font-weight:bold;">⏳ Saving to cloud (all devices)...</span>';
  _savePasswordToCloud(userId, newPass).then(ok => {
    if(errDiv) errDiv.innerHTML = ok
      ? '<span style="color:#2e7d32;font-weight:bold;">✅ ' + userId + ' — All devices pe apply hoga!</span>'
      : '<span style="color:#e65100;font-weight:bold;">✅ Locally saved (cloud sync failed)</span>';
    setTimeout(() => {
      document.getElementById('uniEditPassModal')?.remove();
      const tab = userType==='DPI'?'dpi':userType==='JD'?'jd':'deo';
      if(typeof buildDistPassTable==='function') buildDistPassTable(tab);
      if(typeof showDistPassTab==='function') showDistPassTab(tab);
    }, 1800);
  });
  const resetLog = JSON.parse(localStorage.getItem('dpi_pw_reset_log') || '[]');
  resetLog.unshift({ userId, dateTime:new Date().toLocaleString('en-IN',{hour12:true}), timestamp:Date.now(), resetBy:window.currentUser||'DPI', oldPass, newPass });
  localStorage.setItem('dpi_pw_reset_log', JSON.stringify(resetLog));
};

// Supabase users table se user fetch karo
async function _getUserFromCloud(userId) {
  try {
    const { data, error } = await supabaseClient
      .from('users')
      .select('userid, password, level, location')
      .eq('userid', userId)
      .maybeSingle();
    if (error || !data) return null;
    return data;
  } catch(e) { return null; }
}

// Override getEffectivePassword
getEffectivePassword = function(user) {
  const custom = JSON.parse(localStorage.getItem('msErp_customPasswords') || '{}');
  return custom[user] || districtCredentials[user] || null;
};

// Override checkLogin → Supabase users table + cloud passwords sync
checkLogin = async function() {
  const user = document.getElementById('userField').value.trim().toUpperCase();
  const pass = document.getElementById('passField').value.trim();
  const errorDiv = document.getElementById('loginError');
  const blockKey = 'loginBlock_' + user;
  const attemptsKey = 'loginAttempts_' + user;
  const blockData = JSON.parse(localStorage.getItem(blockKey) || 'null');
  if (blockData) {
    const remaining = Math.ceil((blockData.until - Date.now()) / 1000);
    if (remaining > 0) { errorDiv.innerText = '🔒 Account blocked for ' + remaining + 's.'; return; }
    localStorage.removeItem(blockKey); localStorage.removeItem(attemptsKey);
  }
  errorDiv.innerText = '⏳ Verifying from cloud...';

  // Step 1: Supabase users table mein dhundo
  const cloudUser = await _getUserFromCloud(user);
  if (cloudUser && cloudUser.password === pass) {
    // Cloud user found — login success
    localStorage.removeItem(attemptsKey); localStorage.removeItem(blockKey);
    // districtCredentials mein bhi add karo is session ke liye
    districtCredentials[user] = pass;
    window.currentUserLevel = cloudUser.level || 'DEO';
    window.currentUserLocation = cloudUser.location || '';
    document.getElementById('loginOverlay').style.display = 'none';
    window.currentUser = user;
    const _ub = document.getElementById('userBadge');
    if(_ub){ _ub.textContent='👤 '+user; _ub.style.display='inline-block'; }
    if(typeof securityResetTimer==='function') securityResetTimer();
    if(typeof auditLog==='function') auditLog('LOGIN','User logged in via cloud users table');
    if(typeof loadData==='function') loadData();
    if(typeof initRealtime==='function') initRealtime();
    if(typeof _updateTitleHintVisibility==='function') _updateTitleHintVisibility();
    if(typeof checkLockStatus==='function') checkLockStatus();
    errorDiv.innerText = '';
    return;
  }

  // Step 2: Purane districtCredentials + user_passwords table se check karo
  await _syncCloudPasswordsToLocal();
  const correctPass = getEffectivePassword(user);
  if (correctPass && pass === correctPass) {
    localStorage.removeItem(attemptsKey); localStorage.removeItem(blockKey);
    document.getElementById('loginOverlay').style.display = 'none';
    window.currentUser = user;
    const _ub = document.getElementById('userBadge');
    if(_ub){ _ub.textContent='👤 '+user; _ub.style.display='inline-block'; }
    if(typeof securityResetTimer==='function') securityResetTimer();
    if(typeof auditLog==='function') auditLog('LOGIN','User logged in');
    if(typeof loadData==='function') loadData();
    if(typeof initRealtime==='function') initRealtime();
    if(typeof _updateTitleHintVisibility==='function') _updateTitleHintVisibility();
    if(typeof checkLockStatus==='function') checkLockStatus();
    errorDiv.innerText = '';
  } else {
    let attempts = parseInt(localStorage.getItem(attemptsKey) || '0') + 1;
    localStorage.setItem(attemptsKey, attempts);
    if (attempts >= 3) {
      localStorage.setItem(blockKey, JSON.stringify({ until: Date.now() + 5*60*1000 }));
      localStorage.removeItem(attemptsKey);
      errorDiv.innerText = '🔒 3 wrong attempts! Blocked for 5 minutes.';
    } else {
      errorDiv.innerText = '❌ INVALID USER ID OR PASSWORD! (' + attempts + '/3 attempts)';
    }
  }
};
console.log('✅ Cloud Password Sync + Users Table loaded.');


// ═══════════════════════════════════════
// JS Block 8
// ═══════════════════════════════════════

function showAnalytics() {
const rows = window.fullData || [];
if (rows.length === 0) { myAlert("⚠️ Data not loaded yet!"); return; }
if (document.getElementById('analyticsModal')) document.getElementById('analyticsModal').remove();
const modal = document.createElement('div');
modal.id = 'analyticsModal';
modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);z-index:10001;display:flex;align-items:center;justify-content:center;';
modal.innerHTML = `
<div style="background:#f8f9fa;border-radius:12px;width:96%;max-width:1100px;max-height:93vh;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
<!-- Header -->
<div style="background:linear-gradient(135deg,#1a237e,#283593);color:white;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
<div>
<div style="font-size:17px;font-weight:700;letter-spacing:0.3px;">📊 DPI Live Dashboard</div>
<div style="font-size:11px;opacity:0.75;margin-top:2px;">MS Gradation ERP — Real-time Analytics</div>
</div>
<div style="display:flex;align-items:center;gap:10px;">
<span id="dashLiveIndicator" style="font-size:11px;background:rgba(76,175,80,0.3);border:1px solid rgba(76,175,80,0.6);padding:3px 10px;border-radius:20px;">🟢 Live</span>
<button onclick="document.getElementById('analyticsModal').remove()" style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:white;width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:16px;font-weight:bold;">✕</button>
</div>
</div>
<!-- KPI Strip -->
<div id="kpiStrip" style="display:flex;gap:0;border-bottom:1px solid #ddd;flex-shrink:0;background:white;"></div>
<!-- Tab Bar -->
<div style="display:flex;border-bottom:2px solid #e0e0e0;flex-shrink:0;background:white;">
<button class="dashTab" id="dashTab1" onclick="switchDashTab(1)" style="flex:1;padding:11px 6px;border:none;background:#1a237e;color:white;font-weight:600;font-size:12px;cursor:pointer;border-radius:0;">📊 District Chart</button>
<button class="dashTab" id="dashTab2" onclick="switchDashTab(2)" style="flex:1;padding:11px 6px;border:none;background:#f5f5f5;color:#555;font-weight:600;font-size:12px;cursor:pointer;border-radius:0;">🥧 Category Split</button>
<button class="dashTab" id="dashTab3" onclick="switchDashTab(3)" style="flex:1;padding:11px 6px;border:none;background:#f5f5f5;color:#555;font-weight:600;font-size:12px;cursor:pointer;border-radius:0;">📈 Monthly Trend</button>
<button class="dashTab" id="dashTab4" onclick="switchDashTab(4)" style="flex:1;padding:11px 6px;border:none;background:#f5f5f5;color:#555;font-weight:600;font-size:12px;cursor:pointer;border-radius:0;">📅 Retirement</button>
</div>
<!-- Content Area -->
<div style="overflow-y:auto;flex:1;padding:16px;background:#f8f9fa;">
<!-- TAB 1: District Bar Chart -->
<div id="dashPane1">
<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;">
<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:4px;">District-wise Record Count</div>
<div style="font-size:11px;color:#888;margin-bottom:14px;">Deleted records excluded — sorted by count</div>
<div style="position:relative;height:420px;"><canvas id="districtBarChart"></canvas></div>
</div>
</div>
<!-- TAB 2: Category Pie -->
<div id="dashPane2" style="display:none;">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;">
<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:14px;">Overall Category Split</div>
<div style="position:relative;height:280px;"><canvas id="catPieChart"></canvas></div>
</div>
<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;">
<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:14px;">Gender Split</div>
<div style="position:relative;height:280px;"><canvas id="genderPieChart"></canvas></div>
</div>
<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;grid-column:1/-1;">
<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:4px;">Division-wise Category Breakdown</div>
<div style="font-size:11px;color:#888;margin-bottom:14px;">SC / ST / OBC / UR per JD Division</div>
<div style="position:relative;height:260px;"><canvas id="divCatChart"></canvas></div>
</div>
</div>
</div>
<!-- TAB 3: Monthly Trend -->
<div id="dashPane3" style="display:none;">
<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;">
<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:4px;">Monthly Activity Trend</div>
<div style="font-size:11px;color:#888;margin-bottom:14px;">New entries, updates aur deletions — last 12 months</div>
<div style="position:relative;height:350px;"><canvas id="trendLineChart"></canvas></div>
</div>
<div id="trendNote" style="background:white;border-radius:8px;padding:14px;border:1px solid #e0e0e0;margin-top:14px;font-size:12px;color:#555;"></div>
</div>
<!-- TAB 4: Retirement Calendar -->
<div id="dashPane4" style="display:none;">
<div style="background:white;border-radius:8px;padding:16px;border:1px solid #e0e0e0;margin-bottom:14px;">
<div style="font-size:13px;font-weight:700;color:#1a237e;margin-bottom:4px;">Retirement Timeline — Next 12 Months</div>
<div style="font-size:11px;color:#888;margin-bottom:14px;">62 saal ki umra par retirement — month-wise breakdown</div>
<div style="position:relative;height:260px;"><canvas id="retBarChart"></canvas></div>
</div>
<div id="retDetailList" style="background:white;border-radius:8px;padding:14px;border:1px solid #e0e0e0;"></div>
</div>
</div>
<!-- Footer -->
<div style="padding:10px 16px;background:white;border-top:1px solid #eee;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
<span style="font-size:11px;color:#aaa;">Data: window.fullData — ${rows.length} total records</span>
<div>
<button onclick="document.getElementById('analyticsModal').remove()" style="background:#c62828;color:white;border:none;padding:7px 16px;border-radius:4px;cursor:pointer;font-weight:600;font-size:12px;">✖ Close</button>
</div>
</div>
</div>`;
document.body.appendChild(modal);
modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
function buildDashboard() {
_buildKPI(rows);
_buildDistrictBar(rows);
_buildCategoryPie(rows);
_buildTrendLine(rows);
_buildRetirement(rows);
}
if (window.Chart) {
buildDashboard();
} else {
const s = document.createElement('script');
s.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js';
s.onload = buildDashboard;
document.head.appendChild(s);
}
}
function _buildKPI(rows) {
const active   = rows.filter(r => !(r.field28||'').toUpperCase().includes('DELETE'));
const newE     = rows.filter(r => (r.field28||'').toUpperCase().includes('NEW'));
const updated  = rows.filter(r => (r.field28||'').toUpperCase().includes('UPDATED'));
const deleted  = rows.filter(r => (r.field28||'').toUpperCase().includes('DELETE'));
const today = new Date();
const retThisMonth = rows.filter(r => {
const raw = r.field7 || '';
if (!raw || raw === 'NIL') return false;
const p = raw.split('-');
let dob = null;
if (p.length === 3) dob = p[0].length === 4 ? new Date(p[0], p[1]-1, p[2]) : new Date(p[2], p[1]-1, p[0]);
if (!dob || isNaN(dob)) return false;
const ret = new Date(dob.getFullYear()+62, dob.getMonth()+1, 0);
return ret.getFullYear() === today.getFullYear() && ret.getMonth() === today.getMonth();
});
const kpis = [
{ label: 'Total Active', val: active.length, color: '#1565c0', bg: '#e3f2fd' },
{ label: 'New Entries',  val: newE.length,   color: '#2e7d32', bg: '#e8f5e9' },
{ label: 'Updated',      val: updated.length, color: '#e65100', bg: '#fff3e0' },
{ label: 'Deleted',      val: deleted.length, color: '#c62828', bg: '#ffebee' },
{ label: 'Retiring This Month', val: retThisMonth.length, color: '#6a1b9a', bg: '#f3e5f5' },
];
const strip = document.getElementById('kpiStrip');
if (!strip) return;
strip.innerHTML = kpis.map(k => `
<div style="flex:1;padding:12px 10px;text-align:center;border-right:1px solid #eee;background:${k.bg};">
<div style="font-size:22px;font-weight:700;color:${k.color};">${k.val}</div>
<div style="font-size:10px;color:#777;margin-top:2px;">${k.label}</div>
</div>`).join('');
}
function _buildDistrictBar(rows) {
const distCount = {};
rows.forEach(r => {
if ((r.field28||'').toUpperCase().includes('DELETE')) return;
let d = (r.field22||'').toUpperCase().trim().replace(/^DEO\s*/,'').replace(/^JD\s*/,'').trim();
if (!d || d.length < 2) return;
distCount[d] = (distCount[d] || 0) + 1;
});
const sorted = Object.entries(distCount).sort((a,b) => b[1]-a[1]);
const labels = sorted.map(x => x[0]);
const data   = sorted.map(x => x[1]);
const colors = data.map((v, i) => {
const max = data[0] || 1;
const ratio = v / max;
const r = Math.round(21  + ratio * (25  - 21));
const g = Math.round(101 + ratio * (40  - 101));
const b = Math.round(192 + ratio * (78  - 192));
return `rgba(${r},${g},${b},0.85)`;
});
const ctx = document.getElementById('districtBarChart');
if (!ctx) return;
new Chart(ctx, {
type: 'bar',
data: { labels, datasets: [{ label: 'Records', data, backgroundColor: colors, borderRadius: 4, borderSkipped: false }] },
options: {
indexAxis: 'y',
responsive: true, maintainAspectRatio: false,
plugins: {
legend: { display: false },
tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.x} records` } }
},
scales: {
x: { grid: { color: '#f0f0f0' }, ticks: { font: { size: 11 } } },
y: { grid: { display: false }, ticks: { font: { size: 10 } } }
}
}
});
}
function _buildCategoryPie(rows) {
const active = rows.filter(r => !(r.field28||'').toUpperCase().includes('DELETE'));
const catCount = { SC:0, ST:0, OBC:0, UR:0, Other:0 };
active.forEach(r => {
const c = (r.field5||'').toUpperCase().trim();
if (catCount[c] !== undefined) catCount[c]++;
else catCount.Other++;
});
const catCtx = document.getElementById('catPieChart');
if (catCtx) new Chart(catCtx, {
type: 'doughnut',
data: {
labels: Object.keys(catCount).filter(k => catCount[k] > 0),
datasets: [{ data: Object.values(catCount).filter(v => v > 0),
backgroundColor: ['#e53935','#f57c00','#1565c0','#2e7d32','#9e9e9e'],
borderWidth: 2, borderColor: 'white' }]
},
options: { responsive:true, maintainAspectRatio:false,
plugins: { legend: { position:'bottom', labels:{ font:{ size:11 }, padding:10 } },
tooltip: { callbacks: { label: c => ` ${c.label}: ${c.parsed} (${((c.parsed/active.length)*100).toFixed(1)}%)` } }
}
}
});
const genCount = { Male:0, Female:0, Other:0 };
active.forEach(r => {
const g = (r.field6||'').toUpperCase().trim();
if (g === 'MALE' || g === 'M') genCount.Male++;
else if (g === 'FEMALE' || g === 'F') genCount.Female++;
else genCount.Other++;
});
const genCtx = document.getElementById('genderPieChart');
if (genCtx) new Chart(genCtx, {
type: 'doughnut',
data: {
labels: ['Male','Female','Other'].filter(k => genCount[k] > 0),
datasets: [{ data: ['Male','Female','Other'].map(k => genCount[k]).filter(v => v > 0),
backgroundColor: ['#1565c0','#e91e63','#9e9e9e'],
borderWidth: 2, borderColor: 'white' }]
},
options: { responsive:true, maintainAspectRatio:false,
plugins: { legend: { position:'bottom', labels:{ font:{ size:11 }, padding:10 } } }
}
});
const jdStructure = {
'BHOPAL':['BHOPAL','RAISEN','RAJGARH','SEHORE','VIDISHA'],
'GWALIOR':['ASHOKNAGAR','BHIND','DATIA','GUNA','GWALIOR','MORENA','SHEOPUR','SHIVPURI'],
'INDORE':['ALIRAJPUR','BADWANI','BARWANI','BURHANPUR','DHAR','INDORE','JHABUA','KHANDWA','KHARGONE'],
'JABALPUR':['BALAGHAT','CHHINDWARA','JABALPUR','KATNI','MANDLA','NARSINGHPUR','SEONI','DINDORI','PANDHURNA'],
'UJJAIN':['AGAR MALWA','DEWAS','MANDSAUR','NEEMUCH','RATLAM','SHAJAPUR','UJJAIN'],
'SAGAR':['CHHATARPUR','DAMOH','PANNA','SAGAR','TIKAMGARH','NIWARI'],
'REWA':['REWA','SATNA','SIDHI','SINGRAULI','MAUGANJ','MAIHAR'],
'NARMADAPURAM':['BETUL','HARDA','NARMADAPURAM'],
'SHAHDOL':['ANUPPUR','SHAHDOL','UMARIA']
};
const cats = ['SC','ST','OBC','UR'];
const jdCat = {};
Object.keys(jdStructure).forEach(j => { jdCat[j] = {SC:0,ST:0,OBC:0,UR:0}; });
active.forEach(r => {
const dist = (r.field22||'').toUpperCase().replace(/^DEO\s*/,'').replace(/^JD\s*/,'').trim();
const cat  = (r.field5||'').toUpperCase().trim();
if (!cats.includes(cat)) return;
for (const [j, ds] of Object.entries(jdStructure)) {
if (ds.some(d => dist === d || dist.includes(d) || d.includes(dist))) { jdCat[j][cat]++; break; }
}
});
const jdLabels = Object.keys(jdCat);
const divCtx = document.getElementById('divCatChart');
if (divCtx) new Chart(divCtx, {
type: 'bar',
data: {
labels: jdLabels,
datasets: [
{ label:'SC',  data: jdLabels.map(j=>jdCat[j].SC),  backgroundColor:'#e53935', borderRadius:2 },
{ label:'ST',  data: jdLabels.map(j=>jdCat[j].ST),  backgroundColor:'#f57c00', borderRadius:2 },
{ label:'OBC', data: jdLabels.map(j=>jdCat[j].OBC), backgroundColor:'#1565c0', borderRadius:2 },
{ label:'UR',  data: jdLabels.map(j=>jdCat[j].UR),  backgroundColor:'#2e7d32', borderRadius:2 },
]
},
options: {
responsive:true, maintainAspectRatio:false,
plugins: { legend:{ position:'top', labels:{ font:{ size:11 } } } },
scales: {
x: { stacked:true, grid:{ display:false }, ticks:{ font:{ size:10 } } },
y: { stacked:true, grid:{ color:'#f0f0f0' } }
}
}
});
}
function _buildTrendLine(rows) {
const today = new Date();
const months = [];
const monthLabels = [];
const mNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
for (let i = 11; i >= 0; i--) {
const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
months.push(d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0'));
monthLabels.push(mNames[d.getMonth()] + "'" + String(d.getFullYear()).slice(2));
}
const newData=months.map(()=>0), updData=months.map(()=>0), delData=months.map(()=>0);
rows.forEach(r => {
const trail = (r.field29 || r.auditTrail || '').trim();
const dateMatch = trail.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
if (!dateMatch) return;
const [, dd, mm, yyyy] = dateMatch;
const key = yyyy + '-' + mm.padStart(2,'0');
const idx = months.indexOf(key);
if (idx === -1) return;
const st = (r.field28||'').toUpperCase();
if (st.includes('DELETE')) delData[idx]++;
else if (st.includes('NEW')) newData[idx]++;
else if (st.includes('UPDATED')) updData[idx]++;
});
const totalThisYear = newData.reduce((a,b)=>a+b,0) + updData.reduce((a,b)=>a+b,0);
const ctx = document.getElementById('trendLineChart');
if (ctx) new Chart(ctx, {
type: 'line',
data: {
labels: monthLabels,
datasets: [
{ label:'New Entries', data:newData, borderColor:'#2e7d32', backgroundColor:'rgba(46,125,50,0.08)', tension:0.4, fill:true, pointRadius:4, pointHoverRadius:6 },
{ label:'Updated',     data:updData, borderColor:'#1565c0', backgroundColor:'rgba(21,101,192,0.08)', tension:0.4, fill:true, pointRadius:4, pointHoverRadius:6 },
{ label:'Deleted',     data:delData, borderColor:'#c62828', backgroundColor:'rgba(198,40,40,0.06)', tension:0.4, fill:true, pointRadius:4, pointHoverRadius:6 },
]
},
options: {
responsive:true, maintainAspectRatio:false,
interaction: { mode:'index', intersect:false },
plugins: { legend:{ position:'top', labels:{ font:{ size:11 } } } },
scales: {
x: { grid:{ color:'#f0f0f0' }, ticks:{ font:{ size:10 } } },
y: { grid:{ color:'#f0f0f0' }, ticks:{ font:{ size:11 }, stepSize:1 } }
}
}
});
const note = document.getElementById('trendNote');
if (note) note.innerHTML = `<b>📌 Note:</b> Trend audit trail field se parse kiya gaya hai (<code>field29</code>). Agar dates wahan store nahi hain to all zeros dikhenge — tab field29 mein timestamp save karna hoga.`;
}
function _buildRetirement(rows) {
const today = new Date();
const mNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const buckets = {}, bucketPeople = {};
for (let i = 0; i < 12; i++) {
const d = new Date(today.getFullYear(), today.getMonth() + i, 1);
const key = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0');
buckets[key] = 0;
bucketPeople[key] = [];
}
rows.forEach(r => {
if ((r.field28||'').toUpperCase().includes('DELETE')) return;
const raw = r.field7 || '';
if (!raw || raw === 'NIL') return;
const p = raw.split('-');
let dob = null;
if (p.length === 3) dob = p[0].length === 4 ? new Date(p[0], p[1]-1, p[2]) : new Date(p[2], p[1]-1, p[0]);
if (!dob || isNaN(dob)) return;
const ret = new Date(dob.getFullYear()+62, dob.getMonth()+1, 0);
if (ret < today) return;
const key = ret.getFullYear() + '-' + String(ret.getMonth()+1).padStart(2,'0');
if (buckets[key] !== undefined) {
buckets[key]++;
bucketPeople[key].push({ name: r.field4||'—', district: (r.field22||'—').replace(/^DEO\s*/i,''), retDate: ret.toLocaleDateString('en-IN') });
}
});
const labels = Object.keys(buckets).map(k => { const [y,m]=k.split('-'); return mNames[+m-1]+"'"+y.slice(2); });
const data   = Object.values(buckets);
const bgColors = data.map(v => v === 0 ? '#e0e0e0' : v >= 5 ? '#c62828' : v >= 3 ? '#f57c00' : '#2e7d32');
const ctx = document.getElementById('retBarChart');
if (ctx) new Chart(ctx, {
type: 'bar',
data: { labels, datasets: [{ label:'Retirements', data, backgroundColor: bgColors, borderRadius:4, borderSkipped:false }] },
options: {
responsive:true, maintainAspectRatio:false,
plugins: {
legend:{ display:false },
tooltip:{ callbacks:{ label: c => ` ${c.parsed.y} retiring` } }
},
scales: {
x: { grid:{ display:false }, ticks:{ font:{ size:10 } } },
y: { grid:{ color:'#f0f0f0' }, ticks:{ stepSize:1, font:{ size:11 } } }
},
onClick: (evt, elements) => {
if (!elements.length) return;
const key = Object.keys(buckets)[elements[0].index];
_showRetDetail(key, bucketPeople[key]);
}
}
});
const firstKey = Object.keys(bucketPeople).find(k => bucketPeople[k].length > 0) || Object.keys(bucketPeople)[0];
_showRetDetail(firstKey, bucketPeople[firstKey]);
window._retBucketPeople = bucketPeople;
}
function _showRetDetail(key, people) {
const mNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const [yr, mo] = key.split('-');
const label = mNames[+mo-1] + ' ' + yr;
const el = document.getElementById('retDetailList');
if (!el) return;
if (!people || people.length === 0) {
el.innerHTML = `<div style="color:#aaa;font-size:12px;padding:10px;">📅 ${label} — koi retirement nahi hai</div>`; return;
}
el.innerHTML = `
<div style="font-size:13px;font-weight:700;color:#c62828;margin-bottom:10px;">📅 ${label} — ${people.length} retiring</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:8px;">
${people.map(p => `
<div style="background:#fff8f8;border:1px solid #ffcdd2;border-radius:6px;padding:8px 10px;">
<div style="font-size:12px;font-weight:600;color:#333;">👤 ${p.name}</div>
<div style="font-size:11px;color:#666;margin-top:2px;">📍 ${p.district}</div>
<div style="font-size:11px;color:#c62828;margin-top:2px;">🗓️ ${p.retDate}</div>
</div>`).join('')}
</div>`;
}
function switchDashTab(num) {
[1,2,3,4].forEach(i => {
const pane = document.getElementById('dashPane'+i);
const btn  = document.getElementById('dashTab'+i);
if (!pane || !btn) return;
pane.style.display = i === num ? 'block' : 'none';
btn.style.background = i === num ? '#1a237e' : '#f5f5f5';
btn.style.color      = i === num ? 'white'   : '#555';
});
}
function switchTab(num) {
[1,2,3,4].forEach(i => {
const t = document.getElementById('analyticsTab'+i);
const b = document.getElementById('tabBtn'+i);
if (t) t.style.display = i===num?'block':'none';
if (b) { b.style.background=i===num?'#e65100':'#f5f5f5'; b.style.color=i===num?'white':'#555'; }
});
}


// ═══════════════════════════════════════
// JS Block 9
// ═══════════════════════════════════════

window.recentRecords = JSON.parse(localStorage.getItem('ux_recentRecords') || '[]');
function addToRecent(uniqueId, name, district) {
if (!uniqueId) return;
window.recentRecords = window.recentRecords.filter(r => r.id !== uniqueId);
window.recentRecords.unshift({ id: uniqueId, name: name || '—', district: district || '—', time: new Date().toLocaleTimeString('en-IN') });
if (window.recentRecords.length > 10) window.recentRecords = window.recentRecords.slice(0, 10);
localStorage.setItem('ux_recentRecords', JSON.stringify(window.recentRecords));
if (document.getElementById('recentPanel') && document.getElementById('recentPanel').style.display !== 'none') {
renderRecentList();
}
}
function renderRecentList() {
const list = document.getElementById('recentList');
if (!list) return;
if (window.recentRecords.length === 0) {
list.innerHTML = '<div style="color:#aaa;font-size:11px;text-align:center;padding:15px;">No records viewed yet</div>';
return;
}
list.innerHTML = window.recentRecords.map((r, i) => `
<div onclick="jumpToRecord('${r.id}')" style="padding:7px 10px;border-bottom:1px solid #f0f0f0;cursor:pointer;transition:background 0.15s;"
onmouseover="this.style.background='#e3f2fd'" onmouseout="this.style.background='white'">
<div style="font-size:12px;font-weight:bold;color:#002e5b;">#${r.id} &nbsp; ${r.name}</div>
<div style="font-size:10px;color:#888;">📍 ${r.district} &nbsp;|&nbsp; 🕐 ${r.time}</div>
</div>`).join('');
}
function jumpToRecord(uniqueId) {
const searchBox = document.getElementById('searchVal');
if (searchBox) {
searchBox.value = uniqueId;
performSearch();
}
closeRecentPanel();
}
function toggleRecentPanel() {
const panel = document.getElementById('recentPanel');
if (!panel) return;
const isOpen = panel.style.display !== 'none';
panel.style.display = isOpen ? 'none' : 'block';
if (!isOpen) renderRecentList();
}
function closeRecentPanel() {
const panel = document.getElementById('recentPanel');
if (panel) panel.style.display = 'none';
}
const _origSelectRow = window.selectRow;
if (typeof selectRow === 'function') {
const __orig = selectRow;
selectRow = function(el) {
__orig(el);
try {
const uid  = el.cells[2]?.innerText?.trim() || '';
const name = el.cells[3]?.innerText?.trim() || '';
const dist = el.cells[21]?.innerText?.trim() || '';
addToRecent(uid, name, dist);
} catch(e) {}
};
}
document.addEventListener('keydown', function(e) {
const tag = document.activeElement?.tagName?.toLowerCase();
const isTyping = ['input','textarea','select'].includes(tag);
if (e.ctrlKey && e.key.toLowerCase() === 'n') {
e.preventDefault();
const overlay = document.getElementById('formOverlay');
if (overlay) { overlay.style.display = 'block'; }
showShortcutToast('Ctrl+N → Form Opened');
return;
}
if (e.ctrlKey && e.key.toLowerCase() === 's') {
e.preventDefault();
const formVisible = document.getElementById('formOverlay')?.style.display === 'block';
if (formVisible) {
if (typeof saveEntry === 'function') saveEntry(true);
showShortcutToast('Ctrl+S → Saved');
}
return;
}
if (e.ctrlKey && e.key.toLowerCase() === 'f') {
e.preventDefault();
const sb = document.getElementById('searchVal');
if (sb) { sb.focus(); sb.select(); }
showShortcutToast('Ctrl+F → Search focused');
return;
}
if (e.key === 'Escape' && !isTyping) {
const formOverlay = document.getElementById('formOverlay');
if (formOverlay?.style.display === 'block') {
formOverlay.style.display = 'none';
showShortcutToast('Esc → Form Closed');
return;
}
if (document.getElementById('analyticsModal')) {
document.getElementById('analyticsModal').remove();
return;
}
if (document.getElementById('summaryModal')) {
document.getElementById('summaryModal').remove();
return;
}
closeRecentPanel();
return;
}
if (e.ctrlKey && e.key.toLowerCase() === 'r') {
e.preventDefault();
toggleRecentPanel();
showShortcutToast('Ctrl+R → Recent Records');
return;
}
if (e.key === '?' && !isTyping) {
showShortcutsHelp();
return;
}
});
// ── UMS Toast Notification System ──
function umsToast(msg, type = 'info', duration = 3500) {
const icons = { success:'✅', error:'❌', info:'ℹ️', warning:'⚠️' };
const container = document.getElementById('ums-toast-container') || (() => {
const c = document.createElement('div'); c.id = 'ums-toast-container'; document.body.appendChild(c); return c;
})();
const toast = document.createElement('div');
toast.className = `ums-toast ums-toast-${type}`;
toast.innerHTML = `<span class="ums-toast-icon">${icons[type]||icons.info}</span><span>${msg}</span>`;
container.appendChild(toast);
const hide = () => {
toast.classList.add('hide');
setTimeout(() => toast.remove(), 320);
};
const timer = setTimeout(hide, duration);
toast.addEventListener('click', () => { clearTimeout(timer); hide(); });
}
function showShortcutToast(msg) {
let t = document.getElementById('shortcutToast');
if (!t) {
t = document.createElement('div');
t.id = 'shortcutToast';
t.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#002e5b;color:white;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:bold;z-index:99999;transition:opacity 0.4s;pointer-events:none;';
document.body.appendChild(t);
}
t.innerText = msg;
t.style.opacity = '1';
clearTimeout(t._timer);
t._timer = setTimeout(() => { t.style.opacity = '0'; }, 1800);
}
function showShortcutsHelp() {
if (document.getElementById('shortcutsHelp')) { document.getElementById('shortcutsHelp').remove(); return; }
const div = document.createElement('div');
div.id = 'shortcutsHelp';
div.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;border-radius:10px;padding:20px 25px;z-index:99999;box-shadow:0 10px 30px rgba(0,0,0,0.4);min-width:300px;font-family:sans-serif;';
div.innerHTML = `
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;border-bottom:2px solid #002e5b;padding-bottom:8px;">
<b style="color:#002e5b;font-size:15px;">⌨️ Keyboard Shortcuts</b>
<button onclick="this.closest('#shortcutsHelp').remove()" style="background:#c62828;color:white;border:none;border-radius:50%;width:26px;height:26px;cursor:pointer;font-weight:bold;">✕</button>
</div>
${[
['Ctrl + N', 'Form खोलें (New Entry)'],
['Ctrl + S', 'Save / Add Record'],
['Ctrl + F', 'Search Box Focus'],
['Ctrl + R', 'Recent Records Panel'],
['Escape',   'Form / Modal बंद करें'],
['?',        'यह Help दिखाएं'],
].map(([k,v]) => `
<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f0f0f0;font-size:13px;">
<kbd style="background:#f0f0f0;border:1px solid #ccc;padding:2px 8px;border-radius:4px;font-family:monospace;font-weight:bold;">${k}</kbd>
<span style="color:#555;">${v}</span>
</div>`).join('')}
<div style="margin-top:12px;font-size:10px;color:#aaa;text-align:center;">Press '?' anywhere to toggle this panel</div>`;
document.body.appendChild(div);
div.addEventListener('click', e => e.stopPropagation());
setTimeout(() => document.addEventListener('click', function _c() { div.remove(); document.removeEventListener('click',_c); }), 100);
}
document.addEventListener('DOMContentLoaded', function() {
const recentBtn = document.createElement('div');
recentBtn.id = 'recentBtn';
recentBtn.onclick = toggleRecentPanel;
recentBtn.title = 'Recent Records (Ctrl+R)';
recentBtn.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#002e5b;color:white;width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:20px;z-index:9990;box-shadow:0 4px 12px rgba(0,0,0,0.3);transition:transform 0.2s;';
recentBtn.innerHTML = '🕐';
recentBtn.onmouseover = () => recentBtn.style.transform = 'scale(1.1)';
recentBtn.onmouseout  = () => recentBtn.style.transform = 'scale(1)';
document.body.appendChild(recentBtn);
const recentPanel = document.createElement('div');
recentPanel.id = 'recentPanel';
recentPanel.style.cssText = 'display:none;position:fixed;bottom:78px;right:20px;width:300px;max-height:380px;background:white;border-radius:10px;box-shadow:0 8px 25px rgba(0,0,0,0.3);z-index:9989;overflow:hidden;font-family:sans-serif;';
recentPanel.innerHTML = `
<div style="background:#002e5b;color:white;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;">
<b style="font-size:13px;">🕐 Recent Records</b>
<button onclick="closeRecentPanel()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:22px;height:22px;border-radius:50%;cursor:pointer;font-size:12px;">✕</button>
</div>
<div id="recentList" style="overflow-y:auto;max-height:320px;"></div>`;
document.body.appendChild(recentPanel);
});


// ═══════════════════════════════════════
// JS Block 10
// ═══════════════════════════════════════

const SESSION_TIMEOUT_MS = 30 * 60 * 1000;
const WARN_BEFORE_MS     =  2 * 60 * 1000;
let _sessionTimer = null;
let _sessionWarnTimer = null;
let _sessionWarnShown = false;
function securityResetTimer() {
securityClearTimer();
_sessionWarnShown = false;
_sessionWarnTimer = setTimeout(() => {
if (!window.currentUser) return;
_sessionWarnShown = true;
showSessionWarning();
}, SESSION_TIMEOUT_MS - WARN_BEFORE_MS);
_sessionTimer = setTimeout(() => {
if (!window.currentUser) return;
auditLog('SESSION_TIMEOUT', 'Auto-logout after 30 min inactivity');
forceLogout();
}, SESSION_TIMEOUT_MS);
}
function securityClearTimer() {
clearTimeout(_sessionTimer);
clearTimeout(_sessionWarnTimer);
_sessionTimer = null;
_sessionWarnTimer = null;
const w = document.getElementById('sessionWarnBanner');
if (w) w.remove();
}
function showSessionWarning() {
if (document.getElementById('sessionWarnBanner')) return;
const banner = document.createElement('div');
banner.id = 'sessionWarnBanner';
banner.style.cssText = 'position:fixed;top:0;left:0;width:100%;background:#e65100;color:white;text-align:center;padding:10px;z-index:999999;font-weight:bold;font-size:13px;display:flex;align-items:center;justify-content:center;gap:15px;';
banner.innerHTML = `
⚠️ Session 2 मिनट में समाप्त होगा! Inactivity के कारण auto-logout होगा।
<button onclick="securityResetTimer();document.getElementById('sessionWarnBanner').remove();_sessionWarnShown=false;"
style="background:white;color:#e65100;border:none;padding:5px 14px;border-radius:4px;cursor:pointer;font-weight:bold;font-size:12px;">
✅ Active रहें
</button>`;
document.body.appendChild(banner);
}
function forceLogout() {
securityClearTimer();
window.currentUser = null;
localStorage.removeItem('isLoggedIn');
document.getElementById('userField').value = '';
document.getElementById('passField').value = '';
const loginOverlay = document.getElementById('loginOverlay');
if (loginOverlay) loginOverlay.style.display = 'flex';
const errorDiv = document.getElementById('loginError');
if (errorDiv) errorDiv.innerText = '⏱️ You have been logged out due to session timeout. Please login again.';
}
['mousemove','keydown','click','scroll','touchstart'].forEach(evt => {
document.addEventListener(evt, () => {
if (window.currentUser) securityResetTimer();
}, { passive: true });
});
const AUDIT_KEY = 'auditLog_ms_erp';
function auditLog(action, detail) {
if (!window.currentUser && action !== 'LOGIN') return;
const logs = JSON.parse(localStorage.getItem(AUDIT_KEY) || '[]');
logs.unshift({
user:   window.currentUser || 'UNKNOWN',
action: action,
detail: detail || '',
time:   new Date().toLocaleString('en-IN'),
ts:     Date.now()
});
if (logs.length > 500) logs.length = 500;
localStorage.setItem(AUDIT_KEY, JSON.stringify(logs));
}
const _origSaveEntry = window.saveEntry;
if (typeof saveEntry === 'function') {
const __s = saveEntry;
saveEntry = function(isNew) {
const uid = document.getElementById('in3')?.value || '';
auditLog(isNew ? 'NEW_ENTRY' : 'UPDATE', 'Unique ID: ' + uid);
return __s(isNew);
};
}
const _origDeleteEntry = window.deleteEntry;
if (typeof deleteEntry === 'function') {
const __d = deleteEntry;
deleteEntry = function() {
const uid = document.getElementById('in3')?.value || (window.selectedRowElement?.cells[2]?.innerText || '');
auditLog('DELETE', 'Unique ID: ' + uid);
return __d();
};
}
function showAuditTrail() {
const logs = JSON.parse(localStorage.getItem(AUDIT_KEY) || '[]');
if (document.getElementById('auditModal')) document.getElementById('auditModal').remove();
const modal = document.createElement('div');
modal.id = 'auditModal';
modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.65);z-index:10003;display:flex;align-items:center;justify-content:center;';
const actionColors = {
LOGIN:          '#2e7d32',
LOGOUT:         '#555',
SESSION_TIMEOUT:'#e65100',
NEW_ENTRY:      '#1565c0',
UPDATE:         '#f57c00',
DELETE:         '#c62828',
};
const rows = logs.map(l => `
<tr onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='white'">
<td style="padding:5px 10px;border:1px solid #eee;font-size:11px;color:#555;white-space:nowrap;">${l.time}</td>
<td style="padding:5px 10px;border:1px solid #eee;font-weight:bold;font-size:11px;color:#002e5b;">${l.user}</td>
<td style="padding:5px 10px;border:1px solid #eee;text-align:center;">
<span style="background:${actionColors[l.action]||'#777'};color:white;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:bold;">${l.action}</span>
</td>
<td style="padding:5px 10px;border:1px solid #eee;font-size:11px;color:#444;">${l.detail}</td>
</tr>`).join('') || '<tr><td colspan="4" style="text-align:center;color:#aaa;padding:20px;">No audit logs yet</td></tr>';
modal.innerHTML = `
<div style="background:white;border-radius:10px;width:92%;max-width:850px;max-height:88vh;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 15px 40px rgba(0,0,0,0.4);">
<div style="background:linear-gradient(90deg,#1a237e,#283593);color:white;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
<div>
<b style="font-size:15px;">📋 Audit Trail</b>
<span style="font-size:11px;opacity:0.8;margin-left:12px;">${logs.length} events recorded</span>
</div>
<div style="display:flex;gap:8px;align-items:center;">
<button onclick="clearAuditLog()" style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:white;padding:5px 12px;border-radius:4px;cursor:pointer;font-size:11px;">🗑️ Clear Log</button>
<button onclick="exportAuditCSV()" style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:white;padding:5px 12px;border-radius:4px;cursor:pointer;font-size:11px;">⬇️ Export CSV</button>
<button onclick="document.getElementById('auditModal').remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:16px;font-weight:bold;">✕</button>
</div>
</div>
<!-- Filter bar -->
<div style="padding:8px 16px;background:#f8f9fa;border-bottom:1px solid #eee;display:flex;gap:10px;align-items:center;flex-shrink:0;flex-wrap:wrap;">
<input id="auditFilterUser" oninput="filterAuditTable()" style="padding:5px 10px;border:1px solid #ddd;border-radius:4px;font-size:11px;width:140px;">
<select id="auditFilterAction" onchange="filterAuditTable()" style="padding:5px 8px;border:1px solid #ddd;border-radius:4px;font-size:11px;">
<option value="">All Actions</option>
<option>LOGIN</option><option>LOGOUT</option>
<option>NEW_ENTRY</option><option>UPDATE</option>
<option>DELETE</option><option>SESSION_TIMEOUT</option>
</select>
<span style="font-size:11px;color:#888;" id="auditCount">${logs.length} records</span>
</div>
<div style="overflow-y:auto;flex:1;">
<table id="auditTable" style="width:100%;border-collapse:collapse;">
<thead style="background:#f5f5f5;position:sticky;top:0;">
<tr>
<th style="padding:7px 10px;border:1px solid #ddd;font-size:11px;text-align:left;">Date & Time</th>
<th style="padding:7px 10px;border:1px solid #ddd;font-size:11px;">User</th>
<th style="padding:7px 10px;border:1px solid #ddd;font-size:11px;">Action</th>
<th style="padding:7px 10px;border:1px solid #ddd;font-size:11px;text-align:left;">Detail</th>
</tr>
</thead>
<tbody id="auditBody">${rows}</tbody>
</table>
</div>
<div style="padding:10px 16px;background:#f5f5f5;border-top:1px solid #eee;text-align:right;flex-shrink:0;">
<button onclick="document.getElementById('auditModal').remove()" style="background:#c62828;color:white;border:none;padding:7px 18px;border-radius:4px;cursor:pointer;font-weight:bold;font-size:12px;">✖ Close</button>
</div>
</div>`;
document.body.appendChild(modal);
modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}
function filterAuditTable() {
const userF   = document.getElementById('auditFilterUser')?.value.toUpperCase() || '';
const actionF = document.getElementById('auditFilterAction')?.value || '';
const logs    = JSON.parse(localStorage.getItem(AUDIT_KEY) || '[]');
const filtered = logs.filter(l => {
const matchUser   = !userF   || l.user.includes(userF);
const matchAction = !actionF || l.action === actionF;
return matchUser && matchAction;
});
const actionColors = { LOGIN:'#2e7d32',LOGOUT:'#555',SESSION_TIMEOUT:'#e65100',NEW_ENTRY:'#1565c0',UPDATE:'#f57c00',DELETE:'#c62828' };
const body = document.getElementById('auditBody');
if (body) body.innerHTML = filtered.map(l => `
<tr onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='white'">
<td style="padding:5px 10px;border:1px solid #eee;font-size:11px;color:#555;white-space:nowrap;">${l.time}</td>
<td style="padding:5px 10px;border:1px solid #eee;font-weight:bold;font-size:11px;color:#002e5b;">${l.user}</td>
<td style="padding:5px 10px;border:1px solid #eee;text-align:center;">
<span style="background:${actionColors[l.action]||'#777'};color:white;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:bold;">${l.action}</span>
</td>
<td style="padding:5px 10px;border:1px solid #eee;font-size:11px;color:#444;">${l.detail}</td>
</tr>`).join('') || '<tr><td colspan="4" style="text-align:center;color:#aaa;padding:15px;">No matching records</td></tr>';
const countEl = document.getElementById('auditCount');
if (countEl) countEl.innerText = filtered.length + ' records';
}
function clearAuditLog() {
if (!confirm('Are you sure you want to delete the entire audit log?')) return;
localStorage.removeItem(AUDIT_KEY);
document.getElementById('auditModal')?.remove();
myAlert('✅ Audit log cleared.');
}
function exportAuditCSV() {
const logs = JSON.parse(localStorage.getItem(AUDIT_KEY) || '[]');
if (!logs.length) { myAlert('No logs to export.'); return; }
let csv = 'Date & Time,User,Action,Detail\n';
logs.forEach(l => {
csv += `"${l.time}","${l.user}","${l.action}","${l.detail}"\n`;
});
const blob = new Blob([csv], { type: 'text/csv' });
const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'AuditLog_MS_ERP_' + new Date().toLocaleDateString('en-IN').replace(/\//g, '-') + '.csv';
a.click();
}
document.addEventListener('DOMContentLoaded', function() {
});
setInterval(() => {
if (!window.currentUser || !_sessionTimer) return;
let badge = document.getElementById('sessionTimerBadge');
if (!badge) {
badge = document.createElement('div');
badge.id = 'sessionTimerBadge';
badge.style.cssText = 'position:fixed;top:8px;right:8px;background:#002e5b;color:white;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:bold;z-index:9988;opacity:0.85;pointer-events:none;';
document.body.appendChild(badge);
}
const remaining = Math.max(0, SESSION_TIMEOUT_MS - (Date.now() - (_sessionStartTs || Date.now())));
const mins = Math.floor(remaining / 60000);
const secs = Math.floor((remaining % 60000) / 1000);
badge.innerText = `⏱️ ${mins}:${String(secs).padStart(2,'0')}`;
badge.style.background = mins < 3 ? '#c62828' : '#002e5b';
}, 1000);
const _origSecurityResetTimer = securityResetTimer;
securityResetTimer = function() {
_sessionStartTs = Date.now();
_origSecurityResetTimer();
};
let _sessionStartTs = Date.now();


// ═══════════════════════════════════════
// JS Block 11
// ═══════════════════════════════════════

const CUSTOM_PASS_KEY = 'msErp_customPasswords';
function getEffectivePassword(user) {
const custom = JSON.parse(localStorage.getItem(CUSTOM_PASS_KEY) || '{}');
return custom[user] || districtCredentials[user] || null;
}
// [old checkLogin override removed - using cloud sync version]
window._otpStore = {};
function generateOTP() {
return String(Math.floor(100000 + Math.random() * 900000));
}
function openChangePassword() {
if (document.getElementById('changePwModal')) document.getElementById('changePwModal').remove();
const modal = document.createElement('div');
modal.id = 'changePwModal';
modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.75);z-index:10005;display:flex;align-items:center;justify-content:center;';
modal.innerHTML = `
<div style="background:white;border-radius:10px;width:90%;max-width:400px;box-shadow:0 15px 40px rgba(0,0,0,0.5);overflow:hidden;font-family:sans-serif;">
<!-- Header -->
<div style="background:linear-gradient(90deg,#0d47a1,#1565c0);color:white;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">
<b style="font-size:15px;">🔑 Password Change (OTP)</b>
<button onclick="document.getElementById('changePwModal').remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;font-weight:bold;">✕</button>
</div>
<!-- Step 1: Enter User ID & Generate OTP -->
<div id="otpStep1" style="padding:24px;">
<p style="font-size:12px;color:#666;margin:0 0 16px 0;">अपना User ID डालें और OTP Generate करें।</p>
<label style="font-size:11px;font-weight:bold;color:#333;">USER ID</label>
<input id="otpUserId" type="text"
style="width:100%;padding:10px;margin:6px 0 14px 0;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;text-transform:uppercase;font-size:13px;">
<button onclick="generateAndShowOTP()"
style="width:100%;padding:11px;background:#0d47a1;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer;font-size:13px;">
📲 Generate OTP
</button>
<div id="otpGenMsg" style="margin-top:10px;font-size:12px;text-align:center;"></div>
</div>
<!-- Step 2: Enter OTP -->
<div id="otpStep2" style="padding:24px;display:none;">
<div style="background:#e3f2fd;border-radius:6px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#1565c0;">
📲 OTP generate ho gaya hai। DPI Admin se OTP lekar neeche darj karein।<br>
<span style="font-size:10px;color:#888;">(OTP 10 minutes mein expire ho jayega)</span>
</div>
<!-- DPI Panel: show OTP only if DPI is logged in OR no one is logged in during setup -->
<div id="dpiOtpReveal" style="display:none;background:#fff3e0;border:1px solid #ff9800;border-radius:6px;padding:10px;margin-bottom:14px;text-align:center;">
<div style="font-size:11px;color:#e65100;font-weight:bold;margin-bottom:4px;">🔐 DPI Admin OTP View</div>
<div id="otpDisplayValue" style="font-size:28px;font-weight:bold;letter-spacing:8px;color:#0d47a1;"></div>
<div style="font-size:10px;color:#888;margin-top:4px;" id="otpExpireTime"></div>
</div>
<label style="font-size:11px;font-weight:bold;color:#333;">OTP ENTER करें</label>
<input id="otpInputVal" type="text" maxlength="6"
style="width:100%;padding:10px;margin:6px 0 14px 0;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:18px;text-align:center;letter-spacing:6px;font-weight:bold;">
<button onclick="verifyOTP()"
style="width:100%;padding:11px;background:#2e7d32;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer;font-size:13px;">
✅ OTP Verify करें
</button>
<button onclick="showStep(1)" style="width:100%;padding:8px;background:white;color:#555;border:1px solid #ccc;border-radius:4px;cursor:pointer;font-size:12px;margin-top:8px;">← वापस जाएं</button>
<div id="otpVerifyMsg" style="margin-top:10px;font-size:12px;text-align:center;"></div>
</div>
<!-- Step 3: Set New Password -->
<div id="otpStep3" style="padding:24px;display:none;">
<div style="background:#e8f5e9;border-radius:6px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#2e7d32;font-weight:bold;">
✅ OTP Verified! अब नया Password सेट करें।
</div>
<label style="font-size:11px;font-weight:bold;color:#333;">नया PASSWORD</label>
<input id="newPassVal" type="password"
style="width:100%;padding:10px;margin:6px 0 14px 0;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:13px;">
<label style="font-size:11px;font-weight:bold;color:#333;">PASSWORD CONFIRM करें</label>
<input id="confirmPassVal" type="password"
style="width:100%;padding:10px;margin:6px 0 16px 0;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:13px;">
<!-- Password strength bar -->
<div style="margin-bottom:12px;">
<div style="background:#eee;border-radius:4px;height:6px;overflow:hidden;">
<div id="pwStrengthBar" style="height:100%;width:0%;border-radius:4px;transition:width 0.3s,background 0.3s;"></div>
</div>
<div id="pwStrengthLabel" style="font-size:10px;color:#888;margin-top:3px;"></div>
</div>
<button onclick="saveNewPassword()"
style="width:100%;padding:11px;background:#0d47a1;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer;font-size:13px;">
💾 Password Save करें
</button>
<div id="pwSaveMsg" style="margin-top:10px;font-size:12px;text-align:center;"></div>
</div>
</div>`;
document.body.appendChild(modal);
modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
setTimeout(() => {
const np = document.getElementById('newPassVal');
if (np) np.addEventListener('input', updatePwStrength);
}, 100);
}
function showStep(n) {
[1,2,3].forEach(i => {
const el = document.getElementById('otpStep' + i);
if (el) el.style.display = i === n ? 'block' : 'none';
});
}
function generateAndShowOTP() {
const userId = document.getElementById('otpUserId').value.trim().toUpperCase();
const msg = document.getElementById('otpGenMsg');
if (!userId) { msg.innerHTML = '<span style="color:red;">❌ Please enter User ID.</span>'; return; }
if (!districtCredentials[userId]) { msg.innerHTML = '<span style="color:red;">❌ This User ID does not exist.</span>'; return; }
if (userId === 'DPI') {
msg.innerHTML = '<span style="color:red;">⛔ DPI password cannot be reset this way.</span>';
return;
}
if (window.currentUser && window.currentUser !== 'DPI' && window.currentUser !== userId) {
msg.innerHTML = '<span style="color:red;">⛔ You can only reset your own password.</span>';
return;
}
const otp = generateOTP();
const expiry = Date.now() + 10 * 60 * 1000;
window._otpStore[userId] = { otp, expiry };
auditLog('OTP_GENERATED', 'Password change OTP generated for: ' + userId);
showStep(2);
const revealDiv = document.getElementById('dpiOtpReveal');
const otpDisplay = document.getElementById('otpDisplayValue');
const expireLabel = document.getElementById('otpExpireTime');
const isOwnReset = window.currentUser && window.currentUser === userId;
const isDPI = window.currentUser === 'DPI';
if (isDPI || isOwnReset) {
revealDiv.style.display = 'block';
otpDisplay.innerText = otp;
expireLabel.innerText = '⏱️ Expires at: ' + new Date(expiry).toLocaleTimeString('en-IN');
revealDiv.querySelector('div').innerText = isDPI ? '🔐 DPI Admin OTP View' : '🔐 Your OTP';
} else {
revealDiv.style.display = 'none';
}
document.getElementById('otpUserId')._resolvedUser = userId;
}
function verifyOTP() {
const enteredOTP = document.getElementById('otpInputVal').value.trim();
const userId = document.getElementById('otpUserId')._resolvedUser ||
document.getElementById('otpUserId').value.trim().toUpperCase();
const msg = document.getElementById('otpVerifyMsg');
const stored = window._otpStore[userId];
if (!stored) { msg.innerHTML = '<span style="color:red;">❌ OTP not generated. Please generate first.</span>'; return; }
if (Date.now() > stored.expiry) {
msg.innerHTML = '<span style="color:red;">⏱️ OTP expired. Please generate again.</span>';
delete window._otpStore[userId];
return;
}
if (enteredOTP !== stored.otp) {
msg.innerHTML = '<span style="color:red;">❌ Incorrect OTP. Please try again.</span>';
return;
}
delete window._otpStore[userId];
auditLog('OTP_VERIFIED', 'OTP verified for: ' + userId);
showStep(3);
document.getElementById('newPassVal').dataset.userId = userId;
}
function updatePwStrength() {
const val = document.getElementById('newPassVal').value;
const bar = document.getElementById('pwStrengthBar');
const label = document.getElementById('pwStrengthLabel');
let score = 0;
if (val.length >= 6)  score++;
if (val.length >= 8)  score++;
if (/[A-Z]/.test(val)) score++;
if (/[0-9]/.test(val)) score++;
if (/[^A-Za-z0-9]/.test(val)) score++;
const levels = [
{ w:'0%',   bg:'#eee',    t:'' },
{ w:'20%',  bg:'#e53935', t:'बहुत कमज़ोर' },
{ w:'40%',  bg:'#f57c00', t:'कमज़ोर' },
{ w:'60%',  bg:'#fbc02d', t:'ठीक है' },
{ w:'80%',  bg:'#7cb342', t:'अच्छा' },
{ w:'100%', bg:'#2e7d32', t:'बहुत मज़बूत ✅' },
];
const lvl = levels[score] || levels[0];
bar.style.width = lvl.w;
bar.style.background = lvl.bg;
label.innerText = lvl.t;
label.style.color = lvl.bg;
}
function saveNewPassword() {
const newPass    = document.getElementById('newPassVal').value;
const confirmPass = document.getElementById('confirmPassVal').value;
const userId     = document.getElementById('newPassVal').dataset.userId;
const msg        = document.getElementById('pwSaveMsg');
if (!newPass || newPass.length < 4) {
msg.innerHTML = '<span style="color:red;">❌ Password must be at least 4 characters.</span>';
return;
}
if (newPass !== confirmPass) {
msg.innerHTML = '<span style="color:red;">❌ Passwords do not match.</span>';
return;
}
const custom = JSON.parse(localStorage.getItem(CUSTOM_PASS_KEY) || '{}');
const oldPass = custom[userId] || districtCredentials[userId] || '(default)';
custom[userId] = newPass;
localStorage.setItem(CUSTOM_PASS_KEY, JSON.stringify(custom));
auditLog('PASSWORD_CHANGED', 'Password changed for: ' + userId);
const PW_RESET_LOG_KEY = 'dpi_pw_reset_log';
const resetLog = JSON.parse(localStorage.getItem(PW_RESET_LOG_KEY) || '[]');
resetLog.unshift({
userId: userId,
dateTime: new Date().toLocaleString('en-IN', { hour12: true }),
timestamp: Date.now(),
resetBy: window.currentUser || 'SELF',
oldPass: oldPass,
newPass: newPass
});
localStorage.setItem(PW_RESET_LOG_KEY, JSON.stringify(resetLog));
msg.innerHTML = '<span style="color:#2e7d32;font-weight:bold;">✅ Password changed successfully!</span>';
setTimeout(() => {
document.getElementById('changePwModal')?.remove();
const uf = document.getElementById('userField');
if (uf) uf.value = userId;
}, 1800);
}
function openPwResetLog() {
if (window.currentUser !== 'DPI') {
alert('⛔ This log can only be viewed by DPI Admin.');
return;
}
const PW_RESET_LOG_KEY = 'dpi_pw_reset_log';
const resetLog = JSON.parse(localStorage.getItem(PW_RESET_LOG_KEY) || '[]');
const modal = document.createElement('div');
modal.id = 'pwResetLogModal';
modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:99999;display:flex;align-items:center;justify-content:center;';
let rows = '';
if (resetLog.length === 0) {
rows = '<tr><td colspan="5" style="text-align:center;padding:20px;color:#999;">कोई Password Reset नहीं हुआ अभी तक।</td></tr>';
} else {
resetLog.forEach((entry, i) => {
rows += `<tr style="background:${i%2===0?'#fff':'#f9f9f9'}">
<td style="padding:10px 12px;border-bottom:1px solid #eee;font-weight:bold;color:#0d47a1;">${entry.userId}</td>
<td style="padding:10px 12px;border-bottom:1px solid #eee;color:#333;">${entry.dateTime}</td>
<td style="padding:10px 12px;border-bottom:1px solid #eee;color:#c62828;font-family:monospace;">${entry.oldPass || '-'}</td>
<td style="padding:10px 12px;border-bottom:1px solid #eee;color:#2e7d32;font-family:monospace;font-weight:bold;">${entry.newPass || '-'}</td>
<td style="padding:10px 12px;border-bottom:1px solid #eee;color:#555;">${entry.resetBy}</td>
</tr>`;
});
}
modal.innerHTML = `
<div style="background:white;border-radius:10px;width:95%;max-width:700px;box-shadow:0 20px 60px rgba(0,0,0,0.4);overflow:hidden;">
<div style="background:#c62828;color:white;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">
<span style="font-weight:bold;font-size:15px;">🔐 Password Reset Log — DPI View</span>
<button onclick="document.getElementById('pwResetLogModal').remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;font-weight:bold;">✕</button>
</div>
<div style="padding:16px 20px;background:#fff8f8;border-bottom:1px solid #eee;font-size:12px;color:#c62828;">
⚠️ यह log केवल DPI Admin को दिखता है। जो भी User अपना Password Reset करे, उसकी जानकारी यहाँ दर्ज होती है।
</div>
<div style="overflow-y:auto;max-height:400px;">
<table style="width:100%;border-collapse:collapse;font-size:13px;">
<thead>
<tr style="background:#f5f5f5;">
<th style="padding:10px 12px;text-align:left;color:#333;border-bottom:2px solid #ddd;">User ID</th>
<th style="padding:10px 12px;text-align:left;color:#333;border-bottom:2px solid #ddd;">Date & Time</th>
<th style="padding:10px 12px;text-align:left;color:#c62828;border-bottom:2px solid #ddd;">पुराना Password</th>
<th style="padding:10px 12px;text-align:left;color:#2e7d32;border-bottom:2px solid #ddd;">नया Password</th>
<th style="padding:10px 12px;text-align:left;color:#333;border-bottom:2px solid #ddd;">Reset By</th>
</tr>
</thead>
<tbody>${rows}</tbody>
</table>
</div>
<div style="padding:14px 20px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #eee;background:#fafafa;">
<span style="font-size:11px;color:#999;">कुल Reset: <strong>${resetLog.length}</strong></span>
<button onclick="if(confirm('Are you sure you want to delete all Password Reset Logs?')){localStorage.removeItem('dpi_pw_reset_log');document.getElementById('pwResetLogModal').remove();alert('Log cleared successfully.');}"
style="padding:7px 14px;background:#e53935;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;font-weight:bold;">🗑️ Log Clear करें</button>
</div>
</div>`;
document.body.appendChild(modal);
modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}
document.addEventListener('DOMContentLoaded', function() {
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn && logoutBtn.parentNode) {
const cpBtn = document.createElement('button');
cpBtn.onclick = openChangePassword;
cpBtn.title = 'Change Password via OTP';
cpBtn.style.cssText = 'padding:7px 14px;background:#006064;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;font-weight:bold;';
cpBtn.innerHTML = '🔑 Change Password';
logoutBtn.parentNode.insertBefore(cpBtn, logoutBtn);
}
});


// ═══════════════════════════════════════
// JS Block 12
// ═══════════════════════════════════════

const _DISTRICT_STRUCTURE = [
{ jd:'JD BHOPAL',       districts:['BHOPAL','RAISEN','RAJGARH','SEHORE','VIDISHA'] },
{ jd:'JD GWALIOR',      districts:['ASHOKNAGAR','BHIND','DATIA','GUNA','GWALIOR','MORENA','SHEOPUR','SHIVPURI'] },
{ jd:'JD INDORE',       districts:['ALIRAJPUR','BADWANI','BURHANPUR','DHAR','INDORE','JHABUA','KHANDWA','KHARGONE'] },
{ jd:'JD JABALPUR',     districts:['BALAGHAT','CHHINDWARA','JABALPUR','KATNI','MANDLA','NARSINGHPUR','SEONI','DINDORI','PANDHURNA'] },
{ jd:'JD UJJAIN',       districts:['AGAR MALWA','DEWAS','MANDSAUR','NEEMUCH','RATLAM','SHAJAPUR','UJJAIN'] },
{ jd:'JD SAGAR',        districts:['CHHATARPUR','DAMOH','PANNA','SAGAR','TIKAMGARH','NIWARI'] },
{ jd:'JD REWA',         districts:['REWA','SATNA','SIDHI','SINGRAULI','MAUGANJ','MAIHAR'] },
{ jd:'JD NARMADAPURAM', districts:['BETUL','HARDA','NARMADAPURAM'] },
{ jd:'JD SHAHDOL',      districts:['ANUPPUR','SHAHDOL','UMARIA'] }
];
let _dashCharts = {};
function _destroyDashCharts() {
Object.values(_dashCharts).forEach(c => { try { c.destroy(); } catch(e){} });
_dashCharts = {};
}
function _getDistrictName(row) {
let v = (row.field22 || '').toUpperCase().trim();
if (/^\d{8,}/.test(v) || v.includes('ODS')) v = (row.field23 || '').toUpperCase().trim();
return v.replace(/^DEO\s+/,'').replace(/^JD\s+/,'').trim();
}
function _computeDashData() {
const rows = (window.fullData || []).filter(r => (r.field28||'').toUpperCase() !== 'DELETED');
const today = new Date();
const distCount = {};
_DISTRICT_STRUCTURE.forEach(j => j.districts.forEach(d => { distCount[d] = 0; }));
rows.forEach(r => { const d = _getDistrictName(r); if (distCount[d] !== undefined) distCount[d]++; });
const catCount = {};
rows.forEach(r => {
const c = (r.field5 || 'UNKNOWN').trim().toUpperCase() || 'UNKNOWN';
catCount[c] = (catCount[c] || 0) + 1;
});
const monthlyNew = {}, monthlyUpd = {};
const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const months = [];
for (let i = 5; i >= 0; i--) {
const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
months.push({ label: monthNames[d.getMonth()] + ' ' + d.getFullYear().toString().slice(2), year: d.getFullYear(), month: d.getMonth() });
monthlyNew[i] = 0; monthlyUpd[i] = 0;
}
rows.forEach(r => {
const status = (r.field28 || '').toUpperCase();
const trail = r.field29 || '';
const dateMatch = trail.match(/(\d{2})-(\d{2})-(\d{4})/);
if (!dateMatch) return;
const rDate = new Date(parseInt(dateMatch[3]), parseInt(dateMatch[2])-1, parseInt(dateMatch[1]));
months.forEach((m, idx) => {
if (rDate.getFullYear() === m.year && rDate.getMonth() === m.month) {
if (status.includes('NEW')) monthlyNew[5 - idx < 0 ? 0 : 5-idx]++;
else if (status.includes('UPD')) monthlyUpd[5 - idx < 0 ? 0 : 5-idx]++;
}
});
});
const retiringSoon = [];
rows.forEach(r => {
const dob = r.field7 || '';
let birthDate = null;
if (/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
const p = dob.split('-');
birthDate = new Date(parseInt(p[2]), parseInt(p[1])-1, parseInt(p[0]));
} else if (/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
birthDate = new Date(dob);
}
if (!birthDate || isNaN(birthDate)) return;
const retDate = new Date(birthDate.getFullYear()+60, birthDate.getMonth(), birthDate.getDate());
const daysLeft = Math.floor((retDate - today) / 86400000);
if (daysLeft >= 0 && daysLeft <= 90) {
retiringSoon.push({
name: r.field4 || '—',
district: _getDistrictName(r),
dob: dob,
retDate: retDate.toLocaleDateString('en-IN'),
daysLeft: daysLeft
});
}
});
retiringSoon.sort((a,b) => a.daysLeft - b.daysLeft);
return { distCount, catCount, months, monthlyNew, monthlyUpd, retiringSoon, total: rows.length };
}
function openLiveDashboard() {
if (!window.fullData || window.fullData.length === 0) {
myAlert('Data not loaded yet. Please try again in a moment.'); return;
}
_destroyDashCharts();
const existing = document.getElementById('liveDashModal');
if (existing) existing.remove();
const D = _computeDashData();
const sortedDist = Object.entries(D.distCount).sort((a,b) => b[1]-a[1]);
const barLabels = sortedDist.map(e => e[0]);
const barData   = sortedDist.map(e => e[1]);
const catLabels = Object.keys(D.catCount);
const catData   = Object.values(D.catCount);
const PIE_COLORS = ['#6a1b9a','#1565c0','#2e7d32','#e65100','#b71c1c','#00695c','#4527a0','#558b2f'];
const trendLabels = D.months.map(m => m.label);
const trendNew  = D.months.map((m,i) => D.monthlyNew[i] || 0);
const trendUpd  = D.months.map((m,i) => D.monthlyUpd[i] || 0);
const retRows = D.retiringSoon.length === 0
? '<tr><td colspan="5" style="text-align:center;padding:16px;color:#888;font-style:italic;">Agle 90 din mein koi retirement nahi</td></tr>'
: D.retiringSoon.slice(0,20).map(r => {
const urgency = r.daysLeft <= 30 ? '#ffebee' : r.daysLeft <= 60 ? '#fff8e1' : '#e8f5e9';
const badge   = r.daysLeft <= 30 ? '#c62828' : r.daysLeft <= 60 ? '#e65100' : '#2e7d32';
return `<tr style="background:${urgency};border-bottom:1px solid #eee;">
<td style="padding:7px 10px;font-weight:600;font-size:12px;">${r.name}</td>
<td style="padding:7px 10px;font-size:12px;">${r.district}</td>
<td style="padding:7px 10px;font-size:12px;">${r.dob}</td>
<td style="padding:7px 10px;font-size:12px;">${r.retDate}</td>
<td style="padding:7px 10px;text-align:center;">
<span style="background:${badge};color:white;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:bold;">${r.daysLeft}d</span>
</td>
</tr>`;
}).join('');
const modal = document.createElement('div');
modal.id = 'liveDashModal';
modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:10001;overflow-y:auto;';
modal.innerHTML = `
<div style="max-width:1100px;margin:20px auto;background:#f4f6fa;border-radius:10px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.4);">
<!-- Header -->
<div style="background:linear-gradient(135deg,#4a148c,#6a1b9a);color:white;padding:16px 24px;display:flex;justify-content:space-between;align-items:center;">
<div>
<div style="font-size:18px;font-weight:700;letter-spacing:.5px;">📊 DPI Live Dashboard</div>
<div style="font-size:12px;opacity:.8;margin-top:2px;">Real-time data from Supabase • ${new Date().toLocaleString('en-IN')}</div>
</div>
<button onclick="closeLiveDashboard()" style="background:rgba(255,255,255,.2);border:none;color:white;width:32px;height:32px;border-radius:50%;font-size:16px;cursor:pointer;font-weight:bold;">✕</button>
</div>
<!-- KPI Cards -->
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:20px 24px 8px;">
<div style="background:white;border-radius:8px;padding:14px 16px;border-left:4px solid #6a1b9a;">
<div style="font-size:11px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">कुल Records</div>
<div style="font-size:28px;font-weight:700;color:#4a148c;margin-top:4px;">${D.total.toLocaleString('en-IN')}</div>
</div>
<div style="background:white;border-radius:8px;padding:14px 16px;border-left:4px solid #1565c0;">
<div style="font-size:11px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Districts Active</div>
<div style="font-size:28px;font-weight:700;color:#1565c0;margin-top:4px;">${Object.values(D.distCount).filter(v=>v>0).length}</div>
</div>
<div style="background:white;border-radius:8px;padding:14px 16px;border-left:4px solid #e65100;">
<div style="font-size:11px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Retiring (90 days)</div>
<div style="font-size:28px;font-weight:700;color:#e65100;margin-top:4px;">${D.retiringSoon.length}</div>
</div>
<div style="background:white;border-radius:8px;padding:14px 16px;border-left:4px solid #2e7d32;">
<div style="font-size:11px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Categories</div>
<div style="font-size:28px;font-weight:700;color:#2e7d32;margin-top:4px;">${catLabels.length}</div>
</div>
</div>
<!-- Charts Row 1: Bar + Pie -->
<div style="display:grid;grid-template-columns:2fr 1fr;gap:14px;padding:8px 24px;">
<div style="background:white;border-radius:8px;padding:16px;">
<div style="font-size:13px;font-weight:700;color:#333;margin-bottom:12px;">📍 District-wise Records (Top 55)</div>
<div style="overflow-x:auto;">
<div style="min-width:900px;height:260px;">
<canvas id="dashBarChart"></canvas>
</div>
</div>
</div>
<div style="background:white;border-radius:8px;padding:16px;">
<div style="font-size:13px;font-weight:700;color:#333;margin-bottom:12px;">🎯 Category Split</div>
<div style="height:220px;display:flex;align-items:center;justify-content:center;">
<canvas id="dashPieChart"></canvas>
</div>
</div>
</div>
<!-- Charts Row 2: Line trend -->
<div style="padding:8px 24px;">
<div style="background:white;border-radius:8px;padding:16px;">
<div style="font-size:13px;font-weight:700;color:#333;margin-bottom:12px;">📈 Monthly Activity Trend (Last 6 Months)</div>
<div style="height:200px;">
<canvas id="dashLineChart"></canvas>
</div>
</div>
</div>
<!-- Retirement Calendar -->
<div style="padding:8px 24px 24px;">
<div style="background:white;border-radius:8px;padding:16px;">
<div style="font-size:13px;font-weight:700;color:#333;margin-bottom:4px;">⚠️ Upcoming Retirements — Next 90 Days</div>
<div style="font-size:11px;color:#888;margin-bottom:12px;">
<span style="background:#ffebee;padding:2px 8px;border-radius:4px;color:#c62828;font-weight:600;margin-right:6px;">● ≤ 30 days</span>
<span style="background:#fff8e1;padding:2px 8px;border-radius:4px;color:#e65100;font-weight:600;margin-right:6px;">● ≤ 60 days</span>
<span style="background:#e8f5e9;padding:2px 8px;border-radius:4px;color:#2e7d32;font-weight:600;">● ≤ 90 days</span>
</div>
<div style="overflow-y:auto;max-height:260px;">
<table style="width:100%;border-collapse:collapse;font-size:13px;">
<thead>
<tr style="background:#f5f5f5;position:sticky;top:0;">
<th style="padding:8px 10px;text-align:left;font-size:11px;color:#555;border-bottom:2px solid #eee;">Name</th>
<th style="padding:8px 10px;text-align:left;font-size:11px;color:#555;border-bottom:2px solid #eee;">District</th>
<th style="padding:8px 10px;text-align:left;font-size:11px;color:#555;border-bottom:2px solid #eee;">DOB</th>
<th style="padding:8px 10px;text-align:left;font-size:11px;color:#555;border-bottom:2px solid #eee;">Retirement Date</th>
<th style="padding:8px 10px;text-align:center;font-size:11px;color:#555;border-bottom:2px solid #eee;">Days Left</th>
</tr>
</thead>
<tbody>${retRows}</tbody>
</table>
</div>
</div>
</div>
</div>`;
document.body.appendChild(modal);
modal.addEventListener('click', e => { if (e.target === modal) closeLiveDashboard(); });
requestAnimationFrame(() => {
const barCtx = document.getElementById('dashBarChart')?.getContext('2d');
if (barCtx) {
_dashCharts.bar = new Chart(barCtx, {
type: 'bar',
data: {
labels: barLabels,
datasets: [{
label: 'Records',
data: barData,
backgroundColor: barLabels.map((_, i) => {
const jdColors = ['#6a1b9a','#1565c0','#2e7d32','#e65100','#b71c1c','#00695c','#4527a0','#558b2f','#0277bd'];
for (let ji = 0; ji < _DISTRICT_STRUCTURE.length; ji++) {
if (_DISTRICT_STRUCTURE[ji].districts.includes(barLabels[i])) return jdColors[ji] + 'cc';
}
return '#9e9e9ecc';
}),
borderRadius: 4,
borderSkipped: false,
}]
},
options: {
responsive: true, maintainAspectRatio: false,
plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ' Records: ' + ctx.parsed.y } } },
scales: {
x: { ticks: { font: { size: 9 }, maxRotation: 75, minRotation: 45 }, grid: { display: false } },
y: { beginAtZero: true, ticks: { font: { size: 10 } }, grid: { color: '#f0f0f0' } }
}
}
});
}
const pieCtx = document.getElementById('dashPieChart')?.getContext('2d');
if (pieCtx) {
_dashCharts.pie = new Chart(pieCtx, {
type: 'doughnut',
data: {
labels: catLabels,
datasets: [{ data: catData, backgroundColor: PIE_COLORS.slice(0, catLabels.length), borderWidth: 2, borderColor: '#fff' }]
},
options: {
responsive: true, maintainAspectRatio: false,
plugins: {
legend: { position: 'bottom', labels: { font: { size: 10 }, boxWidth: 12, padding: 8 } },
tooltip: { callbacks: { label: ctx => ' ' + ctx.label + ': ' + ctx.parsed + ' (' + Math.round(ctx.parsed / catData.reduce((a,b)=>a+b,0) * 100) + '%)' } }
}
}
});
}
const lineCtx = document.getElementById('dashLineChart')?.getContext('2d');
if (lineCtx) {
_dashCharts.line = new Chart(lineCtx, {
type: 'line',
data: {
labels: trendLabels,
datasets: [
{ label: 'New Entries', data: trendNew, borderColor: '#1565c0', backgroundColor: '#1565c022', fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: '#1565c0' },
{ label: 'Updated',     data: trendUpd, borderColor: '#2e7d32', backgroundColor: '#2e7d3222', fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: '#2e7d32' }
]
},
options: {
responsive: true, maintainAspectRatio: false,
plugins: { legend: { position: 'top', labels: { font: { size: 11 }, boxWidth: 14 } } },
scales: {
x: { grid: { display: false }, ticks: { font: { size: 11 } } },
y: { beginAtZero: true, grid: { color: '#f0f0f0' }, ticks: { font: { size: 11 } } }
}
}
});
}
});
}
function closeLiveDashboard() {
_destroyDashCharts();
const m = document.getElementById('liveDashModal');
if (m) m.remove();
}


// ═══════════════════════════════════════
// JS Block 13
// ═══════════════════════════════════════

function _computeTrackerData() {
const rows = window.fullData || [];
const today = new Date();
const DEO_MAP = {
'AGARMALWA':'DEOAGARMALWA','ALIRAJPUR':'DEOALIRAJPUR','ANUPPUR':'DEOANUPPUR',
'ASHOKNAGAR':'DEOASHOKNAGAR','BALAGHAT':'DEOBALAGHAT','BARWANI':'DEOBARWANI',
'BADWANI':'DEOBARWANI','BETUL':'DEOBETUL','BHIND':'DEOBHIND','BHOPAL':'DEOBHOPAL',
'BURHANPUR':'DEOBURHANPUR','CHHATARPUR':'DEOCHHATARPUR','CHHINDWARA':'DEOCHHINDWARA',
'DAMOH':'DEODAMOH','DATIA':'DEODATIA','DEWAS':'DEODEWAS','DHAR':'DEODHAR',
'DINDORI':'DEODINDORI','GUNA':'DEOGUNA','GWALIOR':'DEOGWALIOR','HARDA':'DEOHARDA',
'HOSHANGABAD':'DEOHOSHANGABAD','NARMADAPURAM':'DEONARMADAPURAM',
'INDORE':'DEOINDORE','JABALPUR':'DEOJABALPUR','JHABUA':'DEOJHABUA',
'KATNI':'DEOKATNI','KHANDWA':'DEOKHANDWA','KHARGONE':'DEOKHARGONE',
'MANDLA':'DEOMANDLA','MANDSAUR':'DEOMANDSAUR','MORENA':'DEOMORENA',
'NARSINGHPUR':'DEONARSINGHPUR','NEEMUCH':'DEONEEMUCH','NIWARI':'DEONIWARI',
'PANNA':'DEOPANNA','RAISEN':'DEORAISEN','RAJGARH':'DEORAJGARH',
'RATLAM':'DEORATLAM','REWA':'DEOREWA','SAGAR':'DEOSAGAR','SATNA':'DEOSATNA',
'SEHORE':'DEOSEHORE','SEONI':'DEOSEONI','SHAHDOL':'DEOSHAHDOL',
'SHAJAPUR':'DEOSHAJAPUR','SHEOPUR':'DEOSHEOPUR','SHIVPURI':'DEOSHIVPURI',
'SIDHI':'DEOSIDHI','SINGRAULI':'DEOSINGRAULI','TIKAMGARH':'DEOTIKAMGARH',
'UJJAIN':'DEOUJJAIN','UMARIA':'DEOUMARIA','VIDISHA':'DEOVIDISHA',
'PANDHURNA':'DEOPANDHURNA','MAIHAR':'DEOMAIHAR','MAUGANJ':'DEOMAUGANJ'
};
const stats = {};
Object.keys(DEO_MAP).forEach(d => {
stats[d] = { district: d, loginId: DEO_MAP[d], total: 0, active: 0, updated: 0, newEntry: 0, deleted: 0, lastActivity: null, lastActivityRaw: 0 };
});
rows.forEach(row => {
let rawDistrict = (row.field22 || '').toUpperCase().trim();
if (/^\d{8,}/.test(rawDistrict) || rawDistrict.includes('ODS')) {
rawDistrict = (row.field23 || '').toUpperCase().trim();
}
const distName = rawDistrict.replace(/^DEO\s+/,'').replace(/^JD\s+/,'').trim();
if (!stats[distName]) return;
const st = stats[distName];
const status = (row.field28 || '').toUpperCase().trim();
const trail  = (row.field29 || '').trim();
st.total++;
if (!status.includes('DELETE')) st.active++;
if (status.includes('NEW'))     st.newEntry++;
if (status.includes('UPD'))     st.updated++;
if (status.includes('DELETE'))  st.deleted++;
if (trail) {
const pipeParts = trail.split('|');
const datePart = pipeParts.length > 1 ? pipeParts[pipeParts.length - 1].trim() : trail;
let parsed = null;
const dmyMatch = datePart.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
if (dmyMatch) {
const attempt = new Date(`${dmyMatch[3]}-${dmyMatch[2].padStart(2,'0')}-${dmyMatch[1].padStart(2,'0')}`);
if (!isNaN(attempt)) parsed = attempt;
}
const ddmmMatch = datePart.match(/(\d{2})-(\d{2})-(\d{4})/);
if (!parsed && ddmmMatch) {
const attempt = new Date(`${ddmmMatch[3]}-${ddmmMatch[2]}-${ddmmMatch[1]}`);
if (!isNaN(attempt)) parsed = attempt;
}
if (parsed && !isNaN(parsed)) {
const ts = parsed.getTime();
if (ts > st.lastActivityRaw) {
st.lastActivityRaw = ts;
st.lastActivity = parsed;
}
}
}
});
const arr = Object.values(stats).filter(s => s.total > 0 || true);
arr.sort((a, b) => b.active - a.active);
const maxActive = Math.max(...arr.map(s => s.active), 1);
const scored = arr.map(s => ({
...s,
score: s.active + s.updated * 2 + s.newEntry
})).sort((a,b) => b.score - a.score);
return { arr, maxActive, leaderboard: scored.slice(0, 10), today };
}
function _timeAgo(date) {
if (!date) return '<span style="color:#bbb;font-style:italic;">No activity</span>';
const diff = Date.now() - date.getTime();
const mins  = Math.floor(diff / 60000);
const hours = Math.floor(diff / 3600000);
const days  = Math.floor(diff / 86400000);
if (mins < 2)   return '<span style="color:#2e7d32;font-weight:600;">Just now</span>';
if (mins < 60)  return `<span style="color:#2e7d32;font-weight:600;">${mins}m ago</span>`;
if (hours < 24) return `<span style="color:#1565c0;font-weight:600;">${hours}h ago</span>`;
if (days === 1) return `<span style="color:#e65100;font-weight:600;">Yesterday</span>`;
if (days < 7)   return `<span style="color:#e65100;font-weight:600;">${days}d ago</span>`;
return `<span style="color:#b71c1c;font-weight:600;">${date.toLocaleDateString('en-IN')}</span>`;
}
function _statusBadge(s) {
if (!s.lastActivity) return '<span style="background:#f5f5f5;color:#aaa;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;">INACTIVE</span>';
const days = Math.floor((Date.now() - s.lastActivity.getTime()) / 86400000);
if (days <= 1)  return '<span style="background:#e8f5e9;color:#2e7d32;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;">ACTIVE</span>';
if (days <= 7)  return '<span style="background:#e3f2fd;color:#1565c0;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;">RECENT</span>';
if (days <= 30) return '<span style="background:#fff8e1;color:#e65100;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;">SLOW</span>';
return '<span style="background:#ffebee;color:#b71c1c;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;">LAGGING</span>';
}
function openCompletionTracker() {
if (!window.fullData || window.fullData.length === 0) {
myAlert('Data not loaded. Please try again in a moment.'); return;
}
const existing = document.getElementById('trackerModal');
if (existing) existing.remove();
const { arr, maxActive, leaderboard, today } = _computeTrackerData();
const totalActive  = arr.reduce((s,d) => s + d.active, 0);
const totalNew     = arr.reduce((s,d) => s + d.newEntry, 0);
const totalUpd     = arr.reduce((s,d) => s + d.updated, 0);
const totalDel     = arr.reduce((s,d) => s + d.deleted, 0);
const activeDistricts = arr.filter(d => d.lastActivity && (Date.now() - d.lastActivity.getTime()) < 86400000 * 7).length;
const laggingDistricts = arr.filter(d => !d.lastActivity || (Date.now() - d.lastActivity.getTime()) > 86400000 * 30).length;
const MEDALS = ['🥇','🥈','🥉'];
const leaderRows = leaderboard.map((s, i) => `
<tr style="background:${i < 3 ? ['#fffde7','#f3f3f3','#fff3e0'][i] : (i%2===0?'#fff':'#fafafa')};border-bottom:1px solid #f0f0f0;">
<td style="padding:10px 12px;font-size:15px;text-align:center;width:36px;">${i < 3 ? MEDALS[i] : '<span style="color:#999;font-size:12px;font-weight:700;">' + (i+1) + '</span>'}</td>
<td style="padding:10px 12px;">
<div style="font-size:13px;font-weight:700;color:#1a237e;">${s.district}</div>
<div style="font-size:10px;color:#888;">${s.loginId}</div>
</td>
<td style="padding:10px 12px;text-align:center;">
<span style="font-size:16px;font-weight:700;color:#1565c0;">${s.active.toLocaleString('en-IN')}</span>
</td>
<td style="padding:10px 12px;text-align:center;">
<span style="background:#e8f5e9;color:#2e7d32;padding:2px 7px;border-radius:8px;font-size:11px;font-weight:700;">+${s.newEntry}</span>
<span style="background:#e3f2fd;color:#1565c0;padding:2px 7px;border-radius:8px;font-size:11px;font-weight:700;margin-left:3px;">↻${s.updated}</span>
</td>
<td style="padding:10px 12px;text-align:center;">${_timeAgo(s.lastActivity)}</td>
<td style="padding:10px 12px;text-align:center;">${_statusBadge(s)}</td>
</tr>`).join('');
const JD_COLOR = {
'JD BHOPAL':'#6a1b9a','JD GWALIOR':'#1565c0','JD INDORE':'#2e7d32',
'JD JABALPUR':'#e65100','JD UJJAIN':'#b71c1c','JD SAGAR':'#00695c',
'JD REWA':'#4527a0','JD NARMADAPURAM':'#558b2f','JD SHAHDOL':'#0277bd'
};
let progressHTML = '';
(_DISTRICT_STRUCTURE || []).forEach(jd => {
const color = JD_COLOR[jd.jd] || '#555';
progressHTML += `
<div style="margin-bottom:18px;">
<div style="font-size:11px;font-weight:700;color:${color};text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px;padding-bottom:4px;border-bottom:2px solid ${color}22;">
${jd.jd}
</div>`;
jd.districts.forEach(distName => {
const s = arr.find(a => a.district === distName) || { district: distName, active: 0, newEntry: 0, updated: 0, deleted: 0, lastActivity: null };
const pct = maxActive > 0 ? Math.round((s.active / maxActive) * 100) : 0;
const barColor = s.active === 0 ? '#e0e0e0' : color;
progressHTML += `
<div data-district="${distName}" style="display:grid;grid-template-columns:120px 1fr 60px 90px 80px;gap:8px;align-items:center;margin-bottom:6px;">
<div style="font-size:11px;font-weight:600;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${distName}">${distName}</div>
<div style="background:#f0f0f0;border-radius:4px;height:10px;overflow:hidden;">
<div style="width:${pct}%;height:100%;background:${barColor};border-radius:4px;transition:width .4s;"></div>
</div>
<div style="font-size:11px;font-weight:700;color:#333;text-align:right;">${s.active.toLocaleString('en-IN')}</div>
<div style="font-size:10px;text-align:center;">${_timeAgo(s.lastActivity)}</div>
<div style="font-size:10px;text-align:right;">${_statusBadge(s)}</div>
</div>`;
});
progressHTML += `</div>`;
});
const modal = document.createElement('div');
modal.id = 'trackerModal';
modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.72);z-index:10002;overflow-y:auto;';
modal.innerHTML = `
<div style="max-width:1080px;margin:20px auto 40px;background:#f4f6fa;border-radius:12px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,0.45);">
<!-- ── Header ── -->
<div style="background:linear-gradient(135deg,#0d47a1,#1565c0);color:white;padding:18px 28px;display:flex;justify-content:space-between;align-items:center;">
<div>
<div style="font-size:19px;font-weight:700;letter-spacing:.4px;">🏆 District Completion Tracker</div>
<div style="font-size:12px;opacity:.8;margin-top:3px;">Live progress • Last refreshed: ${today.toLocaleString('en-IN')}</div>
</div>
<div style="display:flex;gap:10px;align-items:center;">
<button onclick="refreshTracker()" style="background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.4);color:white;padding:6px 14px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;">🔄 Refresh</button>
<button onclick="document.getElementById('trackerModal').remove()" style="background:rgba(255,255,255,.15);border:none;color:white;width:34px;height:34px;border-radius:50%;font-size:16px;cursor:pointer;font-weight:bold;">✕</button>
</div>
</div>
<!-- ── KPI Strip ── -->
<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px;padding:20px 24px 10px;">
<div style="background:white;border-radius:8px;padding:13px 15px;border-top:3px solid #1565c0;">
<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Total Active</div>
<div style="font-size:26px;font-weight:700;color:#1565c0;margin-top:3px;">${totalActive.toLocaleString('en-IN')}</div>
</div>
<div style="background:white;border-radius:8px;padding:13px 15px;border-top:3px solid #2e7d32;">
<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">New Entries</div>
<div style="font-size:26px;font-weight:700;color:#2e7d32;margin-top:3px;">${totalNew.toLocaleString('en-IN')}</div>
</div>
<div style="background:white;border-radius:8px;padding:13px 15px;border-top:3px solid #0277bd;">
<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Updated</div>
<div style="font-size:26px;font-weight:700;color:#0277bd;margin-top:3px;">${totalUpd.toLocaleString('en-IN')}</div>
</div>
<div style="background:white;border-radius:8px;padding:13px 15px;border-top:3px solid #2e7d32;">
<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Active This Week</div>
<div style="font-size:26px;font-weight:700;color:#2e7d32;margin-top:3px;">${activeDistricts}</div>
</div>
<div style="background:white;border-radius:8px;padding:13px 15px;border-top:3px solid #b71c1c;">
<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.5px;">Lagging (&gt;30d)</div>
<div style="font-size:26px;font-weight:700;color:#b71c1c;margin-top:3px;">${laggingDistricts}</div>
</div>
</div>
<!-- ── Two Column: Leaderboard + Search ── -->
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:10px 24px;">
<!-- Leaderboard -->
<div style="background:white;border-radius:10px;overflow:hidden;">
<div style="padding:14px 16px;border-bottom:1px solid #f0f0f0;">
<div style="font-size:13px;font-weight:700;color:#1a237e;">🏅 Top 10 Leaderboard</div>
<div style="font-size:11px;color:#888;margin-top:2px;">Score = Active + Updated×2 + New</div>
</div>
<div style="overflow-y:auto;max-height:340px;">
<table style="width:100%;border-collapse:collapse;">
<thead>
<tr style="background:#f8f9fa;position:sticky;top:0;">
<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:center;width:36px;">#</th>
<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:left;">District</th>
<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:center;">Records</th>
<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:center;">Activity</th>
<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:center;">Last Active</th>
<th style="padding:8px 10px;font-size:10px;color:#666;font-weight:600;text-align:center;">Status</th>
</tr>
</thead>
<tbody>${leaderRows}</tbody>
</table>
</div>
</div>
<!-- Alert Panel: Lagging districts -->
<div style="background:white;border-radius:10px;overflow:hidden;">
<div style="padding:14px 16px;border-bottom:1px solid #f0f0f0;background:#fff8f8;">
<div style="font-size:13px;font-weight:700;color:#b71c1c;">⚠️ Attention Required</div>
<div style="font-size:11px;color:#888;margin-top:2px;">Districts with no activity in last 30 days</div>
</div>
<div style="overflow-y:auto;max-height:340px;padding:8px 0;">
${arr.filter(s => !s.lastActivity || (Date.now() - s.lastActivity.getTime()) > 86400000 * 30)
.sort((a,b) => (a.lastActivityRaw||0) - (b.lastActivityRaw||0))
.map(s => `
<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 16px;border-bottom:1px solid #ffeaea;">
<div>
<div style="font-size:12px;font-weight:700;color:#333;">${s.district}</div>
<div style="font-size:10px;color:#999;">${s.loginId} • ${s.active} records</div>
</div>
<div style="text-align:right;">
${_timeAgo(s.lastActivity)}
<div style="margin-top:2px;">${_statusBadge(s)}</div>
</div>
</div>`).join('') || '<div style="padding:20px;text-align:center;color:#2e7d32;font-weight:600;">✅ Sab districts active hain!</div>'
}
</div>
</div>
</div>
<!-- ── Progress Bars: All Districts by JD ── -->
<div style="padding:10px 24px 28px;">
<div style="background:white;border-radius:10px;padding:18px 20px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
<div style="font-size:13px;font-weight:700;color:#333;">📊 All Districts — Progress View</div>
<div style="display:flex;gap:8px;align-items:center;">
<input type="text" id="trackerSearchBox" oninput="filterTrackerRows(this.value)" style="padding:5px 10px;border:1px solid #ddd;border-radius:6px;font-size:12px;width:160px;">
</div>
</div>
<div style="font-size:10px;color:#888;margin-bottom:14px;">Progress bar = relative to highest district. Color = JD region.</div>
<!-- Legend -->
<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid #f0f0f0;">
${Object.entries(JD_COLOR).map(([jd, col]) => `<span style="font-size:10px;font-weight:600;color:${col};display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background:${col};border-radius:2px;display:inline-block;"></span>${jd}</span>`).join('')}
</div>
<!-- Column headers -->
<div style="display:grid;grid-template-columns:120px 1fr 60px 90px 80px;gap:8px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid #eee;">
<div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;">District</div>
<div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;">Progress</div>
<div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;text-align:right;">Records</div>
<div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;text-align:center;">Last Active</div>
<div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;text-align:right;">Status</div>
</div>
<div id="trackerProgressBody">${progressHTML}</div>
</div>
</div>
</div>`;
document.body.appendChild(modal);
modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}
function refreshTracker() {
openCompletionTracker();
}
function filterTrackerRows(val) {
const body = document.getElementById('trackerProgressBody');
if (!body) return;
const q = val.trim().toUpperCase();
body.querySelectorAll('[data-district]').forEach(el => {
el.style.display = (!q || el.dataset.district.includes(q)) ? '' : 'none';
});
}
const _origLoadDataIntoMemory2 = typeof loadDataIntoMemory === 'function' ? loadDataIntoMemory : null;


// ═══════════════════════════════════════
// JS Block 14
// ═══════════════════════════════════════

const DIST_PANEL_PASSWORD = "1782";
function openDistrictPasswordPanel() {
document.getElementById('distPassUnlockModal').style.display = 'flex';
document.getElementById('distPassUnlockInput').value = '';
document.getElementById('distPassUnlockErr').textContent = '';
setTimeout(() => document.getElementById('distPassUnlockInput').focus(), 100);
}
function verifyDistPassUnlock() {
const entered = document.getElementById('distPassUnlockInput').value.trim();
if (entered === DIST_PANEL_PASSWORD) {
document.getElementById('distPassUnlockModal').style.display = 'none';
document.getElementById('distPassUnlockInput').value = '';
document.getElementById('distPassUnlockErr').textContent = '';
showDistrictPasswordPanel();
} else {
document.getElementById('distPassUnlockErr').textContent = '❌ Galat password! Sirf DPI ke liye.';
document.getElementById('distPassUnlockInput').value = '';
document.getElementById('distPassUnlockInput').focus();
}
}
function showDistrictPasswordPanel() {
buildDistPassTable('all');
document.getElementById('districtPasswordPanel').style.display = 'block';
document.getElementById('distPassSearch').value = '';
}
function closeDistrictPasswordPanel() {
document.getElementById('districtPasswordPanel').style.display = 'none';
}
function showDistPassTab(tab) {
['all','dpi','jd','deo'].forEach(t => {
const btn = document.getElementById('tab' + t.toUpperCase());
if(btn){ btn.style.background = (t===tab)?'#1565c0':'#e0e0e0'; btn.style.color = (t===tab)?'white':'#333'; }
});
document.getElementById('distPassSearch').value = '';
buildDistPassTable(tab);
}
function buildDistPassTable(tab) {
const allEntries = [
{ type:'DPI', label:'DPI (State Level)', id:'DPI', pass: districtCredentials['DPI'] },
{ type:'JD', label:'JD Bhopal', id:'JDBHOPAL', pass: districtCredentials['JDBHOPAL'] },
{ type:'JD', label:'JD Gwalior', id:'JDGWALIOR', pass: districtCredentials['JDGWALIOR'] },
{ type:'JD', label:'JD Indore', id:'JDINDORE', pass: districtCredentials['JDINDORE'] },
{ type:'JD', label:'JD Jabalpur', id:'JDJABALPUR', pass: districtCredentials['JDJABALPUR'] },
{ type:'JD', label:'JD Rewa', id:'JDREWA', pass: districtCredentials['JDREWA'] },
{ type:'JD', label:'JD Sagar', id:'JDSAGAR', pass: districtCredentials['JDSAGAR'] },
{ type:'JD', label:'JD Ujjain', id:'JDUJJAIN', pass: districtCredentials['JDUJJAIN'] },
{ type:'JD', label:'JD Shahdol', id:'JDSHAHDOL', pass: districtCredentials['JDSHAHDOL'] },
{ type:'JD', label:'JD Narmadapuram', id:'JDNARMADAPURAM', pass: districtCredentials['JDNARMADAPURAM'] },
{ type:'DEO', label:'DEO Agar Malwa', id:'DEOAGARMALWA', pass: districtCredentials['DEOAGARMALWA'] },
{ type:'DEO', label:'DEO Alirajpur', id:'DEOALIRAJPUR', pass: districtCredentials['DEOALIRAJPUR'] },
{ type:'DEO', label:'DEO Anuppur', id:'DEOANUPPUR', pass: districtCredentials['DEOANUPPUR'] },
{ type:'DEO', label:'DEO Ashoknagar', id:'DEOASHOKNAGAR', pass: districtCredentials['DEOASHOKNAGAR'] },
{ type:'DEO', label:'DEO Balaghat', id:'DEOBALAGHAT', pass: districtCredentials['DEOBALAGHAT'] },
{ type:'DEO', label:'DEO Barwani', id:'DEOBARWANI', pass: districtCredentials['DEOBARWANI'] },
{ type:'DEO', label:'DEO Betul', id:'DEOBETUL', pass: districtCredentials['DEOBETUL'] },
{ type:'DEO', label:'DEO Bhind', id:'DEOBHIND', pass: districtCredentials['DEOBHIND'] },
{ type:'DEO', label:'DEO Bhopal', id:'DEOBHOPAL', pass: districtCredentials['DEOBHOPAL'] },
{ type:'DEO', label:'DEO Burhanpur', id:'DEOBURHANPUR', pass: districtCredentials['DEOBURHANPUR'] },
{ type:'DEO', label:'DEO Chhatarpur', id:'DEOCHHATARPUR', pass: districtCredentials['DEOCHHATARPUR'] },
{ type:'DEO', label:'DEO Chhindwara', id:'DEOCHHINDWARA', pass: districtCredentials['DEOCHHINDWARA'] },
{ type:'DEO', label:'DEO Damoh', id:'DEODAMOH', pass: districtCredentials['DEODAMOH'] },
{ type:'DEO', label:'DEO Datia', id:'DEODATIA', pass: districtCredentials['DEODATIA'] },
{ type:'DEO', label:'DEO Dewas', id:'DEODEWAS', pass: districtCredentials['DEODEWAS'] },
{ type:'DEO', label:'DEO Dhar', id:'DEODHAR', pass: districtCredentials['DEODHAR'] },
{ type:'DEO', label:'DEO Dindori', id:'DEODINDORI', pass: districtCredentials['DEODINDORI'] },
{ type:'DEO', label:'DEO Guna', id:'DEOGUNA', pass: districtCredentials['DEOGUNA'] },
{ type:'DEO', label:'DEO Gwalior', id:'DEOGWALIOR', pass: districtCredentials['DEOGWALIOR'] },
{ type:'DEO', label:'DEO Harda', id:'DEOHARDA', pass: districtCredentials['DEOHARDA'] },
{ type:'DEO', label:'DEO Indore', id:'DEOINDORE', pass: districtCredentials['DEOINDORE'] },
{ type:'DEO', label:'DEO Jabalpur', id:'DEOJABALPUR', pass: districtCredentials['DEOJABALPUR'] },
{ type:'DEO', label:'DEO Jhabua', id:'DEOJHABUA', pass: districtCredentials['DEOJHABUA'] },
{ type:'DEO', label:'DEO Katni', id:'DEOKATNI', pass: districtCredentials['DEOKATNI'] },
{ type:'DEO', label:'DEO Khandwa', id:'DEOKHANDWA', pass: districtCredentials['DEOKHANDWA'] },
{ type:'DEO', label:'DEO Khargone', id:'DEOKHARGONE', pass: districtCredentials['DEOKHARGONE'] },
{ type:'DEO', label:'DEO Mandla', id:'DEOMANDLA', pass: districtCredentials['DEOMANDLA'] },
{ type:'DEO', label:'DEO Mandsaur', id:'DEOMANDSAUR', pass: districtCredentials['DEOMANDSAUR'] },
{ type:'DEO', label:'DEO Morena', id:'DEOMORENA', pass: districtCredentials['DEOMORENA'] },
{ type:'DEO', label:'DEO Narmadapuram', id:'DEONARMADAPURAM', pass: districtCredentials['DEONARMADAPURAM'] },
{ type:'DEO', label:'DEO Narsinghpur', id:'DEONARSINGHPUR', pass: districtCredentials['DEONARSINGHPUR'] },
{ type:'DEO', label:'DEO Neemuch', id:'DEONEEMUCH', pass: districtCredentials['DEONEEMUCH'] },
{ type:'DEO', label:'DEO Niwari', id:'DEONIWARI', pass: districtCredentials['DEONIWARI'] },
{ type:'DEO', label:'DEO Panna', id:'DEOPANNA', pass: districtCredentials['DEOPANNA'] },
{ type:'DEO', label:'DEO Raisen', id:'DEORAISEN', pass: districtCredentials['DEORAISEN'] },
{ type:'DEO', label:'DEO Rajgarh', id:'DEORAJGARH', pass: districtCredentials['DEORAJGARH'] },
{ type:'DEO', label:'DEO Ratlam', id:'DEORATLAM', pass: districtCredentials['DEORATLAM'] },
{ type:'DEO', label:'DEO Rewa', id:'DEOREWA', pass: districtCredentials['DEOREWA'] },
{ type:'DEO', label:'DEO Sagar', id:'DEOSAGAR', pass: districtCredentials['DEOSAGAR'] },
{ type:'DEO', label:'DEO Satna', id:'DEOSATNA', pass: districtCredentials['DEOSATNA'] },
{ type:'DEO', label:'DEO Sehore', id:'DEOSEHORE', pass: districtCredentials['DEOSEHORE'] },
{ type:'DEO', label:'DEO Seoni', id:'DEOSEONI', pass: districtCredentials['DEOSEONI'] },
{ type:'DEO', label:'DEO Shahdol', id:'DEOSHAHDOL', pass: districtCredentials['DEOSHAHDOL'] },
{ type:'DEO', label:'DEO Shajapur', id:'DEOSHAJAPUR', pass: districtCredentials['DEOSHAJAPUR'] },
{ type:'DEO', label:'DEO Sheopur', id:'DEOSHEOPUR', pass: districtCredentials['DEOSHEOPUR'] },
{ type:'DEO', label:'DEO Shivpuri', id:'DEOSHIVPURI', pass: districtCredentials['DEOSHIVPURI'] },
{ type:'DEO', label:'DEO Sidhi', id:'DEOSIDHI', pass: districtCredentials['DEOSIDHI'] },
{ type:'DEO', label:'DEO Singrauli', id:'DEOSINGRAULI', pass: districtCredentials['DEOSINGRAULI'] },
{ type:'DEO', label:'DEO Tikamgarh', id:'DEOTIKAMGARH', pass: districtCredentials['DEOTIKAMGARH'] },
{ type:'DEO', label:'DEO Ujjain', id:'DEOUJJAIN', pass: districtCredentials['DEOUJJAIN'] },
{ type:'DEO', label:'DEO Umaria', id:'DEOUMARIA', pass: districtCredentials['DEOUMARIA'] },
{ type:'DEO', label:'DEO Vidisha', id:'DEOVIDISHA', pass: districtCredentials['DEOVIDISHA'] },
{ type:'DEO', label:'DEO Pandhurna', id:'DEOPANDHURNA', pass: districtCredentials['DEOPANDHURNA'] },
{ type:'DEO', label:'DEO Maihar', id:'DEOMAIHAR', pass: districtCredentials['DEOMAIHAR'] },
{ type:'DEO', label:'DEO Mauganj', id:'DEOMAUGANJ', pass: districtCredentials['DEOMAUGANJ'] },
];
const filtered = tab === 'all' ? allEntries :
tab === 'dpi' ? allEntries.filter(e => e.type==='DPI') :
tab === 'jd'  ? allEntries.filter(e => e.type==='JD') :
allEntries.filter(e => e.type==='DEO');
renderDistPassRows(filtered);
}
function renderDistPassRows(entries) {
const container = document.getElementById('distPassTableBody');
const typeColors = { DPI:'#c62828', JD:'#1565c0', DEO:'#2e7d32' };
const typeBg    = { DPI:'#ffebee', JD:'#e3f2fd', DEO:'#e8f5e9' };
const typeBorder= { DPI:'#c62828', JD:'#1565c0', DEO:'#2e7d32' };
if(!entries.length){
container.innerHTML = '<div style="grid-column:1/-1;padding:30px;text-align:center;color:#999;font-size:13px;">Koi result nahi mila 🔍</div>';
return;
}
container.innerHTML = entries.map((e, i) => `
<div data-id="${e.id}" data-label="${e.label.toUpperCase()}"
style="background:white;border-radius:10px;border:1.5px solid ${typeBorder[e.type]};
padding:14px 16px;box-shadow:0 2px 8px rgba(0,0,0,.07);transition:.2s;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
<span style="background:${typeBg[e.type]};color:${typeColors[e.type]};padding:2px 9px;
border-radius:4px;font-size:10px;font-weight:800;">${e.type}</span>
<span style="font-size:10px;color:#bbb;font-weight:600;">#${i+1}</span>
</div>
<div style="font-size:13px;font-weight:700;color:#002e5b;margin-bottom:2px;">${e.label}</div>
<div style="font-size:10px;color:#999;margin-bottom:12px;font-family:monospace;">${e.id}</div>
<div style="background:#f0f4ff;border-radius:7px;padding:10px 12px;text-align:center;margin-bottom:10px;">
<div style="font-size:10px;color:#888;font-weight:600;margin-bottom:4px;">PASSWORD</div>
<div id="pw_${e.id}" style="font-family:monospace;font-size:22px;font-weight:900;
color:#002e5b;letter-spacing:6px;">••••</div>
</div>
<div style="display:flex;gap:6px;">
<button onclick="togglePassVis('${e.id}','${e.pass}')"
style="flex:1;padding:7px;border:1.5px solid #ccc;border-radius:6px;cursor:pointer;
background:white;color:#555;font-size:11px;font-weight:700;">
👁 Show/Hide
</button>
<button onclick="copyDistPass('${e.pass}','${e.id}')" id="cpbtn_${e.id}"
style="flex:1;padding:7px;border:none;border-radius:6px;cursor:pointer;
background:#1565c0;color:white;font-size:11px;font-weight:700;">
📋 Copy
</button>
</div>
<div style="margin-top:8px;">
<button onclick="openEditPassword('${e.id}','${e.type}')"
style="width:100%;padding:8px;border:none;border-radius:6px;cursor:pointer;
background:linear-gradient(135deg,${typeColors[e.type]},${e.type==='DPI'?'#b71c1c':e.type==='JD'?'#0d47a1':'#1b5e20'});
color:white;font-size:11px;font-weight:700;">
✏️ Edit ${e.type} Password
</button>
</div>
</div>
`).join('');
}
function togglePassVis(id, pass) {
const el = document.getElementById('pw_' + id);
if(!el) return;
el.textContent = (el.textContent === '••••') ? pass : '••••';
}
function copyDistPass(pass, id) {
navigator.clipboard.writeText(pass).then(() => {
const btn = document.getElementById('cpbtn_' + id);
if(btn){ btn.textContent='✅ Copied!'; btn.style.background='#2e7d32'; setTimeout(()=>{ btn.textContent='📋 Copy'; btn.style.background='#1565c0'; }, 1800); }
}).catch(() => {
const ta = document.createElement('textarea');
ta.value = pass;
document.body.appendChild(ta);
ta.select();
document.execCommand('copy');
document.body.removeChild(ta);
const btn = document.getElementById('cpbtn_' + id);
if(btn){ btn.textContent='✅ Copied!'; btn.style.background='#2e7d32'; setTimeout(()=>{ btn.textContent='📋 Copy'; btn.style.background='#1565c0'; }, 1800); }
});
}
function openDpiEditPassword() {
if (window.currentUser !== 'DPI') {
alert('⛔ This option is only for DPI.');
return;
}
const old = document.getElementById('dpiEditPassModal');
if (old) old.remove();
const modal = document.createElement('div');
modal.id = 'dpiEditPassModal';
modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:1000020;display:flex;align-items:center;justify-content:center;';
modal.innerHTML = `
<div style="background:white;border-radius:12px;width:90%;max-width:380px;box-shadow:0 15px 50px rgba(0,0,0,.5);overflow:hidden;font-family:sans-serif;">
<div style="background:linear-gradient(90deg,#b71c1c,#c62828);color:white;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">
<b style="font-size:15px;">✏️ DPI Password Edit</b>
<button onclick="document.getElementById('dpiEditPassModal').remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;font-weight:bold;">✕</button>
</div>
<div style="padding:24px;">
<p style="font-size:12px;color:#c62828;background:#ffebee;padding:8px 12px;border-radius:6px;margin:0 0 18px 0;font-weight:600;">⚠️ DPI password change karna ek sensitive action hai।</p>
<label style="font-size:11px;font-weight:bold;color:#333;">नया PASSWORD</label>
<input id="dpiNewPass" type="password"
style="width:100%;padding:10px;margin:6px 0 14px 0;border:1.5px solid #ccc;border-radius:5px;font-size:14px;box-sizing:border-box;"
oninput="dpiPwStrengthCheck(this.value)" placeholder="Enter new password">
<label style="font-size:11px;font-weight:bold;color:#333;">PASSWORD CONFIRM करें</label>
<input id="dpiConfirmPass" type="password"
style="width:100%;padding:10px;margin:6px 0 14px 0;border:1.5px solid #ccc;border-radius:5px;font-size:14px;box-sizing:border-box;"
placeholder="Re-enter password">
<div style="background:#eee;border-radius:4px;height:6px;overflow:hidden;margin-bottom:4px;">
<div id="dpiPwBar" style="height:100%;width:0%;border-radius:4px;transition:width 0.3s,background 0.3s;"></div>
</div>
<div id="dpiPwLabel" style="font-size:10px;color:#888;margin-bottom:14px;"></div>
<div id="dpiEditPassErr" style="color:#c62828;font-size:11px;min-height:16px;margin-bottom:10px;font-weight:bold;"></div>
<button onclick="saveDpiNewPassword()"
style="width:100%;padding:12px;background:#b71c1c;color:white;border:none;border-radius:5px;font-weight:bold;cursor:pointer;font-size:13px;">
💾 DPI Password Save करें
</button>
</div>
</div>`;
document.body.appendChild(modal);
modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
setTimeout(() => document.getElementById('dpiNewPass').focus(), 100);
}
function dpiPwStrengthCheck(val) {
const bar = document.getElementById('dpiPwBar');
const label = document.getElementById('dpiPwLabel');
if (!bar || !label) return;
let score = 0;
if (val.length >= 4) score++;
if (val.length >= 6) score++;
if (/[A-Z]/.test(val)) score++;
if (/[0-9]/.test(val)) score++;
if (/[^A-Za-z0-9]/.test(val)) score++;
const levels = [
{w:'0%',bg:'#eee',t:''},{w:'20%',bg:'#e53935',t:'बहुत कमज़ोर'},
{w:'40%',bg:'#f57c00',t:'कमज़ोर'},{w:'60%',bg:'#fbc02d',t:'ठीक है'},
{w:'80%',bg:'#7cb342',t:'अच्छा'},{w:'100%',bg:'#2e7d32',t:'बहुत मज़बूत ✅'}
];
const lvl = levels[score] || levels[0];
bar.style.width = lvl.w; bar.style.background = lvl.bg;
label.innerText = lvl.t; label.style.color = lvl.bg;
}
function saveDpiNewPassword() {
const newPass     = document.getElementById('dpiNewPass').value.trim();
const confirmPass = document.getElementById('dpiConfirmPass').value.trim();
const errDiv      = document.getElementById('dpiEditPassErr');
if (!newPass || newPass.length < 4) { errDiv.innerHTML = '❌ Password must be at least 4 characters.'; return; }
if (newPass !== confirmPass) { errDiv.innerHTML = '❌ Passwords do not match.'; return; }
const CUSTOM_PASS_KEY = 'msErp_customPasswords';
const custom = JSON.parse(localStorage.getItem(CUSTOM_PASS_KEY) || '{}');
const oldPass = custom['DPI'] || districtCredentials['DPI'] || '(default)';
custom['DPI'] = newPass;
localStorage.setItem(CUSTOM_PASS_KEY, JSON.stringify(custom));
districtCredentials['DPI'] = newPass;
if (typeof _savePasswordToCloud === 'function') _savePasswordToCloud('DPI', newPass); // ✅ Cloud sync
if (typeof auditLog === 'function') auditLog('DPI_PASSWORD_CHANGED', 'DPI password changed by DPI admin');
const PW_RESET_LOG_KEY = 'dpi_pw_reset_log';
const resetLog = JSON.parse(localStorage.getItem(PW_RESET_LOG_KEY) || '[]');
resetLog.unshift({ userId:'DPI', dateTime: new Date().toLocaleString('en-IN',{hour12:true}), timestamp: Date.now(), resetBy:'DPI (Self)', oldPass, newPass });
localStorage.setItem(PW_RESET_LOG_KEY, JSON.stringify(resetLog));
errDiv.innerHTML = '<span style="color:#2e7d32;font-weight:bold;">✅ DPI Password changed successfully!</span>';
setTimeout(() => {
document.getElementById('dpiEditPassModal')?.remove();
buildDistPassTable('dpi');
showDistPassTab('dpi');
}, 1500);
}
function openEditPassword(userId, userType) {
if (window.currentUser !== 'DPI' && window.currentUser !== userId) {
alert('⛔ You can only edit your own password.');
return;
}
const typeColors = { DPI:'#b71c1c', JD:'#0d47a1', DEO:'#1b5e20' };
const typeGrad   = { DPI:'linear-gradient(90deg,#b71c1c,#c62828)', JD:'linear-gradient(90deg,#0d47a1,#1565c0)', DEO:'linear-gradient(90deg,#1b5e20,#2e7d32)' };
const color = typeColors[userType] || '#333';
const grad  = typeGrad[userType]  || 'linear-gradient(90deg,#333,#555)';
const old = document.getElementById('uniEditPassModal');
if (old) old.remove();
const modal = document.createElement('div');
modal.id = 'uniEditPassModal';
modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:1000020;display:flex;align-items:center;justify-content:center;';
modal.innerHTML = `
<div style="background:white;border-radius:12px;width:90%;max-width:380px;box-shadow:0 15px 50px rgba(0,0,0,.5);overflow:hidden;font-family:sans-serif;">
<div style="background:${grad};color:white;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;">
<b style="font-size:15px;">✏️ ${userType} Password Edit</b>
<button onclick="document.getElementById('uniEditPassModal').remove()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;font-weight:bold;">✕</button>
</div>
<div style="padding:24px;">
<p style="font-size:12px;color:${color};background:#f9f9f9;border-left:4px solid ${color};padding:8px 12px;border-radius:4px;margin:0 0 10px 0;font-weight:600;">
🔐 User: <span style="font-family:monospace;letter-spacing:1px;">${userId}</span>
</p>
<p style="font-size:12px;color:#888;background:#fff8e1;padding:8px 12px;border-radius:6px;margin:0 0 18px 0;font-weight:600;">⚠️ Password change karna ek sensitive action hai।</p>
<label style="font-size:11px;font-weight:bold;color:#333;">नया PASSWORD</label>
<input id="uniNewPass" type="password"
style="width:100%;padding:10px;margin:6px 0 14px 0;border:1.5px solid #ccc;border-radius:5px;font-size:14px;box-sizing:border-box;"
oninput="uniPwStrengthCheck(this.value)" placeholder="Enter new password">
<label style="font-size:11px;font-weight:bold;color:#333;">PASSWORD CONFIRM करें</label>
<input id="uniConfirmPass" type="password"
style="width:100%;padding:10px;margin:6px 0 14px 0;border:1.5px solid #ccc;border-radius:5px;font-size:14px;box-sizing:border-box;"
placeholder="Re-enter password">
<div style="background:#eee;border-radius:4px;height:6px;overflow:hidden;margin-bottom:4px;">
<div id="uniPwBar" style="height:100%;width:0%;border-radius:4px;transition:width 0.3s,background 0.3s;"></div>
</div>
<div id="uniPwLabel" style="font-size:10px;color:#888;margin-bottom:14px;"></div>
<div id="uniEditPassErr" style="color:#c62828;font-size:11px;min-height:16px;margin-bottom:10px;font-weight:bold;"></div>
<button onclick="saveUniPassword('${userId}','${userType}')"
style="width:100%;padding:12px;background:${color};color:white;border:none;border-radius:5px;font-weight:bold;cursor:pointer;font-size:13px;">
💾 ${userId} Password Save करें
</button>
</div>
</div>`;
document.body.appendChild(modal);
modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
setTimeout(() => document.getElementById('uniNewPass').focus(), 100);
}
function uniPwStrengthCheck(val) {
const bar = document.getElementById('uniPwBar');
const label = document.getElementById('uniPwLabel');
if (!bar || !label) return;
let score = 0;
if (val.length >= 4) score++;
if (val.length >= 6) score++;
if (/[A-Z]/.test(val)) score++;
if (/[0-9]/.test(val)) score++;
if (/[^A-Za-z0-9]/.test(val)) score++;
const levels = [
{w:'0%',bg:'#eee',t:''},{w:'20%',bg:'#e53935',t:'बहुत कमज़ोर'},
{w:'40%',bg:'#f57c00',t:'कमज़ोर'},{w:'60%',bg:'#fbc02d',t:'ठीक है'},
{w:'80%',bg:'#7cb342',t:'अच्छा'},{w:'100%',bg:'#2e7d32',t:'बहुत मज़बूत ✅'}
];
const lvl = levels[score] || levels[0];
bar.style.width = lvl.w; bar.style.background = lvl.bg;
label.innerText = lvl.t; label.style.color = lvl.bg;
}
function saveUniPassword(userId, userType) {
const newPass     = document.getElementById('uniNewPass').value.trim();
const confirmPass = document.getElementById('uniConfirmPass').value.trim();
const errDiv      = document.getElementById('uniEditPassErr');
if (!newPass || newPass.length < 4) { errDiv.innerHTML = '❌ Password must be at least 4 characters.'; return; }
if (newPass !== confirmPass) { errDiv.innerHTML = '❌ Passwords do not match.'; return; }
const CUSTOM_PASS_KEY = 'msErp_customPasswords';
const custom = JSON.parse(localStorage.getItem(CUSTOM_PASS_KEY) || '{}');
const oldPass = custom[userId] || districtCredentials[userId] || '(default)';
custom[userId] = newPass;
localStorage.setItem(CUSTOM_PASS_KEY, JSON.stringify(custom));
districtCredentials[userId] = newPass;
if (typeof _savePasswordToCloud === 'function') _savePasswordToCloud(userId, newPass); // ✅ Cloud sync
if (typeof auditLog === 'function') auditLog(userType + '_PASSWORD_CHANGED', userId + ' password changed by ' + (window.currentUser || 'DPI'));
const PW_RESET_LOG_KEY = 'dpi_pw_reset_log';
const resetLog = JSON.parse(localStorage.getItem(PW_RESET_LOG_KEY) || '[]');
resetLog.unshift({ userId, dateTime: new Date().toLocaleString('en-IN',{hour12:true}), timestamp: Date.now(), resetBy: window.currentUser || 'DPI', oldPass, newPass });
localStorage.setItem(PW_RESET_LOG_KEY, JSON.stringify(resetLog));
errDiv.innerHTML = '<span style="color:#2e7d32;font-weight:bold;">✅ ' + userId + ' Password changed successfully!</span>';
setTimeout(() => {
document.getElementById('uniEditPassModal')?.remove();
const tab = userType === 'DPI' ? 'dpi' : userType === 'JD' ? 'jd' : 'deo';
buildDistPassTable(tab);
showDistPassTab(tab);
}, 1500);
}
function filterDistPassTable(val) {
const q = val.trim().toUpperCase();
const cards = document.querySelectorAll('#distPassTableBody [data-id]');
cards.forEach(card => {
const id = card.dataset.id || '';
const label = card.dataset.label || '';
card.style.display = (!q || id.includes(q) || label.includes(q)) ? '' : 'none';
});
}
document.getElementById('districtPasswordPanel').addEventListener('click', function(e){
if(e.target === this) closeDistrictPasswordPanel();
});
