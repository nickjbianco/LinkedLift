import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import PostsReducer from '../reducers/PostsReducer'
import UsersReducer from '../reducers/UsersReducer'

const allReducers = combineReducers({
    posts: PostsReducer, 
    users: UsersReducer
})

export default createStore(
    allReducers, 
    applyMiddleware(thunk)
)

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

