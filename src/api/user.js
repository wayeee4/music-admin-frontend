import request from '@/utils/request'

const login = (data) => {
    return request({
        method:'post',
        url:'/admin/login',
        data
    })
}

const register = (data) => {
    return request({
        method:'post',
        url:'/admin/register',
        data
    })
}
export default {
    login,
    register
}
