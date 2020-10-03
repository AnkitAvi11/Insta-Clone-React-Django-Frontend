import React, { Component } from 'react';

import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({isloggedin, component : Component, ...rest}) => {
    return (
        <Route
        {...rest}
        component = {(props)=>{return isloggedin ? <Component {...props} isloggedin={isloggedin} /> : <Redirect to="/login" {...props} /> }}
        />
    )
}

const myPrivateRoute = ({isloggedin, component : Component, ...rest}) => {
    return (
        <Route
        {...rest}
        component={
            (props) => (
                isloggedin ? 
                <Component 
                {...props}
                isloggedin={isloggedin}
                />
                : <Redirect 
                path='/login'
                />
            )
        }
        />
    )
}

export default PrivateRoute;