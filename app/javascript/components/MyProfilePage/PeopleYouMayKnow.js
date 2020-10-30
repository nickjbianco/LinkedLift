import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usersThunk } from '../../reducers/UsersReducer'
import styled from 'styled-components'

export default () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(usersThunk())
    }, [])

    const Wrapper = styled.div`
        display: flex;
        background-color: yellow;
    `

    return (
        <Wrapper>
            <ul>
                <h1>People You May Know</h1>
                <p>User Name</p>
                <p>User Title</p>
            </ul>
        </Wrapper>
    )
}