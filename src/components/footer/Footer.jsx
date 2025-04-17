import { Link } from "react-router-dom";
// import logo from "../../assets/logoSlogan.svg";
import "./Footer.css"; // Make sure to create this CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="footer">
         <div className="footer-container">
            <div className="footer-content">
               <div className="footer-section">
                  <Link to="/" className="footer-logo">
                     {/* <img src={logo} alt="logo" /> */}
                     <img src="darian" alt="logo" />
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
                        <Link to="/">Inicio</Link>
                     </li>
                     <li>
                        <FontAwesomeIcon icon="fa-solid fa-paperclip" className="icons" />
                        <Link to="/about">Sobre Nosotros</Link>
                     </li>
                     <li>
                        <FontAwesomeIcon icon="fa-solid fa-paperclip" className="icons" />
                        <Link to="/gallery">Galería</Link>
                     </li>
                     <li>
                        <FontAwesomeIcon icon="fa-solid fa-paperclip" className="icons" />
                        <Link to="/faq">Preguntas Frecuentes</Link>
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
                        <span>+57 (313) 453-5196</span>
                     </li>
                     <li>
                        <FontAwesomeIcon
                           icon="fa-brands fa-square-instagram"
                           className="icons"
                        />
                        <span>@soleriabaldoseria</span>
                     </li>
                     <li>
                        <FontAwesomeIcon icon="fa-brands fa-tiktok" className="icons" />
                        <span>@soleria.baldoseria</span>
                     </li>
                     <li>
                        <FontAwesomeIcon icon="fa-solid fa-envelope" className="icons" />
                        <span>soleria.baldosas.hidraulicas@gmail.com</span>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="footer-bottom">
               <p>&copy; {currentYear}. Todos los derechos reservados.</p>
               <div className="footer-legal">
                  <Link to="/privacy">Política de Privacidad</Link>
                  <Link to="/terms">Términos de Servicio</Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
