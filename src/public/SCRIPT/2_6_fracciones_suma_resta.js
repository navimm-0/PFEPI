function volver() {
  window.history.back();
}

function calcularFraccion(operacion) {
  const n1 = parseInt(document.getElementById("num1").value);
  const n2 = parseInt(document.getElementById("num2").value);
  const den = parseInt(document.getElementById("den").value);
  const resultado = document.getElementById("resultadoFraccion");

  if ([n1, n2, den].some(v => isNaN(v) || v < 0)) {
    resultado.innerHTML = `<p style="color: red;">⚠️ Ingresa solo números válidos (mayores o iguales a 0).</p>`;
    return;
  }

  if (den === 0) {
    resultado.innerHTML = `<p style="color: red;">⚠️ El denominador no puede ser cero.</p>`;
    return;
  }

  const resNumerador = operacion === 'suma' ? n1 + n2 : n1 - n2;
  if (resNumerador < 0) {
    resultado.innerHTML = `<p style="color: red;">⚠️ El resultado no puede ser negativo en esta operación.</p>`;
    return;
  }

  function simplificar(a, b) {
    const mcd = (x, y) => y === 0 ? x : mcd(y, x % y);
    const d = mcd(a, b);
    return [a / d, b / d];
  }

  const [simpNum, simpDen] = simplificar(resNumerador, den);

  let mensaje = `<p>Resultado: <strong>${resNumerador}/${den}</strong></p>`;
  if (simpNum !== resNumerador || simpDen !== den) {
    mensaje += `<p>Fracción simplificada: <strong>${simpNum}/${simpDen}</strong></p>`;
  }

  resultado.innerHTML = mensaje;
}
