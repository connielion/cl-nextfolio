import Head from "next/head";
import Hero from "../components/hero";
export default function Home() {
  return (
    <>
      <Head>
        <title>C.Lai Dev Portfolio</title>
        <meta
          name="description"
          content="Connie Lai's developer portfolio made with Next.js"
        />
        <link rel="icon" href="/images/32x32favicon.png" />
      </Head>
      {/* Content */}
      <Hero />
    </>
  );
}
