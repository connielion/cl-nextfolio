import styled from "styled-components";
import widths from "../../styling/device-sizes";

import SectionHeading from "../layout/section-heading";

const Wrapper = styled.div`
  background-image: linear-gradient(135deg, #3c50c1 0%, #22b6b3 100%);
  -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  padding: 15rem 0 10rem 0;
  margin-top: -25rem;
  margin-bottom: -1px;
  color: #eee;
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  @media (min-width: ${widths.laptop}) {
    margin-top: 0rem;
  }
`;

const EmailBtn = styled.span`
  color: #ddd;
  border: 2px solid #ddd;
  display: inline-block;
  position: relative;
  padding: 0.8rem 1.2rem;
  font-weight: bold;
  line-height: 1;
  z-index: 1;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 0px;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
  }
  &::after {
    background: #ddd;
    color: orange;
  }

  &:hover {
    -webkit-text-fill-color: #f28326;
    text-decoration: none;
    &::after {
      width: 100%;
    }
  }
`;
const ContactSection = () => {
  return (
    <Wrapper>
      <SectionHeading>WANNA GET IN TOUCH?</SectionHeading>
      <EmailBtn>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:connielion011@gmail.com`}
        >
          Email Me
        </a>
      </EmailBtn>
    </Wrapper>
  );
};

export default ContactSection;
