import axios, { type AxiosRequestConfig, AxiosResponse } from 'axios'
import { getTestICode } from './getCode'
import { IResType } from './types'
import { ElMessage } from 'element-plus'
import { loadingStart, loadingEnd } from '@/utils/loading'
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
service.interceptors.request.use(
  (config) => {
    loadingStart()
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    return config
  },
  (error) => {
    loadingEnd()
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    if (data.data) {
      ElMessage({
        message: data.message,
        type: 'success',
        duration: 1000
      })
      loadingEnd()
      return data
    }

    return ElMessage({
      message: data.message,
      type: 'error',
      duration: 1000
    })
    // return response.data
  },
  (error) => {
    loadingEnd()
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
const request = <T = any, R = IResType<T>>(
  config: AxiosRequestConfig<T>
): Promise<R> => {
  return service.request({ ...config })
}

export default request
