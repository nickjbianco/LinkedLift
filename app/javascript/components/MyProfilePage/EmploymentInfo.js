import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { employmentsThunk } from '../../reducers/EmploymentsReducer'
import styled from 'styled-components'

const Wrapper = styled.div`
        display: flex;
        background-color: green;
    `

export default ({ currentUserId }) => {
    const employments = useSelector(state => state.employments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(employmentsThunk())
    }, [])

    return (
        <Wrapper>
            <ul>
                <h1>Experience</h1>
                {employments.map((employment) => (
                    <ul key={employment.id}>
                        <p>{employment.title}</p>
                        <p>{employment.description}</p>
                    </ul>
                ))}
            </ul>
        </Wrapper>
    )
}





