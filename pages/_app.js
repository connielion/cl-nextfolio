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
              title="Connie Lai | Developer Portfolio"
              description="Connie Lai full-stack developer portfolio. Love to draw and travel in my free time."
              openGraph={{
                url: "https://www.connielai.dev",
                title: "Connie Lai | Developer Portfolio",
                description:
                  "Connie Lai full-stack developer portfolio. Love to draw and travel in my free time.",
                images: ["/og.png"],
              }}
              twitter={{
                handle: "@connielion011",
                site: "@connielion011",
                cardType: "summary_large_image",
              }}
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
