import React from "react";
import { styled } from "styled-components";

import Section2 from "./components/Section-2";
import Section1 from "./components/Section-1";
import Section3 from "./components/Section-3";

function App() {
  return (
    <Wrapper>
      <Section1 />
      <Section2 />
      <Section3 />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;
