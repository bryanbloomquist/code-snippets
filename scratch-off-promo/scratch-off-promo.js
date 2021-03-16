/* ***** ***** ***** BLACK FRIDAY 2020 PROMO ***** ***** ***** */

const blackFridayScratchOff = () => {
	const scratchOff = document.getElementById("specialModalImage");
	const scratchOffSurface = scratchOff.getContext("2d");
	let brushRadius = (scratchOff.width / 100) * 5;
	brushRadius < 40 ? (brushRadius = 40) : null;

	const img = new Image();
	img.src =
		"https://nemoarms.com/wp-content/uploads/2020/11/scratch-and-win.png";
	img.onload = function () {
		scratchOffSurface.drawImage(img, 0, 0, scratchOff.width, scratchOff.height);
	};

	function detectLeftButton(event) {
		if ("buttons" in event) {
			return event.buttons === 1;
		} else if ("which" in event) {
			return event.which === 1;
		} else {
			return event.button === 1;
		}
	}

	function getBrushPos(xRef, yRef) {
		var scratchRect = scratchOff.getBoundingClientRect();
		return {
			x: Math.floor(
				((xRef - scratchRect.left) / (scratchRect.right - scratchRect.left)) *
					scratchOff.width
			),
			y: Math.floor(
				((yRef - scratchRect.top) / (scratchRect.bottom - scratchRect.top)) *
					scratchOff.height
			),
		};
	}

	function drawDot(mouseX, mouseY) {
		scratchOffSurface.beginPath();
		scratchOffSurface.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true);
		scratchOffSurface.fillStyle = "#000";
		scratchOffSurface.globalCompositeOperation = "destination-out";
		scratchOffSurface.fill();
	}

	scratchOff.addEventListener(
		"mousemove",
		function (e) {
			const brushPos = getBrushPos(e.clientX, e.clientY);
			const leftBut = detectLeftButton(e);
			if (leftBut == 1) {
				drawDot(brushPos.x, brushPos.y);
			}
		},
		false
	);

	scratchOff.addEventListener(
		"touchmove",
		function (e) {
			e.preventDefault();
			const touch = e.targetTouches[0];
			if (touch) {
				const brushPos = getBrushPos(touch.pageX, touch.pageY);
				drawDot(brushPos.x, brushPos.y);
			}
		},
		false
	);
};

/* the following deactivated code will only run the scratch off if todays date falls in a specific date range */

// const currentDate = new Date();
// /* months start at 0 in Date(); remember to subtract 1 from the month you want, for example: Nov = 10, not 11 */
// const startDate = new Date( 2020, 10, 27 );
// const endDate = new Date( 2020, 11, 1 );
// const promoActive = ( startDate <= currentDate && currentDate <= endDate ) ? true : false;
// if ( page === '/' && promoActive ) {

const blackFridayDeals = [
	"https://nemoarms.com/wp-content/uploads/2020/11/freeship.png",
	"https://nemoarms.com/wp-content/uploads/2020/11/25swag.png",
	"https://nemoarms.com/wp-content/uploads/2020/11/freeshirt.png",
	"https://nemoarms.com/wp-content/uploads/2020/11/freepatch.png",
];

let randNum = localStorage.getItem("random_num");
let special = "";

!randNum ? (randNum = Math.floor(Math.random() * 100) + 1) : null;
localStorage.setItem("random_num", randNum);

if (randNum < 10) {
	special = 0;
} else if (randNum < 40) {
	special = 1;
} else if (randNum < 70) {
	special = 2;
} else {
	special = 3;
}

$("#specialModalImage").css(
	"background-image",
	"url( " + blackFridayDeals[special] + " )"
);

blackFridayScratchOff();

$("#specialModal").modal("show");

// }

/* ***** ***** ***** BLACK FRIDAY 2020 PROMO END ***** ***** ***** */
