let slideCount = 1;
isShow(slideCount);

function plusSlides(n) {
  isShow((slideCount += n));
}

function isShow(n) {
  let i;
  let slideItem = document.getElementsByClassName("reviews--slides");
  let dots = document.getElementsByClassName("reviews--dot");

  if (n > slideItem.length) {
    slideCount = 1;
  }
  if (n < 1) {
    slideCount = slideItem.length;
  }

  for (i = 0; i < slideItem.length; i++) {
    slideItem[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" reviews--active", "");
  }
  slideItem[slideCount - 1].style.display = "block";
  dots[slideCount - 1].className += " reviews--active";
}

