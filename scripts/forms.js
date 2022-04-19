const addPlaceForm = document.forms['add-form'];
const editProfileForm = document.forms['edit-form'];

const ERRORS = {
	empty: 'Вы пропустили это поле.',
	wrongUrl: 'Введите адрес изображения.',
	wrongLength: 'Введите значение от 2 до 30 символов',
}


const checkInputValidity = (input) => {
	//console.log(input.validity);
	input.setCustomValidity('');
	if (input.validity.valueMissing) {
		input.setCustomValidity(ERRORS.empty);
		return false;
	}
	
	if (input.validity.tooLong || input.validity.tooShort) {
		input.setCustomValidity(ERRORS.wrongLength);
		return false;
	}
	
	if (input.validity.typeMismatch && input.type === 'url') {
		input.setCustomValidity(ERRORS.wrongUrl);
		return false;
	}
	
	return input.checkValidity();
}

const validateInput = (input) => {
	const errorElement = input.parentNode.querySelector(`#${input.id}-error`);

	if (!checkInputValidity(input)) {
		input.classList.add('popup__text_error');
	} else {
		input.classList.remove('popup__text_error');
	}

	errorElement.textContent = input.validationMessage;
}

const enableButton = (button, inactiveButtonClass) => {
	button.disabled = false;
	button.classList.remove(inactiveButtonClass);
}

const disableButton = (button, inactiveButtonClass) => {
	button.disabled = true;
	button.classList.add(inactiveButtonClass);
}

const setButtonState = (button, isValid) => {
	if (isValid) {
		enableButton(button, 'popup__submit_invalid');
	} else {
		disableButton(button, 'popup__submit_invalid');
	}
}


const handleInput = (event) => {

	const currentForm = event.currentTarget;
	const input = event.target;
	const submitButton = currentForm.querySelector('.button');
	
	
	validateInput(input);
	
	setButtonState(submitButton, currentForm.checkValidity());
	
}

const handleSubmit = (event) => {
	event.preventDefault();
	
	const currentForm = event.target;
	
	if (currentForm.checkValidity()) {
		currentForm.reset();
	}
};

addPlaceForm.addEventListener('submit', handleSubmit);
editProfileForm.addEventListener('submit', handleSubmit);

addPlaceForm.addEventListener('input', handleInput);
editProfileForm.addEventListener('input', handleInput);