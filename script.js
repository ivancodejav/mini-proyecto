const menu = document.querySelector('#menu-icono');
const navlist = document.querySelector('.navegacion');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

const sr = ScrollReveal({
  distance: '65px',
  duration: 2000,
  delay: 450,
  reset: true
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 400, origin: 'top' });
sr.reveal('.iconos', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 600, origin: 'right' });
sr.reveal('.sobremi', { delay: 300, origin: 'bottom' });
sr.reveal('.contacto', { delay: 200, origin: 'top' });

