import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  border: 2px dashed green;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const RoundImage = styled.div`
  overflow: hidden;
  border-radius: 50%;
  margin-left: 5%;
`;

const Hero = () => {
  return (
    <Container>
      <h1>Hi! I am Connie, a dogfooding developer.</h1>
      <RoundImage>
        <Image
          src="/images/dogs.jpeg"
          alt="me with a dog mask and a choco laborador named Hugo"
          height={300}
          width={300}
        />
      </RoundImage>
    </Container>
  );
};

export default Hero;
