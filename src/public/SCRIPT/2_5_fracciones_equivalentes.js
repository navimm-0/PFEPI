function volver() {
  window.history.back();
}

function verificarEquivalencia() {
  const n1 = parseInt(document.getElementById("n1").value);
  const d1 = parseInt(document.getElementById("d1").value);
  const n2 = parseInt(document.getElementById("n2").value);
  const d2 = parseInt(document.getElementById("d2").value);
  const resultado = document.getElementById("resultadoEquivalencia");

  if ([n1, d1, n2, d2].some(v => isNaN(v) || v <= 0)) {
    resultado.innerHTML = `<p style="color: red;">⚠️ Ingresa valores válidos mayores a 0.</p>`;
    return;
  }

  const eq = (n1 * d2 === n2 * d1);
  resultado.innerHTML = `<p>${eq ? '✅ Son equivalentes' : '❌ No son equivalentes'}</p>`;
}

function compararFracciones() {
  const n1 = parseInt(document.getElementById("nc1").value);
  const d1 = parseInt(document.getElementById("dc1").value);
  const n2 = parseInt(document.getElementById("nc2").value);
  const d2 = parseInt(document.getElementById("dc2").value);
  const resultado = document.getElementById("resultadoComparacion");

  if ([n1, d1, n2, d2].some(v => isNaN(v) || v <= 0)) {
    resultado.innerHTML = `<p style="color: red;">⚠️ Ingresa valores válidos mayores a 0.</p>`;
    return;
  }

  const f1 = n1 / d1;
  const f2 = n2 / d2;

  let mensaje = `<p>${n1}/${d1} ${f1 > f2 ? '>' : f1 < f2 ? '<' : '='} ${n2}/${d2}</p>`;
  resultado.innerHTML = mensaje;
}
