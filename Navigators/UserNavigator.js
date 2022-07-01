import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/User.js/Login";
import Register from "../Screens/User.js/Register";
import UserProfile from "../Screens/User.js/UserProfile";



const Stack =createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
            <Stack.Screen
                name="User Profile"
                component={UserProfile}
            />
        </Stack.Navigator>
    )
}

export default function UserNavigator(){
    return <MyStack/>
}