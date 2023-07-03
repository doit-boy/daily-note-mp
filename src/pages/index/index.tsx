import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default function Index() {
  
  const [ pagesData ,setPagesData ] = useState<{show:boolean,data:string,time:string}>({
    show: false,
    data: 'Hello world!333333',
    time: '',
  })
  const {show, data} = pagesData

  const open = (val:boolean) => {
    setPagesData({...pagesData,show:val})
  }

  const onConfirm = (event) =>{
    console.log(event);
  }

  useEffect(()=>{
    console.log(121212121221);
  },[show])

  return (
    <View className='index'>
      <van-button type="primary" onClick = { open(true) }>按钮</van-button>
      <van-calendar
        show={show}
        onclose={open(false)}
        onconfirm={onConfirm} />
      <Text>{ data }</Text>
      { show ? <Text> 1111 </Text> : <Text> 222222 </Text> }
    </View>
  )
}
