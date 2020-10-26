import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
    return (
        <div>
            <NavLink to="/" exact={true} activeClassName="is-active" >Home</NavLink>
        </div>
    )
}