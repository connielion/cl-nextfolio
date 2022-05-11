import styled from "styled-components";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import widths from "../../styling/device-sizes";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ThemeButton = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  margin-left: 4%;
  outline: none;
  @media (max-width: ${widths.desktop}) {
    height: 3rem;
    width: 3rem;
  }
`;
const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Container>
      <ThemeButton
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {mounted && theme === "dark" ? (
          <FontAwesomeIcon icon={faSun} size="xl" />
        ) : (
          <FontAwesomeIcon icon={faMoon} size="xl" />
        )}
      </ThemeButton>
      <Content>{children}</Content>
      {/* bottom nav */}
      <Footer />
    </Container>
  );
};

export default Layout;
