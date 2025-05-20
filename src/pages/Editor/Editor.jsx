import { useState, useEffect, useRef } from "react";
import { tileColors } from "../../data/TileColors.jsx";
import { tileModels } from "../../data/TileModels.jsx";
import { Section } from "../../components/Section/Section";
import styles from "./Editor.module.css";

const Editor = () => {
   const [selectedColor, setSelectedColor] = useState(null);
   const [currentTile, setCurrentTile] = useState(null);
   const [colorName, setColorName] = useState("MC1");
   const [isProcessing, setIsProcessing] = useState(false);

   const canvasRef = useRef(null);
   const previewCanvasRef = useRef(null);
   const ctxRef = useRef(null);
   const previewCtxRef = useRef(null);

   const selectColor = (color, name) => {
      setColorName(name || "");

      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      tempCanvas.width = 1;
      tempCanvas.height = 1;
      tempCtx.fillStyle = color;
      tempCtx.fillRect(0, 0, 1, 1);

      setSelectedColor(Array.from(tempCtx.getImageData(0, 0, 1, 1).data));
   };

   const selectTile = (tileId) => {
      setCurrentTile(tileId);
   };

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

         ctxRef.current = ctx;

         updatePreviewCanvas();
      };
   };

   const optimizedFloodFill = (startX, startY, fillColor) => {
      if (!ctxRef.current || !canvasRef.current) return;
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const width = canvas.width;
      const height = canvas.height;

      // Get the exact target color at clicked position
      const targetIndex = (startY * width + startX) * 4;
      const targetR = data[targetIndex];
      const targetG = data[targetIndex + 1];
      const targetB = data[targetIndex + 2];
      const targetA = data[targetIndex + 3];

      // No action if already filled
      if (
         targetR === fillColor[0] &&
         targetG === fillColor[1] &&
         targetB === fillColor[2] &&
         targetA === fillColor[3]
      )
         return;

      // --- FIRST PASS: Strict flood fill ---
      const visited = new Uint8Array(width * height);
      const stack = [startY * width + startX];

      while (stack.length > 0) {
         const pixelPos = stack.pop();
         const x = pixelPos % width;
         const y = Math.floor(pixelPos / width);

         if (visited[pixelPos]) continue;
         visited[pixelPos] = 1;

         const currentIndex = pixelPos * 4;

         // STRICT color match (no tolerance)
         if (
            data[currentIndex] === targetR &&
            data[currentIndex + 1] === targetG &&
            data[currentIndex + 2] === targetB &&
            data[currentIndex + 3] === targetA
         ) {
            // Fill the pixel
            data.set(fillColor, currentIndex);

            // 4-directional expansion
            if (x > 0) stack.push(y * width + (x - 1)); // Left
            if (x < width - 1) stack.push(y * width + (x + 1)); // Right
            if (y > 0) stack.push((y - 1) * width + x); // Up
            if (y < height - 1) stack.push((y + 1) * width + x); // Down
         }
      }

      // --- SECOND PASS: Hole filling ---
      // Only fills pixels that:
      // 1. Are surrounded by filled pixels on at least 2 sides
      // 2. Are very close to the target color
      const holeFillTolerance = 5; // Very small tolerance just for anti-aliasing
      for (let y = 1; y < height - 1; y++) {
         for (let x = 1; x < width - 1; x++) {
            const i = (y * width + x) * 4;

            // Skip if already filled or visited
            if (
               data[i] === fillColor[0] &&
               data[i + 1] === fillColor[1] &&
               data[i + 2] === fillColor[2]
            )
               continue;

            // Check if color is very close to target
            const isNearTarget =
               Math.abs(data[i] - targetR) <= holeFillTolerance &&
               Math.abs(data[i + 1] - targetG) <= holeFillTolerance &&
               Math.abs(data[i + 2] - targetB) <= holeFillTolerance;

            if (isNearTarget) {
               // Count filled neighbors
               let filledNeighbors = 0;

               // Left
               if (
                  data[i - 4] === fillColor[0] &&
                  data[i - 3] === fillColor[1] &&
                  data[i - 2] === fillColor[2]
               )
                  filledNeighbors++;
               // Right
               if (
                  data[i + 4] === fillColor[0] &&
                  data[i + 5] === fillColor[1] &&
                  data[i + 6] === fillColor[2]
               )
                  filledNeighbors++;
               // Top
               if (
                  data[i - width * 4] === fillColor[0] &&
                  data[i - width * 4 + 1] === fillColor[1] &&
                  data[i - width * 4 + 2] === fillColor[2]
               )
                  filledNeighbors++;
               // Bottom
               if (
                  data[i + width * 4] === fillColor[0] &&
                  data[i + width * 4 + 1] === fillColor[1] &&
                  data[i + width * 4 + 2] === fillColor[2]
               )
                  filledNeighbors++;

               // Fill if at least 2 neighbors are filled
               if (filledNeighbors >= 2) {
                  data.set(fillColor, i);
               }
            }
         }
      }

      ctx.putImageData(imageData, 0, 0);
      updatePreviewCanvas();
   };

   const updatePreviewCanvas = () => {
      if (!canvasRef.current || !previewCanvasRef.current) return;

      const canvas = canvasRef.current;
      const previewCanvas = previewCanvasRef.current;

      if (!canvas.width || !canvas.height) return;

      const previewCtx = previewCanvas.getContext("2d", { willReadFrequently: true });
      previewCtxRef.current = previewCtx;

      const tilesX = 5;
      const tilesY = 5;

      previewCanvas.width = canvas.width * tilesX;
      previewCanvas.height = canvas.height * tilesY;

      previewCtx.fillStyle = "#FFFFFF";
      previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);

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
      tempCtx.rotate(Math.PI);
      tempCtx.drawImage(canvas, -tempCanvas.width / 2, -tempCanvas.height / 2);
      patternCtx.drawImage(tempCanvas, canvas.width, canvas.height);
      tempCtx.resetTransform();

      // Draw the 5x5 pattern first
      for (let y = 0; y < Math.ceil(tilesY / 2); y++) {
         for (let x = 0; x < Math.ceil(tilesX / 2); x++) {
            previewCtx.drawImage(
               patternCanvas,
               x * patternCanvas.width,
               y * patternCanvas.height,
            );
         }
      }

      // Then draw borders on top
      const borderWidth = 10; // Adjust border thickness here
      previewCtx.strokeStyle = "#000000"; // Border color
      previewCtx.lineWidth = borderWidth;

      // Draw borders around each tile
      for (let y = 0; y < tilesY; y++) {
         for (let x = 0; x < tilesX; x++) {
            previewCtx.strokeRect(
               x * canvas.width,
               y * canvas.height,
               canvas.width,
               canvas.height,
            );
         }
      }

      // Draw outer border
      previewCtx.lineWidth = borderWidth * 1; // Thicker outer border
      previewCtx.strokeRect(
         borderWidth / 2,
         borderWidth / 2,
         previewCanvas.width - borderWidth,
         previewCanvas.height - borderWidth,
      );
   };

   const saveDesign = () => {
      if (!canvasRef.current) return;

      const link = document.createElement("a");
      link.download = "diseño_baldosa.png";
      link.href = canvasRef.current.toDataURL("image/png");
      link.click();
   };

   const savePreviewGrid = () => {
      if (!previewCanvasRef.current) return;

      const link = document.createElement("a");
      link.download = "diseño_baldosa_preview.png";
      link.href = previewCanvasRef.current.toDataURL("image/png");
      link.click();
   };

   const resetCanvas = () => {
      loadTile();
   };

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

   const initializeColorPalette = () => {
      const colorElements = document.querySelectorAll(".color");
      colorElements.forEach((colorElement) => {
         const colorValue = colorElement.getAttribute("data-color");
         colorElement.style.backgroundColor = colorValue;
      });
   };

   const handleColorClick = (e) => {
      document.querySelectorAll(".color").forEach((el) => {
         el.classList.remove("selected");
      });

      e.target.classList.add("selected");

      const colorValue = e.target.getAttribute("data-color");
      const colorName = e.target.getAttribute("data-name");
      selectColor(colorValue, colorName);
   };

   const handleTileClick = (e, tileId) => {
      document.querySelectorAll(".tile").forEach((el) => {
         el.classList.remove("selected");
      });

      e.currentTarget.classList.add("selected");
      selectTile(tileId);
   };

   // Load first tile when component mounts
   useEffect(() => {
      initializeColorPalette();

      const firstTile = document.querySelector(`.${styles.tile}`);
      if (firstTile) {
         const tileId = firstTile.getAttribute("data-tile");
         if (tileId) {
            selectTile(tileId);
         }
      }
   }, []);

   useEffect(() => {
      if (currentTile) {
         loadTile();
      }
   }, [currentTile]);

   return (
      <div className={styles.editor}>
         <Section>
            <div className={styles.container}>
               <div className={styles.tileSection}>
                  <div className={styles.instructions}>
                     <p>
                        <strong>Baldosas:</strong> Seleccione el modelo de baldosa para
                        crear su propio diseño de suelo hidráulico.
                     </p>
                  </div>
                  <div className={styles.menus}>
                     <div className={styles.tilesMenu}>
                        <div className={styles.tileItem}>
                           {tileModels.map((tile, index) => (
                              <div
                                 key={index}
                                 className={`${styles.tile} ${currentTile === tile.id ? styles.selected : ""}`}
                                 onClick={(e) => handleTileClick(e, tile.id)}
                                 data-tile={tile.id}
                              >
                                 <img src={tile.id} alt={tile.alt} />
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               <div className={styles.designArea}>
                  <div className={styles.editorSection}>
                     <div className={styles.instructions}>
                        <p>
                           <strong>Editor:</strong> Seleccione el color para personalizar
                           la baldosa elegida. Pinche en la zona que desee colorear.
                        </p>
                     </div>
                     <div className={styles.menus}>
                        <div className={styles.paletteMenu}>
                           <div className={styles.palette}>
                              {tileColors.map((colorItem, index) => (
                                 <div
                                    key={index}
                                    className={`${styles.color} ${colorName === colorItem.name ? styles.selected : ""}`}
                                    data-color={colorItem.color}
                                    data-name={colorItem.name}
                                    title={colorItem.name}
                                    style={{ backgroundColor: colorItem.color }}
                                    onClick={handleColorClick}
                                 ></div>
                              ))}
                           </div>
                        </div>

                        <div className={styles.colorDisplay}>
                           <div className={styles.colorSelection}>
                              El color elegido es: <strong>{colorName}</strong>
                           </div>
                        </div>
                        <div className={styles.canvasContainer}>
                           <div className={styles.measures}>
                              <p>20x20 cm</p>
                              <div></div>
                           </div>
                           <canvas
                              className={styles.canvas}
                              ref={canvasRef}
                              onClick={handleCanvasClick}
                           ></canvas>
                           <div className={styles.btnActions}>
                              <button onClick={saveDesign}>Guardar Diseño</button>
                              <button className={styles.resetBtn} onClick={resetCanvas}>
                                 Reiniciar
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className={styles.sueloSection}>
                     <div className={styles.instructions}>
                        <p>
                           <strong>Suelo:</strong> A medida que vaya coloreando la baldosa
                           el simulador se rellenará automáticamente. Una vez haya
                           finalizado el diseño de su suelo puede comprobar el resultado
                           en la vista 3D.
                        </p>
                     </div>
                     <div className={styles.menus}>
                        <div></div>
                        <div className={styles.sueloGrid}>
                           <div className={styles.measures}>
                              <p>100x100 cm</p>
                              <div></div>
                           </div>
                           <canvas
                              className={styles.previewCanvas}
                              ref={previewCanvasRef}
                           ></canvas>
                           <div className={styles.btnActions}>
                              <button id="savePreviewBtn" onClick={savePreviewGrid}>
                                 Guardar Preview
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Section>
      </div>
   );
};

export default Editor;
