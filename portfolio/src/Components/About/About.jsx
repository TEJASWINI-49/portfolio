import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with laptop"
        ></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="I am"></img>
            <div className={styles.aboutItemText}>
              <h3>Java FullStack Trainee</h3>
              <p>
                I'm currently upskilling in Java FullStack Course at Codegnan
                Destinations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="I am"></img>
            <div className={styles.aboutItemText}>
              <h3>Project Engineer at Wipro Limited</h3>
              <p>
                I have worked as a Project Engineer at Wipro Limited.I have 1.5
                years of experience in Java.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
