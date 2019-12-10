var express = require('express');
var router = express.Router();
let taskMiddleware=require('../middleware/taskValidator');

const userController = require('../controller/userController');

const taskController=require('../controller/taskController');

router.post('/user',userController.createUser);
router.post('/login', userController.loginUser);

 router.post('/task/:type',taskController.createTask);
 router.get('/task/:type',taskController.getTask);

module.exports = router;