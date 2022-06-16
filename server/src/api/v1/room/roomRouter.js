const express = require('express');
const roomController = require('./roomController');

// init routeur express
const router = express.Router();

// route appartements
router.route('/rooms')

    .get([
        roomController.readAllRooms
    ])
router.route('/rooms/:id')

    .get([
        roomController.readRoom
    ])


module.exports = router;