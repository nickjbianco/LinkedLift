import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import PostsReducer from "../reducers/PostsReducer";
import UsersReducer from "../reducers/UsersReducer";
import EmploymentsReducer from "../reducers/EmploymentsReducer";
import GymsReducer from "../reducers/GymsReducer";
import CurrentUserReducer from "../reducers/CurrentUserReducer";
import ViewUserReducer from "../reducers/ViewUserReducer";

const allReducers = combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
  employments: EmploymentsReducer,
  gyms: GymsReducer,
  currentUser: CurrentUserReducer,
  viewUser: ViewUserReducer,
});

export default createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
