import { Section } from "../../components/Section/Section";
import styles from "./Process.module.css";
import image1 from "../../assets/processSection/PASO 1.png";
import image2 from "../../assets/processSection/PASO 2.png";
import image3 from "../../assets/processSection/PASO 3.png";
import image4 from "../../assets/processSection/PASO 4.png";
import image5 from "../../assets/processSection/PASO 5.png";
import image6 from "../../assets/processSection/PASO 6.png";

export const Process = () => {
   return (
      <Section divider="primary">
         <h2 className={styles.title}>¿Cómo creamos juntos?</h2>
         <div className={styles.grid}>
            <div className={styles.step}>
               <img src={image1} alt="image-1" />
               <div className={styles.number}>#1</div>
               <h3>Te enamoras</h3>
               <p>
                  Descubrís un diseño, una textura, un color. Ya sea en nuestro catálogo,
                  redes o en un proyecto real: sentís que eso va contigo.
               </p>
            </div>
            <div className={styles.step}>
               <img src={image2} alt="image-1" />
               <div className={styles.number}>#2</div>
               <h3>Nos contactas</h3>
               <p>
                  Nos escribís para contarnos tu idea, espacio o necesidad. Te ayudamos a
                  elegir la baldosa perfecta, o diseñamos una juntos.
               </p>
            </div>
            <div className={styles.step}>
               <img src={image3} alt="image-1" />
               <div className={styles.number}>#3</div>
               <h3>Cotizamos y ajustamos</h3>
               <p>
                  Hacemos una cotización basada en el diseño, cantidad y lugar de entrega.
                  Si querés personalizar, te mostramos muestras o simulaciones hasta que
                  sea perfecto.
               </p>
            </div>
            <div className={styles.step}>
               <img src={image4} alt="image-1" />
               <div className={styles.number}>#4</div>
               <h3>Manos al arte</h3>
               <p>
                  Una vez aprobás, ponemos manos a la obra. Cada baldosa se hace una a
                  una, con calma y precisión.
               </p>
            </div>
            <div className={styles.step}>
               <img src={image5} alt="image-1" />
               <div className={styles.number}>#5</div>
               <h3>Te lo enviamos o lo instalamos</h3>
               <p>
                  Coordinamos la entrega o instalación con nuestro equipo o aliados. Y si
                  lo deseás, ofrecemos servicio de pulido para que el acabado sea
                  perfecto.
               </p>
            </div>
            <div className={styles.step}>
               <img src={image6} alt="image-1" />
               <div className={styles.number}>#6</div>
               <h3>Tu espacio, tu historia</h3>
               <p>
                  La transformación está lista. Y vos ya no caminás sobre un suelo
                  cualquiera… sino sobre una historia que elegiste contar.
               </p>
            </div>
         </div>
      </Section>
   );
};
