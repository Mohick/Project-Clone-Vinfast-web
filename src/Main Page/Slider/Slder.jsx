import { useEffect, useState } from "react";
import "./Slider Max-width 600px.css";
import { handleArrowSlider } from "./handle Slider";

function Slider() {
  const [stop, setStop] = useState(0);
  useEffect(() => {
    let myTimeout = setInterval(handleArrowSlider, 3500);
    return () => {
      clearInterval(myTimeout);
    };
  }, [stop]);
  return (
    <div id="slider" className="slider__first--img" >
      <div className="slider__box-arrow">
        <div
          className="slider__arrow--left"
          onClick={() => {
            handleArrowSlider();
            setStop(stop+1)
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 320 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </div>
        <div
          className="slider__arrow--right"
          onClick={() => {
            handleArrowSlider();
            setStop(stop+1)
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </div>
      </div>
      <div className="slider__btn--dots">
        <div
          className="slider__btn__dots--first slider__btn__dots--active"
          onClick={() => {
            handleArrowSlider();
            setStop(stop+1)
          }}
        ></div>
        <div
          className="slider__btn__dots--seccond"
          onClick={() => {
            setStop(stop+1)
            handleArrowSlider();
          }}
        ></div>
      </div>
    </div>
  );
}

export default Slider;
