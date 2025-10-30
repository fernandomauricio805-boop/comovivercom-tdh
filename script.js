// script.js — menu, reveal on scroll, theme settings, back-to-top
document.addEventListener('DOMContentLoaded', () => {
  // mobile menu toggle
  const btn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if(btn && menu){
    btn.addEventListener('click', () => {
      menu.classList.toggle('show');
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // reveal on scroll (IntersectionObserver)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add('show');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // back to top
  const topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 400) topBtn.style.display = 'block';
    else topBtn.style.display = 'none';
  });
  topBtn && topBtn.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

  // apply saved settings (theme + fontsize)
  try {
    const s = JSON.parse(localStorage.getItem('vctdh_settings')||'{}');
    if(s.theme === 'light'){
      document.documentElement.style.setProperty('--bg','#f5f8fb');
      document.documentElement.style.setProperty('--surface','#fff');
      document.documentElement.style.setProperty('--card','#fff');
      document.documentElement.style.setProperty('--text','#0f1724');
    }
    if(s.fontSize) document.documentElement.style.fontSize = s.fontSize + 'px';
  } catch(e){/* ignore */}
});