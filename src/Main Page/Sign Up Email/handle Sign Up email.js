function handleSignUpEmailWhenBlur() {
  const inputEmail = document.querySelector(
    ".sign__up__email__box__sign_up__input--email"
  );
  const alert = document.querySelector(".sign__up__email__box__sign_up--alert");
  const btnSubmit = document.querySelector(".sign__up__email__box__sign_up__input--btn")
  const btnWhenCorrect = document.querySelector(".sign__up__email__box__sign_up__input__btn--correct")
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  switch (true) {
    case regexEmail.test(("" + inputEmail.value).trim()) :
        console.log(3); 
      alert.innerHTML = "Quý khách đã đăng ký email thành công.";
      alert.classList.add('sign__up__email__box__sign_up--alert--valid')
      alert.classList.remove('sign__up__email__box__sign_up--alert--invalid')
      btnSubmit.classList.add('sign__up__email__box__sign_up__input__btn--rotateY')
      btnWhenCorrect.classList.add('sign__up__email__box__sign_up__input__btn__correct--rotateY')
      break;
    case !regexEmail.test(("" + inputEmail.value).trim()):
      alert.innerHTML = "Sai định dạng email.";
      alert.classList.add('sign__up__email__box__sign_up--alert--invalid')
      alert.classList.remove('sign__up__email__box__sign_up--alert--valid')
      break;
    default:
      alert.innerHTML = "Vùi Long Điền Email Của Bạn Vào input";
      alert.classList.add('sign__up__email__box__sign_up--alert--invalid')
      alert.classList.remove('sign__up__email__box__sign_up--alert--valid')
      break;
  }
}

export { handleSignUpEmailWhenBlur };
