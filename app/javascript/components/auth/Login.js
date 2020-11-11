import React, { useState } from 'react'
import axios from 'axios'

export default (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginErrors, setLoginErrors] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/sessions", {
            user: {
                email,
                password
            }
        },
            { withCredentials: true }
        ).then(response => {
            if (response.data.logged_in) {
                props.handleSuccessfulAuth(response.data)
            }
        }).catch(error => {
            console.log("login error", error)
        })
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" >Login</button>
            </form>
        </div>
    )
}

