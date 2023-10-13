import Note from "./Note"
import classes from "./Notes.module.css"

import { useDataContext } from "../providers/DataProvider"

const Notes = () => {
    const [{notes}, ] = useDataContext()

    return (
        <div className={`${classes.notes}`}>
            {
                notes.map((note, index) => {
                    return (
                        <Note key={index} note={note} index={index} />
                    )
                })
            }
        </div>
    )
}

export default Notes
