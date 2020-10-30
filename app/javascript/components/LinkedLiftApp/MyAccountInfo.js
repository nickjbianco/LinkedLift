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
                {users.map((user) => {
                    if (user.id === 2) {
                        return (
                            <ul key={user.id}>
                                <li>{user.name}</li>
                                <p>{user.title} in {user.location}</p>
                            </ul>
                        )
                    }
                })}
            </ul>
        </div>
    )
}



    
