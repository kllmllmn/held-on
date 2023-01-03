export const isLogin = async (req, res, next) => {
  const { username, password } = req.body
  if (username == 'admin' && password == 'admin') {
    res.send({
      code: 200,
      msg: '已登录',
    })
  } else {
    res.send({
      code: 200,
      msg: '未登录',
    })
  }
}
