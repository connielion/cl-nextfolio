import styled from "styled-components";
import Image from "next/image";
import BorderButton from "./border-button";
import Link from "next/link";
import widths from "../../styling/device-sizes";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 6%;
  width: 80%;
  margin: 0 auto;
  border: 1px solid yellow;
  @media (max-width: ${widths.mobileL}) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

const TextSection = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 2px dashed green;
  margin: 2rem;
  @media (min-width: ${widths.laptop}) {
    width: 40%;
  }
`;

const Title = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 2rem;
`;
const ImgContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  @media (min-width: ${widths.tab}) {
    min-width: 70%;
    borde: 1px solid red;
  }
`;
const Buttons = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid pink;
`;

const ProjectCard = ({ title, info, info2, img, repo, url }) => {
  return (
    <Container>
      <TextSection>
        <Title>{title}</Title>
        <p>{info}</p>
        <br />
        <p>{info2}</p>
        <Buttons>
          {repo.length > 0 ? (
            <BorderButton>
              <a href={repo ? repo : "#"}>Source Code</a>
            </BorderButton>
          ) : (
            <></>
          )}
          {url.length > 0 ? (
            <BorderButton>
              <a href={url ? url : "#"}>{url ? "Live" : "Coming Soon..."}</a>
            </BorderButton>
          ) : (
            <></>
          )}
        </Buttons>
      </TextSection>
      <ImgContainer>
        <Image
          src={img}
          alt={`screenshot of ${title}`}
          layout={"responsive"}
          height={300}
          width={450}
        />
      </ImgContainer>
    </Container>
  );
};

export default ProjectCard;
