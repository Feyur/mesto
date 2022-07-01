export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscCLose = this._handleEscCLose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscCLose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscCLose);
  }

  _handleEscCLose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close-button");
    closeButton.addEventListener("click", () => this.close());
    this._popup.addEventListener("click", (evt) => {
      if (
        !evt.target.closest(".popup__container") &&
        !evt.target.closest(".popup__figure")
      ) {
        this.close();
      }
    });
  }
}
