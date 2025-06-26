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


// Redirección al tema específico
controller.verTema = (req, res) => {
    const id = parseInt(req.params.id);

    switch (id) {
        case 28:
            return res.redirect('/html/2_3_multiplos.html');
        case 29:
            return res.redirect('/html/2_3_multiplos_evaluacion.html'); //examen de desempeño 6
        case 31:
            return res.redirect('/html/2_4_fracciones.html');
        case 32:
            return res.redirect('/html/2_5_fracciones_equivalentes.html');
        case 36:
            return res.redirect('/html/2_5_fracciones_equivalentes_evaluacion.html');
        case 33:
            return res.redirect('/html/2_6_fracciones_suma_resta.html');
        case 34:
            return res.redirect('/html/2_7_introduccion_decimales.html');
        case 35:
            return res.redirect('/html/2_4_fracciones_evaluacion.html'); // Examen de desempeño 7
        case 37: // ya cubierto en 33, pero por si acaso
            return res.redirect('/html/2_8_area_figuras.html');
        case 38: // ya cubierto en 34, pero por si acaso
            return res.redirect('/html/2_9_Clasificacion_triangulos.html');
        case 42:
            return res.redirect('/html/2_11_proporciones_y_regla_de_tres.html');
        case 43:
            return res.redirect('/html/2_11_proporciones_y_regla_de_tres_ejercicio_1.html');
        default:
            return res.status(404).send('Tema no encontrado');
    }
};


module.exports = controller;