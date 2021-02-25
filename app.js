const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.navbar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    navBar.classList.add("navbar-open");
    navBar.classList.remove("navbar-closed");
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    navBar.classList.remove("navbar-open");
    navBar.classList.add("navbar-closed");
  }
});