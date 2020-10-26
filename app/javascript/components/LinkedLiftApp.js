import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import HeaderPage from './HeaderPage'

export default () => {
    return (
        <div>
            <HeaderPage />
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
            </Switch>
        </div>
    )
}