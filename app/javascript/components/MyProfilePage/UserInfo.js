import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usersThunk } from '../../reducers/UsersReducer'
import EmploymentInfo from './EmploymentInfo'
import styled from 'styled-components'


export default () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    
    const Wrapper = styled.div`
        display: flex;
        background-color: blue;
    `

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


