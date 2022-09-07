import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import EditProfile from "../screens/userScreens/EditProfile";
import { KeyboardAvoidingView, Platform } from "react-native";
import ProfileScreen from "../screens/userScreens/ProfileScreen";

const Stack = createStackNavigator();

const ProfileNav = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
    >
      <Stack.Navigator
        initialRouteName="ViewProfile"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="ViewProfile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
};

export default ProfileNav;
