import React from "react";
import styled from "styled-components";
import { Link } from "@chakra-ui/react";

//CardImages
import CardImage1 from "../assets/images/Card1.png";
import CardImage2 from "../assets/images/Card2.png";
import CardImage3 from "../assets/images/Card3.png";
import CardImage4 from "../assets/images/Card4.png";
import CardImage5 from "../assets/images/Card5.png";
import CardImage6 from "../assets/images/Card6.png";
import ButtonLinear from "./ButtonLinear";

// Icons
import UpArrow from "../assets/icons/up-arrow.svg";

const Section2 = () => {
  const cardData = [
    {
      id: 1,
      title: "Эндоваскулярная хирургия",
      img: CardImage1,
    },
    {
      id: 2,
      title: "Лабораторная диагностика",
      img: CardImage2,
    },
    {
      id: 3,
      title: "Кардиохирургия",
      img: CardImage3,
    },
    {
      id: 4,
      title: "ДИАБЕТ",
      img: CardImage4,
    },
    {
      id: 5,
      title: "ЭНДОУРОЛОГИЯ",
      img: CardImage5,
    },
    {
      id: 6,
      title: "АРИТМОЛОГИЯ",
      img: CardImage6,
    },
  ];
  return (
    <Wrapper className="container">
      <h2 className="section-title">ПРОДУКЦИЯ</h2>
      <ul className="card-list">
        {cardData.map((item) => {
          return (
            <li key={item.id} className="card-list__item">
              <img className="card-list__item-img" src={item.img} alt="" />
              <b className="card-list__item-title">{item.title}</b>
              <ButtonLinear>Посмотреть все</ButtonLinear>
            </li>
          );
        })}
      </ul>

      <Link className="catalog-btn" href="#">
        <p>Перейти в каталог нашей продукции </p>
        <img src={UpArrow} alt="" />
      </Link>
    </Wrapper>
  );
};

export default Section2;

const Wrapper = styled.div`
  margin: 50px 0 70px;

  .card-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 55px 60px;

    margin-top: 62px;
    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      align-items: center;
      padding: 17px 0 42px;

      width: 413px;
      border-radius: 35px;
      opacity: 0.8999999761581421;
      background: linear-gradient(
        180deg,
        #f8f8f8 0%,
        rgba(248, 248, 248, 0) 100%
      );

      &-img {
        height: 235px;
        object-fit: contain;
      }

      &-title {
        color: #000;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 2.52px;
        width: 70%;
        height: 60px;
      }
    }
  }

  .catalog-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: center;
    margin-top: 81px;

    p {
      color: #0d4c93;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;