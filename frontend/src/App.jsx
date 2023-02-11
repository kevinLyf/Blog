import Global from './styles/global';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Global />
    </BrowserRouter>
  );
}

export default App;
