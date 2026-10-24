const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#copy-ip')?.addEventListener('click', async () => {
  const ip = document.querySelector('#server-ip')?.textContent?.trim() || '';
  const button = document.querySelector('#copy-ip');
  if (!ip || ip === 'TUTAJ_WPISZ_IP') {
    button.textContent = 'WPISZ IP';
    setTimeout(() => button.textContent = 'KOPIUJ', 1600);
    return;
  }
  try {
    await navigator.clipboard.writeText(ip);
    button.textContent = 'SKOPIOWANO!';
  } catch {
    button.textContent = 'ZAZNACZ IP';
  }
  setTimeout(() => button.textContent = 'KOPIUJ', 1600);
});
