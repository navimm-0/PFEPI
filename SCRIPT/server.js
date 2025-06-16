const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json()); // Para recibir JSON

app.post('/login', (req, res) => {
  const { correo, contrasena } = req.body;

  db.query(
    'SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?',
    [correo, contrasena],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Error en el servidor' });
      } else if (results.length > 0) {
        res.json({ mensaje: 'Inicio de sesión exitoso' });
      } else {
        res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      }
    }
  );
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
