const buttonEditOpen = document.querySelector('.profile__edit-button');
const buttonEdtitClose = document.querySelector('.popup__close-button');
const popupProfile = document.querySelector('.popup_content_profile-edit');
const form = document.querySelector('.popup__form');
const formElement = document.querySelector('.popup__submit');
const nameInput = document.querySelector('.popup__text_name');
const jobInput = document.querySelector('.popup__text_job');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

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

// шаблон карточки
const template = document.querySelector('#elements__item-template').content.querySelector('.elements__item');

// вывод списка

const elementsList = document.querySelector('.elements__list')


function toggleLike(event) {
  event.target.classList.toggle('elements__like_active');
}

function zoomImg(cardName, cardLink) {
  popupZoom.classList.add('popup_opened');
  popupImg.src = cardLink;
  popupImg.alt = cardName;
  popupFig.textContent = cardName;
}

const createCard = (cardName, cardLink) => {
  
  const cardElement = template.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  
  cardImage.src = cardLink;
  cardImage.alt = cardName;
  
  cardElement.querySelector('.elements__title').textContent = cardName;

  cardElement.querySelector('.elements__like').addEventListener('click', toggleLike);
  
  cardElement.querySelector('.elements__delete').addEventListener('click', (event) => {
    cardElement.remove()
  })

  cardImage.addEventListener('click', () => {
    zoomImg(cardName, cardLink);
  });

  return cardElement;

}


const cards = initialCards.map(function (card) {
  return createCard(card.name, card.link);
});

elementsList.append(...cards)

// Открытие и закрытие popup'ов 

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// форма edit button 

buttonEditOpen.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
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

form.addEventListener('submit', formSubmitHandler);

// форма add button 

buttonAddOpen.addEventListener('click', () => {
	openPopup(popupAdd);
});

buttonAddClose.addEventListener('click', () => {
	closePopup(popupAdd);
});


function formSubmitNewCard(evt) {
  evt.preventDefault();
  const cardName = placeInput.value;
  const cardLink = linkInput.value;
  elementsList.prepend(createCard(cardName, cardLink));
  placeInput.value = '';
  linkInput.value = '';
  closePopup(popupAdd);
}

formAdd.addEventListener('submit', formSubmitNewCard);

// Fig popup 

buttonFigCLose.addEventListener('click', () => {
	closePopup(popupZoom);
});