import React from 'react';

import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({isloggedin, component : Component, ...rest}) => {
    return (
        <Route
        {...rest}
        component = {(props)=>{return isloggedin ? <Component {...props}/> : <Redirect to="/login" {...props} /> }}
        />
    )
}

export default PrivateRoute;