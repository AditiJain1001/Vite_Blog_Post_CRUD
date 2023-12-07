import { DELETE_POST } from "../actions/actionTypes";

const deletePostReducer = (state, action) => {
    switch (action.type) {
        case DELETE_POST: {
            return {
                ...state,
                payload: action.payload
         }
        }

        default: {
            return { ...state }
        }
    }
}

export default deletePostReducer;