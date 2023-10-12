import { useState, useEffect } from "react"
import ThemeButton from "./ThemeButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import "../styles/Header.css"

import { useAppContext } from "../providers/ApplicationProvider"
import { useDataContext, ADD_NOTE } from "../providers/DataProvider"

const Header = () => {
    const [{theme}] = useAppContext()
    const [, dispatch] = useDataContext()
    const [noteTitle, setNoteTitle] = useState("")
    const [noteText, setNoteText] = useState("")

    const handleSubmit = (title, text) => {
        inputTitle.style.border = ""
        inputTitle.placeholder = "Title"
        inputText.style.border = ""
        inputText.placeholder = "Text"

        if (title == "" || text == "") {
            if (title == "") {
                inputTitle.style.border = "3px solid red"
                inputTitle.placeholder = "You have to enter a title"
            }
            if (text == "") {
                inputText.style.border = "3px solid red"
                inputText.placeholder = "You have to enter a text"
            }
        } else {
            dispatch({ type: ADD_NOTE, payload: {title: title, text: text} })
            setNoteTitle("")
            setNoteText("")
        }
    }

    useEffect(() => {
        const inputTitle = document.getElementById("inputTitle")
        const inputText = document.getElementById("inputText")
    }, [])

    return (
        <header className={theme}>
            <div>
                <ThemeButton />
                <h1>Notepad App</h1>
                <button onClick={e => handleSubmit(noteTitle, noteText)}>Add note <FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div className="form">
                <input id="inputTitle" placeholder="Title" value={noteTitle} onChange={e => setNoteTitle(e.target.value)} onKeyUp={e => {if (e.key === "Enter") handleSubmit(noteTitle, noteText)}} />
                <input id="inputText" placeholder="Start writing" value={noteText} onChange={e => setNoteText(e.target.value)} onKeyUp={e => {if (e.key === "Enter") handleSubmit(noteTitle, noteText)}} />
            </div>
        </header>
    )
}

export default Header
