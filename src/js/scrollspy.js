const menuElements = document.querySelectorAll('.navigation__menu-element')
const sections = document.querySelectorAll('.scrollspy')
let scrollPos = 0
const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.target.classList.contains('about-us') && window.scrollY != 0) {
				menuElements[1].classList.toggle('navigation__menu-element--active', entry.intersectionRatio >= 0.8)
			}
			if (entry.target.classList.contains('offer')) {
				menuElements[2].classList.toggle('navigation__menu-element--active', entry.intersectionRatio >= 0.8)
			}
		})
	},
	{
		threshold: 0.8,
	}
)
const scroll = () => {
	scrollPos = window.scrollY
}
const checkScroll = () => {
	if (scrollPos == 0) {
		menuElements[0].classList.add('navigation__menu-element--active')
	} else {
		menuElements[0].classList.remove('navigation__menu-element--active')
	}
}
window.addEventListener('scroll', scroll)
window.addEventListener('scroll', checkScroll)

sections.forEach(section => {
	observer.observe(section)
})
