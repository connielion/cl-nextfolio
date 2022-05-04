import Image from "next/image";
import styled from "styled-components";
import breakPoints from "../styling/min-widths";

const Container = styled.div`
  border: 2px dashed yellow;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 60vh;
  padding: 2%;
  font-family: "Ubuntu", sans-serif;
`;

const RoundImage = styled.div`
  overflow: hidden;
  border-radius: 50%;
  @media ${breakPoints.ms} {
    height: 50%;
    width: 50%;
  }
`;

const HeroText = styled.div`
  font-size: 2.5rem;
  border: 1px solid red;
  @media ${breakPoints.ms} {
    font-size: 1.2rem;
  }
`;

const Hero = () => {
  return (
    <Container>
      <HeroText>
        <h1>Hi, I am Connie Lai. :D</h1>
        <h2>I am full-stack developer.</h2>
      </HeroText>
      <RoundImage>
        <Image
          src="/images/dogs.jpeg"
          alt="me with a dog mask and a choco laborador named Hugo"
          height={300}
          width={300}
          priority
        />
      </RoundImage>
    </Container>
  );
};

export default Hero;
