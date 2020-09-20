import React from 'react';

import Nav from './components/nav';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import NotFound from './components/Notfound';
import Login from './containers/auth/login';
import Signup from './containers/auth/Signup';
import { connect } from "react-redux";

import PrivateRoute from './components/PrivateRoute'

import createHistory from 'history/createBrowserHistory';
export const history = createHistory();



const afterLogin = () => {
    return (
        <h2>user loggedin</h2>
    )
}
const MyRoute = ()  => {
    return (
        <h3>Private hai bhai</h3>
    )
}

class App extends React.Component {
    
    render()
    {
        
        let route = (()=>{
            if(this.props.user === null) {
                return <Route path="/" exact component={Login} />
            }else{
                return <Route path="/" exact component={afterLogin} />
            }
        })()
        return (
            <Router history={history}>
                <div>
                    <Nav user={this.props.user} />                    
                    <Switch>
                        {route}

                        <Route path="/login" component={(props)=>(this.props.isAuthenticated ? <Redirect to="/"/> : <Login {...props}/>)}/>              
                        <Route path="/signup" component={(props)=>(this.props.isAuthenticated ? <Redirect to="/"/> : <Signup {...props}/>)}/>       
                               
                        <PrivateRoute path="/post" component={MyRoute} isloggedin={this.props.isAuthenticated} />

                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        user : state.auth.user,
        token : state.auth.token,
        isAuthenticated : state.auth.user ? true : false
    }
}

export default connect(mapStateToProps)(App);