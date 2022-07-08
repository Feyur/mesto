import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);

    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._handleSubmitEvt = this._handleSubmitEvt.bind(this);
    this._inputs = [...this._form.querySelectorAll(".popup__text")];
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  _handleSubmitEvt(evt) {
    evt.preventDefault();
    this._handleSubmit(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handleSubmitEvt);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
