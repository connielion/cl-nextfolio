import Link from "next/link";
import styled from "styled-components";

// This is part of the /blog page; renders list of Post components displaying: title, date, and description
const Container = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Article = styled.div`
  width: 40vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem;
  border: 1px solid #a2a2a2;
  border-radius: 0.8rem;
  margin-bottom: 0.8rem;
  :hover {
    border: 1px solid #535467;
  }
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
            <Article>
              <div style={{ textAlign: "center" }}>
                <h2>{title}</h2>
                <p>{date}</p>
                <p>{description}</p>
              </div>
            </Article>
          </Link>
        );
      })}
    </Container>
  );
};

export default Posts;
