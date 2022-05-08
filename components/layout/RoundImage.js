import styled from "styled-components";
import widths from "../../styling/device-sizes";

const Round = styled.div`
  overflow: hidden;
  border-radius: 4%;
  position: relative !important;
  height: 150px;
  width: 150px;
  max-height: 180px;
  max-width: 180px;
  padding: 2rem;
  display: block;
  margin-top: 1rem;
  @media (min-width: ${widths.tab}) {
    min-height: 240px;
    min-width: 240px;
  }
  @media (min-width: ${widths.laptop}) {
    min-height: 300px;
    min-width: 300px;
  }
`;

const RoundImage = ({ children }) => {
  return <Round>{children}</Round>;
};

export default RoundImage;
