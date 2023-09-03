import { forwardRef } from "react";
import styles from "./Education.module.css";
import rptuLogo from "../images/rptu-logo.webp";
import tabrizUniLogo from "../images/tabrizUni-logo.webp";

const Education = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.h2}>Education:</h2>
      <div className={styles.educations}>
        <div className={styles.education}>
          <img className={styles.uniLogo} src={rptuLogo} alt="RPTU Logo" />
          <div>
            <h3>Master of Science in Computer Science</h3>
            <p>RPTU Kaiserslautern - Germany</p>
            <p>2023 - Current</p>
          </div>
        </div>
        <div className={styles.education}>
          <img
            className={styles.uniLogo}
            src={tabrizUniLogo}
            alt="Tabriz University Logo"
          />
          <div>
            <h3>Bachelor of Science in Computer Engineering</h3>
            <p>University of Tabriz - Iran</p>
            <p>2018 - 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Education;