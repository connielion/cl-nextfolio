import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bold = styled.div`
  text-decoration: underline;
  color: orange;
  display: inline-block;
  :hover {
    text-decoration: none;
  }
`;
export default function Custom404() {
  return (
    <Container>
      <h1>
        Are you lost? Click{" "}
        <Bold>
          <Link href={"/"}> here </Link>
        </Bold>{" "}
        to go back to home page.
      </h1>
    </Container>
  );
}
