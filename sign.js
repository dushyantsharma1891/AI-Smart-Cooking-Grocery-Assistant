// sign.js — Login page (verifies against MongoDB via API)

const API = window.location.origin + '/api/auth';
const norm = e => (e || '').trim().toLowerCase();

function markStep1() { document.getElementById('s1').classList.add('active'); }

let selectedDiet = '';
function selDiet(el) {
  document.querySelectorAll('.diet-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedDiet = el.dataset.val;
  document.getElementById('eGD').textContent = '';
  const body = document.getElementById('bodyTheme');
  body.className = '';
  const map = { nonveg: 'theme-nonveg', egg: 'theme-egg', jain: 'theme-jain' };
  if (map[selectedDiet]) body.classList.add(map[selectedDiet]);
  document.getElementById('s2').classList.add('active');
}

function sw(t) {
  document.getElementById('pLogin').style.display = t === 'login' ? 'block' : 'none';
  document.getElementById('pGuest').style.display = t === 'guest' ? 'block' : 'none';
  document.getElementById('tA').className = 'tab' + (t === 'login' ? ' on' : '');
  document.getElementById('tB').className = 'tab' + (t === 'guest' ? ' on' : '');
  document.getElementById('demoStrip').style.display = t === 'login' ? 'block' : 'none';
  const h = {
    login: ['Welcome back', 'Sign in to continue to your kitchen dashboard.'],
    guest: ['Quick Access', 'Jump in without creating an account.'],
  };
  document.getElementById('rTitle').textContent = h[t][0];
  document.getElementById('rSub').textContent = h[t][1];
  ['s1','s2','s3'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById('s1').classList.add('active');
}

function ce(fid, eid) {
  const el = document.getElementById(fid);
  if (el) { el.style.borderColor = ''; el.classList.remove('error-field'); }
  const er = document.getElementById(eid); if (er) er.textContent = '';
}
function setErr(fid, eid, msg) {
  const el = document.getElementById(fid);
  if (el) el.classList.add('error-field');
  const er = document.getElementById(eid); if (er) er.textContent = msg;
}

function te() {
  const pw = document.getElementById('lP'), btn = document.getElementById('eyeB');
  pw.type = pw.type === 'password' ? 'text' : 'password';
  btn.textContent = pw.type === 'password' ? '👁️' : '🙈';
}

// ── LOGIN via MongoDB API ──
async function dl() {
  const email = document.getElementById('lE').value.trim();
  const pw    = document.getElementById('lP').value;
  let ok = true;

  document.getElementById('lE').classList.remove('error-field');
  document.getElementById('lP').classList.remove('error-field');
  document.getElementById('eE').textContent = '';
  document.getElementById('eP').textContent = '';

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr('lE','eE','Enter a valid email address.'); ok = false; }
  if (!pw || pw.length < 8) { setErr('lP','eP','Password must be at least 8 characters.'); ok = false; }
  if (!ok) { showToast('Please fill in all fields correctly.','error-t'); return; }

  if (document.getElementById('rem').checked) localStorage.setItem('rememberEmail', email);

  const btn = document.getElementById('loginBtn');
  btn.classList.add('loading');
  btn.innerHTML = '⏳ Signing in…';

  try {
    const res = await fetch(API + '/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: norm(email), password: pw })
    });

    const data = await res.json();

    if (!res.ok) {
      const msg = data.message || 'Login failed.';
      if (msg.toLowerCase().includes('email') || msg.toLowerCase().includes('account') || msg.toLowerCase().includes('found')) {
        setErr('lE','eE', msg);
      } else {
        setErr('lP','eP', msg);
      }
      showToast(msg, 'error-t');
      btn.classList.remove('loading');
      btn.innerHTML = '🔑 Sign In';
      return;
    }

    // ✅ Save session to localStorage
    localStorage.setItem('authToken',        data.token);
    localStorage.setItem('userName',         data.user.name);
    localStorage.setItem('userEmail',        data.user.email);
    localStorage.setItem('userDiet',         data.user.diet     || 'veg');
    localStorage.setItem('userAge',          data.user.age      || '');
    localStorage.setItem('userPhone',        data.user.phone    || '');
    localStorage.setItem('userGender',       data.user.gender   || '');
    localStorage.setItem('userLoc',          data.user.location || '');
    localStorage.setItem('currentUserEmail', data.user.email);

    document.querySelectorAll('.step-dot').forEach(d => d.classList.add('active'));
    btn.innerHTML = '⏳ Opening dashboard…';
    showToast('Welcome back, ' + data.user.name.split(' ')[0] + '! 🎉', 'success');
    setTimeout(() => window.location.href = 'Dash.html', 1300);

  } catch (err) {
    showToast('Cannot reach server. Is it running?', 'error-t');
    btn.classList.remove('loading');
    btn.innerHTML = '🔑 Sign In';
  }
}

