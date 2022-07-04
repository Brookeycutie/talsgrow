import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Her>
      <img src="./images/hero.png" alt="Hero" />
    </Her>
  );
};

export default Hero;

const Her = styled.div`
  object-fit: cover;
  background: rgba(18, 18, 18, 0.45);
  height: 60vh;
  width: 100%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 100vw;
    height: 100%;
    object-fit: cover;
  }
`;
