import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
    switch(action.type) {
        case SET_ALERT:
            return [...state, action.payload]; // return any other alert, and action.payload (the alert that gets sent)
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload);
        default:
            return state;
    }
}