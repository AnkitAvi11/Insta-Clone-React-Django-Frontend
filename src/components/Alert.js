import React from 'react';
const Danger = (props) => {
    return (
        <div className="alert alert-danger" role="alert">
            <strong>Holy guacamole!</strong> {props.message}            
        </div>
    )
}

export default Danger;