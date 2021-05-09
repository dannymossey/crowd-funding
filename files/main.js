const navigation = document.getElementById('navigation');
const mobileNavigation = document.querySelector('.burger--section');
let burgerImg = document.getElementById('burger');
let xButton = '../images/icon-close-menu.svg';


burgerImg.addEventListener('click', () =>{
  mobileNavigation.classList.toggle('show');

});

