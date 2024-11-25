import { personalInfo } from "./contactFunction"

export default function pageFooter() {
    return (
        <section>
            <p>Made without sleep.</p>
            <button>{personalInfo.email}</button> &nbsp;
            <button>{personalInfo.gitHub}</button>
        </section>
    )
}