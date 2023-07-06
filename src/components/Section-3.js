import React from "react";
import styled from "styled-components";

import CardS1 from "../assets/images/CardS1.png";
import CardS2 from "../assets/images/CardS2.png";
import CardS3 from "../assets/images/CardS3.png";

import Section1Back from "../assets/images/section-1.png";
import ButtonLinear from "./ButtonLinear";
const Section3 = () => {
  const cardData = [
    {
      id: 1,
      title: "СЕРВИС ОБОРУДОВАНИЯ",
      text: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......",
      img: CardS1,
    },
    {
      id: 2,
      title: "РЕГИСТРАЦИИ",
      text: "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....",
      img: CardS2,
    },
    {
      id: 3,
      title: "УСЛУГИ ЛОГИСТИКИ",
      text: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....",
      img: CardS3,
    },
  ];
  return (
    <Wrapper id="services">
      <h2 data-aos="fade-up" className="section-title">
        УСЛУГИ
      </h2>
      <ul className="container card-list">
        {cardData.map((item) => {
          return (
            <li data-aos="flip-up" className="card-list__item" key={item.title}>
              <img
                className="card-list__item-img"
                src={item.img}
                alt={item.title}
              />
              <div className="card-list__item-content">
                <b>{item.title}</b>
                <p>{item.text}</p>
                <ButtonLinear>Подробнее</ButtonLinear>
              </div>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Section3;

const Wrapper = styled.div`
  .section-title {
    margin-bottom: 68px;
  }

  .card-list {
    display: flex;
    align-items: center;
    gap: 100px;

    background-image: url(${Section1Back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 64px;
    padding-bottom: 92px;

    &__item {
      position: relative;
      display: flex;
      flex-direction: column;
      border-radius: 50px;
      background: #fff;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);

      &-img {
        border-top-right-radius: 50px;
        border-top-left-radius: 50px;
      }

      &-content {
        padding: 25px 40px 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;

        b {
          color: #0d4c93;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 1.3px;
        }

        p {
          color: #000;
          text-align: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 300;
          line-height: 24px;
        }
      }

      button {
        position: absolute;
        bottom: -20px;
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
    }
  }

  @media (max-width: 1440px) {
    .section-title {
      margin-bottom: 30px;
    }

    .card-list {
      padding-top: 40px;
      padding-bottom: 50px;

      &__item {
        &-content {
          padding: 20px 30px 40px;

          b {
            font-size: 16px;
          }

          p {
            font-size: 14px;
          }
        }

        button {
          font-size: 18px;
        }
      }
    }
  }
`;
