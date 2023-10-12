import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

import { useAppContext, SET_THEME, THEME_DARK, THEME_LIGHT } from "../providers/ApplicationProvider"

const ThemeButton = () => {
    const [{theme}, dispatch] = useAppContext()

    const handleButton = () => {
        if (theme === "light") {
            dispatch({type: SET_THEME, payload: THEME_DARK})
            console.log("dark")
        } else {
            dispatch({type: SET_THEME, payload: THEME_LIGHT})
            console.log("light")
        }
    }

    return (
        <>
            {
                theme == "light" ?
                    <button type="button" onClick={handleButton}>Dark mode <FontAwesomeIcon icon={faMoon} /></button>
                    : <button type="button" onClick={handleButton}>Light mode <FontAwesomeIcon icon={faSun} /></button>
            }
        </>
    )
}

export default ThemeButton
