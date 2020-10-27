import React, { useState } from 'react'

export default () => {
    const [post, setPost] = useState('')

    const handlePost = (e) => {
        e.preventDefault()
        setPost(e.target.value)
        console.log(post)
        setPost('')
        console.log(post)
    }

    return (
        <div>
            <p>This is the MyPost component</p>
            <form onSubmit={handlePost}>
                <input
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                />
                <button>Post</button>
            </form>
        </div>
    )
}