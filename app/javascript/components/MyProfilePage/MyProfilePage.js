import React from 'react'
import UserInfo from './UserInfo'
import EmploymentInfo from './EmploymentInfo'
import SuggestedConnections from '../LinkedLiftApp/SuggestedConnections'

export default () => {
    return (
        <div>
            <UserInfo />
            <EmploymentInfo />
            <SuggestedConnections />
        </div>
    )
}