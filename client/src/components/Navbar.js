import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    const onLogout = () => {
        logout();
    };

    const authLinks = (
        <>
            <li>
                <Link to="/movies">Movies</Link>
            </li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>{' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </>
    );

    return (
        <nav className="navbar">
            <h1>
                <Link to="/">Movie Catalogue</Link>
            </h1>
            <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
        </nav>
    );
};

export default Navbar;
