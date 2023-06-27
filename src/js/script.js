// NAVIGATION
const menuHamburgerBtn = document.querySelector('.navigation__hamburger')
const menu = document.querySelector('.navigation__menu')
const menuCloseBtn = document.querySelector('.navigation__close-icon')
const navigation = document.querySelector('.navigation')
const body = document.querySelector('body')
const html = document.querySelector('html')
const menuElements = document.querySelectorAll('.navigation__menu-element')
//CONTACT
const nameInput = document.querySelector('#name')
const nameErr = document.querySelector('.contact__name-error')
const surnameInput = document.querySelector('#surname')
const surnameErr = document.querySelector('.contact__surname-error')
const email = document.querySelector('#email')
const emailErr = document.querySelector('.contact__email-error')
const textarea = document.querySelector('#message')
const textareaErr = document.querySelector('.contact__textarea-error')
const sendBtn = document.querySelector('.contact__send-btn')
const popup = document.querySelector('.popup')
const emailRegex =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const nameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i

//NAVIGATION
const showMenu = () => {
	const scrollTopPosition = window.scrollY
	menu.classList.add('active')
	navigation.style.overflow = 'visible'
	body.classList.add('fixed-position')
	body.style.top = `-${scrollTopPosition}px`
}
const hideMenu = () => {
	const scrollTopPosition = Math.abs(parseInt(body.style.top, 10))
	menu.classList.remove('active')
	navigation.style.overflow = 'hidden'
	body.classList.remove('fixed-position')
	html.style.scrollBehavior = 'auto'
	body.style.top = ''
	window.scrollTo(0, scrollTopPosition)
	html.style.scrollBehavior = 'smooth'
}

//CONTACT

const validateEmail = () => {
	if (email.value.length == 0) {
		emailErr.style.visibility = 'visible'
		emailErr.textContent = 'To pole nie może być puste'
		return false
	} else {
		if (email.value.match(emailRegex)) {
			emailErr.style.visibility = 'hidden'
			return true
		} else {
			emailErr.style.visibility = 'visible'
			emailErr.textContent = 'Podany adres e-mail jest nieprawidłowy'
			return false
		}
	}
}
const validateName = () => {
	if (nameInput.value.length == 0) {
		nameErr.style.visibility = 'visible'
		nameErr.textContent = 'To pole nie może być puste'
	} else {
		if (nameInput.value.match(nameRegex)) {
			nameErr.style.visibility = 'hidden'
			return true
		} else {
			nameErr.style.visibility = 'visible'
			nameErr.textContent = 'Podaj poprawne imię'
			return false
		}
	}
}
const validateSurname = () => {
	if (surnameInput.value.length == 0) {
		surnameErr.style.visibility = 'visible'
		surnameErr.textContent = 'To pole nie może być puste'
	} else {
		if (surnameInput.value.match(nameRegex)) {
			surnameErr.style.visibility = 'hidden'
			return true
		} else {
			surnameErr.style.visibility = 'visible'
			surnameErr.textContent = 'Podaj poprawne nazwisko'
			return false
		}
	}
}
const validateTextarea = () => {
	if (textarea.value.length == 0) {
		textareaErr.style.visibility = 'visible'
		textareaErr.textContent = 'Wiadomość nie może być pusta'
		return false
	} else {
		textareaErr.style.visibility = 'hidden'
		return true
	}
}
const removePopup = () => {
	popup.classList.remove('popup-show')
}
const checkForm = () => {
	validateEmail()
	validateName()
	validateSurname()
	validateTextarea()
	if (
		validateEmail() === true &&
		validateName() === true &&
		validateSurname() === true &&
		validateTextarea() === true
	) {
		popup.classList.add('popup-show')
		setTimeout(removePopup, 2500)
		email.value = ''
		nameInput.value = ''
		surnameInput.value = ''
		textarea.value = ''
	}
}

//NAVIGATION
menuHamburgerBtn.addEventListener('click', showMenu)
menuCloseBtn.addEventListener('click', hideMenu)
menuElements.forEach(el => {
	el.addEventListener('click', hideMenu)
})
//CONTACT
sendBtn.addEventListener('click', checkForm)
