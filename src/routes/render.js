const express = require('express');
const router = express.Router();

const renderController = require('../controllers/renderController');

router.get('/cambiarContra', renderController.cambiarContra);
router.get('/login', renderController.login);
router.get('/logout', renderController.logout);
router.get('/eliminar-cuenta', renderController.deleteAcc);
router.get('/inicio', renderController.inicio);

module.exports = router;
