import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Global from './styles/global';
import Header from './Header';
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/post/:id' element={<Post />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      <Global />
    </BrowserRouter>
  );
}

export default App;
