import http from '@/api/http'
const baseUrl = import.meta.env.VITE_BASE_URL

export default {
  // login: {
  //   url: baseUrl + '/login/verification',
  //   type: 'post',
  // },
  fetchToken(params = {}) {
    return http({
      url: baseUrl + '/login',
      method: 'post',
      data: params,
    })
  },
  fetchUserInfo(params = {}) {
    return http({
      url: baseUrl + '/login/getUserInfo',
      method: 'get',
      params,
    })
  },
  fetchMenuList(params = {}) {
    return http({
      url: baseUrl + '/login/getMenuList',
      method: 'get',
      params,
    })
  },
}
