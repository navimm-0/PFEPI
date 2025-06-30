const express = require('express');
const router = express.Router();

const renderController = require('../controllers/renderController');

router.get('/cambiarContra', renderController.cambiarContra);
router.get('/login', renderController.login);
router.get('/logout', renderController.logout);
router.get('/eliminar-cuenta', renderController.deleteAcc);
router.get('/inicio', renderController.inicio);
router.get('/ver-tema/:id', renderController.verTema);
router.get('/ver-ejercicios/:id', renderController.verEjercicio);
router.get('/ver-video/:id', renderController.verVideo);
router.get('/ver-examen/:id', renderController.verExaDes);
router.get('/ir-a-examen/:id', renderController.exColoca);

module.exports = router;
