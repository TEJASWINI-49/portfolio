import React from "react";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "../Experience/Experience.module.css";
export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>SKILLS AND EXPERIENCE</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <p>{skill.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li className={styles.historyItem} key={id}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                ></img>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((exp, id) => {
                      return <li key={id}>{exp}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
