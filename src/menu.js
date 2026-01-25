(() => {
  const refs = {
    openMenuBtns: document.querySelectorAll('[data-menu-open]'),
    closeMenuBtns: document.querySelectorAll('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    // 1. Знаходимо всі посилання всередині меню
    // Важливо: переконайся, що у твоїх тегів <a> є клас 'menu-nav-link'
    menuLinks: document.querySelectorAll('.menu-nav-link'),
  };

  refs.openMenuBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
  refs.closeMenuBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

  // 2. Додаємо слухача на кожне посилання
  refs.menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();
