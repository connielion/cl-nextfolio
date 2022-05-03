import Navbar from "./navbar";
import Footer from "./footer";
import styled from "styled-components";

const Container = styled.div`
  padding: 4%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
