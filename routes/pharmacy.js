const express = require('express');
const router = express.Router();

const pharmacyCtrl = require('../controllers/pharmacy');

router.post('/signup', pharmacyCtrl.signup);
router.post('/login', pharmacyCtrl.login);
 
module.exports = router;