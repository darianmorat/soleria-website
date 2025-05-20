import styles from "./Section.module.css";

export const Section = ({ title, bgColor, children, divider }) => {
   const bgColorClass = bgColor === "primary" ? styles.bgPrimary : "";
   let dividerColor = "";

   if (divider === "primary") {
      dividerColor = styles.primaryDivider;
   } else if (divider === "secondary") {
      dividerColor = styles.secondaryDivider;
   } else if (divider === "terciary") {
      dividerColor = styles.terciaryDivider;
   }

   return (
      <section className={`${styles.section} ${bgColorClass} ${dividerColor}`}>
         <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.separation}></div>
            {children}
         </div>
      </section>
   );
};
