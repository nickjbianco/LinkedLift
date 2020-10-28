
const ADD_POST = 'ADD_POST'
export const addMyPost = (payload) => ({
    type: ADD_POST, 
    payload
})

const defaultState = {
    byId: {
        3: { description: 'description-3' },
        2: { description: 'description-2' }, 
        1: { description: 'description-1' }
    }, 
    allIds: [3, 2, 1]
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newId = state.allIds.length + 1

            return {
                byId: {
                    ...state.byId, 
                    [newId]: action.payload
                },
                allIds: [
                    newId,
                    ...state.allIds   
                ]
            }
        default: 
            return state
    }
}

// DEFAULT STATE EXAMPLE FOR POSTS BELOW

// defaultState = {
//     byId: {
//         1: { title: 'title-1', description: 'description-1', foreign_key: 'corresponding user id-1' }, 
//         2: { title: 'title-2', description: 'description-2', foreign_key: 'corresponding user id-2' }, 
//         3: { title: 'title-3', description: 'description-3', foreign_key: 'corresponding user id-3' }
//     }, 
//     allIds: [1, 2, 3]
// }