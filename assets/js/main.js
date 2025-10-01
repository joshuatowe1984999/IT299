
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

const form = document.getElementById('bookingForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.email || !data.service) {
      setStatus('Please fill out Name, Email, and Service.', true);
      return;
    }
    setTimeout(() => {
      setStatus('Thanks! Your request has been received. We will reach out soon.');
      form.reset();
    }, 400);
  });
}

function setStatus(msg, isError=false) {
  const p = document.getElementById('formStatus');
  p.textContent = msg;
  p.style.color = isError ? '#fca5a5' : '#bbf7d0';
}
