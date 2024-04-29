import axios from 'axios'

import { message } from 'antd'

const isProd = process.env.NODE_ENV === 'production'

const request = axios.create({
    // later could use .env.dev
    baseURL: isProd ? 'http://localhost:3000' : '/api',
    timeout: 5000,
})

request.interceptors.response.use(
    (config) => {
        const token = 'your_token_here'
        config.headers.Authorization = token
        return config
    },
    (err) => {
        message.error(err.message)
    },
)

request.interceptors.request.use((response) => {
    console.log(response,'response==============>')
    const {
        data: { code },
    } = response
    if (code) {
        switch (code) {
            case 200:
                return response.data
            case 401:
                //未登录处理方法
                break
            case 403:
                //token过期处理方法
                break
            default:
                message.error(response.data.msg)
        }
    } else {
        return response
    }
})

export default request
