import styled from "styled-components";
import RoundImage from "../layout/RoundImage";
import Image from "next/image";
import SectionHeading from "../layout/section-heading";
import widths from "../../styling/device-sizes";
import Tooltip from "../Tooltip";
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

const Text = styled.div`
  font-size: 1rem;
  overflow: hidden;
  border: 2px solid pink;
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
        <RoundImage>
          <Image
            src="/images/dogs.jpeg"
            alt="me with a dog mask and a choco laborador named Hugo"
            layout="fill"
            priority
          />
        </RoundImage>
        <Text>
          <div>
            <p>Dogfooding? ✅</p>
            <Tooltip />
          </div>
          <br />
          <p>
            After graduating with a biology degree at UC Riverside in 2017,
            worked as a lab assistant in biocontrol research for UC Berkeley. I
            worked with parasitoid wasps and fruit flies. While that was
            interesting and allowed me to travel around for experiemtns, it
            wasn&#39;t what I wanted to continue doing for long-term.
          </p>
          <br />
          <p>
            While working at the lab, I decided to take web development night
            classes at a local tech startup called Bitwise Industries (Fresno,
            California) - which is simply an awesome place with awesome people
            from diverse backgrounds. I took all the courses they offered (from
            HTML5 and CSS3 to Angular2). After that, I decided to pursue a
            career in tech, so I studied on my own before getting selected in a
            highly selective software engineering immersive program in Los
            Angeles. From there, I learnt about data structures, Big-O notation,
            MERN stack, databases, and some devops (Docker, CI/CD, AWS).
          </p>
          <br />
          <p>
            After finishing the program, COVID hit the US, did not code for a
            year due to burnout. In 2021, I decided to take an backend
            development class in Python/Django (which is just magical). Now, I
            work from home as a React frond-end developer and continuing to
            learn everyday. In my free time, I like to spend time with my cat,
            draw digitally, learn languages, and be a foodie.
          </p>
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
