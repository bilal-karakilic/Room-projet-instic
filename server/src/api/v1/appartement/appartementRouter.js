const express = require('express');
const { tokenVerif } = require('../middleware/TokenVerif');
const appartementController = require('./appartementController');

// init routeur express
const router = express.Router();

// route appartements
router.route('/appartements')

    .get([
        appartementController.readAllAppartements
    ])

    .post([
        tokenVerif,
        appartementController.addAppartement
    ])
router.route('/appartements/:id')

    .get([
        appartementController.readAppartement
    ])


module.exports = router;