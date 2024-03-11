/*=============== SHOW MENU ===============*/
const show_menu = (toggle_id, nav_id) => {
	const toggle = document.getElementById(toggle_id);
	nav = document.getElementById(nav_id);

	if (toggle && nav) {
		toggle.addEventListener("click", (e) => {
			nav.classList.toggle("show-menu");
		});
	}
};

show_menu("nav-toggle", "nav-menu");

/*=============== REMOVE MENU MOBILE ===============*/
const nav_links = document.querySelectorAll(".nav__link");

function link_action() {
	const nav_menu = document.getElementById("nav-menu");
	nav_menu.classList.remove("show-menu");
}

nav_links.forEach((link) => link.addEventListener("click", link_action));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
console.log(sections);
function scroll_active() {
	const scrollY = window.pageYOffset;

	sections.forEach((section) => {
		const section_height = section.offsetHeight;
		const section_top = section.offsetTop - 50;
		const section_id = section.getAttribute("id");

		if (scrollY > section_top && scrollY <= section_top + section_height) {
			document
				.querySelector(".nav__menu a[href*=" + section_id + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + section_id + "]")
				.classList.remove("active-link");
		}
	});
}

window.addEventListener("scroll", scroll_active);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scroll_header() {
	const header = document.getElementById("header");
	//when the scroll is greater than 80 viewport height, add the scroll-header class to the header tag

	if (this.scrollY >= 80) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scroll_header);
/*=============== SHOW SCROLL UP ===============*/
function scroll_top() {
	const scroll_up = document.getElementById("scroll-up");
	if (this.scrollY >= 560) scroll_up.classList.add("show-scroll"); else scroll_up.classList.remove("show-scroll")
}

window.addEventListener("scroll", scroll_top);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})