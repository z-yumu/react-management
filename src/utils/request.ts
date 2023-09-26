import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

class Request {
    // axios 实例
    instance: AxiosInstance
    // 基础配置，url和超时时间
    baseConfig: AxiosRequestConfig = {
        baseURL: '/api',
        timeout: 60000,
    }

    constructor(config: AxiosRequestConfig) {
        // 使用axios.create创建axios实例
        this.instance = axios.create(Object.assign(this.baseConfig, config))

        this.instance.interceptors.request.use(
            // 这里的类型问题
            (res:InternalAxiosRequestConfig) => {
                return res
            },
            (err: any) => console.log(err)
        )
        this.instance.interceptors.response.use(
            // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
            (res: AxiosResponse) => {
                return res.data
            },
            (err: any) => console.log(err)
        )
    }
    // 定义请求方法
    public request(config: AxiosRequestConfig): Promise<any> {
        return this.instance.request(config)
    }
}
export default Request
