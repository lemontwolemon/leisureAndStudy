import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { QURequsetInterceptors, QURequestConfig } from './types'

const DEAFULT_LOADING = true

class QURequest {
  instance: AxiosInstance
  interceptors?: QURequsetInterceptors
  showLoading: boolean

  constructor(config: QURequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        return data
      },
      (err) => {
        if (err.response.status === 404) {
          console.log('404错误')
        }
        return err
      }
    )
  }
  request<T>(config: QURequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 2.判断是否要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.将showLoading设置为true，这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: QURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: QURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: QURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: QURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default QURequest
