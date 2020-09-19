import React from 'react';

const nav = (props) => {
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light justify-content-center">
    
            <div className="container">
                <a className="navbar-brand" href="#">Devgram</a>

            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default nav;