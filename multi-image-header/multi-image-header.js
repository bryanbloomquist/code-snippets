function contactSlideshow(container) {
	let index = 0;
	let $imageEls = document.querySelectorAll(container + " .slide");
	setInterval(
		(function slide() {
			index = index + 1 < $imageEls.length ? index + 1 : 0;
			$imageEls[index].classList.add("show");
			let previous = index - 1 < 0 ? $imageEls.length - 1 : index - 1;
			$imageEls[previous].classList.remove("show");
			return slide;
		})(),
		8000
	);
}

function changeSlides() {
	setTimeout(function () {
		contactSlideshow(".slideshow--1");
	}, 2000);
	setTimeout(function () {
		contactSlideshow(".slideshow--2");
	}, 4000);
	setTimeout(function () {
		contactSlideshow(".slideshow--3");
	}, 6000);
	setTimeout(function () {
		contactSlideshow(".slideshow--4");
	}, 8000);
}

changeSlides();

function evenHeightOnContactPage() {
	const width = $(".slideshow--1").width();
	const height = (width * 1200) / 800;
	$(".slideshow--1,.slideshow--2,.slideshow--3,.slideshow--4").css(
		"height",
		height + "px"
	);
}

evenHeightOnContactPage();

window.addEventListener("resize", evenHeightOnContactPage);
