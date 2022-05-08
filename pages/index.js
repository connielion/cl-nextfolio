import Hero from "../components/sections/hero";
import ContactSection from "../components/sections/contact";
import ProjectsSection from "../components/sections/projects";
import AboutSection from "../components/sections/about";
import styled from "styled-components";
const Sections = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
`;

export default function Home() {
  return (
    <>
      {/* Content */}
      <Sections>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </Sections>
    </>
  );
}
