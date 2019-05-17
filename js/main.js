// vars

const menuToggler = document.querySelector('.menu-toggler'),
	nav = document.querySelector('.nav-cont'),
	navList = document.querySelector('.nav-list'),
	x = window.matchMedia("(max-width: 991px)");



// events

function addEvents() {
	menuToggler.addEventListener('click', toggleMenu);

	navList.addEventListener('click', closeMenu);
}

addEvents();



// functions

function toggleMenu() {
	if (x.matches) {
		if (nav.style.display === '') {
			nav.style.display = 'block';

			this.classList.add('active');

			closeMenu();
		} else {
			nav.style.display = '';

			this.classList.remove('active');
		}
	}
}

function closeMenu(e) {
	if (e.target.classList.contains('nav-link')) {
		nav.style.display = '';

		menuToggler.classList.remove('active');
	}
}