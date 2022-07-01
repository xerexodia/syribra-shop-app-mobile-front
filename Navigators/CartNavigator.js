import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CheckoutNavigator from "./CheckoutNavigator";
import Cart from '../Screens/Cart/Cart'

const Stack = createStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
            <Stack.Screen
                name="Checkout"
                component={CheckoutNavigator}
                options={{
                    title:'Checkout'
                }}
            />
        </Stack.Navigator>
    )
}
export default function CartNavigator(){
    return <MyStack/>
}

