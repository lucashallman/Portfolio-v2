import { personalInfo } from "../components/contactFunction"

export default function About() {

    

    return (
        <section>
            <h2>Web Developer in Training | Passionate Problem Solver</h2>
            {personalInfo.shortBio}
        </section>
    )
};