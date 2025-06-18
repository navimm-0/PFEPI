
function volver() {
  window.history.back();
}

const preguntas = [
  {
    "pregunta": "¿Cuál de estas fracciones es equivalente a 1/2?",
    "opciones": [
      "2/4",
      "1/3",
      "3/5",
      "2/3"
    ],
    "correcta": 0,
    "explicacion": "2/4 representa la misma cantidad que 1/2."
  },
  {
    "pregunta": "¿Qué fracción es equivalente a 3/6?",
    "opciones": [
      "1/3",
      "1/2",
      "2/3",
      "1/4"
    ],
    "correcta": 1,
    "explicacion": "3/6 = 1/2 al simplificar."
  },
  {
    "pregunta": "¿Cuál es mayor: 1/4 o 1/2?",
    "opciones": [
      "1/4",
      "1/2",
      "Son iguales",
      "No se puede saber"
    ],
    "correcta": 1,
    "explicacion": "1/2 es mayor que 1/4."
  },
  {
    "pregunta": "¿Cuál es menor: 2/5 o 1/3?",
    "opciones": [
      "2/5",
      "1/3",
      "Son iguales",
      "No se puede saber"
    ],
    "correcta": 1,
    "explicacion": "1/3 es menor que 2/5."
  },
  {
    "pregunta": "¿Qué fracción es igual a 4/8?",
    "opciones": [
      "1/4",
      "1/2",
      "2/3",
      "3/4"
    ],
    "correcta": 1,
    "explicacion": "4/8 se simplifica a 1/2."
  },
  {
    "pregunta": "¿Cuál es igual a 5/10?",
    "opciones": [
      "1/2",
      "2/3",
      "5/5",
      "3/5"
    ],
    "correcta": 0,
    "explicacion": "5/10 es 1/2 al simplificar."
  },
  {
    "pregunta": "¿Cuál de estas fracciones es más grande?",
    "opciones": [
      "1/2",
      "2/3",
      "1/4",
      "1/5"
    ],
    "correcta": 1,
    "explicacion": "2/3 es la más grande."
  },
  {
    "pregunta": "¿Cuál es igual a 6/12?",
    "opciones": [
      "3/6",
      "1/2",
      "2/4",
      "Todas las anteriores"
    ],
    "correcta": 3,
    "explicacion": "Todas se simplifican a 1/2."
  },
  {
    "pregunta": "¿Cuál es equivalente a 3/9?",
    "opciones": [
      "1/3",
      "2/3",
      "1/2",
      "3/6"
    ],
    "correcta": 0,
    "explicacion": "3/9 = 1/3."
  },
  {
    "pregunta": "¿Cuál es mayor: 2/4 o 3/4?",
    "opciones": [
      "2/4",
      "3/4",
      "Son iguales",
      "No se puede saber"
    ],
    "correcta": 1,
    "explicacion": "3/4 es mayor que 2/4."
  },
  {
    "pregunta": "¿Qué fracción representa lo mismo que 10/20?",
    "opciones": [
      "1/2",
      "3/4",
      "5/10",
      "A y C"
    ],
    "correcta": 3,
    "explicacion": "10/20 = 1/2 y también 5/10 = 1/2."
  },
  {
    "pregunta": "¿Cuál es menor: 3/8 o 1/2?",
    "opciones": [
      "3/8",
      "1/2",
      "Son iguales",
      "Depende"
    ],
    "correcta": 0,
    "explicacion": "3/8 es menor que 1/2."
  },
  {
    "pregunta": "¿Qué fracción es igual a 2/6?",
    "opciones": [
      "1/3",
      "1/2",
      "3/6",
      "2/3"
    ],
    "correcta": 0,
    "explicacion": "2/6 se simplifica a 1/3."
  },
  {
    "pregunta": "¿Cuál es la fracción más pequeña?",
    "opciones": [
      "1/4",
      "1/2",
      "3/4",
      "1/8"
    ],
    "correcta": 3,
    "explicacion": "1/8 representa la parte más pequeña."
  },
  {
    "pregunta": "¿Qué fracción es igual a 8/16?",
    "opciones": [
      "1/2",
      "2/4",
      "4/8",
      "Todas"
    ],
    "correcta": 3,
    "explicacion": "Todas son equivalentes a 1/2."
  },
  {
    "pregunta": "¿Cuál es mayor: 5/6 o 4/5?",
    "opciones": [
      "5/6",
      "4/5",
      "Son iguales",
      "No se puede saber"
    ],
    "correcta": 0,
    "explicacion": "5/6 es ligeramente mayor que 4/5."
  },
  {
    "pregunta": "¿Cuál de estas fracciones es igual a 6/9?",
    "opciones": [
      "2/3",
      "3/4",
      "1/2",
      "1/3"
    ],
    "correcta": 0,
    "explicacion": "6/9 = 2/3 al simplificar."
  },
  {
    "pregunta": "¿Qué fracción representa una cantidad mayor que 1/3?",
    "opciones": [
      "1/2",
      "1/4",
      "1/5",
      "1/6"
    ],
    "correcta": 0,
    "explicacion": "1/2 es mayor que 1/3."
  },
  {
    "pregunta": "¿Cuál de estas fracciones es igual a 9/12?",
    "opciones": [
      "3/4",
      "2/3",
      "3/5",
      "5/6"
    ],
    "correcta": 0,
    "explicacion": "9/12 = 3/4."
  },
  {
    "pregunta": "¿Cuál fracción representa más cantidad?",
    "opciones": [
      "4/5",
      "3/5",
      "2/5",
      "1/5"
    ],
    "correcta": 0,
    "explicacion": "4/5 es la fracción más grande."
  },
  {
    "pregunta": "¿Cuál es equivalente a 2/8?",
    "opciones": [
      "1/4",
      "1/2",
      "1/8",
      "2/4"
    ],
    "correcta": 0,
    "explicacion": "2/8 = 1/4 al simplificar."
  },
  {
    "pregunta": "¿Qué fracción representa menos cantidad que 1/2?",
    "opciones": [
      "2/3",
      "3/4",
      "1/4",
      "5/6"
    ],
    "correcta": 2,
    "explicacion": "1/4 es menor que 1/2."
  },
  {
    "pregunta": "¿Qué fracción es igual a 12/16?",
    "opciones": [
      "3/4",
      "2/3",
      "4/5",
      "1/2"
    ],
    "correcta": 0,
    "explicacion": "12/16 se simplifica a 3/4."
  },
  {
    "pregunta": "¿Cuál fracción es igual a 15/30?",
    "opciones": [
      "1/2",
      "3/6",
      "5/10",
      "Todas"
    ],
    "correcta": 3,
    "explicacion": "Todas se simplifican a 1/2."
  },
  {
    "pregunta": "¿Cuál es menor: 2/3 o 3/4?",
    "opciones": [
      "2/3",
      "3/4",
      "Son iguales",
      "No se puede saber"
    ],
    "correcta": 0,
    "explicacion": "2/3 es menor que 3/4."
  },
  {
    "pregunta": "¿Qué fracción es igual a 14/21?",
    "opciones": [
      "2/3",
      "1/2",
      "4/6",
      "3/4"
    ],
    "correcta": 0,
    "explicacion": "14/21 se simplifica a 2/3."
  },
  {
    "pregunta": "¿Cuál es la fracción más cercana a 1?",
    "opciones": [
      "5/6",
      "1/2",
      "2/3",
      "1/3"
    ],
    "correcta": 0,
    "explicacion": "5/6 es la más cercana a 1."
  },
  {
    "pregunta": "¿Qué fracción representa lo mismo que 7/14?",
    "opciones": [
      "1/2",
      "1/3",
      "2/3",
      "1/4"
    ],
    "correcta": 0,
    "explicacion": "7/14 = 1/2."
  },
  {
    "pregunta": "¿Cuál fracción representa más cantidad?",
    "opciones": [
      "2/3",
      "3/5",
      "1/2",
      "1/3"
    ],
    "correcta": 0,
    "explicacion": "2/3 es mayor que las otras."
  },
  {
    "pregunta": "¿Qué fracción representa lo mismo que 6/8?",
    "opciones": [
      "3/4",
      "2/4",
      "1/2",
      "5/6"
    ],
    "correcta": 0,
    "explicacion": "6/8 se simplifica a 3/4."
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
