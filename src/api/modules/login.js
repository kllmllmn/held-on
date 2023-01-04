const baseUrl = import.meta.env.VITE_BASE_URL
import http from '@/api/http'

export default {
  login(params = {}) {
    return http({
      url: baseUrl + '/login/verification',
      method: 'post',
      data: params,
    })
  },
}
