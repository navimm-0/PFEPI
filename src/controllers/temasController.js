const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM vista_temas_principales', (err, tema) => {
            if (err) {
                res.json(err);
            }
            console.log(tema);
            res.render('temario', {
                data: tema,
                usuario: req.session.usuario
            });
        });
    });
};

controller.temarioExpandible = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Tema', (err, temas) => {
            if (err) return res.json(err);

            // Separar por niveles
            const niveles = {
                básico: [],
                intermedio: [],
                avanzado: []
            };

            const hijos = {};

            temas.forEach(t => {
                if (t.id_padre === null) {
                    niveles[t.nivel].push(t);
                } else {
                    if (!hijos[t.id_padre]) hijos[t.id_padre] = [];
                    hijos[t.id_padre].push(t);
                }
            });

            res.render('temario_expandible', {
                niveles,
                hijos,
                usuario: req.session.usuario
            });
        });
    });
};

controller.obtenerLeccionesAntes = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error de conexión');
    const user = req.session.usuario_id;

    conn.query('CALL obtener_avance_usuario(?, ?, ?)', [user, null, null], (err, results) => {
      if (err) return res.status(500).json(err);

      const temas = results[0]; // el resultado está en el primer array
      res.render('MenuP', { temas, usuario: req.session.usuario });
    });
  });
};

controller.obtenerLecciones = (req, res) => {
  const nivel = req.params.nivel || null;
  const id = req.params.id || null;

  console.log('Nivel:', nivel);
  console.log('ID:', id);

  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error de conexión');
    const user = req.session.usuario_id;
    conn.query('CALL obtener_avance_usuario(?, ?, ?)', [user, nivel, null], (err, results) => {
        if (err) return res.status(500).json(err);

        const temas = results[0]; // el resultado está en el primer array

        // Aquí podrías filtrar temas por nivel, y usar id si es necesario
        res.render('MenuP', {
          nivel,
          id,
          temas,
          usuario: req.session.usuario
        });
    });
  });
};


controller.obtenerAvance = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error de conexión');
    const user = req.session.usuario_id;
    console.log(user);

    const sql = `
      CALL obtener_porcentaje_avance_todos_niveles(?, @b, @i, @a);
      SELECT @b AS basico, @i AS intermedio, @a AS avanzado;
    `;

    conn.query(sql, [user], (err, results) => {
      if (err) return res.status(500).json(err);

      // results[1] contiene los datos reales (results[0] es vacío por CALL)
      const porcentajes = results[1][0]; // { basico: 60, intermedio: 40, avanzado: 20 }
      res.render('avance', { 
        porcentaje: porcentajes, 
        usuario: req.session.usuario });
    });
  });
};

controller.portafolioBasico = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error de conexión');

    conn.query('SELECT * FROM vista_temas_basico', (err, temas) => {
      if (err) return res.status(500).json(err);

      res.render('MenuP', { temas, usuario: req.session.usuario });
    });
  });
};

controller.portafolioIntermedio = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error de conexión');

    conn.query('SELECT * FROM vista_temas_intermedio', (err, temas) => {
      if (err) return res.status(500).json(err);

      res.render('MenuP', { temas, usuario: req.session.usuario });
    });
  });
};

controller.portafolioAvanzado = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error de conexión');

    conn.query('SELECT * FROM vista_temas_avanzado', (err, temas) => {
      if (err) return res.status(500).json(err);

      res.render('MenuP', { temas, usuario: req.session.usuario });
    });
  });
};

controller.completarT = (req, res) => {
  console.log('llegando a completar el tema');
  /*
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error de conexión');

    conn.query('SELECT * FROM vista_temas_avanzado', (err, temas) => {
      if (err) return res.status(500).json(err);

      res.render('MenuP', { temas, usuario: req.session.usuario });
    });
  });
  */
};

controller.verTemasPorPadre = (req, res) => {
  const usuario_id = req.session.usuario_id;
  const id_padre = parseInt(req.params.id_padre);
  const nivel = null; // O puedes usar req.query.nivel si decides permitirlo

  if (!usuario_id) return res.redirect('/');

  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error de conexión');

    conn.query(
      'CALL obtener_avance_usuario(?, ?, ?)',
      [usuario_id, nivel, id_padre],
      (err, results) => {
        if (err) return res.status(500).json(err);

        const temas = results[0];
        const nombre_padre = temas[0]?.nombre_padre || "Temas";

        res.render('temas_por_padre', {
          titulo_padre: nombre_padre,
          temas
        });
      }
    );
  });
};



// Redirección al tema específico
controller.verTema = (req, res) => {
    const id = parseInt(req.params.id);

    switch (id) {
        case 28:
            return res.redirect('/html/2_3_multiplos.html?id=28');
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
            return res.redirect('/html/2_7_introduccion_decimales.html?id=34');
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

controller.verEjerecicio = (req, res) => {
    const id = parseInt(req.params.id);

    switch (id) {
      case 42:
          return res.redirect('/html/2_11_proporciones_y_regla_de_tres_ejercicio_1.html');
  }
};

module.exports = controller;