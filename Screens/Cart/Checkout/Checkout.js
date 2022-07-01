import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useEffect,useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Input from '../../../Shared/Form/Input'
import FormContainer from '../../../Shared/Form/FormContainer'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {connect} from 'react-redux'





const Checkout = (props) => {


const [orderItems,setOrderItems]=useState();
const [address,setAddress]=useState();
const [address2,setAddress2]=useState();
const [city,setCity]=useState();
const [zip,setZip]=useState();
const [country,setCountry]=useState();
const [phone,setPhone]=useState();


useEffect(() => {
  setOrderItems(props.cartItems)

  return () => {
      setOrderItems();
  }
}, [])

const checkout =()=>{
  let order ={
    city,
    country,
    dateOrdred:Date.now(),
    orderItems,
    shippingAddress1:address,
    shippingAddress2:address2,
    zip,
  }

  props.navigation.navigate("Payment",{order: order})
}
  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={"Shipping Adddress"}>
        <Input
          placeholder={"Phone"}
          name={"phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text)=>setPhone(text)}
        />
        <Input
          placeholder={"Shipping Address 1"}
          name={"shipping address 1"}
          value={address}
          onChangeText={(text)=>setAddress(text)}
        />
        <Input
          placeholder={"Shipping Address 2"}
          name={"shipping address 2"}
          value={address2}
          onChangeText={(text)=>setAddress2(text)}
        />
        <Input
          placeholder={"Country"}
          name={"country"}
          value={country}
          onChangeText={(text)=>setCountry(text)}
          autoComplete={"postal-address-country"}
        />
        <Input
          placeholder={"City"}
          name={"city"}
          value={city}
          onChangeText={(text)=>setCity(text)}
        />
        <Input
          placeholder={"Zip Code"}
          name={"zip"}
          value={zip}
          keyboardType={"numeric"}
          onChangeText={(text)=>setZip(text)}
        />
        <View style={{width:'80%',alignItems:'center'}}>
          <Button title='Confirm' onPress={()=>checkout()}/>
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  )
}

const mapStateToProps =(state)=>{
  const{cartItems}=state;
  return {
    cartItems:cartItems
  }
}

export default connect(mapStateToProps)(Checkout)

const styles = StyleSheet.create({})