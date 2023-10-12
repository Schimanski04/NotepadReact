import React, { createContext, useReducer, useContext, useEffect } from "react"

export const ADD_NOTE = "ADD_NOTE"
export const REMOVE_NOTE = "REMOVE_NOTE"

const LOCAL_STORAGE_ID = "NOTEPAD_APP"
let storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID))

const reducer = (state, action) => {
    let newState = {...state}
    console.log(newState, action)
    switch (action.type) {
        case ADD_NOTE: {
            newState.notes.push(action.payload)
            return newState
        }
        case REMOVE_NOTE: {
            newState.notes.splice(action.payload, 1)
            return newState
        }
        default: {
            return state
        }
    }
}

const initialState = {
    notes: [{title: "Poznámka 1", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce nibh. Sed ac dolor sit amet purus malesuada congue. Aliquam ante. Vivamus porttitor turpis ac leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec iaculis gravida nulla. In rutrum. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Fusce wisi. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Aliquam id dolor. Proin in tellus sit amet nibh dignissim sagittis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla non arcu lacinia neque faucibus fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}, {title: "Poznámka 2", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce nibh. Sed ac dolor sit amet purus malesuada congue. Aliquam ante. Vivamus porttitor turpis ac leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec iaculis gravida nulla. In rutrum. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Fusce wisi. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Aliquam id dolor. Proin in tellus sit amet nibh dignissim sagittis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla non arcu lacinia neque faucibus fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}]
}

/*export*/ const DataContext = createContext(initialState)
/*export*/ const DataConsumer = DataContext.Consumer
export const useDataContext = () => useContext(DataContext)

export const DataProvider = ({children}) => {
    const store = useReducer(reducer, storedData || initialState)
    const [state, ] = store
    useEffect(() => {
        console.log("STATE:" + state)
        localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(state))
    }, [state])

    return (
        <DataContext.Provider value={store}>
            {children}
        </DataContext.Provider>
    )
}

export default useDataContext
