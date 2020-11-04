import React, { useEffect } from 'react'
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
            {users.map((user) => (
                <ul key={user.id}>
                    {user.posts.map((post) => 
                    <div key={post.id}>
                        <p><b>{user.name}</b></p>
                        <p>{post.body}</p>
                    </div>)}
                </ul>
            ))}
        </div>
    )
}
