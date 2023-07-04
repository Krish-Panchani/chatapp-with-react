
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Users from './pages/Users';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat';


export default function App() {
  return (
    <Router>
      <Routes>
        <>
          <Route path='/' element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='users' element={<Users />} />
          <Route path='chat' element={<Chat />} />
        </>
      </Routes>
    </Router>
  );
}
