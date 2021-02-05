const card = document.querySelector('.card');
const cardInner = document.querySelector('.card-inner')


const openCard = (e) => {
  cardInner.classList.add('rotate')
}
const closeCard = (e) => {
  cardInner.classList.remove('rotate')
}

card.addEventListener('click', openCard)
card.addEventListener('mouseleave', closeCard)