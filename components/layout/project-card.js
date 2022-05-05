import styled from "styled-components";
import Image from "next/image";
const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4%;
`;

const TextSection = style.div`
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
`;

const Title = styled.p`
  font-family: "Merriweather", sans-serif;
  font-weight: bold;
  font-size: 2rem;
`;

const ProjectCard = () => {
  return (
    <Container>
      <TextSection>
        <Title>Covid Mapper</Title>
        <p>This is a mobile app.</p>
      </TextSection>
      <Image
        src="/images/projects/kovvi-la_data.png"
        alt="screenshot of a project"
      />
    </Container>
  );
};

export default ProjectCard;
