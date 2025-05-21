import { BookCatalog } from "../../../../components/BookCatalog/BookCatalog";
import { Section } from "../../../../components/Section/Section";
import styles from "./Catalog.module.css";

export const Catalog = () => {
   return (
      <Section bgColor="primary" divider="secondary">
         <div className={styles.container}>
            <h2>Conoce nuestro catálogo</h2>
            <BookCatalog />
         </div>
      </Section>
   );
};
