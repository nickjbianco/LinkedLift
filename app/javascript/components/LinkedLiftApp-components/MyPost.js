import React, { useState } from 'react'

export default () => {
    const [myPost, setMyPost] = useState('')

    const handleSubmitPost = () => {
        setMyPost('')
    }

    return (
        <div>
            <p>This is the MyPost component</p>
                <textarea
                    value={myPost}
                    onChange={(e) => setMyPost(e.target.value)}
                />
                <button onClick={handleSubmitPost}>Post</button>
        </div>
    )
}