import Http from './http'
import { baseUrl } from '@/services/commom'

// 获取测试数据
export const getTestData = () => {
  return Http.get(`${baseUrl}/repos/octokit/octokit.rb`)
}
