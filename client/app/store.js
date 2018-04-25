import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

// Import Reducers
import formReducer from "./modules/ContainerComp/formReducer";

const middleware = applyMiddleware(thunk);

const store = createStore(combineReducers({
    form: formReducer
}), compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;
