import React from 'react'
import styled from 'styled-components'

export default () => {
    const Wrapper = styled.div`
        display: flex;
        background-color: yellow;
    `

    return (
        <div>
            <Wrapper>
                <h1>People you may know component</h1>
            </Wrapper>
        </div>
    )
}