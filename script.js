const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');

const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');

const colorDisplay = document.getElementById('colorDisplay');
const hexCode = document.getElementById('hexCode');

const colorPicker = document.getElementById('colorPicker');

function rgbToHex(r, g, b) {
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function updateColor() {
    const r = parseInt(redRange.value);
    const g = parseInt(greenRange.value);
    const b = parseInt(blueRange.value);

    // Actualiza los valores de los inputs
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    // Convierte RGB a Hexadecimal
    const hex = rgbToHex(r, g, b);

    // Actualiza el color y el código hexadecimal
    colorDisplay.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    hexCode.textContent = hex;

    // Actualiza el color picker
    colorPicker.value = hex;
}

function updateFromInput() {
    const r = parseInt(redInput.value);
    const g = parseInt(greenInput.value);
    const b = parseInt(blueInput.value);

    // Actualiza los valores de los ranges
    redRange.value = r;
    greenRange.value = g;
    blueRange.value = b;

    // Convierte RGB a Hexadecimal
    const hex = rgbToHex(r, g, b);

    // Actualiza el color y el código hexadecimal
    colorDisplay.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    hexCode.textContent = hex;

    // Actualiza el color picker
    colorPicker.value = hex;
}

function updateFromColorPicker() {
    const hex = colorPicker.value;
    const { r, g, b } = hexToRgb(hex);

    // Actualiza los valores de los ranges y los inputs
    redRange.value = r;
    greenRange.value = g;
    blueRange.value = b;

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    // Actualiza el color y el código hexadecimal
    colorDisplay.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    hexCode.textContent = hex;
}

// Agregar los event listeners
redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);

redInput.addEventListener('input', updateFromInput);
greenInput.addEventListener('input', updateFromInput);
blueInput.addEventListener('input', updateFromInput);

colorPicker.addEventListener('input', updateFromColorPicker);
