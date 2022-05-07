import styled from "styled-components";
import Image from "next/image";
import BorderButton from "./border-button";
import Link from "next/link";
import widths from "../../styling/device-sizes";
const Container = styled.div`
  border: 1px dashed red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4%;
  width: 60%;
  margin: 0 auto;
`;

const TextSection = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 2px dashed green;
  @media (min-width: ${widths.laptop}) {
    width: 40%;
  }
`;

const Title = styled.p`
  font-family: "Merriweather", sans-serif;
  font-weight: bold;
  font-size: 2rem;
`;
const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid white;
`;

const ProjectCard = ({ title, info, info2, img, repo, url }) => {
  return (
    <Container>
      <TextSection>
        <Title>{title}</Title>
        <p>{info}</p>
        <br />
        <p>{info2}</p>
        <>
          {repo.length > 0 ? (
            <BorderButton>
              <Link href={repo ? repo : "#"}>Source Code</Link>
            </BorderButton>
          ) : (
            <></>
          )}
          {url.length > 0 ? (
            <BorderButton>
              <Link href={url ? url : "#"}>
                {url ? "Live" : "Coming Soon..."}
              </Link>
            </BorderButton>
          ) : (
            <></>
          )}
        </>
      </TextSection>
      <ImgContainer>
        <Image
          src={img}
          alt={`screenshot of ${title}`}
          layout={"fill"}
          height={200}
          width={400}
        />
      </ImgContainer>
    </Container>
  );
};

export default ProjectCard;
