import { useNavigate } from "react-router-dom";

export const Description = () => {
   const navigate = useNavigate();

   return (
      <section className="philosophy-section">
         <div className="content-wrapper">
            <h2 className="section-title">De la vista nace el amor</h2>
            <div className="title-separation"></div>
            <div className="philosophy-content">
               <div className="philosophy-text">
                  <p>
                     De la vista nace el amor porque antes de caminarlo, lo miras, Porque
                     un patrón puede enamorarte como una mirada. Porque hay suelos que no
                     solo se pisan, se contemplan. Porque el color despierta la memoria y
                     la forma te invita a imaginar.
                  </p>
                  <p>
                     Porque una baldosa bien hecha no es solo material, es lenguaje, es
                     alma, es arte en lo cotidiano. En Solería, creemos en eso; en
                     enamorarte desde el primer vistazo, por eso de la vista nace el amor,
                     y el amor empieza aqui.
                  </p>
                  <button className="secondary-button" onClick={() => navigate("#")}>
                     Hablemos de tu proyecto
                  </button>
               </div>
               <div className="philosophy-video">
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
               </div>
            </div>
         </div>
      </section>
   );
};
