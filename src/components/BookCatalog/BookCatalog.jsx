import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./BookCatalog.module.css";

import page1 from "../../assets/bookCatalog/catalogo-baldosas-page-001.jpg";
import page2 from "../../assets/bookCatalog/catalogo-baldosas-page-002.jpg";
import page3 from "../../assets/bookCatalog/catalogo-baldosas-page-003.jpg";
import page4 from "../../assets/bookCatalog/catalogo-baldosas-page-004.jpg";
import page5 from "../../assets/bookCatalog/catalogo-baldosas-page-005.jpg";
import page6 from "../../assets/bookCatalog/catalogo-baldosas-page-006.jpg";
import page7 from "../../assets/bookCatalog/catalogo-baldosas-page-007.jpg";
import page8 from "../../assets/bookCatalog/catalogo-baldosas-page-008.jpg";
import page9 from "../../assets/bookCatalog/catalogo-baldosas-page-009.jpg";
import page10 from "../../assets/bookCatalog/catalogo-baldosas-page-010.jpg";
import page11 from "../../assets/bookCatalog/catalogo-baldosas-page-011.jpg";
import page12 from "../../assets/bookCatalog/catalogo-baldosas-page-012.jpg";
import page13 from "../../assets/bookCatalog/catalogo-baldosas-page-013.jpg";
import page14 from "../../assets/bookCatalog/catalogo-baldosas-page-014.jpg";
import page15 from "../../assets/bookCatalog/catalogo-baldosas-page-015.jpg";
import page16 from "../../assets/bookCatalog/catalogo-baldosas-page-016.jpg";
import page17 from "../../assets/bookCatalog/catalogo-baldosas-page-017.jpg";
import page18 from "../../assets/bookCatalog/catalogo-baldosas-page-018.jpg";
import page19 from "../../assets/bookCatalog/catalogo-baldosas-page-019.jpg";
import page20 from "../../assets/bookCatalog/catalogo-baldosas-page-020.jpg";
import page21 from "../../assets/bookCatalog/catalogo-baldosas-page-021.jpg";
import page22 from "../../assets/bookCatalog/catalogo-baldosas-page-022.jpg";
import page23 from "../../assets/bookCatalog/catalogo-baldosas-page-023.jpg";
import page24 from "../../assets/bookCatalog/catalogo-baldosas-page-024.jpg";
import page25 from "../../assets/bookCatalog/catalogo-baldosas-page-025.jpg";
import page26 from "../../assets/bookCatalog/catalogo-baldosas-page-026.jpg";
import page27 from "../../assets/bookCatalog/catalogo-baldosas-page-027.jpg";
import page28 from "../../assets/bookCatalog/catalogo-baldosas-page-028.jpg";
import page29 from "../../assets/bookCatalog/catalogo-baldosas-page-029.jpg";
import page30 from "../../assets/bookCatalog/catalogo-baldosas-page-030.jpg";
import page31 from "../../assets/bookCatalog/catalogo-baldosas-page-031.jpg";
import page32 from "../../assets/bookCatalog/catalogo-baldosas-page-032.jpg";
import page33 from "../../assets/bookCatalog/catalogo-baldosas-page-033.jpg";
import page34 from "../../assets/bookCatalog/catalogo-baldosas-page-034.jpg";
import page35 from "../../assets/bookCatalog/catalogo-baldosas-page-035.jpg";
import page36 from "../../assets/bookCatalog/catalogo-baldosas-page-036.jpg";
import { RemoveScroll } from "react-remove-scroll";

export const BookCatalog = () => {
   const pageImages = [
      page1,
      page2,
      page3,
      page4,
      page5,
      page6,
      page7,
      page8,
      page9,
      page10,
      page11,
      page12,
      page13,
      page14,
      page15,
      page16,
      page17,
      page18,
      page19,
      page20,
      page21,
      page22,
      page23,
      page24,
      page25,
      page26,
      page27,
      page28,
      page29,
      page30,
      page31,
      page32,
      page33,
      page34,
      page35,
      page36,
   ];

   const book = useRef();
   const totalPages = pageImages.length;
   const [currentPage, setCurrentPage] = useState(0);
   const [isExpanded, setIsExpanded] = useState(false);

   const handleFlip = (e) => {
      setCurrentPage(e.data);
   };

   const toggleExpand = () => {
      setIsExpanded(!isExpanded);
   };

   const BookActions = () => {
      return (
         <div className={styles.actions}>
            <button onClick={() => book.current.pageFlip().flipPrev()}>
               <FontAwesomeIcon icon="fa-solid fa-angle-left" className="icons-v2" />
               Prev
            </button>
            <div className={styles.currentPageContainer}>
               {currentPage + 1}/{totalPages}
            </div>
            <button onClick={() => book.current.pageFlip().flipNext()}>
               Next
               <FontAwesomeIcon icon="fa-solid fa-angle-right" className="icons-v2" />
            </button>

            {isExpanded ? (
               <button className="expand-button expand-close" onClick={toggleExpand}>
                  <FontAwesomeIcon icon="fa-solid fa-compress" />
               </button>
            ) : (
               <button className="expand-button" onClick={toggleExpand}>
                  <FontAwesomeIcon icon="fa-solid fa-expand" />
               </button>
            )}
         </div>
      );
   };

   return (
      <>
         <HTMLFlipBook
            width={380}
            height={480}
            usePortrait={true}
            onFlip={handleFlip}
            ref={book}
         >
            {pageImages.map((pageImg, index) => (
               <div key={index} className={styles.demoPage}>
                  <img src={pageImg} alt="" />
               </div>
            ))}
         </HTMLFlipBook>
         <BookActions />

         {isExpanded && (
            <RemoveScroll>
               <div className={styles.modal}>
                  <div className={styles.modalContainer}>
                     <HTMLFlipBook
                        width={430}
                        height={530}
                        usePortrait={true}
                        onFlip={handleFlip}
                        ref={book}
                     >
                        {pageImages.map((pageImg, index) => (
                           <div key={index} className={styles.demoPage}>
                              <img src={pageImg} alt="" />
                           </div>
                        ))}
                     </HTMLFlipBook>
                  </div>
                  <BookActions />
               </div>
            </RemoveScroll>
         )}
      </>
   );
};