// ── GUEST (no API needed) ──
function dg() {
  const n = document.getElementById('gN').value.trim();
  const c = document.getElementById('gC').value;
  const s = document.getElementById('gS').value;
  document.getElementById('gN').classList.remove('error-field');
  document.getElementById('eGN').textContent = '';
  document.getElementById('eGD').textContent = '';
  let ok = true;
  if (!n) { setErr('gN','eGN','Please enter your name.'); showToast('Enter your name to continue.','error-t'); ok = false; }
  if (!selectedDiet) { document.getElementById('eGD').textContent = 'Select a diet preference.'; if (ok) showToast('Pick a diet to continue.','error-t'); ok = false; }
  if (!ok) return;
  localStorage.setItem('userName', n);
  localStorage.setItem('userDiet', selectedDiet);
  localStorage.setItem('userEmail', '');
  localStorage.removeItem('authToken');
  if (c) localStorage.setItem('userLoc', c);
  if (s) localStorage.setItem('userSkill', s);
  localStorage.removeItem('currentUserEmail');
  document.querySelectorAll('.step-dot').forEach(d => d.classList.add('active'));
  const btn = document.getElementById('guestBtn');
  btn.classList.add('loading'); btn.innerHTML = '⏳ Opening guest kitchen…';
  showToast('Hi ' + n + '! Opening guest kitchen… 🍽️', 'success');
  setTimeout(() => window.location.href = 'Dash.html', 1400);
}

function fp() {
  showToast('Please sign up again or contact support to reset your password.', '');
}

function sl(p) { showToast('Connecting with ' + p + '… (demo)', ''); }

function goSignup() {
  showToast('Taking you to sign up…', '');
  setTimeout(() => window.location.href = 'Login.html', 700);
}

function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.className = 'toast ' + (type ? type + ' ' : '') + 'show';
  clearTimeout(t._t); t._t = setTimeout(() => { t.className = 'toast'; }, 3500);
}

// Demo buttons — just pre-fill the form
function renderDemo() {
  const row = document.getElementById('demoRow'); if (!row) return;
  const demos = [
    { name: 'Arjun Sharma', email: 'arjun@demo.com', password: 'Arjun@123' },
    { name: 'Sara Khan',    email: 'sara@demo.com',  password: 'Sara@1234' },
    { name: 'Rohan Jain',  email: 'rohan@demo.com', password: 'Rohan@123' },
  ];
  demos.forEach(a => {
    const btn = document.createElement('button');
    btn.className = 'demo-btn'; btn.type = 'button';
    btn.textContent = a.name.split(' ')[0] + ' · ' + norm(a.email);
    btn.onclick = () => {
      sw('login');
      document.getElementById('lE').value = norm(a.email);
      document.getElementById('lP').value = a.password || '';
      showToast('Demo filled — click Sign In.', '');
    };
    row.appendChild(btn);
  });
}

renderDemo();
const rem = localStorage.getItem('rememberEmail');
if (rem) document.getElementById('lE').value = rem;
