import styled from "styled-components";
import Image from "next/image";
import { useTheme } from "next-themes";
const Icon = styled.div`
  position: relative;
  border-radius: 8px;
  ${({ theme }) =>
    theme === "light" &&
    `
  background: #1d1d1d;
`}
`;
const GithubIcon = () => {
  const { theme } = useTheme();
  console.log(theme, "current theme");
  return (
    <Icon theme={theme}>
      <a href="https://github.com/connielion" rel="noopener noreferrer">
        {/* <GithubIcon /> */}
      </a>
    </Icon>
  );
};

export default GithubIcon;
