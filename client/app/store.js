import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
// Import Reducers
import chatReducer from "./modules/ChatLayout/chatReducer";
import DevTools from './modules/DevTools';

const middleware = applyMiddleware(thunk);

const store = createStore(combineReducers({
    Chat: chatReducer
}), compose(middleware, DevTools.instrument()));

export default store;
