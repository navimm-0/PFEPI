function volver() {
  window.history.back();
}

function verificarRespuesta() {
  const respuesta = parseFloat(document.getElementById("respuesta").value);
  const resultado = document.getElementById("resultadoRelacion");

  if (isNaN(respuesta) || respuesta <= 0) {
    resultado.innerHTML = `<p style="color: red;">⚠️ Ingresa un número válido mayor a 0.</p>`;
    return;
  }

  if (respuesta === 12) {
    resultado.innerHTML = `<p style="color: green;">🎉 ¡Correcto! 6 lápices cuestan 12 pesos.</p>`;
    confeti();
  } else {
    resultado.innerHTML = `<p style="color: orange;">❌ No es correcto. ¡Intenta otra vez!</p>`;
  }
}

function confeti() {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.zIndex = "1000";
  canvas.style.pointerEvents = "none"; // ← Esto evita que bloquee los clics
  document.body.appendChild(canvas);

  const jsConfetti = new JSConfetti({ canvas });
  jsConfetti.addConfetti();

  setTimeout(() => {
    canvas.remove();
  }, 3000);
}

const params = new URLSearchParams(window.location.search);
  const id = params.get("id"); // por ejemplo, de "?id=7"

  if (id) {
    const btn = document.getElementById("btnEjercicios");
    btn.href = `/ver-ejercicios/${id}`;
  }