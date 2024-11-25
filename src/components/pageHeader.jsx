import { Link } from 'react-router-dom';

export default function pageHeader() {
    return (
        <section className="header">
            <table>
                <tr>
                    <th><Link to='/'>Home</Link></th>
                </tr>
                <tr>
                    <th><Link to='/About'>About</Link></th>
                </tr>
                <tr>
                    <th><Link to='/Projects'>Portfolio</Link></th>
                </tr>
                <tr>
                    <th><Link to='/Contact'>Contact</Link></th>
                </tr>
                <tr>
                    <th><Link to='/Blog'>Blog</Link></th>
                </tr>
                <tr>
                </tr>
            </table>
            <div>
                <h1>Lucas H.</h1>
            </div>
        </section>
    )
}

//<p>-<p>