import axios from 'axios'
import baseConfig from '@/baseConfig'
// import store from '@/store'
import { getToken } from '@/utils/auth'

const URLObj = baseConfig.baseURL
let baseURL = URLObj.dev
if (process.env.NODE_ENV === 'production') {
  baseURL = URLObj.prod
}
if (process.env.NODE_ENV === 'yapi') {
  baseURL = URLObj.yapi
}

export { baseURL }

axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = false
axios.defaults.timeout = 5000
axios.defaults.headers['Content-Type'] = 'application/json'
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(function (response) {
  // Do something with response data
  if (response.url.indexOf('/portalLogin') < 0) {
    let token = getToken()
    if (!token) {
      window.vm.$router.push({ name: 'login' })
      return
    }
    response.headers['sessionId'] = token
  }
  return response
}, function (error) {
  // Do something with response error
  console.log('got ajax error', error)
  return Promise.reject(error)
})

// respone拦截器
axios.interceptors.response.use(function (response) {

}, function (error) {
  let originCode = error.response.status
  switch (originCode) {
    case 400:
      window.vm.$message.error('请求出错，请刷新重试')
      return
    case 401:
      window.vm.$message.error('暂无权限，请重新登录')
      window.vm.$router.push({ name: 'login' })
      return
    case 403:
      window.vm.$message.error('暂无权限，请重新登录')
      window.vm.$router.push({ name: 'login' })
      return
    case 404:
      window.vm.$message.error('您访问的资源不存在，请核实后重试')
      return
    case 405:
      window.vm.$message.error('请求方法错误，请联系开发人员')
      return
    case 500:
      window.vm.$message.error('服务器出现错误，请联系开发人员')
      return
    default:
      return Promise.reject(error)
  }
})

export default axios
