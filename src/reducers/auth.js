let initialState = {
    user : null,
    loading : false,
    error : null,
    token : null
}

export const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'AUTH_START' : 
            return {
                ...state,
                loading : true
            }
        case 'AUTH_ERROR' : 
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        case 'AUTH_SUCCESS' : 
            return {
                ...state,
                loading: false,
                error : null,
                user : action.payload.auth,
                token : action.payload.token
            }
        case 'ERROR_DELETED' : 
            return {
                ...state,
                loading: false,
                error:null,
            }
        default : 
            return {
                ...state
            }
    }
}

const initSignupState = {
    loading : false, 
    error : null,
    user : null
}

export const signupReducer = (state=initSignupState, action) => {
    switch(action.type) {
        case 'SIGNUP_START' : 
            return {
                ...state,
                loading : true
            }
        case 'SIGNUP_ERROR' : 
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        case 'SIGNUP_SUCCESS' : 
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error : null,
                user : action.payload
            }
        case 'REMOVE_SUCCESS_ERROR' : 
            return {
                ...state,
                error : null
            }
        case 'REMOVE_USER' : 
            return {
                ...state,
                user : null
            }
        default : 
            return state;
    }
}
