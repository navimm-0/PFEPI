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

module.exports = controller;