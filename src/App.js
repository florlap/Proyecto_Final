
import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './Components/Login/Login';
import Reset from './Components/Login/Reset';
import LandingPage from './Components/LandingPage/LandingPage';
import Layout from './Components/Layout/Layout'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><LandingPage/></Layout>} />
      <Route path="/login" element={<Layout><Login /></Layout>} />
      <Route path="/reset" element={<Layout><Reset /></Layout>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;