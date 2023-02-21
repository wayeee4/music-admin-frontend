import axios from 'axios'

const instance = axios.create({
    baseURL: 'api',
    timeout: 5000
})
// 请求拦截器
instance.interceptors.request.use(function (config) {
    if (
        config.method === "post" ||
        config.method === "put" ||
        config.method === "delete"
    ) {
        config.headers["Content-Type"] = "application/json"
    }
    config.headers["music-access-token"] = localStorage.getItem('music-access-token')
    return config;
}, error => {
    message.error(error.data.error.message);
    return Promise.reject(error.data.error.message);
})

instance.interceptors.response.use(res => {
    // === 200
    const data = res.data
    if (data.code !== 0) {
        $message.error(data.msg)
        return null
    }
    return data.data
}, err => {
    // !== 200
    return Promise.reject(err)
})
export default instance
