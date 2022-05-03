import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { ThemeProvider } from "next-themes";

// layout or persist data
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
