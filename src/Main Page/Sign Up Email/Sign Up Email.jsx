import "./Sign Up Email. Max-width 600px.css";
import "./Sign Up Email. Min-width 600px.css";
import "./Sign Up Email. Min-width 900px.css";
import { handleSignUpEmailWhenBlur } from "./handle Sign Up email";
function SignUpEmail() {
  return (
    <div id="sign__up__email">
      <div className="sign__up__email__container layout">
        <div className="sign__up__email__box--title">
          <div className="sign__up__email--title">Đăng ký nhận thông tin</div>
          <div className="sign__up__email--description">
            Đăng ký nhận thông tin chương trình khuyến mãi, dịch vụ VinFast.
          </div>
        </div>
        <div className="sign__up__email__box__sign-up">
          <div className="sign__up__email__box__sign_up--input">
            <input
              placeholder="Nhập Email Của Bạn"
              className="sign__up__email__box__sign_up__input--email"
              type="email"
            />
            <div
              onClick={handleSignUpEmailWhenBlur}
              className="sign__up__email__box__sign_up__input--btn "
              type="button"
              value={"Đăng Ký"}
            >
              Đăng Ký
              <div className="sign__up__email__box__sign_up__input__btn--correct" onClick={e=>e.stopPropagation()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="sign__up__email__box__sign_up--alert">
            Vui lòng nhập email
          </div>
        </div>
        <div className="sign__up__email__box__sub--title">
          Bằng cách đăng ký, Quý khách xác nhận đã đọc, hiểu và đồng ý với{" "}
          <span className="sign__up__email__box__sub__title--policy">
            Chính sách Quyền riêng tư
          </span>{" "}
          của VinFast.
        </div>
      </div>
    </div>
  );
}

export default SignUpEmail;
