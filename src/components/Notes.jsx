import Note from "./Note"
import "../styles/Notes.css"

import { useAppContext } from "../providers/ApplicationProvider"
import { useDataContext } from "../providers/DataProvider"

const Notes = () => {
    const [{theme}] = useAppContext()
    const [{notes}, ] = useDataContext()

    return (
        <div className={"notes " + "notes-" + theme}>
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
