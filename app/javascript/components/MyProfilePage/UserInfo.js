import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usersThunk } from '../../reducers/UsersReducer'
import { gymsThunk } from '../../reducers/GymsReducer'
import EmploymentInfo from './EmploymentInfo'
import styled from 'styled-components'


export default () => {
    const users = useSelector(state => state.users)
    const gyms = useSelector(state => state.gyms)
    const dispatch = useDispatch()
    
    const Wrapper = styled.div`
        display: flex;
        background-color: blue;
    `

    useEffect(() => {
        dispatch(usersThunk())
        dispatch(gymsThunk())
    }, [])

    return (
        <div>
            <Wrapper>
                <ul>
                    {users.map((user) => {
                        if (user.id === 2) {
                            return (
                                <ul key={user.id}>
                                    <h2>{user.name}</h2>
                                    {gyms.map((gym) => {
                                        if (user.id === gym.id) {
                                            return (
                                                <p key={gym.id}>{user.title} at {gym.name}</p>
                                            )
                                        }
                                    })}
                                    <p>{user.location}</p>
                                </ul>
                            )
                        }
                    })}
                </ul>
            </Wrapper>
            <EmploymentInfo />
        </div>
    )
}

