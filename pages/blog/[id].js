import PostLayout from "../../components/PostLayout";
import getAllPostIds from "../../util/posts";
import Head from "next/head";
import Link from "next/link";

const Post = () => {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>
      <PostLayout>...</PostLayout>
    </>
  );
};

export async function getStaticPaths() {
  // Return array of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}

export default Post;
