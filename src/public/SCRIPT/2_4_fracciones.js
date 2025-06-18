function volver() {
  window.history.back();
}

function calcularFraccion() {
  const total = parseInt(document.getElementById("partesTotales").value);
  const usadas = parseInt(document.getElementById("partesUsadas").value);
  const resultado = document.getElementById("resultadoFraccion");

  if (isNaN(total) || isNaN(usadas) || total <= 0 || usadas < 0 || usadas > total) {
    resultado.innerHTML = `<p style="color: red;">⚠️ Ingresa valores válidos. El total debe ser mayor que 0 y las partes usadas no pueden ser mayores al total.</p>`;
    return;
  }

  function simplificarFraccion(a, b) {
    const mcd = (x, y) => y === 0 ? x : mcd(y, x % y);
    const divisor = mcd(a, b);
    return [a / divisor, b / divisor];
  }

  const [numSimp, denSimp] = simplificarFraccion(usadas, total);

  let mensaje = `<p>Tienes la fracción: <strong>${usadas}/${total}</strong></p>`;
  if (numSimp !== usadas || denSimp !== total) {
    mensaje += `<p>Fracción simplificada: <strong>${numSimp}/${denSimp}</strong></p>`;
  }

  resultado.innerHTML = mensaje;
}
