import React, { useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

const AuthLoader = ({ children }) => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return children;
};

export default AuthLoader;
