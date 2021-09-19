/***
 * =========================================================
 * Hi,I'm dinhquanganh
 * =========================================================
 ***/

// As func name :D
const toggleMenu = () => {
	let e = document.querySelector('.toggle'),
		t = document.querySelector('.menu');
	e.classList.toggle('active'), t.classList.toggle('active');
};

// Handle when scroll: add class 'sticky'
window.addEventListener('scroll', function () {
	document
		.querySelector('header')
		.classList.toggle('sticky', window.scrollY > 0);
});

// Handle when elements has class toggle click
document.querySelector('.toggle').addEventListener('click', () => {
	setTimeout(() => toggleMenu(), 500);
});

// Handle toast
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

// Custom console
function logInfoAuthor(color, size, weight) {
	return `color:${color};
				font-size:${size};
				font-weight:${weight};
				text-shadow: 2px 2px #d3d3d3`;
}
function logInfoGuessScreen(color, size, weight, textshadow) {
	return `color:${color};
				font-size:${size};
				font-weight:${weight};
				padding: 0px 0;
				text-shadow: ${textshadow}`;
}
// Print to console
console.log(
	`%cHi, I'm\n%cdinhquanganh\n%cI'm front-end developer`,
	logInfoAuthor('#ffffff', '2em', 600),
	logInfoAuthor('#3ab493', '3em', 'bolder'),
	logInfoAuthor('#ffffff', '2em', 400)
);
console.log(
	`%cNice!\n%cYou have screensize: %c${screen.width}%cx%c${screen.height}`,
	logInfoGuessScreen('#F8BC00', '25px', '400', '1px 1px #d3d3d3'),
	logInfoGuessScreen('#0055ff', '15px', '400', '1px 1px #d3d3d3'),
	logInfoGuessScreen('#3ab493', '20px', '600', '1px 1px #d3d3d3'),
	logInfoGuessScreen('#fff', '15px', '400', '1px 1px #d3d3d3'),
	logInfoGuessScreen('#3ab493', '20px', '400', '1px 1px #d3d3d3')
);
