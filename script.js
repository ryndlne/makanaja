const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle?.addEventListener('click', () => {
  const opened = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(opened));
});
document.querySelectorAll('.nav-link, .nav-order').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.food-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}
document.querySelectorAll('.add-button').forEach(button => {
  button.addEventListener('click', () => {
    showToast(`${button.dataset.item} dipilih! Hubungkan tombol ini ke WhatsApp atau sistem pemesanan untuk menerima order.`);
  });
});
document.querySelectorAll('.heart').forEach(button => {
  button.addEventListener('click', () => {
    const liked = button.classList.toggle('liked');
    button.textContent = liked ? '♥' : '♡';
    button.setAttribute('aria-label', liked ? 'Hapus dari favorit' : 'Sukai menu');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
