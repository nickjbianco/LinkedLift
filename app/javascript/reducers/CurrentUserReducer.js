import axios from 'axios'

// Current User
const fetchUser = (id) => {
    return axios.get(`http://localhost:3000/users/${id}.json`).then(response => response.data)
}

const RECEIVED_CURRENT_USER = 'RECEIVED_CURRENT_USER'
const receivedCurrentUser = (payload) => ({
    type: RECEIVED_CURRENT_USER,
    payload
})

export const userThunk = (id) => {
    return (dispatch) => {
        fetchUser(id).then((user) => {
            dispatch(receivedCurrentUser(user))
        })
    }
}

const defaultState = {}

export default (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVED_CURRENT_USER:
            return action.payload

        default:
            return state
    }
}