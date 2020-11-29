import axios from "axios";

// Multiple Users
const fetchUsers = () => {
  return axios
    .get("http://localhost:3000/users")
    .then((response) => response.data);
};

const RECEIVED_USERS = "RECEIVED_USERS";
const receivedUsers = (payload) => ({
  type: RECEIVED_USERS,
  payload,
});

export const usersThunk = () => {
  return (dispatch) => {
    fetchUsers().then((users) => {
      dispatch(receivedUsers(users));
    });
  };
};

// Selectors

// Users you are not yet connected with
export const suggestedConnections = (store) => {
  return store.users
    .filter((user) => {
      return user.connected !== true;
    })
    .slice(0, 5);
};

export const alreadyConnected = (store) => {
  return store.users.filter((user) => {
    return user.connected === true;
  });
};

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVED_USERS:
      return action.payload;
    default:
      return state;
  }
};
