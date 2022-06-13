const express = require('express');
const appartementController = require('./appartementController');

// init routeur express
const router = express.Router();

// route appartements
router.route('/appartements')

    .get([
        appartementController.readAllAppartements
    ]);

router.route('/appartements/:id')

    .get([
        appartementController.readAppartement
    ])


module.exports = router;