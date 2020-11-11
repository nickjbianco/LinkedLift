import axios from 'axios'

const fetchPosts = () => {
    return axios.get('http://localhost:3000/posts/index.json').then(response => response.data)
}

const RECEIVED_POSTS = 'RECEIVED_POSTS'
const receivedPosts = (payload) => ({
    type: RECEIVED_POSTS,
    payload
})

export const postsThunk = () => {
    return (dispatch) => {
        fetchPosts().then((posts) => {
            dispatch(receivedPosts(posts))
        })
    }
}

const createPost = (data) => {
    return axios.post('http://localhost:3000/posts', data).then(response => response.data)
}

createPost({ body: 'Jesse The Body Ventura' }).then((post) => console.log(post))

const ADD_MY_NEW_POST = 'ADD_MY_NEW_POST'
export const addMyNewPost = (payload) => ({
    type: ADD_MY_NEW_POST,
    payload
})

const defaultState = []

export default (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVED_POSTS:
            return action.payload
        case ADD_MY_NEW_POST:
            return [
                action.payload,
                ...state
            ]
        default:
            return state
    }
}


