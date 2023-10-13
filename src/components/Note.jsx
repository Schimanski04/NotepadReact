import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import classes from "./Note.module.css"

import { useAppContext } from "../providers/ApplicationProvider"
import { useDataContext, REMOVE_NOTE } from "../providers/DataProvider"

const Note = ({ note, index }) => {
    const [{theme}] = useAppContext()
    const [ , dispatch] = useDataContext()

    const themeClassName = theme

    return (
        <div className={`${classes.note} ${classes[themeClassName]}`}>
            <div className={`${classes.actionButtons}`}>
                <button type="button"><FontAwesomeIcon icon={faPenToSquare} /></button>
                <button type="button" onClick={e => {dispatch({type: REMOVE_NOTE, payload: index})}}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
        </div>
    )
}

export default Note
