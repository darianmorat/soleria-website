import MyBook from "../components/catalog/Catalog";

export const Catalog = () => {
   return (
      <section className="catalog-section">
         <div className="content-wrapper">
            <h2 className="section-title">Conoce nuestro catálogo</h2>
            <div className="title-separation"></div>
            <div className="book-container">
               <MyBook />
            </div>
         </div>
      </section>
   );
};
