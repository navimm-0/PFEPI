const express = require('express');
const router = express.Router();

const temasController = require('../controllers/temasController');

router.get('/temario', temasController.temarioExpandible);
router.get('/ver-tema/:id', temasController.verTema);
router.get('/ver-ejercicios/:id', temasController.verEjercicio);
router.get('/temas/:id_padre', temasController.verTemasPorPadre);
router.get('/temas-basico', temasController.portafolioBasico);
router.get('/temas-intermedio', temasController.portafolioIntermedio);
router.get('/temas-avanzado', temasController.portafolioAvanzado);
router.get('/porcentaje-avance', temasController.obtenerAvance);
router.get('/obtener-lecciones/:nivel/:id', temasController.obtenerLecciones);
router.get('/obtener-lecciones/:nivel', temasController.obtenerLecciones);
router.get('/completar-tema/:id', temasController.completarT);
router.get('/completar-tema/:id', temasController.verTemasPorPadre);
router.get('/unidades', temasController.list);

module.exports = router;