const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'), // 定义 src 目录变量
      '@lib': resolve('src/common'), // 定义 common 目录变量,
      '@com': resolve('src/components'), // 定义 components 目录变量,
      '@img': resolve('src/asserts/images'), // 定义 images 目录变量,
      '@ser': resolve('src/services') // 定义 services 目录变量,
    }
  }
}
