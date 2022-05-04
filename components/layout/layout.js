import Navbar from "./navbar";
import Footer from "./footer";
import styled from "styled-components";

const Container = styled.div`
  padding: 4%;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

const Content = styled.div`
  height: 100%;
  border: 1px solid turquoise;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
