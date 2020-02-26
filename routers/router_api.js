const express = require('express');
const router =express.Router();
const tietKiemController = require('../controllers/tietKiemController');


router.get('',tietKiemController.get)

module.exports = router
