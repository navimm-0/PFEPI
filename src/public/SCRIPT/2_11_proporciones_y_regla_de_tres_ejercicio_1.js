let aciertos = 0;
    let ejercicioActual = 1;
    const totalEjercicios = 5;

    const respuestasCorrectas = {
      1: "Realizaron 9 viajes",
      2: "Costara 1320 pesos",
      3: "tardarán 16 dias",
      4: "tardaran 37.5 horas",
      5: "Cuesta 400 pesos"
    };

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
      } else {
        mensaje.textContent = "Intenta otra vez...";
        mensaje.className = "incorrecto";
      }

      btnSiguiente.style.display = "inline-block";
    }

    function siguienteEjercicio() {
      document.getElementById(`ejercicio${ejercicioActual}`).style.display = "none";
      ejercicioActual++;

      if (ejercicioActual <= totalEjercicios) {
        document.getElementById(`ejercicio${ejercicioActual}`).style.display = "block";
      } else {
        document.getElementById("resultadoFinal").style.display = "block";
        document.getElementById("totalAciertos").textContent = aciertos;
      }
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
