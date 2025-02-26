import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/gmaiL.JPG")}
            className={styles.img1}
            alt="Email icon"
          />
          <a href="mailto:eteja4949@gmail.com">eteja4949@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/link.JPG")}
            className={styles.img1}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/eerapuram-tejaswini-88778429a/">
            linkedin.com/eerapuram-tejaswini
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/git.JPG")}
            className={styles.img1}
            alt="Github icon"
          />
          <a href="https://github.com/TEJASWINI-49">github.com/TEJASWINI-49</a>
        </li>
      </ul>
    </footer>
  );
};
