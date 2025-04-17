import { Link } from "react-router-dom";
// import logo  from "../../assets/logoSlogan.svg";
import "./Navbar.css"; // Make sure to create this CSS file
import { useState } from "react";

const Navbar = () => {
   const [menu, setMenu] = useState(false);

   const mobileMenuToggle = () => {
      setMenu((prevState) => !prevState);
   };

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
               <Link to="#" className="nav-link">
                  Sobre Nosotros
               </Link>
               <Link to="#" className="nav-link">
                  Preguntas Frecuentes
               </Link>
               <Link to="/editor" className="nav-button">
                  Crear Baldosa
               </Link>
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
