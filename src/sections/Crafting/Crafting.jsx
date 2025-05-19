import visualizador1 from "../../assets/tiles/para visualizador1.png";
import visualizador2 from "../../assets/tiles/para visualizador2.png";
import visualizador3 from "../../assets/tiles/para visualizador3.png";
import { Section } from "../../components/Section/Section";
import styles from "./Crafting.module.css";

export const Crafting = () => {
   return (
      <Section title="Arte hecho a mano" bgColor="primary">
         <div className={styles.content}>
            <div className={styles.video}>
               <div className={styles.videoWrapper}>
                  <iframe
                     width="100%"
                     height="100%"
                     src="https://www.youtube-nocookie.com/embed/_KWZrOZmyUs?si=MRpgzJtuRWgp51TU"
                     title="YouTube video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  ></iframe>
               </div>
               <p>
                  Cada baldosa se hace una por una, con pigmentos minerales, moldes y
                  fuerza humana, es un oficio que resiste al tiempo y a las modas, y en
                  Solería, lo mantenemos vivo.
               </p>
            </div>

            <div className={styles.infoContainer}>
               <div className={styles.layerItem}>
                  <div className={styles.layerTop}>
                     <img src={visualizador1} alt="Capa superior de la baldosa" />
                  </div>
                  <div className={styles.layerDetails}>
                     <li>Es donde se encuentra el diseño y el color.</li>
                     <li>Espesor: entre 2 y 4 mm.</li>
                     <li>
                        Compuesta por cemento blanco, marmolina, pigmentos minerales y
                        agua.
                     </li>
                  </div>
               </div>

               <div className={styles.layerItem}>
                  <div className={styles.layerTop}>
                     <img src={visualizador2} alt="Capa intermedia de la baldosa" />
                  </div>
                  <div className={styles.layerDetails}>
                     <li>Compuesta por cemento gris y arena.</li>
                     <li>Espesor: entre 5 y 8 mm.</li>
                     <li>
                        Sirve de transición y absorbe el exceso de agua de la capa de
                        vista.
                     </li>
                  </div>
               </div>

               <div className={styles.layerItem}>
                  <div className={styles.layerTop}>
                     <img src={visualizador3} alt="Capa base de la baldosa" />
                  </div>
                  <div className={styles.layerDetails}>
                     <li>Da estructura y resistencia a la baldosa.</li>
                     <li>
                        Espesor: el resto de la baldosa (hasta completar 18–25 mm aprox.)
                     </li>
                     <li>
                        Compuesta por cemento de alta resistencia y áridos más gruesos.
                     </li>
                  </div>
               </div>
            </div>
         </div>
      </Section>
   );
};
