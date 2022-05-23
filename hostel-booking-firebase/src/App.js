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
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App" id="container">
      <UserAuthContextProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/card" element={<Cards />} />
            <Route path="/success" element={<Success />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/bhostel" element={<Bhostel />} />
            <Route path="/ghostel" element={<Ghostel />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </Router>
      </UserAuthContextProvider>

    </div>
  );
}

export default App;