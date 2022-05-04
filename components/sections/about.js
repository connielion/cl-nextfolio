import styled from "styled-components";
import RoundImage from "../layout/RoundImage";
import Image from "next/image";
const AboutSection = () => {
  return (
    <>
      About section{" "}
      <RoundImage>
        <Image
          src="/images/dogs.jpeg"
          alt="me with a dog mask and a choco laborador named Hugo"
          layout={"fill"}
          objectFit={"contain"}
          priority
        />
      </RoundImage>
    </>
  );
};

export default AboutSection;
