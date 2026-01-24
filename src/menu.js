(() => {
  const refs = {
    // Шукаємо ВСІ кнопки відкриття (і моб, і таблет)
    openMenuBtns: document.querySelectorAll('[data-menu-open]'),
    // Шукаємо ВСІ кнопки закриття
    closeMenuBtns: document.querySelectorAll('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  // Вішаємо слухача на кожну кнопку відкриття
  refs.openMenuBtns.forEach(btn => {
    btn.addEventListener('click', toggleMenu);
  });

  // Вішаємо слухача на кожну кнопку закриття
  refs.closeMenuBtns.forEach(btn => {
    btn.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();
