import React from 'react'
import MyPost from './LinkedLiftApp-components/MyPost'
import PostsFeed from './LinkedLiftApp-components/PostsFeed'
import MyAccountInfo from './LinkedLiftApp-components/MyAccountInfo'

export default () => {
    return (
        <div>
            <h1>This is the linked lift app dashboard page, the header is above. The user will be able to view this page *after* signing in or up</h1>
            <MyPost />
            <PostsFeed />
            <MyAccountInfo />
        </div>
    )
}