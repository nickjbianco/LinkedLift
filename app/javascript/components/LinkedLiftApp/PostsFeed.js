import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postsThunk } from '../../reducers/PostsReducer'

export default () => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(postsThunk())
    }, [])

    return (
        <div>
            {posts.map((post) => (
                <ul key={post.id}>
                    <h4>{post.user.name}</h4>
                    <p><em>{post.user.title}</em></p>
                    <p>{post.body}</p>
                </ul>
            ))}
        </div>
    )
}


