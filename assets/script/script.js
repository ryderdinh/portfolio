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
document.querySelector('.toggle').addEventListener('click', () => {
	setTimeout(() => toggleMenu(), 500);
});

// Run toast
function launch_toast(type, data) {
	let listType = {
		error: '<i class="fas fa-times bg-red"></i>',
		success: '<i class="fas fa-check bg-green"></i>',
		warning: '<i class="fas fa-exclamation bg-yellow"></i>'
	};
	let x = document.getElementById('toast');
	document.getElementById('img').innerHTML =
		!!listType[type] !== undefined
			? listType[type]
			: listType.warning;
	('<i class="fas fa-map-marker-alt"></i>');
	document.getElementById('desc').innerHTML = data ? data : 'Error!';
	x.className = 'show';
	setTimeout(function () {
		x.className = x.className.replace('show', '');
	}, 5000);
}
