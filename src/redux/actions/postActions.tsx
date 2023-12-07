import { GET_POSTS, ADD_POST, UPDATE_POST, DELETE_POST } from "./actionTypes.tsx"

const getPosts =() => {
    return {
        type: GET_POSTS
    }
}

const addPost = (data) => {
    return {
        type: ADD_POST,
        payload: data
    }
}

const updatePost = (data) => {
    return {
        type: UPDATE_POST,
        payload: data
    }
}

const deletePost = (id)=> {
    return {
        type: DELETE_POST,
        payload: id
    }
}

export { getPosts, addPost, updatePost, deletePost }