const { setToken } = require('../utils/token')
const { menuList } = require('../data/sqlData')

export const getToken = async (req, res, next) => {
  const { loginName, password } = req.body
  if (loginName == 'admin' && password == 'admin') {
    let msg = { loginName: loginName }
    let token = await setToken(msg)
    res.json({ success: true, data: token, msg: '验证成功' })
  } else {
    res.json({
      success: false,
      data: null,
      msg: '未登录',
    })
  }
}
export const getUserInfo = async (req, res, next) => {
  // const token = req.headers['authorization'] // 获取前端token
  // console.log(req.auth) // 解析出来的用户信息(jwtMessage)，挂载到 req.auth 属性上
  // token验证由中间件expressjwt验证，这里不需要做验证
  res.json({ success: true, data: req.auth, msg: '' })
}
export const getMenuList = async (req, res, next) => {
  res.json({ success: true, data: menuList, msg: '' })
}
