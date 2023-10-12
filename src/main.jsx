import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { ApplicationProvider } from "./providers/ApplicationProvider"
import { DataProvider } from "./providers/DataProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
    <ApplicationProvider>
        <DataProvider>
            <App />
        </DataProvider>
    </ApplicationProvider>
)
