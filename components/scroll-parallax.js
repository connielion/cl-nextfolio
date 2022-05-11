import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import styled from "styled-components";
import { nanoid } from "nanoid";
const icons = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    alt: "React.js icon",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "nodejs icon",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    alt: "postgresql icon",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    alt: "jest icon",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    alt: "git icon",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    alt: "django icon",
  },
].map((icon) => {
  return (
    <Image
      src={icon.url}
      alt={`${icon.alt}`}
      height={32}
      width={32}
      key={nanoid()}
    />
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80vw;
`;
const Spinner = () => {
  const parallax = useParallax({
    rotateX: [-360, 360],
  });
  return <Container ref={parallax.ref}>{icons}</Container>;
};

export default Spinner;
