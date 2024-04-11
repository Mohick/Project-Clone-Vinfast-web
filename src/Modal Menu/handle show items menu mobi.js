function heandleShowItems(e) {
  const currentItems = e.target.parentNode.parentNode;
  const viewsAll =
    currentItems.querySelector(".menu__mobi__options--views-all") ||
    currentItems.parentNode.querySelector(".menu__mobi__options--views-all");

  const iconsArrayUp =
    currentItems.querySelector(".menu__mobi__options--arrow-up") ||
    currentItems.parentNode.querySelector(".menu__mobi__options--arrow-up");
  const iconsArrayDown = currentItems.querySelector(
    ".menu__mobi__options--arrow-down"
  );
  const optionsItems =
    currentItems.querySelector(".menu__mobi__container__options--items") ||
    currentItems.parentNode.querySelector(
      ".menu__mobi__container__options--items"
    );
  if (!!currentItems.getAttribute("open", undefined)) {
    currentItems.removeAttribute("open", undefined);
    iconsArrayUp.classList.remove("menu__mobi__options--arrow-show");
    iconsArrayDown.classList.add("menu__mobi__options--arrow-show");
    optionsItems.classList.remove("menu__mobi__container__options--items-show");

    viewsAll.classList.remove("menu__mobi__options--views-all-show");
  } else {
    currentItems.setAttribute("open", undefined);
    iconsArrayDown.classList.remove("menu__mobi__options--arrow-show");
    iconsArrayUp.classList.add("menu__mobi__options--arrow-show");
    optionsItems.classList.add("menu__mobi__container__options--items-show");
    viewsAll.classList.add("menu__mobi__options--views-all-show");
  }
}

function showOptionsMenu() {
  const menuOptionsChooseLanguages= document.querySelector('.menu__mobi__box--choose--language')
  const boxOptions = document.querySelector('.menu__mobi__box--choose--body--language')
  const iconMinus = document.querySelector('.menu__mobi__box--choose--language--icon--minus')
  const iconPlus = document.querySelector('.menu__mobi__box--choose--language--icon--plus')
   if(!menuOptionsChooseLanguages.classList.contains("menu__mobi__box--choose--language-fixed")) {
    menuOptionsChooseLanguages.classList.add("menu__mobi__box--choose--language-fixed")
    boxOptions.classList.add('menu__mobi__box--choose--body--language-show')
    iconMinus.classList.add('menu__mobi__box--choose--language--icon-show')
    iconPlus.classList.remove('menu__mobi__box--choose--language--icon-show')
   }else {
    menuOptionsChooseLanguages.classList.remove("menu__mobi__box--choose--language-fixed")
    boxOptions.classList.remove('menu__mobi__box--choose--body--language-show')
    iconPlus.classList.add('menu__mobi__box--choose--language--icon-show')
    iconMinus.classList.remove('menu__mobi__box--choose--language--icon-show')
   }
}
export  {heandleShowItems,showOptionsMenu};
