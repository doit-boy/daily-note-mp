import Taro from  '@tarojs/taro'
import * as dayjs from 'dayjs'

// 本地数据存储获取删除方法
class storage {
    setStorageData(name :string, data :any){
        Taro.setStorage({
            key: name,
            data: JSON.stringify(data) 
        })
    }
    getStorageSyncData(name:string){
        const value = Taro.getStorageSync(name) || null
        return value ? JSON.parse(Taro.getStorageSync(name)) : null
    }
    removeStorageData(name :string){
        Taro.removeStorage({
            key: name,
            success: res => {
                return res
            }
        })
    }
    clearStorageData(){
        Taro.clearStorage()
    }
}

// 日期对象
class day {
    // 当前时间的日期
    nowDayFormat (formatValue:string = 'YYYY-MM-DD HH:mm:ss'){
        return dayjs().format(formatValue)
    }
    // 获取指定格式的日期
    numDayFormat (time:string,formatValue:string = 'YYYY-MM-DD HH:mm:ss'){
        return dayjs(time).format(formatValue)
    }
}

const dayObj = new day()
const storageObj = new storage()

export {
    dayObj,
    storageObj
}