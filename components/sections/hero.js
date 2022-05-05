import styled from "styled-components";
import breakPoints from "../../styling/min-widths";
import TypeWriter from "react-typewriter";

const Container = styled.div`
  border: 2px dashed yellow;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  padding: 2%;
  font-family: "Ubuntu", sans-serif;
`;

const HeroText = styled.h1`
  font-size: 2rem;
  // border: 1px solid red;
  @media ${breakPoints.ms} {
    font-size: 4rem;
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
    <Container className="animate__animated animate__fadeIn">
      {/* <TypeWriter typing={1}> */}
      <HeroText>
        Hi, my name is <Colored>Connie Lai</Colored>.
        <br />I am a{" "}
        <span className="text-color-main"> full-stack developer.</span>
        {/* cursor blinking */}
        <span className="blinking-cursor">|</span>
      </HeroText>
      {/* </TypeWriter> */}
    </Container>
  );
};

export default Hero;
