import Navbar from "./navbar";
import Footer from "./footer";
import styled from "styled-components";

const Container = styled.div`
  padding: 4%;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

const Content = styled.div`
  min-height: 60vh;
  border: 1px solid turquoise;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
      <Footer style={{ position: "absolute", bottom: "0" }} />
    </Container>
  );
};

export default Layout;
