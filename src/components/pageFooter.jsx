import { personalInfo } from "./contactFunction";
import { useContext } from "react";
import { ThemeContext } from './ThemeContext';

export default function pageFooter() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <section>
            <br />
            <p>Made without sleep.</p>
            {personalInfo.email} &nbsp;
            {personalInfo.gitHub} &nbsp;
            <button onClick={toggleTheme}>Toggle Theme</button>
            <br />
        </section>
    )
}