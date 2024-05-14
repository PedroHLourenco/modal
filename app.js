const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
    modal.classList.add('open-modal');
});

modalClose.addEventListener('click', function() {
    modal.classList.remove('open-modal');
});