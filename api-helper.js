// ═══════════════════════════════════════════════════
//  MS GRADATION ERP — API Helper
//  Ye file app.js ke TOP mein add karo
//  Direct Supabase calls ki jagah ye use hoga
// ═══════════════════════════════════════════════════

const API_URL = "https://dgzdessdyrxhsbjxeahi.supabase.co/functions/v1/ums-api";

// ── Token storage ──
function _getToken()       { return sessionStorage.getItem("ums_token"); }
function _setToken(t)      { sessionStorage.setItem("ums_token", t); }
function _clearToken()     { sessionStorage.removeItem("ums_token"); }

// ── Core API caller ──
async function apiCall(action, body = {}) {
  const token = _getToken();
  const headers = {
    "Content-Type": "application/json",
    "x-action": action,
  };
  if (token) headers["Authorization"] = "Bearer " + token;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "API Error");
    return json;
  } catch (e) {
    console.error(`API [${action}] failed:`, e.message);
    throw e;
  }
}

// ═══════════════════════════════════════════════════
//  PUBLIC API FUNCTIONS — Inhe app.js mein use karo
// ═══════════════════════════════════════════════════

// ── Login ──
async function apiLogin(userId, password) {
  const res = await apiCall("login", { userId, password });
  _setToken(res.token);
  window.currentUser     = res.userId;
  window.currentLevel    = res.level;
  window.currentLocation = res.location;
  return res;
}

// ── Logout ──
function apiLogout() {
  _clearToken();
  window.currentUser = null;
  window.currentLevel = null;
}

// ── Data fetch ──
async function apiGetData() {
  return await apiCall("getData");
}

// ── Record save ──
async function apiSaveRecord(record) {
  return await apiCall("saveRecord", { record });
}

// ── Record delete ──
async function apiDeleteRecord(id) {
  return await apiCall("deleteRecord", { id });
}

// ── Password change ──
async function apiChangePassword(targetUserId, newPassword) {
  return await apiCall("changePassword", { targetUserId, newPassword });
}

// ── Users list (DPI only) ──
async function apiGetUsers() {
  return await apiCall("getUsers");
}

// ── Settings ──
async function apiGetSettings() {
  return await apiCall("getSettings");
}
async function apiSaveSettings(key, value) {
  return await apiCall("saveSettings", { key, value });
}

// ── Token verify (page load pe check karo) ──
async function apiVerifySession() {
  if (!_getToken()) return null;
  try {
    return await apiCall("verifyToken");
  } catch {
    _clearToken();
    return null;
  }
}

// ═══════════════════════════════════════════════════
//  app.js mein YE LINES HATAO (insecure):
//
//  const SUPABASE_URL = "https://...";
//  const SUPABASE_KEY = "eyJ...";
//  const supabaseClient = supabase.createClient(...);
//  const districtCredentials = { ... };
//
//  AUR IN FUNCTIONS KO REPLACE KARO:
//
//  doLogin()       → apiLogin(userId, password)
//  loadData()      → apiGetData()
//  saveRecord()    → apiSaveRecord(record)
//  deleteRow()     → apiDeleteRecord(id)
//  changePassword()→ apiChangePassword(uid, pass)
// ═══════════════════════════════════════════════════
