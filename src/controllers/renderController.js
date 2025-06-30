const controller = {};

controller.login = (req, res) => {
  res.redirect('/HTML/login.html');
};

controller.cambiarContra = (req, res) => {
    console.log('Usuario en sesión:', req.session.usuario_id, req.session.usuario);
    // Verificamos que exista sesión
    if (!req.session.usuario_id || !req.session.usuario) {
        return res.redirect('/login');
    }

    // Pasamos los datos directamente a la vista
    res.render('cambiarContra', {
        usuario_id: req.session.usuario_id,
        usuario: req.session.usuario
    });
    res.render('cambiarContra');
};

controller.logout = (req, res) => {
  // Destruir la sesión actual
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Error al cerrar sesión');
    }

    // Eliminar la cookie de sesión del navegador
    res.clearCookie('connect.sid');

    // Redirigir al login u otra página
    res.redirect('/login');
  });
};

controller.deleteAcc = (req, res) => {
  console.log('Usuario en sesión:', req.session.usuario_id, req.session.usuario);
    // Verificamos que exista sesión
    if (!req.session.usuario_id || !req.session.usuario) {
        return res.redirect('/login');
    }

    // Pasamos los datos directamente a la vista
    res.render('eliminarCuenta', {
        usuario_id: req.session.usuario_id,
        usuario: req.session.usuario
    });
}

controller.inicio = (req, res) => {
  if (!req.session.usuario_id || !req.session.usuario) {
    return res.redirect('index.html');
  }

  const usuarioId = req.session.usuario_id;

  req.getConnection((err, conn) => {
    if (err) {
      console.error("Error de conexión a la base de datos:", err);
      return res.status(500).send("Error de conexión");
    }

    const sql = "SELECT ultimo_tema, primera_vez FROM Usuario WHERE id_usuario = ?";
    conn.query(sql, [usuarioId], (err, results) => {
      if (err) {
        console.error("Error en la consulta:", err);
        return res.status(500).send("Error en la consulta");
      }

      if (results.length === 0) {
        return res.status(404).send("Usuario no encontrado");
      }

      const { ultimo_tema, primera_vez } = results[0];

      if (primera_vez) {
        return res.redirect('html/colocacion.html');
      }

      return res.redirect(`/temas/${ultimo_tema}`);
    });
  });
};

controller.exColoca = (req, res) => {
    const id = parseInt(req.params.id);

    switch (id) {
      case 0:
        case 0:
        const userId = req.session.usuario_id;
        req.getConnection((err, conn) => {
          if (err) {
            console.error("Error de conexión:", err);
            return res.status(500).send("Error de conexión a la base de datos");
          }

          // Marcar primera_vez como FALSE
          conn.query(
            'UPDATE Usuario SET primera_vez = FALSE WHERE id = ?',
            [userId],
            (err, result) => {
              if (err) {
                console.error("Error al actualizar primera_vez:", err);
                return res.status(500).send("Error al actualizar usuario");
              }

              // Redirigir después de actualizar
              return res.redirect('/login-exit');
            }
          );
        });
    break;
      case 1:
        return res.redirect('/html/colocacion1.html');
      case 2:
        return res.redirect('/html/colocacion1.html');
      case 3:
        return res.redirect('/html/colocacion1.html');
    }
}

// Redirección al tema específico
controller.verTema = (req, res) => {
    const id = parseInt(req.params.id);

    switch (id) {
      case 2:
        return res.redirect('/html/1_1.html?id=2');
      case 3:
        return res.redirect('/html/1_2.html?id=3');
      case 4:
        return res.redirect('/html/1_3.html?id=4');
      case 7:
        return res.redirect('/html/1_4.html?id=7');
      case 8:
        return res.redirect('/html/1_5.html?id=8');
      case 9:
        return res.redirect('/html/1_6.html?id=9');
      case 10:
        return res.redirect('/html/1_7.html?id=10');
      case 12:
        return res.redirect('/html/1_8.html?id=12');
      case 28:
          return res.redirect('/html/2_3.html?id=28');
      case 29:
          return res.redirect('/html/2_3_multiplos_evaluacion.html?id=29'); // examen de desempeño 6
      case 31:
          return res.redirect('/html/2_4_fracciones.html?id=31');
      case 32:
          return res.redirect('/html/2_5_fracciones_equivalentes.html?id=32');
      case 36:
          return res.redirect('/html/2_5_fracciones_equivalentes_evaluacion.html?id=36');
      case 33:
          return res.redirect('/html/2_6_fracciones_suma_resta.html?id=33');
      case 34:
          return res.redirect('/html/2_7.html?id=34');
      case 35:
          return res.redirect('/html/2_4_fracciones_evaluacion.html?id=35'); // examen de desempeño 7
      case 37:
          return res.redirect('/html/2_8_area_figuras.html?id=37');
      case 38:
          return res.redirect('/html/2_9_Clasificacion_triangulos.html?id=38');
      case 42:
          return res.redirect('/html/2_11_proporciones_y_regla_de_tres.html?id=42');
      default:
          return res.status(404).send('Tema no encontrado');
    }
};

controller.verEjercicio = (req, res) => {
    const id = parseInt(req.params.id);

    switch (id) {
      case 2:
        return res.redirect('/html/eje_1_1.html?id=2');
      case 3:
        return res.redirect('/html/eje_1_2.html?id=3');
      case 4:
        return res.redirect('/html/eje_1_3.html?id=4');
      case 7:
        return res.redirect('/html/eje_1_4.html?id=7');
      case 8:
        return res.redirect('/html/eje_1_5.html?id=8');
      case 9:
        return res.redirect('/html/eje_1_6.html?id=9');
      case 10:
        return res.redirect('/html/eje_1_7.html?id=10');
      case 12:
        return res.redirect('/html/eje_1_8.html?id=12');
      case 28:
          return res.redirect('/html/eje_2_3.html?id=28');
      case 34:
        return res.redirect('/html/eje_2_7.html?id=34');
      case 42:
        return res.redirect('/html/2_11_proporciones_y_regla_de_tres_ejercicio_1.html?id=42');
      default:
        return res.status(404).send('Ejercicio no encontrado');
  }
};

controller.verVideo = (req, res) => {
  res.redirect('/html/2_4_material_extra.html?id=35');
}

controller.verExaDes = (req, res) => {
  res.redirect('/html/Ex7.html?id=35');
}

module.exports = controller;
