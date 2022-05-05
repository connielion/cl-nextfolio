import styled from "styled-components";
import widths from "../../styling/device-sizes";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@primer/octicons-react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  font-family: "Ubuntu", sans-serif;
`;

const HeroText = styled.div`
  font-size: 2rem;
  width: 80vw;
  flex-wrap: wrap;
  @media (max-width: ${widths.desktop}) {
    font-size: 5rem;
  }
  @media (max-width: ${widths.mobileL}) {
    font-size: 2.5rem;
  }
`;

const Colored = styled.span`
  background-image: linear-gradient(135deg, #3c50c1 0%, #22b6b3 100%);
  background-clip: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ThemeSwitchContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
`;
const Button = styled.button`
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  margin-left: 4%;
  border: none;
`;

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Container>
      {/* theme switch 
      
      

<FontAwesomeIcon icon="fa-solid fa-brightness" />

<FontAwesomeIcon icon="fa-solid fa-brightness-low" />

      */}
      <ThemeSwitchContainer>
        <Button
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && theme === "dark" ? (
            <SunIcon size={24} />
          ) : (
            <MoonIcon size={24} />
          )}
        </Button>
      </ThemeSwitchContainer>
      {/* Content */}

      <HeroText className="animate__animated animate__fadeIn">
        Hi! I am <Colored>Connie Lai</Colored>.
        <br />I am a{" "}
        <span className="text-color-main"> full-stack developer.</span>
        {/* cursor blinking */}
        <span className="blinking-cursor">|</span>
      </HeroText>
    </Container>
  );
};

export default Hero;
