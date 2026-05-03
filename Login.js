// Login.js — Signup page (saves to MongoDB via API)

const API = window.location.origin + '/api/auth';

let selectedDiet = "";

const fieldRules = [
  { id: "name",     errId: "err-name",     validate: v => v.trim() ? null : "Full Name is required." },
  { id: "age",      errId: "err-age",      validate: v => { if (!v.trim()) return "Age is required."; const n = parseInt(v); if (isNaN(n)||n<1||n>120) return "Enter a valid age between 1 and 120."; return null; } },
  { id: "location", errId: "err-location", validate: v => v ? null : "Please select your city." },
  { id: "gender",   errId: "err-gender",   validate: v => v ? null : "Please select your gender." },
  { id: "phone",    errId: "err-phone",    validate: v => { if (!v.trim()) return "Phone number is required."; if (!/^\d{10}$/.test(v.trim())) return "Enter a valid 10-digit phone number."; return null; } },
  { id: "email",    errId: "err-email",    validate: v => { if (!v.trim()) return "Email address is required."; if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return "Enter a valid email address."; return null; } },
  { id: "password", errId: "err-password", validate: v => { if (!v.trim()) return "Password is required."; if (v.trim().length < 8) return "Password must be at least 8 characters."; return null; } }
];

function selectDiet(el) {
  document.querySelectorAll(".diet-chip").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  selectedDiet = el.dataset.val;
  document.getElementById("err-diet").textContent = "";
  const body = document.getElementById("bodyTheme");
  body.className = "";
  const map = { nonveg: "theme-nonveg", egg: "theme-egg", jain: "theme-jain" };
  if (map[selectedDiet]) body.classList.add(map[selectedDiet]);
  document.getElementById("s2").classList.add("active");
}

function togglePW() {
  const pw = document.getElementById("password");
  const ic = document.getElementById("pwIcon");
  pw.type = pw.type === "password" ? "text" : "password";
  ic.textContent = pw.type === "password" ? "👁️" : "🙈";
}

fieldRules.forEach(rule => {
  const el = document.getElementById(rule.id);
  if (!el) return;
  el.addEventListener("input", () => {
    el.classList.remove("error-field");
    document.getElementById(rule.errId).textContent = "";
    document.getElementById("s1").classList.add("active");
  });
  el.addEventListener("change", () => {
    el.classList.remove("error-field");
    document.getElementById(rule.errId).textContent = "";
  });
});

async function handleSubmit() {
  fieldRules.forEach(rule => {
    document.getElementById(rule.id).classList.remove("error-field");
    document.getElementById(rule.errId).textContent = "";
  });
  document.getElementById("err-diet").textContent = "";

  let hasError = false, firstErrorEl = null;

  fieldRules.forEach(rule => {
    const el  = document.getElementById(rule.id);
    const err = document.getElementById(rule.errId);
    const msg = rule.validate(el.value);
    if (msg) {
      el.classList.add("error-field");
      err.textContent = msg;
      if (!firstErrorEl) firstErrorEl = el;
      hasError = true;
    }
  });

  if (!selectedDiet) {
    document.getElementById("err-diet").textContent = "Please select a diet preference.";
    hasError = true;
  }

  if (hasError) {
    if (firstErrorEl) firstErrorEl.focus();
    showToast("Please fill in all fields correctly.", "error-t");
    return;
  }

  const nameVal     = document.getElementById("name").value.trim();
  const emailVal    = document.getElementById("email").value.trim().toLowerCase();
  const pwVal       = document.getElementById("password").value;
  const ageVal      = parseInt(document.getElementById("age").value.trim()) || 0;
  const phoneVal    = document.getElementById("phone").value.trim();
  const genderVal   = document.getElementById("gender").value;
  const locationVal = document.getElementById("location").value;

  document.querySelectorAll(".step-dot").forEach(d => d.classList.add("active"));
  const btn = document.getElementById("submitBtn");
  btn.classList.add("loading");
  btn.innerHTML = "⏳ Creating your account…";

  try {
    const res = await fetch(API + '/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: nameVal, email: emailVal, password: pwVal, age: ageVal, phone: phoneVal, gender: genderVal, location: locationVal, diet: selectedDiet })
    });

    const data = await res.json();

    if (!res.ok) {
      if (data.message && data.message.toLowerCase().includes('email')) {
        document.getElementById("email").classList.add("error-field");
        document.getElementById("err-email").textContent = data.message;
      }
      showToast(data.message || "Registration failed.", "error-t");
      btn.classList.remove("loading");
      btn.innerHTML = "Create Account";
      return;
    }

    // Save session
    localStorage.setItem("authToken",        data.token);
    localStorage.setItem("userName",         data.user.name);
    localStorage.setItem("userEmail",        data.user.email);
    localStorage.setItem("userDiet",         data.user.diet     || selectedDiet);
    localStorage.setItem("userAge",          data.user.age      || ageVal);
    localStorage.setItem("userPhone",        data.user.phone    || phoneVal);
    localStorage.setItem("userGender",       data.user.gender   || genderVal);
    localStorage.setItem("userLoc",          data.user.location || locationVal);
    localStorage.setItem("currentUserEmail", data.user.email);

    btn.innerHTML = "⏳ Setting up your kitchen…";
    showToast("Welcome, " + nameVal + "! 🎉 Opening dashboard…", "success");
    setTimeout(() => { window.location.href = "Dash.html"; }, 1400);

  } catch (err) {
    showToast("Cannot reach server. Is it running?", "error-t");
    btn.classList.remove("loading");
    btn.innerHTML = "Create Account";
  }
}

function showToast(msg, type = "") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast " + type + " show";
  clearTimeout(t._tid);
  t._tid = setTimeout(() => { t.className = "toast"; }, 3500);
}
