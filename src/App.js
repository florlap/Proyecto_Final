
import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './Components/Login/Login';
import Reset from './Components/Login/Reset';
import LandingPage from './Components/LandingPage/LandingPage';
import Layout from './Components/Layout/Layout'
import NotificationsAdmin from './Components/Notifications/NotificationsAdmin'
import Change from './Components/Login/Change'
import Principal from './Components/Principal/Principal'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><LandingPage/></Layout>} />

      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/change" element={<Change/>} />
      <Route path="/principal" element={<Layout><Principal/></Layout>} />
      <Route path="/notifications/admin" element={<Layout><NotificationsAdmin /></Layout>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
