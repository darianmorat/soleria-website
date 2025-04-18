import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const HomePage = () => {
   const navigate = useNavigate();
   const canvasRef = useRef(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;

      let particles = [];
      let mouse = { x: undefined, y: undefined };

      // Create particles
      for (let i = 0; i < 120; i++) {
         particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1.0, // smaller particles
            vx: (Math.random() - 0.5) * 0.8, // smoother motion
            vy: (Math.random() - 0.5) * 0.8,
         });
      }

      // Handle events
      const handleResize = () => {
         canvas.width = canvas.parentElement.offsetWidth;
         canvas.height = canvas.parentElement.offsetHeight;
      };

      const handleMouseMove = (e) => {
         const rect = canvas.getBoundingClientRect();
         mouse.x = e.clientX - rect.left;
         mouse.y = e.clientY - rect.top;
      };

      window.addEventListener("resize", handleResize);
      canvas.addEventListener("mousemove", handleMouseMove);

      // Animation loop
      function animate() {
         ctx.clearRect(0, 0, canvas.width, canvas.height);

         particles.forEach((p) => {
            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.shadowColor = "black";
            ctx.shadowBlur = 5;
            ctx.fill();
            ctx.shadowBlur = 0;

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x > canvas.width || p.x < 0) p.vx *= -1;
            if (p.y > canvas.height || p.y < 0) p.vy *= -1;

            // Mouse interaction
            if (mouse.x) {
               const dx = mouse.x - p.x;
               const dy = mouse.y - p.y;
               const dist = Math.sqrt(dx * dx + dy * dy);

               if (dist < 100) {
                  p.x -= ((dx / dist) * (100 - dist)) / 50;
                  p.y -= ((dy / dist) * (100 - dist)) / 50;
               }
            }

            // Connect particles
            particles.forEach((p2) => {
               const dx = p.x - p2.x;
               const dy = p.y - p2.y;
               const dist = Math.sqrt(dx * dx + dy * dy);

               if (dist < 100) {
                  ctx.beginPath();
                  ctx.strokeStyle = `rgba(173, 216, 230, ${0.5 - dist / 150})`;
                  ctx.lineWidth = 0.5;
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.stroke();
               }
            });
         });

         requestAnimationFrame(animate);
      }

      animate();

      return () => {
         window.removeEventListener("resize", handleResize);
         canvas.removeEventListener("mousemove", handleMouseMove);
      };
   }, []);

   const colors = [
      { color: "#f8f7f2", name: "MC1" },
      { color: "#c6bdbe", name: "MC2" },
      { color: "#7e7c7d", name: "MC3" },
      { color: "#333333", name: "MC4" },
      { color: "#288ac9", name: "MC5" },
      { color: "#487fc0", name: "MC6" },
      { color: "#23496d", name: "MC7" },
      { color: "#1a2e51", name: "MC8" },
      { color: "#9ebbbf", name: "MC9" },
      { color: "#b5dbdb", name: "MC10" },
      { color: "#714293", name: "MC11" },
      { color: "#ab71ae", name: "MC12" },
      { color: "#eb568d", name: "MC13" },
      { color: "#bd444b", name: "MC14" },
      { color: "#b03c3c", name: "MC15" },
      { color: "#8f271c", name: "MC16" },
      { color: "#f0bcae", name: "MC17" },
      { color: "#f9cbcd", name: "MC18" },
      { color: "#d76334", name: "MC19" },
      { color: "#c37d41", name: "MC20" },
      { color: "#cd9856", name: "MC21" },
      { color: "#8f7365", name: "MC22" },
      { color: "#c4a296", name: "MC23" },
      { color: "#58482f", name: "MC24" },
      { color: "#f9c941", name: "MC25" },
      { color: "#f9c85f", name: "MC26" },
      { color: "#ecce74", name: "MC27" },
      { color: "#ecdba7", name: "MC28" },
      { color: "#998d59", name: "MC29" },
      { color: "#90a268", name: "MC30" },
      { color: "#2ab190", name: "MC31" },
      { color: "#395137", name: "MC32" },
   ];

   return (
      <div className="landing-container">
         {/* hero section */}
         <section className="hero-section">
            <canvas
               ref={canvasRef}
               style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: 1,
               }}
            />

            <div className="content-wrapper">
               <h1 className="hero-title">Hacemos baldosas hidraulicas</h1>
               <p className="hero-subtitle">
                  Solería nació del deseo de recuperar la belleza de lo esencial.
                  Combinamos diseño contemporáneo con saberes tradicionales.
               </p>
            </div>
         </section>

         {/* philosophy section */}
         <section className="philosophy-section">
            <div className="content-wrapper">
               <h2 className="section-title">De la vista nace el amor</h2>
               <div className="title-separation"></div>
               <div className="philosophy-content">
                  <div className="philosophy-text">
                     <p>
                        De la vista nace el amor porque antes de caminarlo, lo miras,
                        Porque un patrón puede enamorarte como una mirada. Porque hay
                        suelos que no solo se pisan, se contemplan. Porque el color
                        despierta la memoria y la forma te invita a imaginar.
                     </p>
                     <p>
                        Porque una baldosa bien hecha no es solo material, es lenguaje, es
                        alma, es arte en lo cotidiano. En Solería, creemos en eso; en
                        enamorarte desde el primer vistazo, por eso de la vista nace el
                        amor, y el amor empieza aqui.
                     </p>
                     <button className="secondary-button" onClick={() => navigate("#")}>
                        Hablemos de tu proyecto
                     </button>
                  </div>
                  <div className="philosophy-video">
                     <div className="video-placeholder">
                        <p>VIDEO</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* crafting section */}
         <section className="crafting-section">
            <div className="content-wrapper">
               <h2 className="section-title">Arte hecho a mano</h2>
               <div className="title-separation"></div>
               <div className="crafting-content">
                  <div className="crafting-video">
                     <div className="video-placeholder">
                        <p>VIDEO</p>
                     </div>
                     <br />
                     <p>
                        Cada baldosa se hace una por una, con pigmentos minerales, moldes
                        y fuerza humana, es un oficio que resiste al tiempo y a las modas,
                        y en Solería, lo mantenemos vivo.
                     </p>
                  </div>
                  <div className="crafting-info">
                     <div className="layers-info">
                        {/* <h3>Hecha en capas</h3> */}
                        <div className="layer-item">
                           <div className="layer-top"></div>
                           <div className="layer-details">
                              <li>Es donde se encuentra el diseño y el color.</li>
                              <li>Espesor: entre 2 y 4 mm.</li>
                              <li>
                                 Compuesta por cemento blanco, marmolina, pigmentos
                                 minerales y agua.
                              </li>
                           </div>
                        </div>
                        <div className="layer-item">
                           <div className="layer-middle"></div>
                           <div className="layer-details">
                              <li>Compuesta por cemento gris y arena.</li>
                              <li>Espesor: entre 5 y 8 mm.</li>
                              <li>
                                 Sirve de transición y absorbe el exceso de agua de la
                                 capa de vista.
                              </li>
                           </div>
                        </div>
                        <div className="layer-item">
                           <div className="layer-bottom"></div>
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

         {/* process section */}
         <section className="process-section">
            <div className="content-wrapper">
               <h2 className="section-title">¿Cómo creamos juntos?</h2>
               <div className="title-separation"></div>
               <div className="process-grid">
                  <div className="process-step">
                     <div className="step-number">#1</div>
                     <h3>Te enamoras</h3>
                     <p>
                        Descubrís un diseño, una textura, un color. Ya sea en nuestro
                        catálogo, redes o en un proyecto real: sentís que eso va contigo.
                     </p>
                  </div>
                  <div className="process-step">
                     <div className="step-number">#2</div>
                     <h3>Nos contactas</h3>
                     <p>
                        Nos escribís para contarnos tu idea, espacio o necesidad. Te
                        ayudamos a elegir la baldosa perfecta, o diseñamos una juntos.
                     </p>
                  </div>
                  <div className="process-step">
                     <div className="step-number">#3</div>
                     <h3>Cotizamos y ajustamos</h3>
                     <p>
                        Hacemos una cotización basada en el diseño, cantidad y lugar de
                        entrega. Si querés personalizar, te mostramos muestras o
                        simulaciones hasta que sea perfecto.
                     </p>
                  </div>
                  <div className="process-step">
                     <div className="step-number">#4</div>
                     <h3>Manos al arte</h3>
                     <p>
                        Una vez aprobás, ponemos manos a la obra. Cada baldosa se hace una
                        a una, con calma y precisión.
                     </p>
                  </div>
                  <div className="process-step">
                     <div className="step-number">#5</div>
                     <h3>Te lo enviamos o lo instalamos</h3>
                     <p>
                        Coordinamos la entrega o instalación con nuestro equipo o aliados.
                        Y si lo deseás, ofrecemos servicio de pulido para que el acabado
                        sea perfecto.
                     </p>
                  </div>
                  <div className="process-step">
                     <div className="step-number">#6</div>
                     <h3>Tu espacio, tu historia</h3>
                     <p>
                        La transformación está lista. Y vos ya no caminás sobre un suelo
                        cualquiera… sino sobre una historia que elegiste contar.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* create section */}
         <section className="create-section">
            <div className="content-wrapper">
               <h2 className="section-title">Crea tu baldosa</h2>
               <div className="title-separation"></div>
               <p>
                  De la vista nace el amor porque antes de caminarlo, lo miras, Porque un
                  patrón puede enamorarte como una mirada. Porque hay suelos que no solo
                  se pisan, se contemplan. Porque el color despierta la memoria y la forma
                  te invita a imaginar.
               </p>
               <br />
               <div className="create-layout">
                  <div className="">
                     <div className="">
                        <h3>Diseños de baldosas</h3>
                        <div className="container-designs">
                           <div className="designs-tail"></div>
                           <div className="designs-tail"></div>
                           <div className="designs-tail"></div>
                           <div className="designs-tail"></div>
                           <div className="designs-tail"></div>
                           <div className="designs-tail"></div>
                           <div className="designs-tail"></div>
                           <div className="designs-tail"></div>
                        </div>
                     </div>
                     <div className="">
                        <div className="color-palette">
                           <h3>Paleta de colores</h3>
                           <div className="color-grid">
                              {colors.map(({ color, name }) => (
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
                     <div className="tile-end-result"></div>
                  </div>
               </div>
            </div>
         </section>

         {/* visualizer section */}
         <section className="philosophy-section">
            <div className="content-wrapper">
               <h2 className="section-title">Hazlo real</h2>
               <div className="title-separation"></div>
               <div className="visualizer-content">
                  <div className="visualizer-info">
                     <p>
                        ¿Quieres ver cómo se vería esa baldosa en tu espacio? Con esta
                        herramienta puedes previsualizar nuestros diseños en 3D
                        directamente desde tu celular, y colocarlos en el lugar que
                        elijas.
                     </p>
                     <p>
                        Solo tienes que activar la cámara, apuntar hacia el piso y dejar
                        que la baldosa hable por sí sola.
                     </p>
                     <button className="secondary-button" onClick={() => navigate("#")}>
                        Probar visualizador 3D
                     </button>
                  </div>

                  <div className="philosophy-video">
                     <div className="video-placeholder">
                        <p>VIDEO</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* cta section */}
         <section className="cta-section">
            <div className="content-wrapper">
               <h2 className="cta-title">¿Listo para crear la tuya?</h2>
               <div className="cta-buttons">
                  <button className="cta-button" onClick={() => navigate("#")}>
                     Conoce nuestro catálogo
                  </button>
                  <button className="cta-button" onClick={() => navigate("#")}>
                     Asesoría personalizada
                  </button>
                  <button className="cta-button" onClick={() => navigate("#")}>
                     Estoy listo para elegir
                  </button>
               </div>
            </div>
         </section>
      </div>
   );
};

export default HomePage;
