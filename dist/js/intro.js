"use strict";const indexPageMain=document.querySelector(".page-main--index"),slide1=indexPageMain.querySelector(".page-main__wrapper--1"),slide2=indexPageMain.querySelector(".page-main__wrapper--2"),toSlide1=slide1.querySelector(".intro__toggle"),toSlide2=slide2.querySelector(".intro__toggle"),onIntroButtonClick=function(){indexPageMain.classList.toggle("is-second-slide-shown")};toSlide1.addEventListener("click",()=>{onIntroButtonClick(),toSlide2.focus()}),toSlide2.addEventListener("click",()=>{onIntroButtonClick(),toSlide1.focus()});