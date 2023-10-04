//Setup Data Layer

import React, { createContext, useContext, useReducer } from "react";

// Data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//This is how to use inside of the component
export const useStateValue = () => useContext(StateContext);