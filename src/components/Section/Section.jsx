import styles from "./Section.module.css";

export const Section = ({ title, bgColor, children }) => {
   const bgColorClass = bgColor === "primary" ? styles.bgPrimary : "";

   return (
      <section className={`${styles.section} ${bgColorClass}`}>
         <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.separation}></div>
            {children}
         </div>
      </section>
   );
};
