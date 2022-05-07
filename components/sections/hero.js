import styled from "styled-components";
import widths from "../../styling/device-sizes";
// import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  font-family: "Ubuntu", sans-serif;
  background-position: center;
  background-size: cover;
`;

const HeroText = styled.div`
  font-size: 2rem;
  width: 80vw;
  flex-wrap: wrap;
  text-align: center;
  @media (max-width: ${widths.desktop}) {
    font-size: 5rem;
  }
  @media (max-width: ${widths.tab}) {
    font-size: 4rem;
  }
  @media (max-width: ${widths.mobileL}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${widths.mobileS}) {
    font-size: 2.5rem;
  }
`;

const Colored = styled.span`
  background-image: linear-gradient(135deg, #3c50c1 0%, #22b6b3 100%);
  background-clip: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Hero = () => {
  return (
    <Container>
      {/* Content */}
      <HeroText className="animate__animated animate__fadeIn">
        Hi! I am <Colored>Connie Lai</Colored>.
        <br />I am a <Colored>full-stack developer.</Colored>
        {/* cursor blinking */}
        <span className="blinking-cursor">|</span>
      </HeroText>
    </Container>
  );
};

export default Hero;
