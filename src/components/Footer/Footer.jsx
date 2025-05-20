import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerDecoration from "../../assets/footer-decoration.png";
import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const scrollToTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <footer className={`${styles.footer} ${styles.secondaryDivider}`}>
         <div className={styles.container}>
            <img src={footerDecoration} alt="" className={styles.decoration} />
            <div className={styles.content}>
               <div className={styles.section}>
                  <Link to="/" className={styles.logoLink} onClick={scrollToTop}>
                     <img src={logo} alt="logo" className={styles.logo} />
                  </Link>
               </div>

               <div className={styles.section}>
                  <div className={styles.contactContainer}>
                     <ul className={styles.contactList}>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-phone-volume"
                              className="icons"
                           />
                           <a
                              href="https://web.whatsapp.com/send?phone=3134535196&text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%21"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              +57 (313) 453-5196
                           </a>
                        </li>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-brands fa-square-instagram"
                              className="icons"
                           />
                           <a
                              href="https://www.instagram.com/soleriabaldoseria"
                              target="_blank"
                           >
                              @soleriabaldoseria
                           </a>
                        </li>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-brands fa-tiktok"
                              className="icons"
                           />
                           <a
                              href="https://www.tiktok.com/@soleria.baldoseria"
                              target="_blank"
                           >
                              @soleria.baldoseria
                           </a>
                        </li>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-envelope"
                              className="icons"
                           />
                           <a
                              href="mailto:soleria.baldosas.hidraulicas@gmail.com"
                              target="_blank"
                           >
                              soleria.soporte@gmail.com
                           </a>
                        </li>
                     </ul>
                     <ul className={styles.contactList}>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-clipboard-list"
                              className="icons"
                           />
                           <a
                              href="/pdf/ficha-tecnica.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Ficha tecnica
                           </a>
                        </li>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-screwdriver-wrench"
                              className="icons"
                           />
                           <a
                              href="/pdf/instructivo-instalacion.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Instructivo de instalación
                           </a>
                        </li>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-file-contract"
                              className="icons"
                           />
                           <a
                              href="/pdf/terminos-condiciones.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Términos y condiciones
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className={styles.bottom}>
               <p>&copy; {currentYear} Soleria | Todos los derechos reservados.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
