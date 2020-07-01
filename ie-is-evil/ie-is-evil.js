var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);
if (isIE) {
  document.getElementById("ie-is-evil").style.display = "flex";
}