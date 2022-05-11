import "@fortawesome/fontawesome-svg-core/styles.css";
import { DefaultSeo, NextSeo } from "next-seo";
import "../styling/globals.css";
import Layout from "../components/layout/layout";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";
// layout or persist data
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <Layout>
          <Head>
            <NextSeo
              title="Connie's Dev Portfolio/Blog"
              description="Connie Lai react developer portfolio with MDX blog made with Next.js"
            />
            {/* UNCOMMENT ONCE SEO CONFIG IS READY */}
            {/* <DefaultSeo {...SEO} /> */}
            <link rel="shortcut icon" href="/32xfavicon.png" />
          </Head>

          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default MyApp;
