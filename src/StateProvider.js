import { createContext, useContext, useReducer} from 'react';

// Data layer
export const StateContext = createContext();

// Setting Up the Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={ useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// This is how we use it inside the component
export const useStateValue = () => useContext(StateContext);