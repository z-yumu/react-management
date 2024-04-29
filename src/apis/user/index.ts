import request from '@/utils/request'

class UserAPI {
    static PREFIX = '/user'
    static login(username: string, password: string) {
        return request.post(`${UserAPI.PREFIX}/login`, {
            username,
            password,
        })
    }

    static getCode(data: any) {
        return request.post(`${UserAPI.PREFIX}/code`,data)
    }

    static register(username: string, password: string) {
        return request.post(`${UserAPI.PREFIX}`, {
            username,
            password,
        })
    }
}

export default UserAPI
