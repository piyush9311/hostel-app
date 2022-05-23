import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Cards from './components/Cards';
import Success from './components/Success';
import Welcome from './components/Welcome';
import Bhostel from './components/Bhostel';
import Ghostel from './components/Ghostel';
import Room from './components/Room';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { UserProvider } from './context/UserAuthContext';

function App() {
  return (
    <div className="App" id="container">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/card" element={<Cards />} />
            <Route path="/success" element={<Success />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/bhostel" element={<Bhostel />} />
            <Route path="/ghostel" element={<Ghostel />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;