export default document.addEventListener("DOMContentLoaded", function () {
  let gradientElement: HTMLElement = document.querySelector(".gradient")!;
  let hue = 100; // Matiz inicial
  let saturation = 100; // Saturação
  let lightness = 70; // Luminosidade inicial
  let hueStep = 1; // Incremento de matiz

  function updateGradient() {
    hue += hueStep;
    if (hue >= 360) {
      hue = 0; // Reinicia a matiz
    }
    gradientElement.style.background = `linear-gradient(to right, hsl(${hue}, ${saturation}%, ${lightness}%), hsl(${
      hue + 120
    }, ${saturation}%, ${lightness}%), hsl(${
      hue + 240
    }, ${saturation}%, ${lightness}%))`;
  }

  setInterval(updateGradient, 50); // Atualiza o gradiente a cada 50 milissegundos
});
