//an index file in the redux folder typically contains combined reducers

import { combineReducers } from "redux"



import getPostsReducer from "./getPostsReducer"
import addPostReducer from "./addPostReducer"
import updatePostReducer from "./updatePostReducer"
import deletePostReducer from "./deletePostReducer"

combineReducers(
    {
        getPostsReducer,
        addPostReducer,
        updatePostReducer,
        deletePostReducer
    }
)