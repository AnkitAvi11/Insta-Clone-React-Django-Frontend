
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
