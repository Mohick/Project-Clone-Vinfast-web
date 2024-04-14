function handleArrowSlider() {
  const cpnSlider = document.getElementById("slider");
  const firstDot = document.querySelector(
    ".slider__btn--dots .slider__btn__dots--first"
  );
  const seccondDot = document.querySelector(
    ".slider__btn--dots .slider__btn__dots--seccond"
  );
  if (cpnSlider.classList.contains("slider__first--img")) {
    cpnSlider.classList.remove("slider__first--img");
    cpnSlider.classList.add("slider__seccond--img");
    seccondDot.classList.add("slider__btn__dots--active");
    firstDot.classList.remove("slider__btn__dots--active");
  } else {
    cpnSlider.classList.remove("slider__seccond--img");
    cpnSlider.classList.add("slider__first--img");
    seccondDot.classList.remove("slider__btn__dots--active");
    firstDot.classList.add("slider__btn__dots--active");
  }
}


export { handleArrowSlider };
