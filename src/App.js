import React from 'react';

import Nav from './components/nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from './components/Notfound';
import Login from './containers/auth/login';
import Signup from './containers/auth/Signup';

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();    

class App extends React.Component {
    
    render()
    {
        return (
            <BrowserRouter history={history}>
                <div>
                    <Nav/>                    
                </div>

                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;