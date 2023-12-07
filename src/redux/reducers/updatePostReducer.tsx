import { UPDATE_POST } from "../actions/actionTypes";

const updatePostReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_POST {
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

export default updatePostReducer;