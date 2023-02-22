import request from '@/utils/request'

const getList = (data) => {
    return request({
        method: 'get',
        url: '/admin/song/list',
        data
    })
}
const updateStatus = (data) => {
    return request({
        method: 'post',
        url: '/admin/song/updateStatus',
        data
    })
}

export default {
    getList, updateStatus
}
