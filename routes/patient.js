const express = require('express')
const router = express.Router()
const patientCtrl = require('../controllers/patient')

router.post('/signup/', patientCtrl.singup)

module.exports = router;