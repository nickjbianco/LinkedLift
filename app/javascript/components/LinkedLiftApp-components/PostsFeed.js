import React from 'react'
import { useSelector } from 'react-redux'

export default () => {
    const myPosts = useSelector(state => state.posts) // <-this is an object! 

    return (
        <div>
            <p>This is the PostsFeed component, will be a list of all posts from various users</p>
            {myPosts.allIds.map((id) => {
                return (
                    <ul key={id}>
                        <h3>{myPosts.byId[id].title}</h3>
                        <p>{myPosts.byId[id].description}</p>
                    </ul>
                    )
            })}
        </div>
    )
}

