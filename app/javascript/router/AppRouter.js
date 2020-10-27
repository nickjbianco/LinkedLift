import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LinkedLiftApp from '../components/LinkedLiftApp'
import MyNetworkPage from '../components/MyNetworkPage'
import JobsPage from '../components/JobsPage'
import HeaderPage from '../components/HeaderPage'

export default () => {
    return (
        <BrowserRouter>
            <div>   
                <HeaderPage />
                <Switch>
                    <Route path="/" component={LinkedLiftApp} exact={true}/>
                    <Route path="/mynetwork" component={MyNetworkPage} />
                    <Route path="/jobs" component={JobsPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
