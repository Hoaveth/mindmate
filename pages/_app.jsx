import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "components/Footer";
import Head from "next/head";
import { useEffect } from "react";
import { getLocalStorageItem } from "utils/common";
import { useRouter } from "next/router";
import { USER_KEY } from "utils/constants";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const user = getLocalStorageItem(USER_KEY);
    if (!user) {
      router.push("/login");
    }
  }, []);
  return (
    <div className="w-full new-container">
      <Head>
        <title>MindMate</title>
        <meta
          name="description"
          content="MindMate is an AI assistant built for you. It can generate a tweet for you, review your resume or help you study. This is created on top of OpenAI's API."
        />
        <meta property="og:title" content="MindMate" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mind.svg" type="image/x-icon" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
