import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I am Eerapuram Tejaswini.</h1>
        <p className={styles.description}>
          I am passionate about building web applications.
          <br></br>Reach out If you like to learn more!
        </p>
        <a href="mailto:eteja4949@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero Image of me"
          className={styles.heroImg}
        ></img>
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
