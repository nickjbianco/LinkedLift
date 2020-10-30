import axios from 'axios'

const fetchEmployments = () => {
    return axios.get('http://localhost:3000/employments/index.json').then(response => response.data)
}

const RECEIVED_EMPLOYMENTS = 'RECEIVED_NAME_AND_TITLE'
const receivedEmployments = (payload) => ({
    type: RECEIVED_EMPLOYMENTS,
    payload
})

export const employmentsThunk = () => {
    return (dispatch) => {
        fetchEmployments().then((nameAndTitle) => {
            dispatch(receivedEmployments(nameAndTitle))
        })
    }
}

const defaultState = []

export default (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVED_EMPLOYMENTS:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}