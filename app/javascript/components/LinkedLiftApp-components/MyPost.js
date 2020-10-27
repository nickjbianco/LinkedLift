import React, { useState } from 'react'
import PostsFeed from './PostsFeed'

export default () => {
    const [posts, setPosts] = useState([])
    const [title] = useState('Name, Job Title, Company (dynamic)')
    const [description, setDescription] = useState('')

    const addPost = (e) => {
        e.preventDefault()
        setPosts([
            ...posts, 
            { title, description }
        ])
        setDescription('')
    }

    const removePost = (postIdx) => {
        setPosts(posts.filter((post, idx) => idx !== postIdx))
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
            {posts.map((post, idx) => (
                <div key={idx}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <button onClick={() => removePost(idx)}>Remove this post</button>
                </div>
            ))}
            <PostsFeed />
        </div>
    )
}