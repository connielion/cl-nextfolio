import styled from "styled-components";
import Link from "next/link";

const Button = styled.span`
  padding: 4px;
  font-size: Ubuntu, sans-serif;
  :hover {
    color: orange;
  }
`;

const BackButton = () => {
  return (
    <Button>
      <Link href="/blog">Go back</Link>
    </Button>
  );
};
export default BackButton;
