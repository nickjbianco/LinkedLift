import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nameAndTitleThunk } from '../../reducers/UsersReducer'

export default () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(nameAndTitleThunk())
    }, [])

    return (
        <div>
            <ul>
                {users.map((user) => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

