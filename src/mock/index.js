import { baseUrl } from '@/http/commom'

let Mock = require('mockjs')

Mock.mock(`${baseUrl}/repos/octokit/octokit.rb`, 'get', {
  'sid|+1': 1
})

console.log('hello')
