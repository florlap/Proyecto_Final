
import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './Components/Login/Login';
import Reset from './Components/Login/Reset';
import LandingPage from './Components/LandingPage/LandingPage';
import Layout from './Components/Layout/Layout'
import NotificationsAdmin from './Components/Notifications/NotificationsAdmin'
import NotificationsTutor from './Components/Notifications/NotificationsTutor'
import Change from './Components/Login/Change'
import News from './Components/News/Carousel'
import Profile from './Components/Users/Profile'
import StudentsAdmin from './Components/Students/StudentsAdmin';
import UsersAdmin from './Components/Users/UsersAdmin'
import Favorites from './Components/FavsLanding/Favorites';
import CreateNews from './Components/News/CreateNews';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><LandingPage/></Layout>} />

      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/change" element={<Change/>} />
      <Route path="/notifications/admin" element={<Layout><NotificationsAdmin /></Layout>} />
      <Route path="/notifications/tutor" element={<Layout><NotificationsTutor /></Layout>} />
      <Route path="/students" element={<Layout><StudentsAdmin /></Layout>} />
      <Route path="/users" element={<Layout><UsersAdmin /></Layout>} />
      <Route path="/user/profile" element={<Layout><Profile /></Layout>} />

      <Route path="/noticias" element={<Layout><News/></Layout>} />
      <Route path="/favorites" element={<Layout><Favorites /></Layout>} />
      <Route path="/favsLanding" element={<Layout><Favorites /></Layout>} />
      <Route path="/crearNoticias" element={<Layout><CreateNews/></Layout>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
