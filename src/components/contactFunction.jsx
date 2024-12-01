import { Link } from "react-router-dom";



const ButtonMailto = ({ mailto, label }) => {
    return (
        <button>
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        </button>
    );
};

const ButtonGitHub = ({ github, label }) => {
    return (
        <button>
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = github;
                    e.preventDefault();
                }}>
                {label}
            </Link>
        </button>
    );
};

 function Form() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // detect which input is changing and update the appropriate state
        if (name === 'name') {
            return (setName(value));
        } else if (name === 'email') {
            return (setEmail(value)); 
        } else if (name === 'message') {
            return (setMessage(value));
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        // take states from form inputs and arrange a mailto

        const preparedBody = `Hi Lucas, I'm ${name}! \n ${message}`
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(preparedBody);

        const mailtoLink = `mailto:${email}?subject=${encodedSubject}$body=${encodedBody}`

        window.open(mailtoLink, "_blank");
    };

    return (
        <div className="container text-center">
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your Name?"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your E-mail?"
                />
                <input 
                    value={subject}
                    name="subject"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="What would you like to talk about?"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Ask me a question, send me a joke, or just say hey!"
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}


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