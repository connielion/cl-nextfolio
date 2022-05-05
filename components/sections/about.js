import styled from "styled-components";
import RoundImage from "../layout/RoundImage";
import Image from "next/image";
import SectionHeading from "../layout/section-heading";

const Wrapper = styled.div`
  background: linear-gradient(
      100deg,
      rgba(49, 53, 69, 0.5),
      rgba(73, 70, 99, 0.9)
    ),
    url("/images/hk.jpeg");
  background-position: center;
  background-size: cover;
  color: $white-color;
  height: 100vh;
  border-top: 0px;
  padding-top: 4rem;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
`;
const AboutSection = () => {
  return (
    <Wrapper>
      <SectionHeading>About Connie</SectionHeading>
      <RoundImage>
        <Image
          src="/images/dogs.jpeg"
          alt="me with a dog mask and a choco laborador named Hugo"
          layout={"fill"}
          objectFit={"contain"}
          priority
        />
      </RoundImage>
    </Wrapper>
  );
};

export default AboutSection;
