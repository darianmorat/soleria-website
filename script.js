// ================================
// Variables Globales
// ================================
let selectedColor;
let currentTile;

const canvas = document.getElementById("canvas");
const previewCanvas = document.getElementById("preview-canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const previewCtx = previewCanvas.getContext("2d", { willReadFrequently: true });
const saveButton = document.getElementById("saveBtn");
const savePreviewButton = document.getElementById("savePreviewBtn");
const resetButton = document.getElementById("resetBtn");
const colorNameDisplay = document.getElementById("colorName");

// ================================
// Función para seleccionar color
// ================================
function selectColor(color) {
   // Actualizar UI
   document.querySelectorAll(".color").forEach((el) => {
      el.classList.remove("selected");
   });

   // Si es un color predefinido
   const clickedElement = document.querySelector(`.color[data-color="${color}"]`);
   if (clickedElement) {
      clickedElement.classList.add("selected");

      // Obtener el nombre del color del atributo data-name
      const colorName = clickedElement.getAttribute("data-name");
      if (colorNameDisplay && colorName) {
         colorNameDisplay.textContent = colorName;
      }
   }

   // Convertir color a RGBA
   const tempCanvas = document.createElement("canvas");
   const tempCtx = tempCanvas.getContext("2d");
   tempCanvas.width = 1;
   tempCanvas.height = 1;
   tempCtx.fillStyle = color;
   tempCtx.fillRect(0, 0, 1, 1);
   selectedColor = Array.from(tempCtx.getImageData(0, 0, 1, 1).data);
}

// ================================
// Funcion para seleccionar baldosa
// ================================
function selectTile(tileId) {
   // Actualizar UI
   document.querySelectorAll(".tile").forEach((el) => {
      el.classList.remove("selected");
   });

   const clickedElement = document.querySelector(`.tile[data-tile="${tileId}"]`);
   if (clickedElement) {
      clickedElement.classList.add("selected");
   }

   currentTile = tileId;
   loadTile();
}

// ==============================
// Funcion para cargar la baldosa
// ==============================
function loadTile() {
   const img = new Image();
   img.src = currentTile;
   img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      updatePreviewCanvas(); // Actualizar la vista previa después de cargar la baldosa
   };
}

// ==============================
// Eventos
// ==============================
let isProcessing = false; // Flag para evitar clics múltiples mientras procesa

canvas.addEventListener("click", function (event) {
   if (isProcessing) return; // Evitar clicks durante procesamiento

   isProcessing = true;
   const rect = canvas.getBoundingClientRect();
   const scaleX = canvas.width / rect.width;
   const scaleY = canvas.height / rect.height;

   const x = Math.floor((event.clientX - rect.left) * scaleX);
   const y = Math.floor((event.clientY - rect.top) * scaleY);

   optimizedFloodFill(x, y, selectedColor);
   isProcessing = false;
});

saveButton.onclick = saveDesign;
savePreviewButton.onclick = savePreviewGrid;
resetButton.onclick = resetCanvas;

// ==============================
// Algoritmo de flood fill
// ==============================
function optimizedFloodFill(startX, startY, fillColor) {
   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
   const data = imageData.data;
   const width = canvas.width;
   const height = canvas.height;

   // Obtener el color del pixel donde se hizo clic
   const targetIndex = (startY * width + startX) * 4;
   const targetR = data[targetIndex];
   const targetG = data[targetIndex + 1];
   const targetB = data[targetIndex + 2];
   const targetA = data[targetIndex + 3];

   // No hacer nada si el color ya es el mismo que el color de relleno
   if (
      targetR === fillColor[0] &&
      targetG === fillColor[1] &&
      targetB === fillColor[2] &&
      targetA === fillColor[3]
   ) {
      return;
   }

   // Array para marcar pixels ya visitados
   const visited = new Uint8Array(width * height);

   const stack = [];
   stack.push(startY * width + startX);

   while (stack.length > 0) {
      const pixelPos = stack.pop();
      const x = pixelPos % width;
      const y = Math.floor(pixelPos / width);

      // Si ya visitamos este pixel, saltarlo
      if (visited[pixelPos]) continue;

      const currentIndex = pixelPos * 4;

      // Verificar si este pixel tiene el color objetivo
      if (
         data[currentIndex] === targetR &&
         data[currentIndex + 1] === targetG &&
         data[currentIndex + 2] === targetB &&
         data[currentIndex + 3] === targetA
      ) {
         // Marcar como visitado
         visited[pixelPos] = 1;

         // Cambiar el color de este pixel
         data[currentIndex] = fillColor[0];
         data[currentIndex + 1] = fillColor[1];
         data[currentIndex + 2] = fillColor[2];
         data[currentIndex + 3] = fillColor[3];

         // Agregar pixels vecinos al stack (solo si están dentro de los límites)
         // Derecha
         if (x + 1 < width) {
            stack.push(y * width + (x + 1));
         }
         // Izquierda
         if (x - 1 >= 0) {
            stack.push(y * width + (x - 1));
         }
         // Abajo
         if (y + 1 < height) {
            stack.push((y + 1) * width + x);
         }
         // Arriba
         if (y - 1 >= 0) {
            stack.push((y - 1) * width + x);
         }
      }

      // Medida de seguridad: limitar el tamaño del stack para evitar desbordamiento
      if (stack.length > width * height) {
         console.warn("Stack demasiado grande, deteniendo para evitar congelamiento");
         break;
      }
   }

   ctx.putImageData(imageData, 0, 0);
   updatePreviewCanvas(); // Actualizar la vista previa después de rellenar un área
}

