var parallax = document.querySelectorAll('.parallax');
var prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", function () {
	let offset = window.pageYOffset;
	for (var i = 0; i < parallax.length; i++) {
		parallax[i].style.backgroundPositionY = offset * 0.6 + "px";
	}
})
