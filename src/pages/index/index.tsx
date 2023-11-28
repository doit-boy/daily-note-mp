import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default function Index() {
  
  const [ pagesData ,setPagesData ] = useState<{show:boolean,data:string,time:string}>({
    show: false,
    data: 'Hello world!333333',
    time: '',
  })
  const { show, data, time } = pagesData

  const autoOpen = (val:boolean) => {
    setPagesData({ ...pagesData, show: val })
  }

  const onConfirm = (event) =>{
    setPagesData({ 
      ...pagesData,
      time: formatDate(event.mpEvent.detail),
      show: false
    })
  }

  const formatDate = (date) =>{
    date = new Date(date);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  }

  useEffect(()=>{
    console.log(121212121221);
  },[show])

  return (
    <View className='index'>
      <van-button type='primary' onClick={() => autoOpen(true)}>按钮</van-button>
      <van-calendar
        show={show}
        onClose={() => autoOpen(false)}
        onconfirm={(e) => onConfirm(e)}
      />
      <Text>{ data }:{ time }</Text>
      { show ? <Text> 1111 </Text> : <Text> 222222 </Text> }
    </View>
  )
}
