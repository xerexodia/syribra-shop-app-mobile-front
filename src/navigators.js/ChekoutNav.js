import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import CartScreen from "../screens/Main/CartScreen";
import Shipping from "../screens/chekout/Shipping";
import Payment from "../screens/chekout/Payment";
import Confirm from "../screens/chekout/Confirm";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Shipping"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        tabBarItemStyle: { marginTop: 20 },
        swipeEnabled: false,
      }}
    >
      <Tab.Screen name="Shipping" component={Shipping} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const ChekoutNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Tab.Screen name="CartScreen" component={CartScreen} />

      <Tab.Screen
        options={{ headerShown: true }}
        name="Checkout"
        component={TopTab}
      />
    </Stack.Navigator>
  );
};

export default ChekoutNav;
