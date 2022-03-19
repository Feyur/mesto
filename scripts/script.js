let openButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__form');
let formElement = document.querySelector('.popup__submit');
let nameInput = document.querySelector('[name="name"]');
let jobInput = document.querySelector('[name="job"]');
let profileTitle = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__description');

function popupOpened() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

openButton.addEventListener('click', popupOpened);
closeButton.addEventListener('click', popupClose);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupClose();
}

form.addEventListener('submit', formSubmitHandler);