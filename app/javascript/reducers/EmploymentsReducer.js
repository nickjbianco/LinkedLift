import axios from "axios";

const fetchEmployments = () => {
  return axios
    .get("http://localhost:3000/employments/index.json")
    .then((response) => response.data);
};

const RECEIVED_EMPLOYMENTS = "RECEIVED_EMPLOYMENTS";
export const receivedEmployments = (payload) => ({
  type: RECEIVED_EMPLOYMENTS,
  payload,
});

const ADD_EMPLOYMENT = "ADD_EMPLOYMENT";
export const addEmployment = (payload) => ({
  type: ADD_EMPLOYMENT,
  payload,
});

export const employmentsThunk = () => {
  return (dispatch) => {
    fetchEmployments().then((employments) => {
      dispatch(receivedEmployments(employments));
    });
  };
};

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVED_EMPLOYMENTS:
      return action.payload;
    case ADD_EMPLOYMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
