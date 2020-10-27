import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
    return (
        <div>
            <NavLink to="/" exact={true} activeClassName="is-active" >Home</NavLink>
            <NavLink to="/mynetwork" activeClassName="is-active" >My Network</NavLink>
            <NavLink to="/jobs" activeClassName="is-active" >Jobs</NavLink>
        </div>
    )
}