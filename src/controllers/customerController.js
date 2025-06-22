const controller = {};
const bcrypt = require('bcryptjs');

controller.index = (req, res) => {
    res.redirect('/index.html');
};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, customers) => {
            if (err) {
                res.json(err);
            }
            console.log(customers);
            res.render('cuenta', {
                data: customers
            });
        });
    });
};

controller.save = async(req, res) => {
  // Ver encabezados HTTP (importante para verificar el tipo de contenido)
  console.log("📥 Headers recibidos:", req.headers);

  // Ver datos sin procesar (útil para confirmar que el cuerpo llega)
  req.on('data', chunk => {
    console.log("🛰️ Datos RAW recibidos:", chunk.toString());
  });

  // Ver objeto ya procesado (si express.urlencoded funciona correctamente)
  console.log("📦 req.body:", req.body);

  // Aquí continúa tu lógica
  const { name, user, email, pass } = req.body;

  const hashedPass = await bcrypt.hash(pass, 10);
  
  req.getConnection((err, conn) => {
    conn.query('CALL registrar_usuario(?, ?, ?, ?)', [name, user, email, hashedPass], (err, result) => {
      if (err) {
        console.error("❌ Error en la consulta:", err);
        return res.status(500).json({ error: true });
      }

      console.log("✅ Usuario registrado:", result);
      res.status(200).json({ mensaje: "Usuario registrado correctamente" });
    });
  });
};

controller.login = (req, res) => {
    const data = req.body;
    console.log(req.body);
    console.log('works');
};

controller.update = (req, res) => {
    const { id } = req.params;
    const { user, email, name } = req.body;
    req.getConnection((err, conn) => {
        conn.query('CALL actualizar_datos_usuario( ?, ?, ?, ?)', [id, user, name, email], (err, rows) => {
           if (err) return res.status(500).send('Error en la consulta');
            console.log('Actualización completada');
            res.redirect('/ver-cuenta');
        });
    });
};

controller.changePass = (req, res) => {
  
}

controller.delete = (req, res) => {
    const { id } = req.params;
    //const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

//puedo tener más métodos

controller.valusu = (req, res) => {
  const { username } = req.query;

  console.log("Valor recibido de username:", username);

  req.getConnection((err, conn) => {
    if (err) return res.status(500).json({ error: true, message: 'Error de conexión a la base de datos' });
    const sql = 'SELECT usuario_existe(?) AS existe';
    conn.query(sql, [username], (err, result) => {
      if (err) return res.status(500).json({ error: true, message: 'Error en la consulta' });
      res.json({ existe: result[0].existe === 1 });
    });
  });
};


controller.valcor = (req, res) => {
  const { correo } = req.query;

  console.log("Correo recibido:", correo);

  req.getConnection((err, conn) => {
    if (err) return res.status(500).json({ error: true, message: 'Error de conexión a la base de datos' });
    const sql = 'SELECT correo_existe(?) AS existe';
    conn.query(sql, [correo], (err, result) => {
      if (err) return res.status(500).json({ error: true, message: 'Error en la consulta' });
      res.json({ existe: result[0].existe === 1 });
    });
  });
};

controller.valcon = (req, res) => {
  console.log("Llamada al controlador recibida");
  const{ user, password } = req.body;

    console.log(req.body);
    console.log(user, password);

  req.getConnection((err, conn) => {
    if(err) return res.status(500).json({ code: -1 }); //Error de conexión
    conn.query('CALL iniciar_sesion(?)', [user], async (err, result) => {
      if(err) return res.status(500).json({ code: -2}); //Error de consulta SQL

      const datos = result[0][0]; // Resultado de la consulta

      if(!datos) return res.status(404).json({code: 1 }); // Usuario no encontrado

      const match = await bcrypt.compare(password, datos.contrasena_hash);

      if(!match) return res.status(200).json({ code: 2}); // Contrase;a incorrecta

      // Se guarda el usuario en sesión
      req.session.usuario_id = datos.id_usuario;

      //Usuario autenticado correctamente
      return res.status(200).json({ code: 0}); //Éxito
    });
  });
};

controller.login = (req, res) => {
  // Puedes validar si está logueado con sesión si gustas
  if (!req.session.usuario_id) {
    return res.redirect('/'); // si no ha iniciado sesión
  }

  res.render('MenuP', { usuario: req.session.usuario_id });
};

controller.cuenta = (req, res) => {
  console.log('Usuario en sesión:', req.session.usuario_id);

  const user = req.session.usuario_id;

  if (!user) {
    return res.redirect('/');
  }

  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error de conexión');

    conn.query('SELECT * FROM Usuario WHERE id_usuario = ?', [user], (err, result) => {
      if (err) return res.status(500).send('Error al consultar usuario');
      if (result.length === 0) return res.status(404).send('Usuario no encontrado');

      const datos = result[0];
      res.render('cuenta', { usuario: datos }); // Renderizar EJS con los datos del usuario
    });
  });
};


module.exports = controller;