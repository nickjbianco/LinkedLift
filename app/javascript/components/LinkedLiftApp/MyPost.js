import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PostsFeed from './PostsFeed'
import { addMyNewPost } from '../../reducers/PostsReducer'
import styled from 'styled-components'

const Form = styled.form`
    margin: 0 0 8px;
    background: var(--white,#fff);
    border-radius: 2px;
    color: var(--warm-gray-60,#84878a);
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
`
const Button = styled.button`
    background-color: var(--blue-70,#0073b1);
    color: white;
    font-weight: 600;
    width: 100%;
    padding: 0;
    font-size: 100%;
    cursor: pointer;
    line-height: 1.2;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
`

export default () => {
    const [description, setDescription] = useState('')
    const dispatch = useDispatch() 

    const addPost = (e) => {
        e.preventDefault()
        dispatch(addMyNewPost({ description }))
        setDescription('')
    }

    return (
        <div>
            <Form onSubmit={addPost}>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button>Write a post</Button>
            </Form>
            
            <PostsFeed />
        </div>
    )
}