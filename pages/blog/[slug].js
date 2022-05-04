import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";
import Link from "next/link";

const components = { SyntaxHighlighter };

const PostPage = ({ frontMatter: { title, description, date }, mdxSource }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{description}</p>

      <MDXRemote {...mdxSource} components={components} />
      <Link href="/blog">Go back</Link>
    </div>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("pages", "posts"));

  const paths = files.map((fileName) => {
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
