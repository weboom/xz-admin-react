import axios from 'axios';
import Url from 'url-parse';
import * as store from 'store'

export const instance = axios.create({
  timeout: 10 * 1000
})

instance
  .interceptors
  .request
  .use(function (config) {
    config.headers['x-token'] = store.get('token') || '';
    return config
  }, function (error) {
    return Promise.reject(error)
  })

instance
  .interceptors
  .response
  .use(response => {
    let res = response.data
    if (+ res.retCode === 0) {
      res.success = true
    }
    return res
  }, error => {
    Promise.reject(error)
  })

const PENDING = 'PENDING'
const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'
const FULLFILLED = 'FULLFILLED'

export const request = function (option) {
  if (option && (Object.prototype.toString.call(option.query) === '[object Object]')) {
    const url = new Url(option.url, true)
    Object.assign(url.query, option.query)
    option.url = url.toString()
  }
  
  return new Promise((resolve, reject) => {
    var min = PENDING
    var max = PENDING
    var state = PENDING
    var res = null

    var next = function (name) {
      const cb = function () {
        if (state === RESOLVED) {
          resolve(res)
        } else {
          reject(res)
        }
      }
      if (name === 'res' && min === FULLFILLED) {
        cb()
      }

      if (name === 'min' && (state === RESOLVED || state === REJECTED)) {
        cb()
      }

      if (name === 'max' && state === PENDING) {
        reject('timeout')
      }
    }

    setTimeout(() => {
      min = FULLFILLED
      next('min')
    }, 500)

    setTimeout(() => {
      max = FULLFILLED
      next('max')
    }, 10000)

    instance(option).then(data => {
      res = data
      state = RESOLVED
      next('res')
    }).catch(error => {
      res = error
      state = REJECTED
      next('res')
    })
  })
}
