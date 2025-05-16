import banner from "../assets/heroSection/banner.png";
import { ParticlesBackground } from "../components/particlesBackground/ParticlesBackground";

export const Hero = () => {
   return (
      <section className="hero-section">
         <img src={banner} alt="" />
         <ParticlesBackground />

         <div className="content-text-container">
            <div className="content-text">
               <h1 className="hero-title">Hacemos baldosas hidraulicas</h1>
               <p className="hero-subtitle">
                  Solería nació del deseo de recuperar la belleza de lo esencial.
                  Combinamos diseño contemporáneo con saberes tradicionales.
               </p>
            </div>
         </div>
      </section>
   );
};
