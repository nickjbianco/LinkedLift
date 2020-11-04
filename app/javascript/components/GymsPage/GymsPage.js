import React from 'react'
import GymSearchComponent from './GymSearchComponent'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: red;
    justify-content: center;
`

export default () => {
    return (
        <Wrapper>
            <GymSearchComponent />
        </Wrapper>
    )
}