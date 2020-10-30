import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { employmentsThunk } from '../../reducers/EmploymentsReducer'
import styled from 'styled-components'


export default () => {
    const employments = useSelector(state => state.employments)
    const gyms = useSelector(state => state.gyms)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(employmentsThunk())
    }, [])

    const Wrapper = styled.div`
        display: flex;
        background-color: green;
    `

    return (
        <Wrapper>
            {employments.map((employment) => {
                if (employment.user_id === 2) {
                    return (
                        <ul key={employment.id}>
                            <h4>{employment.title}</h4>
                            {gyms.map((gym) => {
                                if (employment.gym_id === gym.id) {
                                    return (
                                        <ul key={gym.id}>
                                            <p>{gym.name}</p>
                                            <p>{employment.start_date} - end date</p>
                                            <p>{gym.location}</p>
                                            <p>{employment.description}</p>
                                        </ul>
                                        )
                                    }
                                })}
                        </ul>
                    )
                }
            })}
        </Wrapper>
    )
}