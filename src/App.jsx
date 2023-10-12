import { useEffect } from "react"
import Header from "./components/Header"
import Notes from "./components/Notes"
import "./App.css"

import { useAppContext } from "./providers/ApplicationProvider"

function App() {
    const [{theme}] = useAppContext()

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0]

        if (theme == "light") {
            body.style.backgroundColor = "#cdcdcd"
        } else {
            body.style.backgroundColor = "#333333"
        }
    }, [theme])

    return (
        <>
            <Header />
            <Notes />
        </>
    )
}

export default App
