//createStore method is now deprecated 
import { legacy_createStore as createStore, applyMiddleware, compose, StoreEnhancer } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import { getPostsSaga, addPostSaga, updatePostSaga, deletePostSaga } from "./sagas";

// Extending the Window interface to include the Redux DevTools Extension
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

//middleware is what allows Redux Saga to intercept actions and perform side effects
const sagaMiddleware = createSagaMiddleware();

// Setting up Redux DevTools Extension
//StoreEnhancer | undefined to handle cases where the extension is not present
const reduxDevTools: StoreEnhancer | undefined =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Composing middleware with DevTools, conditionally enabled in development environment
const composedEnhancers = reduxDevTools && process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(sagaMiddleware), reduxDevTools as StoreEnhancer)
    : applyMiddleware(sagaMiddleware);

// Creating the Redux store with the root reducer and composed enhancers
export const store = createStore(rootReducer, composedEnhancers);

// Running the sagas, which listen for corresponding actions
sagaMiddleware.run(getPostsSaga);
sagaMiddleware.run(addPostSaga);
sagaMiddleware.run(updatePostSaga);
sagaMiddleware.run(deletePostSaga);

