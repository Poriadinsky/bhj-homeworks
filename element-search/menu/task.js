
const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((link) => {
   link.addEventListener('click', (event) => {
      event.preventDefault();
      const subMenu = link.closest('.menu__item').querySelector('.menu_sub');

      if (subMenu) {
         subMenu.classList.toggle('menu_active');
      } else {
         window.location.href = link.href;
      }
   });
});
