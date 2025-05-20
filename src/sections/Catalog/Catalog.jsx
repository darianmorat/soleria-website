import { BookCatalog } from "../../components/BookCatalog/BookCatalog";
import { Section } from "../../components/Section/Section";
import styles from "./Catalog.module.css";

export const Catalog = () => {
   return (
      <Section title="Conoce nuestro catálogo" bgColor="primary" divider="secondary">
         <div className={styles.container}>
            <BookCatalog />
         </div>
      </Section>
   );
};
