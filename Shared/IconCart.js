import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Badge } from 'native-base'

import { connect } from 'react-redux'

const IconCart = (props) => {
  return (
    <>
      {
          props.cartItems.length ? (
                <Badge style={styles.badge}>
                    <Text style={styles.text}>
                        {props.cartItems.length}
                    </Text>
                </Badge>
          ):null
      }
    </>
  )
}

const mapStateToProps = (state)=>{
    const{cartItems} = state;
    return{
        cartItems:cartItems
    }
}
export default connect(mapStateToProps)(IconCart)

const styles = StyleSheet.create({
    badge:{
        //width: 25,
        position: 'absolute',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        top:-4,
        right: -15,
        borderRadius:70,
        backgroundColor:'red'
    },
    text:{
        fontSize:12,
        fontWeight:'bold',color:'white'
    }
})