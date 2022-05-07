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
  padding-bottom: 2.5rem;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
  padding: 4.5rem;
  @media (min-width: ${widths.laptop}) {
    height: 100vh;
    padding: 1rem 2rem 5rem 2rem;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px dashed yellow;
  padding: 0;
  margin: 0;
  @media (min-width: ${widths.tab}) {
    flex-direction: row;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: ${widths.laptop}) {
    padding: 4.5rem;
  }
`;

const Text = styled.div`
  font-size: 1rem;
  border: 2px solid white;
  @media (min-width: ${widths.tab}) {
    font-size: 1.2rem;
    padding: 4.5rem;
  }
`;
const AboutSection = () => {
  return (
    <Wrapper id="about-section">
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
          <p> Dogfooding? ✅ </p>

          {aboutData ? (
            aboutData?.map((p, i) => {
              return <p key={i}>{p}</p>;
            })
          ) : (
            <>Loading...</>
          )}
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
