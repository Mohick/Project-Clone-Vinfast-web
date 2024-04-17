import { Link } from "react-router-dom";
import "./Serviced Max-width 600px.css";
import "./Serviced Min-width 600px.css";
import "./Serviced Min-width 900px.css";
function Serviced() {
  return (
    <div id="serviced">
      <div className="serviced__container layout">
        <div className="serviced__box">
          <div className="serviced__box--text ">
            <div className="serviced__box__text--title">Bảo hành & Dịch vụ</div>
            <div className="serviced__box__text--description">
              VinFast đã đầu tư nghiêm túc và bài bản để phát triển hệ thống
              Showroom, Nhà phân phối và xưởng dịch vụ rộng khắp, đáp ứng tối đa
              nhu cầu của Khách hàng.
            </div>
          </div>
          <div className="serviced__box--btn">
            <Link
              className="serviced__box__btn--maintenance-schedule"
              to={"#Đặt lịch bảo dưỡng"}
            >
              Đặt lịch bảo dưỡng
            </Link>
            <Link className="serviced__box__btn--policy" to={"#Chính sách"}>
              Chính sách
            </Link>
          </div>
        </div>
      </div>
      <div className="service__bg"></div>
    </div>
  );
}

export default Serviced;
