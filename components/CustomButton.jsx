import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
  return (
    <View>
        <TouchableOpacity onPress={props.handlePress} className={props.containerStle}><Text className={props.titleStyle}>{props.title}</Text></TouchableOpacity>
     
    </View>
  )
}

export default CustomButton