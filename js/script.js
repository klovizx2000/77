// Typing animation for "Desenvolvedor Web"
const roleEl = document.querySelector(".typing");
const fullText = roleEl.textContent;
roleEl.textContent = "";

let index = 0;

function typeWriter() {
  if (index < fullText.length) {
    roleEl.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 70);
  }
}

window.addEventListener("load", () => {
  setTimeout(typeWriter, 1200); // delay to sync with fade-in
});
// Background lines that move with mouse
const canvas = document.getElementById("background-lines");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: 0, y: 0 };
const lines = [];

for (let i = 0; i < 30; i++) {
  lines.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: 80 + Math.random() * 40,
    angle: Math.random() * Math.PI * 2,
    speed: 0.02 + Math.random() * 0.02,
  });
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animateLines() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lines.forEach((line) => {
    line.angle += line.speed;
    const dx = Math.cos(line.angle) * line.length;
    const dy = Math.sin(line.angle) * line.length;

    ctx.beginPath();
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x + dx + (mouse.x - canvas.width / 2) * 0.001, line.y + dy + (mouse.y - canvas.height / 2) * 0.001);
    ctx.strokeStyle = "rgba(124, 106, 255, 0.2)";
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  requestAnimationFrame(animateLines);
}

animateLines();