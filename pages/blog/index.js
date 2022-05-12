import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import Posts from "../../components/layout/blog-posts";
import styled from "styled-components";
import SectionHeading from "../../components/layout/section-heading";
import { NextSeo } from "next-seo";
const BlogsContainer = styled.div`
  padding-top: 3rem;
  width: 80vw;
  height: 80%;
  margin: 0 auto;
  font-family: Lato, sans-serif;
  display: flex;
  justify-content: center;
`;
const Blog = ({ posts }) => {
  const title = "Connie's Tech Blog";
  const description = "Connie Lai, tech blog/portfolio";
  return (
    <BlogsContainer>
      <NextSeo title={title} description={description} />
      <div>
        <SectionHeading>Connie&#39;s Blog</SectionHeading>
        {/* list of blog posts */}
        <Posts posts={posts} />
      </div>
    </BlogsContainer>
  );
};

export default Blog;

// fetch posts
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("pages", "posts"));

  const posts = files?.map((fileName) => {
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
