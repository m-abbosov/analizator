import React from "react";
import styled from "styled-components";
import ButtonLinear from "./ButtonLinear";

const Section4 = () => {
  return (
    <Wrapper className="container" id="about">
      <h2 data-aos="fade-up" className="section-title">
        О КОМПАНИИ
      </h2>
      <div className="about-company" data-aos="fade-left">
        <p>
          Группа компаний MEDOL создавалась высококвалифицированными
          специалистами в сфере медицины, инженерии и экономики, за плечами
          которых значительный опыт на рынке высоких медицинских технологий,
          которая имеет свои представительства в разных уголках Земли. В 2011
          году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online
          Services". Цель компании построить прозрачный долгосрочный бизнес,
          принести пользу обществу путем развития и внедрения передовых
          технологий в систему здравоохранения Республики Узбекистан.{" "}
        </p>
        <ButtonLinear>Узнать больше</ButtonLinear>
      </div>
    </Wrapper>
  );
};

export default Section4;

const Wrapper = styled.div`
  margin: 68px 0 100px;

  .about-company {
    margin-left: auto;
    margin-top: 52px;
    border-radius: 0px 50px 50px 0px;
    background: linear-gradient(
      180deg,
      #f5f5f5 0%,
      rgba(245, 245, 245, 0) 100%
    );
    padding: 30px 30px 30px 300px;
    width: 1023px;

    p {
      color: #000;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      letter-spacing: 2px;
      width: 700px;
    }

    button {
      width: 270px;
      height: 50px;
      padding: 13px;
      color: #fff;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 20px;
    }
  }

  @media (max-width: 1440px) {
    margin: 30px 50px;

    .about-company {
      margin-top: 30px;

      width: 80%;

      p {
        font-size: 18px;
        width: 100%;
      }
    }
  }

  @media (max-width: 1025px) {
    .about-company {

      padding: 20px 20px 20px 150px;
      p {
        font-size: 12px;

      }
    }
  }
`;
