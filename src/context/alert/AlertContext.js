import React,{ createContext,useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const initialstate = null;

    const [ state,dispatch ] = useReducer(alertReducer,initialstate);

    const setAlert = (msg,type)=>{
        dispatch({
            type:"SET_ALERT",
            payload:{msg,type}
        })
        setTimeout(()=>{
            dispatch({
                type:'REMOVE_ALERT'
            })
        },3500);
    }

    

    return <AlertContext.Provider value={{
        alert:state,
        setAlert
    }}>
        {children}
    </AlertContext.Provider>

}

export default AlertContext;
