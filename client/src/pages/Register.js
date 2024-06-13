import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const { register } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        register({ username, password });
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={onChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required />
                </div>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;
