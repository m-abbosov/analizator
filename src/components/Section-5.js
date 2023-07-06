import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Link } from "@chakra-ui/react";

import Car1 from "../assets/images/Car1.png";
import ButtonLinear from "./ButtonLinear";
import ArrowIcon from "../assets/icons/up-arrow.svg";
import ArrowIconHover from "../assets/icons/up-arrow-hover.svg";

const Section5 = () => {
  const cardData = [
    {
      id: 1,
      title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      img: Car1,
      text: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
      date: "26.07.2021",
    },
    {
      id: 2,
      title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      img: Car1,
      text: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
      date: "26.07.2021",
    },
    {
      id: 3,
      title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      img: Car1,
      text: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
      date: "26.07.2021",
    },
    {
      id: 4,
      title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      img: Car1,
      text: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
      date: "26.07.2021",
    },
    {
      id: 5,
      title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      img: Car1,
      text: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
      date: "26.07.2021",
    },
    {
      id: 6,
      title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      img: Car1,
      text: "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
      date: "26.07.2021",
    },
  ];
  return (
    <Wrapper className="container" id="news">
      <h2 data-aos="fade-up" className="section-title">
        НОВОСТИ
      </h2>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {cardData.map((item) => {
          return (
            <SwiperSlide className="card-list__item" key={item.id}>
              <img
                className="card-list__item-img"
                src={item.img}
                alt={item.title}
                data-aos="flip-up"
              />
              <div data-aos="flip-down" className="card-list__item-content">
                <b>{item.title}</b>
                <span>{item.date}</span>
                <p>{item.text}</p>
              </div>
              <ButtonLinear data-aos="fade-up">Подробнее</ButtonLinear>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="links">
        <Link className="link" data-aos="fade-right">
          <p>Посмотреть все новости</p>
          <div className="link-arrow" />
        </Link>
        <Link className="link" data-aos="fade-left">
          <p>Подписаться на новости</p>
          <div className="link-arrow" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default Section5;

const Wrapper = styled.div`
  margin-bottom: 100px;
  .section-title {
    margin-bottom: 45px;
  }

  .card-list__item {
    height: 618px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    &-content {
      border-radius: 35px;
      border: 2px solid #f6f6f6;
      opacity: 0.8999999761581421;
      margin-bottom: 20px;
      background: linear-gradient(
        180deg,
        #f8f8f8 0%,
        rgba(255, 255, 255, 0) 100%
      );
      padding: 120px 26px 53px;
      font-family: "Montserrat", sans-serif;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 13px;

      b {
        color: #0d4c93;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        text-align: center;
        cursor: pointer;
      }

      span {
        color: #0d4c93;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }

      p {
        color: #000;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
    }
    button {
      position: absolute;
      z-index: 999;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      width: 270px;
      height: 50px;
      padding: 13px;

      color: #fff;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    &-img {
      position: absolute;
      top: 30px;
      z-index: 999;
      border-radius: 40px;
    }

    &:hover > .card-list__item-content > b {
      text-decoration: underline;
      color: #00c9c9;
    }
  }

  .swiper {
    padding: 0 20px;
    .swiper-pagination {
      position: relative;
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
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 70px;

    .link {
      text-decoration: none !important;
      color: #0d4c93;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;

      &:hover {
        color: #00c9c9;
      }

      &:hover > .link-arrow {
        background-image: url(${ArrowIconHover});
      }

      &-arrow {
        width: 30px;
        height: 30px;
        background-image: url(${ArrowIcon});
      }
    }
  }

  @media (max-width: 1440px) {
    margin-bottom: 50px;
    .section-title {
      margin-bottom: 30px;
    }

    .card-list__item {
      &-content {
        b {
          font-size: 18px;
        }

        span {
          font-size: 14px;
        }

        p {
          font-size: 12px;
        }
      }

      &-img {
        top: 0;
      }
    }

    .links {
      margin-top: 40px;

      .link {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 1025px) {
    .card-list__item {
      height: 600px;
      &-content {
        gap: 5px;

        padding: 80px 15px 30px;
        b {
          font-size: 16px;
        }

        span {
          font-size: 12px;
        }

        p {
          font-size: 12px;
        }
      }

      button {
        font-size: 14px;
        height: 45px;
      }
    }

    .links {
      .link {
        font-size: 16px;

        &-arrow {
          width: 20px;
          height: 20px;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
    }
  }
`;
