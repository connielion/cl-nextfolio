import styled from "styled-components";
import breakPoints from "../../styling/min-widths";
import TypeWriter from "react-typewriter";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@primer/octicons-react";
const Container = styled.div`
  // border: 2px dashed yellow;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  padding: 2%;
  font-family: "Ubuntu", sans-serif;
`;

const HeroText = styled.h1`
  font-size: 2rem;
  // border: 1px solid red;
  @media ${breakPoints.ms} {
    font-size: 4rem;
  }
`;

const Colored = styled.span`
  background-image: linear-gradient(135deg, #3c50c1 0%, #22b6b3 100%);
  background-clip: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ThemeSwitchContainer = styled.div`
  position: fixed;
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
  border: 2px solid red;
  outline: none;
`;

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Container>
      {/* <TypeWriter typing={1}> */}
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
      <HeroText className="animate__animated animate__fadeIn">
        Hi, my name is <Colored>Connie Lai</Colored>.
        <br />I am a{" "}
        <span className="text-color-main"> full-stack developer.</span>
        {/* cursor blinking */}
        <span className="blinking-cursor">|</span>
      </HeroText>
      {/* </TypeWriter> */}
    </Container>
  );
};

export default Hero;
