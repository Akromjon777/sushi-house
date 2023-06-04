window.addEventListener('DOMContentLoaded', () => {
   const navMenu = document.getElementById('nav-menu');
   const navToggle = document.getElementById('nav-toggle');
   const navClose = document.getElementById('nav-close');

   if (navToggle) {
      navToggle.addEventListener('click', () => {
         navMenu.classList.add('show-menu');
      });
   }

   if (navClose) {
      navClose.addEventListener('click', () => {
         navMenu.classList.remove('show-menu');
      });
   }
   const navLink = document.querySelector('.nav__link');
   const linkAction = () => {
      navMenu.classList.remove('show-menu');
   };
   navLink.forEach((e) => e.addEventListener('click', linkAction));

   const scrollHeader = () => {
      const header = document.getElementById('header');

      this.screenY >= 50
         ? header.classList.add('bg-header')
         : header.classList.remove('bg-header');
   };

   window.addEventListener('scroll', scrollHeader);
});
