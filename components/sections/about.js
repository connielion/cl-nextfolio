import styled from "styled-components";
import RoundImage from "../layout/RoundImage";
import Image from "next/image";
import SectionHeading from "../layout/section-heading";
import widths from "../../styling/device-sizes";
import aboutData from "../../data/aboutData";
const Wrapper = styled.section`
  background: linear-gradient(
      100deg,
      rgba(49, 53, 69, 0.6),
      rgba(73, 70, 99, 0.9)
    ),
    url("/images/hk.jpeg");
  background-position: center;
  background-size: cover;
  color: #eee;
  height: auto;
  padding-bottom: 4.5rem;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);

  @media (min-width: ${widths.laptop}) {
    height: 100vh;
    padding-bottom: 0 2rem 5rem 2rem;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  }
`;

const Content = styled.div`
  border: 2px solid yellow;
  height: 80%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (min-width: ${widths.laptop}) {
  } ;
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Text = styled.div`
  font-size: 1rem;
  overflow: hidden;
  @media (min-width: ${widths.tab}) {
    font-size: 1.25rem;
    max-width: 70%;
  }
`;
const AboutSection = () => {
  return (
    <Wrapper id="about">
      <SectionHeading>About Connie</SectionHeading>
      <Content>
        <ImageColumn>
          <RoundImage>
            <Image
              src="/images/dogs.jpeg"
              alt="me with a dog mask and a choco laborador named Hugo"
              layout="fill"
              priority
            />
          </RoundImage>
          <RoundImage>
            <Image
              src="/images/tiger-scratchboard.jpg"
              alt="scratchboard art of a tiger by me"
              layout="fill"
              priority
            />
          </RoundImage>
        </ImageColumn>
        <Text>
          <p>Yes, that's me on the right. Dogfooding? ✅ </p>

          {aboutData.map((p, i) => {
            return <p key={i}>{p}</p>;
          })}
        </Text>
      </Content>
    </Wrapper>
  );
};

export default AboutSection;

{
  /* <RoundImage>
<Image
  src="/images/dogs.jpeg"
  alt="me with a dog mask and a choco laborador named Hugo"
  layout="fill"
  priority
/>
</RoundImage> */
}
