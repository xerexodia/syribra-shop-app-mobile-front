import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";
import DrawerNav from "./src/navigators.js/DrawerNav";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <DrawerNav />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
