import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT, REMOVE_ALERT
} from '../types';

// Create initial state
const AlertState = props => {
    const initialState = null;

    // Dispatch to reducer (use reducer hook)
    const [state, dispatch] = useReducer(AlertReducer, initialState);
    
    // Set Alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        });
        setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000);
      };

    return (
     <AlertContext.Provider // pass in anything you want available to the entire app
        value={{
            alert: state,
            setAlert,
        }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};

export default AlertState;