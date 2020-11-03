import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usersThunk } from '../../reducers/UsersReducer'
import styled from 'styled-components'

const Wrapper = styled.div`
        display: flex;
        background-color: yellow;
    `

export default () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(usersThunk())
    }, [])

    return (
        <Wrapper>
            <ul>
                <h1>People You May Know</h1>
                {users.map((user) => (
                    <ul key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.title}</p>
                    </ul>
                ))}
            </ul>
        </Wrapper>
    )
}