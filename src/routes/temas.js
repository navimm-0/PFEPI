const express = require('express');
const router = express.Router();

const temasController = require('../controllers/temasController');

router.get('/temario', temasController.temarioExpandible);
router.get('/ver-tema/:id', temasController.verTema);
router.get('/temas-basico', temasController.portafolioBasico);
router.get('/temas-intermedio', temasController.portafolioIntermedio);
router.get('/temas-avanzado', temasController.portafolioAvanzado);

module.exports = router;