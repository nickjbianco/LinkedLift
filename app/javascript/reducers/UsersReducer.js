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

const RECEIVED_CONNECTION = "RECEIVED_CONNECTION";
export const receivedConnection = (payload) => ({
  type: RECEIVED_CONNECTION,
  payload,
});

// Selectors
// Users you are not yet connected with
const mapUserIdToObject = (store) => {
  return store.users.allIds.map((id) => store.users.byIds[id]);
};

export const suggestedConnections = (store) => {
  return mapUserIdToObject(store)
    .filter((user) => user.connected !== true)
    .slice(0, 5);
};

export const alreadyConnected = (store) => {
  return mapUserIdToObject(store).filter((user) => user.connected);
};

const defaultState = {
  byIds: {},
  allIds: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVED_USERS:
      const allIds = action.payload.map((user) => user.id);
      const byIds = {};
      action.payload.forEach((user) => (byIds[user.id] = user));

      return {
        allIds,
        byIds,
      };
    case RECEIVED_CONNECTION:
      const user = state.byIds[action.payload.user_b_id];
      const newUser = { ...user, connected: true };

      return {
        allIds: state.allIds,
        byIds: {
          ...state.byIds,
          [newUser.id]: newUser,
        },
      };
    default:
      return state;
  }
};
