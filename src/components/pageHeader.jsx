import { Link, useLocation } from 'react-router-dom';
import { createContext } from "react";

import LearningBar from './learningbar';

export const navContext = createContext();

export default function pageHeader() {
    const location = useLocation();
    return (
        <div>
            <section className="header">
                <nav>
                    <ul>
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={location.pathname === '/About' ? 'active' : ''}>
                            <Link to="/About">About</Link>
                        </li>
                        <li className={location.pathname === '/Contact' ? 'active' : ''}>
                            <Link to="/Contact">Contact</Link>
                        </li>
                        <li className={location.pathname === '/Projects' ? 'active' : ''}>
                            <Link to="/Projects">Portfolio</Link>
                        </li>
                        <li className={location.pathname === '/Blog' ? 'active' : ''}>
                            <Link to="/Blog">Blog</Link>
                        </li>
                    </ul>
                </nav>

                {/* <table>
                <tbody>
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
                </tbody>
            </table> */}
                <div>
                    <h1>Lucas H.</h1>
                    {/* <p>The H stands for Hallman.</p> */}
                </div>
                <img src='../assets/images/logo.png' alt='LH logo'></img>
            </section>
            <LearningBar />
        </div>
    )
};

//<p>-<p>