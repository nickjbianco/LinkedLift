import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userThunk } from '../../reducers/CurrentUserReducer'
import styled from 'styled-components'

const Wrapper = styled.div`
        display: flex;
        background-color: green;
    `

export default ({ currentUserId }) => {
    const user = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userThunk(currentUserId))
    }, [])

    return (
        <Wrapper>
            <ul>
                <h1>Experience</h1>
                <p>name</p>
                <p>title</p>
                <p>duration worked</p>
                <p>description</p>
            </ul>
        </Wrapper>
    )
}

