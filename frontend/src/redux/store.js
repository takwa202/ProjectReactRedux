import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer/index";
const devTools =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()|| compose;

const store = createStore(rootReducer,compose(applyMiddleware(thunk), devTools));

export default store;