import Validate from './validate'
import * as Auth from './auth'
import Other from './other'

const session = {
  get (key) {
    return sessionStorage.getItem(key)
  },
  set (key, value) {
    return sessionStorage.setItem(key, value)
  }
}

const local = {
  get (key) {
    return localStorage.getItem(key)
  },
  set (key, value) {
    return localStorage.setItem(key, value)
  }
}

const deepClone = (obj) => {
  let newObj = JSON.stringify(obj)
  return JSON.parse(newObj)
}

/**
 * 删除对象属性值为空或者为undefined的属性值
 * @param obj
 * @returns {*}
 */
const deleteEmpty = function (obj) {
  Object.keys(obj).forEach(item => {
    if (obj[item] === 'undefined' || obj[item] === undefined || obj[item].length <= 0) {
      delete obj[item]
    }
  })
  return obj
}

/**
 * 并列的列表转换成层级结构
 * @param obj
 * @return {*}
 */
const listConvertObj = function (list) {
  let root = null
  if (list && list.length) {
    root = { tagId: 0,
      parentId: null,
      'draw': 0,
      'pageCount': 1,
      'pageNumber': 1,
      'pageSize': 30,
      children: [] }
    const group = {}
    for (let index = 0; index < list.length; index += 1) {
      if (list[index].parentId !== null && list[index].parentId !== undefined) {
        if (!group[list[index].parentId]) {
          group[list[index].parentId] = []
        }
        group[list[index].parentId].push(list[index])
      }
    }
    const queue = []
    queue.push(root)
    while (queue.length) {
      const node = queue.shift()
      node.children = group[node.tagId] && group[node.tagId].length ? group[node.tagId] : null
      if (node.children) {
        queue.push(...node.children)
      }
    }
  }
  return root
}

const log = console.log

export {
  Validate,
  Other,
  Auth,
  session,
  local,
  log,
  deepClone,
  deleteEmpty,
  listConvertObj
}
