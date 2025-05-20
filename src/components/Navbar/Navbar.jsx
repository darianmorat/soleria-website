import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DarkModeToggle } from "../DarkMode/DarkModeToggle";
import logo from "../../assets/logo/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const navigate = useNavigate();

   const mobileMenuToggle = () => {
      setIsMenuOpen((prevState) => !prevState);
   };

   const scrollToTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <nav className={styles.navbar}>
         <div className={styles.container}>
            <div className={styles.logoContainer}>
               <Link to="/" onClick={scrollToTop}>
                  <img src={logo} alt="logo" className={styles.logo} />
               </Link>
            </div>

            {isMenuOpen ? (
               <div className={styles.menuLinks}>
                  <Link to="/" className={styles.link} onClick={() => mobileMenuToggle()}>
                     Volver a inicio
                  </Link>
                  <Link to="#" className={styles.link} onClick={() => mobileMenuToggle()}>
                     Sobre nosotros
                  </Link>
                  <Link
                     to="/"
                     className={styles.link}
                     onClick={() => {
                        mobileMenuToggle();
                        navigate("/");
                        setTimeout(() => {
                           const element = document.getElementById("questions");
                           if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                           }
                        }, 500);
                     }}
                  >
                     Preguntas frecuentes
                  </Link>
                  <Link
                     to="/editor"
                     className={styles.link}
                     onClick={() => mobileMenuToggle()}
                  >
                     Crear baldosa
                  </Link>
               </div>
            ) : (
               <div className={styles.links}>
                  <Link to="#" className={styles.link}>
                     Sobre nosotros
                  </Link>
                  <Link
                     to="/"
                     className={styles.link}
                     onClick={() => {
                        navigate("/");
                        setTimeout(() => {
                           const element = document.getElementById("questions");
                           if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                           }
                        }, 500);
                     }}
                  >
                     Preguntas frecuentes
                  </Link>
                  <button
                     className={styles.createBtn}
                     onClick={() => {
                        navigate("/editor"), scrollToTop();
                     }}
                  >
                     Crear baldosa
                  </button>
                  <DarkModeToggle />
               </div>
            )}

            <div className={styles.menuBtn} onClick={() => mobileMenuToggle()}>
               {isMenuOpen ? (
                  <>
                     <button>
                        <FontAwesomeIcon icon="fa-solid fa-xmark" />
                     </button>
                  </>
               ) : (
                  <>
                     <DarkModeToggle />
                     <button className={`${styles.icon} ${styles.iconBars}`}>
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                     </button>
                  </>
               )}
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