// ==============================
// Algoritmo de grid
// ==============================
function updatePreviewCanvas() {
   if (!canvas.width || !canvas.height) return;
   const previewCtx = previewCanvas.getContext("2d");

   // How many tiles to show (horizontally and vertically)
   const tilesX = 5;
   const tilesY = 5;

   // Set preview canvas size based on the main canvas dimensions and desired tiles
   previewCanvas.width = canvas.width * tilesX;
   previewCanvas.height = canvas.height * tilesY;

   // Clear the preview canvas first
   previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

   // Need a temporary canvas for manipulating the image
   const tempCanvas = document.createElement("canvas");
   const tempCtx = tempCanvas.getContext("2d");
   tempCanvas.width = canvas.width;
   tempCanvas.height = canvas.height;

   // Create our 2x2 pattern first to reuse
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

   // Position (1,1): Rotated 180 degrees (flipped both horizontally and vertically)
   tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
   tempCtx.translate(tempCanvas.width / 2, tempCanvas.height / 2);
   tempCtx.rotate(Math.PI); // 180 degrees
   tempCtx.drawImage(canvas, -tempCanvas.width / 2, -tempCanvas.height / 2);
   patternCtx.drawImage(tempCanvas, canvas.width, canvas.height);
   tempCtx.resetTransform();

   // 4x4 pattern
   // for (let y = 0; y < 2; y++) {
   //    for (let x = 0; x < 2; x++) {
   //       previewCtx.drawImage(
   //          patternCanvas,
   //          x * patternCanvas.width,
   //          y * patternCanvas.height,
   //       );
   //    }
   // }

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
}

// ==============================
// Funciones de main btns
// ==============================
function saveDesign() {
   const link = document.createElement("a");
   link.download = "diseño_baldosa.png";
   link.href = canvas.toDataURL("image/png");
   link.click();
}
function savePreviewGrid() {
   const link = document.createElement("a");
   link.download = "diseño_baldosa_preview.png";
   link.href = previewCanvas.toDataURL("image/png");
   link.click();
}

function resetCanvas() {
   loadTile();
   // updatePreviewCanvas se llamará desde loadTile
}

// ==============================
// Eventos para colores
// ==============================
document.querySelectorAll(".color").forEach((colorElement) => {
   colorElement.addEventListener("click", function () {
      const colorValue = this.getAttribute("data-color");
      selectColor(colorValue);
   });
});

// ==============================
// Cargar colores de la paleta
// ==============================
function initializeColorPalette() {
   document.querySelectorAll(".color").forEach((colorElement) => {
      const colorValue = colorElement.getAttribute("data-color");
      colorElement.style.backgroundColor = colorValue;
   });
}

// ==============================
// Inicialización al cargar la página
// ==============================
window.addEventListener("DOMContentLoaded", function () {
   // Seleccionar la primera baldosa si existe
   const firstTile = document.querySelector(".tile");
   if (firstTile) {
      const tileId = firstTile.getAttribute("data-tile");
      if (tileId) {
         selectTile(tileId);
      }
   }

   initializeColorPalette();

   // Seleccionar el primer color (MC1)
   const firstColor = document.querySelector(".color");
   if (firstColor) {
      const colorValue = firstColor.getAttribute("data-color");
      if (colorValue) {
         selectColor(colorValue);
      }
   }
});
