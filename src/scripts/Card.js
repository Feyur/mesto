export default class Card {
  constructor(cardName, cardLink, templateSelector, handleCardClick) {
    this._name = cardName;
    this._link = cardLink;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    this._card
      .querySelector(".elements__like")
      .addEventListener("click", () => this._onLike());
    this._card
      .querySelector(".elements__delete")
      .addEventListener("click", () => this._onDelete());
    this._card
      .querySelector(".elements__image")
      .addEventListener("click", (event) => this._handleCardClick(event));
  }

  _onLike() {
    this._card
      .querySelector(".elements__like")
      .classList.toggle("elements__like_active");
  }

  _onDelete() {
    this._card.remove();
  }

  getCard() {
    this._card = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);
    this._card.querySelector(".elements__title").textContent = this._name;

    this._cardImage = this._card.querySelector(".elements__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._card;
  }
}
