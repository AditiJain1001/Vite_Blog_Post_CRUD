import {  SET_POSTS } from "../actions/actionTypes";
// GET_POSTS

const initialState = {
  posts: [],
};

const getPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default getPostsReducer;