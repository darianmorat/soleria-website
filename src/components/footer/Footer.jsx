import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Footer.css"; // Make sure to create this CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const scrollToTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <footer className="footer">
         <div className="footer-container">
            <div className="footer-content">
               <div className="footer-section">
                  <Link to="/" className="footer-logo" onClick={scrollToTop}>
                     <img src={logo} alt="logo" className="footer-logo" />
                  </Link>
                  <p className="footer-description">
                     Creando diseños de baldosas personalizados que transforman tu espacio
                     en algo extraordinario.
                  </p>
               </div>

               <div className="footer-section">
                  <h3 className="footer-heading">Enlaces</h3>
                  <ul className="footer-links">
                     <li>
                        <FontAwesomeIcon icon="fa-solid fa-paperclip" className="icons" />
                        <Link to="/" onClick={scrollToTop}>
                           Inicio
                        </Link>
                     </li>
                     <li>
                        <FontAwesomeIcon icon="fa-solid fa-paperclip" className="icons" />
                        <Link to="#">Sobre Nosotros</Link>
                     </li>
                     <li>
                        <FontAwesomeIcon icon="fa-solid fa-paperclip" className="icons" />
                        <Link to="#">Galería</Link>
                     </li>
                     <li>
                        <FontAwesomeIcon icon="fa-solid fa-paperclip" className="icons" />
                        <Link to="#">Preguntas Frecuentes</Link>
                     </li>
                  </ul>
               </div>

               <div className="footer-section">
                  <h3 className="footer-heading">Contacto</h3>
                  <ul className="footer-contact">
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
                        <FontAwesomeIcon icon="fa-brands fa-tiktok" className="icons" />
                        <a
                           href="https://www.tiktok.com/@soleria.baldoseria"
                           target="_blank"
                        >
                           @soleria.baldoseria
                        </a>
                     </li>
                     <li>
                        <FontAwesomeIcon icon="fa-solid fa-envelope" className="icons" />
                        <Link to="mailto:soleria.baldosas.hidraulicas@gmail.com">
                           soleria.baldosas@gmail.com
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="footer-bottom">
               <p>&copy; {currentYear}. Todos los derechos reservados.</p>
               <div className="footer-legal">
                  <Link to="#">Política de Privacidad</Link>
                  <Link to="#">Términos de Servicio</Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
