function volver() {
  window.history.back();
}

// =========================
// 1. CRONÓMETRO
// =========================
let tiempo = 0;
let intervalo;
let cronometroActivo = false;

document.getElementById("iniciarCronometro").addEventListener("click", () => {
  if (!cronometroActivo) {
    tiempo = 0;
    cronometroActivo = true;
    document.getElementById("tiempoTranscurrido").textContent = "⏳ Tiempo: 00:00";
    intervalo = setInterval(() => {
      tiempo++;
      const minutos = String(Math.floor(tiempo / 60)).padStart(2, "0");
      const segundos = String(tiempo % 60).padStart(2, "0");
      document.getElementById("tiempoTranscurrido").textContent = `⏳ Tiempo: ${minutos}:${segundos}`;
    }, 1000);
  }
});

// =========================
// 2. BANCO DE PREGUNTAS AVANZADAS
// =========================
const bancoPreguntasAvanzadas = [
  {
    tipo: "opcion",
    pregunta: "¿Cuál es el resultado de 2/3 + 1/4?",
    opciones: ["3/7", "7/12", "11/12", "3/4"],
    correcta: 2,
    explicacion: "MCM(3,4) = 12 → 2/3 = 8/12 y 1/4 = 3/12 → suma = 11/12"
  },
  {
    tipo: "abierta",
    pregunta: "Simplifica la fracción 6/12",
    respuesta: "1/2",
    explicacion: "6/12 simplificado es 1/2"
  },
  {
    tipo: "opcion",
    pregunta: "¿Cuál fracción es mayor?",
    opciones: ["5/8", "3/4", "7/10", "2/3"],
    correcta: 1,
    explicacion: "3/4 = 0.75, que es mayor que las demás opciones."
  },
  {
    tipo: "abierta",
    pregunta: "Observa la imagen y escribe el numero faltante",
    imagen: "../IMG/fraccion.png", // Asegúrate de que esta imagen exista
    respuesta: "10",
    explicacion: "La imagen muestra 3 partes de 4"
  },
  {
    tipo: "abierta",
    pregunta: "Resuelve y simplifica: 4/8 + 2/8",
    respuesta: "3/4",
    explicacion: "4/8 + 2/8 = 6/8 = 3/4"
  }
];

function obtenerPreguntasAvanzadas(cantidad) {
  const copia = [...bancoPreguntasAvanzadas];
  const seleccionadas = [];
  for (let i = 0; i < cantidad; i++) {
    const index = Math.floor(Math.random() * copia.length);
    seleccionadas.push(copia.splice(index, 1)[0]);
  }
  return seleccionadas;
}

let preguntasSeleccionadas = obtenerPreguntasAvanzadas(5);
const contenedor = document.getElementById("contenedorAvanzado");

// =========================
// 3. MOSTRAR PREGUNTAS
// =========================
function mostrarPreguntas() {
  contenedor.innerHTML = "";
  preguntasSeleccionadas.forEach((p, i) => {
    const div = document.createElement("div");
    div.classList.add("tema");

    let contenido = `<p><strong>Pregunta ${i + 1}:</strong> ${p.pregunta}</p>`;

    if (p.imagen) {
      contenido += `<img src="${p.imagen}" alt="Imagen pregunta" style="max-width: 300px; display: block; margin: 1rem auto;">`;
    }

    if (p.tipo === "opcion") {
      contenido += p.opciones.map((op, j) => `
        <label>
          <input type="radio" name="pregunta${i}" value="${j}" />
          ${op}
        </label><br/>
      `).join('');
    } else if (p.tipo === "abierta") {
      contenido += `
        <input type="text" name="pregunta${i}" placeholder="Escribe tu respuesta" style="width: 200px; padding: 0.5rem;" />
      `;
    }

    contenido += `<div class="retroalimentacion" id="retro${i}"></div>`;
    div.innerHTML = contenido;
    contenedor.appendChild(div);
  });
}

mostrarPreguntas();

// =========================
// 4. ENVÍO DEL FORMULARIO
// =========================
document.getElementById("formAvanzado").addEventListener("submit", function(e) {
  e.preventDefault();
  clearInterval(intervalo);
  cronometroActivo = false;

  let correctas = 0;

  preguntasSeleccionadas.forEach((p, i) => {
    const retroDiv = document.getElementById(`retro${i}`);

    if (p.tipo === "opcion") {
      const respuesta = document.querySelector(`input[name="pregunta${i}"]:checked`);
      if (respuesta) {
        const esCorrecta = parseInt(respuesta.value) === p.correcta;
        if (esCorrecta) {
          correctas++;
          retroDiv.innerHTML = `<p style="color: green;">✅ ¡Correcto!</p>`;
        } else {
          retroDiv.innerHTML = `<p style="color: red;">❌ Incorrecto.</p><p><strong>Explicación:</strong> ${p.explicacion}</p>`;
        }
      } else {
        retroDiv.innerHTML = `<p style="color: orange;">⚠️ No seleccionaste respuesta.</p>`;
      }
    } else if (p.tipo === "abierta") {
      const input = document.querySelector(`input[name="pregunta${i}"]`);
      const valor = input?.value?.trim().replace(/\s+/g, "").toLowerCase();
      const esperado = p.respuesta.replace(/\s+/g, "").toLowerCase();

      if (valor) {
        if (valor === esperado) {
          correctas++;
          retroDiv.innerHTML = `<p style="color: green;">✅ ¡Correcto!</p>`;
        } else {
          retroDiv.innerHTML = `<p style="color: red;">❌ Incorrecto.</p><p><strong>Explicación:</strong> ${p.explicacion}</p>`;
        }
      } else {
        retroDiv.innerHTML = `<p style="color: orange;">⚠️ No escribiste respuesta.</p>`;
      }
    }
  });

  const minutos = String(Math.floor(tiempo / 60)).padStart(2, "0");
  const segundos = String(tiempo % 60).padStart(2, "0");

  const resultado = document.getElementById("resultadoFinal");
  resultado.innerHTML = `
    <div class="tema">
      <h3>Resultado final:</h3>
      <p>Respondiste correctamente <strong>${correctas} de 5</strong>.</p>
      <p>⏱️ Tiempo total: <strong>${minutos}:${segundos}</strong></p>
      <p>${correctas === 5 ? "🎯 ¡Dominaste el tema!" :
          correctas >= 3 ? "👍 Buen intento. ¡Sigue practicando!" :
          "📘 Revisa el material extra para reforzar tus conocimientos."}</p>
      <button onclick="reintentar()">🔄 Reintentar Examen</button>
    </div>
  `;
});

// =========================
// 5. REINTENTAR EXAMEN
// =========================
function reintentar() {
  preguntasSeleccionadas = obtenerPreguntasAvanzadas(5);
  mostrarPreguntas();
  document.getElementById("resultadoFinal").innerHTML = "";
  document.getElementById("tiempoTranscurrido").textContent = "⏳ Tiempo: 00:00";
  cronometroActivo = false;
  tiempo = 0;
}
