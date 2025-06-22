const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

//router.get('/', customerController.list);
router.get('/', customerController.index);
router.post('/add', customerController.save);
router.post('/login', customerController.login);
router.get('/login-exito', customerController.login); // la que hace res.render('cuenta')

//router.get('/delete/:id', customerController.delete);
router.post('/update/:id', customerController.update);
//router.post('/update/:id', customerController.update);
router.get('/validar-usuario', customerController.valusu);
router.get('/validar-correo', customerController.valcor);
router.post('/validar-contra', customerController.valcon);
router.get('/ver-cuenta', customerController.cuenta);
router.get('/cambiar-contra', customerController.changePass);

module.exports = router;