import axios from 'axios'

// Multiple Users 
const fetchUsers = () => {
    return axios.get('http://localhost:3000/users/index.json').then(response => response.data)
}

const RECEIVED_USERS = 'RECEIVED_USERS'
const receivedUsers = (payload) => ({
    type: RECEIVED_USERS,
    payload
})

export const usersThunk = () => {
    return (dispatch) => {
        fetchUsers().then((users) => {
            dispatch(receivedUsers(users))
        })
    }
}

const defaultState = []

export default (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVED_USERS:
            return action.payload
        
        default:
            return state
    }
}