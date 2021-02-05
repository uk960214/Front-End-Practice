// Get elements
let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementById('modalBtn');
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for click
modalBtn.addEventListener('click', openModal);


// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Listen for close click
closeBtn.addEventListener('click', closeModal);


// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Listen for outside click

window.addEventListener('click', clickOutside);

function clickOutside(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}