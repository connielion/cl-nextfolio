import styled from "styled-components";
import breakPoints from "../../styling/min-widths";
const Round = styled.div`
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  height: 300px;
  width: 300px;
`;

const RoundImage = ({ children }) => {
  return <Round>{children}</Round>;
};

export default RoundImage;
