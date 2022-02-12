var delayInMilliseconds = 1000;
var delayInMilliseconds2 = 2000;
var menustatus = false;

setTimeout(
  (window.load = function () {
    var content = document.getElementById("onscroll");
    content.style.opacity = 1;
    content.style.transform = "translateX(" + 0 + "vw)";
  }),
  delayInMilliseconds
);

setTimeout(
  (window.load = function () {
    let content = document.querySelector("header");
    content.style.transform = "translateY(" + 0 + "vh)";
  }),
  delayInMilliseconds2
);

function rickroll() {
  let button = document.getElementById("back");
  button.style.visibility = "visible";
  document.querySelector("html").style.overflow = "hidden";
}
function disable() {
  let button = document.getElementById("back");
  button.style.visibility = "hidden";
  document.querySelector("html").style.overflow = "visible";
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

menu = document.getElementById("menu");

function crowdinproject(name) {
  window.open(`https://crowdin.com/project/${name}`, "_blank");
}

menu.addEventListener("click", function () {
  if (menustatus == false) {
    show();
  } else {
    hide();
  }
});

function show(box) {
  document.getElementById("link-box-wrapper").style.left = 2+'rem';
  menu.classList.add("active");
  menustatus = true;
}
function hide() {
  box = document.getElementById("link-box-wrapper").style.left = -20+'rem';
  menu.classList.remove("active");
  menustatus = false;
}
