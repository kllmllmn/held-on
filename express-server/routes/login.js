var express = require('express')
var router = express.Router()
import {
  getToken,
  getUserInfo,
  getMenuList,
} from '../controller/login.controller'

router.post('/', getToken)
router.get('/getUserInfo', getUserInfo)
router.get('/getMenuList', getMenuList)

module.exports = router
