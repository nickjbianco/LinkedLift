import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LinkedLiftApp from '../components/LinkedLiftApp/LinkedLiftApp'
import MyNetworkPage from '../components/MyNetworkPage/MyNetworkPage'
import GymsPage from '../components/GymsPage/GymsPage'
import HeaderPage from '../components/Header/HeaderPage'
import NotificationsPage from '../components/NotificationsPage/NotificationsPage'
import MyProfilePage from '../components/MyProfilePage/MyProfilePage'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'

export default (props) => {

    return (
        <BrowserRouter>
            <div>
                <HeaderPage {...props} />
                <Switch>
                    <Route path="/dashboard" component={LinkedLiftApp} exact />
                    <Route path="/mynetwork" component={MyNetworkPage} />
                    <Route path="/gyms" component={GymsPage} />
                    <Route path="/notifications" component={NotificationsPage} />
                    <Route path="/myprofile" component={MyProfilePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
