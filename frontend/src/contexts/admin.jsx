import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';

export const AdminContext = createContext({ isAdmin: Boolean });

export const AdminProvider = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate('/');
    }

    const isAdmin = jwtDecode(token).isAdmin;

    if (!isAdmin) {
      return navigate('/');
    }
  }, [token]);

  return (
    <AdminContext.Provider value={{ isAdmin: true }}>
      {children}
    </AdminContext.Provider>
  );
};
