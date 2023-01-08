var express = require('express')
var path = require('path')
const cors = require('cors')
const { expressjwt } = require('express-jwt')
const fs = require('fs')
// 解析 post 表单数据的中间件
const bodyParser = require('body-parser')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
const loginRouter = require('./routes/login')

var app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

const secretKey = fs.readFileSync(
  path.join(__dirname, './key/public.pub'),
  'utf-8'
)
//验证token是否过期并规定哪些路由不用验证
app.use(
  expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({
    path: ['/login'], //除了这个地址，其他的URL都需要验证
  })
)
// 使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误
app.use((err, req, res, next) => {
  // 这次错误是由 token 解析失败导致的
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: '无效的token',
    })
  }
  res.send({
    status: 500,
    message: '未知的错误',
  })
})
// 注意，先使用expressjwt中间件，在注册路由，才可以把解析出来的用户信息(jwtMessage)，挂载到 req.auth 属性上
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)

app.listen('3000', (err) => {
  !err && console.log('3000')
})
