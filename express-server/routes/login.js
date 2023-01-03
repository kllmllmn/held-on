var express = require('express')
var router = express.Router()
import { isLogin } from '../controller/login.controller'
/* GET home page. */
router.post('/verification', isLogin)

module.exports = router
