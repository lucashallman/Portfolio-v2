import { Link, useLocation } from 'react-router-dom';
import { createContext } from "react";
import logo from '../assets/images/logo.png';

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

                <div>
                    <h1>Lucas H.</h1>
                    <p className='tagline'>The H stands for Hallman.</p>
                </div>
                <img src={logo} alt='LH logo'></img>
            </section>
        </div>
    )
};

//<p>-<p>