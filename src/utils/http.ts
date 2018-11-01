import Taro from '@tarojs/taro'
import md5 from 'blueimp-md5'
typeof HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'
// 后端是否支持json格式
const contentType = 'application/x-www-form-urlencoded'
// const contentType = 'application/json'
export default class Http {
    noNeedToken = ['mockFackeApi']
    get(url: string, data: object) {
        return this.commonHttp('GET', url, data)
    }
    post(url: string, data: object) {
        return this.commonHttp('POST', url, data)
    }
    async commonHttp(method: HttpMethods, url: string, data: object) {
        return new Promise<any>(async (resolve, reject) => {
            Taro.showNavigationBarLoading()
            try {
                const res = await Taro.request({
                    url,
                    method,
                    data,
                    header: {
                        'content-type': contentType
                    }
                })
                Taro.hideNavigationBarLoading()
                switch (res.statusCode) {
                    case 200:
                        return resolve(res.data.response)
                    default:
                        console.log(res.data.message)
                        reject(new Error(res.data.msg))
                }
            } catch (error) {
                Taro.hideNavigationBarLoading()
                reject(new Error('网络请求出错！'))
            }
        })

    }
}