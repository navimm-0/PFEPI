function volver() {
  window.history.back();
}

function mostrarFormulario() {
  const figura = document.getElementById("figura").value;
  const formulario = document.getElementById("formularioFigura");
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  switch (figura) {
    case "cuadrado":
      formulario.innerHTML = `
        <label>Lado (cm):</label>
        <input type="number" id="lado" />
        <button onclick="calcularCuadrado()">Calcular</button>
      `;
      break;
    case "rectangulo":
      formulario.innerHTML = `
        <label>Base (cm):</label>
        <input type="number" id="base" />
        <label>Altura (cm):</label>
        <input type="number" id="altura" />
        <button onclick="calcularRectangulo()">Calcular</button>
      `;
      break;
    case "triangulo":
      formulario.innerHTML = `
        <label>Lado 1 (cm):</label>
        <input type="number" id="l1" />
        <label>Lado 2 (cm):</label>
        <input type="number" id="l2" />
        <label>Lado 3 (cm):</label>
        <input type="number" id="l3" />
        <label>Base (cm):</label>
        <input type="number" id="baseT" />
        <label>Altura (cm):</label>
        <input type="number" id="alturaT" />
        <button onclick="calcularTriangulo()">Calcular</button>
      `;
      break;
    case "circulo":
      formulario.innerHTML = `
        <label>Radio (cm):</label>
        <input type="number" id="radio" />
        <button onclick="calcularCirculo()">Calcular</button>
      `;
      break;
    default:
      formulario.innerHTML = "";
  }
}

function calcularCuadrado() {
  const lado = parseFloat(document.getElementById("lado").value);
  if (isNaN(lado) || lado <= 0) return mostrarError();
  const perimetro = 4 * lado;
  const area = lado * lado;
  mostrarResultado(perimetro, area);
}

function calcularRectangulo() {
  const b = parseFloat(document.getElementById("base").value);
  const h = parseFloat(document.getElementById("altura").value);
  if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0) return mostrarError();
  const perimetro = 2 * (b + h);
  const area = b * h;
  mostrarResultado(perimetro, area);
}

function calcularTriangulo() {
  const l1 = parseFloat(document.getElementById("l1").value);
  const l2 = parseFloat(document.getElementById("l2").value);
  const l3 = parseFloat(document.getElementById("l3").value);
  const base = parseFloat(document.getElementById("baseT").value);
  const h = parseFloat(document.getElementById("alturaT").value);
  if ([l1, l2, l3, base, h].some(x => isNaN(x) || x <= 0)) return mostrarError();
  const perimetro = l1 + l2 + l3;
  const area = (base * h) / 2;
  mostrarResultado(perimetro, area);
}

function calcularCirculo() {
  const r = parseFloat(document.getElementById("radio").value);
  if (isNaN(r) || r <= 0) return mostrarError();
  const perimetro = 2 * Math.PI * r;
  const area = Math.PI * r * r;
  mostrarResultado(perimetro, area);
}

function mostrarResultado(p, a) {
  document.getElementById("resultado").innerHTML = `
    <p>📏 Perímetro: <strong>${p.toFixed(2)} cm</strong></p>
    <p>📐 Área: <strong>${a.toFixed(2)} cm²</strong></p>
  `;
}

function mostrarError() {
  document.getElementById("resultado").innerHTML = `<p style="color:red;">⚠️ Ingresa valores válidos.</p>`;
}
