import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState,children}) => (
    <StateContext.Prover value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Prover>
)

export const useStateValue = () => useContext(StateContext);