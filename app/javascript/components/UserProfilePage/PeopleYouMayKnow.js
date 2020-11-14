import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { usersThunk } from '../../reducers/UsersReducer'
import styled from 'styled-components'

const Wrapper = styled.div`
        display: flex;
        background-color: yellow;
    `

export default () => {

    return (
        <Wrapper>
            <ul>
                <h1>People You May Know</h1>
                <p>place holder</p>
            </ul>
        </Wrapper>
    )
}

