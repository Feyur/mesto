import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);

    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__form");
    //
    this._handleSubmitEvt = this._handleSubmitEvt.bind(this);
  }

  _getInputValues() {
    const inputs = [...this._form.querySelectorAll(".popup__text")];
    //const inputs = this._form.querySelectorAll('.popup__text');
    const values = {};
    inputs.forEach((input) => {
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
    //this._form.addEventListener('submit', this._handleSubmit(this._getInputValues()));
    this._form.addEventListener("submit", this._handleSubmitEvt);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
