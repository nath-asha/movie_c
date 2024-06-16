import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Movies from './pages/Movies';
import AuthLoader from './context/AuthLoader';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <AuthLoader>
      <ErrorBoundary>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </AuthLoader>
  );
};

export default App;
