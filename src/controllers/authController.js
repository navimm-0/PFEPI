/*const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/users') */
const controller = {};
const bcrypt = require('bcryptjs');

const saltRoundes = 10;

//Login
const loginCtrl = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if(!user){
            res.status(404)
            res.send({ error: 'User not found'})
        }

        // (1234) => hash
        const checkPassword = await compare(password, user.password)
        const tokenSession = await tokenSign(user)
        if (checkPassword) { //Contrasenia correcta
            res.send({
                data: user
            })
            return;
        }

        if(!checkPassword) {
            res.status(404)
            res.send({
                error: 'Invalid password'
            })
            return;
        }
    }
    catch{};
};


controller.save = (req, res) => {

  // Aquí continúa tu lógica
  const { name, user, email, pass } = req.body;
  
  req.getConnection((err, conn) => {
    conn.query('CALL registrar_usuario(?, ?, ?, ?)', [name, user, email, pass], (err, result) => {
      if (err) {
        console.error("Error en la consulta:", err);
        return res.status(500).json({ error: true });
      }

      console.log("Usuario registrado:", result);
      res.status(200).json({ mensaje: "Usuario registrado correctamente" });
    });
  });
};

// Registro de usuario
const registerCtrl = async(req, res) => {

    // Ver objeto ya procesado (si express.urlencoded funciona correctamente)
    console.log("req.body:", req.body);

    try {
        // Datos que vienen del front
        const { email, password, name } = req.body
        const passwordHash = await encrypt(password) // encriptando
        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })

        res.send({ data: registerUser})
    } catch (e) {
        httpError(res, e)
    }
}
    */

controller.registrar = async (req, res) => {
  try {
    const { name, user, email, pass } = req.body;

    // Encriptar la contraseña antes de guardarla
    const hashedPass = await bcrypt.hash(pass, 10);

    // Conexión a base de datos
    req.getConnection((err, conn) => {
      if (err) {
        console.error("Error de conexión:", err);
        return res.status(500).json({ error: "Error al conectar con la base de datos" });
      }

      conn.query('CALL registrar_usuario(?, ?, ?, ?)', [name, user, email, hashedPass], (err, result) => {
        if (err) {
          console.error("Error en la consulta:", err);
          return res.status(500).json({ error: "Error al registrar el usuario" });
        }

        console.log("Usuario registrado:", result);
        res.status(200).json({ mensaje: "Usuario registrado correctamente" });
      });
    });

  } catch (error) {
    console.error("Error en la función registrar:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
