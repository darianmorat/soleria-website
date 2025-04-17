import { useNavigate } from "react-router-dom";

const HomePage = () => {
   const navigate = useNavigate();

   return (
      <div className="landing-container">
         {/* Hero Section */}
         <section className="hero-section">
            <div className="content-wrapper">
               <h1 className="hero-title">Hacemos baldosas hidraulicas</h1>
               <p className="hero-subtitle">
                  Solería nació del deseo de recuperar la belleza de lo esencial.
                  Combinamos diseño contemporáneo con saberes tradicionales.
               </p>
               <button className="secondary-button" onClick={() => navigate("#")}>
                  Explorar sitio
               </button>
            </div>
         </section>

         {/* "De la vista nace el amor" Section */}
         <section className="philosophy-section">
            <div className="content-wrapper">
               <h2 className="section-title">De la vista nace el amor</h2>
               <div className="philosophy-content">
                  <div className="philosophy-text">
                     <p>
                        De la vista nace el amor porque antes de caminarlo, lo miras,
                        Porque un patrón puede enamorarte como una mirada. Porque hay
                        suelos que no solo se pisan, se contemplan. Porque el color
                        despierta la memoria y la forma te invita a imaginar.
                     </p>
                     <p>
                        Porque una baldosa bien hecha no es solo material, es lenguaje, es
                        alma, es arte en lo cotidiano. En Solería, creemos en eso; en
                        enamorarte desde el primer vistazo, por eso de la vista nace el
                        amor, y el amor empieza aqui.
                     </p>
                     <button
                        className="secondary-button"
                        onClick={() => navigate("/contact")}
                     >
                        Hablemos de tu proyecto
                     </button>
                  </div>
                  <div className="philosophy-video">
                     <div className="video-placeholder">
                        <p>VIDEO</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Crafting Process Section */}
         <section className="crafting-section">
            <div className="content-wrapper">
               <h2 className="section-title">Arte hecho a mano</h2>
               <div className="crafting-content">
                  <div className="crafting-video">
                     <div className="video-placeholder">
                        <p>VIDEO</p>
                     </div>
                  </div>
                  <div className="crafting-info">
                     <p className="crafting-description">
                        Cada baldosa se hace una por una, con pigmentos minerales, moldes
                        y fuerza humana, es un oficio que resiste al tiempo y a las modas,
                        y en Solería, lo mantenemos vivo.
                     </p>

                     <div className="layers-info">
                        <h3>Hecha en capas</h3>
                        <div className="layer-item">
                           <div className="layer-color layer-top"></div>
                           <div className="layer-details">
                              <p>Es donde se encuentra el diseño y el color.</p>
                              <p>
                                 Compuesta por cemento blanco, marmolina, pigmentos
                                 minerales y agua.
                              </p>
                              <p>Espesor: entre 2 y 4 mm.</p>
                           </div>
                        </div>
                        <div className="layer-item">
                           <div className="layer-color layer-middle"></div>
                           <div className="layer-details">
                              <h4>
                                 Sirve de transición y absorbe el exceso de agua de la
                                 capa de vista.
                              </h4>
                              <p>Compuesta por cemento gris y arena.</p>
                              <p>Espesor: entre 5 y 8 mm.</p>
                           </div>
                        </div>
                        <div className="layer-item">
                           <div className="layer-color layer-bottom"></div>
                           <div className="layer-details">
                              <h4>Da estructura y resistencia a la baldosa.</h4>
                              <p>
                                 Compuesta por cemento de alta resistencia y áridos más
                                 gruesos.
                              </p>
                              <p>
                                 Espesor: el resto de la baldosa (hasta completar 18–25 mm
                                 aprox.)
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Process Steps Section */}
         <section className="process-section">
            <div className="content-wrapper">
               <h2 className="section-title">¿Te gustaría crear con nosotros?</h2>
               <div className="process-grid">
                  <div className="process-step">
                     <div className="step-number">1</div>
                     <h3>Te enamoras</h3>
                     <p>
                        Descubrís un diseño, una textura, un color. Ya sea en nuestro
                        catálogo, redes o en un proyecto real: sentís que eso va contigo.
                     </p>
                  </div>
                  <div className="process-step">
                     <div className="step-number">2</div>
                     <h3>Nos contactas</h3>
                     <p>
                        Nos escribís para contarnos tu idea, espacio o necesidad. Te
                        ayudamos a elegir la baldosa perfecta, o diseñamos una juntos.
                     </p>
                  </div>
                  <div className="process-step">
                     <div className="step-number">3</div>
                     <h3>Cotizamos y ajustamos</h3>
                     <p>
                        Hacemos una cotización basada en el diseño, cantidad y lugar de
                        entrega. Si querés personalizar, te mostramos muestras o
                        simulaciones hasta que sea perfecto.
                     </p>
                  </div>
                  <div className="process-step">
                     <div className="step-number">4</div>
                     <h3>Manos al arte</h3>
                     <p>
                        Una vez aprobás, ponemos manos a la obra. Cada baldosa se hace una
                        a una, con calma y precisión.
                     </p>
                  </div>
                  <div className="process-step">
                     <div className="step-number">5</div>
                     <h3>Te lo enviamos o lo instalamos</h3>
                     <p>
                        Coordinamos la entrega o instalación con nuestro equipo o aliados.
                        Y si lo deseás, ofrecemos servicio de pulido para que el acabado
                        sea perfecto.
                     </p>
                  </div>
                  <div className="process-step">
                     <div className="step-number">6</div>
                     <h3>Tu espacio, tu historia</h3>
                     <p>
                        La transformación está lista. Y vos ya no caminás sobre un suelo
                        cualquiera… sino sobre una historia que elegiste contar.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* "De la vista nace el amor" Section */}
         <section className="visualizer-section">
            <div className="content-wrapper">
               <h2 className="section-title">Crea tu baldosa</h2>
               <div className="philosophy-content">
                  <div className="philosophy-text">
                     <p>
                        De la vista nace el amor porque antes de caminarlo, lo miras,
                        Porque un patrón puede enamorarte como una mirada. Porque hay
                        suelos que no solo se pisan, se contemplan. Porque el color
                        despierta la memoria y la forma te invita a imaginar.
                     </p>
                     <button
                        className="secondary-button"
                        onClick={() => navigate("/editor")}
                     >
                        Crear Baldosa
                     </button>
                  </div>
                  <div className="philosophy-video">
                     <div className="color-palette">
                        <h3>Nuestra paleta de colores</h3>
                        <div className="color-grid">
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#FFFFFF" }}
                           >
                              <span>Blanco</span>
                           </div>
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#000000" }}
                           >
                              <span>Negro</span>
                           </div>
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#F5A9A9" }}
                           >
                              <span>Rojo claro</span>
                           </div>
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#E53935" }}
                           >
                              <span>Rojo normal</span>
                           </div>
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#B71C1C" }}
                           >
                              <span>Rojo fuerte</span>
                           </div>
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#FFF9C4" }}
                           >
                              <span>Amarillo claro</span>
                           </div>
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#FFEB3B" }}
                           >
                              <span>Amarillo normal</span>
                           </div>
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#F57F17" }}
                           >
                              <span>Amarillo fuerte</span>
                           </div>
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#C8E6C9" }}
                           >
                              <span>Verde pastel</span>
                           </div>
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#2E7D32" }}
                           >
                              <span>Verde oscuro</span>
                           </div>
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#4CAF50" }}
                           >
                              <span>Verde</span>
                           </div>
                           <div
                              className="color-item"
                              style={{ backgroundColor: "#808000" }}
                           >
                              <span>Verde aceituna</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 3D Visualizer Section */}
         <section className="philosophy-section">
            <div className="content-wrapper">
               <div className="visualizer-content">
                  <div className="visualizer-info">
                     <h2 className="section-title">Hazlo real</h2>
                     <p>
                        ¿Quieres ver cómo se vería esa baldosa en tu espacio? Con esta
                        herramienta puedes previsualizar nuestros diseños en 3D
                        directamente desde tu celular, y colocarlos en el lugar que
                        elijas.
                     </p>
                     <p>
                        Solo tienes que activar la cámara, apuntar hacia el piso y dejar
                        que la baldosa hable por sí sola.
                     </p>
                     <button
                        className="secondary-button"
                        onClick={() => navigate("/visualizer")}
                     >
                        Probar visualizador 3D
                     </button>
                  </div>

                  <div className="philosophy-video">
                     <div className="video-placeholder">
                        <p>VIDEO</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="cta-section">
            <div className="content-wrapper">
               <h2 className="cta-title">¿Te gustaría crear con nosotros?</h2>
               <div className="cta-buttons">
                  <button className="cta-button" onClick={() => navigate("/catalog")}>
                     Conoce nuestro catálogo
                  </button>
                  <button className="cta-button" onClick={() => navigate("/contact")}>
                     Asesoría personalizada
                  </button>
                  <button className="cta-button" onClick={() => navigate("/editor")}>
                     Estoy listo para elegir
                  </button>
               </div>
            </div>
         </section>
      </div>
   );
};

export default HomePage;
