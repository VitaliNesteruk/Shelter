const modal = document.querySelector('#modal');
const buttonClose = document.querySelector('#modal-close');
const btn001 = document.querySelector('#btn-001');
content_1 = document.querySelector('.content-1');
const btn002 = document.querySelector('#btn-002');
content_2 = document.querySelector('.content-2');
const btn003 = document.querySelector('#btn-003');
content_3 = document.querySelector('.content-3');

btn001.addEventListener('click', () => {
    content_1.classList.add('active');
    openModal(); 
});
btn002.addEventListener('click', () => {
    content_2.classList.add('active');
    openModal();   
});
btn003.addEventListener('click', () => {
    content_3.classList.add('active');
    openModal();
});

const openModal = () => {
    modal.classList.add('open');
}

buttonClose.addEventListener('click', () => {
    closeModal();
    content_1.classList.remove('active');
    content_2.classList.remove('active');
    content_3.classList.remove('active');
});

const closeModal = () => {
    modal.classList.remove('open');
}

document.addEventListener("keydown", function(e) {
    closeModal();
});