import "./Login Max-width 600px.css";
import "./Login Min-width 900px.css";
import { handleChangesForm } from "./handle changes form";
import { handleShowPassword } from "./handle show password";
function Login() {
  return (
    <div id="login">
      <div className="login__container layout">
        <div className="login__box--items">
          <div className="login__box__items--sign-up">
            <div className="login__box__items__sign-up--title">
              Đăng ký tài khoản
            </div>
            <div className="login__box__items__sign-up__input-and-length">
              <div className="login__box__items__sign-up--input">
                <input
                  className="login__box__items__sign-up__input--user"
                  type="text"
                  placeholder="Họ Và Tên"
                  maxLength={"80"}
                />
              </div>
              <div className="login__box__items__sign-up--length">
                <div className="login__box__items__sign-up__length--current">
                  0
                </div>
                <div className="login__box__items__sign-up__length--bar">/</div>
                <div className="login__box__items__sign-up__length--max">
                  80
                </div>
              </div>
            </div>
            <div className="login__box__items__sign-up__input">
              <input
                className="login__box__items__sign-up__input--email"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
            </div>
            <div className="login__box__items__sign-up__input-and-icon">
              <div className="login__box__items__sign-up--input">
                <input
                  className="login__box__items__sign-up__input--password"
                  type="password"
                  placeholder="Mật Khẩu"
                />
              </div>
              <div className="login__box__items__sign-up--icon">
                <div className="login__box__items__sign-up__icon--default">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4
                     399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5
                      68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7
                       7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                    />
                  </svg>
                </div>
                <div className="login__box__items__sign-up__icon--show">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 
                    526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0
                     24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 
                     336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="login__box__items__sign-up__input-and-icon">
              <div className="login__box__items__sign-up--input">
                <input
                  className="login__box__items__sign-up__input--password"
                  type="password"
                  placeholder="Nhập Lại Mật Khẩu"
                />
              </div>
              <div className="login__box__items__sign-up--icon">
                <div className="login__box__items__sign-up__icon--default">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4
                     399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5
                      68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7
                       7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                    />
                  </svg>
                </div>
                <div className="login__box__items__sign-up__icon--show">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 
                    526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0
                     24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 
                     336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="login__box__items__sign-up--rules">
              <div className="login__box__items__sign-up__rules--title">
                Mật khẩu bao gồm
              </div>
              <div className="login__box__items__sign-up__rules--body">
                <div className="login__box__items__sign-up__rules__body--icon-text">
                  <div className="login__box__items__sign-up__rules__body--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </div>
                  <div className="login__box__items__sign-up__rules__body--text">
                    Ít nhất 8 ký tự
                  </div>
                </div>
                <div className="login__box__items__sign-up__rules__body--icon-text">
                  <div className="login__box__items__sign-up__rules__body--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </div>
                  <div className="login__box__items__sign-up__rules__body--text">
                    Chữ hoa & chữ thường
                  </div>
                </div>
                <div className="login__box__items__sign-up__rules__body--icon-text">
                  <div className="login__box__items__sign-up__rules__body--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </div>
                  <div className="login__box__items__sign-up__rules__body--text">
                    Ít nhất 1 số
                  </div>
                </div>
              </div>
            </div>
            <div className="login__box__items__sign-up--policy">
              Bằng việc bấm nút Đăng ký bên dưới, tôi xác nhận đã đọc, hiểu và
              đồng ý với các <span>Điều kiện và Điều khoản</span>
              của VinFast.
            </div>
            <div className="login__box__items__sign-up--agree-policy">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                Đăng ký nhận thông tin chương trình khuyến mãi, dịch vụ từ
                VinFast
              </label>
            </div>
            <div className="login__box__items__sign-up--btn">Đăng ký</div>
            <div className="login__box__items__sign-up--question">
              Đã có tài khoản?
            </div>
            <div
              className="login__box__items__sign-up--btn-sign-up"
              onClick={handleChangesForm}
            >
              Đăng nhập
            </div>
          </div>
          <div className="login__box__items--sign-in">
            <div className="login__box__items__sign-in--title">Đăng nhập</div>
            <div className="login__box__items__sign-in--input">
              <input
                className="login__box__items__sign-in__input--email"
                type="email"
                name=""
                placeholder="Email"
                id=""
              />
            </div>
            <div className="login__box__items__sign-in__input-and-icon">
              <div className="login__box__items__sign-in--input">
                <input
                  className="login__box__items__sign-in__input--password"
                  type="password"
                  placeholder="Mật Khẩu"
                />
              </div>
              <div className="login__box__items__sign-in--icon" onClick={handleShowPassword}>
                <div className="login__box__items__sign-in__icon--default">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4
                     399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5
                      68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7
                       7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                    />
                  </svg>
                </div>
                <div className="login__box__items__sign-in__icon--show">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 
                    526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0
                     24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 
                     336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="login__box__items__sign-in--get-forget-or-rememo-password">
              <div className="login__box__items__sign-in--rememo-password">
                <input type="checkbox" />
                <label>Ghi nhớ tài khoản</label>
              </div>
              <div className="login__box__items__sign-in--rememo-password">
                Quên mật khẩu?
              </div>
            </div>
            <div className="login__box__items__sign-in--btn">Đăng nhập</div>
            <div className="login__box__items__sign-in--question">
              Chưa có tài khoản?
            </div>
            <div
              className="login__box__items__sign-in--btn-sign-up"
              onClick={handleChangesForm}
            >
              Đăng ký tài khoản
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
