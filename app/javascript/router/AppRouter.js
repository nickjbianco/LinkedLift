import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LinkedLiftApp from '../components/LinkedLiftApp/LinkedLiftApp'
import MyNetworkPage from '../components/MyNetworkPage'
import JobsPage from '../components/JobsPage'
import HeaderPage from '../components/Header/HeaderPage'
import NotificationsPage from '../components/NotificationsPage'
import MyProfilePage from '../components/MyProfilePage/MyProfilePage'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'
import Cookies from 'js-cookie'

export default () => {
    const currentUserId = Cookies.get('user_id')

    return (
        <BrowserRouter>
            <div>   
                <HeaderPage />
                <Switch>
                    <Route path="/" component={LinkedLiftApp} exact={true} />
                    <Route path="/mynetwork" component={MyNetworkPage} />
                    <Route path="/jobs" component={JobsPage} />
                    <Route path="/notifications" component={NotificationsPage} />
                    <Route path={`/${currentUserId}`} component={MyProfilePage} /> 
                    <Route component={NotFoundPage} /> 
                </Switch>
            </div>
        </BrowserRouter>
    )
}
