import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { employmentsThunk } from '../../reducers/EmploymentsReducer'


export default () => {
    const employments = useSelector(state => state.employments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(employmentsThunk())
    }, [])


    return (
        <div>
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
        </div>
    )
}