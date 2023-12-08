//createStore method is now deprecated :(
import {legacy_createStore as createStore, applyMiddleware, compose,} from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import { getPostsSaga, addPostSaga, updatePostSaga, deltePostSaga,} from "./sagas";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

//middleware is what allows Redux Saga to intercept actions and perform side effects
const sagaMiddleware = createSagaMiddleware();

//checks and activates redux dev tools
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//acts like a middleman between dispatching an action and the moment it reaches the reducer
const middleware =
  window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "developemnt"
    ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    : applyMiddleware(sagaMiddleware);

export const store = createStore(rootReducer, middleware);

//start listening for coresponding saga actions
sagaMiddleware.run(getPostsSaga);
sagaMiddleware.run(addPostSaga);
sagaMiddleware.run(updatePostSaga);
sagaMiddleware.run(deltePostSaga);
