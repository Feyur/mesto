import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    
    this._caption = this._popup.querySelector(".popup__figcaption");
    this._image = this._popup.querySelector(".popup__image");
  }

  open(text, link) {
    this._image.src = link;
    this._image.alt = text;
    this._caption.textContent = text;
    super.open();
  }
}
