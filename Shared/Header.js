import { StyleSheet, Image,View,TextInput} from 'react-native'
import React from 'react'





const Headers = () => {
  return (
        <View style={styles.header}>
            <Image source={require('../assets/favicon.png')}
            resizeMode="contain"
            style={{height:50, width:50}}
            />
        </View>
  )
}

export default Headers

const styles = StyleSheet.create({
    header:{
        marginTop:20,
        width: '100%',
        height:'8%',
        flexDirection:'row',
        alignContent:"center",
        justifyContent:"center",
        padding:20,
    }
})