import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "../screens/Main/Home";
import { KeyboardAvoidingView, Platform } from "react-native";
import ProductDetails from "../screens/Main/ProductDetails";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import SignupScreen from "../screens/AuthScreens/SignupScreen";
import ChekoutNav from "./ChekoutNav";

const Stack = createStackNavigator();

const MainNav = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
    >
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Main" component={Home} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="CartView" component={ChekoutNav} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
};

export default MainNav;
