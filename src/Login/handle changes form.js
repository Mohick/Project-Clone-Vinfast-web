function handleChangesForm() {
  const signUp = document.querySelector(".login__box__items--sign-up");
  const tagForm = document.querySelector(".login__box--items");
  if (!!tagForm.classList.contains("login__box--items--views-sign-up")) {
    signUp.style.zIndex = 30;
    tagForm.classList.remove("login__box--items--views-sign-up");
  } else {
    signUp.style.zIndex = 30;
    tagForm.classList.add("login__box--items--views-sign-up");
  }
}

export { handleChangesForm };
