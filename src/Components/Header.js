import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <Boss>Home</Boss>
      <Boss>About</Boss>
      <Boss>Contact</Boss>
    </Head>
  );
};

export default Header;
const Head = styled.div`
  height: 70px;
  width: 100%;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;
const Boss = styled.div`
  padding: 50px;
`;
