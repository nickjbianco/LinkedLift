import axios from 'axios'

const fetchUserPosts = () => {
    return axios.get('http://localhost:3000/users/index.json').then(response => response.data)
}

const RECEIVED_USER_POSTS = 'RECEIVED_USER_POSTS'
const receivedUserPosts = (payload) => ({
    type: RECEIVED_USER_POSTS,
    payload
})

export const userPostsThunk = () => {
    return (dispatch) => {
        fetchUserPosts().then(() => {
            dispatch(receivedUserPosts())
        })
    }
}

const defaultState = []

export default (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVED_USER_POSTS:
            return action.payload
        default:
            return state
    }
}