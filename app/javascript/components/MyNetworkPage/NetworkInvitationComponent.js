import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: blue;
    width: 50%;
` 

export default () => {
    return (
        <Wrapper>
            <h1>Pending invitations</h1>
        </Wrapper>
    )
}