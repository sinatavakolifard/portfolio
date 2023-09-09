import { forwardRef } from "react";
import styles from "./Projects.module.css";

const Project = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.h2}>Projects:</h2>

      <div className={styles.projects}>
        <div className={styles.project}>
          <h3 className={styles.h3}>Project 1: Deutsch Artikel Test</h3>
          <p className={styles.projectDescription}>
            Built an "Artikel Test" website for myself, to practice artikels for
            words in German, using Node.js/Express.js for the back-end and
            MongoDB as database. Implemented features such as user
            authentication, multiple test and showing answers, ... .
          </p>
          <a
            className={styles.links}
            href="https://deu.onrender.com"
            target="_blank"
          >
            Link to Website
          </a>
          <a className={styles.links} href="">
            Link to Github Repo
          </a>
        </div>

        <div className={styles.project}>
          <h3 className={styles.h3}>Project 2: Portfolio Website</h3>
          <p className={styles.projectDescription}>
            Designed and built a personal a "Portfolio" website for myself, to
            provide a complete information about myself including some of my
            work experiences, my projects, my education and so on, using React
            18 and TypeScript.
          </p>
          <a
            className={styles.links}
            href="https://sinacodes.de"
            target="_blank"
          >
            Link to Website
          </a>
          <a className={styles.links} href="https://github.com/sinatavakolifard/portfolio">
            Link to Github Repo
          </a>
        </div>
      </div>
    </div>
  );
});

export default Project;
