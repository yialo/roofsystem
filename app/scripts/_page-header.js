'use strict';

const pageHeader = document.querySelector('.page-header');
const navOpener = pageHeader.querySelector('.navigation-button--opener');
const navCloser = pageHeader.querySelector('.navigation-button--closer');

navOpener.addEventListener('click', () => {
  pageHeader.classList.toggle('is-navigation-shown');
  navCloser.focus();
});

navCloser.addEventListener('click', () => {
  pageHeader.classList.toggle('is-navigation-shown');
  navOpener.focus();
});
