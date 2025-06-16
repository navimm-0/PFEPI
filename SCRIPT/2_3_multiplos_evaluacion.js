
function volver() {
  window.history.back();
}

const preguntas = [
  {
    "pregunta": "¿Cuál de los siguientes es múltiplo de 6?",
    "opciones": [
      "7",
      "13",
      "18",
      "25"
    ],
    "correcta": 2,
    "explicacion": "18 es múltiplo de 6 porque 6 × 3 = 18."
  },
  {
    "pregunta": "¿Cuál NO es un divisor de 12?",
    "opciones": [
      "2",
      "3",
      "5",
      "6"
    ],
    "correcta": 2,
    "explicacion": "5 no divide a 12 exactamente; 12 ÷ 5 = 2.4."
  },
  {
    "pregunta": "¿Cuál de los siguientes números es múltiplo de 9?",
    "opciones": [
      "27",
      "28",
      "29",
      "30"
    ],
    "correcta": 0,
    "explicacion": "9 × 3 = 27, por eso 27 es múltiplo de 9."
  },
  {
    "pregunta": "¿Cuántos divisores tiene el número 10?",
    "opciones": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correcta": 2,
    "explicacion": "Los divisores de 10 son 1, 2, 5 y 10 (4 en total)."
  },
  {
    "pregunta": "¿Cuál es el menor múltiplo común entre 4 y 6?",
    "opciones": [
      "12",
      "24",
      "18",
      "8"
    ],
    "correcta": 0,
    "explicacion": "12 es el mínimo común múltiplo de 4 y 6."
  },
  {
    "pregunta": "¿El número 1 es divisor de…?",
    "opciones": [
      "Solo números impares",
      "Solo múltiplos de 10",
      "Todos los números",
      "Ninguno"
    ],
    "correcta": 2,
    "explicacion": "1 divide a todos los números."
  },
  {
    "pregunta": "¿Qué número tiene más divisores?",
    "opciones": [
      "5",
      "6",
      "7",
      "11"
    ],
    "correcta": 1,
    "explicacion": "6 tiene más divisores: 1, 2, 3 y 6."
  },
  {
    "pregunta": "¿Cuál de estos números es divisible entre 3?",
    "opciones": [
      "22",
      "27",
      "34",
      "38"
    ],
    "correcta": 1,
    "explicacion": "27 ÷ 3 = 9, sin residuo."
  },
  {
    "pregunta": "¿Cuál de los siguientes NO es múltiplo de 4?",
    "opciones": [
      "8",
      "12",
      "16",
      "18"
    ],
    "correcta": 3,
    "explicacion": "18 ÷ 4 = 4.5, no es exacto."
  },
  {
    "pregunta": "¿Qué número NO es divisor de 24?",
    "opciones": [
      "2",
      "4",
      "5",
      "6"
    ],
    "correcta": 2,
    "explicacion": "5 no divide a 24 exactamente."
  },
  {
    "pregunta": "¿Cuál es el múltiplo de 7 más cercano a 50?",
    "opciones": [
      "49",
      "56",
      "42",
      "45"
    ],
    "correcta": 0,
    "explicacion": "7 × 7 = 49."
  },
  {
    "pregunta": "Si 36 ÷ x no tiene residuo, entonces x es…",
    "opciones": [
      "Un múltiplo",
      "Un divisor",
      "Un número primo",
      "Un número compuesto"
    ],
    "correcta": 1,
    "explicacion": "Un divisor no deja residuo."
  },
  {
    "pregunta": "¿Cuál es el primer múltiplo de cualquier número?",
    "opciones": [
      "0",
      "1",
      "Ese número",
      "10"
    ],
    "correcta": 0,
    "explicacion": "Todo número multiplicado por 0 da 0."
  },
  {
    "pregunta": "¿Cuál de estos números tiene exactamente 3 divisores?",
    "opciones": [
      "2",
      "4",
      "9",
      "3"
    ],
    "correcta": 1,
    "explicacion": "4 tiene tres divisores: 1, 2, 4."
  },
  {
    "pregunta": "¿Cuál de estos números es divisible entre 5?",
    "opciones": [
      "12",
      "23",
      "30",
      "17"
    ],
    "correcta": 2,
    "explicacion": "30 termina en 0, es divisible por 5."
  },
  {
    "pregunta": "¿Qué número tiene solo 2 divisores?",
    "opciones": [
      "6",
      "7",
      "9",
      "12"
    ],
    "correcta": 1,
    "explicacion": "7 es primo, solo tiene 1 y 7 como divisores."
  },
  {
    "pregunta": "¿Cuál es múltiplo de 10?",
    "opciones": [
      "15",
      "25",
      "30",
      "33"
    ],
    "correcta": 2,
    "explicacion": "30 es divisible por 10 (10 × 3)."
  },
  {
    "pregunta": "¿Cuál NO es múltiplo de 3?",
    "opciones": [
      "6",
      "9",
      "10",
      "12"
    ],
    "correcta": 2,
    "explicacion": "10 ÷ 3 = 3.33, no es múltiplo."
  },
  {
    "pregunta": "¿Cuál de estos números tiene más de 5 divisores?",
    "opciones": [
      "2",
      "3",
      "6",
      "11"
    ],
    "correcta": 2,
    "explicacion": "6 tiene 1, 2, 3, 6: cuatro divisores."
  },
  {
    "pregunta": "¿Qué número es divisor de 100?",
    "opciones": [
      "9",
      "10",
      "11",
      "3"
    ],
    "correcta": 1,
    "explicacion": "100 ÷ 10 = 10 exacto."
  },
  {
    "pregunta": "¿Cuál es el menor múltiplo de 8 mayor que 40?",
    "opciones": [
      "48",
      "56",
      "64",
      "72"
    ],
    "correcta": 0,
    "explicacion": "8 × 6 = 48."
  },
  {
    "pregunta": "¿Cuál de estos números es múltiplo de 12?",
    "opciones": [
      "24",
      "25",
      "26",
      "27"
    ],
    "correcta": 0,
    "explicacion": "12 × 2 = 24."
  },
  {
    "pregunta": "¿Cuál NO es un múltiplo de 2?",
    "opciones": [
      "14",
      "17",
      "20",
      "22"
    ],
    "correcta": 1,
    "explicacion": "17 es impar."
  },
  {
    "pregunta": "¿Cuál número es divisible entre 6?",
    "opciones": [
      "13",
      "18",
      "19",
      "25"
    ],
    "correcta": 1,
    "explicacion": "18 ÷ 6 = 3."
  },
  {
    "pregunta": "¿Cuántos divisores tiene el número 1?",
    "opciones": [
      "0",
      "1",
      "2",
      "Infinitos"
    ],
    "correcta": 1,
    "explicacion": "1 solo tiene un divisor: él mismo."
  },
  {
    "pregunta": "¿Cuál es el mayor divisor común entre 8 y 12?",
    "opciones": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correcta": 1,
    "explicacion": "4 es el mayor número que divide a ambos."
  },
  {
    "pregunta": "¿Qué significa que un número sea múltiplo de otro?",
    "opciones": [
      "Que es más grande",
      "Que está en la tabla del otro",
      "Que es impar",
      "Que no se puede dividir"
    ],
    "correcta": 1,
    "explicacion": "Es múltiplo porque está en su tabla."
  },
  {
    "pregunta": "¿Cuál de estos es múltiplo de 11?",
    "opciones": [
      "22",
      "25",
      "33",
      "55"
    ],
    "correcta": 3,
    "explicacion": "11 × 5 = 55."
  },
  {
    "pregunta": "¿Cuál es el menor número que tiene exactamente 4 divisores?",
    "opciones": [
      "6",
      "8",
      "10",
      "12"
    ],
    "correcta": 0,
    "explicacion": "Los divisores de 6 son 1, 2, 3, 6."
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
