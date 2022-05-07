import GithubSVG from "../public/github-brands.svg";
import styled from "styled-components";

const Icon = styled.div`
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  fill: ;
`;
const GithubIcon = () => (
  <Icon>
    <GithubSVG />
  </Icon>
);

export default GithubIcon;
