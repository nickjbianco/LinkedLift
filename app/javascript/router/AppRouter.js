import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LinkedLiftApp from '../components/LinkedLiftApp'

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={LinkedLiftApp} exact={true}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
