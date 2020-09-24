import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";
import AllPosts from './AllPosts';
import AddPost from './AddPost';

class Posts extends Component {
    render() {
        
        return (
            <Switch>
                <Route path={`${this.props.match.path}`} exact component={AllPosts} />
                <PrivateRoute path={`${this.props.match.path}/add`} exact component={AddPost} isloggedin={this.props.isloggedin} />
                <Route path={`${this.props.match.path}/all`} exact component={AllPosts} />
                <Route exact component={()=><h2>Not Found</h2>} />
            </Switch>
        )
    }
}

export default Posts;