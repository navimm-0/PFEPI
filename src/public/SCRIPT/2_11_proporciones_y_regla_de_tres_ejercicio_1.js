function verificarRespuesta(boton) {
            const mensaje = document.getElementById("mensaje");
            const btnSiguiente = document.getElementById("btnSiguiente");

            if (boton.innerText.includes("9 viajes")) {
                mensaje.textContent = "¡Correcto! 🎉 ¡Muy bien hecho!";
                mensaje.className = "correcto";
                lanzarConfeti();

                // Mostrar el botón después de 2 segundos
                setTimeout(() => {
                    btnSiguiente.style.display = "inline-block";
                }, 2000);
            } else {
                mensaje.textContent = "Intenta otra vez...";
                mensaje.className = "incorrecto";
            }
        }

        function lanzarConfeti() {
            const cantidad = 30;
            for (let i = 0; i < cantidad; i++) {
                const confeti = document.createElement("div");
                confeti.textContent = "🎊";
                confeti.style.position = "fixed";
                confeti.style.top = Math.random() * window.innerHeight + "px";
                confeti.style.left = Math.random() * window.innerWidth + "px";
                confeti.style.fontSize = "30px";
                confeti.style.opacity = "1";
                confeti.style.transition = "opacity 2s ease-out";
                document.body.appendChild(confeti);

                setTimeout(() => {
                    confeti.style.opacity = "0";
                    setTimeout(() => document.body.removeChild(confeti), 2000);
                }, 100);
            }
        }