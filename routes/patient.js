const express = require('express')
const router = express.Router()
const patientCtrl = require('../controllers/patient')

router.post('/signup/', patientCtrl.singup)
router.post('/login/', patientCtrl.login)

module.exports = router;