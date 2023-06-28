const menuElements = document.querySelectorAll('.navigation__menu-element')
const sections = document.querySelectorAll('.scrollspy')
const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.target.classList.contains('hero-img')){
				menuElements[0].classList.toggle('navigation__menu-element--active', entry.intersectionRatio > 0.9)
			}
			if (entry.target.classList.contains('about-us')){
				menuElements[1].classList.toggle('navigation__menu-element--active', entry.intersectionRatio > 0.9)
			}
			if (entry.target.classList.contains('offer')){
				menuElements[2].classList.toggle('navigation__menu-element--active', entry.intersectionRatio > 0.9)
			}
		})
	},
	{
		threshold: 0.9,
	}
)

sections.forEach(section => {
	observer.observe(section)
})
