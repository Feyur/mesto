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
const buttonAddClose = document.querySelector('.popup__button_close_place');
const placeInput = document.querySelector('.popup__text_place');
const linkInput = document.querySelector('.popup__text_link');
const formAdd = document.querySelector('.popup__add-form');

// popup увелечение размера картинки

const popupZoom = document.querySelector('.popup_content_image');
const popupImg = document.querySelector('.popup__image');
const popupFig = document.querySelector('.popup__figcaption');
const buttonFigCLose = document.querySelector('.popup__button_close_figure')


// вывод списка

const elementsList = document.querySelector('.elements__list')


function toggleLike(event) {
  event.target.classList.toggle('elements__like_active');
}

function zoomImg(cardName, cardLink) {
  popupZoom.classList.add('popup_opened');
  popupImg.src = cardLink;
  popupFig.textContent = cardName;
}

const createCard = (cardName, cardLink) => {
  const template = document.querySelector('#elements__item-template');
  const li = template.content.querySelector('.elements__item').cloneNode(true);
  
  li.querySelector('.elements__image').src = cardLink;
  li.querySelector('.elements__title').textContent = cardName;

  li.querySelector('.elements__like').addEventListener('click', toggleLike);
  
  li.querySelector('.elements__delete').addEventListener('click', (event) => {
    li.remove()
  })

  li.querySelector('.elements__image').addEventListener('click', () => {
    zoomImg(cardName, cardLink);
  });

  return li;

}


const cards = initialCards.map(function (card) {
  return createCard(card.name, card.link);
});

elementsList.append(...cards)

// Открытие и закрытие popup'ов 

function openPopup(popup) {
  popup.classList.add('popup_opened');
  if (popup == popupProfile) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// форма edit button 

buttonEditOpen.addEventListener('click', () => {
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