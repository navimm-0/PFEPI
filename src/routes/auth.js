const express = require('express')
const router = express.Router()

const { loginCtrl, registerCtrl } = require('../controllers/authController');

// login
router.post('/login', loginCtrl);

// registrar usuario
router.post('/register', registrar);

module.exports = router;