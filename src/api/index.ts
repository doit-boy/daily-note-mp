import http from './request'

const apiDemo = (parems)=>{
    return http.Post('',parems)
}

export {
    apiDemo
}