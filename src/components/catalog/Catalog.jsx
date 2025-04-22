import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import page1 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-001.jpg";
import page2 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-002.jpg";
import page3 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-003.jpg";
import page4 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-004.jpg";
import page5 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-005.jpg";
import page6 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-006.jpg";
import page7 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-007.jpg";
import page8 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-008.jpg";
import page9 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-009.jpg";
import page10 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-010.jpg";
import page11 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-011.jpg";
import page12 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-012.jpg";
import page13 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-013.jpg";
import page14 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-014.jpg";
import page15 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-015.jpg";
import page16 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-016.jpg";
import page17 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-017.jpg";
import page18 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-018.jpg";
import page19 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-019.jpg";
import page20 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-020.jpg";
import page21 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-021.jpg";
import page22 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-022.jpg";
import page23 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-023.jpg";
import page24 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-024.jpg";
import page25 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-025.jpg";
import page26 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-026.jpg";
import page27 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-027.jpg";
import page28 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-028.jpg";
import page29 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-029.jpg";
import page30 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-030.jpg";
import page31 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-031.jpg";
import page32 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-032.jpg";
import page33 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-033.jpg";
import page34 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-034.jpg";
import page35 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-035.jpg";
import page36 from "../../assets/book-pdf-catalog/catalogo-baldosas-page-036.jpg";

function MyBook() {
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

   return (
      <>
         <HTMLFlipBook
            width={400}
            height={500}
            usePortrait={true}
            onFlip={handleFlip}
            ref={book}
         >
            {pageImages.map((pageImg, index) => (
               <div key={index} className="demoPage">
                  <img src={pageImg} alt="" />
               </div>
            ))}
         </HTMLFlipBook>
         <div className="book-actions">
            <button
               className="cta-button"
               onClick={() => book.current.pageFlip().flipPrev()}
            >
               <FontAwesomeIcon icon="fa-solid fa-angle-left" className="icons" />
               Prev
            </button>
            <div>
               {currentPage + 1} of {totalPages}
            </div>
            <button
               className="cta-button"
               onClick={() => book.current.pageFlip().flipNext()}
            >
               Next
               <FontAwesomeIcon icon="fa-solid fa-angle-right" className="icons" />
            </button>
            <button className="expand-button cta-button" onClick={toggleExpand}>
               <FontAwesomeIcon icon="fa-solid fa-expand" />
            </button>
         </div>

         {isExpanded && (
            <>
               <div className="expanded-book-modal">
                  <div className="expanded-book-container">
                     <HTMLFlipBook
                        width={500}
                        height={650}
                        // usePortrait={true}
                        onFlip={handleFlip}
                        ref={book}
                     >
                        {pageImages.map((pageImg, index) => (
                           <div key={index} className="demoPage">
                              <img src={pageImg} alt="" />
                           </div>
                        ))}
                     </HTMLFlipBook>
                  </div>
                  <div className="book-actions">
                     <button
                        className="cta-button"
                        onClick={() => book.current.pageFlip().flipPrev()}
                     >
                        <FontAwesomeIcon
                           icon="fa-solid fa-angle-left"
                           className="icons"
                        />
                        Prev
                     </button>
                     <div className="current-page">
                        {currentPage + 1} of {totalPages}
                     </div>
                     <button
                        className="cta-button"
                        onClick={() => book.current.pageFlip().flipNext()}
                     >
                        Next
                        <FontAwesomeIcon
                           icon="fa-solid fa-angle-right"
                           className="icons"
                        />
                     </button>
                     <button
                        className="expand-button cta-button expand-close"
                        onClick={toggleExpand}
                     >
                        Close
                     </button>
                  </div>
               </div>
            </>
         )}
      </>
   );
}

export default MyBook;
