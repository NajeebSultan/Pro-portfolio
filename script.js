// Select the circular text container
const scrollCircle = document.getElementById('scrollCircle');

// The text to display
const text = 'Scroll Down';

// Number of segments around the circle
const segments = 24;

// Create and position each segment
for (let i = 0; i < segments; i++) {
  const span = document.createElement('span');
  span.textContent = text[i % text.length];
  const angle = (360 / segments) * i; // Calculate angle for each segment
  span.style.transform = rotate(${angle}deg) translate(100px) rotate(-${angle}deg); // Rotate each span
  scrollCircle.appendChild(span);
}

// Add rotation animation to the circle
let rotation = 0;
setInterval(() => {
  rotation += 1; // Increase rotation
  scrollCircle.style.transform = translate(-50%, -50%) rotate(${rotation}deg);
}, 50); // Rotate every 50ms