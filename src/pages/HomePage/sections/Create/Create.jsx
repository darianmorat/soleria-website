import { Section } from "../../../../components/Section/Section";
import styles from "./Create.module.css";

export const Create = () => {
   // const navigate = useNavigate();
   //
   // const scrollToTop = () => {
   //    window.scrollTo(0, 0);
   // };

   return (
      <Section bgColor="primary" divider="secondary">
         <h2 className={styles.title}>Crea tu baldosa</h2>
         <p>
            De la vista nace el amor porque antes de caminarlo, lo miras, Porque un patrón
            puede enamorarte como una mirada. Porque hay suelos que no solo se pisan, se
            contemplan. Porque el color despierta la memoria y la forma te invita a
            imaginar.
         </p>
         {/* <button */}
         {/*    onClick={() => { */}
         {/*       navigate("/editor"), scrollToTop(); */}
         {/*    }} */}
         {/* > */}
         {/*    Crear baldosa */}
         {/* </button> */}
      </Section>
   );
};
