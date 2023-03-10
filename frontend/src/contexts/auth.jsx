import jwtDecode from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext({ isAuth: Boolean, isAdmin: Boolean });

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem('token');
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchingApi = async () => {
      if (!token) {
        return false;
      }

      try {
        await api.get('/auth', {
          headers: {
            'x-access-token': `Bearer ${token}`,
          },
        });

        return true;
      } catch (err) {
        console.log(err)
        return false;
      }
    };

    fetchingApi()
      .then((data) => {
        if (data === false) {
          if (token || token === '') {
            localStorage.removeItem('token');
          }
        }
        setIsAuth(data);

        const tokenDecoded = jwtDecode(token);

        if (tokenDecoded.isAdmin === true) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      })
      .catch(() => {
        setIsAuth(false);
      });
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuth: isAuth, isAdmin: isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
