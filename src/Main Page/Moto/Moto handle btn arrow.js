import { handleChangeImgMotoWhenClickLogo } from "./Moto handle Change img";
function handlebtnArrowWhenClick(valueBtn) {
  const arrayItemsLogo = document.querySelectorAll(
    ".Moto__box__logo__options--items"
  );
  switch (!!valueBtn) {
    case ("" + valueBtn).trim().toLowerCase() == "next".trim().toLowerCase():
      for (let i = 0; i < arrayItemsLogo.length; i++) {
        if (!!arrayItemsLogo[i].getAttribute("current-item")) {
          sendDataWhenHaveItem(( i+1 ) > (arrayItemsLogo.length - 1) ? 0 : i + 1 );
          return;
        }
      }

      break;
    case ("" + valueBtn).trim().toLowerCase() == "prev".trim().toLowerCase():
      for (let i = 0; i < arrayItemsLogo.length; i++) {
        if (!!arrayItemsLogo[i].getAttribute("current-item")) {
       
          sendDataWhenHaveItem((i - 1) < 0 ? (arrayItemsLogo.length - 1 ): i -1 );
          return;
        }
      }
      break;
    default:
      alert("Have Error: ./src/Main Page/Moto/handle btn arrow.jx");
  }
}
function sendDataWhenHaveItem(index) {
  const arrayItemsLogo = document.querySelectorAll(
    ".Moto__box__logo__options--items"
  );
    handleChangeImgMotoWhenClickLogo(arrayItemsLogo[index])


}
export { handlebtnArrowWhenClick };
