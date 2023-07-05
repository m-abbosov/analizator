import React from "react";
import { styled } from "styled-components";
import Header from "./components/Header";
import Section1Back from "./assets/images/section-1.png";

function App() {
  return (
    <Wrapper>
      <section className="section-1">
        <Header />
      </section>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  .section-1 {
    height: 100vh;
    width: 100%;
    background-image: url(${Section1Back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
