import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "components/Footer";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full new-container">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
