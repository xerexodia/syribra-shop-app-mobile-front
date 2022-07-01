import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import FormContainer from '../../Shared/Form/FormContainer'
import Input from '../../Shared/Form/Input'
import Error from '../../Shared/Error'

import AuthGlobal from "../../Context/Store/AuthGlobal"
import {loginUser} from '../../Context/Actions/AuthActions'


const Login = (props) => {
  const context = useContext(AuthGlobal)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  
  useEffect(()=>{
    if(context.stateUser.isAuthenticated === true){
      props.navigation.navigate("User Profile")
    }
  },[context.stateUser.isAuthenticated])


  const handleSubmit = ()=>{
      const user ={
          email,
          password
      }
      if (email ==="" || password === ""){
          setError("Please fill in your credential!")
      }else{
          loginUser(user,context.dispatch)
      }
  }
  
  return (
    <FormContainer title={'Login'}>
      <Input
        placeholder={'Enter Your Email'}
        name={"email"}
        id={"email"}
        value={email}
        onChangeText={text=> setEmail(text.toLowerCase())}
      />
      <Input
        placeholder={'Enter Your Password'}
        name={"password"}
        id={"password"}
        sourceTextEntry={true}
        value={password}
        onChangeText={text=> setPassword(text.toLowerCase())}
      />
      <View style={styles.buttonContainer}>
          {error ? <Error message={error}/>:null}
          <Button title='Login' onPress={()=>handleSubmit()}/>
      </View>
      <View style={[{marginTop:40},styles.buttonContainer]}>
            <Text style={{marginBottom:20,alignSelf:'center'}}>
              Don't have an account yet?
            </Text>
            <Button title='Register' onPress={()=> props.navigation.navigate("Register")}/>
      </View>
    </FormContainer>
  )
}

export default Login

const styles = StyleSheet.create({
    buttonContainer:{
        width: "80%",
        alignItems:'center'
    }
})