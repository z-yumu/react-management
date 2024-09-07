import request from '@/utils/request'

export const getUerInfoApi = (data:{account: string, password: string}) => request.post('/auth/loginddfd', data)
