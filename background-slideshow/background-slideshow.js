/**
 * @param  {number} interval (in milliseconds)
 */
function cycleBackgrounds(interval) {
  let index = 0;

  const $imageEls = document.querySelectorAll(".container .slide"); // Get the images to be cycled.

  setInterval(() => {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0;

    // Show the next
    $imageEls[index].classList.add("show");

    // Find the previous.
    const previous = index - 1 < 0 ? $imageEls.length - 1 : index - 1;

    // Hide the previous
    $imageEls[previous].classList.remove("show");
  }, interval);
}



//////////Slideshow Through Fishing Images
let index = 0;
const fishingImgs = [
    "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/realguides/rg-fisherman.png",
    "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/realguides/icefishing.png",
    "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/realguides/oceanfishing.png"
];
//////Preload Background Images
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
$(fishingImgs).preload();
setInterval(() => {
    index = index + 1 < fishingImgs.length ? index + 1 : 0;
    $(".rg-adventures__inner__background--fishing").css('background-image', 'url('+fishingImgs[index]+')');
}, 3000);