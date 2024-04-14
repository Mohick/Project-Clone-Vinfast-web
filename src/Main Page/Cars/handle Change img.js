function handleChangeImgCarsWhenClickLogo(e) {
  const arrayItemsLogo = document.querySelectorAll(
    ".Cars__box__logo__options--items"
  );
  arrayItemsLogo.forEach((item) => {
    if (item.getAttribute("current-item")) {
      item.removeAttribute("current-item");
      item.classList.remove("Cars__box__logo__options__items--change-fill");
      if(window.innerWidth < 900) {
        item.style.order = '1'
       }
      return;
    }
  });
  const dataImage = e.getAttribute("data-img");
  const dataSeat = e.getAttribute("data-seat");
  const dataPrice = e.getAttribute("data-price");
  const dataKind = e.getAttribute("data-kind");
  const dataLocation = e.getAttribute("data-location");
  const dataDistance = e.getAttribute("data-distance");
  const boxImg = document.querySelector(".Cars__box--items--img img");
  const boxBarLineRowDown = document.querySelector(".Cars__box__bar--down");
  const boxKind = document.querySelector(
    ".Cars__box__items__detail__parameter--kind .Cars__box__items__detail__parameter--value"
  );
  const boxSeat = document.querySelector(
    ".Cars__box__items__detail__parameter--seat .Cars__box__items__detail__parameter--value"
  );
  const boxPrice = document.querySelector(
    ".Cars__box__items__detail__parameter--price .Cars__box__items__detail__parameter--value"
  );
  const boxDistance = document.querySelector(
    ".Cars__box__items__detail__parameter--distance .Cars__box__items__detail__parameter--value"
  );
  const btnDeposit = document.querySelector(
    ".Cars__box__items__detail__btn--deposit"
  );
  const btnViewMore = document.querySelector(
    ".Cars__box__items__detail__btn--views-more"
  );
  boxImg.classList.remove("Cars__box__img__changed--items")
  boxImg.src = dataImage;
  boxKind.innerHTML = dataKind;
  boxSeat.innerHTML = `${dataSeat} Chỗ`;
  boxPrice.innerHTML = `${dataPrice} VNĐ`;
  boxDistance.innerHTML = `${dataDistance} Km`;
  btnDeposit.href = `#Đặt cọc ${dataKind}`;
  btnViewMore.href = `#Xem chi tiết ${dataKind}`;
  e.setAttribute("current-item", `${dataLocation}`);
  e.classList.add("Cars__box__logo__options__items--change-fill");
  boxBarLineRowDown.style.left = `${
    e.clientWidth * dataLocation
  }px`;
  boxImg.classList.add("Cars__box__img__changed--items")
 if(window.innerWidth < 900) {
  e.style.order = '-1'
  boxBarLineRowDown.style.left = `${
    0
  }px`;
 };
}

export { handleChangeImgCarsWhenClickLogo };
