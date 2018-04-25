export default function reducer(state = {
    todo: "add your own store"
}, action) {
    //Sample reducer switch
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                adding: true,
                added: false
            };
            break;
        default:
            return {
                ...state
            };
    }
}
