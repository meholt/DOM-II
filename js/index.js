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

// Focus Map Image
const middle_title = document.querySelector('.content-section .text-content h2');
middle_title.addEventListener('focus', (event) => {
    event.target.style.background = 'aquamarine';
})