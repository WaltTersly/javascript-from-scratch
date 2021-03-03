'use strict';

//selecting elements required and stroting in variables

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// creating a function for closing modal

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

};

// writing function to open  modol

const openModal = function () {
    console.log(`modal  clicked`);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//perfoming action on each modal
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal );
    
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal )

//listening to keyboard events

document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();            
        }
        
    }
});