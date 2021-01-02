import axios from "axios";

const fetchGyms = () => {
  return axios.get("/api/gyms").then((response) => response.data);
};

const RECEIVED_GYMS = "RECEIVED_GYMS";
const receivedGyms = (payload) => ({
  type: RECEIVED_GYMS,
  payload,
});

export const gymsThunk = () => {
  return (dispatch) => {
    fetchGyms().then((gyms) => {
      dispatch(receivedGyms(gyms));
    });
  };
};

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVED_GYMS:
      return action.payload;
    default:
      return state;
  }
};
