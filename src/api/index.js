import http from './http'

// 扫描api，一键挂载全局
const convertObj = {
  get: (url, params) => {
    http.get(url, { params })
  },
  post: (url, params) => {
    http.post(url, params)
  },
}
let Api = {}
const allApi = import.meta.globEager('./modules/*.js')
for (let [key, value] of Object.entries(allApi)) {
  //   console.log(key, value)
  key = key.replace(/\.\/|modules\/|\.js$/g, '')
  value = value.default
  Api[key] = {}
  //   console.log(key, value)
  for (let [k, v] of Object.entries(value)) {
    // console.log(k, v)
    Api[key][k] = (params) => convertObj[v.type](v.url, params)
  }
}
export default Api
