import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styled from "styled-components";
import { SunIcon, MoonIcon } from "@primer/octicons-react";
const Container = styled.div`
  padding: 1%;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Button = styled.button`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  margin-left: 4%;
`;

const ThemeSwitchContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
`;
const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Container>
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
      <Content>{children}</Content>
      {/* bottom nav */}
      <Navbar />
    </Container>
  );
};

export default Layout;
