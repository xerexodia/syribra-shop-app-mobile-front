import { StyleSheet, Text, View,ScrollView,Button } from 'react-native'
import React,{useContext,useState,useCallback,useEffect} from 'react'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import axios from "axios"
import baseUrl from '../../assets/Common/baseUrl'
import AuthGlobal from '../../Context/Store/AuthGlobal'
import {logoutUser} from '../../Context/Actions/AuthActions'


const UserProfile = (props) => {
  const context = useContext(AuthGlobal)
  const[userProfile,setUserProfile]=useState()

  useEffect(() => {
    console.log(context.stateUser)
    if(
      context.stateUser.isAuthenticated === false || 
      context.stateUser.isAuthenticated === null
    ){
      props.navigation.navigate("Login")
    }
    AsyncStorage.getItem('jwt')
      .then(res=>{
        axios
          .get(`${baseUrl}users/${context.stateUser.user.userId}`,{
            headers:{Authorization:`Bearer ${res}`}
          })
          .then(user=>setUserProfile(user.data))
      })
          .catch(err=>console.log(err)) 
    return () => {   
      setUserProfile();
    } 
  }, [context.stateUser.isAuthenticated])
  

  return (
    <View>
      <ScrollView>
        <Text style={{fontSize:30}}>
          {userProfile?userProfile.name:""}  
        </Text>
        <View style={{marginTop:20}}>
          <Text style={{margin:10}}>
            Email: {userProfile ? userProfile.email :""}
          </Text>
          <Text style={{margin:10}}>
            Phone: {userProfile ? userProfile.phone :""}
          </Text>
        </View>
        <View style={{marginTop:80}}>
          <Button title='Sign Out' onPress={()=>[
            AsyncStorage.removeItem("jwt"),
            logoutUser(context.dispatch)
          ]}/>
        </View>
      </ScrollView>
    </View> 
  )
}

export default UserProfile

const styles = StyleSheet.create({}) 