import { forwardRef } from "react";
import styles from "./About.module.css";
import { ImMail4 } from "react-icons/im";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const About = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div>
        <h2 className={styles.h2}>About Me:</h2>
        <p className={styles.aboutMeText}>
          I am a passionate <span>Computer Sciecne</span> master student with
          specializations in <span>Software Engineering</span> and{" "}
          <span>Intelligent Systems</span>, currently working as a {" "}
          <span>Software Developer in Test</span> with hight knowledge in{" "}
          <span>Test Automation</span>. I am dedicated to expanding my
          expertise in <span>Artificial Intelligence</span> and{" "}
          <span>Machine Learning</span> technologies as my specializations. My
          goal is to use my skills to solve problems in efficient way
          while advancing inadvancing the field of AI/ML to stay at the forefront of
          innovative technologies.
        </p>
      </div>
      <div>
        <h2 className={styles.h2}>Contact Information:</h2>
        <ul className={styles.contactItems}>
          <li className={styles.contactItem}>
            <ImMail4 color="white" size="25"></ImMail4>
            <a
              className={styles.links}
              href="mailto:tavakolifard.sina@gmail.com"
            >
              tavakolifard.sina@gmail.com
            </a>
          </li>
          <li className={styles.contactItem}>
            <BsLinkedin color="white" size="25"></BsLinkedin>
            <a
              className={styles.links}
              href="https://linkedin.com/in/sina-tavakolifard-538990269"
              target="_blank"
            >
              https://linkedin.com/in/sina-tavakolifard-538990269
            </a>
          </li>
          <li className={styles.contactItem}>
            <BsGithub color="white" size="25"></BsGithub>
            <a
              className={styles.links}
              href="https://github.com/sinatavakolifard"
              target="_blank"
            >
              https://github.com/sinatavakolifard
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
});

// const About = ({ componentRef }: { componentRef: RefObject<HTMLDivElement> }) => {

//   return (
//     <div ref={componentRef} className={styles.container}>
//       <div></div>
//       <div>
//         <h2 className={styles.h2}>About Me:</h2>
//         <p className={styles.aboutMeText}>
//           I am a passionate and results-driven <span>Full-Stack Web Developer</span> with a
//           strong background in building web applications using <span>React,
//           TypeScript, Node.js, and Express.js</span>. I am dedicated to creating
//           elegant, efficient, and user-friendly solutions for complex problems.
//           My goal is to continue learning and expanding my skill set to stay at
//           the forefront of web development technologies.
//         </p>
//       </div>
//       <div>
//         <h2 className={styles.h2}>Contact Information:</h2>
//         <ul className={styles.contactItems}>
//           <li className={styles.contactItem}>
//             <ImMail4 color="white" size="25"></ImMail4>
//             <a
//               className={styles.links}
//               href="mailto:tavakolifard.sina@gmail.com"
//             >
//               tavakolifard.sina@gmail.com
//             </a>
//           </li>
//           <li className={styles.contactItem}>
//             <BsLinkedin color="white" size="25"></BsLinkedin>
//             <a
//               className={styles.links}
//               href="https://linkedin.com/in/sina-tavakolifard-538990269"
//               target="_blank"
//             >
//               https://linkedin.com/in/sina-tavakolifard-538990269
//             </a>
//           </li>
//           <li className={styles.contactItem}>
//             <BsGithub color="white" size="25"></BsGithub>
//             <a
//               className={styles.links}
//               href="https://github.com/sinatavakolifard"
//               target="_blank"
//             >
//               https://github.com/sinatavakolifard
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

export default About;
