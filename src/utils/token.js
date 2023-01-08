export const getToken = () => {
  const userStore = sessionStorage.getItem('userStore')
  const token = userStore && JSON.parse(userStore).token
  return token
}
