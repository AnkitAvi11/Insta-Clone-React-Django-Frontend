import { Component } from "react";
import React from 'react';
import { Link } from "react-router-dom";

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            username : "",
            email : "",
            password : ""
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.username === "" || this.state.email === "" || this.state.password === "") {
            console.log("Eror")
        }else{
            console.log('All good')
        }
    } 

    onFormChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render () {
        return (
            <div className="container" style={{marginTop:"20px"}}>
                <div className="row">
                    <div className="col-sm-5" style={{margin:"auto"}}>
                        <div className="card">
                            <div className="card-body">
                                <form action="" onSubmit={this.onFormSubmit}>
                                    <h3>Signup</h3>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" id="username" className="form-control"
                                        onChange={this.onFormChange}
                                        value={this.state.username}

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" name="email" id="email" className="form-control"
                                        onChange={this.onFormChange}
                                        value={this.state.email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" className="form-control"
                                        onChange={this.onFormChange}
                                        value={this.state.password}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Signup" className="btn btn-primary" style={{width:"100%"}} />
                                    </div>
                                    <div className="form-group">
                                        <p>Already have an account ? <Link to="/login">Login</Link></p>
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

export default Signup;

