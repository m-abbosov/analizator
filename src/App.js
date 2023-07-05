import React from "react";
import { styled } from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Section1 from "./components/Section-1";
import Section2 from "./components/Section-2";
import Section3 from "./components/Section-3";
import Section4 from "./components/Section-4";
import Section5 from "./components/Section-5";
import Section6 from "./components/Section-6";

function App() {
  return (
    <Wrapper>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;
