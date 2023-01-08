import axios from 'axios'
import { getToken } from '@/utils/token'

// 创建一个axios实例
const http = axios.create({
  baseUrl: '',
  timeout: 10000,
})

// 设置axios拦截器：请求拦截器
http.interceptors.request.use(
  (config) => {
    //请求拦截一般会有哪些操作
    // 1.比如config中的一些信息不符合服务器的要求,这里可以做一些修改
    // 2.比如每次发送网络请求时,都希望在界面中显示一个请求的图标(然后再响应拦截中取消显示)
    // 3.某些网络请求必须携带一些特殊的信息(如登录token),如果没有携带就可以拦截并作响应提示
    // 给请求头添加token
    let token = getToken()
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  (err) => {
    // 请求未成功发出，如：没有网络...
    return Promise.reject(err)
  }
)

// 设置axios拦截器: 响应拦截器
http.interceptors.response.use(
  (res) => {
    // console.log(res, 'res')
    // 成功响应的拦截
    return Promise.resolve(res.data)
  },
  (err) => {
    // 失败响应的拦截
    console.log(err.response, 'error.response')
    if (err.response) {
      // 失败响应的status需要在response中获得
      switch (err.response.status) {
        // 对得到的状态码的处理，具体的设置视自己的情况而定
        case 401:
          console.log('未登录')
          window.location.href = '/'
          break
        case 404:
          window.location.href = '/'
          break
        case 405:
          console.log('不支持的方法')
          break
        // case ...
        default:
          console.log('其他错误')
          break
      }
    }
    // 注意这里应该return promise.reject(),
    // 因为如果直接return err则在调用此实例时，响应失败了也会进入then(res=>{})而不是reject或catch方法
    return Promise.reject(err)
  }
)

export default http
