'use strict';

const KEYCODE_ESC = 27;

const pageHeader = document.querySelector('.page-header');
const navOpener = pageHeader.querySelector('.navigation-button--opener');
const navCloser = pageHeader.querySelector('.navigation-button--closer');

const toggleNav = function toggleNavigation() {
  pageHeader.classList.toggle('is-navigation-shown');
};

navOpener.addEventListener('click', () => {
  toggleNav();
  navCloser.focus();
});

navCloser.addEventListener('click', () => {
  toggleNav();
  navOpener.focus();
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === KEYCODE_ESC && pageHeader.classList.contains('is-navigation-shown')) {
    evt.preventDefault();
    toggleNav();
  }
});
