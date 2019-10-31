import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

/*
export const getLogs = () => {
    return async (dispatch) => { // dispatch to reducer at any time
        setLoading(); // calling function below

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    };
};
*/
// Same as above
export const getLogs = () => async dispatch => {

    try{
        setLoading(); // calling function below

        const res = await fetch('/logs');
        const data = await res.json();
    
        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};