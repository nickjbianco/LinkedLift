import React from 'react'

export default (props) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>{props.loggedInStatus}</p>
        </div>
    )
}