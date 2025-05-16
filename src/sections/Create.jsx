import tile1 from "../assets/tiles/tile1.png";
import tile2 from "../assets/tiles/tile2.png";
import tile3 from "../assets/tiles/tile3.png";
import tile4 from "../assets/tiles/tile4.png";
import finalResult1 from "../assets/tiles/final-result1.jpg";
// import finalResult2 from "../assets/tiles/final-result2.jpg";
// import finalResult3 from "../assets/tiles/final-result3.jpg";
import { tileColors } from "../data/TileColors";

export const Create = () => {
   return (
      <section className="create-section">
         <div className="content-wrapper">
            <h2 className="section-title">Crea tu baldosa</h2>
            <div className="title-separation"></div>
            <p>
               De la vista nace el amor porque antes de caminarlo, lo miras, Porque un
               patrón puede enamorarte como una mirada. Porque hay suelos que no solo se
               pisan, se contemplan. Porque el color despierta la memoria y la forma te
               invita a imaginar.
            </p>
            <br />
            <div className="create-layout">
               <div className="">
                  <div className="">
                     <h3>Diseños de baldosas</h3>
                     <div className="container-designs">
                        <div className="designs-tail color-item">
                           <img src={tile1} alt="" />
                           <span>SB 031</span>
                        </div>
                        <div className="designs-tail color-item">
                           <img src={tile2} alt="" />
                           <span>SB 033</span>
                        </div>
                        <div className="designs-tail color-item">
                           <img src={tile3} alt="" />
                           <span>SB 034</span>
                        </div>
                        <div className="designs-tail color-item">
                           <img src={tile4} alt="" />
                           <span>SB 038</span>
                        </div>
                        <div className="designs-tail color-item">
                           <img src={tile3} alt="" />
                           <span>SB 033</span>
                        </div>
                        <div className="designs-tail color-item">
                           <img src={tile4} alt="" />
                           <span>SB 039</span>
                        </div>
                        <div className="designs-tail color-item">
                           <img src={tile1} alt="" />
                           <span>SB 032</span>
                        </div>
                        <div className="designs-tail color-item">
                           <img src={tile2} alt="" />
                           <span>SB 030</span>
                        </div>
                     </div>
                  </div>
                  <div className="">
                     <div className="color-palette">
                        <h3>Paleta de colores</h3>
                        <div className="color-grid">
                           {tileColors.map(({ color, name }) => (
                              <div
                                 key={name}
                                 className="color-item"
                                 style={{ backgroundColor: color }}
                              >
                                 <span>{name}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <h3>Resultado final</h3>
                  <div className="tile-end-result">
                     <img src={finalResult1} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
