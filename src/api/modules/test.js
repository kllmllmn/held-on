const baseUrl = import.meta.env.VITE_BASE_URL

export default {
  login: {
    type: 'post',
    url: baseUrl + '/login/verification',
  },
  gogo: {
    type: 'get',
    url: baseUrl + '/login/gogo',
  },
}
