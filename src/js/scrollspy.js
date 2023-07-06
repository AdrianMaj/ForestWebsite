const menuElements = document.querySelectorAll('.navigation__menu-element')
const scrollSpySections = document.querySelectorAll('.scrollspy')

const options = {
	threshold: 0.8,
}
const handleScrollSpy = entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			menuElements.forEach(menuElement => {
				menuElement.classList.remove('navigation__menu-element--active')
			})
			const activeNavItem = document.querySelector(`[href="#${entry.target.id}"]`)
			activeNavItem.classList.add('navigation__menu-element--active')
		}
	})
}

const observer = new IntersectionObserver(handleScrollSpy, options)
scrollSpySections.forEach(section => {
	observer.observe(section)
})
