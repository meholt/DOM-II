// Your code goes here

// NAVLINK MouseOver
const nav_mouseOver = document.querySelector('.nav a');
nav_mouseOver.addEventListener ('mouseover', (event) => {
    event.target.style.background = 'aquamarine';
})

// Image Click
const logo = document.querySelector('.intro img');
logo.addEventListener ('click', (event) => {
    alert('You have clicked on the fun bus!')
})

// Display Message When Window is Resized
window.addEventListener('resize', () => alert('You have resized the window!'))

// DoubleClick NavBar
// const nav_bar = document.querySelector('logo-heading');
// nav_bar.addEventListener('dblclick', (event) => {
//     event.target.style.color = 'aquamarine';
// })