import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nameAndTitleThunk } from '../../reducers/UsersReducer'
import EmploymentInfo from './EmploymentInfo'

export default () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(nameAndTitleThunk())
    }, [])

    return (
        <div>
            <h1>User Info</h1>
            <ul>
                {users.map((user) => (
                    <ul key={user.id}>
                        <li>{user.name}</li>
                        <p>{user.title}</p>
                    </ul>
                ))}
            </ul>
            <EmploymentInfo />
        </div>
    )
}

