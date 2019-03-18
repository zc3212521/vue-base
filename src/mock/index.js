import { baseURL } from '@/base/axios'
import api from '@/http/api'

let Mock = require('mockjs')

mock(api.login, function (opt) {
  let queryBody = JSON.parse(opt.body)
  return {
    'tenantName': queryBody.username,
    'sessionId': '111'
  }
})

mock(api.test, {
  res: 222
})

function mock (url, template) {
  return Mock.mock(baseURL + url, template)
}
