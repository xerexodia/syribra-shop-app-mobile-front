import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React,{useContext} from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import HomeNavigator from './HomeNavigators'
import { SafeAreaView } from 'react-native-safe-area-context'
import CartNavigator from './CartNavigator'
import IconCart from '../Shared/IconCart'
import UserNavigator from './UserNavigator'

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
   

    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={
            {
                keyboardHidesTabBar:false,
                showLabel:false,
                activeTintColor:"#e91e63",
                headerShown:false
            }
        }
    >
        <Tab.Screen 
            name='Home'
            component={HomeNavigator}
            options={{
                tabBarIcon:({color}) => (
                    <Icon
                        name='home'
                        style={{position:"relative"}}
                        color={color}
                        size={30}
                    />
                )
            }}
        />
        <Tab.Screen
            name='Cart'
            component={CartNavigator}
            options={{
                tabBarIcon:({color})=>(
                    <View>
                        <Icon
                        name='shopping-cart'
                        style={{position:"relative"}}
                        color={color}
                        size={30}
                    />
                    <IconCart/>
                    </View>
                    
                )
            }}
        />
        <Tab.Screen
            name='Admin'
            component={HomeNavigator}
            options={{
                tabBarIcon:({color})=>(
                    <Icon
                        name='cog'
                        color={color}
                        size={30}
                    />
                )
            }}
        />
        <Tab.Screen
            name='User'
            component={UserNavigator}
            options={{
                tabBarIcon:({color})=>(
                    <Icon
                        name='user'
                        color={color}
                        size={30}
                    />
                )
            }}
        />
    </Tab.Navigator>
      
    
  )
}

export default Main

const styles = StyleSheet.create({})