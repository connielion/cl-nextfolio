import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Posts = ({ posts }) => {
  return (
    <Container>
      {posts?.map((file, i) => {
        // for each file, access metadata(title/description/date/etc.) under `frontMatter` object
        const { frontMatter } = file;
        const { title, description, date } = frontMatter;
        return (
          <Link href={"/blog/" + file.slug} key={i} passHref>
            <div style={{ border: "1px solid red" }}>
              <h1>{title}</h1>
              <p>{date}</p>
              <p>{description}</p>
            </div>
          </Link>
        );
      })}
    </Container>
  );
};

export default Posts;
