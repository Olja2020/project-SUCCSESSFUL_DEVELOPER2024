
const mobileMenu = document.querySelector('.modal');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.modal-search-button');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
