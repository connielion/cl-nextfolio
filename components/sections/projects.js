import styled from "styled-components";
import SectionHeading from "../layout/section-heading";
import { projectsData } from "../../data/projectsData";
const Wrapper = styled.section`
  min-height: 100vh;
  margin-top: -30rem;
  margin-bottom: -25rem;
  padding-top: 30rem;
  padding-bottom: 20rem;
`;
const ProjectsSection = () => {
  return (
    <Wrapper id="projects-section">
      <SectionHeading>Projects I contributed to...</SectionHeading>
    </Wrapper>
  );
};
export default ProjectsSection;
