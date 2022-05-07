import styled from "styled-components";
import widths from "../../styling/device-sizes";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  font-family: "Ubuntu", sans-serif;
  background-position: center;
  background-size: cover;
`;

const HeroText = styled.div`
  font-size: 2rem;
  width: 70vw;
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

const HeroBtn = styled.span`
  margin-top: 0.8rem;
  background-image: linear-gradient(135deg, #3c50c1 0%, #22b6b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 2px solid;
  border-image: linear-gradient(135deg, #3c50c1 0%, #22b6b3 100%);
  border-image-slice: 1;
  padding: 0.8rem;
  display: inline-block;
  position: relative;
  font-weight: bold;
  line-height: 1;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
  &:hover {
    -webkit-text-fill-color: #a9bed2;
    text-decoration: none;
    &::after {
      width: 100%;
    }
  }
`;

const Hero = () => {
  return (
    <Container>
      {/* Content start */}
      <HeroText className="animate__animated animate__fadeIn">
        Hi! I am <Colored>Connie Lai</Colored>.
        <br />I am a <Colored>React developer.</Colored>
        {/* cursor blinking */}
        <span className="blinking-cursor">|</span>
      </HeroText>
      {/* View Projects button */}
      {/* <HeroBtn>
        <Link href="/#projects-section" scroll={false}>
          View Projects
        </Link>
      </HeroBtn> */}
    </Container>
  );
};

export default Hero;
