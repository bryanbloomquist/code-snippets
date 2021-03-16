$("#rifles-slider").slick({
	autoplay: true,
	autoplaySpeed: 10000,
	speed: 1000,
	lazyload: "progressive",
});

$("#rifles-slider").on(
	"beforeChange",
	function (event, slick, currentSlide, nextSlide) {
		let totalNum = slick.slideCount;
		let currentEl = $("#rifles-slider .slick-current .slide").attr("id");
		let rifle, forward;
		$("#rifle-class").removeClass("fadeInUp").addClass("fadeOutDown");
		$("#rifle-top-" + currentSlide).toggleClass("hidden");
		$("#rifle-bottom-" + currentSlide).toggleClass("hidden");
		$("#rifle-top-" + nextSlide).toggleClass("hidden");
		$("#rifle-bottom-" + nextSlide).toggleClass("hidden");
		if (nextSlide === 0 && currentSlide === totalNum - 1) {
			forward = true;
		} else if (nextSlide === totalNum - 1 && currentSlide === 0) {
			forward = false;
		} else if (nextSlide > currentSlide) {
			forward = true;
		} else {
			forward = false;
		}
		setTimeout(function () {
			if (forward) {
				switch (currentEl) {
					case "battle-light-slide":
						rifle = "xo";
						break;
					case "xo-slide":
						rifle = "omen";
						break;
					case "omen-slide":
						rifle = "battle-light";
						break;
				}
			} else {
				switch (currentEl) {
					case "battle-light-slide":
						rifle = "omen";
						break;
					case "xo-slide":
						rifle = "battle-light";
						break;
					case "omen-slide":
						rifle = "xo";
						break;
				}
			}
			$("#rifle-class")
				.text(rifle)
				.attr("href", "/product-category/rifles/" + rifle + "/");
			$("#rifle-class").removeClass("fadeOutDown").addClass("fadeInUp");
		}, 500);
	}
);
