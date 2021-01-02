import axios from "axios";
import { receivedEmployments } from "./EmploymentsReducer";

// One User NOT CURRENT USER
const fetchUser = (id) => {
  return axios.get(`/api/users/${id}`).then((response) => response.data);
};

const RECEIVED_USER = "RECEIVED_USER";
const receivedUser = (payload) => ({
  type: RECEIVED_USER,
  payload,
});

export const userThunk = (id) => {
  return (dispatch) => {
    fetchUser(id).then((user) => {
      const { employments, ...otherProperties } = user;
      dispatch(receivedUser(otherProperties));
      dispatch(receivedEmployments(employments));
    });
  };
};

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVED_USER:
      return action.payload;
    default:
      return state;
  }
};
