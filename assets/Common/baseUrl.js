import { Platform } from "react-native";

let baseUrl ='';

{Platform.OS == 'android'?
    baseUrl='http://10.0.2.2:5000/api/v1/'
    : baseUrl = 'http://localhost:5000/api/v1/'
}

export default baseUrl;