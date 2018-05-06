import axios from "axios";
//TODO: Checkout createAction from react-redux

export function SendMessage(msg, context) {
    return function (dispatch) {
        dispatch({ type: "Send_Message" });
        axios.post('/sendMessage', {
            message: msg,
            context: context
        }).then((response) => {
            dispatch({ type: "Message_Sent", payload: response.data });
        }).catch((response) => {
            dispatch({ type: "Message_Sent_Err", payload: response });
        });
    };
}

//Action without Thunk
export function UpdateMsg(msg) {
    return {
        type: "Update_Message",
        payload: msg
    };
}
