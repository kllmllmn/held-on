const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

let secretKey = fs.readFileSync(
  path.join(__dirname, '../key/public.pub'),
  'utf-8'
) // 这是加密的key（密钥）
const expiresIn = {
  expiresIn: 60 * 60 * 1, //1h
} // 1小时过期

exports.setToken = function (msg) {
  const jwtMessage = { userInfo: msg } // 要生成token的主题信息
  return new Promise((resolve, reject) => {
    const token = jwt.sign(jwtMessage, secretKey, expiresIn)
    resolve(token)
  })
}

// exports.verToken = function (token) {
//   let trueToken = token.split(' ')[1]
//   return jwt.verify(trueToken, secretKey)
// }
