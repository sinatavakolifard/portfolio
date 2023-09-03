import { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css"

// const NavBar = (scroll: (i: number) => void) => {
const NavBar = ({ scroll }: {scroll: (i: number) => void}) => {

  const [selectedItem, setSelectedItem] = useState(0)

  const ref = useRef<HTMLInputElement>(null);

  // const handleClick = () => {
    // ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  const checkSelectedItem = () => {
    const scrollY = window.scrollY + 200
    const innerHeight = window.innerHeight
    if (scrollY < 5 * innerHeight && scrollY >= 4 * innerHeight && selectedItem != 4) {
      // console.log(selectedItem)
      setSelectedItem(4)
    }
    else if (scrollY < 4 * innerHeight && scrollY >= 3 * innerHeight && selectedItem != 3) {
      // console.log(selectedItem)
      setSelectedItem(3)
    }
    else if (scrollY < 3 * innerHeight && scrollY >= 2 * innerHeight && selectedItem != 2) {
      // console.log(selectedItem)
      setSelectedItem(2)
    }
    else if (scrollY < 2 * innerHeight && scrollY >= innerHeight && selectedItem != 1) {
      // console.log(selectedItem)
      setSelectedItem(1)
    }
    else if (scrollY < innerHeight){
      // console.log(selectedItem)
      setSelectedItem(0)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkSelectedItem)

    return () => {
      window.removeEventListener("scroll", checkSelectedItem);
   }
  }, [])

  

  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>Sina</div>
      <ul className={styles.NavItems}>
        <li className={selectedItem === 0 ? styles.selected : ""} onClick={() => scroll(0)}>Home</li>
        <li className={selectedItem === 1 ? styles.selected : ""} onClick={() => scroll(1)}>About</li>
        <li className={selectedItem === 2 ? styles.selected : ""} onClick={() => scroll(2)}>Skills</li>
        <li className={selectedItem === 3 ? styles.selected : ""} onClick={() => scroll(3)}>Projects</li>
        <li className={selectedItem === 4 ? styles.selected : ""} onClick={() => scroll(4)}>Education</li>
      </ul>
    </div>
  );
};

export default NavBar;
