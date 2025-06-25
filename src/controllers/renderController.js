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
module.exports = controller;
