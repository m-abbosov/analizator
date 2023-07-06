import { CircularProgress } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <CircularProgress isIndeterminate color="rgba(13, 76, 147, 1)" />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
