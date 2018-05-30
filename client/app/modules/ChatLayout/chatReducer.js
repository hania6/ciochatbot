export default function reducer(
    state = {
        chatLog: [],
        currentMsg: "",
        chatContext: null,
        sendingMsg: false,
        error: null,
        chartData: [{}],
        showChart: false,
        inputTypeChoices: false,
        choices: []
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
            newState.chatLog.push({ text: action.payload.response, isOwn: false });
            if (action.payload.updateInput) {
                if (action.payload.context && action.payload.context.choices) {
                    newState.inputTypeChoices = action.payload.context.choices || false;
                    newState.choices = action.payload.context.options.split(',') || [];
                } else {
                    newState.inputTypeChoices = false;
                    newState.choices = [];
                }
            }
            if (action.payload.chartData && action.payload.chartData.length > 0) {
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
