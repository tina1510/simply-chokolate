const leaveBtnEL = document.querySelector('.button-leave');
const closeBtnEl = document.querySelector('.close-btn');
const modalEl = document.querySelector('.backdrop');


const mobMenuBtnEL = document.querySelector('.mob-menu-btn');
const mobMenuCloseBtnEl = document.querySelector('.mob-menu-btn-close');
const mobMenuEl = document.querySelector('.mob-menu');

mobMenuBtnEL.addEventListener('click', () => mobMenuEl.classList.add('is-open'));
mobMenuCloseBtnEl.addEventListener('click', () => mobMenuEl.classList.remove('is-open'))



leaveBtnEL.addEventListener('click', () => modalEl.classList.add('is-open'));
closeBtnEl.addEventListener('click', () => modalEl.classList.remove('is-open'));


