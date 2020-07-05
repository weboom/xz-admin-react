import { request } from '../utils/request';
const base = 'http://xz.airtlab.com/api'

export const getProductList = (params) => {
  return request({
    method: 'GET',
    url: `${base}/xzProduct`,
    query: params
  })
}