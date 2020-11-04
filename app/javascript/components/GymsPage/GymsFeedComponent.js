import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: blue;
`

export default () => {
    return (
        <Wrapper>
            <h1>list of searched gyms</h1>
            <p>Gym 1</p>
            <p>Gym 2</p>
        </Wrapper>
    )
}