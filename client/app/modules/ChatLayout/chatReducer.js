export default function reducer(
    state = {
        chatLog: [],
        currentMsg: "",
        chatContext: null,
        sendingMsg: false,
        error: null,
        chartData: [],
        showChart: false
    },
    action
) {
    let newState = { ...state };
    switch (action.type) {
        case "Update_Message":
            return {
                ...newState,
                currentMsg: action.payload
            };
            break;
        case "Send_Message":
            if (state.chatContext) {
                newState.chatLog.push({ text: state.currentMsg, isOwn: true });
            }
            return {
                ...newState,
                sendingMsg: true,
                error: null
            };
            break;
        case "Message_Sent":
            action.payload.response.forEach(msg => {
                newState.chatLog.push({ text: msg, isOwn: false });
            });
            if (action.payload.chartData.length > 0) {
                newState.showChart = true;
                newState.chartData = action.payload.chartData;
            }
            return {
                ...newState,
                currentMsg: "",
                sendingMsg: false,
                chatContext: action.payload.context
            };
            break;
        case "Message_Sent_Err":
            return {
                ...newState,
                error: action.payload,
                sendingMsg: false
            };
            break;
        default:
            return {
                ...newState
            };
    }
}
