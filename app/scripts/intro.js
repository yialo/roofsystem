'use strict';

const indexPageMain = document.querySelector('.page-main--index');
const slide1 = indexPageMain.querySelector('.page-main__wrapper--1');
const slide2 = indexPageMain.querySelector('.page-main__wrapper--2');
const toSlide1 = slide1.querySelector('.intro__toggle');
const toSlide2 = slide2.querySelector('.intro__toggle');

const onIntroButtonClick = function introButtonClickHandler() {
  indexPageMain.classList.toggle('is-second-slide-shown');
};

toSlide1.addEventListener('click', () => {
  onIntroButtonClick();
  toSlide2.focus();
});

toSlide2.addEventListener('click', () => {
  onIntroButtonClick();
  toSlide1.focus();
});
