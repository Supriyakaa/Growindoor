
console.log("Hello supriya")

function $id(id) {
  return document.getElementById(id);
}

function $class(ele) {
  return document.getElementsByClassName(ele);
}

var responsiveSlider = function () {
  var slider = $id("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = $id("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = $id("prev");
  var next = $id("next");

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if (count == 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if (count == items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function (event) {
    event.preventDefault();
    nextSlide();
  });

  prev.addEventListener("click", function (event) {
    event.preventDefault();
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 8000);
};

window.onload = function () {
  responsiveSlider();
};