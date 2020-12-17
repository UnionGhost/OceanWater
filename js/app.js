function pageBurger() {
	const pageBurger = document.querySelector('.header-page__burger');
	const page = document.querySelector('.page');

	pageBurger.classList.toggle('active');
	page.classList.toggle('active');

}


/* VanillaTilt.init(document.querySelectorAll(".block"), {
	max: 25,
	speed: 400,
	glare: true,
	scale: 1.2,
	"max-glare": 1,
}); */


