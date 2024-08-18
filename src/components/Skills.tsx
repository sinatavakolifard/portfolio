import { forwardRef } from "react";
import styles from "./Skills.module.css";

const Skills = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.h2}>Skills:</h2>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Machine Learning:</h3>
          <ul>
            <li>Python</li>
            <li>Tensorflow</li>
            <li>Data Mining</li>
            <li>Information retrieval</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h3 className={styles.h3}>QE and Test:</h3>
          <ul>
            <li>Appium</li>
            <li>Selenium</li>
            <li>Jira</li>
            <li>Jenkins</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Front-End:</h3>
          <ul>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5, CSS3, SASS/SCSS</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Back-End:</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful API Development</li>
            <li>Authentication & Authorization</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Database:</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>SQL Server</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Version Control:</h3>
          <ul>
            <li>Git</li>
            <li>Github/Gitlab/BitBucket</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Tools & Platforms:</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Skills;
