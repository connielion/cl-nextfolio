import styled from "styled-components";
import widths from "../../styling/min-widths";
import breakPoints from "../../styling/min-widths";

const Heading = styled.h2`
  color: inherit;
  margin-bottom: 4.5rem;
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Ubuntu", sans-serif;
  @media ${widths.desktop} {
    font-size: 4rem;
  } ;
`;

const SectionHeading = ({ children }) => (
  <Heading className="animate__animated animate__bounce">{children}</Heading>
);
export default SectionHeading;
