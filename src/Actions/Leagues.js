import instance from '../services/api';

const getLeagues = () => {
    return dispatch => {
        dispatch({type: 'GET_LEAGUES_REQ'});
        return instance
            .get(`/leagues.json`)
            .then(({data}) => {
                return dispatch({type: 'GET_LEAGUES_RES', payload: data});
            })
    };
};
export {
    getLeagues
}
