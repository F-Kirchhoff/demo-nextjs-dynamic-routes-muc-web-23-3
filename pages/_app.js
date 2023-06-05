import Head from "next/head";
import { GlobalStyle } from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Default Title</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
