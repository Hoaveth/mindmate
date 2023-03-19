import Link from "next/link";
import styles from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.container} footer bg-gray-700`}>
      <h1 className={styles.text}>
        <a
          href="https://www.facebook.com/justicism15"
          target="_blank"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          <span className={styles.stack}> Justine Espinosa</span>
        </a>
        <a
          href="https://www.facebook.com/thepodbox"
          target="_blank"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          <span className={styles.stack}>The Pod Box</span>
        </a>
        <Link href="/feedback">
          {" "}
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
