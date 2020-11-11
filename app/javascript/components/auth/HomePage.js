import React from 'react'
import axios from 'axios'
import Registration from './Registration'
import Login from './Login'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: blue;
    text-align: center;
`

const Register = styled.div`
    background-color: yellow;
`

const LoginInput = styled.div`
    background-color: green;
`

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
        <Wrapper>
            <h1>Linkedlift</h1>
            <h2>Status: {props.loggedInStatus}</h2>
            <Register>
                <h3>Don't have an account? Sign up below.</h3>
                <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
            </Register>
            <LoginInput>
                <h3>Already have an account? Login below.</h3>
                <Login handleSuccessfulAuth={handleSuccessfulAuth} />
            </LoginInput>
        </Wrapper>
    )
}