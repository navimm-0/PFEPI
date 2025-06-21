const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

//router.get('/', customerController.list);
router.get('/', customerController.index);
router.post('/add', customerController.save);
router.post('/login', customerController.login);
router.get('/login-exito', customerController.login); // la que hace res.render('cuenta')

//router.get('/delete/:id', customerController.delete);
//router.get('/update/:id', customerController.edit);
//router.post('/update/:id', customerController.update);
router.get('/validar-usuario', customerController.valusu);
router.get('/validar-correo', customerController.valcor);
router.post('/validar-contra', customerController.valcon);

module.exports = router;