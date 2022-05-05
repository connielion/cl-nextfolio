import styled from "styled-components";
import Link from "next/link";

const Button = styled.div`
  padding: 4px;
  font-size: Ubuntu, sans-serif;
  border: 1px solid red;
`;

const BackButton = () => {
  return (
    <Button>
      <Link href="/blog">Go back</Link>
    </Button>
  );
};
export default BackButton;
