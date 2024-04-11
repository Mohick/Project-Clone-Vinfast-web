function showOptionsCars() {
  const btnShoViewscarsElectric = document.querySelector(
    ".header__pc__navigation--items--options--views--cars-eletric"
  );
  const btnShoViewscarsOil = document.querySelector(
    ".header__pc__navigation--items--options--views--cars-oil"
  );
  const boxItemsCarsElectric = document.querySelector(
    ".header__pc__box__navigation--items--options--cars-eletric"
  );
  const boxItemsCarsOil = document.querySelector(
    ".header__pc__box__navigation--items--options--cars-oil"
  );
  if (
    btnShoViewscarsElectric.classList.contains(
      "header__pc__navigation--items--options--views-scale"
    )
  ) {
    btnShoViewscarsElectric.classList.remove(
      "header__pc__navigation--items--options--views-scale"
    );
    btnShoViewscarsOil.classList.add(
      "header__pc__navigation--items--options--views-scale"
    );

    boxItemsCarsElectric.classList.remove(
      "header__pc__box__navigation--items--options--cars-show"
    );
    boxItemsCarsOil.classList.add(
      "header__pc__box__navigation--items--options--cars-show"
    );
  } else {
    btnShoViewscarsElectric.classList.add(
      "header__pc__navigation--items--options--views-scale"
    );
    btnShoViewscarsOil.classList.remove(
      "header__pc__navigation--items--options--views-scale"
    );
    boxItemsCarsElectric.classList.add(
      "header__pc__box__navigation--items--options--cars-show"
    );
    boxItemsCarsOil.classList.remove(
      "header__pc__box__navigation--items--options--cars-show"
    );
  }
}

export { showOptionsCars };
