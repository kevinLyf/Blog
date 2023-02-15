import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Global from './styles/global';
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';
import Create from './pages/Create';
import Register from './pages/Register';
import { AuthProvider } from './contexts/auth';
import { AdminProvider } from './contexts/admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AuthProvider children={<Home />} />} />
        <Route exact path="/post/:id" element={<AuthProvider children={<Post />} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/create" element={<AdminProvider children={<Create />} />} />
      </Routes>
      <ToastContainer
        autoClose={2000}
        closeOnClick={true}
        theme="colored"
        pauseOnHover={false}
        position="bottom-right"
        limit={1}
      />
      <Global />
    </BrowserRouter>
  );
}

export default App;
