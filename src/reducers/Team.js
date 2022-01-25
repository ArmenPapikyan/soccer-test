import {act} from "@testing-library/react";

const initialState = {
    compereList: [],
    loading: false
}
const TeamOrPlayer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TEAM_REQ":
            return {
                ...state,
                loading: true
            }
        case "GET_TEAM_RES":
            return {
                compereList: [...state.compereList.splice(state.compereList.length - 1, 1), action.payload],
                loading: false
            }
        case "REMOVE_CARD":
            return {
                ...state,
                compereList: state.compereList.filter(function (obj) {
                    return obj.id !== action.payload.id;
                })
            }
        default :
            return state
    }
}
export default TeamOrPlayer;
