import axios from 'axios'

const fetchEmployments = () => {
    return axios.get('http://localhost:3000/employments/index.json').then(response => response.data)
}

const RECEIVED_EMPLOYMENTS = 'RECEIVED_EMPLOYMENTS'
const receivedEmployments = (payload) => ({
    type: RECEIVED_EMPLOYMENTS,
    payload
})

export const employmentsThunk = () => {
    return (dispatch) => {
        fetchEmployments().then((employments) => {
            dispatch(receivedEmployments(employments))
        })
    }
}

const defaultState = []

export default (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVED_EMPLOYMENTS:
            return action.payload
        default:
            return state
    }
}