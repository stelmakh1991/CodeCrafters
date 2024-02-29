// document.addEventListener('DOMContentLoaded', function () {
//   const logoLink = document.querySelector('.header-logo span');
//   const homeLink = document.querySelector('.home-link span');
//   const shoppingListLink = document.querySelector('.shopping-list a');
//   const themeSwitch = document.querySelector('.toggle-switch input');
//   const burgerButton = document.querySelector('.burger-button');
//   const dropdownMenu = document.querySelector('.dropdown-menu');

//   //клік по логотипу або хоум
//   logoLink.addEventListener('click', function () {
//     navigateToHomePage();
//   });

//   homeLink.addEventListener('click', function () {
//     navigateToHomePage();
//   });

//   //клік по шоппінг ліст
//   shoppingListLink.addEventListener('click', function (event) {
//     event.preventDefault(); //зупинка переходу за посиланням
//     navigateToShoppingListPage();
//   });

//   //клік по перемикачу теми
//   themeSwitch.addEventListener('change', function () {
//     toggleTheme();
//   });

//   //клік по бургер-меню
//   burgerButton.addEventListener('click', function () {
//     toggleBurger();
//   });

//   //обробка подій
//   function navigateToHomePage() {
//   //перехід на головну сторінку
//     console.log('Navigating to Home Page');
//   }

//   function navigateToShoppingListPage() {
//   //перехід на сторінку з переліком книг
//     console.log('Navigating to Shopping List Page');
//   }

//   function toggleTheme() {
//   //зміна теми сайту (dark/light)
//     console.log('Toggling Theme');
//   }

//   function toggleBurger() {
//   //розгортання/згортання бургер-меню
//     burgerButton.classList.toggle('active');
//     dropdownMenu.classList.toggle('active');
//   }
// });
const switcher = document.querySelector('.dark');
const body = document.querySelector('body');
const header = document.querySelector('header');



switcher.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    header.classList.toggle('dark-header');
})