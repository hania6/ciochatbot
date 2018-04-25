import axios from "axios";
//TODO: Checkout createAction from react-redux

// Redux-Thunk in Action (for Async Actions)
export function ADD_USER(user) {
    return function (dispatch) {
        dispatch({ type: "ADD_USER" });
        axios.post('/', {
            formData: user
        }).then((response) => {
            dispatch({ type: "ADD_USER_FULFILLED", payload: response });
        }).catch((response) => {
            dispatch({ type: "ADD_USER_REJECTED", payload: response });
        });
    };
}

// Action without Thunk
export function CHANGE_INPUT() {
    return {
        type: "CHANGE_INPUT",
        payload: {
            name: "payload"
        }
    };
}
