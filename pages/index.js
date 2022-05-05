import Head from "next/head";
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
      <Head>
        <title>Connie Lai&rsquo;s Portfolio</title>
        <meta
          name="description"
          content="Connie Lai's developer portfolio made with Next.js"
        />
        <link rel="shortcut icon" href="/32xfavicon.png" />
      </Head>
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
