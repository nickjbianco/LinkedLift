import axios from "axios";

const fetchEmployments = () => {
  return axios
    .get("http://localhost:3000/employments")
    .then((response) => response.data);
};

const RECEIVED_EMPLOYMENTS = "RECEIVED_EMPLOYMENTS";
export const receivedEmployments = (payload) => ({
  type: RECEIVED_EMPLOYMENTS,
  payload,
});

export const employmentsThunk = () => {
  return (dispatch) => {
    fetchEmployments().then((employments) => {
      dispatch(receivedEmployments(employments));
    });
  };
};

const ADD_EMPLOYMENT = "ADD_EMPLOYMENT";
export const addEmployment = (payload) => ({
  type: ADD_EMPLOYMENT,
  payload,
});

const EDIT_EMPLOYMENT = "EDIT_EMPLOYMENT";
export const editEmployment = (payload) => ({
  type: EDIT_EMPLOYMENT,
  payload,
});

const defaultState = {
  byIds: {},
  allIds: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVED_EMPLOYMENTS:
      const allIds = action.payload.map((employment) => employment.id);

      const byIds = {};
      action.payload.forEach((employment) => {
        byIds[employment.id] = employment;
      });

      return {
        byIds,
        allIds,
      };
    case ADD_EMPLOYMENT:
      return {
        byIds: {
          ...state.byIds,
          [action.payload.id]: action.payload,
        },
        allIds: [...state.allIds, action.payload.id],
      };
    case EDIT_EMPLOYMENT:
      return {
        byIds: {
          ...state.byIds,
          [action.payload.id]: action.payload,
        },
        allIds: state.allIds,
      };
    default:
      return state;
  }
};
