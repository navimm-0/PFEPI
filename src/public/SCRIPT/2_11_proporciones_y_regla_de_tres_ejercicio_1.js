let aciertos = 0;
let ejercicioActual = null;
const totalEjercicios = 5;

const respuestasCorrectas = {
  1: "Realizaron 9 viajes",
  2: "Costara 1320 pesos",
  3: "tardarán 16 dias",
  4: "tardaran 37.5 horas",
  5: "Cuesta 400 pesos"
};

const ejerciciosPendientes = [1, 2, 3, 4, 5];

function iniciarEjercicio() {
  if (ejerciciosPendientes.length === 0) {
    // Este punto ya no se usará porque se redirige directamente
    return;
  }

  ejercicioActual = ejerciciosPendientes.shift();
  mostrarEjercicio(ejercicioActual);
}

function mostrarEjercicio(id) {
  for (let i = 1; i <= totalEjercicios; i++) {
    document.getElementById(`ejercicio${i}`).style.display = "none";
  }

  const ejercicio = document.getElementById(`ejercicio${id}`);
  if (ejercicio) {
    ejercicio.style.display = "block";

    const opciones = ejercicio.querySelectorAll(".opciones");
    const mensaje = ejercicio.querySelector("#mensaje");
    const btnSiguiente = ejercicio.querySelector(".btnSiguiente");

    opciones.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove("desactivado", "correcta", "incorrecta");
    });

    mensaje.textContent = "";
    mensaje.className = "";
    btnSiguiente.style.display = "none";

    // Restaurar el botón a su estado normal
    btnSiguiente.innerText = "Siguiente";
    btnSiguiente.onclick = siguienteEjercicio;
  }
}

function verificarRespuesta(boton) {
  const opciones = boton.parentNode.querySelectorAll(".opciones");
  const mensaje = boton.closest(".ejercicio").querySelector("#mensaje");
  const btnSiguiente = boton.closest(".ejercicio").querySelector(".btnSiguiente");
  const respuestaUsuario = boton.innerText;
  const correcta = respuestasCorrectas[ejercicioActual];

  opciones.forEach(btn => {
    btn.disabled = true;
    btn.classList.add("desactivado");
    if (btn.innerText === correcta) btn.classList.add("correcta");
    else btn.classList.add("incorrecta");
  });

  if (respuestaUsuario === correcta) {
    mensaje.textContent = "¡Correcto! 🎉 ¡Muy bien hecho!";
    mensaje.className = "correcto";
    aciertos++;
    lanzarConfeti();

    // Si ya no quedan ejercicios pendientes, cambiamos el botón a "Finalizar"
    if (ejerciciosPendientes.length === 0) {
      btnSiguiente.innerText = "Finalizar";
      btnSiguiente.onclick = () => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        if (id) {
          window.location.href = `/finalizar/${id}`;
        } else {
          window.location.href = "/finalizar"; // fallback por si no hay id
        }
      };
    }
  } else {
    mensaje.textContent = "Intenta otra vez... Se volverá a intentar este ejercicio.";
    mensaje.className = "incorrecto";
    ejerciciosPendientes.push(ejercicioActual); // Se vuelve a intentar
  }

  btnSiguiente.style.display = "inline-block";
}

function siguienteEjercicio() {
  document.getElementById(`ejercicio${ejercicioActual}`).style.display = "none";
  iniciarEjercicio();
}

function lanzarConfeti() {
  const cantidad = 20;
  for (let i = 0; i < cantidad; i++) {
    const confeti = document.createElement("div");
    confeti.textContent = "🎊";
    confeti.style.position = "fixed";
    confeti.style.top = Math.random() * window.innerHeight + "px";
    confeti.style.left = Math.random() * window.innerWidth + "px";
    confeti.style.fontSize = "24px";
    confeti.style.opacity = "1";
    confeti.style.transition = "opacity 2s ease-out";
    document.body.appendChild(confeti);

    setTimeout(() => {
      confeti.style.opacity = "0";
      setTimeout(() => document.body.removeChild(confeti), 2000);
    }, 100);
  }
}

window.onload = () => {
  iniciarEjercicio();
};