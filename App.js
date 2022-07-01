import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,ScrollView } from 'react-native';
import { NativeBaseProvider,HStack,VStack,Spacer,Avatar, Text, Box,Heading,FlatList } from 'native-base';
import Headers from './Shared/Header';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Navigators/Main';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Auth from "./Context/Store/Auth"





export default function App() {
  
  return (
    <Auth>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Headers/>
            <Main/>
          </NavigationContainer>
         </NativeBaseProvider>
      </Provider>
    </Auth>
  );
}

const styles = StyleSheet.create({
});
