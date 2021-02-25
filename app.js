const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.navbar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    navBar.classList.add("navbar-open");
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    navBar.classList.remove("navbar-open");
  }
}); 