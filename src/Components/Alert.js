import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height: "45px"}}>
        {props.mode && <div className="alert alert-success" role="alert">
            {props.mode}
        </div>}
        </div>
    )
}
