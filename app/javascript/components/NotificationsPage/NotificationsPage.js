import React from 'react'
import NotfificatioFeedComponent from './NotificationFeedComponent'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: red;
    justify-content: space-around;
`

const Sidebar = styled.div`
    background-color: blue;
    width: 20%;
`

const NotificationFeed = styled.div`
    background-color: yellow;
    width: 50%;
`


export default () => {
    return (
        <Wrapper>
            <Sidebar>
                <h1>Number of notifcations here</h1>
            </Sidebar>
            <NotificationFeed>
                <NotfificatioFeedComponent />
            </NotificationFeed>
        </Wrapper>
    )
}