import axios from "axios";
//TODO: Checkout createAction from react-redux

export function SendMessage(msg, context) {
    return function (dispatch) {
        dispatch({ type: "Send_Message" });
        axios.post('/sendMessage', {
            message: msg,
            context: context
        }).then((response) => {
            console.log(response.data.context.graph);

            let response1 = {
                response: response.data.response[0],
                context: response.data.context,
                updateInput: response.data.response.length === 1 ? true : false
            };
            dispatch({ type: "Message_Sent", payload: response1 });

            if (response.data.response.length > 1) {
                let response2 = {
                    response: response.data.response[1],
                    context: response.data.context,
                    chartData: response.data.chartData,
                    updateInput: true
                };
                setTimeout(() => { dispatch({ type: "Message_Sent", payload: response2 }); }, response.data.context.graph ? 3000 : 0);
            }
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
