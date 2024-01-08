import postsblogPostsApi from "../../services/postsblogPostsApi"

import { put, call, takeEvery } from "redux-saga/effects"
import { GET_POSTS, SET_POSTS  } from "../actions/actionTypes";
import { error } from "console";

function* getPostsSaga() {
    yield takeEvery( GET_POSTS, fetchPosts)

    function* fetchPosts() {
        try { 
            const postResponse = yield call(postsblogPostsApi.getAll);
            console.log(postResponse);
            yield put({ type: SET_POSTS, payload: postResponse})

        } catch (err) {
            console.log(err)


        }
    }

}

export default getPostsSaga;