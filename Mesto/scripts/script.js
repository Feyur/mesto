let openButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__form');
let formElement = document.querySelector('.popup__submit');
let nameInput = document.querySelector('.popup__text');
let jobInput = document.querySelector('.popup__job');
let profileTitle = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__description');

openButton.addEventListener ('click', function(){
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
});

closeButton.addEventListener ('click', function(){
popup.classList.remove('popup_opened');
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

form.addEventListener('submit', formSubmitHandler);

