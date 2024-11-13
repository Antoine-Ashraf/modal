'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

/**
 * When selecting more than one element of the same class, use the
   'quertSelectorAll' to select all elements of the same class.
 * Elements are stored in the variable like in an array and can be looped through.
 */
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Adding an event handler for each of the three buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Adding an event handler for closing the modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Global events: Close the modal when the Escape key is pressed
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    console.log(event);
  }
});

/****************************** Helper Functions ******************************/
// Function to open modal
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log(`Button Clicked!`);
}

// Function to close modal
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
