import { useNavigate } from "react-router-dom";
import { Section } from "../../components/Section/Section";
import styles from "./Description.module.css";

export const Description = () => {
   const navigate = useNavigate();

   return (
      <Section title="De la vista nace el amor">
         <div className={styles.content}>
            <div className={styles.text}>
               <p>
                  De la vista nace el amor porque antes de caminarlo, lo miras, Porque un
                  patrón puede enamorarte como una mirada. Porque hay suelos que no solo
                  se pisan, se contemplan. Porque el color despierta la memoria y la forma
                  te invita a imaginar.
               </p>
               <p>
                  Porque una baldosa bien hecha no es solo material, es lenguaje, es alma,
                  es arte en lo cotidiano. En Solería, creemos en eso; en enamorarte desde
                  el primer vistazo, por eso de la vista nace el amor, y el amor empieza
                  aqui.
               </p>
               <button className={styles.button} onClick={() => navigate("#")}>
                  Hablemos de tu proyecto
               </button>
            </div>
            <div className={styles.video}>
               <div className={styles.videoWrapper}>
                  <iframe
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
