var express = require('express');
var router = express.Router();

const userController = require('../controller/userController');

router.post('/user',userController.createUser);

module.exports = router;