import instance from '../services/api';

const getTeamOrPlayer = (type, id) => {
    return dispatch => {
        dispatch({type: 'GET_TEAM_REQ'});
        return instance
            .get(`/${type}/${id}.json`)
            .then(({data}) => {
                return dispatch({type: 'GET_TEAM_RES', payload: data});
            })
    };
};
const removeCard = (obj) => {
    return dispatch => {
       return  dispatch({type: "REMOVE_CARD", payload: obj})
    }
}
export {
    getTeamOrPlayer,
    removeCard
}
