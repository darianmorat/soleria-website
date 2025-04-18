import { useState, useEffect, useRef } from "react";
import baldosa2 from "../assets/catalog/baldosas para colorear 1-02.png";
import baldosa3 from "../assets/catalog/baldosas para colorear 1-03.png";
import baldosa4 from "../assets/catalog/baldosas para colorear 1-04.png";
import baldosa5 from "../assets/catalog/baldosas para colorear 1-05.png";
import baldosa6 from "../assets/catalog/baldosas para colorear 1-06.png";
import baldosa7 from "../assets/catalog/baldosas para colorear 1-07.png";
import baldosa8 from "../assets/catalog/baldosas para colorear 1-08.png";
import baldosa9 from "../assets/catalog/baldosas para colorear 1-09.png";

const Editor = () => {
   // State variables (replacing global variables)
   const [selectedColor, setSelectedColor] = useState(null);
   const [currentTile, setCurrentTile] = useState(null);
   const [colorName, setColorName] = useState("MC1");
   const [isProcessing, setIsProcessing] = useState(false);

   // Refs for canvas elements
   const canvasRef = useRef(null);
   const previewCanvasRef = useRef(null);
   const ctxRef = useRef(null);
   const previewCtxRef = useRef(null);

   // Function to select color
   const selectColor = (color, name) => {
      // Update color name display
      setColorName(name || "");

      // Convert color to RGBA using canvas
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      tempCanvas.width = 1;
      tempCanvas.height = 1;
      tempCtx.fillStyle = color;
      tempCtx.fillRect(0, 0, 1, 1);

      setSelectedColor(Array.from(tempCtx.getImageData(0, 0, 1, 1).data));
   };

   // Function to select tile
   const selectTile = (tileId) => {
      setCurrentTile(tileId);
   };

   // Function to load tile
   const loadTile = () => {
      if (!currentTile || !canvasRef.current) return;

      const img = new Image();
      img.src = currentTile;
      img.onload = function () {
         const canvas = canvasRef.current;
         const ctx = canvas.getContext("2d", { willReadFrequently: true });

         canvas.width = img.width;
         canvas.height = img.height;
         ctx.drawImage(img, 0, 0);

         // Store ctx in ref for future use
         ctxRef.current = ctx;

         updatePreviewCanvas();
      };
   };

   // Optimized flood fill algorithm
   const optimizedFloodFill = (startX, startY, fillColor) => {
      if (!ctxRef.current || !canvasRef.current) return;
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const width = canvas.width;
      const height = canvas.height;

      // Get the color of the pixel where clicked
      const targetIndex = (startY * width + startX) * 4;
      const targetR = data[targetIndex];
      const targetG = data[targetIndex + 1];
      const targetB = data[targetIndex + 2];
      const targetA = data[targetIndex + 3];

      // No action if color is already the same as fill color
      if (
         targetR === fillColor[0] &&
         targetG === fillColor[1] &&
         targetB === fillColor[2] &&
         targetA === fillColor[3]
      ) {
         return;
      }

      // Array to mark visited pixels
      const visited = new Uint8Array(width * height);
      const stack = [];
      stack.push(startY * width + startX);

      while (stack.length > 0) {
         const pixelPos = stack.pop();
         const x = pixelPos % width;
         const y = Math.floor(pixelPos / width);

         // Skip if already visited
         if (visited[pixelPos]) continue;

         const currentIndex = pixelPos * 4;

         // Check if this pixel has the target color
         if (
            data[currentIndex] === targetR &&
            data[currentIndex + 1] === targetG &&
            data[currentIndex + 2] === targetB &&
            data[currentIndex + 3] === targetA
         ) {
            // Mark as visited
            visited[pixelPos] = 1;

            // Change this pixel's color
            data[currentIndex] = fillColor[0];
            data[currentIndex + 1] = fillColor[1];
            data[currentIndex + 2] = fillColor[2];
            data[currentIndex + 3] = fillColor[3];

            // Add neighboring pixels to stack (if within bounds)
            // Right
            if (x + 1 < width) {
               stack.push(y * width + (x + 1));
            }
            // Left
            if (x - 1 >= 0) {
               stack.push(y * width + (x - 1));
            }
            // Down
            if (y + 1 < height) {
               stack.push((y + 1) * width + x);
            }
            // Up
            if (y - 1 >= 0) {
               stack.push((y - 1) * width + x);
            }
         }

         // Safety measure: limit stack size
         if (stack.length > width * height) {
            console.warn("Stack too large, stopping to prevent freezing");
            break;
         }
      }

      ctx.putImageData(imageData, 0, 0);
      updatePreviewCanvas();
   };

   // Update preview canvas function
   const updatePreviewCanvas = () => {
      if (!canvasRef.current || !previewCanvasRef.current) return;

      const canvas = canvasRef.current;
      const previewCanvas = previewCanvasRef.current;

      if (!canvas.width || !canvas.height) return;

      const previewCtx = previewCanvas.getContext("2d", { willReadFrequently: true });
      previewCtxRef.current = previewCtx;

      // How many tiles to show
      const tilesX = 5;
      const tilesY = 5;

      // Set preview canvas size
      previewCanvas.width = canvas.width * tilesX;
      previewCanvas.height = canvas.height * tilesY;

      // Clear preview canvas
      previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

      // Create temporary canvas for manipulations
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;

      // Create 2x2 pattern
      const patternCanvas = document.createElement("canvas");
      const patternCtx = patternCanvas.getContext("2d");
      patternCanvas.width = canvas.width * 2;
      patternCanvas.height = canvas.height * 2;

      // Position (0,0): Normal orientation
      patternCtx.drawImage(canvas, 0, 0);

      // Position (1,0): Flipped horizontally
      tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
      tempCtx.translate(tempCanvas.width, 0);
      tempCtx.scale(-1, 1);
      tempCtx.drawImage(canvas, 0, 0);
      patternCtx.drawImage(tempCanvas, canvas.width, 0);
      tempCtx.resetTransform();

      // Position (0,1): Flipped vertically
      tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
      tempCtx.translate(0, tempCanvas.height);
      tempCtx.scale(1, -1);
      tempCtx.drawImage(canvas, 0, 0);
      patternCtx.drawImage(tempCanvas, 0, canvas.height);
      tempCtx.resetTransform();

      // Position (1,1): Rotated 180 degrees
      tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
      tempCtx.translate(tempCanvas.width / 2, tempCanvas.height / 2);
      tempCtx.rotate(Math.PI); // 180 degrees
      tempCtx.drawImage(canvas, -tempCanvas.width / 2, -tempCanvas.height / 2);
      patternCtx.drawImage(tempCanvas, canvas.width, canvas.height);
      tempCtx.resetTransform();

      // 5x5 pattern
      for (let y = 0; y < Math.ceil(tilesY / 2); y++) {
         for (let x = 0; x < Math.ceil(tilesX / 2); x++) {
            previewCtx.drawImage(
               patternCanvas,
               x * patternCanvas.width,
               y * patternCanvas.height,
            );
         }
      }
   };

   // Save design function
   const saveDesign = () => {
      if (!canvasRef.current) return;

      const link = document.createElement("a");
      link.download = "diseño_baldosa.png";
      link.href = canvasRef.current.toDataURL("image/png");
      link.click();
   };

   // Save preview grid function
   const savePreviewGrid = () => {
      if (!previewCanvasRef.current) return;

      const link = document.createElement("a");
      link.download = "diseño_baldosa_preview.png";
      link.href = previewCanvasRef.current.toDataURL("image/png");
      link.click();
   };

   // Reset canvas function
   const resetCanvas = () => {
      loadTile();
   };

   // Handle canvas click
   const handleCanvasClick = (event) => {
      if (isProcessing || !canvasRef.current || !selectedColor) return;

      setIsProcessing(true);

      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      const x = Math.floor((event.clientX - rect.left) * scaleX);
      const y = Math.floor((event.clientY - rect.top) * scaleY);

      optimizedFloodFill(x, y, selectedColor);
      setIsProcessing(false);
   };

   // Initialize palette colors
   const initializeColorPalette = () => {
      const colorElements = document.querySelectorAll(".color");
      colorElements.forEach((colorElement) => {
         const colorValue = colorElement.getAttribute("data-color");
         colorElement.style.backgroundColor = colorValue;
      });
   };

   // Handle color selection
   const handleColorClick = (e) => {
      // Remove 'selected' class from all colors
      document.querySelectorAll(".color").forEach((el) => {
         el.classList.remove("selected");
      });

      // Add 'selected' class to clicked color
      e.target.classList.add("selected");

      const colorValue = e.target.getAttribute("data-color");
      const colorName = e.target.getAttribute("data-name");
      selectColor(colorValue, colorName);
   };

   // Handle tile selection
   const handleTileClick = (e, tileId) => {
      // Remove 'selected' class from all tiles
      document.querySelectorAll(".tile").forEach((el) => {
         el.classList.remove("selected");
      });

      // Add 'selected' class to clicked tile
      e.currentTarget.classList.add("selected");

      selectTile(tileId);
   };

   // Load first tile and color when component mounts
   useEffect(() => {
      // Initialize color palette
      initializeColorPalette();

      // Select first color (MC1)
      const firstColor = document.querySelector(".color");
      if (firstColor) {
         const colorValue = firstColor.getAttribute("data-color");
         const colorName = firstColor.getAttribute("data-name");
         if (colorValue) {
            selectColor(colorValue, colorName);
            firstColor.classList.add("selected");
         }
      }

      // Select first tile if exists
      const firstTile = document.querySelector(".tile");
      if (firstTile) {
         const tileId = firstTile.getAttribute("data-tile");
         if (tileId) {
            selectTile(tileId);
            firstTile.classList.add("selected");
         }
      }
   }, []);

   // Load tile whenever currentTile changes
   useEffect(() => {
      if (currentTile) {
         loadTile();
      }
   }, [currentTile]);

   // Import tile images - you'll need to import these properly in your project
   // import baldosa2 from './catalogo/baldosas para colorear 1-02.png'
   // This is a placeholder for demo purposes
   const tilesData = [
      { id: baldosa2, path: "baldosas para colorear 1-02.png", alt: "Baldosa 2" },
      { id: baldosa3, path: "baldosas para colorear 1-03.png", alt: "Baldosa 3" },
      { id: baldosa4, path: "baldosas para colorear 1-04.png", alt: "Baldosa 4" },
      { id: baldosa5, path: "baldosas para colorear 1-05.png", alt: "Baldosa 5" },
      { id: baldosa6, path: "baldosas para colorear 1-06.png", alt: "Baldosa 6" },
      { id: baldosa7, path: "baldosas para colorear 1-07.png", alt: "Baldosa 7" },
      { id: baldosa8, path: "baldosas para colorear 1-08.png", alt: "Baldosa 8" },
      { id: baldosa9, path: "baldosas para colorear 1-09.png", alt: "Baldosa 9" },
   ];

   // Color palette data
   const colorsData = [
      { color: "#f8f7f2", name: "MC1" },
      { color: "#c6bdbe", name: "MC2" },
      { color: "#7e7c7d", name: "MC3" },
      { color: "#333333", name: "MC4" },
      { color: "#288ac9", name: "MC5" },
      { color: "#487fc0", name: "MC6" },
      { color: "#23496d", name: "MC7" },
      { color: "#1a2e51", name: "MC8" },
      { color: "#9ebbbf", name: "MC9" },
      { color: "#b5dbdb", name: "MC10" },
      { color: "#714293", name: "MC11" },
      { color: "#ab71ae", name: "MC12" },
      { color: "#eb568d", name: "MC13" },
      { color: "#bd444b", name: "MC14" },
      { color: "#b03c3c", name: "MC15" },
      { color: "#8f271c", name: "MC16" },
      { color: "#f0bcae", name: "MC17" },
      { color: "#f9cbcd", name: "MC18" },
      { color: "#d76334", name: "MC19" },
      { color: "#c37d41", name: "MC20" },
      { color: "#cd9856", name: "MC21" },
      { color: "#8f7365", name: "MC22" },
      { color: "#c4a296", name: "MC23" },
      { color: "#58482f", name: "MC24" },
      { color: "#f9c941", name: "MC25" },
      { color: "#f9c85f", name: "MC26" },
      { color: "#ecce74", name: "MC27" },
      { color: "#ecdba7", name: "MC28" },
      { color: "#998d59", name: "MC29" },
      { color: "#90a268", name: "MC30" },
      { color: "#2ab190", name: "MC31" },
      { color: "#395137", name: "MC32" },
   ];

   return (
      <>
         <div className="container-editor">
            <div className="content-wrapper">
               <br />
               <h2 className="section-title">Diseña tu baldosa</h2>
               <div className="title-separation"></div>
               <div className="instructions">
                  <p>
                     <strong>Baldosas:</strong> Seleccione el modelo de baldosa para crear
                     su propio diseño de suelo hidráulico.
                  </p>
               </div>
               <div className="selection-menus">
                  <div className="baldosas-section">
                     <div className="catalog">
                        {tilesData.map((tile, index) => (
                           <div
                              key={index}
                              className={`tile ${currentTile === tile.id ? "selected" : ""}`}
                              onClick={(e) => handleTileClick(e, tile.id)}
                              data-tile={tile.id}
                           >
                              <img src={tile.id} alt={tile.alt} />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="design-area">
                  <div className="editor-side">
                     <div className="instructions">
                        <p>
                           <strong>Editor:</strong> Seleccione el color para personalizar
                           la baldosa elegida. Pinche en la zona que desee colorear.
                        </p>
                     </div>
                     <div className="selection-menus editor">
                        <div className="editor-section">
                           <div className="palette" id="color-palette">
                              {colorsData.map((colorItem, index) => (
                                 <div
                                    key={index}
                                    className={`color ${colorName === colorItem.name ? "selected" : ""}`}
                                    data-color={colorItem.color}
                                    data-name={colorItem.name}
                                    title={colorItem.name}
                                    style={{ backgroundColor: colorItem.color }}
                                    onClick={handleColorClick}
                                 ></div>
                              ))}
                           </div>
                        </div>

                        <div className="color-display">
                           <div className="color-selection">
                              El color elegido es: <strong id="colorName">{colorName}</strong>
                           </div>
                        </div>
                        <div className="canvas-container">
                           <div className="measures-container">
                              <p className="measures-text">20x20 cm</p>
                              <div className="measures-line"></div>
                           </div>
                           <canvas
                              id="canvas"
                              ref={canvasRef}
                              onClick={handleCanvasClick}
                           ></canvas>
                           <div className="button-group">
                              <button
                                 id="saveBtn"
                                 className="primary-button"
                                 onClick={saveDesign}
                              >
                                 Guardar Diseño
                              </button>
                              <button
                                 id="resetBtn"
                                 className="btn secondary-button"
                                 onClick={resetCanvas}
                              >
                                 Reiniciar
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="suelo-side">
                     <div className="instructions">
                        <p>
                           <strong>Suelo:</strong> A medida que vaya coloreando la baldosa
                           el simulador se rellenará automáticamente. Una vez haya
                           finalizado el diseño de su suelo puede comprobar el resultado
                           en la vista 3D.
                        </p>
                     </div>
                     <div className="selection-menus">
                        <div className="suelo-section"></div>
                        <div id="suelo" className="suelo-grid">
                           <div className="measures-container">
                              <p className="measures-text">100x100 cm</p>
                              <div className="measures-line"></div>
                           </div>
                           <canvas id="preview-canvas" ref={previewCanvasRef}></canvas>
                           <div className="button-group">
                              <button
                                 id="savePreviewBtn"
                                 className="btn primary-button"
                                 onClick={savePreviewGrid}
                              >
                                 Guardar Preview
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Editor;
