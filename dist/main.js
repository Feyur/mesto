(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e,this._link=n,this._templateSelector=r,this._handleCardClick=o}var n,r;return n=t,(r=[{key:"_setEventListeners",value:function(){var e=this;this._cardLike=this._card.querySelector(".elements__like"),this._cardLike.addEventListener("click",(function(){return e._onLike()})),this._card.querySelector(".elements__delete").addEventListener("click",(function(){return e._onDelete()})),this._cardImage.addEventListener("click",(function(t){return e._handleCardClick(t)}))}},{key:"_onLike",value:function(){this._cardLike.classList.toggle("elements__like_active")}},{key:"_onDelete",value:function(){this._card.remove()}},{key:"getCard",value:function(){return this._card=document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0),this._card.querySelector(".elements__title").textContent=this._name,this._cardImage=this._card.querySelector(".elements__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._setEventListeners(),this._card}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._formElement=n}var t,r;return t=e,(r=[{key:"_getErrorElement",value:function(e){return this._formElement.querySelector("#".concat(e.id,"-error"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e,t,n){e.classList.add(this._settings.inputErrorClass),n.textContent=t}},{key:"_hideInputError",value:function(e,t){e.classList.remove(this._settings.inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){var t=this._getErrorElement(e);e.validity.valid?this._hideInputError(e,t):this._showInputError(e,e.validationMessage,t)}},{key:"enableSubmitButton",value:function(){this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._settings.submitButtonInactiveClass)}},{key:"disableSubmitButton",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._settings.submitButtonInactiveClass)}},{key:"_setButtonState",value:function(){this._hasInvalidInput(this._inputList)?this.disableSubmitButton():this.enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector),this._setButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._setButtonState()}))}))}},{key:"resetFormValidation",value:function(e){var t=this;Array.from(e.querySelectorAll(this._settings.inputErrorSpanSelector)).forEach((function(e){return e.textContent=""})),Array.from(e.querySelectorAll(this._settings.inputSelector)).forEach((function(e){return e.classList.remove(t._settings.inputErrorClass)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._items=r,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t.name,t.link)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscCLose=this._handleEscCLose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscCLose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscCLose)}},{key:"_handleEscCLose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("click",(function(t){t.target.closest(".popup__container")||t.target.closest(".popup__figure")||e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function y(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._caption=t._popup.querySelector(".popup__figcaption"),t._image=t._popup.querySelector(".popup__image"),t}return t=u,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._caption.textContent=e,l(d(u.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._handleSubmitEvt=n._handleSubmitEvt.bind(k(n)),n._inputs=function(e){if(Array.isArray(e))return m(e)}(r=n._form.querySelectorAll(".popup__text"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"_handleSubmitEvt",value:function(e){e.preventDefault(),this._handleSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){b(w(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmitEvt)}},{key:"close",value:function(){b(w(u.prototype),"close",this).call(this),this._form.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{title:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._jobElement.textContent=t}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=document.querySelector(".profile__edit-button"),P=document.querySelector(".popup__form"),I=document.querySelector(".popup__text_name"),q=document.querySelector(".popup__text_job"),x=document.querySelector(".profile__add-button"),B=document.querySelector(".popup__add-form"),R={formSelector:".popup__form",inputSelector:".popup__text",submitButtonSelector:".popup__submit",submitButtonInactiveClass:"popup__submit_invalid",inputErrorSpanSelector:".popup__error",inputErrorClass:"popup__text_error"};function A(e){var t=e.target.src,n=e.target.alt;F.open(n,t)}var T=function(e,n){return new t(e,n,"#elements__item-template",A).getCard()};C.addEventListener("click",(function(){var e=M.getUserInfo(),t=e.title,n=e.job;I.value=t,q.value=n,V.resetFormValidation(P),V.enableSubmitButton(),N.open()})),x.addEventListener("click",(function(){D.resetFormValidation(B),J.open()}));var V=new r(R,P);V.enableValidation();var D=new r(R,B);D.enableValidation();var U=new i({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e,t){var n=T(e,t);U.addItem(n)}},".elements__list");U.renderItems();var F=new _(".popup_content_image");F.setEventListeners();var N=new j(".popup_content_profile-edit",(function(e){var t=e.name,n=e.job;M.setUserInfo(t,n),N.close()}));N.setEventListeners();var J=new j(".popup_content_place-add",(function(e){var t=e.place,n=e.link;J.close();var r=T(t,n);U.addItem(r),D.disableSubmitButton()}));J.setEventListeners();var M=new L({profileNameSelector:".profile__title",profileJobSelector:".profile__description"})})();