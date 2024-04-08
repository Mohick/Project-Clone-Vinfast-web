import "./Modal Menu max-witdh 600px.css";
import "./Modal Menu min-witdh 900px.css";
import "./Modal Menu min-witdh 600px.css";
import { Link } from "react-router-dom";
import { handleShowModal, handleShowSubModal } from "./handle show modal";
function ModalMenuPage() {
  return (
    <div id="menu" onClick={handleShowModal} className="">
      <div className="menu__container layout">
        <div className="menu__box--pc " onClick={(e) => e.stopPropagation()}>
          <div className="menu__pc__box--btn-close  ">
            <div className="menu__pc--btn-close" onClick={handleShowModal}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 
                33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                />
              </svg>
            </div>
          </div>
          <div className="menu__pc__box--items ">
            <div className="menu__pc--items">
              <div className="menu__pc--items--title">Tiện ích</div>
              <div className="menu__pc--items--options">
                <Link
                  onClick={handleShowModal}
                  className="menu__pc--items--option"
                  to={"#so sánh xe"}
                >
                  so sánh xe
                </Link>
                <Link
                  onClick={handleShowModal}
                  className="menu__pc--items--option"
                  to={"#dự toán chi phí lăn bánh"}
                >
                  dự toán chi phí lăn bánh
                </Link>
                <Link
                  onClick={handleShowModal}
                  className="menu__pc--items--option"
                  to={"#dự toán vay trả góp"}
                >
                  dự toán vay trả góp
                </Link>
                <Link
                  onClick={handleShowModal}
                  className="menu__pc--items--option"
                  to={"#thẩm định vay trả góp"}
                >
                  thẩm định vay trả góp
                </Link>
              </div>
            </div>
            <div className="menu__pc--items">
              <div className="menu__pc--items--title">Tin Tức</div>
              <div className="menu__pc--items--options">
                <Link
                  onClick={handleShowModal}
                  className="menu__pc--items--option"
                  to={"#công ty"}
                >
                  công ty
                </Link>
                <Link
                  onClick={handleShowModal}
                  className="menu__pc--items--option"
                  to={"#cộng đồng"}
                >
                  cộng đồng
                </Link>
              </div>
            </div>
            <div className="menu__pc--items">
              <div className="menu__pc--items--title">hỗ trợ</div>
              <div className="menu__pc--items--options">
                <Link
                  onClick={handleShowModal}
                  className="menu__pc--items--option"
                  to={"#Tìm Showroom & Trạm sạc"}
                >
                  Tìm Showroom & Trạm sạc
                </Link>
                <Link
                  onClick={handleShowModal}
                  className="menu__pc--items--option"
                  to={"#Câu hỏi thường gặp"}
                >
                  Câu hỏi thường gặp
                </Link>
              </div>
            </div>
            <div className="menu__pc--items">
              <div className="menu__pc--items--title">Mua sắm</div>
              <div className="menu__pc--items--options">
                <Link
                  onClick={handleShowModal}
                  className="menu__pc--items--option"
                  to={"#Phụ kiện xe"}
                >
                  Phụ kiện xe
                </Link>
              </div>
            </div>
            <div className="menu__pc--items">
              <div className="menu__pc--items--title">Thảo luận</div>
              <div className="menu__pc--items--options">
                <Link
                  onClick={handleShowModal}
                  className="menu__pc--items--option"
                  to={"#Cộng đồng VinFast Toàn cầu"}
                >
                  Cộng đồng VinFast Toàn cầu
                </Link>
              </div>
            </div>
            <div className="menu__pc__box--choose-language">
              <div
                onClick={handleShowSubModal}
                className="menu__pc__items--choose-language"
              >
                <div className="menu__pc__items--language--title">
                  Lựa chọn quốc gia
                </div>
                <div className="menu__pc__items--language--option">
                  Việt Nam
                </div>
              </div>
            </div>
          </div>
          <div className="menu__pc--sub-menu ">
            <div className="menu__pc--sub-menu__box--btn-close ">
              <div
                onClick={handleShowSubModal}
                className="menu__pc--sub-menu--btn-close "
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 
                33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                  />
                </svg>
              </div>
            </div>
            <div className="menu__pc__container__sub-menu--items">
              <div className="menu__pc__box__sub-menu--items">
                <div className="menu__pc__sub-menu--continent">Bắc Mỹ</div>
                <div className="menu__pc__sub-menu__box--erea">
                  <div className="menu__pc__sub-menu--area">United States</div>
                  <div className="menu__pc__sub-menu--area--options">
                    <Link
                      onClick={handleShowSubModal}
                      to={"#english"}
                      className="menu__pc__sub-menu--area--options--language"
                    >
                      English
                    </Link>
                  </div>
                </div>
                <div className="menu__pc__sub-menu__box--erea">
                  <div className="menu__pc__sub-menu--area">Cannada</div>
                  <div className="menu__pc__sub-menu--area--options">
                    <Link
                      onClick={handleShowSubModal}
                      to={"#english"}
                      className="menu__pc__sub-menu--area--options--language"
                    >
                      English
                    </Link>
                    <Link
                      onClick={handleShowSubModal}
                      to={"#francais"}
                      className="menu__pc__sub-menu--area--options--language"
                    >
                      Francais
                    </Link>
                  </div>
                </div>
              </div>
              <div className="menu__pc__box__sub-menu--items">
                <div className="menu__pc__sub-menu--continent">Châu Âu </div>
                <div className="menu__pc__sub-menu__box--erea">
                  <div className="menu__pc__sub-menu--area">France</div>
                  <div className="menu__pc__sub-menu--area--options">
                    <Link
                      onClick={handleShowSubModal}
                      to={"#francais"}
                      className="menu__pc__sub-menu--area--options--language"
                    >
                      Francais
                    </Link>
                  </div>
                </div>
              </div>
              <div className="menu__pc__box__sub-menu--items">
                <div className="menu__pc__sub-menu--continent">Châu á </div>
                <div className="menu__pc__sub-menu__box--erea">
                  <div className="menu__pc__sub-menu--area">Việt Nam</div>
                  <div className="menu__pc__sub-menu--area--options">
                    <Link
                      onClick={handleShowSubModal}
                      to={"#tiếng việt"}
                      className="menu__pc__sub-menu--area--options--language"
                    >
                      Tiếng Việt
                    </Link>
                    <Link
                      onClick={handleShowSubModal}
                      to={"#english"}
                      className="menu__pc__sub-menu--area--options--language"
                    >
                      English
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu__box--mobi  " onClick={(e) => e.stopPropagation()}>
          <div className="menu__mobi__box--btn--close">
            <div className="menu__mobi__btn--close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256
                   7.4 427.5c-11.3 13.6-9.5 33.8 4.1 
                45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                />
              </svg>
            </div>
          </div>
          <div className="menu__mobi__box--options">
            <div className="menu__mobi__box--options--items">
              <div className="menu__mobi__box--options--choose">
                <div className="menu__mobi__box--options--choose--items">
                  <div className="menu__mobi__box__options--title">
                    <div className="menu__mobi__options--title">Ô tô</div>
                    <div className="menu__mobi__box__options--views-all">
                      <Link
                        className="menu__mobi__options--views-all  "
                        to={"#xem tất cả"}
                      >
                        Xem Tất Cả
                      </Link>
                      <div className="menu__mobi__box__options--icon">
                        <div className="menu__mobi__options--arrow-down menu__mobi__options--arrow-show">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                          </svg>
                        </div>
                        <div className="menu__mobi__options--arrow-up">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu__mobi__container__options--items">
                    <div className="menu__mobi__options--item--title">Động cơ điện</div>
                    <div className="menu__mobi__options--items">
                      <Link to={'#VF 5 Plus'} className="menu__mobi__options--item">VF 5 Plus</Link>
                      <Link to={'#VF 6'} className="menu__mobi__options--item">VF 6</Link>
                      <Link to={'#VF e34'} className="menu__mobi__options--item">VF e34</Link>
                      <Link to={'#VF 7'} className="menu__mobi__options--item">VF 7</Link>
                      <Link to={'#VF 8'} className="menu__mobi__options--item">VF 8</Link>
                      <Link to={'#VF 9'} className="menu__mobi__options--item">VF 9</Link>
                    </div>
                    <div className="menu__mobi__options--item--title">Động cơ xăng</div>
                    <div className="menu__mobi__options--items">
                      <Link to={'#Fadil'} className="menu__mobi__options--item">Fadil</Link>
                      <Link to={'#Lux A2.0'} className="menu__mobi__options--item">Lux A2.0</Link>
                      <Link to={'#Lux SA2.0'} className="menu__mobi__options--item">Lux SA2.0</Link>
                      <Link to={'#President'} className="menu__mobi__options--item">President</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalMenuPage;
