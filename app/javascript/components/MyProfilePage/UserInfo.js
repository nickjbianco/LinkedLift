import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usersThunk } from '../../reducers/UsersReducer'
import EmploymentInfo from './EmploymentInfo'
import styled from 'styled-components'

const Wrapper = styled.div`
        display: flex;
        background-color: blue;
    `

export default () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(usersThunk())
    }, [])

    return (
        <div>
            <Wrapper>
                <div>
                   {users.map((user) => (
                       <ul key={user.id}>
                            <h3>{user.name}</h3>
                            <p>{user.title} in {user.location}</p>
                       </ul>
                   ))}
                </div>
            </Wrapper>
            <EmploymentInfo />
        </div>
    )
}


