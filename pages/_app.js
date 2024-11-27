import Container from "@/components/Container";
import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/global.css";
import { Noto_Sans_KR } from "next/font/google";
import Head from "next/head";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>{`
      html {
        font-family: ${notoSansKR.style.fontFamily}, sans-serif;
      }
    `}</style>
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
