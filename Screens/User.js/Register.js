import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useState} from 'react'
import FormContainer from '../../Shared/Form/FormContainer'
import Input from '../../Shared/Form/Input'
import Error from '../../Shared/Error'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
import baseUrl from '../../assets/Common/baseUrl'

const Register = (props) => {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('')

    const handleSubmit = ()=>{
      if (
          email ==="" || 
          password === "" ||
          name ==="" ||
          phone=== "" ){
          setError("Please fill in your credential!")
      }else{
          console.log('success')
      }
      let user ={
          name:name,
          email:email,
          password:password,
          phone:phone,
          isAdmin:false
      }
      axios
        .post(`${baseUrl}users/register`,user)
        .then(res=>{
            if(res.status == 200){
                
                setTimeout(()=>{
                    props.navigation.navigate("Login")
                },500)
            }
        })
        .catch((error)=>{
            
        });
  }

  return (
    <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        extraHeight={200}
        enableOnAndroid={true}
    >
        <FormContainer title={"Register"}>
            <Input
                placeholder={"Email"}
                name={"email"}
                id={"email"}
                onChangeText={text =>setEmail(text.toLowerCase())}
            />
            <Input
                placeholder={"Name"}
                name={"name"}
                id={"name"}
                onChangeText={text =>setName(text)}
            />
            <Input
                placeholder={"Phone"}
                name={"phone"}
                id={"phone"}
                keyboardType={'numeric'}
                onChangeText={text =>setPhone(text)}
            />
            <Input
                placeholder={"Password"}
                name={"password"}
                id={"password"}
                secureTextEntry={true}
                onChangeText={text =>setPassword(text)}
            />
            <View>
                {error ? <Error message={error}/>:null}
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Register' onPress={()=>handleSubmit()}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Back to Login' onPress={()=>props.navigation.navigate("Login")}/>
            </View>
        </FormContainer>
    </KeyboardAwareScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
    buttonContainer:{
        width:'80%',
        margin: 15,
        alignItems:'center'
    }
})