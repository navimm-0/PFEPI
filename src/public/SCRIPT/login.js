function marcarCampo(input, valido, mensaje = "") {
  const feedback = input.nextElementSibling;
  if (valido) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    feedback.textContent = '';
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    feedback.textContent = mensaje;
  }
}

function esCorreoValido(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

document.addEventListener('DOMContentLoaded', () => {
  const errorMsg = document.querySelector('.error-message');
  const successMsg = document.querySelector('.sent-message');

  // Registro
  const form = document.querySelector('.php-email-form');
  const nombre = document.querySelector('[name="name"]');
  const usuario = document.querySelector('[name="username"]');
  const correo = document.querySelector('[name="email"]');
  const pass = document.querySelector('[name="pass"]');
  const confpass = document.querySelector('[name="confpass"]');

  usuario.addEventListener('input', async () => {
    const valor = usuario.value.trim();
    if (!valor) {
      marcarCampo(usuario, false, 'Debes ingresar un nombre de usuario.');
    } else if (!/^[a-zA-Z0-9_.-]+$/.test(valor)) {
      marcarCampo(usuario, false, 'Solo se permiten letras, números, guiones bajos, puntos y guiones.');
    } else {
      const resp = await fetch(`/validar-usuario?username=${encodeURIComponent(valor)}`);
      const { existe } = await resp.json();
      marcarCampo(usuario, !existe, existe ? 'El nombre de usuario ya está en uso.' : '');
    }
  });

  correo.addEventListener('input', async () => {
    const valor = correo.value.trim();
    if (!valor) {
      marcarCampo(correo, false, 'Debes ingresar un correo.');
    } else if (!esCorreoValido(valor)) {
      marcarCampo(correo, false, 'El formato del correo no es válido.');
    } else {
      const resp = await fetch(`/validar-correo?correo=${encodeURIComponent(valor)}`);
      const { existe } = await resp.json();
      marcarCampo(correo, !existe, existe ? 'El correo ya está registrado.' : '');
    }
  });

  nombre.addEventListener('input', () => {
    const valor = nombre.value.trim();
    if (!valor) {
      marcarCampo(nombre, false, 'Debes ingresar tu nombre.');
    } else if (valor.length > 50) {
      marcarCampo(nombre, false, 'El nombre no puede exceder los 50 caracteres.');
    } else if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(valor)) {
      marcarCampo(nombre, false, 'El nombre solo debe contener letras y espacios.');
    } else {
      marcarCampo(nombre, true);
    }
  });

  pass.addEventListener('input', () => {
    marcarCampo(pass, !!pass.value.trim(), 'Debes ingresar una contraseña.');
    if (confpass.value.trim()) {
      marcarCampo(confpass, pass.value.trim() === confpass.value.trim(), 'Las contraseñas no coinciden.');
    }
  });

  confpass.addEventListener('input', () => {
    const coincide = pass.value.trim() === confpass.value.trim();
    marcarCampo(confpass, coincide, coincide ? '' : 'Las contraseñas no coinciden.');
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsg.innerText = '';
    successMsg.style.display = 'none';

    // Validar campos antes de enviar
    if (document.querySelectorAll('.is-invalid').length > 0) {
      errorMsg.innerText = 'Corrige los errores antes de enviar.';
      return;
    }

    // Construir datos urlencoded
    const formData = new URLSearchParams();
    formData.append('name', nombre.value.trim());
    formData.append('user', usuario.value.trim());
    formData.append('email', correo.value.trim());
    formData.append('pass', pass.value.trim());

    try {
      const respuesta = await fetch('/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString()
      });

      if (respuesta.ok) {
        successMsg.style.display = 'block';
        form.reset();
        [nombre, usuario, correo, pass, confpass].forEach(i => i.classList.remove('is-valid'));
      } else {
        errorMsg.innerText = 'Error al registrar. Intenta nuevamente.';
      }
    } catch (err) {
      errorMsg.innerText = 'No se pudo conectar al servidor.';
    }
  });
});

//Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = document.querySelector('[name="user"]').value.trim();
  const password = document.querySelector('[name="password"]').value.trim();

  const data = new URLSearchParams();
  data.append('user', user);
  data.append('password', password);

  const response = await fetch('/validar-contra', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data.toString()
  });
  console.log('lkdka');

  const result = await response.json();
  console.log('Resultado de validación:', result);

  if (result.code === 0) {
    // Redirige la ruta que renderiza la vista
    window.location.href = '/login-exito';
  } else if (result.code == -2 ){
    marcarCampo(user, false, 'Error de conexión.');
    console.log('Error de conexión ');
  } else if (result.code === 1) {
    mostrarError('user', 'Usuario no encontrado');
    console.log('Usuario no encontrado');
  } else if (result.code === 2) {
    mostrarError('password', 'Contraseña incorrecta');
    console.log('Contraseña incorrecta');
  } else {
    mostrarError('password', 'Error inesperado');
    console.log('Error inesperado');
  }
});

function mostrarError(nombreCampo, mensaje) {
  const input = document.querySelector(`[name="${nombreCampo}"]`);
  const feedback = input.nextElementSibling;
  input.classList.add('is-invalid');
  feedback.textContent = mensaje;
}

document.querySelectorAll('#login-form input').forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('is-invalid');
    input.classList.remove('is-valid');
    const feedback = input.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
      feedback.textContent = '';
    }
  });
});


