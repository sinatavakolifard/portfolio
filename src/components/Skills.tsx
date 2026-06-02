import { forwardRef } from "react";
import styles from "./Skills.module.css";

const Skills = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.h2}>Skills:</h2>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Test Automation:</h3>
          <ul>
            <li>Playwright</li>
            <li>Selenium</li>
            <li>Appium</li>
            <li>Pytest</li>
            <li>Postman</li>
            <li>Allure Reports</li>
            <li>Jenkins</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Machine Learning:</h3>
          <ul>
            <li>PyTorch</li>
            <li>spaCy</li>
            <li>Whisper</li>
            <li>Data Mining</li>
            <li>Information Retrieval</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Front-End & Mobile:</h3>
          <ul>
            <li>React</li>
            <li>Flutter</li>
            <li>HTML5, CSS3</li>
            <li>SASS/SCSS</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Back-End:</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>FastAPI</li>
            <li>RESTful API Development</li>
            <li>Authentication & Authorization</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Languages:</h3>
          <ul>
            <li>Python</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Dart</li>
          </ul>
        </div>
        <div className={styles.skill}>
          <h3 className={styles.h3}>Database:</h3>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>MySQL</li>
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
            <li>Jira</li>
            <li>Linux</li>
            <li>MacOS</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Skills;
