import { StyleSheet, Text, View,ScrollView,Dimensions,Image,Button } from 'react-native'
import React from 'react'

import { connect } from 'react-redux'
import * as actions from '../../../Redux/Actions/cartActions'


var {height,width} = Dimensions.get('window')

const Confirm = (props) => {


  const confirmOrder = ()=>{
    setTimeout(()=>{
      props.clearCart();
      props.navigation.navigate("Cart")
    })
  }
  const confirm = props.route.params
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>
          Confirm Order
        </Text>
        {
          confirm ? 
          <View style={{borderWidth:1,borderColor:'orange'}}>
            <Text style={styles.title}>
              Shipping to :
            </Text>
            <View style={{padding:8}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>Address:</Text>
                <Text style={{marginLeft:15}}> {confirm.order.order.shippingAddress1}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>Address2:</Text>
                <Text style={{marginLeft:15}}> {confirm.order.order.shippingAddress2}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>Country:</Text>
                <Text style={{marginLeft:15}}> {confirm.order.order.country}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>City:</Text>
                <Text style={{marginLeft:15}}> {confirm.order.order.city}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>Zip Code:</Text>
                <Text style={{marginLeft:15}}> {confirm.order.order.zip}</Text>
              </View>
              
            </View>
            <Text style={styles.title}>Items</Text>
            {confirm.order.order.orderItems.map(x=>{
              return(
                <View style={styles.listItem} key={x.product.name}>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image source={{uri:x.product.image}} style={{height:60, width:60}} resizeMode='contain'/>
                    <Text>{x.product.name}</Text>
                  </View>
                  <View style={{marginRight:9}}>
                    <Text style={{color:'red',fontWeight:'bold'}}>$ {x.product.price}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        :null}
        <View style={{alignItems:'center',margin:20}}>
          <Button title='Place order' onPress={confirmOrder}/>
        </View>
      </View>
    </ScrollView>
  )
}
const mapDispatchToProps = (dispatch)=>{
  return{
    clearCart:()=> dispatch(actions.clearCart())
  }
}
export default connect(null,mapDispatchToProps)(Confirm)

const styles = StyleSheet.create({
  container:{
    height: height,
    padding: 8,
    alignContent:'center',
    backgroundColor:'white'
  },
  titleContainer:{
    justifyContent:'center',
    alignItems:'center',
    margin:8
  },
  title:{
    alignSelf:'center',
    margin:8,
    fontSize:16,
    fontWeight:'bold'
  },
  listItem:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:width/1.2
  }
})