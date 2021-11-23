const beige = document.querySelector('#beige');
const beigeImg = document.querySelector('#beige-img');
const black = document.querySelector('#black');
const blackImg = document.querySelector('#black-img');
const red = document.querySelector('#red');
const redImg = document.querySelector('#red-img');
const priceOne = document.querySelector('#price-1');
const priceTwo = document.querySelector('#price-2');
const priceThree = document.querySelector('#price-3');

const body = document.querySelector('body');

const burger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
})

beige.addEventListener('click', () => {

  // Add
  beige.classList.add('active');
  beigeImg.classList.add('active');
  priceOne.classList.add('active');
  body.style.background = "#E8DCCA";

  // Remove
  black.classList.remove('active');
  blackImg.classList.remove('active');
  red.classList.remove('active');
  redImg.classList.remove('active');
  priceTwo.classList.remove('active');
  priceThree.classList.remove('active');
});

black.addEventListener('click', () => {

  // Add
  black.classList.add('active');
  blackImg.classList.add('active');
  priceTwo.classList.add('active');
  body.style.background = "#272727";

  // Remove
  beige.classList.remove('active');
  beigeImg.classList.remove('active');
  red.classList.remove('active');
  redImg.classList.remove('active');
  priceOne.classList.remove('active');
  priceThree.classList.remove('active');
});

red.addEventListener('click', () => {

  // Add
  red.classList.add('active');
  redImg.classList.add('active');
  priceThree.classList.add('active');
  body.style.background = "#e93f30";

  // Remove
  beige.classList.remove('active');
  beigeImg.classList.remove('active');
  black.classList.remove('active');
  blackImg.classList.remove('active');
  priceOne.classList.remove('active');
  priceTwo.classList.remove('active');
})