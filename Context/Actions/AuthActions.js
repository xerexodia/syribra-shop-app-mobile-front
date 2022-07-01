import jwt_decode from "jwt-decode"
import AsyncStorage from "@react-native-async-storage/async-storage"
import baseUrl from "../../assets/Common/baseUrl"


export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const loginUser = (user,dispatch)=>{
    fetch(`${baseUrl}users/login`,{
        method:"POST",
        body: JSON.stringify(user),
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
        },
    })
    .then(res=>res.json())
    .then(data=>{
        if(data){
            const token = data.token;
            AsyncStorage.setItem('jwt',token)
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded,user))
        }else {
            logoutUser(dispatch)
        }
    })
    .catch(err=>{
        logoutUser(dispatch)
    })
}

export const getUserProfile=(id)=>{
    fetch(`${baseUrl}/users/${id}`,{
        method:"Get",
        body:JSON.stringify(user),
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
        },
    })
    .then(res=> res.json())
    .then(data=>console.log(data))
}

export const logoutUser = (dispatch)=>{
    AsyncStorage.removeItem('jwt');
    dispatch(setCurrentUser())
}

export const setCurrentUser = (decoded,user)=>{
    return{
        type:SET_CURRENT_USER,
        payload:decoded,
        userProfile:user
    }
}