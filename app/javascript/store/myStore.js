import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import PostsReducer from '../reducers/PostsReducer'
import UsersReducer from '../reducers/UsersReducer'
import EmploymentsReducer from '../reducers/EmploymentsReducer'

const allReducers = combineReducers({
    posts: PostsReducer, 
    users: UsersReducer, 
    employments: EmploymentsReducer
})

export default createStore(
    allReducers,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
)



