import Card from './Card.js';
import FormValidator from './FormValidator.js';

const buttonEditOpen = document.querySelector('.profile__edit-button');
const buttonEdtitClose = document.querySelector('.popup__close-button');
const popupProfile = document.querySelector('.popup_content_profile-edit');
const formEditProfile = document.querySelector('.popup__form');
const formElement = document.querySelector('.popup__submit');
const nameInput = document.querySelector('.popup__text_name');
const jobInput = document.querySelector('.popup__text_job');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileSubmitButton = document.querySelector('.popup__submit_profile');
const placeSubmitButton = document.querySelector('.popup__submit_place');

// popup добавление карточки

const popupAdd = document.querySelector('.popup_content_place-add');
const buttonAddOpen = document.querySelector('.profile__add-button');
const buttonAddClose = document.querySelector('.popup__close-button_place');
const placeInput = document.querySelector('.popup__text_place');
const linkInput = document.querySelector('.popup__text_link');
const formAdd = document.querySelector('.popup__add-form');

// popup увелечение размера картинки

const popupZoom = document.querySelector('.popup_content_image');
const popupImg = document.querySelector('.popup__image');
const popupFig = document.querySelector('.popup__figcaption');
const buttonFigCLose = document.querySelector('.popup__close-button_figure')

// настройки валидации
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit',
  submitButtonInactiveClass: 'popup__submit_invalid',
  inputErrorSpanSelector: '.popup__error',
  inputErrorClass: 'popup__text_error'
};

// шаблон карточки
const template = document.querySelector('#elements__item-template').content.querySelector('.elements__item');

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


const templateSelector = '#elements__item-template';

// вывод списка

const cardsContainer = document.querySelector('.elements__list')

// Работа с формой

function toggleLike(event) {
  event.target.classList.toggle('elements__like_active');
}

function zoomImg(event) {
  popupImg.src = event.target.src;
  popupImg.alt = event.target.alt;
  popupFig.textContent = event.target.alt;;
  openPopup(popupZoom);
}

const createCard = (cardName, cardLink) => {
  return new Card(cardName, cardLink, templateSelector, zoomImg).getCard();
}


const cards = initialCards.map(function (card) {
  return createCard(card.name, card.link);
});

cardsContainer.append(...cards)

// Открытие и закрытие popup'ов 

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  popup.addEventListener('mousedown', closeByOverlayClick);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  popup.removeEventListener('mousedown', closeByOverlayClick);
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closeByOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

// форма edit button 

buttonEditOpen.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  editProfileValidator.resetFormValidation(formEditProfile);
  editProfileValidator.enableSubmitButton();
  openPopup(popupProfile);
});


buttonEdtitClose.addEventListener('click', () => {
  closePopup(popupProfile);
});


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupProfile);
}

formEditProfile.addEventListener('submit', formSubmitHandler);

// форма add button 

buttonAddOpen.addEventListener('click', () => {
  openPopup(popupAdd);
});

buttonAddClose.addEventListener('click', () => {
  closePopup(popupAdd);
});


function formSubmitNewCard(evt) {
  evt.preventDefault();
  closePopup(popupAdd);
  const cardName = placeInput.value;
  const cardLink = linkInput.value;
  cardsContainer.prepend(createCard(cardName, cardLink));
  formAdd.reset();
  placeSubmitButton.classList.add(validationSettings.submitButtonInactiveClass);
}

formAdd.addEventListener('submit', formSubmitNewCard);

// Fig popup 

buttonFigCLose.addEventListener('click', () => {
  closePopup(popupZoom);
});

const editProfileValidator = new FormValidator(validationSettings, formEditProfile);
editProfileValidator.enableValidation();

const addPlaceValidator = new FormValidator(validationSettings, formAdd);
addPlaceValidator.enableValidation();