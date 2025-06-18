
function volver() {
  window.history.back();
}

const preguntas = [
  {
    "pregunta": "¿Cuál es la fórmula del perímetro de un cuadrado?",
    "opciones": [
      "P = 4 × lado",
      "P = base × altura",
      "P = lado × lado",
      "P = 2 × (base + altura)"
    ],
    "correcta": 0,
    "explicacion": "El perímetro de un cuadrado se calcula multiplicando un lado por 4."
  },
  {
    "pregunta": "¿Cómo se calcula el área de un cuadrado?",
    "opciones": [
      "Área = base + altura",
      "Área = lado × lado",
      "Área = lado + lado",
      "Área = lado ÷ 2"
    ],
    "correcta": 1,
    "explicacion": "El área del cuadrado es lado por lado."
  },
  {
    "pregunta": "¿Cuál es el perímetro de un rectángulo con base 6 cm y altura 4 cm?",
    "opciones": [
      "20 cm",
      "24 cm",
      "12 cm",
      "18 cm"
    ],
    "correcta": 0,
    "explicacion": "P = 2 × (6 + 4) = 2 × 10 = 20 cm."
  },
  {
    "pregunta": "¿Cómo se calcula el área de un rectángulo?",
    "opciones": [
      "Área = base + altura",
      "Área = base × altura",
      "Área = lado × lado",
      "Área = lado + base"
    ],
    "correcta": 1,
    "explicacion": "El área del rectángulo es base por altura."
  },
  {
    "pregunta": "¿Cuál es la fórmula del área de un triángulo?",
    "opciones": [
      "Área = base × altura",
      "Área = (base × altura) ÷ 2",
      "Área = lado × lado",
      "Área = perímetro ÷ 2"
    ],
    "correcta": 1,
    "explicacion": "Se usa (base × altura) ÷ 2 para el área de un triángulo."
  },
  {
    "pregunta": "¿Cómo se calcula el perímetro de un triángulo?",
    "opciones": [
      "Sumando todos sus lados",
      "Multiplicando los lados",
      "Área ÷ base",
      "Base × altura"
    ],
    "correcta": 0,
    "explicacion": "El perímetro es la suma de sus tres lados."
  },
  {
    "pregunta": "¿Qué fórmula se usa para el perímetro de un círculo?",
    "opciones": [
      "P = 2 × π × radio",
      "P = π × radio²",
      "P = radio ÷ 2",
      "P = base + altura"
    ],
    "correcta": 0,
    "explicacion": "La fórmula correcta es P = 2 × π × radio."
  },
  {
    "pregunta": "¿Y para el área de un círculo?",
    "opciones": [
      "A = π × radio²",
      "A = 2 × π × radio",
      "A = radio × altura",
      "A = base × radio"
    ],
    "correcta": 0,
    "explicacion": "El área se calcula como π × radio al cuadrado."
  },
  {
    "pregunta": "Si un cuadrado tiene lado de 5 cm, ¿cuál es su área?",
    "opciones": [
      "10 cm²",
      "20 cm²",
      "25 cm²",
      "15 cm²"
    ],
    "correcta": 2,
    "explicacion": "Área = 5 × 5 = 25 cm²."
  },
  {
    "pregunta": "¿Cuál es el área de un rectángulo de base 7 cm y altura 3 cm?",
    "opciones": [
      "21 cm²",
      "10 cm²",
      "14 cm²",
      "28 cm²"
    ],
    "correcta": 0,
    "explicacion": "Área = 7 × 3 = 21 cm²."
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
