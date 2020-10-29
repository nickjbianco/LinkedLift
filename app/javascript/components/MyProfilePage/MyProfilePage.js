import React from 'react'
import UserInfo from './UserInfo'
import SuggestedConnections from '../LinkedLiftApp/SuggestedConnections'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex; 
    justify-content: space-around;
    
`

export default () => {
    return (
        <Wrapper>
            <UserInfo />
            <SuggestedConnections />
        </Wrapper>
    )
}