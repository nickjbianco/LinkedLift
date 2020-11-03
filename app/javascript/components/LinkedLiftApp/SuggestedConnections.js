import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { usersThunk } from '../../reducers/UsersReducer'

export default () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(usersThunk())
    }, [])

    return (
        <div>
            <ul>
                <h1>People You May Know</h1>
                {users.map((user) => (
                    <ul key={user.id}>
                        <Link to={`/${user.id}`} >{user.name}</Link>
                        <p>{user.title}</p>
                    </ul>
                ))}
            </ul>
        </div>
    )
}