import { useNavigate } from "react-router-dom";
import { Section } from "../../components/Section/Section";
import styles from "./Visualizer.module.css";

export const Visualizer = () => {
   const navigate = useNavigate();

   return (
      <Section title="Hazlo real" divider="primary">
         <div className={styles.content}>
            <div className={styles.information}>
               <p>
                  ¿Te gustaría ver cómo se vería esa baldosa en tu propio espacio? Con
                  esta innovadora herramienta, puedes previsualizar nuestros diseños en 3D
                  directamente desde tu celular, de forma sencilla y realista,
                  colocándolos exactamente en el lugar que elijas.
               </p>
               <p>
                  Solo tienes que activar la cámara, apuntar hacia el piso y dejar que la
                  magia ocurra: observa cómo la baldosa cobra vida en tu entorno,
                  ayudándote a tomar la mejor decisión antes de comprar.
               </p>
               <button className={styles.button} onClick={() => navigate("#")}>
                  Probar visualizador 3D
               </button>
            </div>

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
            </div>
         </div>
      </Section>
   );
};
