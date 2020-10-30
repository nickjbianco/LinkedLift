import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { employmentsThunk } from '../../reducers/EmploymentsReducer'
import styled from 'styled-components'


export default () => {
    const employments = useSelector(state => state.employments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(employmentsThunk())
    }, [])

    const Wrapper = styled.div`
        display: flex;
        background-color: green;
    `

    return (
        <div>
            <Wrapper>
                <h1>Employment Info</h1>
                <ul>
                    {employments.map((employment) => {
                        if (employment.user_id === 2) {
                            return (
                                <ul key={employment.id}>
                                    <h2>{employment.title}</h2>
                                </ul>
                            )
                        }
                    })}
                </ul>
            </Wrapper>
        </div>
    )
}