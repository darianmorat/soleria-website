import { ParticlesBackground } from "../../components/ParticlesBackground/ParticlesBackground";
import banner from "../../assets/heroSection/banner.webp";
import styles from "./Hero.module.css";

export const Hero = () => {
   return (
      <section className={styles.hero}>
         <img src={banner} alt="" />
         <ParticlesBackground />

         <div className={styles.container}>
            <div className={styles.content}>
               <h1 className={styles.title}>Hacemos baldosas hidraulicas</h1>
               <p className={styles.subtitle}>
                  Solería nació del deseo de recuperar la belleza de lo esencial.
                  Combinamos diseño contemporáneo con saberes tradicionales.
               </p>
            </div>
         </div>
      </section>
   );
};
