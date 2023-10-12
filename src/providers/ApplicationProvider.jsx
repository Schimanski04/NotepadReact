import React, { createContext, useReducer, useContext } from "react"

export const SET_THEME = "SET_THEME"

export const THEME_LIGHT = "light"
export const THEME_DARK = "dark"

const reducer = (state, action) => {
    switch (action.type) {
        case SET_THEME: {
            return {...state, theme: action.payload}
        }
        default: {
            return state
        }
    }
}

const initialState = {theme: THEME_LIGHT}

export const ApplicationContext = React.createContext(initialState)
export const ApplicationConsumer = ApplicationContext.Consumer
export const useAppContext = () => useContext(ApplicationContext)

export const ApplicationProvider = ({children}) => {
    const store = useReducer(reducer, initialState)

    return (
        <ApplicationContext.Provider value={store}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default useAppContext;
