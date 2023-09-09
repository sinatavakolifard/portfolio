import { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { ImMail4 } from "react-icons/im";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const NavBar = ({ scroll }: { scroll: (i: number) => void }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [hamburger, setHamburger] = useState(true);

  // const ref = useRef<HTMLInputElement>(null);
  const navBarRef = useRef<HTMLDivElement>(null);

  const navItems = ["Home", "About", "Skills", "Projects", "Education"];

  // const handleClick = () => {
  // ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  // const checkSelectedItem = () => {
  //   const scrollY = window.scrollY + 200;
  //   const innerHeight = window.innerHeight;
  //   if (
  //     scrollY < 5 * innerHeight &&
  //     scrollY >= 4 * innerHeight &&
  //     selectedItem != 4
  //   ) {
  //     // console.log(selectedItem)
  //     setSelectedItem(4);
  //   } else if (
  //     scrollY < 4 * innerHeight &&
  //     scrollY >= 3 * innerHeight &&
  //     selectedItem != 3
  //   ) {
  //     // console.log(selectedItem)
  //     setSelectedItem(3);
  //   } else if (
  //     scrollY < 3 * innerHeight &&
  //     scrollY >= 2 * innerHeight &&
  //     selectedItem != 2
  //   ) {
  //     // console.log(selectedItem)
  //     setSelectedItem(2);
  //   } else if (
  //     scrollY < 2 * innerHeight &&
  //     scrollY >= innerHeight &&
  //     selectedItem != 1
  //   ) {
  //     // console.log(selectedItem)
  //     setSelectedItem(1);
  //   } else if (scrollY < innerHeight) {
  //     // console.log(selectedItem)
  //     setSelectedItem(0);
  //   }
  // };

  // const checkNavbar = () => {
  //   if (window.innerWidth > 1200) {
  //     setHamburger(false);
  //   } else {
  //     setHamburger(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", checkSelectedItem);
  //   // window.addEventListener("resize", checkNavbar);

  //   return () => {
  //     window.removeEventListener("scroll", checkSelectedItem);
  //   };
  // }, []);

  const handleHamburger = () => {
    if (window.innerWidth > 1200) {
      return;
    }
    if (!hamburger && navBarRef && navBarRef.current) {
      navBarRef.current.style.setProperty("height", "75px");
    }
    if (hamburger && navBarRef && navBarRef.current) {
      // if (window.innerHeight > 600)
      //   navBarRef.current.style.setProperty("height", "100vh");
      // else navBarRef.current.style.setProperty("height", "auto");
      navBarRef.current.style.setProperty("height", "auto");
    }
    setHamburger(!hamburger);
  };

  return (
    <div ref={navBarRef} className={styles.navBar}>
      <div className={styles.navIcons}>
        <div className={styles.logo}>
          <p className={styles.logoText}>Sina</p>
        </div>
        <div className={styles.hamburgerDiv}>
          {hamburger ? (
            <RxHamburgerMenu
              size="35"
              className={styles.hamburgerIcon}
              onClick={() => handleHamburger()}
            />
          ) : (
            <RxCross2
              size="35"
              className={styles.hamburgerIcon}
              onClick={() => handleHamburger()}
            />
          )}
        </div>
      </div>

      <div className={styles.navContent}>
        <ul className={styles.navItems}>
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className={[
                selectedItem === index && styles.selected,
                styles.navItem,
              ].join(" ")}
              onClick={() => {
                handleHamburger();
                scroll(index);
                setSelectedItem(index);
              }}
            >
              {navItem}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.navSocialMedia}>
        <a
          href="mailto:tavakolifard.sina@gmail.com"
          className={styles.navSocialMediaItem}
        >
          <ImMail4 size={30} />
        </a>
        <a
          href="https://linkedin.com/in/sina-tavakolifard-538990269"
          className={styles.navSocialMediaItem}
        >
          <BsLinkedin size={30} />
        </a>
        <a
          href="https://github.com/sinatavakolifard"
          className={styles.navSocialMediaItem}
        >
          <BsGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
