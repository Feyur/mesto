let openButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__save')
let nameInput = document.querySelector('.popup__text')
let jobInput = document.querySelector('.popup__job')


openButton.addEventListener ('click', function(){
  popup.classList.add('popup_opened');
});

closeButton.addEventListener ('click', function(){
popup.classList.remove('popup_opened');
});


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                              // Так мы можем определить свою логику отправки.
                                              // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);




// !!!!! Ниже пример что я делал в тренажере, но как то не получилось перенять практику!!!!

// let container = document.querySelector('.container');
// let songsContainer = container.querySelector('.songs-container');
// let addButton = container.querySelector('.form__submit-btn_action_add');
// let resetButton = container.querySelector('.form__submit-btn_action_reset');

// function renderAdded() {
//   let songs = songsContainer.querySelectorAll('.song');
//   let noSongsElement = container.querySelector('.no-songs');

//   if (songs.length === 0) {
//     resetButton.setAttribute('disabled', true);
//     resetButton.classList.add('form__submit-btn_disabled');
//     noSongsElement.classList.remove('no-songs_hidden');
//   } else {
//     resetButton.removeAttribute('disabled');
//     resetButton.classList.remove('form__submit-btn_disabled');
//     noSongsElement.classList.add('no-songs_hidden');
//   }
// }

// function addSong() {
//   let artist = document.querySelector('.input__text_type_artist');
//   let song = document.querySelector('.input__text_type_song');

//   songsContainer.insertAdjacentHTML('beforeend', `
// 		<div class="song">
//       <h4 class="song__artist">${artist.value}</h4>
//       <p class="song__title">${song.value}</p>
// 		  <button class="song__like"></button>
// 		</div>
//   `);

//    artist.value = '';
//    song.value = '';

//   renderAdded();
// }

// addButton.addEventListener('click', addSong);

// renderAdded();
