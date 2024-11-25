import { Link } from "react-router-dom";



const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

const ButtonGitHub = ({ github, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = github;
                e.preventDefault();
            }}>
            {label}
        </Link>
    );
};


export const personalInfo = {
    email: <ButtonMailto label='Questions? Email me!' mailto='mailto:lucas.hallmanc@gmail.com' />,
    gitHub: <ButtonGitHub label='See My Repositories Here!' github='https://github.com/lucashallman' />,
    shortBio: <blockquote className="shortbio">
        I'm Lucas Hallman, a dedicated web developer on the path to turning my passion for technology into a thriving career. Currently completing a full-stack development bootcamp, I'm building a strong foundation in modern web technologies. My expertise includes React-based HTML/CSS implementation, SQL and Postgres database management, and creative website design.
        <br />
        <br />
        I firmly believe that with enough work, anyone can master anything—a philosophy that drives me to constantly refine my coding skills and expand my knowledge. My creative pursuits, such as writing and painting, enhance my ability to approach coding challenges with fresh, concise solutions. As a gamer and media enthusiast, I understand the importance of intuitive design and user-centric development.
        <br />
        I'm excited to apply my growing skills and passion to collaborative projects and continue learning in a dynamic professional environment.
        </blockquote>
}