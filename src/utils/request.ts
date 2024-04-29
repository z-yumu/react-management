import axios from 'axios'
import { message } from 'antd'
import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios'
import { IRes } from '@/common/interface/IRes'
import Config from '@/common/config'

const request = axios.create({
    baseURL: Config.API_URI,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
})

request.interceptors.response.use((response: AxiosResponse) => {
    const res: IRes = response.data
    console.log(res,'===================>gggg')
    // 当 error_code 不为 0 时，统一弹出错误提示框，并抛出错误
    if (res.error_code) {
        message.error(res.msg)
        throw new Error(res.msg)
    }
    // 当 error_code 为 0 时，继续返回请求
    return response.data
})

export default request
