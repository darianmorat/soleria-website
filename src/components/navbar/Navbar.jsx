import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./Navbar.css"; // Make sure to create this CSS file
import { useState } from "react";

const Navbar = () => {
   const [menu, setMenu] = useState(false);

   const navigate = useNavigate();

   const mobileMenuToggle = () => {
      setMenu((prevState) => !prevState);
   };

   const scrollToTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <nav className="navbar">
         <div className="navbar-container">
            <div className="navbar-logo">
               <Link to="/" onClick={scrollToTop}>
                  <img src={logo} alt="logo" className="logo" />
               </Link>
            </div>

            <div className="navbar-links">
               <Link to="#" className="nav-link">
                  Sobre Nosotros
               </Link>
               <a href="#questions" className="nav-link">
                  Preguntas Frecuentes
               </a>
               <button
                  className="primary-button"
                  onClick={() => {
                     navigate("/editor"), scrollToTop();
                  }}
               >
                  Crear Baldosa
               </button>
            </div>

            <div className="mobile-menu-icon" onClick={() => mobileMenuToggle()}>
               {menu ? (
                  <>
                     <strong>x Close</strong>
                  </>
               ) : (
                  <>
                     <span></span>
                     <span></span>
                     <span></span>
                  </>
               )}
            </div>
         </div>
         {menu && (
            <>
               <div className="menu-links">
                  <Link to="#" className="nav-link" onClick={() => mobileMenuToggle()}>
                     Sobre Nosotros
                  </Link>
                  <Link to="#" className="nav-link" onClick={() => mobileMenuToggle()}>
                     Preguntas Frecuentes
                  </Link>
                  <Link
                     to="/editor"
                     className="nav-link"
                     onClick={() => mobileMenuToggle()}
                  >
                     Crear Baldosa
                  </Link>
               </div>
            </>
         )}
      </nav>
   );
};

export default Navbar;
