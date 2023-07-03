import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Index() {
  
  const [ pagesData ,setPagesData ] = useState<{show:boolean,data:string}>({
    show: false,
    data: 'Hello world!333333'
  })
  const {show, data} = pagesData

  const open = () => {
    setPagesData({...pagesData,show:!pagesData.show})
  }

  useEffect(()=>{
    console.log(121212121221);
  },[show])

  return (
    <View className='index'>
      <van-button type="default" onClick = { open }>按钮</van-button>
      <Text>{ data }</Text>
      { show ? <Text> 1111 </Text> : <Text> 222222 </Text> }
    </View>
  )
}
