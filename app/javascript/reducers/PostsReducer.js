import axios from "axios";

const fetchPosts = () => {
  return axios
    .get("http://localhost:3000/posts")
    .then((response) => response.data);
};

export const postsThunk = () => {
  return (dispatch) => {
    fetchPosts().then((posts) => {
      dispatch(receivedPosts(posts));
    });
  };
};

const RECEIVED_POSTS = "RECEIVED_POSTS";
const receivedPosts = (payload) => ({
  type: RECEIVED_POSTS,
  payload,
});

const ADD_POST = "ADD_POST";
export const addMyNewPost = (payload) => ({
  type: ADD_POST,
  payload,
});

const DELETE_POST = "DELETE_POST";
export const deletePost = (id) => ({
  type: DELETE_POST,
  id,
});

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVED_POSTS:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
    case DELETE_POST:
      return [...state].filter((post) => post.id !== action.id);
    default:
      return state;
  }
};
