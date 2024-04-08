function handleShowModal() {
  const hightHeader = document.getElementById("header").clientHeight;
  const menu__container = document.querySelector(".menu__box--pc");
  const menu = document.getElementById("menu");
  const btn__close = document.querySelector(".menu__pc__box--btn-close");
  const choose__items = document.querySelector(".menu__pc__box--items");
  const submodalMenu = document.querySelector(".menu__pc--sub-menu");

  if (!menu.classList.contains("menu__show")) {
    menu__container.style.top = `${hightHeader}px`;
    menu.classList.add("menu__show");
    btn__close.classList.add("menu__pc--show--content");
    choose__items.classList.add("menu__pc--show--content");
    menu__container.classList.add("menu__box--pc--show");
  } else {
    if (submodalMenu.classList.contains("menu__pc--sub-menu--show")) {
      submodalMenu.classList.remove("menu__pc--sub-menu--show");
      setTimeout(() => {
        btn__close.classList.remove("menu__pc--show--content");
        choose__items.classList.remove("menu__pc--show--content");
        menu__container.classList.remove("menu__box--pc--show");
        setTimeout(() => {
          menu.classList.remove("menu__show");
        }, 300);
      }, 500);
    } else {
      btn__close.classList.remove("menu__pc--show--content");
      choose__items.classList.remove("menu__pc--show--content");
      menu__container.classList.remove("menu__box--pc--show");
      setTimeout(() => {
        menu.classList.remove("menu__show");
      }, 300);
    }
  }
}

function handleShowSubModal() {
  const submodalMenu = document.querySelector(".menu__pc--sub-menu");
  if (!submodalMenu.classList.contains("menu__pc--sub-menu--show")) {
    submodalMenu.classList.add("menu__pc--sub-menu--show");
  } else {
    submodalMenu.classList.remove("menu__pc--sub-menu--show");
  }
}

export { handleShowModal, handleShowSubModal };
