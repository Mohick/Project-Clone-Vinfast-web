function handleChangeImgMotoWhenClickLogo(e) {
  const arrayItemsLogo = document.querySelectorAll(
    ".Moto__box__logo__options--items"
  );
  arrayItemsLogo.forEach((item) => {
    if (item.getAttribute("current-item")) {
      item.removeAttribute("current-item");
      item.classList.remove("Moto__box__logo__options__items--change-fill");
      if(window.innerWidth < 900) {
        item.style.order = '1'
       }
      return;
    }
  });
  const dataImage = e.getAttribute("data-img");
  const dataBoxMoto = e.getAttribute("data-box-moto");
  const dataPrice = e.getAttribute("data-price");
  const dataSpeed = e.getAttribute("data-speed");
  const dataLocation = e.getAttribute("data-location");
  const dataDistance = e.getAttribute("data-distance");
  const boxImg = document.querySelector(".Moto__box--items--img img");
  const boxBarLineRowDown = document.querySelector(".Moto__box__bar--down");
  const boxSpeed = document.querySelector(
    ".Moto__box__items__detail__parameter--speed .Moto__box__items__detail__parameter--value"
  );
  const boxBoxMoto = document.querySelector(
    ".Moto__box__items__detail__parameter--box-moto .Moto__box__items__detail__parameter--value"
  );
  const boxPrice = document.querySelector(
    ".Moto__box__items__detail__parameter--price .Moto__box__items__detail__parameter--value"
  );
  const boxDistance = document.querySelector(
    ".Moto__box__items__detail__parameter--distance .Moto__box__items__detail__parameter--value"
  );
  const btnDeposit = document.querySelector(
    ".Moto__box__items__detail__btn--deposit"
  );
  const btnViewMore = document.querySelector(
    ".Moto__box__items__detail__btn--views-more"
  );
  boxImg.classList.remove("Moto__box__img__changed--items")
  boxImg.src = dataImage;
  boxSpeed.innerHTML = `${dataSpeed} Km`;
  boxBoxMoto.innerHTML = `${dataBoxMoto} lít`;
  boxPrice.innerHTML = `${dataPrice} VNĐ`;
  boxDistance.innerHTML = `${dataDistance} Km`;
  btnDeposit.href = `#Đặt cọc ${dataSpeed}`;
  btnViewMore.href = `#Xem chi tiết ${dataSpeed}`;
  e.setAttribute("current-item", `${dataLocation}`);
  e.classList.add("Moto__box__logo__options__items--change-fill");
  boxBarLineRowDown.style.left = `${
    e.clientWidth * dataLocation
  }px`;
  boxImg.classList.add("Moto__box__img__changed--items")
 if(window.innerWidth < 900) {
  e.style.order = '-1'
  boxBarLineRowDown.style.left = `${
    0
  }px`;
 };
}

export { handleChangeImgMotoWhenClickLogo };
