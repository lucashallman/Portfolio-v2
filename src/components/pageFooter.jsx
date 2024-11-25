import { personalInfo } from "./contactFunction"

export default function pageFooter() {
    return (
        <section>
            <p>Made without sleep.</p>
            {personalInfo.email} &nbsp;
            {personalInfo.gitHub}
            <br />
        </section>
    )
}