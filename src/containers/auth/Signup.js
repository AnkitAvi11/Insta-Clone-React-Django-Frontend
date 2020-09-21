import { Component } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { signupUser } from "../../actions/auth";
import { withAlert } from "react-alert";

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
        if (this.state.email === "")
            return this.props.alert.show('Enter a valid email address', {type:'error', timeout : 3000})
        if (this.state.password === "")
            return this.props.alert.show('Enter a valid password', {type:'error', timeout : 3000})
        if (this.state.username === "")
            return this.props.alert.show('Enter a valid username', {type:'error', timeout : 3000})

        this.props.signupUser(this.state.username, this.state.email, this.state.password)

        this.setState({
            username : '',
            email : '',
            password : ''
        })
                
    } 

    onFormChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidUpdate = () => {
        if(this.props.user.error) {
            return this.props.alert.show('Signup Failed', {type : 'error', timeout : 3000})
        }
        if(this.props.user.user) {
            return this.props.alert.show('Signup Successful. Login to continue.', {type : 'success', timeout : 3000})
        }
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
                                        <input type="submit" value={this.props.user.loading ? 'Singing up' : 'Signup'} className="btn btn-primary" style={{width:"100%"}} />
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

const mapStateToProps = (state) => {
    console.log(state.user_created)
    return {
        user : state.user_created
    }
}

export default withAlert()(connect(mapStateToProps,{signupUser})(Signup));

