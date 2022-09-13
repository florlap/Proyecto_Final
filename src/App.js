
import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './Components/Login/Login';
import Reset from './Components/Login/Reset';
import LandingPage from './Components/LandingPage/LandingPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
