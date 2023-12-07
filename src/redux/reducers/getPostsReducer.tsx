import { GET_POSTS } from "../actions/actionTypes";

const initialState = {
  posts: [],
};

const getPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
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