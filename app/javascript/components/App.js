import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './auth/HomePage'
import AppRouter from '../router/AppRouter'

export default (props) => {
    const [loggedInStatus, setLoggedIn] = useState('NOT_LOGGED_IN')
    const [user, setUser] = useState({})

    useEffect(() => {
        checkLoginStatus()
    }, [])

    const handleLogIn = (data) => {
        setLoggedIn('LOGGED_IN')
        setUser({ user: data.user })
    }

    const handleLogOut = () => {
        setLoggedIn('NOT_LOGGED_IN')
        setUser({})
    }

    const checkLoginStatus = () => {
        axios.get("http://localhost:3000/logged_in", { withCredentials: true }).then(response => {
            if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
                setLoggedIn('LOGGED_IN')
                setUser({ user: response.data.user })
            } else if (!response.data.logged_in && loggedInStatus === 'LOGGED_IN') {
                setLoggedIn('NOT_LOGGED_IN')
                setUser({}) 
            }
        }).catch(error => {
            console.log("check login error", error)
        })
    }

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route 
                        exact 
                        path="/" 
                        render={props => (
                            <Home 
                                {...props} 
                                handleLogIn={handleLogIn} 
                                loggedInStatus={loggedInStatus} 
                                handleLogOut={handleLogOut}
                            />
                        )}
                    />
                    <Route 
                        exact 
                        path="/dashboard" 
                        render={props => (
                            <AppRouter 
                                {...props} 
                                loggedInStatus={loggedInStatus} 
                                handleLogOut={handleLogOut}
                            />
                        )}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    )
}