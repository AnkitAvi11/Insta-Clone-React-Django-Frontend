import React from 'react';

import { NavLink } from "react-router-dom";

const nav = (props) => {
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light justify-content-center">
    
            <div className="container">
                <NavLink className="navbar-brand" to="/" activeClassName="active">Devgram</NavLink>

            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup" activeClassName="active">Signup</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/help" activeClassName="active">Help</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default nav;