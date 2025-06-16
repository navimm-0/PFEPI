
function volver() {
  window.history.back();
}

const preguntas = [
  {
    "pregunta": "¿Cuál es el valor decimal de 1/2?",
    "opciones": [
      "0.25",
      "0.5",
      "1.5",
      "2"
    ],
    "correcta": 1,
    "explicacion": "1 dividido entre 2 es 0.5."
  },
  {
    "pregunta": "¿1/4 es igual a qué número decimal?",
    "opciones": [
      "0.2",
      "0.4",
      "0.25",
      "0.5"
    ],
    "correcta": 2,
    "explicacion": "1 dividido entre 4 es 0.25."
  },
  {
    "pregunta": "¿Qué fracción es igual a 0.5?",
    "opciones": [
      "1/2",
      "1/3",
      "1/4",
      "2/3"
    ],
    "correcta": 0,
    "explicacion": "0.5 es igual a la mitad, que es 1/2."
  },
  {
    "pregunta": "¿Cuál es el valor decimal de 3/4?",
    "opciones": [
      "0.75",
      "0.6",
      "0.8",
      "0.25"
    ],
    "correcta": 0,
    "explicacion": "3 dividido entre 4 es 0.75."
  },
  {
    "pregunta": "¿Cuál de estas fracciones es igual a 0.1?",
    "opciones": [
      "1/10",
      "1/5",
      "2/10",
      "1/2"
    ],
    "correcta": 0,
    "explicacion": "1 dividido entre 10 es 0.1."
  },
  {
    "pregunta": "¿Qué fracción representa el decimal 0.25?",
    "opciones": [
      "1/4",
      "1/2",
      "1/3",
      "3/4"
    ],
    "correcta": 0,
    "explicacion": "0.25 es igual a 1/4."
  },
  {
    "pregunta": "¿0.75 es igual a qué fracción?",
    "opciones": [
      "3/4",
      "1/4",
      "2/4",
      "1/2"
    ],
    "correcta": 0,
    "explicacion": "3 dividido entre 4 es 0.75."
  },
  {
    "pregunta": "¿Qué fracción es igual a 0.2?",
    "opciones": [
      "1/2",
      "1/5",
      "1/4",
      "1/3"
    ],
    "correcta": 1,
    "explicacion": "1 dividido entre 5 es 0.2."
  },
  {
    "pregunta": "¿Cuál es el valor decimal de 2/5?",
    "opciones": [
      "0.5",
      "0.4",
      "0.25",
      "0.2"
    ],
    "correcta": 1,
    "explicacion": "2 dividido entre 5 es 0.4."
  },
  {
    "pregunta": "¿Qué fracción es equivalente a 0.5?",
    "opciones": [
      "2/4",
      "3/4",
      "1/5",
      "1/3"
    ],
    "correcta": 0,
    "explicacion": "2/4 también es 0.5."
  }
];

function obtenerPreguntasAleatorias(cantidad) {
  const copia = [...preguntas];
  const seleccionadas = [];
  for (let i = 0; i < cantidad; i++) {
    const index = Math.floor(Math.random() * copia.length);
    seleccionadas.push(copia.splice(index, 1)[0]);
  }
  return seleccionadas;
}

let preguntasSeleccionadas = obtenerPreguntasAleatorias(5);
const contenedor = document.getElementById("contenedorPreguntas");

function mostrarPreguntas() {
  contenedor.innerHTML = "";
  preguntasSeleccionadas.forEach((p, i) => {
    const div = document.createElement("div");
    div.classList.add("tema");
    div.innerHTML = `
      <p><strong>Pregunta ${i + 1}:</strong> ${p.pregunta}</p>
      ${p.opciones.map((op, j) => `
        <label>
          <input type="radio" name="pregunta${i}" value="${j}" />
          ${op}
        </label><br/>
      `).join('')}
      <div class="retroalimentacion" id="retro${i}"></div>
    `;
    contenedor.appendChild(div);
  });
}

mostrarPreguntas();

document.getElementById("formEvaluacion").addEventListener("submit", function(e) {
  e.preventDefault();
  let correctas = 0;

  preguntasSeleccionadas.forEach((p, i) => {
    const respuesta = document.querySelector(`input[name="pregunta${i}"]:checked`);
    const retroDiv = document.getElementById(`retro${i}`);

    if (respuesta) {
      const esCorrecta = parseInt(respuesta.value) === p.correcta;
      if (esCorrecta) {
        correctas++;
        retroDiv.innerHTML = `<p style="color: green;">✅ ¡Correcto!</p>`;
      } else {
        retroDiv.innerHTML = `
          <p style="color: red;">❌ Incorrecto.</p>
          <p><strong>Explicación:</strong> ${p.explicacion}</p>
        `;
      }
    } else {
      retroDiv.innerHTML = `<p style="color: orange;">⚠️ No seleccionaste respuesta.</p>`;
    }
  });

  const resultado = document.getElementById("resultadoFinal");
  resultado.innerHTML = `
    <div class="interactivo">
      <h3>Resultado final:</h3>
      <p>Obtuviste <strong>${correctas} de 5</strong> respuestas correctas.</p>
      <p>${correctas === 5 ? "🎉 ¡Excelente trabajo!" :
          correctas >= 3 ? "😊 ¡Bien hecho! Aún puedes mejorar." :
          "📚 Sigue practicando, ¡tú puedes!"}</p>
      <button onclick="reintentar()">🔄 Reintentar Evaluación</button>
    </div>
  `;
});

function reintentar() {
  preguntasSeleccionadas = obtenerPreguntasAleatorias(5);
  mostrarPreguntas();
  document.getElementById("resultadoFinal").innerHTML = "";
}
