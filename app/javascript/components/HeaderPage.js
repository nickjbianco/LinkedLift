import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    background-color: var(--blue-70,#0073b1);
    color: white;
    font-weight: 600;
    padding: 0;
    font-size: 100%;
    cursor: pointer;
    margin-left: 8px;
    line-height: 1.2;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
`
const Header = styled.header`
    background-color: var(--cool-gray-80,#283e4a);
`

const Input = styled.input`
    color: rgba(var(--cool-gray-80,#283e4a),.75);
    font-weight: 400;
    font-size: 14px;
    background-color: var(--cool-gray-30,#e1e9ee);
    border-color: var(--cool-gray-30,#e1e9ee);
    border: .1rem solid rgba(0,0,0,.6);
    vertical-align: middle;
`

const Span = styled.span`
    float: right;
    cursor: pointer;
`

export default () => {
    const [searchText, setSearchText] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
        setSearchText('')
    }

    return (
        <div>
            <Header>
                <form onSubmit={handleSearch}>
                    <Input
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button>Search</Button>
                </form>
                <Span>
                    <NavLink to="/" exact={true} activeClassName="is-active" >Home</NavLink>
                    <NavLink to="/mynetwork" activeClassName="is-active" >My Network</NavLink>
                    <NavLink to="/jobs" activeClassName="is-active" >Jobs</NavLink>
                    <NavLink to="/notifications" activeClassName="is-active" >Notifications</NavLink>
                </Span>
            </Header>
        </div>
    )
}