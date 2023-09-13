import type { AsyncData, UseFetchOptions } from "nuxt/app"
export type method = 'GET' | 'POST'
export interface IResultData<T = any> {
  code: number,
  data: T
}
class CYRequest {
  baseURL: string
  constructor(baseURL: string) {
    this.baseURL = baseURL
  }
  request<T = IResultData>(url: string, method: method, data?: any, options?: UseFetchOptions<T>) {
    return new Promise<AsyncData<T, any>>((reslove, reject) => {
      const newOptions: UseFetchOptions<T> = {
        baseURL: this.baseURL,
        method,
        ...options
      }
      if (method === 'GET') {
        newOptions['query'] = data
      }
      if (method === 'POST') {
        newOptions['body'] = data
      }
      useFetch(url, newOptions).then(res => {
        reslove(res as AsyncData<T, any>)
      }).catch(err => {
        reject(err)
      })
    })
  }
  get<T = IResultData>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.request(url, 'GET', data, options)
  }
  post<T = IResultData>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.request(url, 'POST', data, options)
  }
}

export default new CYRequest('http://codercba.com:9060/oppo-nuxt/api')