'use strict';

const menuToggler = document.querySelector('.menu-icon__toggler');
const menuMobile = document.querySelector('.menu-mobile');
const menuMobileLink = document.querySelectorAll('.menu-mobile__link');
const engLink = document.querySelector('.top-actions__eng-lang');
const uaLink = document.querySelector('.top-actions__ua-lang');
const body = document.querySelector('.page');

menuToggler.addEventListener('click', () => {
  if (menuToggler.checked) {
    menuMobile.classList.add('page__menu-mobile--target');
    body.classList.add('page--non-overflow');
  } else {
    menuMobile.classList.remove('page__menu-mobile--target');
    body.classList.remove('page--non-overflow');
  }
});

for (const link of menuMobileLink) {
  link.addEventListener('click', () => {
    menuMobile.classList.remove('page__menu-mobile--target');
    body.classList.remove('page--non-overflow');
    menuToggler.checked = false;
  });
}

engLink.addEventListener('click', () => {
  engLink.classList.add('top-actions__link--isactive');
  uaLink.classList.remove('top-actions__link--isactive');
});

uaLink.addEventListener('click', () => {
  uaLink.classList.add('top-actions__link--isactive');
  engLink.classList.remove('top-actions__link--isactive');
});
