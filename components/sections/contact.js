import styled from "styled-components";

const Wrapper = styled.div`
  background-image: linear-gradient(135deg, #3c50c1 0%, #22b6b3 100%);
  -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  padding: 15rem 0 10rem 0;
  margin-top: -25rem;
  margin-bottom: -1px;
  color: #eee;
  margin-top: 3rem;
`;
const ContactSection = () => {
  return <Wrapper>Contact section</Wrapper>;
};

export default ContactSection;
