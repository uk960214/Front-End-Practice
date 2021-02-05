const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSilde = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if(current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current')
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSilde = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if(current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length-1].classList.add('current')
  }
  setTimeout(() => current.classList.remove('current'));
}

// Button events
next.addEventListener('click', e => {
  nextSilde();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSilde, intervalTime);
  }
})

prev.addEventListener('click', e => {
  prevSilde();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSilde, intervalTime);
  }
})

// Auto Slide

if(auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSilde, intervalTime);
}

const cards = document.querySelectorAll('.card');

const openCard = (e) => {
  if (e.target.classList.contains('card')) {
    e.target.children[0].classList.add('rotate')
  }
}
const closeCard = (e) => {
  e.target.children[0].classList.remove('rotate')
}

for(let i = 0;i < cards.length; i++){
  cards[i].addEventListener('click', openCard);
  cards[i].addEventListener('mouseleave', closeCard);
}
