// import http from './http'

// // 扫描api，一键挂载全局
// const convertObj = {
//   get: (url, params) => {
//     http.get(url, params)
//   },
//   post: (url, params) => {
//     http.post(url, { params: params })
//   },
// }
// let Api = {}
// const allApi = import.meta.globEager('./modules/*.js')
// // const apiName = []
// // for (let i in allApi) {
// //   let name = i.replace(/\.\/|modules\/|\.js$/g, '')
// //   apiName.push(name)
// // }
// // console.log(allApi, apiName)
// for (let [key, value] of Object.entries(allApi)) {
//   //   console.log(key, value)
//   key = key.replace(/\.\/|modules\/|\.js$/g, '')
//   value = value.default
//   Api[key] = {}
//   //   console.log(key, value)
//   for (let [k, v] of Object.entries(value)) {
//     // console.log(k, v)
//     Api[key][k] = convertObj[v.type]
//   }
// }
// console.log(Api)
// export default allApi
