import { useState } from "react";

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [alert1, setAlert1] = useState('');
    const [alert2, setAlert2] = useState('');
    const [alert3, setAlert3] = useState('');
    const [alert4, setAlert4] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // detect which input is changing and update the appropriate state
        if (name === 'name') {
            setAlert1('');
            return (setName(value));
        } else if (name === 'email') {
            setAlert2('');
            return (setEmail(value)); 
        } else if (name === 'subject') {
            setAlert3('');
            return (setSubject(value));
        } else if (name === 'message') {
            setAlert4('');
            return (setMessage(value));
        }
    };

    //handling blur prompts

    const handleBlur = (e) => {
        //getting the name and value of the input
        const { name, value } = e.target;
        //adjusting the corresponding state
        if (name === 'name' && value ==='') {
            return (setAlert1('This Field is Required.'))
        } else if (name === 'email' && value ==='') {
            return (setAlert2('This Field is Required.'))
        } else if (name === 'subject' && value ==='') {
            return (setAlert3('This Field is Required.'))
        } else if (name === 'message' && value ==='') {
            return (setAlert4('This Field is Required.'))
        }
    }


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
                <h2>Name</h2><p className="alert">{alert1}</p>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Your Name?"
                />
                <h2>E-mail</h2><p className="alert">{alert2}</p>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Your E-mail?"
                />
                <h2>Subject</h2><p className="alert">{alert3}</p>
                <input 
                    value={subject}
                    name="subject"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="What would you like to talk about?"
                />
                <h2>Message</h2><p className="alert">{alert4}</p>
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
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