const settings = {
	formSelector: '.popup__form',
	inputSelector: '.popup__text',
	submitButtonSelector: '.popup__submit',
	submitButtonInactiveClass: 'popup__submit_invalid',
	inputErrorSpanSelector: '.popup__error',
	inputErrorClass: 'popup__text_error'
};


const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = '';
}; 

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
}; 

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  setButtonState(inputList, buttonElement, settings);
  inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
		checkInputValidity(formElement, inputElement, settings);
		setButtonState(inputList, buttonElement, settings);
		});
    });
}; 

const enableValidation = (settings) => {
	const formList = Array.from(document.querySelectorAll(settings.formSelector));
	
	formList.forEach((formElement) => {
		formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
		setEventListeners(formElement, settings);
	});
};


const setButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, settings);
  } else {
    enableSubmitButton(buttonElement, settings);
  }
};

const enableSubmitButton = (button, settings) => {
  button.classList.remove(settings.submitButtonInactiveClass);
  button.disabled = false;
}

const disableSubmitButton = (button, settings) => {
  button.classList.add(settings.submitButtonInactiveClass);
  button.disabled = true;
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 


const resetFormValidation = (form, settings) => {

	const errorSpanList = Array.from(form.querySelectorAll(settings.inputErrorSpanSelector));
	errorSpanList.forEach((span) => span.textContent = '');
	
	const formInputList = Array.from(form.querySelectorAll(settings.inputSelector));
	formInputList.forEach((input) => input.classList.remove(settings.inputErrorClass));
}

enableValidation(settings);
