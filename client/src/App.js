import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Movies from './pages/Movies';
import { AuthProvider, AuthContext } from './context/AuthContext';

const App = () => {
    const { loadUser } = useContext(AuthContext);

    useEffect(() => {
        loadUser();
    }, [loadUser]);

    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/movies" component={Movies} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
