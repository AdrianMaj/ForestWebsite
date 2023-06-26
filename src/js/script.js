// NAVIGATION
const menuHamburgerBtn = document.querySelector('.navigation__hamburger')
const menu = document.querySelector('.navigation__menu')
const menuCloseBtn = document.querySelector('.navigation__close-icon')
const navigation = document.querySelector('.navigation')
const body = document.querySelector('body')
const menuElements = document.querySelectorAll('.navigation__menu-element')

//NAVIGATION
const showMenu = () => {
	menu.classList.add('active')
	navigation.style.overflow = 'visible'
	body.classList.add('fixed-position')
}
const hideMenu = () => {
	menu.classList.remove('active')
	navigation.style.overflow = 'hidden'
	body.classList.remove('fixed-position')
}

//NAVIGATION
menuHamburgerBtn.addEventListener('click', showMenu)
menuCloseBtn.addEventListener('click', hideMenu)
menuElements.forEach(el => {
	el.addEventListener('click', hideMenu)
})
