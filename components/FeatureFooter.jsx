import Link from "next/link";
import React from "react";
import styles from "./styles/Footer.module.css";

const FeatureFooter = () => {
  return (
    <Link
      href="/"
      className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
    >
      <span className={styles.stack}>Features</span>
    </Link>
  );
};

export default FeatureFooter;
