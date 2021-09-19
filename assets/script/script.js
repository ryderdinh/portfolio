const toggleMenu = () => {
	let e = document.querySelector('.toggle'),
		t = document.querySelector('.menu');
	e.classList.toggle('active'), t.classList.toggle('active');
};

// When scroll add class 'sticky'
window.addEventListener('scroll', function () {
	document
		.querySelector('header')
		.classList.toggle('sticky', window.scrollY > 0);
});

// When elements has class toggle click
document
	.querySelector('.toggle')
	.addEventListener('click', toggleMenu);
