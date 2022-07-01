export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._formElement = form;
  }

  _getErrorElement(inputElement) {
    return this._formElement.querySelector(`#${inputElement.id}-error`);
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _showInputError(inputElement, errorMessage, errorElement) {
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    const errorElement = this._getErrorElement(inputElement);
    if (!inputElement.validity.valid) {
      this._showInputError(
        inputElement,
        inputElement.validationMessage,
        errorElement
      );
    } else {
      this._hideInputError(inputElement, errorElement);
    }
  }

  enableSubmitButton() {
    this._buttonElement.disabled = false;
    this._buttonElement.classList.remove(
      this._settings.submitButtonInactiveClass
    );
  }

  disableSubmitButton() {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._settings.submitButtonInactiveClass);
  }

  _setButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );

    this._setButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._setButtonState();
      });
    });
  }

  resetFormValidation(form) {
    const errorSpanList = Array.from(
      form.querySelectorAll(this._settings.inputErrorSpanSelector)
    );
    errorSpanList.forEach((span) => (span.textContent = ""));

    const formInputList = Array.from(
      form.querySelectorAll(this._settings.inputSelector)
    );
    formInputList.forEach((input) =>
      input.classList.remove(this._settings.inputErrorClass)
    );
  }

  enableValidation() {
    this._setEventListeners();
  }
}
