import { SET_CURRENT_USER } from "../Actions/AuthActions";
import isEmpty from "../../assets/Common/IsEmpty";

export default function(state,action){
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated:!isEmpty(action.payload),
                user:action.payload,
                userProfile:action.userProfile
            };
            default:
                return state;
    }
}