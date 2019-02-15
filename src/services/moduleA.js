import Http from './http'

const baseUrl = 'https://api.github.com'

// 获取测试数据
export const getTestData = () => {
  return Http.get(`${baseUrl}/repos/octokit/octokit.rb`)
}
