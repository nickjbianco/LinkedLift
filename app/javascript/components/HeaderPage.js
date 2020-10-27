import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
    const [searchText, setSearchText] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
        setSearchText('')
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button>Search</button>
            </form>
            <NavLink to="/" exact={true} activeClassName="is-active" >Home</NavLink>
            <NavLink to="/mynetwork" activeClassName="is-active" >My Network</NavLink>
            <NavLink to="/jobs" activeClassName="is-active" >Jobs</NavLink>
            <NavLink to="/notifications" activeClassName="is-active" >Notifications</NavLink>
        </div>
    )
}