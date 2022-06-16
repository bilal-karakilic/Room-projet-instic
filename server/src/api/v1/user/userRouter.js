const express = require('express');
const userController = require('./userController');

// init routeur express
const router = express.Router();
//declare all route
// route appartements
router.route('/sign/add')

    .post([
        //call controller
        userController.addNewUser
    ]);

router.route('/login/connect')

    .post([
        userController.getUser
    ])

router.route('/admin/login/connect')

    .post([
        userController.getAdmin
    ])


module.exports = router;