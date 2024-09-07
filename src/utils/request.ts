import axios, { AxiosResponse } from 'axios'

import { message } from 'antd'

const isProd = process.env.NODE_ENV === 'production'

const request = axios.create({
    // later could use .env.dev
    baseURL: isProd ? 'http://localhost:3000' : '/api',
    timeout: 5000,
})

request.interceptors.request.use(
    (req: any) => {
        return req
    },
    (error) => {
        console.error(error, '8848')
        message.error('请求超时，请稍后重试')
    },
)

request.interceptors.response.use((res: AxiosResponse) => {
    const {
        data: { code },
    } = res
    console.log(code, '=====================')
    console.log(res, '=====================gggg')
    return res.data
})

export default request
