import axios from 'axios'

const fetchNameAndTitle = () => {
    return axios.get('http://localhost:3000/users/index.json').then(response => response.data)
}

const RECEIVED_NAME_AND_TITLE = 'RECEIVED_NAME_AND_TITLE'
const receivedNameAndTitle = (payload) => ({
    type: RECEIVED_NAME_AND_TITLE,
    payload
})

export const nameAndTitleThunk = () => {
    return (dispatch) => {
        fetchNameAndTitle().then((nameAndTitle) => {
            dispatch(receivedNameAndTitle(nameAndTitle))
        })
    }
}

const defaultState = []

export default (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVED_NAME_AND_TITLE:
            return [
                ...state, 
                ...action.payload
            ]
        default:
            return state
    }
}