import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import ButtonLinear from "./ButtonLinear";

const Carousel = ({ data }) => {
  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="swiper-left">
                <b data-aos="fade-right">{item.title}</b>
                <p data-aos="fade-right">{item.text}</p>
                <ButtonLinear data-aos="fade-right">
                  {item.buttonText}
                </ButtonLinear>
              </div>
              <img data-aos="fade-left" src={item.img} alt={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  .swiper {
    z-index: 0;
  }
  .swiper-slide {
    display: flex;
    align-items: center;

    .swiper-left {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: flex-start;

      b {
        color: #0d4c93;
        font-size: 50px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 4.5px;
        width: 80%;
      }

      p {
        color: #363535;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 40px;
      }
    }

    img {
    }
  }

  .swiper-pagination {
    z-index: 99;
    position: relative;
    margin-top: 40px;
    &-bullet {
      width: 25px;
      height: 25px;
      border-radius: 25px;
      border: 1px solid #00c9c9;
      background: #fff;

      &-active {
        background: #00c9c9;
      }
    }
  }

  @media (max-width: 1440px) {
    .swiper-slide {
      .swiper-left {
        gap: 25px;
        b {
          font-size: 40px;
        }

        p {
          font-size: 18px;
        }
      }

      img {
        width: 50%;
      }
    }

    .swiper-pagination {
      margin-top: 20px;

      &-bullet {
        width: 18px;
        height: 18px;
      }
    }
  }
`;
