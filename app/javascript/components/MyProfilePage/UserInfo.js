import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userThunk } from '../../reducers/CurrentUserReducer'
import styled from 'styled-components'
import EmploymentInfo from './EmploymentInfo'

const Wrapper = styled.div`
        display: flex;
        background-color: blue;
    `

export default ({ currentUserId }) => {
    const user = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userThunk(currentUserId))
    }, [])

    return (
        <div>
            <Wrapper>
                <ul>
                    <h3>{user.name}</h3>
                    <p>{user.title} in {user.location}</p>
                </ul>
            </Wrapper>
            <EmploymentInfo currentUserId={currentUserId} />
        </div>
    )
}
