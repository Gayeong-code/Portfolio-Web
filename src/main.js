//Applying dark styling to header when scrolling down
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height; 
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Increasing the transparency of the home section content when it scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll',() => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll',() => {
  if (window.scrollY < homeHeight/2){
  arrow.style.opacity = 0; } else {
    arrow.style.opacity = 1 ;
  }
  
});

//Handle click Navbar toggle button

const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
} )

//Menu close automatically when navbar menu clicked
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
} )
