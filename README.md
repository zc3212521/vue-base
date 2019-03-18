# vue-base

## 命令

### 项目启动
1. [node安装10.0.0+](https://nodejs.org/zh-cn/)

2. [yarn安装](https://yarn.bootcss.com/docs/install/#windows-stable)

3. 更换yarn源
```
yarn config set registry 'https://registry.npm.taobao.org'
```

4. 安装依赖，项目目录下执行
```
yarn
```

5. 启动项目
```
npm start
```

5.浏览器访问：  http://localhost:8080 

### 辅助工具安装

1. chrome安装插件 vue,vue performance


### 编译开发环境代码，开启热替换服务器
```
npm start
```

### 编译正式环境代码
```
npm run build
```

### 运行接口mock
```
npm run mock
```

### 运行代码自动修复
```
npm run lint
```

### 运行单元测试
```
npm run test
```

## 目录结构

```


```

## 开发规范

### 准备工作
1. 在/src/baseConfig.js中添加正式线上baseUrl
2. 需要代理的接口参考/vue.config.js中的参考示例

### 规范
1. 接口地址必须配置在/src/http/api.js中
2. 页面中调用后台接口的方法需定义在/src/http/中，参考示例moduleA.js。 页面中调用moduleA.js定义的方法，用then()方法处理成功回调
3. 提交代码禁止取消githook功能
4. 在代码量较多、用户点击不是很频繁的模块的显示隐藏使用v-if指令，反之使用v-show指令。
5. 路由定义需指定name,路由跳转应使用 name 而不是 path。
6. v-for循环必须添加key值
7. 组件的拆分尽可能细化，最大程度做到可复用。
8. v-for v-if 不可用在同一标签上。
