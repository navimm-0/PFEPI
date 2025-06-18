
function volver() {
  window.history.back();
}

const bancoPreguntasFracciones = [
  {
    "pregunta": "¿Qué representa una fracción?",
    "opciones": [
      "Una suma",
      "Una parte de un todo",
      "Un número primo",
      "Un número negativo"
    ],
    "correcta": 1,
    "explicacion": "Una fracción muestra una parte de un total, como 1/2 de una pizza."
  },
  {
    "pregunta": "¿Cuál es el numerador en la fracción 3/5?",
    "opciones": [
      "3",
      "5",
      "8",
      "No tiene"
    ],
    "correcta": 0,
    "explicacion": "El numerador es el número de arriba: 3."
  },
  {
    "pregunta": "¿Cuál es el denominador en 4/7?",
    "opciones": [
      "4",
      "7",
      "11",
      "3"
    ],
    "correcta": 1,
    "explicacion": "El denominador está abajo: 7."
  },
  {
    "pregunta": "¿Cuál de estas fracciones representa 'la mitad'?",
    "opciones": [
      "1/4",
      "2/4",
      "1/2",
      "3/4"
    ],
    "correcta": 2,
    "explicacion": "1/2 es igual a la mitad."
  },
  {
    "pregunta": "Si partes una pizza en 8 y comes 3, ¿qué fracción comiste?",
    "opciones": [
      "3/8",
      "5/8",
      "1/3",
      "8/3"
    ],
    "correcta": 0,
    "explicacion": "Comiste 3 de 8 partes: 3/8."
  },
  {
    "pregunta": "¿Qué fracción es equivalente a 2/4?",
    "opciones": [
      "1/2",
      "3/4",
      "2/3",
      "4/2"
    ],
    "correcta": 0,
    "explicacion": "2/4 es igual a 1/2."
  },
  {
    "pregunta": "¿Cuál fracción es mayor?",
    "opciones": [
      "1/3",
      "1/2",
      "1/4",
      "1/5"
    ],
    "correcta": 1,
    "explicacion": "1/2 es mayor que 1/3, 1/4 y 1/5."
  },
  {
    "pregunta": "¿Qué fracción representa un cuarto?",
    "opciones": [
      "1/2",
      "1/3",
      "1/4",
      "1/5"
    ],
    "correcta": 2,
    "explicacion": "1/4 es un cuarto."
  },
  {
    "pregunta": "Si comes 6 partes de una pizza de 8, ¿qué fracción queda?",
    "opciones": [
      "1/8",
      "2/8",
      "3/8",
      "2/8"
    ],
    "correcta": 2,
    "explicacion": "8 - 6 = 2 → quedan 2/8."
  },
  {
    "pregunta": "¿Qué fracción representa una parte de 10?",
    "opciones": [
      "1/10",
      "1/5",
      "1/2",
      "1/3"
    ],
    "correcta": 0,
    "explicacion": "1 de 10 es 1/10."
  },
  {
    "pregunta": "¿Cuál de estas fracciones es menor que 1/2?",
    "opciones": [
      "3/4",
      "2/3",
      "1/3",
      "5/6"
    ],
    "correcta": 2,
    "explicacion": "1/3 es menor que 1/2."
  },
  {
    "pregunta": "¿Cuántas partes iguales hay en la fracción 2/5?",
    "opciones": [
      "2",
      "5",
      "7",
      "10"
    ],
    "correcta": 1,
    "explicacion": "El denominador indica las partes iguales: 5."
  },
  {
    "pregunta": "¿Qué significa 3/3?",
    "opciones": [
      "Un tercio",
      "La mitad",
      "El todo",
      "Cero"
    ],
    "correcta": 2,
    "explicacion": "3/3 representa todas las partes: el todo."
  },
  {
    "pregunta": "¿Qué fracción representa tres cuartos?",
    "opciones": [
      "1/4",
      "3/4",
      "1/3",
      "2/4"
    ],
    "correcta": 1,
    "explicacion": "3/4 significa tres partes de cuatro."
  },
  {
    "pregunta": "¿Qué fracción es equivalente a 4/8?",
    "opciones": [
      "2/4",
      "1/4",
      "1/2",
      "3/8"
    ],
    "correcta": 2,
    "explicacion": "4/8 = 1/2 al simplificar."
  },
  {
    "pregunta": "¿Cuál fracción representa más cantidad?",
    "opciones": [
      "2/5",
      "3/5",
      "1/5",
      "4/5"
    ],
    "correcta": 3,
    "explicacion": "4/5 es la fracción más grande."
  },
  {
    "pregunta": "¿Qué representa 0/4?",
    "opciones": [
      "Todo",
      "Nada",
      "Un cuarto",
      "La mitad"
    ],
    "correcta": 1,
    "explicacion": "0/4 significa que no se tiene ninguna parte."
  },
  {
    "pregunta": "¿Cuál fracción es igual a 5/5?",
    "opciones": [
      "1",
      "0",
      "5",
      "1/5"
    ],
    "correcta": 0,
    "explicacion": "5/5 representa el todo, o sea 1."
  },
  {
    "pregunta": "¿Cuál fracción es igual a la mitad de 1?",
    "opciones": [
      "1/4",
      "2/2",
      "1/2",
      "3/2"
    ],
    "correcta": 2,
    "explicacion": "La mitad es 1/2."
  },
  {
    "pregunta": "¿Cuál es el resultado de sumar 1/4 + 1/4?",
    "opciones": [
      "2/4",
      "1/2",
      "3/4",
      "1/4"
    ],
    "correcta": 0,
    "explicacion": "1/4 + 1/4 = 2/4."
  },
  {
    "pregunta": "¿Cuál de estas fracciones representa una fracción propia?",
    "opciones": [
      "3/2",
      "4/3",
      "2/2",
      "1/2"
    ],
    "correcta": 3,
    "explicacion": "1/2 es menor que 1, es una fracción propia."
  },
  {
    "pregunta": "¿Qué tipo de fracción es 5/5?",
    "opciones": [
      "Propia",
      "Impropia",
      "Unidad",
      "Mixta"
    ],
    "correcta": 2,
    "explicacion": "Es una fracción que representa 1, por eso es una fracción unidad."
  },
  {
    "pregunta": "¿Qué fracción representa 2 partes de 6?",
    "opciones": [
      "2/6",
      "6/2",
      "3/6",
      "1/2"
    ],
    "correcta": 0,
    "explicacion": "2 partes de 6 son 2/6."
  },
  {
    "pregunta": "¿Qué fracción representa 1 parte de 3?",
    "opciones": [
      "1/2",
      "1/3",
      "1/4",
      "2/3"
    ],
    "correcta": 1,
    "explicacion": "Una parte de 3 es 1/3."
  },
  {
    "pregunta": "¿Qué fracción es más cercana a 1?",
    "opciones": [
      "1/2",
      "2/3",
      "3/4",
      "5/6"
    ],
    "correcta": 3,
    "explicacion": "5/6 está más cerca de 1."
  },
  {
    "pregunta": "¿Cuál fracción representa menos cantidad?",
    "opciones": [
      "1/2",
      "1/3",
      "1/4",
      "1/5"
    ],
    "correcta": 3,
    "explicacion": "1/5 es la más pequeña."
  },
  {
    "pregunta": "¿Qué significa simplificar una fracción?",
    "opciones": [
      "Hacerla más grande",
      "Sumar partes",
      "Reducirla a su forma más simple",
      "Cambiar el numerador"
    ],
    "correcta": 2,
    "explicacion": "Simplificar es expresar la fracción con números más pequeños equivalentes."
  },
  {
    "pregunta": "¿Cuál es el resultado de sumar 2/4 + 2/4?",
    "opciones": [
      "4/4",
      "2/2",
      "1",
      "Todas las anteriores"
    ],
    "correcta": 3,
    "explicacion": "2/4 + 2/4 = 4/4 = 1, todas son correctas."
  },
  {
    "pregunta": "¿Qué fracción representa la cantidad completa?",
    "opciones": [
      "1/1",
      "1/2",
      "2/3",
      "3/4"
    ],
    "correcta": 0,
    "explicacion": "1/1 significa todo."
  },
  {
    "pregunta": "¿Cuál es una fracción equivalente a 3/6?",
    "opciones": [
      "1/2",
      "2/6",
      "2/3",
      "3/3"
    ],
    "correcta": 0,
    "explicacion": "3/6 = 1/2 al simplificar."
  }
];

function obtenerPreguntasAleatorias(cantidad) {
  const copia = [...bancoPreguntasFracciones];
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