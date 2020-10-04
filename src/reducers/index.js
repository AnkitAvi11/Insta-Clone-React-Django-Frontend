import { authReducer, signupReducer } from "./auth";
import { combineReducers } from "redux";
import { addPost } from "./posts";

export default combineReducers({
    auth : authReducer,
    user_created : signupReducer,
    post : addPost
})