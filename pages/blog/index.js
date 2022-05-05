import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import Posts from "../../components/layout/blog-posts";
import styled from "styled-components";

const BlogsContainer = styled.div`
  padding-top: 4%;
  width: 80vw;
  margin: 0 auto;
  font-family: Lato, sans-serif;
`;
const Blog = ({ posts }) => {
  return (
    <BlogsContainer>
      Blog home
      <Posts posts={posts} />
    </BlogsContainer>
  );
};

export default Blog;

// fetch posts
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("pages", "posts"));

  const posts = files.map((fileName) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("pages", "posts", fileName)
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: fileName.split(".")[0],
    };
  }); // end mapping

  return {
    props: {
      posts,
    },
  };
};
