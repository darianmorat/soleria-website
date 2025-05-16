import visualizador1 from "../assets/tiles/para visualizador1.png";
import visualizador2 from "../assets/tiles/para visualizador2.png";
import visualizador3 from "../assets/tiles/para visualizador3.png";

export const Crafting = () => {
   return (
      <section className="crafting-section">
         <div className="content-wrapper">
            <h2 className="section-title">Arte hecho a mano</h2>
            <div className="title-separation"></div>
            <div className="crafting-content">
               <div className="crafting-video">
                  <div className="video-placeholder">
                     <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube-nocookie.com/embed/_KWZrOZmyUs?si=MRpgzJtuRWgp51TU"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     ></iframe>
                  </div>
                  <br />
                  <p>
                     Cada baldosa se hace una por una, con pigmentos minerales, moldes y
                     fuerza humana, es un oficio que resiste al tiempo y a las modas, y en
                     Solería, lo mantenemos vivo.
                  </p>
               </div>
               <div className="crafting-info">
                  <div className="layers-info">
                     {/* <h3>Hecha en capas</h3> */}
                     <div className="layer-item">
                        <div className="layer-top">
                           <img src={visualizador1} alt="" />
                        </div>
                        <div className="layer-details">
                           <li>Es donde se encuentra el diseño y el color.</li>
                           <li>Espesor: entre 2 y 4 mm.</li>
                           <li>
                              Compuesta por cemento blanco, marmolina, pigmentos minerales
                              y agua.
                           </li>
                        </div>
                     </div>
                     <div className="layer-item">
                        <div className="layer-top">
                           <img src={visualizador2} alt="" />
                        </div>
                        <div className="layer-details">
                           <li>Compuesta por cemento gris y arena.</li>
                           <li>Espesor: entre 5 y 8 mm.</li>
                           <li>
                              Sirve de transición y absorbe el exceso de agua de la capa
                              de vista.
                           </li>
                        </div>
                     </div>
                     <div className="layer-item">
                        <div className="layer-top">
                           <img src={visualizador3} alt="" />
                        </div>
                        <div className="layer-details">
                           <li>Da estructura y resistencia a la baldosa.</li>
                           <li>
                              Espesor: el resto de la baldosa (hasta completar 18–25 mm
                              aprox.)
                           </li>
                           <li>
                              Compuesta por cemento de alta resistencia y áridos más
                              gruesos.
                           </li>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
