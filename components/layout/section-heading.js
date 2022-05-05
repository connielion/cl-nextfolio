import styled from "styled-components";
import widths from "../../styling/device-sizes";

const Heading = styled.h2`
  color: #eee;
  margin-bottom: 4.5rem;
  text-transform: uppercase;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Ubuntu", sans-serif;
  @media (max-width: ${widths.ms}) {
    font-size: 2rem;
  } ;
`;

const SectionHeading = ({ children }) => (
  <Heading className="animate__animated animate__bounce">{children}</Heading>
);
export default SectionHeading;
