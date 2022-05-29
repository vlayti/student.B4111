const slider = document.querySelector(".slider");
const l = slides.length;
let slide = 0;

function render(slides) {
  let slidesHTML = "";
  let dots = "";
  for (let i = 0; i < l; i++) {
    slidesHTML += `<div class="slide__item_box">
      <img src="${slides[i]}" alt="slide ${i}" class="slides__image_item">
    </div>`;
    if (i === slide) {
      dots += '<div class="dot dot_active"></div>';
    } else {
      dots += '<div class="dot"></div>';
    }
  }

  slider.innerHTML = `<div class="back_button">
    <img src="./images/chevron-left-circle.svg" class="slider__arrow">
  </div>
  <div class="next_button">
    <img src="./images/chevron-left-circle.svg" class="slider__arrow">
  </div>
  <div class="slides__container">
    ${slidesHTML}
  </div>
  <div class="dots__container">
    ${dots}
  </div>`;
}

function dotsUpdate() {
  const dots = document.querySelectorAll(".dot");
  for (let i = 0; i < l; i++) {
    if (i === slide) {
      dots[i].setAttribute("class", "dot dot_active");
      continue;
    }
    dots[i].setAttribute("class", "dot");
  }
}

function position() {
  const slides = document.querySelector(".slides__container");
  slides.style.transform = `translateX(-${slide * 800}px)`;
}

function next() {
  if (slide + 1 > l - 1) {
    slide = 0;
  } else {
    slide++;
  }
  position();
  dotsUpdate();
}

function back() {
  if (slide - 1 < 0) {
    slide = l - 1;
  } else {
    slide--;
  }
  position();
  dotsUpdate();
}

render(slides);

const nextButton = document.querySelector(".next_button");
const backButton = document.querySelector(".back_button");

if (options.autoPlay) {
  setInterval(next, options.playDuration || 5000);
}

nextButton.addEventListener("click", next);
backButton.addEventListener("click", back);
