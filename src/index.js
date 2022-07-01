import './pages/index.css';

import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import { initialCards } from "./scripts/InitialCards.js";
import { Section } from "./scripts/Section.js";
import { PopupWithImage } from "./scripts/PopupWithImage.js";
import { PopupWithForm } from "./scripts/PopupWithForm.js";
import { UserInfo } from "./scripts/UserInfo.js";

const buttonEditOpen = document.querySelector(".profile__edit-button");
const formEditProfile = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__text_name");
const jobInput = document.querySelector(".popup__text_job");
const templateSelector = "#elements__item-template";

// попап добавление карточки

const buttonAddOpen = document.querySelector(".profile__add-button");
const formAdd = document.querySelector(".popup__add-form");

// настройки валидации

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__submit",
  submitButtonInactiveClass: "popup__submit_invalid",
  inputErrorSpanSelector: ".popup__error",
  inputErrorClass: "popup__text_error",
};

// обработчик клика по изображению карточки

function handleCardClick(event) {
  const imgSrc = event.target.src;
  const imgCaption = event.target.alt;
  imagePopup.open(imgCaption, imgSrc);
}

const createCard = (cardName, cardLink) => {
  const card = new Card(
    cardName,
    cardLink,
    templateSelector,
    handleCardClick
  ).getCard();
  return card;
};

const renderCard = (cardName, cardLink, cardContainer) => {
  const card = createCard(cardName, cardLink);
  cardContainer.prepend(card);
};

// открытие формы редактирования профиля

buttonEditOpen.addEventListener("click", () => {
  const { title, job } = userInfo.getUserInfo();
  nameInput.value = title;
  jobInput.value = job;
  editProfileValidator.resetFormValidation(formEditProfile);
  editProfileValidator.enableSubmitButton();
  editProfilePopup.open();
});

// открытие формы добавления карточки

buttonAddOpen.addEventListener("click", () => {
  addPlaceValidator.resetFormValidation(formAdd);
  addPlacePopup.open();
});

//обработчик отправки формы профиля

function formSubmitProfile(data) {
  const { name, job } = data;
  userInfo.setUserInfo(name, job);
  editProfilePopup.close();
}

// обработчик отправки формы карточки

const formSubmitNewCard = (data) => {
  const cardName = data.place;
  const cardLink = data.link;
  addPlacePopup.close();
  const card = createCard(cardName, cardLink);
  sectionCards.addItem(card);
  addPlaceValidator.disableSubmitButton();
};

// валидация форм

const editProfileValidator = new FormValidator(
  validationSettings,
  formEditProfile
);
editProfileValidator.enableValidation();

const addPlaceValidator = new FormValidator(validationSettings, formAdd);
addPlaceValidator.enableValidation();

// секция с карточками

const sectionCards = new Section(
  { items: initialCards, renderer: renderCard },
  ".elements__list"
);
sectionCards.renderItems();

// попапы

const imagePopup = new PopupWithImage(".popup_content_image");
imagePopup.setEventListeners();

const editProfilePopup = new PopupWithForm(
  ".popup_content_profile-edit",
  formSubmitProfile
);
editProfilePopup.setEventListeners();

const addPlacePopup = new PopupWithForm(
  ".popup_content_place-add",
  formSubmitNewCard
);
addPlacePopup.setEventListeners();

const userInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  profileJobSelector: ".profile__description",
});
