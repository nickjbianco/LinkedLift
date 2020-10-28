import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PostsFeed from './PostsFeed'
import { addMyPost } from '../../reducers/PostsReducer'

export default () => {
    const [description, setDescription] = useState('')
    const dispatch = useDispatch() 

    const addPost = (e) => {
        e.preventDefault()
        dispatch(addMyPost({ description }))
        setDescription('')
    }

    return (
        <div>
            <h1>Posts Feed</h1>

            <form onSubmit={addPost}>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button>Write a post</button>
            </form>
            
            <PostsFeed />
        </div>
    )
}