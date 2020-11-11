import React from 'react'
import axios from 'axios'
import Registration from './Registration'
import Login from './Login'

export default (props) => {
    const handleSuccessfulAuth = (data) => {
        props.handleLogIn(data)
        props.history.push('/dashboard')
    }

    const handleLogoutClick = () => {
        axios.delete("http://localhost:3000/logout", { withCredentials: true }).then(response => {
            props.handleLogOut()
        }).catch(error => {
            console.log("logout error", error)
        })
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Status: {props.loggedInStatus}</h2>
            <p>Register below</p>
            <button onClick={() => handleLogoutClick()}>Logout</button>
            <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
            <Login handleSuccessfulAuth={handleSuccessfulAuth} />
        </div>
    )
}