document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const body = document.querySelector('body');
  const navMenu = document.querySelector('#navmenu ul');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      body.classList.toggle('mobile-nav-active');
      navMenu.classList.toggle('dropdown-active');

      // Cambiar ícono hamburguesa ↔ cerrar
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }
});
