import { Link } from "react-router-dom";
import "./Tools And  Station  Charging max-width 600px.css";
import "./Tools And  Station  Charging min-width 600px.css";
import "./Tools And  Station  Charging min-width 900px.css";

function ToolsAndStationCharging() {
  return (
    <div id="tools__and__Station__charging">
      <div className="tools__and__Station__charging--container layout">
        <div className="tools__and__Station__charging__first--items">
          <div className="tools__and__Station__charging__first__items--img">
            <div className="tools__and__Station__charging__first__items--title">
              Pin & Trạm sạc ô tô điện
              <div className="tools__and__Station__charging__first__items__name__title__box--description">
                <div className="tools__and__Station__charging__first__items__name--description">
                  Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu,
                  VinFast áp dụng chính sách cho thuê pin độc đáo, ưu việt và
                  khác biệt với tất cả các mô hình cho thuê pin từ trước tới nay
                  trên thế giới.
                </div>
                <Link
                  className="tools__and__Station__charging__first__items__name--view-more"
                  to={"#Pin & Trạm sạc ô tô điện"}
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
          <div className="tools__and__Station__charging__first__items--img">
            <div className="tools__and__Station__charging__first__items--title">
              Pin & Trạm sạc xe máy điện
              <div className="tools__and__Station__charging__first__items__name__title__box--description">
                <div className="tools__and__Station__charging__first__items__name--description">
                  Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu,
                  VinFast áp dụng chính sách cho thuê pin độc đáo, ưu việt và
                  khác biệt với tất cả các mô hình cho thuê pin từ trước tới nay
                  trên thế giới.
                </div>
                <Link
                  className="tools__and__Station__charging__first__items__name--view-more"
                  to={"#  Pin & Trạm sạc xe máy điện"}
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="tools__and__Station__charging__seccond--items">
          <div className="tools__and__Station__charging__seccond__items--name">
            <div className="tools__and__Station__charging__seccond__items__name--title">
              Thiết bị sạc di động
            </div>
            <div className="tools__and__Station__charging__seccond__items__name--description">
              VinFast cung cấp đa dạng giải pháp sạc để đáp ứng nhu cầu sử dụng
              của khách hàng một cách thuận tiện nhất.
            </div>
            <Link
              className="tools__and__Station__charging__seccond__items__name--view-more"
              to={"#Xem chi tiết"}
            >
              Xem chi tiết
            </Link>
          </div>
          <div className="tools__and__Station__charging__seccond__items--img">
            <img
              width={"100%"}
              src="./Pin and station charging/mobile-charger.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsAndStationCharging;
