import styled from "styled-components";
import widths from "../../styling/device-sizes";
import Link from "next/link";
import BorderButton from "../layout/border-button";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  min-height: 100%;
  font-family: "Ubuntu", sans-serif;
  background-position: center;
  background-size: cover;
`;

const HeroText = styled.div`
  font-size: 2rem;
  width: 70vw;
  flex-wrap: wrap;
  text-align: center;
  padding-bottom: 0.8rem;
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
      {/* Content start */}
      <HeroText className="animate__animated animate__fadeIn">
        Hi! I am <Colored>Connie Lai</Colored>.
        <br />
        <Colored>I Design and Build Apps.</Colored>
        {/* cursor blinking */}
        <span className="blinking-cursor">|</span>
      </HeroText>
      {/* View Projects button */}
      <BorderButton>
        {" "}
        <Link href="/#projects-section" scroll={false}>
          View Projects
        </Link>
      </BorderButton>
    </Container>
  );
};

export default Hero;
