import { forwardRef } from "react";
import styles from "./Projects.module.css";

const Project = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h2 className={styles.h2}>Projects:</h2>

      <div className={styles.projects}>
        <div className={styles.project}>
          <h3 className={styles.h3}>EasyGerman</h3>
          <p className={styles.projectDescription}>
            A full-stack tool that turns German podcast audio into a
            study-ready vocabulary list. It runs an NLP pipeline using Whisper
            for transcription and spaCy for lemmatization, then applies
            frequency-based difficulty filtering and English translations.
            Built with a Python/Flask back-end and a React 18 front-end, with
            both a CLI and a web app for saving and re-processing extractions.
          </p>
          <a
            className={styles.links}
            href="https://easygerman.sinacodes.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Website
          </a>
          <a
            className={styles.links}
            href="https://github.com/sinatavakolifard/easygerman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Github Repo
          </a>
        </div>

        <div className={styles.project}>
          <h3 className={styles.h3}>Human Activity Recognition (DFKI)</h3>
          <p className={styles.projectDescription}>
            A cross-platform mobile application for recognizing human activities
            from sensor data, built with Flutter and Dart. It is backed by a
            FastAPI service with a PostgreSQL database that handles data
            collection, storage, and model serving.
          </p>
          <a
            className={styles.links}
            href="https://github.com/sinatavakolifard/dfki_human_activity_recognition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to App Repo
          </a>
          <a
            className={styles.links}
            href="https://github.com/sinatavakolifard/dfki_har_backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Backend Repo
          </a>
        </div>

        <div className={styles.project}>
          <h3 className={styles.h3}>Portfolio Website</h3>
          <p className={styles.projectDescription}>
            Designed and built this personal portfolio website to present my
            background, skills, projects, and education in one place, using
            React 18 and TypeScript.
          </p>
          <a
            className={styles.links}
            href="https://sinacodes.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Website
          </a>
          <a
            className={styles.links}
            href="https://github.com/sinatavakolifard/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Github Repo
          </a>
        </div>

        <div className={styles.project}>
          <h3 className={styles.h3}>Deutsch Artikel Test</h3>
          <p className={styles.projectDescription}>
            A web app for practicing the articles (der/die/das) of German words,
            built with a Node.js/Express.js back-end and a MongoDB database. It
            includes features such as user authentication, multiple tests, and
            answer review.
          </p>
          <a
            className={styles.links}
            href="https://deu.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Website
          </a>
        </div>
      </div>
    </div>
  );
});

export default Project;
