import { ADD_POST } from "../actions/actionTypes";

const addPostReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: {
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

export default addPostReducer;