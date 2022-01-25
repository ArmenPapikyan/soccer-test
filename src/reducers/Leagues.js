const initialState = {
    data: [],
    loading: false
}
const Leagues = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LEAGUES_REQ":
            return {
                ...state,
                loading: true
            }
        case "GET_LEAGUES_RES":
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        default :
            return state
    }
}
export default Leagues;
