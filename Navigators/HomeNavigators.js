import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductContainer from '../Screens/Products/ProductContainer'
import React from 'react'
import SingleProduct from '../Screens/Products/SingleProduct';
import CartNavigator from './CartNavigator';


const Stack = createNativeStackNavigator();


function MyStack(){
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen 
            name='Home'
            component={ProductContainer}
        />
        <Stack.Screen 
            name='Product Detail'
            component={SingleProduct}
        />
        <Stack.Screen 
            name='Cart'
            component={CartNavigator}
        />
    </Stack.Navigator>
  )
}

export default function HomeNavigator(){
    return <MyStack/>
}

const styles = StyleSheet.create({})