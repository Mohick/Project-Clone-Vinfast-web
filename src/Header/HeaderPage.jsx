import { Link } from "react-router-dom";
import "./Header max-witdh 600px.css";
import "./Header min-witdh 600px.css";
import "./Header min-witdh 900px.css";
import { handleShowModal } from "../Modal Menu/handle show modal";

function HeaderPage() {
  return (
    <div id="header">
      <div className="layout  header__container">
        <div className="header__box--mobi">
          <Link to={"#"} className="header__mobi--logo">
            <img src="./Logo/logo-mobile.svg" alt="" />
          </Link>
          <div className="header__mobi__box--menu--login">
            <Link to="#login" className="header__mobi--login">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </Link>
            <div className="header__mobi--menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 
                0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="header__box--pc">
          <Link to={"/"} className="header__pc--logo">
            <img
              src="https://vinfastauto.com/themes/porto/img/new-home-page/VinFast-logo.svg"
              alt=""
            />
          </Link>
          <div className="header__pc--navogation">
            <Link className="header__pc--navogation--items " to={"#Giới thiệu"}>
              Giới thiệu
            </Link>

            <Link className="header__pc--navogation--items" to={"#ô tô"}>
              ô tô
            </Link>

            <Link className="header__pc--navogation--items" to={"#xe máy điện"}>
              xe máy điện
            </Link>
            <Link className="header__pc--navogation--items" to={"#dịch vụ hậu mãi"}>
              dịch vụ hậu mãi
            </Link>
            <Link className="header__pc--navogation--items" to={"#pin và trạm sạc"}>
              pin và trạm sạc 
            </Link>
          </div>
          <div className="header__pc__box--menu--login--test-driver">
            <Link className="header__pc--login" to={"#tai khoan"}>
              Tài Khoản
            </Link>
            <Link className="header__pc--test-driver" to={"#dang ky lai thu"}>
              Đăng kí Lái Thử
            </Link>
            <div className="header__pc--menu" onClick={handleShowModal}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 
                0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
