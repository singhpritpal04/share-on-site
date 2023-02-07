import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { auth } from './config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <p>{auth.currentUser?.displayName}</p>
          <img src={auth.currentUser?.photoURL || 'NO_IMAGE'} />
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}