import React from 'react'
import MyPost from './MyPost'
import MyAccountInfo from './MyAccountInfo'
import SuggestedConnections from './SuggestedConnections'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: red;
    justify-content: center;
`

const ColumnContainer = styled.div`
    padding: 0 30px;
    display: flex;
    width: 90%;
`

const LeftColumn = styled.div`
    flex-grow: 1;
    background-color: blue;
`

const MiddleColumn = styled.div`
    flex-grow: 4;
    background-color: green;
`

const RightColumn = styled.div`
    flex-grow: 2;
    background-color: yellow;
`

export default () => {
    return (
        <Wrapper>
            <ColumnContainer>
                <LeftColumn>
                    <MyAccountInfo />
                </LeftColumn>
                <MiddleColumn>
                    <MyPost />
                </MiddleColumn>
                <RightColumn>
                    <SuggestedConnections />
                </RightColumn>
            </ColumnContainer>
        </Wrapper>
    )
}