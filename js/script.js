var delayInMilliseconds = 1000;
var delayInMilliseconds2 = 2000;
var menustatus = false;

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

box1 = document.getElementById("card-wrapper");
box2 = document.getElementById("crowdin");
box3 = document.getElementById("card-wrapper2");

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
box1.addEventListener("click", function () {
  if (menustatus == true) {
    hide();
  }
});
box2.addEventListener("click", function () {
  if (menustatus == true) {
    hide();
  }
});
box3.addEventListener("click", function () {
  if (menustatus == true) {
    hide();
  }
});
function show(box) {
  document.getElementById("mobile").style.left = 0;
  menustatus = true;
}
function hide() {
  box = document.getElementById("mobile").style.left = -100 + "vw";
  menustatus = false;
}
setTimeout(() => {
WhatAnimation("moveleft");

$(window).scroll(function() {
    WhatAnimation("moveleft");
});

function WhatAnimation(name) {
    $("." + name).each(function() {
        switch (name) {
            case "fadescroll":
                AddClass(this, "fade");
                break;
            case "moveleft":
                AddClass(this, "left");
                break;
        }
    });
}

function AddClass(object, name) {
    if (IsVisible(object)) {
        $(object).addClass(name);
    } else {
        $(object).removeClass(name);
    }
}

function IsVisible(object) {
    var viewport = $(window).scrollTop() + $(window).height();
    var rand = $(object).offset();
    rand.bottom = rand.top + $(object).outerHeight();
    return !(
        viewport < rand.top + 250 || $(window).scrollTop() > rand.bottom - 250
    );
}
}, delayInMilliseconds);
