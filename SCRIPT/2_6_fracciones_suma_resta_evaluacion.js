
function volver() {
  window.history.back();
}

const preguntas = [
  {
    "pregunta": "¿Cuál es el resultado de 1/4 + 2/4?",
    "opciones": [
      "3/4",
      "1/2",
      "1/4",
      "2/2"
    ],
    "correcta": 0,
    "explicacion": "1/4 + 2/4 = 3/4 al tener mismo denominador."
  },
  {
    "pregunta": "¿Qué es 3/5 - 1/5?",
    "opciones": [
      "2/5",
      "3/4",
      "1/4",
      "2/4"
    ],
    "correcta": 0,
    "explicacion": "3 - 1 = 2; mismo denominador 5, resultado: 2/5."
  },
  {
    "pregunta": "¿Cuál es la suma de 2/6 + 3/6?",
    "opciones": [
      "5/6",
      "4/6",
      "6/6",
      "1/2"
    ],
    "correcta": 0,
    "explicacion": "Suma de numeradores: 2+3=5. Denominador común: 6."
  },
  {
    "pregunta": "Si tienes 4/8 de una pizza y comes 2/8, ¿cuánto queda?",
    "opciones": [
      "2/8",
      "3/8",
      "6/8",
      "4/4"
    ],
    "correcta": 0,
    "explicacion": "4 - 2 = 2 partes de 8."
  },
  {
    "pregunta": "¿Qué da 5/10 - 2/10?",
    "opciones": [
      "3/10",
      "1/10",
      "7/10",
      "2/5"
    ],
    "correcta": 0,
    "explicacion": "5 - 2 = 3. Denominador 10."
  },
  {
    "pregunta": "¿Qué es 3/6 + 3/6?",
    "opciones": [
      "6/6",
      "1",
      "Ambas",
      "3/3"
    ],
    "correcta": 2,
    "explicacion": "3 + 3 = 6; 6/6 = 1, así que ambas son válidas."
  },
  {
    "pregunta": "¿Cuánto es 1/2 + 1/2?",
    "opciones": [
      "1",
      "2/2",
      "Ambas",
      "2"
    ],
    "correcta": 2,
    "explicacion": "1/2 + 1/2 = 2/2 = 1."
  },
  {
    "pregunta": "¿Qué da 6/10 - 1/10?",
    "opciones": [
      "5/10",
      "1/5",
      "6/9",
      "7/10"
    ],
    "correcta": 0,
    "explicacion": "6 - 1 = 5. Resultado: 5/10."
  },
  {
    "pregunta": "¿Cuál es el resultado de 4/4 - 1/4?",
    "opciones": [
      "3/4",
      "1",
      "1/4",
      "2/4"
    ],
    "correcta": 0,
    "explicacion": "4 - 1 = 3. Denominador 4."
  },
  {
    "pregunta": "¿Qué es 2/8 + 4/8?",
    "opciones": [
      "6/8",
      "3/4",
      "Ambas",
      "1"
    ],
    "correcta": 2,
    "explicacion": "2 + 4 = 6. 6/8 = 3/4 al simplificar."
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
