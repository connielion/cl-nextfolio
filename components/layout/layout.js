import Navbar from "./navbar";
import Footer from "./footer";
import styled from "styled-components";

const Container = styled.div`
  padding: 2%;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <>{children}</>
      <Footer style={{ position: "absolute", bottom: "0" }} />
    </Container>
  );
};

export default Layout;
