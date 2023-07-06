import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import Sec1img from "../assets/images/Sec1.png";
import Sec2img from "../assets/images/Sec2.png";
import Sec3img from "../assets/images/Sec3.png";
import Sec4img from "../assets/images/Sec4.png";
import Sec5img from "../assets/images/Sec5.png";
import Sec6img from "../assets/images/Sec6.png";
import Sec7img from "../assets/images/Sec7.png";
import Sec8img from "../assets/images/Sec8.png";

const Section6 = () => {
  return (
    <Wrapper className="container">
      <h2 data-aos="fade-up" className="section-title">
        ПАРТНЕРЫ
      </h2>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={40}
        slidesPerView={4}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="slide-item">
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec1img} alt="" />
          </div>
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec2img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec3img} alt="" />
          </div>
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec4img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec5img} alt="" />
          </div>
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec6img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec7img} alt="" />
          </div>
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec8img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec1img} alt="" />
          </div>
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec2img} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec3img} alt="" />
          </div>
          <div data-aos="flip-down" className="slide-img">
            <img src={Sec4img} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Section6;

const Wrapper = styled.div`
  margin-bottom: 130px;
  .section-title {
    margin-bottom: 56px;
  }

  .swiper {
    padding: 0 40px;
  }

  .slide-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .slide-img {
      width: 275px;
      height: 130px;
      border-radius: 30px;
      border: 1px solid #ececec;
      background: #fff;
      display: grid;
      place-content: center;
      overflow: hidden;
      cursor: pointer;

      img {
        transition: all 0.2s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: linear-gradient(180deg, #0d4c93 0%, #00c9c9 100%);
    padding: 15px;
    margin-left: -10px;
    margin-right: -10px;
    &::after {
      color: white;
      font-size: 20px;
      font-weight: 900;
    }
  }

  @media (max-width: 1440px) {
    margin-bottom: 80px;
    .section-title {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 1025px) {
    .slide-item {
      .slide-img {
        width: 200px;
        height: 100px;
      }
    }
  }
`;
