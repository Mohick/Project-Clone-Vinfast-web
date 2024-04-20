

function handleShowPassword() {
    const boxPassword = document.querySelector('.login__box__items__sign-in__input-and-icon')
    const boxInput = boxPassword.querySelector('.login__box__items__sign-in__input--password')
    const boxIcon = boxPassword.querySelector('.login__box__items__sign-in--icon')
    if(!!boxIcon.classList.contains('login__box__items__sign-in__icon--show')) {
        boxIcon.classList.remove('login__box__items__sign-in__icon--show')
        boxInput.type = 'password'
    }else {
        boxIcon.classList.add('login__box__items__sign-in__icon--show')
        boxInput.type = 'text'
    }
}

export { handleShowPassword };