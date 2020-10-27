import { createStore, combineReducers } from 'redux'
import PostsReducer from '../reducers/PostsReducer'

const allReducers = combineReducers({
    posts: PostsReducer
})

export default createStore(
    allReducers
)