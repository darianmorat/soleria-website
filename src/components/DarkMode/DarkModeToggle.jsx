import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DarkModeToggle.module.css";
import { useState } from "react";

export const DarkModeToggle = () => {
   const [darkMode, setDarkMode] = useState(false);

   const handleClick = () => {
      setDarkMode(!darkMode);
   };

   return (
      <button className={styles.icon} onClick={handleClick}>
         {darkMode ? (
            <FontAwesomeIcon icon="fa-solid fa-sun" />
         ) : (
            <FontAwesomeIcon icon="fa-solid fa-moon" />
         )}
      </button>
   );
};
