import React , { createContext , useReducer } from 'react';
import auth from './reducers/auth';
import home from './reducers/home';
import authInitialState from './initialsStates/authInitialState';
import HomeInitialState from './initialsStates/HomeInitialState';

export const GlobalContext = createContext({});

const GlobalProvider=({children}) => {

    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [homeState, homeDispatch] = useReducer(home, HomeInitialState);

    return (
        <GlobalContext.Provider value={{ authState, homeState, authDispatch, homeDispatch }} >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;