
let selectedColor = [0, 0, 0, 255]; // Color negro por defecto
let currentTile = "catalogo/soleria3.png"; // Imagen por defecto
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });


function selectColor(color) {
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    tempCtx.fillStyle = color;
    tempCtx.fillRect(0, 0, 1, 1);
    selectedColor = Array.from(tempCtx.getImageData(0, 0, 1, 1).data);
}

function selectTile(tilePath) {
    currentTile = tilePath;
    loadTile();
}



function loadTile() {
    const img = new Image();
    img.src = currentTile;
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    };
}

canvas.addEventListener("click", function (event) {
    const x = event.offsetX;
    const y = event.offsetY;
    optimizedFloodFill(x, y, selectedColor);
});

function optimizedFloodFill(x, y, fillColor) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = new Uint32Array(imageData.data.buffer);
    const width = canvas.width;

    const targetColor = data[y * width + x];
    const fillColorHex = rgbaToUint32(fillColor);

    if (targetColor === fillColorHex || !isWhite(targetColor)) return;

    const queue = [[x, y]];
    while (queue.length) {
        const [px, py] = queue.shift();
        const index = py * width + px;
        
        if (data[index] !== targetColor) continue;
        data[index] = fillColorHex;

        if (px > 0) queue.push([px - 1, py]);
        if (px < width - 1) queue.push([px + 1, py]);
        if (py > 0) queue.push([px, py - 1]);
        if (py < canvas.height - 1) queue.push([px, py + 1]);
    }

    ctx.putImageData(imageData, 0, 0);
}

function isWhite(color) {
    return (color & 0xFFFFFF) === 0xFFFFFF;
}

function rgbaToUint32(color) {
    return (color[3] << 24) | (color[0] << 16) | (color[1] << 8) | color[2];
}

function saveDesign() {
    const link = document.createElement("a");
    link.download = "diseño_baldosa.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

// Cargar baldosa inicial
loadTile();
