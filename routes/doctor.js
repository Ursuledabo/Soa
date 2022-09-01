const express = require('express')
const router = express.Router()
const doctorCtrl = require('../controllers/doctor')

router.post('/signup', doctorCtrl.signup);
router.get('/login', doctorCtrl.login);

module.exports = router;