import React from 'react';

const loader = (props) => {
    return(
        <div className="d-flex justify-content-center align-items-center" style={{marginTop : "150px"}}>
            <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default loader;

