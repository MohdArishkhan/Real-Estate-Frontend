import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../utils/slider.json";
import { slidersettings } from "../utils/common.js";
function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerwidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        {/* slide-section */}
        <Swiper {...slidersettings}>
          <SliderButtons />
          {data.map((Card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={Card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{Card.price}</span>
                </span>
                <span className="primaryText">{Card.name}</span>
                <span className="secondaryText">{Card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button className="button button1" onClick={() => swiper.slidePrev()}>&lt;</button>
      <button className="button button1" onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
