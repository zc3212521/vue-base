const baseConfig = {
  baseURL: {
    dev: '/pompapi', // 测试环境baseUrl
    prod: 'http://192.168.2.14:8676/hsc-pomp-bff', // 测试服务器环境baseUrl
    yapi: 'http://yapi.hongguaninfo.com/mock/22' // yapi上mock接口地址
  },
  iconUrl: {
    scriptUrl: '//at.alicdn.com/t/font_1043493_l1hojvfhxd.js' // 在 iconfont.cn 上生成
  }
}
export default baseConfig
// module.exports = baseConfig
