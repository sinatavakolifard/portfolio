import { forwardRef } from "react";
import styles from "./Home.module.css";
import myPicture from "/public/images/SinaTavakolifard.webp";

const Home = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.text}>
        <p>
          Hi, I am{" "}
          <span className={[styles.name, styles.color].join(" ")}>
            Sina Tavakolifard
          </span>
        </p>
        {/* <p><span className={[styles.name, styles.color].join(" ")}></span></p> */}
        <p>A Quality Engineer and Developer in Test</p>
      </div>
      <div className={styles.pictureDiv}>
        <img
          className={styles.picture}
          src={myPicture}
          alt="SinaTavakolifardPicture"
        />
      </div>
    </div>
  );
});

export default Home;
