import { Link } from "react-router-dom";
// import logo  from "../../assets/logoSlogan.svg";
import "./Navbar.css"; // Make sure to create this CSS file

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="navbar-container">
            <div className="navbar-logo">
               <Link to="/">
                  {/* <img src={logo} alt="logo" className="logo" /> */}
                  <img src="darian" alt="logo" />
               </Link>
            </div>

            <div className="navbar-links">
               <Link to="/about" className="nav-link">
                  Sobre Nosotros
               </Link>
               <Link to="/faq" className="nav-link">
                  Preguntas Frecuentes
               </Link>
               <Link to="/editor" className="nav-button">
                  Crear Baldosa
               </Link>
            </div>

            <div className="mobile-menu-icon">
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
