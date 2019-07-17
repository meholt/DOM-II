// Your code goes here

// NAVLINK MouseOver
let nav_mouseOver = document.querySelector('.nav a');
nav_mouseOver.addEventListener ('mouseover', (event) => {
event.target.style.background = 'aquamarine';
})

document.querySelector('.nav a').addEventListener("click", function(event){
    event.preventDefault()
  }); 

// Blur Nav
let nav_blur = document.querySelector('.nav a');

nav_blur.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
}, true);

nav_blur.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);

document.querySelector('.nav a').addEventListener("click", function(event){
    event.preventDefault()
  }); 

// Image Click
const logo = document.querySelector('.intro img');
logo.addEventListener ('click', (event) => {
alert('You have clicked on the fun bus!');
})

// DoubleClick Footer
let dblclk_img = document.querySelector('.footer');
dblclk_img.addEventListener('dblclick', (event) => {
alert('You have double clicked the footer!')
})

// Display Message When Window is Resized
window.addEventListener('resize', () => alert('You have resized the window!'))

