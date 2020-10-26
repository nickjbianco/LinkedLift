import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import HeaderPage from './HeaderPage'

export default () => {
    return (
        <div>
            <HeaderPage />
            <p>This is the linked lift app, the header is above</p>
        </div>
    )
}