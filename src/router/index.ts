import Taro from '@tarojs/taro'

class pageTo {
    switchTab(url){
        Taro.switchTab({
            url
        })
    }
    reLaunch(url){
        Taro.reLaunch({
            url
        })
    }
    redirectTo(url){
        Taro.redirectTo({
            url
        })
    }
    navigateTo(url){
        Taro.navigateTo({
            url
        })
    }
    navigateBack(delta){
        Taro.navigateBack({
            delta
        })
    }
    getCurrentPages(){
        return Taro.getCurrentPages()
    }
}

const pageObj = new pageTo()

export {
    pageObj
}