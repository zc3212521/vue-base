// import Fetch from './http'
// import { baseUrl } from '@/http/commom'
import axios from './axios'

// 获取测试数据
export const getTestData = () => {
  return axios.get(`/repos/octokit/octokit.rb`)
}
