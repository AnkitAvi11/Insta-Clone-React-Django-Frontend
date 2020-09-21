import { authReducer, signupReducer } from "./auth";
import { combineReducers } from "redux";

export default combineReducers({
    auth : authReducer,
    user_created : signupReducer
})