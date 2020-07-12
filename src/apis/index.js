import { request } from '../utils/request';
const base = 'http://xz.airtlab.com/api'

// 商品列表
export const getProductList = (params) => {
  return request({
    method: 'GET',
    url: `${base}/xzProduct`,
    query: params
  })
}

// 商品详情
export const getProductDetail = (id) => {
  return request({
    method: 'GET',
    url: `${base}/xzProduct/${id}`,
  })
}

export const getUserList = (params) => {
  return request({
    method: 'GET',
    url: `${base}/xzProduct`,
    query: params
  })
}