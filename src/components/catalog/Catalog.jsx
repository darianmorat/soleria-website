import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyBook() {
   const pages = [
      "catalogo-baldosas-page-001.jpg",
      "catalogo-baldosas-page-002.jpg",
      "catalogo-baldosas-page-003.jpg",
      "catalogo-baldosas-page-004.jpg",
      "catalogo-baldosas-page-005.jpg",
      "catalogo-baldosas-page-006.jpg",
      "catalogo-baldosas-page-007.jpg",
      "catalogo-baldosas-page-008.jpg",
      "catalogo-baldosas-page-009.jpg",
      "catalogo-baldosas-page-010.jpg",
      "catalogo-baldosas-page-011.jpg",
      "catalogo-baldosas-page-012.jpg",
      "catalogo-baldosas-page-013.jpg",
      "catalogo-baldosas-page-014.jpg",
      "catalogo-baldosas-page-015.jpg",
      "catalogo-baldosas-page-016.jpg",
      "catalogo-baldosas-page-017.jpg",
      "catalogo-baldosas-page-018.jpg",
      "catalogo-baldosas-page-019.jpg",
      "catalogo-baldosas-page-020.jpg",
      "catalogo-baldosas-page-021.jpg",
      "catalogo-baldosas-page-022.jpg",
      "catalogo-baldosas-page-023.jpg",
      "catalogo-baldosas-page-024.jpg",
      "catalogo-baldosas-page-025.jpg",
      "catalogo-baldosas-page-026.jpg",
      "catalogo-baldosas-page-027.jpg",
      "catalogo-baldosas-page-028.jpg",
      "catalogo-baldosas-page-029.jpg",
      "catalogo-baldosas-page-030.jpg",
      "catalogo-baldosas-page-031.jpg",
      "catalogo-baldosas-page-032.jpg",
      "catalogo-baldosas-page-033.jpg",
      "catalogo-baldosas-page-034.jpg",
      "catalogo-baldosas-page-035.jpg",
      "catalogo-baldosas-page-036.jpg",
   ];

   const book = useRef();
   const totalPages = pages.length;
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
            {pages.map((page, index) => (
               <div key={index} className="demoPage">
                  <img src={`../../../public/catalogo-baldosas/${page}`} alt="" />
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
                        {pages.map((page, index) => (
                           <div key={index} className="demoPage">
                              <img
                                 src={`../../../public/catalogo-baldosas/${page}`}
                                 alt=""
                              />
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
