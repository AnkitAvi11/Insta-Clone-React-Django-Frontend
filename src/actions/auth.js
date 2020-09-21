
import { history } from "../App";
import { baseUrl } from "../App";

const authStart = () => {
    console.log('auth start')
    return {
        type : 'AUTH_START'
    }
}

const authSuccess = (payload) => {
    console.log('auth success')
    return {
        type : 'AUTH_SUCCESS',
        payload : payload
    }
}

const authError = (err) => {
    console.log('auth error')
    return {
        type : 'AUTH_ERROR',
        payload : err
    }
}

const removeError = () => {
    console.log('remove alert')
    return {
        type : 'ERROR_DELETED'
    }
}

export const loginUser = (username, password) => {
    return async(dispatch) => {
        await dispatch(authStart());
        let data = new FormData()
        data.append('username', username);
        data.append('password', password)
        fetch("http://127.0.0.1:8000/auth/login/", {
            method : "POST",
            body : data
        }).then(res => res.json())
        .then(data => {
            if (data.status || data.status === 'Error') {
                throw new Error("Invalid username or password")
            }
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', data.auth);
            dispatch(authSuccess(data))
            history.push('/');
        }).catch(err => {
            dispatch(authError(err.message))
            dispatch(removeError())
        })
    }
}

//  signup action
const signupStart = () => {
    
    return {
        type : 'SIGNUP_START'
    }
}

const signupSuccess = (user) => {
    
    return {
        type : 'SIGNUP_SUCCESS',
        payload : user
    }
}

const signupError = (error) => {
    
    return {
        type : 'SIGNUP_ERROR',
        payload : error
    }
}

const removeSignupError = () => {
    return {
        type : 'REMOVE_SUCCESS_ERROR'
    }
}

export const signupUser = (username, email, password) => {
    return async(dispatch) => {
        await dispatch(signupStart());
        let data = new FormData();
        data.append('username', username);
        data.append('email', email);
        data.append('password', password);

        fetch(`${baseUrl}auth/signup/`, {
            method : "POST",
            body : data
        })
        .then(res => {
            return res.json()
        })
        .then(user => {
            dispatch(signupSuccess(user));
        }).catch(err => {
            dispatch(signupError(err.message));
            dispatch(removeSignupError())
        });
        
    }
}
