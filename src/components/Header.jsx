import { useState, useEffect } from "react"
import ThemeButton from "./ThemeButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import classes from "./Header.module.css"

import { useAppContext } from "../providers/ApplicationProvider"
import { useDataContext, ADD_NOTE } from "../providers/DataProvider"

const Header = () => {
    const [{theme}] = useAppContext()
    const [, dispatch] = useDataContext()
    const [noteTitle, setNoteTitle] = useState("")
    const [noteText, setNoteText] = useState("")

    const themeClassName = theme

    const handleSubmit = (title, text) => {
        inputTitle.style.border = "3px solid #dadada"
        inputTitle.style.backgroundColor = "#dadada"
        inputTitle.style.color = "#213547"
        inputTitle.placeholder = "Title"
        inputText.style.border = "3px solid #dadada"
        inputText.style.backgroundColor = "#dadada"
        inputText.style.color = "#213547"
        inputText.placeholder = "Text"

        if (title == "" || text == "") {
            if (title == "") {
                inputTitle.style.border = "3px solid #f1aeb5"
                inputTitle.style.backgroundColor = "#f8d7da"
                inputTitle.style.color = "#58151c"
                inputTitle.placeholder = "You have to enter a title"
            }
            if (text == "") {
                inputText.style.border = "3px solid #f1aeb5"
                inputText.style.backgroundColor = "#f8d7da"
                inputText.style.color = "#58151c"
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
        <header className={`${classes[themeClassName]}`}>
            <div>
                <ThemeButton />
                <h1>Notepad App</h1>
                <button onClick={e => handleSubmit(noteTitle, noteText)}>Add note <FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div className={`${classes.form}`}>
                <input id="inputTitle" placeholder="Title" value={noteTitle} onChange={e => setNoteTitle(e.target.value)} onKeyUp={e => {if (e.key === "Enter") handleSubmit(noteTitle, noteText)}} />
                <input id="inputText" placeholder="Start writing" value={noteText} onChange={e => setNoteText(e.target.value)} onKeyUp={e => {if (e.key === "Enter") handleSubmit(noteTitle, noteText)}} />
            </div>
        </header>
    )
}

export default Header
