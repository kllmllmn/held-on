const jwt = require('jsonwebtoken')

export const isLogin = async (req, res, next) => {
  const { loginName, password } = req.body
  if (loginName == 'admin' && password == 'admin') {
    let content = { loginName: loginName } // 要生成token的主题信息
    let secretOrPrivateKey = 'jwt' // 这是加密的key（密钥）
    let token = jwt.sign(content, secretOrPrivateKey, {
      expiresIn: 60 * 60 * 1, // 1小时过期
    })

    res.json({ success: true, msg: 'ok', data: token })
  } else {
    res.send({
      success: false,
      msg: '未登录',
      data: null,
    })
  }
}
