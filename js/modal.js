const animalsData = [
    {
        name: "Katrine",
        id: 1,
        model: "Cat - British Short-hair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur.Will love you until the last breath she takes as long as you are the one.She is picky about her affection.She loves cuddles and to stretch into your hands for a deeper relaxations.",
        params: {
            age: "2 months",
            inoculations: "none",
            diseases: "none",
            parasites: "none",
        },
        image: {
            src: "images/pets-katrine.png",
            alt: "pets-katrine"
        }
    },
    {
        name: "Jennifer",
        id: 2,
        model: "Dog - Labrador",
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys",
        params: {
            age: "2 months",
            inoculations: "none",
            diseases: "none",
            parasites: "none",
        },
        image: {
            src: "images/pets-jennifer.png",
            alt: "pets-jennifer"
        }
    },
    {
        name: "Woody",
        id: 3,
        model: "Dog - Golden Retriever",
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        params: {
            age: "3 and 1/2 year",
            inoculations: "none",
            diseases: "none",
            parasites: "none",
        },
        image: {
            src: "images/pets-woody.png",
            alt: "pets-woody"
        }
    },
]

const modal = document.querySelector('#modal');
const modalName = document.querySelector('#modal-name');
const modalModel = document.querySelector('#modal-model');
const modalDescription = document.querySelector('#modal-description');
const modalAge = document.querySelector('#modal-age');
const modalInoculations = document.querySelector('#modal-inoculations');
const modalDiseases = document.querySelector('#modal-diseases');
const modalParasites = document.querySelector('#modal-parasites');
const modalImage = document.querySelector("#modal-image");

const buttonClose = document.querySelector('#modal-close');
const pets = document.querySelector('#pets .slider');
content_1 = document.querySelector('.content-1');
content_2 = document.querySelector('.content-2');
content_3 = document.querySelector('.content-3');

const openModal = () => {
    modal.classList.add('open');
}

const closeModal = () => {
    modal.classList.remove('open');
}

const setData = (event) => {
    const targetId = event.target.dataset.id;
    const currentData = animalsData.find((item) => {
        return item.id === +targetId
    })

    modalName.textContent = currentData.name;
    modalModel.textContent = currentData.model;
    modalDescription.textContent = currentData.description;
    modalAge.textContent = currentData.params.age;
    modalInoculations.textContent = currentData.params.inoculations;
    modalDiseases.textContent = currentData.params.diseases;
    modalParasites.textContent = currentData.params.parasites;
    modalImage.alt = currentData.image.alt;
    modalImage.src = currentData.image.src;
}

pets.addEventListener('click', (event) => {
    setData(event);
    openModal();
})

buttonClose.addEventListener('click', () => {
    closeModal();
});

document.addEventListener("keydown", () => {
    closeModal();
});