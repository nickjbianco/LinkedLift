import React from 'react'
import { useSelector } from 'react-redux'

export default () => {
    const myPosts = useSelector(state => state.posts) // <-this is an object! 

    return (
        <div>
            {myPosts.allIds.map((id) => {
                return (
                    <div key={id}>
                        <h3>{myPosts.byId[id].title}</h3>
                        <p>{myPosts.byId[id].description}</p>
                    </div>
                    )
            })}
        </div>
    )
}

