import { useNavigate } from "react-router-dom";
import { Section } from "../../../../components/Section/Section";
import aumentedReality from "../../../../assets/sections/visualizer/home-design.jpg";
import styles from "./Visualizer.module.css";

export const Visualizer = () => {
   const navigate = useNavigate();

   return (
      <Section divider="primary">
         <div className={styles.content}>
            <div className={styles.information}>
               <h2>Hazlo real</h2>
               <div>
                  <p>
                     ¿Te gustaría ver cómo se vería esa baldosa en tu propio espacio? Con
                     esta innovadora herramienta, puedes previsualizar nuestros diseños en
                     3D directamente desde tu celular, de forma sencilla y realista,
                     colocándolos exactamente en el lugar que elijas.
                  </p>
                  <p>
                     Solo tienes que activar la cámara, apuntar hacia el piso y dejar que
                     la magia ocurra: observa cómo la baldosa cobra vida en tu entorno,
                     ayudándote a tomar la mejor decisión antes de comprar.
                  </p>
               </div>
               <button className={styles.button} onClick={() => navigate("#")}>
                  Probar visualizador 3D
               </button>
            </div>

            <div className={styles.image}>
               <img src={aumentedReality} alt="imagen de realidad aumentada" />
            </div>
         </div>
      </Section>
   );
};
