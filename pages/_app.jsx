import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "components/Footer";
import { useEffect } from "react";
import { initAnalytics } from "lib/analytics";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initAnalytics();
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
