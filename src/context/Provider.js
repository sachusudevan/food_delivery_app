import React , { createContext , useReducer } from 'react';
import auth from './reducers/auth';
import foodHome from './reducers/foodHome';
import authInitialState from './initialsStates/authInitialState';
import foodHomeInitialState from './initialsStates/foodHomeInitialState';

export const GlobalContext = createContext({});

const GlobalProvider=({children}) => {

    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [foodState, foodHomeDispatch] = useReducer(foodHome, foodHomeInitialState);

    return (
        <GlobalContext.Provider value={{ authState, foodState, authDispatch, foodHomeDispatch }} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;