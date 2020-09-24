import React from 'react';

import { NavLink } from "react-router-dom";

const nav = (props) => {

    let authenticationUrls = <React.Fragment>
                    <li className="nav-item">
                            <NavLink className="nav-link" to="/login" exact activeClassName="active">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup" exact activeClassName="active">Signup</NavLink>
                    </li>
                </React.Fragment>

    let privateurls = <React.Fragment>
        <li className="nav-item">
            <NavLink className="nav-link" to="/post/add" exact activeClassName="active">Add Post <i class="fas fa-plus"></i></NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/post/all" exact activeClassName="active">All Post</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link btn btn-danger" to="#" style={{color:'white'}}>Logout</NavLink>
        </li>
    </React.Fragment>

    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light justify-content-center">
    
            <div className="container">
                <NavLink className="navbar-brand" to="/" exact activeClassName="active">Devgram</NavLink>

            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        {props.isauthenticated ? null : authenticationUrls }
                        {props.isauthenticated ? privateurls : null}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default nav;