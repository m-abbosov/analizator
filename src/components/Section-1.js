import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Carousel from "./Carousel";
import CarouselImg from "../assets/images/slide.png";
import Section1Back from "../assets/images/section-1.png";

const Section1 = () => {
  const carouselData = [
    {
      id: 1,
      title: "Анализатор ABL800 FLEX",
      text: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
      img: CarouselImg,
      buttonText: "Подробнее",
    },
    {
      id: 2,
      title: "Анализатор ABL800 FLEX",
      text: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
      img: CarouselImg,
      buttonText: "Подробнее",
    },
    {
      id: 3,
      title: "Анализатор ABL800 FLEX",
      text: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
      img: CarouselImg,
      buttonText: "Подробнее",
    },
  ];
  return (
    <Wrapper className="container">
      <Header  data-aos="fade-up" />
      <Carousel data={carouselData} />
    </Wrapper>
  );
};

export default Section1;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${Section1Back});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
