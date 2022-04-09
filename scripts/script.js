let openButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__form');
let formElement = document.querySelector('.popup__submit');
let nameInput = document.querySelector('[name="name"]');
let jobInput = document.querySelector('[name="job"]');
let profileTitle = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__description');

// poupup на добавление карточки

let popupAdd = document.querySelector('#add-popup');
let openAddButton = document.querySelector('.profile__add-button');
let closeAddButton = document.querySelector('#close-button');
let placeInput = document.querySelector('[name="place"]');
let linkInput = document.querySelector('[name="link"]');
let addForm = document.querySelector('[name="add-form"]');

// poupup на увелечение размера картинки

let zoomPopup = document.querySelector('#zoom-image');
let popupImg = document.querySelector('.popup__image');
let popupFig = document.querySelector('.popup__figcaption');
let closeFig = document.querySelector('#close-figabutton')


// вывод списка

const elementsList = document.querySelector('.elements__list')
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function toggleLike(event) {
  event.target.classList.toggle('elements__like_active');
}

function zoomImg(cardName, cardLink) {
  zoomPopup.classList.add('popup_zoomed');
  popupImg.src = cardLink;
  popupFig.textContent = cardName;
}

const createCard = (cardName, cardLink) => {
  const li = document.createElement('li');
  
  li.classList.add('elements__item');
  const elementImg = document.createElement('img');
  elementImg.classList.add('elements__image');
  elementImg.src = cardLink;
  const cartDelete = document.createElement('button')
  cartDelete.classList.add('elements__delete')
  const titleText = document.createElement('div');
  titleText.classList.add('elements__title-text');
  const elementsTitle = document.createElement('h2');
  elementsTitle.classList.add('elements__title');
  elementsTitle.textContent = cardName;
  titleText.append(elementsTitle);
  const elementsLike = document.createElement('button');
  elementsLike.classList.add('elements__like');
  titleText.append(elementsLike);
  
  li.append(elementImg, cartDelete, titleText);
  elementsLike.addEventListener('click', toggleLike);
  cartDelete.addEventListener('click', (event) => {
    li.remove()
  })

  elementImg.addEventListener('click', () => {
    zoomImg(cardName, cardLink);
  });

 
  return li;

}


const cards = initialCards.map(function (card) {
  return createCard(card.name, card.link);
});

elementsList.append(...cards)

// Открытие и закрытие popup ов 

function popupOpened() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupAddOpened() {
  popupAdd.classList.add('popup_opened');
}

function popupAddClose() {
  popupAdd.classList.remove('popup_opened');
}

function popupFigClose() {
  zoomPopup.classList.remove('popup_zoomed');
}

// форма edit button 

openButton.addEventListener('click', popupOpened);
closeButton.addEventListener('click', popupClose);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupClose();
}

form.addEventListener('submit', formSubmitHandler);

// форма add button 

openAddButton.addEventListener('click', popupAddOpened);
closeAddButton.addEventListener('click', popupAddClose);


function formSubmitNewCard(evt) {
  evt.preventDefault();
  let cardName = placeInput.value;
  let cardLink = linkInput.value;
  elementsList.prepend(createCard(cardName, cardLink));
  placeInput.value = '';
  linkInput.value = '';
  popupAddClose();
}

addForm.addEventListener('submit', formSubmitNewCard);

// Fig popup 

closeFig.addEventListener('click', popupFigClose);