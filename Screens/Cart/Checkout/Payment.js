import { StyleSheet, Text, View,Button,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import {  Actionsheet, useDisclose,  Box, Center } from "native-base";

const paymentCards =[
  {name:'Wallet',id:1},
  {name:'Visa',id:2},
  {name:'MasterCard',id:3},
  {name:'Other',id:4},
]
const methods= [
  {name:'Cash on Delivery',value:1},
  {name:'Bank Transfer',value:2},
  {name:'Card Payment :',value:3},
]

const Payment = (props) => {
  const order = props.route.params;

  const [selected,setSelected]=useState();
  const [card,setCard]=useState()

  

  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  

  return (
    <View style={{height:'100%'}} onStartShouldSetResponder={() => {setSelected();setCard();}}>
      <View style={{height:60,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:23,fontWeight:'bold'}}>Choose your payment method</Text>
      </View>
      <View>
        {
          methods.map((item,index)=>{
            return(
              <Pressable 
                key={item.value}
                onPress={()=>{
                  setSelected(item.value)
                  onOpen()
                  }} >
                {  selected==item.value ? (
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:60,backgroundColor:'white',elevation:50,marginBottom:5}}>
                  <Text style={{fontSize:21,fontWeight:'bold',marginLeft:8}}>{item.name}</Text>
                  <Icon
                        name='check'
                        style={{fontSize:25,color:'green',marginRight:5}}
                        size={26}
                    />
                </View>
                
                ):(<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:60,backgroundColor:'white',elevation:50,marginBottom:5}}>
                  <Text style={{fontSize:21,fontWeight:'bold',marginLeft:8}}>{item.name}</Text>
                </View>)
                }
                {
                  selected == 3 ? ( 
                    
                        <Actionsheet isOpen={isOpen} onClose={onClose}>
                      <Actionsheet.Content>
                        <Box w="100%" h={60} px={4} justifyContent="center">
                          <Text fontSize="16" color="gray.500" _dark={{
                            color: "gray.300"
                          }}>
                            Card
                          </Text>
                        </Box>
                        {paymentCards.map((c)=>{
                          return(
                          <Actionsheet.Item 
                          key={c.value}
                            onPress={()=>{setCard(c.id)}}
                          >
                            {c.name}
                          </Actionsheet.Item>)})}
                      </Actionsheet.Content>
                    </Actionsheet>
                  ):null
                }
              </Pressable>
          )
          })
        }{
          card && selected==3 ? (
                    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',elevation:20,height:45,width:'80%',alignSelf:'center',justifyContent:'space-between'}}>
                      <Text style={{fontSize:19,fontWeight:'bold',marginLeft:16}}>{paymentCards[card-1].name} </Text>
                      <Icon
                        name='check'
                        style={{fontSize:25,color:'green',marginRight:5}}
                        size={26}
                      />  
                    </View>
                  ):null
        }
      </View>
      <View style={{position:'absolute',bottom:15,alignSelf:'center',elevation:20}}>
        <Button 
          title='Confirm'
          onPress={()=>props.navigation.navigate("Confirm",{order})}
        />
      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})