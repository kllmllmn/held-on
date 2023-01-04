var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan') // 日志
const cors = require('cors')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
const loginRouter = require('./routes/login')
var http = require('http')

var app = express()
var server = http.createServer(app)

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

server.listen('3000', () => {
  console.log('3000')
})
