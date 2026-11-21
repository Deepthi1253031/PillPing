// REGISTER
async function register() {
  const username = document.getElementById('username').value;
  const pin = document.getElementById('pin').value;
  if (!username || !pin) return alert('Username + PIN ivvu');

  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, pin, role: 'patient' })
  });
  const data = await res.json();
  alert(data.message || 'Registered! Ippudu Login cheyyi');
}

// LOGIN
async function login() {
  const username = document.getElementById('username').value;
  const pin = document.getElementById('pin').value;

  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, pin })
  });
  const data = await res.json();

  if (data.success) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', username);
    alert('Login Success!');
    window.location.href = 'dashboard.html';
  } else {
    alert(data.message);
  }
}