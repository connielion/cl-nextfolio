import Navbar from "./navbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      {/* bottom nav */}
      <Navbar />
    </Container>
  );
};

export default Layout;
