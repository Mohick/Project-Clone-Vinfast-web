import { Link } from "react-router-dom";
import "./Header max-witdh 600px.css";
import "./Header min-witdh 600px.css";
import "./Header min-witdh 900px.css";
import { handleShowModal } from "../Modal Menu/handle show modal";
import { showOptionsCars } from "./handle Show option header";

function HeaderPage() {
  return (
    <div id="header">
      <div className="layout  header__container">
        <div className="header__box--mobi">
          <Link to={"/"} className="header__mobi--logo">
            <img src="./Logo/logo-mobile.svg" alt="" />
          </Link>
          <div className="header__mobi__box--menu--login">
            <Link to="/login" className="header__mobi--login">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </Link>
            <div className="header__mobi--menu" onClick={handleShowModal}>
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
          <div className="header__pc--navigation">
            <Link className="header__pc--navigation--items " to={"#Giới thiệu"}>
              Giới thiệu
            </Link>

            <div className="header__pc--navigation--items" to={"#ô tô"}>
              ô tô
              <div className="header__pc__box--navigation--items--options">
                <div className="header__pc__navigation--items--options--cars layout">
                  <div className="header__pc__box__navigation--items--options--views">
                    <div
                      onClick={showOptionsCars}
                      className="header__pc__navigation--items--options--views--cars-eletric header__pc__navigation--items--options--views-scale"
                    >
                      Động cơ điện
                    </div>
                    <div
                      onClick={showOptionsCars}
                      className="header__pc__navigation--items--options--views--cars-oil"
                    >
                      Động cơ xăng
                    </div>
                  </div>
                  <div className="header__pc__box__navigation--items--options--cars">
                    <div className="header__pc__box__navigation--items--options--cars-eletric header__pc__box__navigation--items--options--cars-show">
                      <Link
                        to={"#VF 5 Plus"}
                        className="header__pc__navigation--sub--items header__pc__navigation--sub--items-1"
                      >
                        <div className="header__pc__navigation--sub--items--img header__pc__navigation--sub--items--img-1"></div>
                        <div className="header__pc__navigation--sub--items--img--name header__pc__navigation--sub--items--name-1">
                          {" "}
                          VF 5 Plus
                        </div>
                      </Link>
                      <Link
                        to={"#VF 6"}
                        className="header__pc__navigation--sub--items header__pc__navigation--sub--items-2"
                      >
                        <div className="header__pc__navigation--sub--items--img header__pc__navigation--sub--items--img-2"></div>
                        <div className="header__pc__navigation--sub--items--img--name header__pc__navigation--sub--items--name-2">
                          {" "}
                          VF 6
                        </div>
                      </Link>
                      <Link
                        to={"#VF e34"}
                        className="header__pc__navigation--sub--items header__pc__navigation--sub--items-3"
                      >
                        <div className="header__pc__navigation--sub--items--img header__pc__navigation--sub--items--img-3"></div>
                        <div className="header__pc__navigation--sub--items--img--name header__pc__navigation--sub--items--name-3">
                          {" "}
                          VF e34
                        </div>
                      </Link>
                      <Link
                        to={"#VF 7"}
                        className="header__pc__navigation--sub--items header__pc__navigation--sub--items-4"
                      >
                        <div className="header__pc__navigation--sub--items--img header__pc__navigation--sub--items--img-4"></div>
                        <div className="header__pc__navigation--sub--items--img--name header__pc__navigation--sub--items--name-4">
                          {" "}
                          VF 7
                        </div>
                      </Link>
                      <Link
                        to={"#VF 8"}
                        className="header__pc__navigation--sub--items header__pc__navigation--sub--items-5"
                      >
                        <div className="header__pc__navigation--sub--items--img header__pc__navigation--sub--items--img-5"></div>
                        <div className="header__pc__navigation--sub--items--img--name header__pc__navigation--sub--items--name-5">
                          {" "}
                          VF 8
                        </div>
                      </Link>
                      <Link
                        to={"#VF 9"}
                        className="header__pc__navigation--sub--items header__pc__navigation--sub--items-6"
                      >
                        <div className="header__pc__navigation--sub--items--img header__pc__navigation--sub--items--img-6"></div>
                        <div className="header__pc__navigation--sub--items--img--name header__pc__navigation--sub--items--name-6">
                          {" "}
                          VF 9
                        </div>
                      </Link>
                    </div>
                    <div className="header__pc__box__navigation--items--options--cars-oil ">
                      <Link className="header__pc__navigation--sub--items header__pc__navigation--sub--items--car--oli-1"></Link>
                      <Link
                        to={"#Fadil"}
                        className="header__pc__navigation--sub--items header__pc__navigation--sub--items-2"
                      >
                        <div className="header__pc__navigation--sub--items--img header__pc__navigation--sub--items--car--oli-2"></div>
                        <div className="header__pc__navigation--sub--items--img--name header__pc__navigation--sub--items--name--car--oli-2">
                          {" "}
                          Fadil
                        </div>
                      </Link>
                      <Link
                        to={"#LUX A2.0"}
                        className="header__pc__navigation--sub--items header__pc__navigation--sub--items-3"
                      >
                        <div className="header__pc__navigation--sub--items--img header__pc__navigation--sub--items--car--oli-3"></div>
                        <div className="header__pc__navigation--sub--items--img--name header__pc__navigation--sub--items--name--car--oli-3">
                          {" "}
                          LUX A2.0
                        </div>
                      </Link>
                      <Link
                        to={"#LUX SA2.0"}
                        className="header__pc__navigation--sub--items header__pc__navigation--sub--items-4"
                      >
                        <div className="header__pc__navigation--sub--items--img header__pc__navigation--sub--items--car--oli-4"></div>
                        <div className="header__pc__navigation--sub--items--img--name header__pc__navigation--sub--items--name--car--oli-4">
                          {" "}
                          LUX SA2.0
                        </div>
                      </Link>
                      <Link
                        to={"#President"}
                        className="header__pc__navigation--sub--items header__pc__navigation--sub--items-5"
                      >
                        <div className="header__pc__navigation--sub--items--img header__pc__navigation--sub--items--car--oli-5"></div>
                        <div className="header__pc__navigation--sub--items--img--name header__pc__navigation--sub--items--name--car--oli-5">
                          {" "}
                          President
                        </div>
                      </Link>
                      <Link className="header__pc__navigation--sub--items header__pc__navigation--sub--items-6"></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link className="header__pc--navigation--items" to={"#xe máy điện"}>
              xe máy điện
            </Link>
            <div
              className="header__pc--navigation--items"
              to={"#dịch vụ hậu mãi"}
            >
              dịch vụ hậu mãi
              <div className="header__pc__box--navigation--items--options">
                <div className="header__pc__navigation--items--options--service layout">
                  <div className="header__pc__box__navigation--items--options--service--items">
                    <div className="header__pc__navigation--items--options--service--items--name">
                      BẢO HÀNH & BẢO DƯỠNG
                    </div>
                    <div className="header__pc__navigation--items--options--service--items--body">
                      <Link className="header__pc__navigation--items--options--service--items--choose">
                        Thông tin bảo hành
                      </Link>
                      <Link className="header__pc__navigation--items--options--service--items--choose">
                        Thông tin bảo dưỡng định kỳ
                      </Link>
                      <Link className="header__pc__navigation--items--options--service--items--choose">
                        Thông tin dịch vụ
                      </Link>
                    </div>
                  </div>
                  <div className="header__pc__box__navigation--items--options--service--items">
                    <div className="header__pc__navigation--items--options--service--items--name">
                      HƯỚNG DẪN SỬ DỤNG
                    </div>
                    <div className="header__pc__navigation--items--options--service--items--body">
                      <Link className="header__pc__navigation--items--options--service--items--choose">
                        Hướng dẫn sử dụng ô tô
                      </Link>
                      <Link className="header__pc__navigation--items--options--service--items--choose">
                        Hướng dẫn sử dụng xe máy điện
                      </Link>
                      <Link className="header__pc__navigation--items--options--service--items--choose">
                        Hướng dẫn sử dụng VinFast App
                      </Link>
                      <Link className="header__pc__navigation--items--options--service--items--choose">
                        Hướng dẫn ứng phó khẩn cấp
                      </Link>
                    </div>
                  </div>
                  <div className="header__pc__box__navigation--items--options--service--book-a-schedule">
                    <Link className="header__pc__navigation--items--options--service--btn--book-a-schedule">
                      đặt lịch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="header__pc--navigation--items"
              to={"#pin và trạm sạc"}
            >
              pin và trạm sạc
              <div className="header__pc__box--navigation--items--options">
                <div className="header__pc__navigation--items--options--pin layout">
                  <Link className="header__pc__navigation--items--options--pin--items">
                    <div className="header__pc__navigation--items--options--pin--items--img"><img width={'100%'} src="https://storage.googleapis.com/vinfast-data-01/pin-o-to_1657015096.png" alt="" /></div>
                    <div className="header__pc__navigation--items--options--pin--items--title">Pin và trạm sạc Ô tô điện</div>
                  </Link>

                  <Link className="header__pc__navigation--items--options--pin--items">
                  <div className="header__pc__navigation--items--options--pin--items--img"><img width={'100%'} src="https://storage.googleapis.com/vinfast-data-01/pin-xe-dien_1657015108.png" alt="" /></div>
                    <div className="header__pc__navigation--items--options--pin--items--title">Pin và trạm sạc Ô tô điện</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="header__pc__box--menu--login--test-driver">
            <Link className="header__pc--login" to={"/login"}>
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
