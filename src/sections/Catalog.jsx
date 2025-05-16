import { BookCatalog } from "../components/bookCatalog/bookCatalog";

export const Catalog = () => {
   return (
      <section className="catalog-section">
         <div className="content-wrapper">
            <h2 className="section-title">Conoce nuestro catálogo</h2>
            <div className="title-separation"></div>
            <div className="book-container">
               <BookCatalog />
            </div>
         </div>
      </section>
   );
};
