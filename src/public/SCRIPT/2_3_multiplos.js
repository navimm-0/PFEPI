function volver() {
  window.history.back();
}

function verificarRelacion() {
  const base = parseInt(document.getElementById("numBase").value);
  const prueba = parseInt(document.getElementById("numPrueba").value);
  const resultado = document.getElementById("resultadoRelacion");

  if (isNaN(base) || isNaN(prueba) || base <= 0 || prueba <= 0) {
    resultado.innerHTML = `<p style="color: red;">⚠️ Ingresa números válidos mayores a 0.</p>`;
    return;
  }

  const esMultiplo = base % prueba === 0;
  const esDivisor = prueba % base === 0;

  let mensaje = `<p><strong>${prueba}</strong> ${esMultiplo ? "sí" : "no"} es divisor de ${base}.</p>`;
  mensaje += `<p><strong>${base}</strong> ${esDivisor ? "sí" : "no"} es múltiplo de ${prueba}.</p>`;

  resultado.innerHTML = mensaje;
}
