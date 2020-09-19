import { Component } from "react";
import React from 'react';
import {Link} from 'react-router-dom'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username : '',
            password : '',
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render () {
        return (
            <div className="container" style={{marginTop : "20px"}}>
                <div className="row">
                    <div className="col-sm-5" style={{margin:'auto'}}>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.onFormSubmit}>
                                    <h3>Login</h3>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" id="username" className="form-control"
                                        onChange={this.onInputChange}
                                        value={this.state.username}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" className='form-control' 
                                        onChange={this.onInputChange}
                                        value={this.state.password}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Login" 
                                        className="btn btn-primary" style={{width:"100%"}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        Don't have an account ? <Link to="/signup">Signup</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;

