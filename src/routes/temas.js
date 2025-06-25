const express = require('express');
const router = express.Router();

const temasController = require('../controllers/temasController');

router.get('/temario', temasController.list);

module.exports = router;