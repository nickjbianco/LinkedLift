import axios from "axios";

// Current User
const fetchUser = (id) => {
  return axios
    .get(`http://localhost:3000/users/${id}.json`)
    .then((response) => response.data);
};

const RECEIVED_CURRENT_USER = "RECEIVED_CURRENT_USER";
const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receivedCurrentUser = (payload) => ({
  type: RECEIVED_CURRENT_USER,
  payload,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const userThunk = (id) => {
  return (dispatch) => {
    fetchUser(id).then((user) => {
      dispatch(receivedCurrentUser(user));
    });
  };
};

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVED_CURRENT_USER:
      return action.payload;
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
};
