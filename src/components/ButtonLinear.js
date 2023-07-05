import React from "react";
import { styled } from "styled-components";

const ButtonLinear = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ButtonLinear;

const Wrapper = styled.button`
  border-radius: 35px;
  opacity: 0.8999999761581421;
  background: linear-gradient(90deg, #0d4c93 0%, #00c9c9 100%);
  padding: 21px 72px;
  height: auto;
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.8999999761581421;
    background: #00c9c9;
  }
`;
