import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Error = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems:'center',
        margin: 10
    },
    text:{
        color:'red'
    }
})