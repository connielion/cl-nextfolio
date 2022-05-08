import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";
import BackButton from "../../components/layout/back-button";
import styled from "styled-components";
import widths from "../../styling/device-sizes";
// This is the component that renders blog article content
const components = { SyntaxHighlighter };

const Container = styled.div`
  padding: 2rem;
  padding-top: 4.5rem;
  width: 80vw;
  margin: 0 auto;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 80%;
  margin: 0 auto;
  @media (min-width: ${widths.laptopL}) {
    font-size: 1.2rem;
  }
`;

const PostPage = ({ frontMatter: { title, description, date }, mdxSource }) => {
  return (
    <Container>
      <BackButton backTo={"/blog"} />
      <Content>
        <div>
          <h1>{title}</h1>
          <p>{date}</p>
          <p>{description}</p>

          <MDXRemote {...mdxSource} components={components} />
        </div>
      </Content>
    </Container>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("pages", "posts"));

  const paths = files?.map((fileName) => {
    return {
      // get file names as slugs
      params: {
        slug: fileName.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("pages", "posts", slug + ".mdx")
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
export { getStaticPaths, getStaticProps };
export default PostPage;
