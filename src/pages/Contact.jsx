import { useState } from "react";

export default function Contact() {

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
        } else if (name === 'subject') {
            return (setSubject(value));
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
        <div className="contact">
            <form className="form" onSubmit={handleFormSubmit}>
                <p>Name:</p>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your Name?"
                />
                <p>E-mail:</p>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Your E-mail?"
                />
                <p>Subject:</p>
                <input 
                    value={subject}
                    name="subject"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="What would you like to talk about?"
                />
                <p>Message:</p>
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
            <div className="resume">See my Resume Here!</div>
        </div>
    );

    // Form first draft -- outdated

    // return (
    //     <section className="contact">
    //         <h1>Contact Me</h1>
    //         {/* Email Gen Form */}
    //         <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
    //         <h2>Email me here!</h2>
    //             <label for="name">Name:</label>
    //             <input type="text" id="name" name="name" placeholder="Your Name" required></input>

    //             <label for="email">Email:</label>
    //             <input type="email" id="email" name="email" placeholder="Your Email" required></input>

    //             <label for="message">Message:</label>
    //             <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
    //             <br />
    //             <button type="submit">Send</button>
    //         </form>
    //         <ul>
    //             <li>Email: Lucas.HallmanC@gmail.com</li>
    //             <li>Home Address</li>
    //             <li>Social Security Number</li>
    //         </ul>
    //     </section>
    // )
};