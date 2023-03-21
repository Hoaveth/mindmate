import Link from "next/link";
import styles from "./styles/Footer.module.css";
import { getLocalStorageItem } from "utils/common";
import { USER_KEY } from "utils/constants";
import dynamic from "next/dynamic";

const Footer = () => {
  const user = getLocalStorageItem(USER_KEY);

  const DynamicLink = dynamic(() => import("./FeatureFooter"), {
    ssr: false,
  });

  return (
    <div className={`${styles.container} footer bg-gray-700`}>
      <h1 className={styles.text}>
        {user ? <DynamicLink /> : null}

        <a
          href="https://www.facebook.com/thepodbox"
          target="_blank"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          <span className={styles.stack}>The Pod Box</span>
        </a>
        <Link
          href="/feedback"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          <span className={styles.stack}>Send Feedback</span>
        </Link>
      </h1>
      <a
        href="https://github.com/Hoaveth/mindmate"
        target="_blank"
        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
      >
        <p className={styles.repo}>Github Repo</p>
      </a>
    </div>
  );
};

export default Footer;
