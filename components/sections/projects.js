import styled from "styled-components";
import SectionHeading from "../layout/section-heading";
import { projects } from "../../data/projectsData";
import ProjectCard from "../layout/project-card";
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

      {projects?.map((project) => {
        const { id, img, title, info, info2, url, repo } = project;

        return (
          <ProjectCard
            key={id}
            img={img}
            title={title}
            info={info}
            info2={info2}
            url={url}
            repo={repo}
          />
        );
      })}
    </Wrapper>
  );
};
export default ProjectsSection;
