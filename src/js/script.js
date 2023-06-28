// NAVIGATION
const menuHamburgerBtn = document.querySelector('.navigation__hamburger')
const menu = document.querySelector('.navigation__menu')
const menuCloseBtn = document.querySelector('.navigation__close-icon')
const navigation = document.querySelector('.navigation')
const body = document.querySelector('body')
const html = document.querySelector('html')
const menuElements = document.querySelectorAll('.navigation__menu-element')
const year = document.querySelector('.year')

//NAVIGATION
// menuElements.forEach(link => {
// 	link.preventDefault()
// })
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
//YEAR
const showActualYear = () => {
	const date = new Date()
	year.textContent = date.getFullYear()
}
showActualYear()
//NAVIGATION
menuHamburgerBtn.addEventListener('click', showMenu)
menuCloseBtn.addEventListener('click', hideMenu)
menuElements.forEach(el => {
	el.addEventListener('click', hideMenu)
})
