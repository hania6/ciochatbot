import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

// Import Reducers
import chatReducer from "./modules/ChatLayout/chatReducer";

const middleware = applyMiddleware(thunk);

const store = createStore(combineReducers({
    chat: chatReducer
}), compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;
