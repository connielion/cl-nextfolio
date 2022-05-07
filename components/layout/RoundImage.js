import styled from "styled-components";
import widths from "../../styling/device-sizes";

const Round = styled.div`
  overflow: hidden;
  border-radius: 4%;
  position: relative !important;
  max-height: 180px;
  max-width: 180px;
  display: block;
  @media (min-width: ${widths.tab}) {
    min-height: 300px;
    min-width: 300px;
  }
`;

const RoundImage = ({ children }) => {
  return <Round>{children}</Round>;
};

export default RoundImage;
