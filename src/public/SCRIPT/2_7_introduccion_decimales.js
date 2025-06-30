function volver() {
  window.history.back();
}

function convertirADecimal() {
  const num = parseFloat(document.getElementById("numerador").value);
  const den = parseFloat(document.getElementById("denominador").value);
  const resultado = document.getElementById("resultadoDecimal");

  if (isNaN(num) || isNaN(den) || den === 0) {
    resultado.innerHTML = `<p style="color: red;">⚠️ Ingresa una fracción válida (el denominador no puede ser cero).</p>`;
    return;
  }

  const decimal = num / den;
  resultado.innerHTML = `
    <p><strong>${num}/${den}</strong> = <strong>${decimal.toFixed(4)}</strong></p>
  `;
}

const params = new URLSearchParams(window.location.search);
  const id = params.get("id"); // por ejemplo, de "?id=7"

  if (id) {
    const btn = document.getElementById("btnEjercicios");
    btn.href = `/ver-ejercicios/${id}`;
  }