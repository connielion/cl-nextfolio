import "../styling/globals.css";
import Layout from "../components/layout/layout";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
// layout or persist data
function MyApp({ Component, pageProps }) {
  console.log(Component.title);
  return (
    <ThemeProvider>
      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default MyApp;
