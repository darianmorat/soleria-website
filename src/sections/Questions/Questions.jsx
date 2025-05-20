import { Section } from "../../components/Section/Section";
import styles from "./Questions.module.css";

export const Questions = () => {
   return (
      <>
         <div id="questions"></div>
         <Section title="Preguntas frecuentes" divider="primary">
            <h2 className={styles.title}>Preguntas frecuentes</h2>
            <div className={styles.content}>
               <div className={styles.item}>
                  <h3>¿Qué es una baldosa hidráulica?</h3>
                  <p>
                     Es una baldosa artesanal hecha con cemento pigmentado, sin cocción.
                     Se elabora una a una usando moldes metálicos y presión hidráulica. Su
                     acabado es mate, con textura suave y gran durabilidad.
                  </p>
               </div>

               <div className={styles.item}>
                  <h3>¿En qué se diferencia de una baldosa cerámica?</h3>
                  <ul>
                     <li>
                        Las baldosas <strong>hidráulicas</strong> no se hornean: se
                        prensan y secan al aire.
                     </li>
                     <li>
                        Tienen <strong>más espesor y peso</strong>.
                     </li>
                     <li>
                        Son completamente <strong>artesanales y personalizables</strong>.
                     </li>
                     <li>
                        Requieren <strong>sellado y mantenimiento especial</strong> para
                        conservar su belleza.
                     </li>
                     <li>
                        La cerámica, en cambio, se fabrica en serie, se hornea y suele
                        tener un acabado brillante.
                     </li>
                  </ul>
               </div>

               <div className={styles.item}>
                  <h3>¿Cuántas baldosas necesito por metro cuadrado?</h3>
                  <div>
                     <p>Depende del tamaño:</p>
                     <ul>
                        <li>
                           Si la baldosa es de <strong>25 × 25 cm</strong>, necesitás{" "}
                           <strong>16 baldosas por metro cuadrado</strong>.
                        </li>
                        <li>
                           Si es <strong>hexagonal de 10 × 10 cm</strong>, entran
                           aproximadamente <strong>32 por metro cuadrado</strong> (el
                           cálculo puede variar según el diseño y la junta).
                        </li>
                     </ul>
                  </div>
               </div>

               <div className={styles.item}>
                  <h3>¿Cuánto tarda la producción?</h3>
                  <p>
                     El tiempo estimado de producción es de{" "}
                     <strong>30 días calendario</strong>, pero siempre se confirma al
                     recibir el pedido, según el volumen y la capacidad del taller.
                  </p>
               </div>

               <div className={styles.item}>
                  <h3>¿Puedo personalizar el diseño?</h3>
                  <p>
                     Sí. Puedes elegir{" "}
                     <strong>colores, formas, texturas y patrones</strong>. Incluso
                     podemos crear una baldosa desde cero, pensada para tu proyecto.
                  </p>
               </div>

               <div className={styles.item}>
                  <h3>¿Cómo se realiza el pedido?</h3>
                  <ul>
                     <li>Eliges tu baldosa.</li>
                     <li>Te cotizamos según cantidad, diseño y lugar de entrega.</li>
                     <li>
                        Pagas el <strong>50% para iniciar producción</strong>.
                     </li>
                     <li>
                        Te avisamos cuando esté lista para pagar el saldo y coordinar la
                        entrega o recogida.
                     </li>
                  </ul>
               </div>

               <div className={styles.item}>
                  <h3>¿Qué hago si recibo una baldosa dañada?</h3>
                  <p>
                     Escribirnos el <strong>mismo día</strong> que recibas el pedido y
                     envias fotos del daño. Pasado ese plazo, no podemos hacer
                     reclamaciones. Deben tener en cuenta que el transporte es externo y
                     el material es frágil.
                  </p>
               </div>

               <div className={styles.item}>
                  <h3>¿Todas las baldosas son iguales?</h3>
                  <p>
                     No exactamente. Como son <strong>hechas a mano</strong>, es normal
                     encontrar <strong>ligeras variaciones</strong> en el color, el
                     espesor o los bordes. Es parte de su carácter artesanal y único.
                  </p>
               </div>

               <div className={styles.item}>
                  <h3>¿Necesitan mantenimiento?</h3>
                  <p>
                     Sí. Recomendamos aplicar un <strong>sellador</strong> después de la
                     instalación y usar productos de limpieza suaves (nunca ácidos o
                     abrasivos). Con el tiempo, se pueden <strong>pulir</strong> para
                     recuperar su brillo natural.
                  </p>
               </div>

               <div className={styles.item}>
                  <h3>¿Se pueden usar en zonas húmedas como baños o cocinas?</h3>
                  <p>
                     Sí, pero deben estar <strong>correctamente selladas</strong> para
                     evitar filtraciones o manchas.
                  </p>
               </div>

               <div className={styles.item}>
                  <h3>¿Hacen envíos a todo el país?</h3>
                  <p>
                     Sí, enviamos a cualquier lugar de Colombia. Coordinamos el despacho
                     con transportadoras confiables y te informamos los costos y tiempos
                     antes de confirmar el pedido.
                  </p>
               </div>

               <div className={styles.item}>
                  <h3>¿Cuál es la cantidad mínima que puedo pedir?</h3>
                  <p>
                     El pedido mínimo para producción personalizada es de{" "}
                     <strong>4 metros cuadrados</strong>. Si necesitás una cantidad menor,
                     podés consultar por disponibilidad en stock.
                  </p>
               </div>

               <div className={styles.item}>
                  <h3>¿Puedo combinar diferentes diseños o colores?</h3>
                  <p>
                     Sí, puedes armar composiciones mezclando diseños, colores y formas.
                     Te ayudamos a visualizar cómo quedarían juntos antes de confirmar tu
                     pedido.
                  </p>
               </div>

               <div className={styles.item}>
                  <h3>¿Ofrecen asesoría en diseño?</h3>
                  <p>
                     Sí. Si no sabes qué diseño elegir o quieres una propuesta
                     personalizada, podemos asesorarte para que el resultado se adapte a
                     tu estilo, espacio y necesidades.
                  </p>
               </div>

               <div className={styles.item}>
                  <h3>¿También hacen la instalación?</h3>
                  <p>
                     No realizamos directamente la instalación, pero podemos darte una{" "}
                     <strong>guía completa</strong> para que tu maestro de obra lo haga
                     correctamente.
                  </p>
               </div>
            </div>
         </Section>
      </>
   );
};
