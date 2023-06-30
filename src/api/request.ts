import Taro from '@tarojs/taro'
import { storageObj } from '@/uits'
import { TOKEN, TIMEOUT } from '@/constant'

const token = storageObj.getStorageSyncData(TOKEN) || ''

class Http {
  url: string
  params: any
  header:{
    token: string,
  }
  
  interceptor(){
    if(!token) Taro.reLaunch({url: 'pages/index/index'})
    this.header = {
      token: token
    }
  }

  request(method){
    Taro.addInterceptor(this.interceptor)
    Taro.request({
      url: this.url,
      data: this.params,
      header: this.header,
      method: method,
      timeout: TIMEOUT,
      fail:(err)=>{
        console.log(err);
      }
    })
  }

  Get(url,params){
    this.url = `${process.env.NODE_ENV}/${url}`
    this.params = params
    return this.request('GET')
  }

  Post(url,params){
    this.url = `${process.env.NODE_ENV}/${url}`
    this.params = params
    return this.request('POST')
  }
}

export default new Http()