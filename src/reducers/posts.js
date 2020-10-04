import { act } from "react-dom/test-utils"

const initialState = {
    loading : false,
    error : null,
    post : null
}

export const addPost = (state=initialState, action) => {
    switch(action.type) {
        case 'POST_START' : 
            return {
                ...state,
                loading : true
            }

        case 'POST_ERROR' : 
            return {
                ...state,
                loading : false,
                error : action.payload
            }

        case 'POST_SUCCESS' : 
        return {
            ...state,
            loading : false,
            error : null,
            post : action.payload
        }

        case 'REMOVE_ERROR' : 
        return {
            ...state,
            loading : false,
            error : null
        }

        default :
        return state
    }
}