import axios from "axios";

const fetchPosts = () => {
  return axios
    .get("http://localhost:3000/posts/index.json")
    .then((response) => response.data);
};

const RECEIVED_POSTS = "RECEIVED_POSTS";
const receivedPosts = (payload) => ({
  type: RECEIVED_POSTS,
  payload,
});

export const postsThunk = () => {
  return (dispatch) => {
    fetchPosts().then((posts) => {
      dispatch(receivedPosts(posts));
    });
  };
};

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

const defaultState = {
  byIds: {},
  allIds: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVED_POSTS:
      const allIds = action.payload.map((post) => post.id);

      const byIds = {};
      action.payload.forEach((post) => {
        byIds[post.id] = post;
      });

      return {
        byIds,
        allIds,
      };
    case ADD_POST:
      return {
        byIds: {
          ...state.byIds,
          [action.payload.id]: action.payload,
        },
        allIds: [action.payload.id, ...state.allIds],
      };
    case DELETE_POST:
      return state;
    default:
      return state;
  }
};
