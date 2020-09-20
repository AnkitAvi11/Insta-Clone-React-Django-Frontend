import React from 'react';

import Nav from './components/nav';
import { Router, Route, Switch } from "react-router-dom";

import NotFound from './components/Notfound';
import Login from './containers/auth/login';
import Signup from './containers/auth/Signup';
import { connect } from "react-redux";

// import { createBrowserHistory } from "history";
// export const history = createBrowserHistory();

import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

const afterLogin = () => {
    return (
        <h2>After login</h2>
    )
}

class App extends React.Component {
    
    render()
    {
        console.log(this.props.user)
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
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
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
        token : state.auth.token
    }
}

export default connect(mapStateToProps)(App);