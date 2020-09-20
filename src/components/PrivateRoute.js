import React, { Component } from 'react';

import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({isloggedin, component : Component, ...rest}) => {
    console.log(isloggedin)
    return (
        <Route
        {...rest}
        component = {(props)=>(
            isloggedin ? (
                <Component {...props} />
            ) : <Redirect to="/login" />
        )}
        />
    )
}

export default PrivateRoute;