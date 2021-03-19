/*
 * @Description:
 * @Author: 王阳
 * @Date: 2021-03-18 09:57:54
 * @LastEditTime: 2021-03-18 10:15:26
 * @LastEditors: 王阳
 * @Reference:
 */
import axios from 'axios'
import { ElMessage as Message } from 'element-plus'
import { checkStatus } from './checkStatus'
// 如果接口返回没有isok，写入这个数组里
const excludeUrlList = ['/admin/login']
/**
 * 用来判断传入的url是否在excludeUrlList中
 * @param url 需要判断的url
 * @returns true 存在；false 不存在
 *
 */
const isExcludeUrl = (url: string) =>
  excludeUrlList.some((el) => url.indexOf(el) > -1)

const service = axios.create({
  timeout: 60 * 1000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: any) => {
    const res = response.data
    // 可能某些接口没有isok返回值，比如说导出Excel等，添加到excludeUrlList中即可
    if (isExcludeUrl(response.config.url)) {
      return res
    } else {
      if (res.isok) {
        return res
      } else {
        Message({
          message: res.msg || 'Error',
          type: 'error'
        })
        return Promise.reject(new Error(res.msg || 'Error'))
      }
    }
  },
  (error) => {
    // 响应结果拦截器错误捕获
    const { response } = error || {}
    const msg = response && response.data ? response.data.msg : ''
    const err = error.toString()
    try {
      if (err && (err.includes('Network Error') || err.includes('timeout'))) {
        Message.error('网络异常，请检查您的网络连接是否正常!')
        return error
      }
    } catch (error) {
      throw new Error(error)
    }
    // 请求是否被取消
    const isCancel = axios.isCancel(error)
    if (!isCancel) {
      checkStatus(error.response && error.response.status, msg)
    } else {
      console.warn(error, '请求被取消！')
    }
    return error
  }
)

export default service
