import React from 'react'
import ManageMyNetworkComponent from './ManageMyNetworkComponent'
import NetworkInvitationComponent from './NetworkInvitationComponent'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: red;
`

export default () => {
    return (
        <Wrapper>
            <ManageMyNetworkComponent />
            <NetworkInvitationComponent />
        </Wrapper>
    )
}