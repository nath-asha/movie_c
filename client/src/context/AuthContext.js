// AuthContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const loadUser = async () => {
        try {
            const res = await axios.get('http://localhost:5000/auth'); // Adjust this endpoint if needed
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (err) {
            setIsAuthenticated(false);
            setUser(null);
        }
    };

    const login = async (formData) => {
        try {
            const res = await axios.post('http://localhost:5000/auth/login', formData);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (err) {
            setIsAuthenticated(false);
            setUser(null);
        }
    };

    const register = async (formData) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (err) {
            console.error(err); // Log the error for debugging
            setIsAuthenticated(false);
            setUser(null);
            throw err; // Optionally rethrow the error for handling in components
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, loadUser, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
