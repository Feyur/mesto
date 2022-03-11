
const open = document.getElementById('open-popup');
const close = document.getElementById('close-popup');
const popup = document.getElementById('popup');

open.addEventListener('click', function(){
popup.classList.add('popup_opened');
})

close.addEventListener('click', function(){
popup.classList.remove('popup_opened');
})

