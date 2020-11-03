import React from 'react'
import UserInfo from './UserInfo'
import PeopleYouMayKnow from './PeopleYouMayKnow'
import styled from 'styled-components'
import Cookies from 'js-cookie'

const Wrapper = styled.div`
    display: flex; 
    justify-content: space-evenly;
    background-color: red;
`

export default () => {
    const currentUserId = Cookies.get('user_id')

    return (
        <Wrapper>
            <UserInfo currentUserId={currentUserId} />
            <PeopleYouMayKnow />
        </Wrapper>
    )
}