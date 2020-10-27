import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LinkedLiftApp from '../components/LinkedLiftApp'
import MyNetworkPage from '../components/MyNetworkPage'
import JobsPage from '../components/JobsPage'
import HeaderPage from '../components/HeaderPage'
import NotificationsPage from '../components/NotificationsPage'

export default () => {
    return (
        <BrowserRouter>
            <div>   
                <HeaderPage />
                <Switch>
                    <Route path="/" component={LinkedLiftApp} exact={true}/>
                    <Route path="/mynetwork" component={MyNetworkPage} />
                    <Route path="/jobs" component={JobsPage} />
                    <Route path="/notifications" component={NotificationsPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
