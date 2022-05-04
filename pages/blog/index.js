import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import Posts from "../../components/layout/blog-posts";

const Blog = ({ posts }) => {
  return (
    <>
      Blog home
      <Posts posts={posts} />
    </>
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
